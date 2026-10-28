'use client';

import React, { useState, useEffect } from 'react';
import { 
  Scale, 
  ShieldAlert, 
  FileText, 
  Clock, 
  Target, 
  Printer, 
  ChevronRight, 
  AlertOctagon, 
  CheckCircle2, 
  Gavel,
  BookOpen,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  FileCheck,
  Activity,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Layers,
  Search,
  Radio,
  Share2
} from 'lucide-react';
import { benchmarkCaseDocket, allSampleDockets } from '../data/sampleCases';
import { CaseDocket } from '../types/trial';
import { AgentMailIntegrationCard } from './AgentMailIntegrationCard';
import { TimelineVisualizer } from './TimelineVisualizer';
import { ContradictionMatrix } from './ContradictionMatrix';
import { CrossExamTreeViewer } from './CrossExamTreeViewer';
import { ExhibitBinderModal } from './ExhibitBinderModal';

export const WarRoomDashboard: React.FC = () => {
  const [docketsList] = useState<CaseDocket[]>(allSampleDockets);
  const [selectedCaseNum, setSelectedCaseNum] = useState<string>(benchmarkCaseDocket.caseNumber);
  const [docket, setDocket] = useState<CaseDocket>(benchmarkCaseDocket);
  const [selectedContraId, setSelectedContraId] = useState<string>(docket.contradictions[0]?.id || '');
  const [isBinderOpen, setIsBinderOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'WAR_ROOM' | 'DOCUMENTS'>('WAR_ROOM');
  const [selectedDocId, setSelectedDocId] = useState<string>(docket.documents[0]?.id || '');
  const [isCaseDropdownOpen, setIsCaseDropdownOpen] = useState(false);
  const [docSearchQuery, setDocSearchQuery] = useState('');

  // Audio / Stenographer Simulation State
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [playbackSeconds, setPlaybackSeconds] = useState(862); // 14:22 in seconds
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);

  // Sync state when docket changes
  const handleCaseChange = (caseNum: string) => {
    const found = docketsList.find(d => d.caseNumber === caseNum);
    if (found) {
      setSelectedCaseNum(caseNum);
      setDocket(found);
      setSelectedContraId(found.contradictions[0]?.id || '');
      setSelectedDocId(found.documents[0]?.id || '');
      setIsCaseDropdownOpen(false);
      setPlaybackSeconds(862);
      setIsPlayingAudio(false);
    }
  };

  // Timer loop for simulated audio recording
  useEffect(() => {
    let interval: any = null;
    if (isPlayingAudio) {
      interval = setInterval(() => {
        setPlaybackSeconds(prev => (prev >= 2880 ? 862 : prev + 1));
      }, 1000 / playbackSpeed);
    }
    return () => clearInterval(interval);
  }, [isPlayingAudio, playbackSpeed]);

  const formatAudioTime = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const safeContradictions = docket?.contradictions || [];
  const safeDocuments = docket?.documents || [];
  const safeQuestionTrees = docket?.questionTrees || [];
  const safeSections = docket?.sectionsCharged || [];

  const selectedContradiction = safeContradictions.find(c => c.id === selectedContraId) || safeContradictions[0];
  const selectedQuestionTree = safeQuestionTrees.find(
    qt => qt.contradictionId === selectedContraId || qt.id === selectedContradiction?.recommendedQuestionTreeId
  ) || safeQuestionTrees[0];

  const selectedDocument = safeDocuments.find(d => d.id === selectedDocId) || safeDocuments[0];

  // Derive counts
  const fatalCount = safeContradictions.filter(c => c.severity === 'FATAL_IMPEACHMENT').length;
  const totalPagesAudited = safeDocuments.reduce((acc, d) => acc + Math.max(0, d?.pageCount || 0), 0);

  // Statutory provisions count
  const statutoryProvisionsList = Array.from(new Set([
    'Sec 145 IEA / 148 BSA',
    'Sec 162 CrPC / 181 BNSS',
    'Sec 27 Indian Evidence Act',
    'Ram Narain Precedent (SC)',
    'Sec 65B IEA / Sec 63 BSA (Electronic Records)'
  ]));

  return (
    <div className="min-h-screen bg-canvas text-parchment-50 pb-20 selection:bg-amber-500/25 selection:text-gold-300">
      {/* =========================================================================
          HERO / SUPREME BENCH TOP BAR
          ========================================================================= */}
      <header className="sticky top-0 z-40 border-b border-court-700 bg-court-950/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6">
          
          {/* Brand & Judicial Emblem */}
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-500/20 via-gold-600/10 to-court-900 border border-gold-500/40 shadow-gold-glow">
              <Gavel className="h-5 w-5 text-gold-400" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-60"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-gold-400"></span>
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg font-bold tracking-wider text-parchment-50 uppercase drop-shadow-sm">
                  NYAYACROSS
                </span>
                <span className="font-display rounded-md bg-gold-500/10 px-2 py-0.5 text-[10px] font-semibold text-gold-400 border border-gold-500/30 tracking-widest uppercase">
                  TRIAL WAR ROOM
                </span>
                <span className="hidden md:inline-flex items-center gap-1 rounded bg-crimson-950/80 px-2 py-0.5 text-[10px] font-mono font-semibold text-crimson-400 border border-crimson-500/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-crimson-400 animate-pulse"></span>
                  SEC 145 BSA LIVE
                </span>
              </div>
              <p className="text-[11px] text-parchment-400 font-sans">
                Autonomous Witness Impeachment & High-Stakes Tactical Contradiction Engine
              </p>
            </div>
          </div>

          {/* Quick Case Switcher & Court Jurisdiction Badge */}
          <div className="flex items-center gap-3">
            {/* Jurisdiction Badge */}
            <div className="hidden lg:flex items-center gap-2 rounded-lg border border-court-700 bg-court-900 px-3 py-1.5 text-xs text-parchment-200 shadow-inner">
              <Scale className="h-3.5 w-3.5 text-gold-400 shrink-0" />
              <span className="font-medium text-parchment-100 truncate max-w-[200px]" title={docket.court}>
                {docket.court.split(',')[0]}
              </span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>

            {/* Quick Case Switcher Dropdown */}
            <div className="relative">
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={isCaseDropdownOpen}
                aria-label={`Select active trial docket. Currently selected: ${docket.caseNumber}`}
                onClick={() => setIsCaseDropdownOpen(!isCaseDropdownOpen)}
                className="flex items-center gap-2 rounded-lg border border-court-650 bg-court-850 px-3 py-1.5 text-xs font-semibold text-parchment-50 transition-all hover:border-gold-500/60 hover:bg-court-800 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                <FileText className="h-3.5 w-3.5 text-gold-400" />
                <span className="font-mono text-gold-300">{docket.caseNumber}</span>
                <ChevronDown className="h-3.5 w-3.5 text-parchment-400" />
              </button>

              {isCaseDropdownOpen && (
                <div 
                  role="listbox" 
                  aria-label="Trial Dockets"
                  className="absolute right-0 mt-2 w-80 rounded-xl border border-court-650 bg-court-900 p-2 shadow-2xl z-50 animate-in fade-in zoom-in-95"
                >
                  <div className="px-2 py-1 text-[10px] font-semibold tracking-wider uppercase text-parchment-400">
                    Switch Active Trial Docket
                  </div>
                  <div className="mt-1 space-y-1">
                    {docketsList.map((d) => (
                      <button
                        type="button"
                        role="option"
                        aria-selected={d.caseNumber === docket.caseNumber}
                        aria-label={`Switch to case ${d.caseNumber}: ${d.caseTitle}`}
                        key={d.caseNumber}
                        onClick={() => handleCaseChange(d.caseNumber)}
                        className={`w-full text-left rounded-lg p-2 transition-all text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
                          d.caseNumber === docket.caseNumber
                            ? 'bg-gold-500/15 border border-gold-500/40 text-gold-300 font-semibold'
                            : 'hover:bg-court-800 text-parchment-200'
                        }`}
                      >
                        <div className="flex items-center justify-between font-mono text-[11px]">
                          <span>{d.caseNumber}</span>
                          <span className="rounded bg-court-700 px-1.5 py-0.2 text-[10px] text-parchment-400">
                            {d.credibilityScore}% Fatal
                          </span>
                        </div>
                        <div className="truncate text-parchment-100 font-sans mt-0.5">{d.caseTitle}</div>
                        <div className="text-[10px] text-parchment-400 truncate mt-0.5">{d.court}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Exhibit Binder Modal Launch */}
            <button
              type="button"
              aria-haspopup="dialog"
              aria-label="Open Judicial Exhibit Binder Modal"
              onClick={() => setIsBinderOpen(true)}
              className="flex items-center gap-1.5 rounded-lg border border-gold-500/60 bg-gradient-to-r from-gold-500 to-gold-400 px-3.5 py-1.5 text-xs font-bold text-court-950 transition-all hover:brightness-110 shadow-gold-glow cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              <Printer className="h-3.5 w-3.5 text-court-950" />
              Exhibit Binder
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================================
          MAIN COMMAND SURFACE
          ========================================================================= */}
      <main className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 space-y-6">

        {/* 1. Case Banner: Luxury Obsidian Slab */}
        <div className="rounded-2xl border border-court-700 bg-gradient-to-br from-court-900 via-court-850 to-court-900 p-6 shadow-2xl relative overflow-hidden">
          {/* Subtle gold accent line at top */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400/80 to-transparent"></div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="font-mono font-bold text-gold-400 bg-gold-500/10 px-2.5 py-0.5 rounded border border-gold-500/20">
                  {docket.caseNumber}
                </span>
                <span className="text-court-600">•</span>
                <span className="text-parchment-200 font-sans font-medium">{docket.court}</span>
                <span className="text-court-600">•</span>
                <span className="text-gold-300 font-serif">{docket.presidingJudge}</span>
              </div>

              <h1 className="font-serif text-2xl font-bold tracking-tight text-parchment-50 sm:text-3xl">
                {docket.caseTitle}
              </h1>

              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                <span className="font-semibold text-parchment-400 uppercase tracking-wider text-[11px]">
                  Statutory Charges:
                </span>
                {safeSections.map(sec => (
                  <span
                    key={sec}
                    className="rounded bg-court-800/90 px-2.5 py-1 font-mono text-[11px] text-parchment-200 border border-court-700"
                  >
                    {sec}
                  </span>
                ))}
              </div>

              <div className="pt-2 text-xs text-parchment-400 flex items-start gap-2 max-w-3xl">
                <span className="font-semibold text-gold-400 shrink-0 uppercase tracking-wider text-[10px]">
                  Defense Doctrine:
                </span>
                <span className="italic text-parchment-200 leading-relaxed">
                  "{docket.defenseTheory}"
                </span>
              </div>
            </div>

            {/* Credibility Damage Card */}
            <div className="rounded-xl border border-crimson-500/50 bg-crimson-950/25 p-4 min-w-[280px] shadow-crimson-glow animate-fatal-pulse">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-crimson-400 flex items-center gap-1.5 uppercase tracking-wider">
                  <AlertOctagon className="h-4 w-4 text-crimson-400" />
                  Prosecution Credibility Damage
                </span>
                <span className="font-mono text-lg font-bold text-crimson-400 tabular-nums">
                  {docket.credibilityScore}% FATAL
                </span>
              </div>

              <div className="mt-2.5 h-2.5 w-full overflow-hidden rounded-full bg-court-950 border border-crimson-900/60">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-crimson-500 transition-all duration-700 shadow-sm"
                  style={{ width: `${docket.credibilityScore}%` }}
                ></div>
              </div>

              <div className="mt-2.5 text-[11px] text-parchment-300 leading-relaxed font-sans">
                <strong className="text-crimson-400">{fatalCount} Fatal Contradictions</strong> established under Sec 145 IEA / 148 BSA. Court testimony is wholly impeached against forensic records.
              </div>
            </div>
          </div>
        </div>

        {/* 2. COURTROOM AUDIO / STENOGRAPHER SIMULATION BAR */}
        <div className="rounded-xl border border-court-700 bg-court-900/95 p-4 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-court-800 pb-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-court-800 border border-court-700 text-gold-400">
                <Radio className={`h-4 w-4 ${isPlayingAudio ? 'animate-pulse text-crimson-400' : 'text-gold-400'}`} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-serif text-sm font-bold text-parchment-50">
                    Courtroom Stenographer Recording
                  </span>
                  <span className="rounded bg-emerald-500/10 px-2 py-0.2 text-[10px] font-mono text-emerald-400 border border-emerald-500/20">
                    PW-1 DEPOSITION • 14/02/2025
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-parchment-400">
                  <span>Sessions Court Stenography Cadence: <strong className="text-parchment-200">142 WPM</strong></span>
                  <span>•</span>
                  <span>Audio Track: Official Bench Microphone #3</span>
                </div>
              </div>
            </div>

            {/* Playback Controls & Speed Toggle */}
            <div className="flex items-center gap-3">
              <div className="font-mono text-xs font-semibold text-gold-300 tabular-nums bg-court-950 px-2.5 py-1 rounded border border-court-800">
                {formatAudioTime(playbackSeconds)} / 00:48:15
              </div>

              <button
                type="button"
                aria-label={isPlayingAudio ? 'Pause courtroom stenographer audio playback' : 'Play courtroom stenographer audio playback'}
                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
                  isPlayingAudio
                    ? 'bg-crimson-500 text-white hover:bg-crimson-600'
                    : 'bg-gold-500 text-court-950 hover:bg-gold-400'
                }`}
              >
                {isPlayingAudio ? (
                  <>
                    <Pause className="h-3.5 w-3.5 fill-current" /> Pause Steno
                  </>
                ) : (
                  <>
                    <Play className="h-3.5 w-3.5 fill-current" /> Play Witness Audio
                  </>
                )}
              </button>

              <button
                type="button"
                aria-label="Reset audio playback to contradiction anchor (00:14:22)"
                onClick={() => setPlaybackSeconds(862)}
                title="Reset to Contradiction Anchor (00:14:22)"
                className="rounded-lg border border-court-700 bg-court-800 p-1.5 text-parchment-400 hover:text-white hover:bg-court-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>

              <div className="flex items-center rounded-lg border border-court-700 bg-court-800 p-0.5 text-[11px] font-mono" role="group" aria-label="Audio playback speed">
                {[1.0, 1.25, 1.5].map((spd) => (
                  <button
                    key={spd}
                    type="button"
                    aria-label={`Set audio playback speed to ${spd}x`}
                    aria-pressed={playbackSpeed === spd}
                    onClick={() => setPlaybackSpeed(spd)}
                    className={`px-2 py-0.5 rounded transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
                      playbackSpeed === spd
                        ? 'bg-gold-500 text-court-950 font-bold'
                        : 'text-parchment-400 hover:text-white'
                    }`}
                  >
                    {spd}x
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dynamic Audio Waveform & Transcript Highlight */}
          <div className="mt-3 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            {/* Waveform Bar Spectrum */}
            <div className="lg:col-span-4 flex items-end gap-1 h-9 bg-court-950 p-1.5 rounded-lg border border-court-800 overflow-hidden">
              {[
                18, 35, 60, 25, 80, 45, 95, 30, 70, 50, 100, 40, 65, 85, 30, 55, 
                90, 75, 40, 85, 100, 30, 60, 45, 90, 35, 75, 50, 65, 30, 80, 45
              ].map((val, idx) => {
                const isContradictionBar = idx >= 10 && idx <= 18;
                return (
                  <div
                    key={idx}
                    className={`flex-1 rounded-sm transition-all duration-200 ${
                      isContradictionBar
                        ? isPlayingAudio
                          ? 'bg-crimson-400 shadow-crimson-glow'
                          : 'bg-crimson-500/70'
                        : isPlayingAudio
                        ? 'bg-gold-400'
                        : 'bg-court-700'
                    }`}
                    style={{
                      height: isPlayingAudio ? `${Math.max(15, (val * ((idx % 3) + 1)) % 100)}%` : `${val}%`,
                      animationDelay: `${idx * 40}ms`
                    }}
                  ></div>
                );
              })}
            </div>

            {/* Stenographer Sworn Transcript Stream */}
            <div className="lg:col-span-8 flex items-center justify-between gap-3 bg-court-950/80 p-2.5 rounded-lg border border-court-800 font-mono text-xs text-parchment-300">
              <div className="truncate">
                <span className="text-gold-400 font-bold mr-2">[PW-1 at 00:14:22]:</span>
                <span>"...The incident occurred in </span>
                <span className="rounded bg-crimson-500/25 px-1.5 py-0.5 text-crimson-300 font-bold border border-crimson-500/50 shadow-crimson-glow">
                  broad daylight at around 6:15 PM in the evening
                </span>
                <span>. Streetlights and market shop lights were bright..."</span>
              </div>

              <span className="shrink-0 rounded bg-crimson-950 px-2 py-0.5 text-[10px] font-bold text-crimson-400 border border-crimson-500/40 animate-pulse">
                CLASH: FIR STATED 21:45 HRS BLACKOUT
              </span>
            </div>
          </div>
        </div>

        {/* 3. TACTICAL METRIC CARDS (High-Contrast 4-Column Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Total Exhibits Audited */}
          <div className="rounded-xl border border-court-700 bg-court-850 p-4 shadow-lg hover:border-court-600 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-parchment-400">
                Exhibits Audited
              </span>
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-azure-500/10 text-azure-400 border border-azure-500/20">
                <FileCheck className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-mono text-2xl font-bold text-parchment-50 tabular-nums">
                {docket.documents.length}
              </span>
              <span className="text-xs text-parchment-400">
                Exhibits ({totalPagesAudited} Pages)
              </span>
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-[11px] text-azure-400 font-mono">
              <ShieldCheck className="h-3 w-3" />
              <span>SHA-256 Chain of Custody Verified</span>
            </div>
          </div>

          {/* Card 2: Fatal Contradictions */}
          <div className="rounded-xl border border-crimson-500/50 bg-court-850 p-4 shadow-crimson-glow animate-fatal-pulse">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-crimson-400">
                Fatal Contradictions
              </span>
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-crimson-500/20 text-crimson-400 border border-crimson-500/40">
                <AlertOctagon className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-mono text-2xl font-bold text-crimson-400 tabular-nums">
                {fatalCount}
              </span>
              <span className="text-xs text-crimson-300 font-medium">
                Impeachment Strikes
              </span>
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-[11px] text-crimson-400 font-sans">
              <span>Section 145 IEA / 148 BSA Triggered</span>
            </div>
          </div>

          {/* Card 3: Credibility Damage */}
          <div className="rounded-xl border border-amber-500/40 bg-court-850 p-4 shadow-lg hover:border-amber-500/60 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                Credibility Collapse
              </span>
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Activity className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-mono text-2xl font-bold text-amber-300 tabular-nums">
                {docket.credibilityScore}%
              </span>
              <span className="text-xs text-amber-400 font-medium">
                Total Fatal Damage
              </span>
            </div>
            <div className="mt-2 text-[11px] text-parchment-400 font-sans truncate">
              Ocular Testimony Wholly Discredited
            </div>
          </div>

          {/* Card 4: Statutory Provisions Triggered */}
          <div className="rounded-xl border border-court-700 bg-court-850 p-4 shadow-lg hover:border-court-600 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-parchment-400">
                Statutory Codes Active
              </span>
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gold-500/10 text-gold-400 border border-gold-500/20">
                <Layers className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-mono text-2xl font-bold text-gold-300 tabular-nums">
                {statutoryProvisionsList.length}
              </span>
              <span className="text-xs text-parchment-400 font-mono">
                Provisions Armed
              </span>
            </div>
            <div className="mt-2 text-[11px] text-gold-400/90 font-mono truncate">
              IEA § 145 • BSA § 148 • Ram Narain
            </div>
          </div>
        </div>

        {/* 4. AUTONOMOUS AGENTMAIL INTEGRATION CARD */}
        <AgentMailIntegrationCard />

        {/* 5. DOCKET VIEW SWITCHER TABS */}
        <nav role="tablist" aria-label="Docket view tabs" className="flex border-b border-court-700">
          <button
            type="button"
            role="tab"
            id="tab-war-room"
            aria-controls="panel-war-room"
            aria-selected={activeTab === 'WAR_ROOM'}
            onClick={() => setActiveTab('WAR_ROOM')}
            className={`flex items-center gap-2 border-b-2 px-5 py-3 text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
              activeTab === 'WAR_ROOM'
                ? 'border-gold-400 text-gold-400 bg-gold-500/5'
                : 'border-transparent text-parchment-400 hover:text-parchment-200'
            }`}
          >
            <Gavel className="h-4 w-4" />
            Tactical Trial War Room
          </button>

          <button
            type="button"
            role="tab"
            id="tab-documents"
            aria-controls="panel-documents"
            aria-selected={activeTab === 'DOCUMENTS'}
            onClick={() => setActiveTab('DOCUMENTS')}
            className={`flex items-center gap-2 border-b-2 px-5 py-3 text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
              activeTab === 'DOCUMENTS'
                ? 'border-gold-400 text-gold-400 bg-gold-500/5'
                : 'border-transparent text-parchment-400 hover:text-parchment-200'
            }`}
          >
            <BookOpen className="h-4 w-4" />
            Original Trial Exhibits ({docket.documents.length} Records)
          </button>
        </nav>

        {/* 6. CONTENT SWITCHER: WAR ROOM vs DOCUMENTS */}
        {activeTab === 'WAR_ROOM' ? (
          <div 
            id="panel-war-room"
            role="tabpanel"
            aria-labelledby="tab-war-room"
            className="space-y-6"
          >
            {/* Timeline Visualizer: Day vs Night Illumination Gauge */}
            <TimelineVisualizer documents={docket.documents} />

            {/* Split Screen Grid: Contradiction Matrix vs Tactical Cross-Exam Tree */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 items-start">
              <ContradictionMatrix
                contradictions={docket.contradictions}
                onSelectContradiction={(id) => setSelectedContraId(id)}
                selectedId={selectedContraId}
              />

              <CrossExamTreeViewer questionTree={selectedQuestionTree} />
            </div>
          </div>
        ) : (
          /* High-Stakes Exhibit Vault View */
          <div 
            id="panel-documents"
            role="tabpanel"
            aria-labelledby="tab-documents"
            className="grid grid-cols-1 gap-6 lg:grid-cols-3"
          >
            {/* Exhibit Thumbnails */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-parchment-400">
                  Court Records & Admitted Exhibits
                </h3>
                <span className="font-mono text-[11px] text-gold-400">
                  {docket.documents.filter(d => 
                    !docSearchQuery || 
                    d.title.toLowerCase().includes(docSearchQuery.toLowerCase()) || 
                    d.sourceExhibit.toLowerCase().includes(docSearchQuery.toLowerCase()) ||
                    d.content.toLowerCase().includes(docSearchQuery.toLowerCase())
                  ).length} / {docket.documents.length}
                </span>
              </div>

              {/* Inline Exhibit Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-parchment-400" />
                <input
                  type="text"
                  aria-label="Filter exhibits by title, quote, or section"
                  placeholder="Filter exhibits, quotes, sections..."
                  value={docSearchQuery}
                  onChange={(e) => setDocSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-court-700 bg-court-900/90 pl-8 pr-3 py-1.5 text-xs text-parchment-100 placeholder-parchment-500 focus:border-gold-500/60 focus:outline-none focus:ring-1 focus:ring-gold-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                />
              </div>

              <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-1">
                {docket.documents.filter(d => 
                  !docSearchQuery || 
                  d.title.toLowerCase().includes(docSearchQuery.toLowerCase()) || 
                  d.sourceExhibit.toLowerCase().includes(docSearchQuery.toLowerCase()) ||
                  d.content.toLowerCase().includes(docSearchQuery.toLowerCase())
                ).map((doc) => (
                  <button
                    key={doc.id}
                    type="button"
                    aria-label={`View exhibit ${doc.sourceExhibit}: ${doc.title}`}
                    aria-current={selectedDocId === doc.id ? 'true' : undefined}
                    onClick={() => setSelectedDocId(doc.id)}
                    className={`w-full text-left rounded-xl border p-4 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
                      selectedDocId === doc.id
                        ? 'border-gold-500 bg-court-800 shadow-gold-glow ring-1 ring-gold-500/30'
                        : 'border-court-700 bg-court-850 hover:bg-court-800'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono text-gold-400">
                      <span className="font-bold">{doc.sourceExhibit}</span>
                      <span className="text-parchment-400">{doc.type}</span>
                    </div>
                    <div className="mt-1 text-sm font-bold text-parchment-50">{doc.title}</div>
                    <div className="mt-1 text-xs text-parchment-400 flex items-center justify-between">
                      <span>{doc.author}</span>
                      <span className="font-mono tabular-nums">{doc.pageCount} Pages</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Exhibit Document Reader Scribe */}
            <div className="lg:col-span-2 rounded-xl border border-court-700 bg-court-850 p-6 shadow-2xl relative">
              {selectedDocument ? (
                <>
                  <div className="flex items-center justify-between border-b border-court-700 pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="rounded bg-gold-500/10 px-2 py-0.5 text-xs font-mono font-bold text-gold-400 border border-gold-500/30">
                          {selectedDocument.sourceExhibit}
                        </span>
                        <span className="font-serif text-base font-bold text-parchment-50">
                          {selectedDocument.title}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-parchment-400 font-sans">
                        Author: <strong className="text-parchment-200">{selectedDocument.author}</strong> | Witness: <span className="text-gold-300">{selectedDocument.witnessName || 'N/A'}</span>
                      </p>
                    </div>

                    <div className="text-right text-xs text-parchment-400 font-mono">
                      <div>Recorded: {new Date(selectedDocument.recordedDate || Date.now()).toLocaleDateString('en-IN')}</div>
                      <div className="text-emerald-400">SHA-256 SEAL VALID</div>
                    </div>
                  </div>

                  {/* Document Text Box */}
                  <div className="mt-4 max-h-[60vh] overflow-y-auto rounded-lg bg-court-950 p-5 font-mono text-xs leading-relaxed text-parchment-200 whitespace-pre-wrap border border-court-800 shadow-inner">
                    {selectedDocument.content}
                  </div>
                </>
              ) : (
                <div className="p-8 text-center text-parchment-400">
                  <FileText className="mx-auto h-10 w-10 text-court-600 mb-2" />
                  <p className="text-sm font-semibold">No Admitted Exhibit Available</p>
                  <p className="text-xs text-parchment-500 mt-1">This docket does not contain any admitted exhibits for review.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Printable Exhibit Binder Modal */}
      <ExhibitBinderModal
        docket={docket}
        isOpen={isBinderOpen}
        onClose={() => setIsBinderOpen(false)}
      />
    </div>
  );
};
