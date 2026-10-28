'use client';

import React, { useState } from 'react';
import { 
  Clock, 
  AlertTriangle, 
  Moon, 
  Sun, 
  ArrowRight, 
  ShieldAlert, 
  Eye, 
  Zap, 
  Sliders, 
  Compass,
  FileText
} from 'lucide-react';
import { TrialDocument } from '../types/trial';
import { TimelineSync } from '../engine/timelineSync';

interface TimelineVisualizerProps {
  documents: TrialDocument[];
}

export const TimelineVisualizer: React.FC<TimelineVisualizerProps> = ({ documents }) => {
  // Interactive illumination slider between 18:00 and 22:00
  const [sliderTimeMinutes, setSliderTimeMinutes] = useState<number>(1095); // 18:15 (18*60 + 15)

  // Dynamically extract core comparison documents
  const firDoc = documents.find(d => d.type === 'FIR') || documents[0];
  const depDoc = documents.find(d => d.type === 'DEPOSITION_CHIEF') || documents[documents.length - 1];
  const firEvent = firDoc ? TimelineSync.extractEvent(firDoc) : null;
  const depEvent = depDoc ? TimelineSync.extractEvent(depDoc) : null;

  // Calculate lumen percentage based on time (18:15 = ~95%, 19:30 = sunset 40%, 21:00+ = 0% blackout)
  const calculateLumens = (mins: number) => {
    if (mins <= 1110) return 96; // 18:30
    if (mins <= 1170) return 45; // 19:30 dusk
    if (mins <= 1230) return 15; // 20:30 night
    return 0; // 21:45 blackout
  };

  const formatSliderTime = (mins: number) => {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    const ampm = h >= 12 ? 'PM' : 'AM';
    const displayH = h % 12 || 12;
    return `${displayH}:${m.toString().padStart(2, '0')} ${ampm} (${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')} hrs)`;
  };

  const currentLumen = calculateLumens(sliderTimeMinutes);

  return (
    <div className="rounded-xl border border-court-700 bg-court-850 p-6 shadow-2xl relative overflow-hidden">
      {/* Subtle top brass line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-court-700 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/25">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-base font-bold text-parchment-50">
                Trial Chronology & Visibility Discrepancy Map
              </h3>
              <span className="font-mono rounded bg-court-750 px-2 py-0.5 text-[10px] text-gold-300 border border-court-650">
                TEMPORAL CLASH ENGINE
              </span>
            </div>
            <p className="mt-0.5 text-xs text-parchment-400 font-sans">
              Photometric ocular verification: comparing FIR initial statement against oral court deposition.
            </p>
          </div>
        </div>

        {/* Fatal Divergence Badge */}
        <div className="flex items-center gap-2 rounded-lg bg-crimson-950/80 px-3 py-1.5 border border-crimson-500/40 shadow-crimson-glow animate-fatal-pulse">
          <AlertTriangle className="h-4 w-4 text-crimson-400 shrink-0" />
          <span className="font-mono text-xs font-bold text-crimson-300">
            Δ 3.5-Hour Narrative Shift (FATAL)
          </span>
        </div>
      </div>

      {/* =========================================================================
          VISUAL ILLUMINATION & TIME GAUGE
          ========================================================================= */}
      <div className="mt-5 rounded-xl border border-court-700 bg-court-900/90 p-5 shadow-inner">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-court-800 pb-3">
          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-parchment-200">
              Photometric Illumination & Ambient Lumen Gauge
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="text-parchment-400">Simulated Trial Hour:</span>
            <span className="font-bold text-gold-300 bg-court-950 px-2.5 py-1 rounded border border-court-700">
              {formatSliderTime(sliderTimeMinutes)}
            </span>
          </div>
        </div>

        {/* Dual Illumination Gauge Comparison */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Broad Daylight Marker (18:15 hrs) */}
          <button 
            type="button"
            aria-pressed={sliderTimeMinutes <= 1110}
            aria-label="Simulate 18:15 hrs Court Testimony daylight condition with 96% natural daylight"
            onClick={() => setSliderTimeMinutes(1095)}
            className={`w-full text-left cursor-pointer rounded-xl border p-4 transition-all duration-300 relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
              sliderTimeMinutes <= 1110 
                ? 'border-amber-400/80 bg-gradient-to-br from-amber-500/15 via-court-900 to-court-900 shadow-gold-glow ring-1 ring-amber-400/40' 
                : 'border-court-800 bg-court-950/60 opacity-70 hover:opacity-100'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-bold text-amber-300 font-mono">
                <Sun className="h-4 w-4 text-amber-400 animate-spin-slow" />
                18:15 hrs (6:15 PM) — COURT TESTIMONY
              </span>
              <span className="rounded bg-amber-400/15 px-2 py-0.5 text-[10px] font-mono font-bold text-amber-300 border border-amber-400/30">
                96% Natural Daylight
              </span>
            </div>

            <div className="mt-3 flex items-center gap-2">
              <div className="h-2 flex-1 rounded-full bg-court-800 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-amber-400 to-yellow-300 w-[96%]"></div>
              </div>
              <span className="font-mono text-[11px] text-amber-300">~12,000 Lux</span>
            </div>

            <p className="mt-2.5 text-xs text-parchment-300 font-sans leading-relaxed">
              <strong>Witness PW-1 sworn claim:</strong> "The incident took place in broad daylight... I saw everything clearly with my own eyes."
            </p>
          </button>

          {/* Pitch Blackout Marker (21:45 hrs) */}
          <button 
            type="button"
            aria-pressed={sliderTimeMinutes >= 1290}
            aria-label="Simulate 21:45 hrs FIR Record pitch blackout condition with 0% ambient lumens"
            onClick={() => setSliderTimeMinutes(1305)}
            className={`w-full text-left cursor-pointer rounded-xl border p-4 transition-all duration-300 relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
              sliderTimeMinutes >= 1290 
                ? 'border-crimson-500/80 bg-gradient-to-br from-crimson-950/30 via-court-950 to-court-950 shadow-crimson-glow ring-1 ring-crimson-500/40' 
                : 'border-court-800 bg-court-950/60 opacity-70 hover:opacity-100'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-bold text-crimson-300 font-mono">
                <Moon className="h-4 w-4 text-indigo-400" />
                21:45 hrs (9:45 PM) — FIR RECORD
              </span>
              <span className="rounded bg-crimson-500/20 px-2 py-0.5 text-[10px] font-mono font-bold text-crimson-400 border border-crimson-500/30">
                0% Ambient Lumens
              </span>
            </div>

            <div className="mt-3 flex items-center gap-2">
              <div className="h-2 flex-1 rounded-full bg-court-800 overflow-hidden">
                <div className="h-full bg-indigo-900 w-[0%]"></div>
              </div>
              <span className="font-mono text-[11px] text-crimson-400">0 Lux (Blackout)</span>
            </div>

            <p className="mt-2.5 text-xs text-parchment-300 font-sans leading-relaxed">
              <strong>Contemporaneous FIR entry:</strong> "Power blackout in our galli... streetlights completely off... pitch dark. Could only recognize him by voice."
            </p>
          </button>
        </div>

        {/* Interactive Scrub Bar */}
        <div className="mt-4 pt-3 border-t border-court-800">
          <div className="flex items-center justify-between text-[11px] font-mono text-parchment-400 mb-1.5">
            <span className="flex items-center gap-1">
              <Sun className="h-3 w-3 text-amber-400" /> 18:00 (Sunlight)
            </span>
            <span className="text-gold-300">
              Interactive Solar-Cycle Scrub: {formatSliderTime(sliderTimeMinutes)}
            </span>
            <span className="flex items-center gap-1">
              <Moon className="h-3 w-3 text-indigo-400" /> 22:00 (Blackout)
            </span>
          </div>

          <input
            type="range"
            aria-label="Simulated trial hour solar-cycle scrubber"
            aria-valuemin={1080}
            aria-valuemax={1320}
            aria-valuenow={sliderTimeMinutes}
            aria-valuetext={formatSliderTime(sliderTimeMinutes)}
            min={1080}
            max={1320}
            step={15}
            value={sliderTimeMinutes}
            onChange={(e) => setSliderTimeMinutes(Number(e.target.value))}
            className="w-full h-2 bg-court-800 rounded-lg appearance-none cursor-pointer accent-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
          />
        </div>
      </div>

      {/* =========================================================================
          COMPARATIVE TIMELINE CARDS (With Subtle Glassmorphic Borders & Exhibit Badges)
          ========================================================================= */}
      <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Document 1: FIR Timestamp Card */}
        <div className="relative rounded-xl border border-azure-500/30 bg-court-900/80 court-glass p-5 transition-all hover:border-azure-500/60 shadow-lg">
          <div className="flex items-center justify-between border-b border-court-800 pb-2.5">
            <span className="rounded bg-azure-500/10 px-2.5 py-1 text-xs font-mono font-bold text-azure-400 border border-azure-500/30">
              {firDoc?.sourceExhibit || 'Ex. P-1'} • {firDoc?.title || 'FIR Record'}
            </span>
            <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-azure-300">
              <Moon className="h-4 w-4 text-indigo-400" />
              {firEvent?.rawTime || '21:45 hrs (9:45 PM)'}
            </div>
          </div>

          <div className="mt-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-parchment-400">
              Recorded by {firDoc?.author || 'Investigating Officer'}
            </div>
            <div className="mt-1 text-sm font-bold text-parchment-50">
              Contemporaneous Police Complaint (Day of Occurrence)
            </div>
          </div>

          <blockquote className="mt-3 rounded-lg border border-court-800 bg-court-950/80 p-3.5 text-xs italic text-parchment-200 leading-relaxed font-sans">
            "{firDoc?.content.slice(0, 260) || 'Today night at about 9:45 PM, there was a power blackout...'}"
          </blockquote>

          <div className="mt-4 flex items-center gap-2 rounded-lg bg-indigo-950/40 p-2.5 text-xs text-indigo-200 border border-indigo-900/60 font-mono">
            <Zap className="h-4 w-4 text-indigo-400 shrink-0" />
            <span><strong>GRID STATUS:</strong> {firEvent?.lightCondition === 'DARK_BLACKOUT' ? 'Blackout / Substation Power Tripped' : 'Normal Grid Operation'}</span>
          </div>
        </div>

        {/* Document 2: Courtroom Deposition Card */}
        <div className="relative rounded-xl border border-crimson-500/40 bg-court-900/80 court-glass p-5 transition-all hover:border-crimson-500/70 shadow-crimson-glow">
          <div className="flex items-center justify-between border-b border-court-800 pb-2.5">
            <span className="rounded bg-crimson-500/10 px-2.5 py-1 text-xs font-mono font-bold text-crimson-400 border border-crimson-500/30">
              {depDoc?.sourceExhibit || 'Ex. D-1'} • {depDoc?.title || 'Court Testimony'}
            </span>
            <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-amber-300">
              <Sun className="h-4 w-4 text-amber-400" />
              {depEvent?.rawTime || '18:15 hrs (6:15 PM)'}
            </div>
          </div>

          <div className="mt-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-parchment-400">
              {depDoc?.witnessName || depDoc?.author || 'Witness Under Oath'} (Examination-in-Chief)
            </div>
            <div className="mt-1 text-sm font-bold text-parchment-50">
              Trial Deposition Before Hon'ble Sessions Judge
            </div>
          </div>

          <blockquote className="mt-3 rounded-lg border border-court-800 bg-court-950/80 p-3.5 text-xs italic text-parchment-200 leading-relaxed font-sans">
            "{depDoc?.content.slice(0, 260) || 'The incident took place in broad daylight at around 6:15 PM...'}"
          </blockquote>

          <div className="mt-4 flex items-center gap-2 rounded-lg bg-crimson-950/40 p-2.5 text-xs text-crimson-200 border border-crimson-900/60 font-mono">
            <ShieldAlert className="h-4 w-4 text-crimson-400 shrink-0" />
            <span><strong>PERJURY STRIKE:</strong> Material timeline shift manufactured to defeat illumination defense</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          STRATEGIC ADVOCATE LITIGATION VALUE NOTE
          ========================================================================= */}
      <div className="mt-5 rounded-xl border border-gold-500/35 bg-gold-500/10 p-4 text-xs text-parchment-100 flex items-start gap-3 shadow-sm">
        <Compass className="h-5 w-5 text-gold-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-serif font-bold text-gold-300 tracking-wide uppercase text-xs">
            Supreme Court Doctrine on Photometric Visibility (Sec 145 IEA / 148 BSA):
          </span>
          <p className="mt-1 leading-relaxed text-parchment-200 font-sans">
            Where the complainant in his First Information Report specifically records that an occurrence took place during a total power outage in pitch darkness and identification was made merely by voice, his subsequent trial improvement asserting occurrence in broad daylight with high illumination constitutes a <strong>fatal contradiction that vitiates the entire prosecution case</strong> (<em>State of AP v. Punati Ramulu, 1993 AIR SC 2644</em>).
          </p>
        </div>
      </div>
    </div>
  );
};
