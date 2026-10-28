'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Play, 
  Pause, 
  RotateCcw, 
  Download, 
  Sparkles, 
  Scale, 
  Clock, 
  ShieldAlert, 
  Target, 
  FileText, 
  Gavel, 
  Volume2, 
  CheckCircle2,
  ChevronRight,
  Maximize2
} from 'lucide-react';

interface VideoWalkthroughModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoWalkthroughModal: React.FC<VideoWalkthroughModalProps> = ({ isOpen, onClose }) => {
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [isRecording, setIsRecording] = useState(false);
  const [recordProgress, setRecordProgress] = useState(0);

  const totalDuration = 70; // 70 seconds presentation

  // Auto-advance timer
  useEffect(() => {
    let interval: any = null;
    if (isOpen && isPlaying) {
      interval = setInterval(() => {
        setCurrentSeconds(prev => {
          if (prev >= totalDuration) {
            setIsPlaying(false);
            return totalDuration;
          }
          return prev + 1;
        });
      }, 1000 / speed);
    }
    return () => clearInterval(interval);
  }, [isOpen, isPlaying, speed]);

  if (!isOpen) return null;

  // Derive current scene (0-10s: Scene 1, 10-22s: Scene 2, 22-34s: Scene 3, 34-48s: Scene 4, 48-60s: Scene 5, 60-70s: Scene 6)
  const getScene = (sec: number) => {
    if (sec < 10) return 1;
    if (sec < 22) return 2;
    if (sec < 34) return 3;
    if (sec < 48) return 4;
    if (sec < 60) return 5;
    return 6;
  };

  const currentScene = getScene(currentSeconds);

