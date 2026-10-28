'use client';

import React, { useState } from 'react';
import { 
  Target, 
  GitCommit, 
  CheckCircle, 
  HelpCircle, 
  XCircle, 
  ShieldAlert, 
  Sparkles, 
  Copy, 
  Check, 
  Gavel, 
  Scale, 
  AlertCircle,
  TrendingUp,
  ArrowDown
} from 'lucide-react';
import { QuestionTree, QuestionBranch } from '../types/trial';

interface CrossExamTreeViewerProps {
  questionTree?: QuestionTree;
}

export const CrossExamTreeViewer: React.FC<CrossExamTreeViewerProps> = ({ questionTree }) => {
  const [activeBranch, setActiveBranch] = useState<'YES' | 'NO' | 'I_DO_NOT_RECALL'>('YES');
  const [copiedStage, setCopiedStage] = useState<number | null>(null);

  if (!questionTree) {
    return (
      <div className="rounded-xl border border-court-700 bg-court-850 p-8 text-center text-parchment-400">
        <Target className="mx-auto h-10 w-10 text-court-600 mb-3" />
        <h4 className="font-serif text-base font-bold text-parchment-200">No Contradiction Selected</h4>
        <p className="mt-1 text-xs text-parchment-400 font-sans">
          Select an item from the Witness Contradiction Matrix to load its 4-stage cross-examination doctrine.
        </p>
      </div>
    );
  }

  const currentBranch = questionTree?.branches?.find(b => b.expectedAnswer === activeBranch) 
    || questionTree?.branches?.[0] 
    || { expectedAnswer: 'YES', advocateFollowUp: 'Confront witness with marked prior contradiction exhibit under Section 145 IEA / 148 BSA.', tacticalObjective: 'Establish foundational contradiction on record.' };

  const handleCopyQuestion = (text: string, stageNum: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStage(stageNum);
    setTimeout(() => setCopiedStage(null), 2000);
  };

  // Forecasted prosecutor objections mapped to branch response
  const getObjectionForecast = () => {
    switch (activeBranch) {
      case 'YES':
        return {
          prosecutorObjection: "Learned Public Prosecutor: 'Objection! The witness is being tricked into a legal conclusion regarding police documentation.'",
          defenseCounter: "Defense Advocate: 'Permissible under Section 145 Evidence Act (Sec 148 BSA). The witness has admitted his prior statement was true; counsel is entitled to show the court deposition is an afterthought.'",
          benchRuling: "OBJECTION OVERRULED",
          likelihood: 94
        };
      case 'NO':
        return {
          prosecutorObjection: "Learned Public Prosecutor: 'Objection! Defense counsel is impeaching the integrity of the state police investigation without foundation.'",
          defenseCounter: "Defense Advocate: 'The witness has explicitly denied his signed FIR statement. Under Section 145 IEA, the defense is entitled to call the Investigating Officer to prove portion marked 'A'.' (Tahsildar Singh v. State of UP, 1959 SC).",
          benchRuling: "OBJECTION OVERRULED",
          likelihood: 88
        };
      case 'I_DO_NOT_RECALL':
        return {
          prosecutorObjection: "Learned Public Prosecutor: 'Objection! Witness has clearly stated he does not recall after lapse of time; defense is harassing the witness.'",
          defenseCounter: "Defense Advocate: 'Memory failure on core overt acts directly impeaches the witness's testimonial capacity under Section 146 & 148 BSA.'",
          benchRuling: "OBJECTION OVERRULED",
          likelihood: 91
        };
    }
  };

  const objection = getObjectionForecast();

  const stagesData = [
    {
      step: 1,
      title: "Stage 1: Commitment (Lock the Witness)",
      pressure: "LOW PRESSURE",
      pressureColor: "text-azure-400 bg-azure-950/60 border-azure-500/30",
      dotBorder: "border-azure-400 bg-azure-900",
      question: questionTree.stages.commitmentQuestion,
      tacticalPurpose: "Binds the witness tightly to his oral direct testimony so he cannot claim ambiguity, misunderstanding, or re-explain his answer during re-examination."
    },
    {
      step: 2,
      title: "Stage 2: Foundation (Corroborate Police Statement)",
      pressure: "MEDIUM PRESSURE",
      pressureColor: "text-amber-400 bg-amber-950/60 border-amber-500/30",
      dotBorder: "border-amber-400 bg-amber-900",
      question: questionTree.stages.foundationQuestion,
      tacticalPurpose: "Compels witness to admit that his prior statement was recorded voluntarily, while events were fresh in memory, and signed without police coercion."
    },
    {
      step: 3,
      title: "Stage 3: Fatal Confrontation (Spring the Trap with Exhibit)",
      pressure: "HIGH TACTICAL PRESSURE",
      pressureColor: "text-crimson-400 bg-crimson-950/70 border-crimson-500/50 shadow-crimson-glow",
      dotBorder: "border-crimson-400 bg-crimson-950 animate-pulse",
      question: questionTree.stages.confrontationQuestion,
      tacticalPurpose: "Strict compliance with Section 145 IEA / 148 BSA: Counsel physically draws witness's attention to the contradictory lines in the certified exhibit before marking it."
    },
    {
      step: 4,
      title: "Stage 4: Judicial Impeachment Prayer (Judicial Record)",
      pressure: "LETHAL / CLOSING MOTION",
      pressureColor: "text-emerald-400 bg-emerald-950/60 border-emerald-500/40",
      dotBorder: "border-emerald-400 bg-emerald-900",
      question: questionTree.stages.impeachmentAction,
      tacticalPurpose: "Formally enters portion marked 'A' as Judicial Contradiction into Court Master notes, compelling Sessions Judge to evaluate credit under Section 155 IEA."
    }
  ];

  return (
    <div className="rounded-xl border border-court-700 bg-court-850 p-6 shadow-2xl relative">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-court-700 pb-4">
        <div>
          <div className="flex items-center gap-2.5">
            <Target className="h-5 w-5 text-gold-400" />
            <h3 className="font-serif text-lg font-bold text-parchment-50">
              Cross-Examination Strategy & Question Tree
            </h3>
          </div>
          <p className="mt-1 text-xs text-parchment-400 font-sans">
            Witness Target: <strong className="text-gold-300 font-serif">{questionTree.witness}</strong> | Target: <span className="italic text-parchment-200">"{questionTree.targetStatement}"</span>
          </p>
        </div>

        <span className="font-mono rounded bg-gold-500/10 px-3 py-1 text-xs font-bold text-gold-300 border border-gold-500/30 shadow-sm">
          Doctrine: Sec 145 IEA / 148 BSA
        </span>
      </div>

      {/* =========================================================================
          4-STAGE PROTOCOL WITH VISUAL VERTICAL CONNECTOR LINES
          ========================================================================= */}
      <div className="mt-6 relative">
        {/* Continuous Vertical Glowing Spine */}
        <div className="absolute left-4 top-4 bottom-8 w-[2px] bg-gradient-to-b from-azure-500 via-amber-500 to-crimson-500 opacity-60"></div>

        <div className="space-y-6">
          {stagesData.map((stg) => {
            const isCopied = copiedStage === stg.step;
            return (
              <div key={stg.step} className="relative pl-10">
                {/* Visual Step Bead on the Spine */}
                <div 
                  className={`absolute left-4 top-3.5 -translate-x-1/2 flex h-5 w-5 items-center justify-center rounded-full border-2 text-[10px] font-bold text-white shadow-md z-10 ${stg.dotBorder}`}
                >
                  {stg.step}
                </div>

                {/* Stage Content Card */}
                <div className={`rounded-xl border p-4 transition-all hover:border-court-600 ${
                  stg.step === 3 
                    ? 'border-crimson-500/40 bg-court-900/95 shadow-crimson-glow' 
                    : 'border-court-700 bg-court-900/90'
                }`}>
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-court-800/80 pb-2.5">
                    <span className="font-serif text-xs font-bold text-parchment-50">
                      {stg.title}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded border ${stg.pressureColor}`}>
                        {stg.pressure}
                      </span>
                      <button
                        type="button"
                        aria-label={`Copy Stage ${stg.step} question: ${stg.title}`}
                        onClick={() => handleCopyQuestion(stg.question, stg.step)}
                        title="Copy question text for counsel in dock"
                        className="rounded p-1 text-parchment-400 hover:text-gold-300 hover:bg-court-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                      >
                        {isCopied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                      </button>
                    </div>
                  </div>

                  <p className={`mt-3 text-sm font-medium leading-relaxed font-sans ${
                    stg.step === 3 ? 'text-parchment-50 font-bold' : 'text-parchment-100'
                  }`}>
                    "{stg.question}"
                  </p>

                  <div className="mt-2.5 rounded bg-court-950/70 p-2 text-[11px] text-parchment-400 font-sans border border-court-800">
                    <strong className="text-gold-400">Tactical Intent: </strong>
                    {stg.tacticalPurpose}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          ADAPTIVE WITNESS BRANCHING & OBJECTIONS FORECAST
          ========================================================================= */}
      <div className="mt-7 rounded-xl border border-court-700 bg-court-900 p-5 shadow-inner">
        <div className="flex items-center justify-between border-b border-court-800 pb-3">
          <div className="flex items-center gap-2">
            <GitCommit className="h-4 w-4 text-gold-400" />
            <h4 className="font-serif text-xs font-bold text-parchment-100 uppercase tracking-wider">
              Adaptive Witness Branching & Tactical Traps
            </h4>
          </div>
          <span className="text-[11px] font-mono text-parchment-400">Select simulated response:</span>
        </div>

        {/* 3 Response Selector Buttons */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-xs" role="group" aria-label="Witness response branches">
          <button
            type="button"
            aria-pressed={activeBranch === 'YES'}
            aria-label="Simulate witness response: Concedes (YES)"
            onClick={() => setActiveBranch('YES')}
            className={`flex items-center justify-center gap-1.5 rounded-lg py-2 px-3 font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
              activeBranch === 'YES'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 shadow-sm'
                : 'bg-court-800/80 text-parchment-400 hover:text-parchment-100 hover:bg-court-750'
            }`}
          >
            <CheckCircle className="h-4 w-4 text-emerald-400" /> Concedes (YES)
          </button>

          <button
            type="button"
            aria-pressed={activeBranch === 'NO'}
            aria-label="Simulate witness response: Denies (NO)"
            onClick={() => setActiveBranch('NO')}
            className={`flex items-center justify-center gap-1.5 rounded-lg py-2 px-3 font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
              activeBranch === 'NO'
                ? 'bg-crimson-500/25 text-crimson-300 border border-crimson-500/50 shadow-crimson-glow'
                : 'bg-court-800/80 text-parchment-400 hover:text-parchment-100 hover:bg-court-750'
            }`}
          >
            <XCircle className="h-4 w-4 text-crimson-400" /> Denies (NO)
          </button>

          <button
            type="button"
            aria-pressed={activeBranch === 'I_DO_NOT_RECALL'}
            aria-label="Simulate witness response: Evades ('I do not recall')"
            onClick={() => setActiveBranch('I_DO_NOT_RECALL')}
            className={`flex items-center justify-center gap-1.5 rounded-lg py-2 px-3 font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
              activeBranch === 'I_DO_NOT_RECALL'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-sm'
                : 'bg-court-800/80 text-parchment-400 hover:text-parchment-100 hover:bg-court-750'
            }`}
          >
            <HelpCircle className="h-4 w-4 text-amber-400" /> Evades ("I don't recall")
          </button>
        </div>

        {/* Advocate Follow-up Trap */}
        <div className="mt-4 rounded-xl border border-court-750 bg-court-950 p-4">
          <div className="flex items-center justify-between text-xs font-serif font-bold text-gold-400 uppercase tracking-wide">
            <span>Advocate's Tactical Follow-Up:</span>
            <span className="font-mono text-[10px] text-parchment-400">EXECUTION SCRIPT</span>
          </div>
          <p className="mt-2 text-sm font-semibold text-parchment-50 leading-relaxed font-sans">
            "{currentBranch.advocateFollowUp}"
          </p>

          <div className="mt-3 flex items-center gap-2 rounded bg-court-900 p-2.5 text-xs text-parchment-300 font-sans border border-court-800">
            <Sparkles className="h-4 w-4 text-azure-400 shrink-0" />
            <span><strong className="text-azure-400">Tactical Objective:</strong> {currentBranch.tacticalObjective}</span>
          </div>
        </div>

        {/* Courtroom Objections Forecast Box */}
        <div className="mt-4 rounded-xl border border-amber-500/30 bg-amber-950/20 p-4 space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Gavel className="h-4 w-4 text-amber-400" />
              <span className="font-serif text-xs font-bold text-amber-300 uppercase tracking-wider">
                Courtroom Objection & Judicial Ruling Forecast
              </span>
            </div>
            <span className="font-mono text-[11px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
              {objection.benchRuling} ({objection.likelihood}%)
            </span>
          </div>

          <div className="text-xs text-parchment-300 font-sans italic bg-court-950/80 p-2.5 rounded border border-court-800">
            {objection.prosecutorObjection}
          </div>

          <div className="text-xs text-parchment-200 font-sans bg-court-900/90 p-2.5 rounded border border-court-800">
            <strong className="text-gold-400 font-serif">Defense Immediate Counter: </strong>
            {objection.defenseCounter}
          </div>
        </div>
      </div>
    </div>
  );
};
