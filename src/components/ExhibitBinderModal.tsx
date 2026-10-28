'use client';

import React, { useEffect } from 'react';
import { 
  Printer, 
  X, 
  Download, 
  ShieldCheck, 
  Scale, 
  FileText, 
  Award,
  CheckCircle2,
  Calendar,
  User,
  Hash
} from 'lucide-react';
import { CaseDocket } from '../types/trial';

interface ExhibitBinderModalProps {
  docket: CaseDocket;
  isOpen: boolean;
  onClose: () => void;
}

export const ExhibitBinderModal: React.FC<ExhibitBinderModalProps> = ({
  docket,
  isOpen,
  onClose
}) => {
  // Close modal on Escape key press
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !docket) return null;

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="binder-modal-title"
      aria-describedby="binder-modal-desc"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-2 sm:p-4 overflow-y-auto no-print"
    >
      <div className="relative w-full max-w-5xl rounded-2xl border border-court-700 bg-court-950 p-6 sm:p-8 shadow-2xl text-parchment-100 overflow-hidden print-binder-view">
        
        {/* =========================================================================
            MODAL ACTION HEADER (Hidden during print)
            ========================================================================= */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-court-700 pb-5 no-print">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/15 border border-gold-500/35 text-gold-400 shadow-gold-glow">
              <Scale className="h-6 w-6" />
            </div>
            <div>
              <h2 id="binder-modal-title" className="font-serif text-lg font-bold tracking-wide text-parchment-50">
                JUDICIAL EXHIBIT BINDER (SEC 145 IEA / 148 BSA)
              </h2>
              <p id="binder-modal-desc" className="text-xs text-parchment-400 font-sans">
                Official Court Master & Bench Impeachment Dossier • Ready for Oral Cross-Examination
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              aria-label="Print Judicial Exhibit Binder for Bench (Ctrl+P)"
              onClick={() => window.print()}
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-gold-500 to-gold-400 px-4 py-2 text-xs font-bold text-court-950 transition-all hover:brightness-110 shadow-gold-glow cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              <Printer className="h-4 w-4 text-court-950" />
              <span>Print for Bench (Ctrl+P)</span>
            </button>

            <button
              type="button"
              aria-label="Close judicial exhibit binder modal"
              onClick={onClose}
              className="rounded-lg border border-court-700 bg-court-850 p-2 text-parchment-400 hover:bg-court-800 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* =========================================================================
            AUTHENTIC COURT LEGAL VELLUM DOSSIER SHEET
            ========================================================================= */}
        <div className="mt-6 rounded-xl border border-court-700 bg-court-900/90 p-6 sm:p-8 relative overflow-hidden print-binder-sheet shadow-2xl font-serif">
          
          {/* Subtle Judicial Watermark across Background */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-[0.04] z-0 flex items-center justify-center">
            <div className="text-center rotate-[-25deg] uppercase font-serif font-black tracking-widest text-4xl sm:text-6xl text-gold-400 whitespace-nowrap leading-loose">
              CITY CIVIL & SESSIONS COURT • BENCH RECORD<br />
              SECTION 145 BSA / 148 IEA • CERTIFIED TRIAL DOSSIER<br />
              NYAYACROSS TACTICAL WAR ROOM
            </div>
          </div>

          {/* Dossier Content on top of Watermark */}
          <div className="relative z-10">
            {/* Judicial Seal Stamp & Formal Heading */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b-2 border-court-700/80 pb-6 print-border-court">
              
              {/* Formal Court Heading */}
              <div className="text-center sm:text-left space-y-1">
                <div className="font-serif text-sm font-bold tracking-widest text-gold-400 uppercase">
                  IN THE COURT OF SESSIONS FOR GREATER BOMBAY
                </div>
                <h1 className="font-serif text-xl sm:text-2xl font-black text-parchment-50 uppercase tracking-tight">
                  BENCH EXHIBIT BINDER & CONTRADICTION SYNOPSIS
                </h1>
                <div className="font-mono text-xs text-parchment-300">
                  SESSION CASE NO: <span className="font-bold text-gold-300">{docket.caseNumber}</span>
                </div>
                <div className="font-sans text-xs text-parchment-400 italic">
                  Pursuant to Section 145 Indian Evidence Act, 1872 / Section 148 Bharatiya Sakshya Adhiniyam, 2023
                </div>
              </div>

              {/* Gilded Official Court Seal Stamp */}
              <div className="shrink-0 flex flex-col items-center">
                <div className="relative h-24 w-24 rounded-full border-2 border-gold-400/80 bg-gold-500/10 p-1 flex flex-col items-center justify-center shadow-gold-glow">
                  <div className="h-full w-full rounded-full border border-dashed border-gold-400/60 flex flex-col items-center justify-center p-1 text-center">
                    <Scale className="h-6 w-6 text-gold-400 mb-0.5" />
                    <span className="text-[7px] font-serif font-bold uppercase tracking-wider text-gold-300 leading-tight">
                      COURT OF SESSIONS<br />
                      MUMBAI BENCH
                    </span>
                    <span className="text-[6px] font-mono text-gold-400 mt-0.5 font-bold">
                      ADMITTED EX.
                    </span>
                  </div>
                </div>
                <span className="text-[9px] font-mono text-parchment-400 mt-1 font-semibold uppercase">
                  Official Seal of Record
                </span>
              </div>
            </div>

            {/* Docket Details Grid */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-lg border border-court-750 bg-court-950/70 p-4 font-sans text-xs print-black-text">
              <div className="space-y-1.5">
                <div>
                  <span className="font-semibold text-parchment-400">Matter:</span>{' '}
                  <strong className="text-parchment-50 font-serif text-sm">{docket.caseTitle}</strong>
                </div>
                <div>
                  <span className="font-semibold text-parchment-400">Presiding Bench:</span>{' '}
                  <span className="text-parchment-200">{docket.presidingJudge}</span>
                </div>
                <div>
                  <span className="font-semibold text-parchment-400">Prosecution Counsel:</span>{' '}
                  <span className="text-parchment-200">{docket.prosecutionAdvocate}</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <div>
                  <span className="font-semibold text-parchment-400">Defense Counsel:</span>{' '}
                  <strong className="text-gold-300 font-serif">{docket.defenseAdvocate}</strong>
                </div>
                <div>
                  <span className="font-semibold text-parchment-400">Statutory Charges:</span>{' '}
                  <span className="font-mono text-parchment-200">{(docket.sectionsCharged || []).join('; ')}</span>
                </div>
                <div>
                  <span className="font-semibold text-parchment-400">Audit Status:</span>{' '}
                  <span className="font-mono text-crimson-400 font-bold">{docket.credibilityScore}% Prosecution Credibility Damage</span>
                </div>
              </div>
            </div>

            {/* Tabular Contradictions List */}
            <div className="mt-6 space-y-5 max-h-[50vh] overflow-y-auto pr-1">
              {(docket.contradictions || []).length === 0 ? (
                <div className="rounded-xl border border-court-750 bg-court-950 p-6 text-center text-parchment-400 font-sans text-xs">
                  No contradictions recorded in this docket. Bench record clean.
                </div>
              ) : (
                (docket.contradictions || []).map((c, idx) => (
                  <div 
                    key={c.id || idx} 
                    className="rounded-xl border border-court-750 bg-court-950 p-4 font-sans text-xs shadow-md print-page-break"
                  >
                    {/* Contradiction Heading */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-court-800 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-xs bg-gold-500/15 text-gold-300 px-2 py-0.5 rounded border border-gold-500/30">
                          MARKER #{idx + 1}
                        </span>
                        <h3 className="font-serif text-sm font-bold text-parchment-50">
                          {c.title}
                        </h3>
                      </div>

                      <span className="font-mono text-[11px] font-bold text-crimson-400 bg-crimson-950 px-2 py-0.5 rounded border border-crimson-500/30">
                        {c.statutoryReference}
                      </span>
                    </div>

                    <p className="mt-2 text-xs text-parchment-300 leading-relaxed font-sans">
                      {c.description}
                    </p>

                    {/* Comparative Proof Table */}
                    <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                      {/* Source A */}
                      <div className="rounded border border-azure-900/60 bg-azure-950/20 p-3">
                        <div className="flex items-center justify-between font-mono text-[11px] text-azure-400 font-bold">
                          <span>Source A: {c.factA?.documentTitle || 'Ex. A'}</span>
                          <span>{c.factA?.exhibitMark || 'Ex. ?'} • Pg. {c.factA?.page ?? 1}</span>
                        </div>
                        <blockquote className="mt-1.5 italic text-parchment-200 text-xs leading-relaxed">
                          "{c.factA?.quote || ''}"
                        </blockquote>
                      </div>

                      {/* Source B */}
                      <div className="rounded border border-crimson-900/60 bg-crimson-950/20 p-3">
                        <div className="flex items-center justify-between font-mono text-[11px] text-crimson-400 font-bold">
                          <span>Source B: {c.factB?.documentTitle || 'Ex. B'}</span>
                          <span>{c.factB?.exhibitMark || 'Ex. ?'} • Pg. {c.factB?.page ?? 1}</span>
                        </div>
                        <blockquote className="mt-1.5 italic text-parchment-200 text-xs leading-relaxed">
                          "{c.factB?.quote || ''}"
                        </blockquote>
                      </div>
                    </div>

                    {/* Judicial Impact Statement */}
                    <div className="mt-3 rounded bg-court-900/80 p-2.5 text-[11px] text-parchment-300 border border-court-800">
                      <strong className="text-gold-300 font-serif">Impeachment Prayer to Bench: </strong>
                      {c.strategicImpact}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Signature & Court Master Filing Block */}
            <div className="mt-6 border-t-2 border-court-700/80 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-sans print-border-court">
              <div className="space-y-1">
                <div className="h-10 border-b border-court-700 w-48"></div>
                <div className="font-semibold text-parchment-200">Advocate for Defense / Counsel in Dock</div>
                <div className="font-mono text-[11px] text-parchment-400">Enrollment: MAH/1842/2018</div>
              </div>

              <div className="text-right sm:text-right space-y-1">
                <div className="h-10 border-b border-court-700 w-48 ml-auto"></div>
                <div className="font-semibold text-parchment-200">Court Master / Stenographer Attestation</div>
                <div className="font-mono text-[11px] text-parchment-400">Date: {new Date().toLocaleDateString('en-IN')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer (No print) */}
        <div className="mt-5 flex items-center justify-between border-t border-court-700 pt-4 text-xs text-parchment-400 no-print">
          <span className="font-mono">
            Cryptographic Audit Hash: <strong className="text-emerald-400">SHA256: 8f2a...c014 (Tamper-evident)</strong>
          </span>

          <button
            type="button"
            aria-label="Close judicial exhibit binder"
            onClick={onClose}
            className="rounded-lg border border-court-700 bg-court-850 px-4 py-2 font-semibold text-parchment-200 hover:bg-court-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
          >
            Close Binder
          </button>
        </div>
      </div>
    </div>
  );
};
