import { TrialDocument, FactNode } from '../types/trial';

export interface NormalizedEvent {
  docId: string;
  sourceExhibit: string;
  witnessName: string;
  rawTime: string;
  minutesFromMidnight: number | null;
  lightCondition: 'DAYLIGHT' | 'DARK_BLACKOUT' | 'STREETLIGHTS' | 'UNKNOWN';
  weaponStated: string;
  overtAct: string;
  injuryClaimed: string;
  quote: string;
  page: number;
}

/**
 * Defensive sanitizer to neutralize hostile XSS vectors, javascript URIs, and event handlers
 */
export function sanitizeInput(input: string): string {
  if (!input || typeof input !== 'string') return '';
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '[SANITIZED_SCRIPT]')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '[SANITIZED_IFRAME]')
    .replace(/javascript\s*:/gi, 'blocked_uri:')
    .replace(/\bon\w+\s*=/gi, 'blocked_event=')
    .replace(/\x00/g, '')
    .trim();
}

export class TimelineSync {
  /**
   * Parse Indian police & deposition time strings into minutes from midnight (0 - 1439).
   * Hardened against negative strings, invalid ranges, ReDoS payloads, and malformed inputs.
   */
  public static parseTimeToMinutes(text: string): { raw: string; minutes: number | null } {
    if (!text || typeof text !== 'string') {
      return { raw: '', minutes: null };
    }

    // Guard against ReDoS: bound buffer processing to 200,000 characters
    const safeText = text.slice(0, 200000);

    // Explicit check for negative times (e.g. -05:00, -5:00 PM, - 18:30)
    // Matches if a negative sign directly precedes the time structure
    const negativeTimeCheck = /(?:^|\s)[-–—]\s*(?:\d{1,2}:\d{2})/i;
    if (negativeTimeCheck.test(safeText)) {
      return { raw: '', minutes: null };
    }

    // 12-hour format: 1:00 AM - 12:59 PM (requires AM/PM)
    // Disallows preceding negative signs or word characters
    const match12 = safeText.match(/(?<![-–—\w])([1-9]|1[0-2]):([0-5][0-9])\s*(AM|PM)\b/i);

    if (match12) {
      // Double-check no negative sign immediately before the match
      const matchIndex = match12.index ?? 0;
      const precedingChar = matchIndex > 0 ? safeText[matchIndex - 1] : '';
      if (precedingChar === '-' || precedingChar === '–' || precedingChar === '—') {
        return { raw: '', minutes: null };
      }

      let hours = parseInt(match12[1], 10);
      const mins = parseInt(match12[2], 10);
      const mer = match12[3].toUpperCase();
      if (mer === 'PM' && hours < 12) hours += 12;
      if (mer === 'AM' && hours === 12) hours = 0;

      const totalMins = hours * 60 + mins;
      if (totalMins < 0 || totalMins >= 1440) {
        return { raw: '', minutes: null };
      }

      return { raw: match12[0], minutes: totalMins };
    }

    // 24-hour format: 00:00 to 23:59.
    // Disallows preceding negative signs or word characters, and disallows AM/PM suffixes (e.g. 13:00 PM is invalid)
    const match24 = safeText.match(/(?<![-–—\w])([01]?[0-9]|2[0-3]):([0-5][0-9])(?:\s*hrs)?\b(?!\s*(?:AM|PM))/i);

    if (match24) {
      const matchIndex = match24.index ?? 0;
      const precedingChar = matchIndex > 0 ? safeText[matchIndex - 1] : '';
      if (precedingChar === '-' || precedingChar === '–' || precedingChar === '—') {
        return { raw: '', minutes: null };
      }

      const hours = parseInt(match24[1], 10);
      const mins = parseInt(match24[2], 10);

      const totalMins = hours * 60 + mins;
      if (totalMins < 0 || totalMins >= 1440) {
        return { raw: '', minutes: null };
      }

      return { raw: match24[0], minutes: totalMins };
    }

    return { raw: '', minutes: null };
  }

  public static detectLightCondition(text: string): 'DAYLIGHT' | 'DARK_BLACKOUT' | 'STREETLIGHTS' | 'UNKNOWN' {
    if (!text || typeof text !== 'string') return 'UNKNOWN';
    const lower = text.slice(0, 50000).toLowerCase();
    if (lower.includes('pitch dark') || lower.includes('blackout') || lower.includes('lights were off') || lower.includes('dark alley')) {
      return 'DARK_BLACKOUT';
    }
    if (lower.includes('broad daylight') || lower.includes('sun was out') || lower.includes('afternoon sun')) {
      return 'DAYLIGHT';
    }
    if (lower.includes('bright') || lower.includes('streetlights')) {
      return 'STREETLIGHTS';
    }
    return 'UNKNOWN';
  }

  public static extractEvent(doc: TrialDocument): NormalizedEvent {
    if (!doc) {
      return {
        docId: 'UNKNOWN',
        sourceExhibit: 'UNKNOWN',
        witnessName: 'Unknown Witness',
        rawTime: '',
        minutesFromMidnight: null,
        lightCondition: 'UNKNOWN',
        weaponStated: 'unspecified',
        overtAct: 'assault',
        injuryClaimed: 'unspecified',
        quote: '',
        page: 1
      };
    }

    const rawContent = typeof doc.content === 'string' ? doc.content : '';
    const content = sanitizeInput(rawContent);
    const timeInfo = this.parseTimeToMinutes(content);
    const light = this.detectLightCondition(content);
    
    // Weapon extraction heuristics
    let weapon = 'unspecified';
    const lower = content.toLowerCase();
    if (lower.includes('butcher\'s knife') || lower.includes('butcher knife')) weapon = 'butcher\'s knife';
    else if (lower.includes('knife')) weapon = 'knife';
    else if (lower.includes('danda') || lower.includes('wooden stick') || lower.includes('lathi')) weapon = 'wooden stick / danda';
    else if (lower.includes('iron rod')) weapon = 'iron rod';
    else if (lower.includes('firearm') || lower.includes('revolver')) weapon = 'firearm';

    // Overt act
    let act = 'assault';
    if (lower.includes('stabbed') || lower.includes('stabbing')) act = 'stabbing';
    else if (lower.includes('struck') || lower.includes('hit')) act = 'blunt blow / strike';

    const safePage = typeof doc.pageCount === 'number' && doc.pageCount > 0 ? doc.pageCount : 1;
    const safeWitness = sanitizeInput(doc.witnessName || doc.author || 'Unknown Witness');

    return {
      docId: doc.id || 'UNKNOWN',
      sourceExhibit: doc.sourceExhibit || 'Ex. ?',
      witnessName: safeWitness,
      rawTime: timeInfo.raw,
      minutesFromMidnight: timeInfo.minutes,
      lightCondition: light,
      weaponStated: weapon,
      overtAct: act,
      injuryClaimed: lower.includes('chest') ? 'chest/abdomen wounds' : 'back/head blow',
      quote: content.slice(0, 180),
      page: safePage
    };
  }
}
