import { describe, it, expect } from 'vitest';
import { TimelineSync } from '../src/engine/timelineSync';
import { ContradictionDetector } from '../src/engine/contradictionDetector';
import { benchmarkCaseDocket } from '../src/data/sampleCases';

describe('Task 2: TimelineSync & Contradiction Detection Engine', () => {
  it('should parse both 12-hour and 24-hour Indian time strings accurately', () => {
    const t1 = TimelineSync.parseTimeToMinutes('incident at 21:45 hrs');
    expect(t1.minutes).toBe(21 * 60 + 45); // 1305 minutes

    const t2 = TimelineSync.parseTimeToMinutes('incident at 6:15 PM');
    expect(t2.minutes).toBe(18 * 60 + 15); // 1095 minutes

    const t3 = TimelineSync.parseTimeToMinutes('happened at 9:30 AM');
    expect(t3.minutes).toBe(9 * 60 + 30);
  });

  it('should detect lighting and visibility conditions correctly', () => {
    expect(TimelineSync.detectLightCondition('It was pitch dark due to blackout')).toBe('DARK_BLACKOUT');
    expect(TimelineSync.detectLightCondition('broad daylight with sun out')).toBe('DAYLIGHT');
  });

  it('should detect planted temporal clash between FIR and Deposition', () => {
    const result = ContradictionDetector.analyzeDocket(benchmarkCaseDocket);
    const temporal = result.contradictions.find(c => c.category === 'TEMPORAL_CLASH');
    expect(temporal).toBeDefined();
    expect(temporal?.severity).toBe('FATAL_IMPEACHMENT');
  });

  it('should detect weapon escalation contradiction (wooden stick vs butcher knife)', () => {
    const result = ContradictionDetector.analyzeDocket(benchmarkCaseDocket);
    const weapon = result.contradictions.find(c => c.category === 'WEAPON_DISCREPANCY');
    expect(weapon).toBeDefined();
    expect(weapon?.severity).toBe('FATAL_IMPEACHMENT');
  });

  it('should detect fatal medical contradiction (stabbing vs blunt trauma / no incised wounds)', () => {
    const result = ContradictionDetector.analyzeDocket(benchmarkCaseDocket);
    const medical = result.contradictions.find(c => c.category === 'MEDICAL_CONFLICT');
    expect(medical).toBeDefined();
    expect(medical?.statutoryReference).toContain('Ram Narain');
  });

  it('should detect material omission regarding co-accused Sunny', () => {
    const result = ContradictionDetector.analyzeDocket(benchmarkCaseDocket);
    const omission = result.contradictions.find(c => c.category === 'MATERIAL_OMISSION');
    expect(omission).toBeDefined();
  });

  it('should calculate credibility damage score >= 75% for high-contradiction trial', () => {
    const result = ContradictionDetector.analyzeDocket(benchmarkCaseDocket);
    expect(result.credibilityScore).toBeGreaterThanOrEqual(75);
    expect(result.summary.fatalCount).toBeGreaterThanOrEqual(2);
  });
});