  const scenes = [
    { num: 1, title: 'Hook & Core Problem', duration: '0:00 - 0:10' },
    { num: 2, title: 'War Room & Audio Steno', duration: '0:10 - 0:22' },
    { num: 3, title: 'Solar Lux Scrubber', duration: '0:22 - 0:34' },
    { num: 4, title: 'Contradiction Matrix', duration: '0:34 - 0:48' },
    { num: 5, title: '4-Stage Question Tree', duration: '0:48 - 1:00' },
    { num: 6, title: 'Outro & Submission', duration: '1:00 - 1:10' }
  ];

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-title"
        className="relative w-full max-w-6xl max-h-[95vh] flex flex-col rounded-2xl border border-gold-500/40 bg-court-950 text-parchment-100 shadow-2xl overflow-hidden"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-court-700 bg-court-900/90 px-6 py-3.5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold-500/15 border border-gold-500/30 text-gold-400">
              <Gavel className="h-4 w-4" />
            </div>
            <div>
              <h2 id="video-title" className="font-serif text-base font-bold text-parchment-50 flex items-center gap-2">
                NyayaCross 70-Second Official Walkthrough Video
                <span className="font-mono text-[10px] rounded bg-gold-500/15 border border-gold-500/30 px-2 py-0.5 text-gold-300">
                  REMOTION POWERED
                </span>
              </h2>
              <p className="text-xs text-parchment-400">
                HackIndia 2026 AI for Lawyers Track • Cinematic High-Stakes Presentation
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close video player"
              className="rounded-lg border border-court-700 bg-court-850 p-2 text-parchment-400 hover:bg-court-800 hover:text-parchment-100 transition-all"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Video Canvas Area */}
        <div className="flex-1 bg-black relative flex items-center justify-center min-h-[480px] p-6 overflow-hidden select-none">
          {/* Subtle gold spotlight in background */}
          <div className="absolute w-[600px] h-[600px] rounded-full bg-gold-500/5 blur-[100px] pointer-events-none" />

          {/* =========================================================================
              SCENE 1: HOOK & TITLE (0-10s)
              ========================================================================= */}
          {currentScene === 1 && (
            <div className="text-center space-y-5 animate-in fade-in zoom-in-95 duration-500 max-w-4xl z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-bold text-gold-400 tracking-wider uppercase font-mono">
                <span>🏛️ HACKINDIA 2026 • AI FOR LAWYERS</span>
              </div>
              <h1 className="font-serif text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-parchment-50 via-gold-300 to-gold-500 bg-clip-text text-transparent drop-shadow-lg">
                NYAYACROSS
              </h1>
              <p className="font-sans text-xl sm:text-2xl font-semibold text-parchment-300 max-w-2xl mx-auto leading-relaxed">
                AI Trial War Room & Witness Cross-Examination Contradiction Engine
              </p>
              <div className="rounded-xl border border-crimson-500/40 bg-crimson-950/40 p-5 max-w-2xl mx-auto shadow-crimson-glow">
                <span className="font-mono text-xs font-bold text-crimson-400 uppercase tracking-wider block mb-1">
                  ⚡ THE REALITY OF INDIAN TRIAL COURTS
                </span>
                <p className="text-sm text-parchment-200 leading-relaxed">
                  Criminal cases aren't decided by chatting with contracts. They are won or lost under{' '}
                  <strong className="text-gold-400">Section 145 IEA / Section 148 BSA</strong> when litigators prove eyewitnesses lied.
                </p>
              </div>
            </div>
          )}

          {/* =========================================================================
              SCENE 2: ACTIVE TRIAL WAR ROOM (10-22s)
              ========================================================================= */}
          {currentScene === 2 && (
            <div className="w-full max-w-5xl space-y-4 animate-in fade-in duration-500 z-10">
              <div className="flex items-center justify-between border-b border-court-700 pb-3">
                <span className="font-serif text-xl font-bold text-gold-400">
                  WAR ROOM: State of Maharashtra vs. Vikram Shinde (SC/842/2025)
                </span>
                <span className="font-mono text-xs text-crimson-400 font-bold bg-crimson-950/80 px-2.5 py-1 rounded border border-crimson-500/40">
                  BNS 103(1) MURDER & IPC 302
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 rounded-xl border border-court-700 bg-court-900/90 p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-sm font-bold text-parchment-100 flex items-center gap-2">
                      <Volume2 className="h-4 w-4 text-gold-400" />
                      Courtroom Stenographer Recording (142 WPM)
                    </span>
                    <span className="font-mono text-xs text-emerald-400">00:14:22 / 00:48:15</span>
                  </div>
                  {/* Animated Waveform */}
                  <div className="flex items-center gap-1.5 h-16 bg-court-950 rounded-lg p-2">
                    {Array.from({ length: 32 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="flex-1 rounded-sm bg-gold-400" 
                        style={{ 
                          height: `${Math.abs(Math.sin(currentSeconds * 2 + i * 0.3)) * 80 + 20}%`,
                          backgroundColor: i >= 10 && i <= 18 ? '#f43f5e' : '#d4af37'
                        }} 
                      />
                    ))}
                  </div>
                  <p className="text-xs text-parchment-300 font-mono italic">
                    "PW-1: 'I distinctly saw Vikram strike with a 10-inch iron butcher knife...'"
                  </p>
                </div>

                <div className="rounded-xl border border-crimson-500/60 bg-crimson-950/30 p-5 flex flex-col items-center justify-center text-center shadow-crimson-glow">
                  <span className="font-mono text-xs font-bold text-crimson-400 uppercase tracking-wider">
                    Prosecution Credibility Damage
                  </span>
                  <div className="font-mono text-6xl font-black text-crimson-400 my-2">
                    84%
                  </div>
                  <span className="text-xs font-bold text-parchment-200">
                    FATAL IMPEACHMENT LEVEL
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              SCENE 3: SOLAR ILLUMINATION GAUGE (22-34s)
              ========================================================================= */}
          {currentScene === 3 && (
            <div className="w-full max-w-4xl space-y-5 animate-in fade-in duration-500 z-10">
              <div className="border-b border-court-700 pb-3">
                <span className="font-serif text-2xl font-bold text-gold-400">
                  ☀️ PHOTOMETRIC SOLAR ILLUMINATION MAP (Sec 65B IEA / 63 BSA)
                </span>
                <p className="text-xs text-parchment-400">
                  Mathematical proof: Witness could not have identified accused's face.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="rounded-xl border border-court-700 bg-court-900/90 p-6 space-y-3">
                  <span className="font-mono text-xs font-bold text-azure-400 uppercase">
                    Astronomical Lux Engine
                  </span>
                  <div className="font-mono text-5xl font-black text-crimson-400">
                    0 LUX
                  </div>
                  <span className="text-sm font-semibold text-parchment-200 block">
                    PITCH DARK BLACKOUT (Sun Elevation -38.2°)
                  </span>
                  <p className="text-xs text-parchment-400 leading-relaxed">
                    At 21:45 PM on incident night, solar calculations and grid logs confirm total darkness.
                    Identification without test identification parade is vitiated under <em>State of U.P. v. Anthony</em>.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="rounded-lg border border-emerald-500/40 bg-emerald-950/20 p-4">
                    <span className="font-mono text-[11px] font-bold text-emerald-400 block">EX. P-1: FIR STATEMENT</span>
                    <span className="text-base font-bold text-parchment-100">21:45 PM (Night Blackout)</span>
                    <p className="text-xs text-parchment-300 mt-1">"Streetlights completely off... recognized only by voice."</p>
                  </div>
                  <div className="rounded-lg border border-crimson-500/50 bg-crimson-950/30 p-4">
                    <span className="font-mono text-[11px] font-bold text-crimson-400 block">EX. D-1: COURT TESTIMONY</span>
                    <span className="text-base font-bold text-parchment-100">18:15 PM (Broad Daylight)</span>
                    <p className="text-xs text-parchment-300 mt-1">"Incident occurred in bright daylight; I saw his face clearly." [FATAL +3.5H SHIFT]</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              SCENE 4: CONTRADICTION MATRIX (34-48s)
              ========================================================================= */}
          {currentScene === 4 && (
            <div className="w-full max-w-5xl space-y-4 animate-in fade-in duration-500 z-10">
              <div className="border-b border-court-700 pb-3">
                <span className="font-serif text-2xl font-bold text-gold-400">
                  ⚖️ WITNESS CONTRADICTION MATRIX (4 Flagged Inconsistencies)
                </span>
                <p className="text-xs text-parchment-400">
                  Cross-referenced against Landmark Supreme Court Precedents
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-crimson-500/60 bg-court-900/90 p-4">
                  <span className="font-mono text-[10px] font-bold text-crimson-400 bg-crimson-950 px-2 py-0.5 rounded border border-crimson-500/40">
                    FATAL IMPEACHMENT
                  </span>
                  <h4 className="font-serif text-base font-bold text-parchment-50 mt-2">
                    Temporal Shift (+3.5 Hours)
                  </h4>
                  <p className="text-xs text-parchment-300 mt-1">
                    FIR reported 21:45 PM blackout; shifted to 18:15 PM daylight in court deposition.
                  </p>
                </div>

                <div className="rounded-xl border border-crimson-500/60 bg-court-900/90 p-4">
                  <span className="font-mono text-[10px] font-bold text-crimson-400 bg-crimson-950 px-2 py-0.5 rounded border border-crimson-500/40">
                    FATAL IMPEACHMENT
                  </span>
                  <h4 className="font-serif text-base font-bold text-parchment-50 mt-2">
                    Weapon Escalation (Wooden Stick vs Knife)
                  </h4>
                  <p className="text-xs text-parchment-300 mt-1">
                    Witness upgraded weapon from a blunt wooden lathi in 161 statement to a butcher knife.
                  </p>
                </div>

                <div className="rounded-xl border border-crimson-500/60 bg-court-900/90 p-4">
                  <span className="font-mono text-[10px] font-bold text-crimson-400 bg-crimson-950 px-2 py-0.5 rounded border border-crimson-500/40">
                    RAM NARAIN PRECEDENT (SC)
                  </span>
                  <h4 className="font-serif text-base font-bold text-parchment-50 mt-2">
                    Direct Medical Impossibility
                  </h4>
                  <p className="text-xs text-parchment-300 mt-1">
                    Witness swore victim was stabbed repeatedly. Autopsy certifies ZERO incised wounds.
                  </p>
                </div>

                <div className="rounded-xl border border-amber-500/60 bg-court-900/90 p-4">
                  <span className="font-mono text-[10px] font-bold text-amber-400 bg-amber-950 px-2 py-0.5 rounded border border-amber-500/40">
                    TAHSILDAR SINGH (1959 SC)
                  </span>
                  <h4 className="font-serif text-base font-bold text-parchment-50 mt-2">
                    Material Omission of Co-Accused
                  </h4>
                  <p className="text-xs text-parchment-300 mt-1">
                    Sunny was absent in police statement, but falsely given an active holding role at trial.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              SCENE 5: 4-STAGE QUESTION TREE (48-60s)
              ========================================================================= */}
          {currentScene === 5 && (
            <div className="w-full max-w-5xl space-y-4 animate-in fade-in duration-500 z-10">
              <div className="border-b border-court-700 pb-3 flex items-center justify-between">
                <div>
                  <span className="font-serif text-2xl font-bold text-gold-400">
                    🎯 4-STAGE CROSS-EXAMINATION DOCTRINE
                  </span>
                  <p className="text-xs text-parchment-400">
                    Surgical entrapment under Section 145 IEA / 148 BSA
                  </p>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    Simulated: CONCEDES (YES)
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
                <div className="rounded-lg border border-court-700 bg-court-900 p-3 space-y-1">
                  <span className="font-mono font-bold text-azure-400 block">STAGE 1: COMMIT</span>
                  <p className="text-parchment-200">"You testified on oath today you saw stabbing with a knife?"</p>
                </div>
                <div className="rounded-lg border border-court-700 bg-court-900 p-3 space-y-1">
                  <span className="font-mono font-bold text-amber-400 block">STAGE 2: FOUNDATION</span>
                  <p className="text-parchment-200">"You were 5 feet away and spoke truthfully to police in Ex. P-1?"</p>
                </div>
                <div className="rounded-lg border border-crimson-500/60 bg-court-900 p-3 space-y-1 shadow-crimson-glow">
                  <span className="font-mono font-bold text-crimson-400 block">STAGE 3: CONFRONT</span>
                  <p className="text-parchment-100 font-bold">"Autopsy Ex. P-4 rules out knife wounds. Isn't this story a complete fiction?"</p>
                </div>
                <div className="rounded-lg border border-gold-500/50 bg-court-900 p-3 space-y-1">
                  <span className="font-mono font-bold text-gold-400 block">STAGE 4: IMPEACH</span>
                  <p className="text-parchment-200">"Pray to mark contradiction portion 'A' under Sec 145 IEA on record."</p>
                </div>
              </div>

              <div className="rounded-xl border border-court-700 bg-court-900/90 p-4 flex items-center justify-between">
                <div className="text-xs">
                  <strong className="text-gold-400 block mb-1">PROSECUTION OBJECTION FORECAST:</strong>
                  <span className="text-parchment-300">Public Prosecutor: "Objection! Defense counsel is arguing with the witness."</span>
                </div>
                <div className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950 px-3 py-1.5 rounded border border-emerald-500/40">
                  JUDGE: OBJECTION OVERRULED
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              SCENE 6: OUTRO & SUBMISSION (60-70s)
              ========================================================================= */}
          {currentScene === 6 && (
            <div className="text-center space-y-5 animate-in fade-in zoom-in-95 duration-500 max-w-4xl z-10">
              <div className="text-5xl">⚖️</div>
              <h2 className="font-serif text-5xl font-extrabold text-gold-400">
                NYAYACROSS
              </h2>
              <p className="text-xl font-semibold text-parchment-200">
                Litigation Combat Intelligence for Real Trial Advocates
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <span className="rounded-lg bg-court-900 border border-court-700 px-4 py-2 text-xs font-mono text-parchment-200">
                  ⚡ 0ms Client-Side Privacy
                </span>
                <span className="rounded-lg bg-court-900 border border-court-700 px-4 py-2 text-xs font-mono text-parchment-200">
                  🏛️ Sec 145 IEA / 148 BSA
                </span>
                <span className="rounded-lg bg-court-900 border border-court-700 px-4 py-2 text-xs font-mono text-parchment-200">
                  📬 AgentMail: devlopergauravai@agentmail.to
                </span>
              </div>

              <div className="pt-4">
                <a 
                  href="https://nyaya-cross.vercel.app/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-block rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-8 py-3 text-sm font-bold text-court-950 shadow-gold-glow hover:brightness-110"
                >
                  🌐 Live Application: https://nyaya-cross.vercel.app/
                </a>
              </div>

              <div className="text-xs text-parchment-400 pt-2 font-mono">
                Built for HackIndia 2026 • Gaurav Shivhare & Antigravity
              </div>
            </div>
          )}
        </div>

        {/* =========================================================================
            BOTTOM CONTROLLER & TIMELINE SCRUBBER
            ========================================================================= */}
        <div className="border-t border-court-700 bg-court-900/95 px-6 py-4 space-y-3">
          {/* Timeline Progress Bar */}
          <div className="relative w-full h-2 bg-court-800 rounded-full cursor-pointer overflow-hidden"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const newSec = Math.floor((clickX / rect.width) * totalDuration);
              setCurrentSeconds(Math.min(totalDuration, Math.max(0, newSec)));
            }}
          >
            <div 
              className="h-full bg-gradient-to-r from-gold-500 via-amber-400 to-gold-300 transition-all duration-300"
              style={{ width: `${(currentSeconds / totalDuration) * 100}%` }}
            />
          </div>

          {/* Scene Beads */}
          <div className="flex items-center justify-between text-[11px] font-mono text-parchment-400">
            {scenes.map(s => (
              <button
                key={s.num}
                type="button"
                onClick={() => {
                  if (s.num === 1) setCurrentSeconds(0);
                  if (s.num === 2) setCurrentSeconds(10);
                  if (s.num === 3) setCurrentSeconds(22);
                  if (s.num === 4) setCurrentSeconds(34);
                  if (s.num === 5) setCurrentSeconds(48);
                  if (s.num === 6) setCurrentSeconds(60);
                }}
                className={`flex items-center gap-1 transition-colors hover:text-gold-300 ${
                  currentScene === s.num ? 'text-gold-400 font-bold' : ''
                }`}
              >
                <span>Scene {s.num}: {s.title}</span>
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1.5 rounded-lg bg-gold-500 hover:bg-gold-400 px-4 py-1.5 text-xs font-bold text-court-950 transition-all"
              >
                {isPlaying ? <Pause className="h-3.5 w-3.5 fill-current" /> : <Play className="h-3.5 w-3.5 fill-current" />}
                <span>{isPlaying ? 'Pause' : 'Play Walkthrough'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setCurrentSeconds(0);
                  setIsPlaying(true);
                }}
                className="rounded-lg border border-court-700 bg-court-850 p-1.5 text-parchment-400 hover:text-parchment-100"
                title="Restart Walkthrough"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>

              <div className="font-mono text-xs text-parchment-200 tabular-nums">
                {formatTime(currentSeconds)} / {formatTime(totalDuration)}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Speed Buttons */}
              <div className="flex items-center rounded-lg border border-court-700 bg-court-850 p-0.5 text-xs font-mono">
                {[1, 1.25, 1.5].map(s => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSpeed(s)}
                    className={`px-2 py-0.5 rounded ${speed === s ? 'bg-gold-500/20 text-gold-300 font-bold' : 'text-parchment-400'}`}
                  >
                    {s}x
                  </button>
                ))}
              </div>

              <div className="text-xs text-parchment-400">
                Tip: You can screen-record this directly in full screen using Loom / OBS!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
