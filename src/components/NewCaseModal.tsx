'use client';

import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Scale, 
  FileText, 
  AlertTriangle, 
  ShieldCheck, 
  CheckCircle2, 
  PlusCircle, 
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { CaseDocket, TrialDocument } from '../types/trial';
import { ContradictionDetector } from '../engine/contradictionDetector';
import { CrossExamGenerator } from '../engine/crossExamGenerator';

interface NewCaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCaseCreated: (newDocket: CaseDocket) => void;
}

export const NewCaseModal: React.FC<NewCaseModalProps> = ({
  isOpen,
  onClose,
  onCaseCreated
}) => {
  const [caseNumber, setCaseNumber] = useState('CC-782/2026');
  const [caseTitle, setCaseTitle] = useState('State of NCT Delhi vs. Arvind Malhotra');
  const [court, setCourt] = useState('Sessions Court, Patiala House Courts, New Delhi');
  const [sections, setSections] = useState('Sec 302 IPC / 103 BNS, Sec 145 IEA / 148 BSA, Sec 27 IEA');
  const [witnessName, setWitnessName] = useState('Sunil Verma (PW-1 - Eyewitness)');

  // Documents
  const [firText, setFirText] = useState(
    'Incident occurred at 18:15 PM in broad daylight near Chandni Chowk. Accused was holding a thick wooden lathi. Hit victim once on the back and fled on a red motorcycle.'
  );
  const [depText, setDepText] = useState(
    'The incident occurred at 21:45 PM during a complete pitch dark power outage. Accused pulled out a 10-inch iron butcher knife and repeatedly stabbed the deceased in the chest. Fled in a black sedan.'
  );
  const [pmText, setPmText] = useState(
    'Post-Mortem Report Ex. P-3: Cause of death is shock and haemorrhage resulting from blunt force cranial impact. No incised, stab, or sharp-weapon wounds found on any part of the body.'
  );

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handlePreFill = () => {
    setCaseNumber(`CC-${Math.floor(100 + Math.random() * 900)}/2026`);
    setCaseTitle('State of Karnataka vs. Ramesh Gowda');
    setCourt('Principal District & Sessions Judge, Bengaluru Urban');
    setSections('Sec 302/34 IPC, Sec 103 BNS, Sec 145/146 IEA, Sec 148 BSA');
    setWitnessName('Manjunath K. (PW-1 - Complainant)');
    setFirText(
      'First Information Report (FIR No. 204/2024): Incident occurred at 18:15 PM in broad daylight on 12th August. Accused Ramesh was armed with a wooden lathi (club). Sunny was not present at the spot.'
    );
    setDepText(
      'Oral Deposition of PW-1 on Solemn Affirmation: The occurrence took place at 21:45 PM in pitch dark blackout. Accused Ramesh brandished a rusty butcher knife and stabbed the victim. Co-accused Sunny caught both arms of the deceased.'
    );
    setPmText(
      'Post-Mortem Examination Ex. P-3 (Dr. Raghavendra): Deep blunt-impact contusions on occipital scalp. Autopsy conclusively excludes sharp-cutting blade or puncture stab wounds.'
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const documents: TrialDocument[] = [
        {
          id: `DOC-FIR-${Date.now()}`,
          type: 'FIR',
          title: 'First Information Report (FIR Ex. P-1)',
          sourceExhibit: 'Ex. P-1',
          recordedDate: 'Initial Police Report',
          author: 'Station House Officer',
          witnessName: witnessName,
          content: firText,
          pageCount: 3
        },
        {
          id: `DOC-161-${Date.now()}`,
          type: 'POLICE_STATEMENT_161',
          title: 'Police Statement u/s 161 CrPC (Ex. P-2)',
          sourceExhibit: 'Ex. P-2',
          recordedDate: 'Police Investigation',
          author: 'Investigating Officer',
          witnessName: witnessName,
          content: firText + ' Witness confirmed accused held a wooden stick and Sunny was not present.',
          pageCount: 2
        },
        {
          id: `DOC-DEP-${Date.now()}`,
          type: 'DEPOSITION_CHIEF',
          title: `Oral Examination-in-Chief (${witnessName})`,
          sourceExhibit: 'Ex. D-1',
          recordedDate: 'Sessions Trial',
          author: 'Court Stenographer',
          witnessName: witnessName,
          content: depText,
          pageCount: 6
        },
        {
          id: `DOC-PM-${Date.now()}`,
          type: 'MEDICAL_REPORT',
          title: 'Post-Mortem & Autopsy Protocol (Ex. P-3)',
          sourceExhibit: 'Ex. P-3',
          recordedDate: 'Autopsy Surgeon Report',
          author: 'Forensic Medical Officer',
          witnessName: 'Dr. Forensic Expert (PW-3)',
          content: pmText,
          pageCount: 4
        }
      ];

      // Temporary docket structure for running detector
      const draftDocket: CaseDocket = {
        caseNumber,
        caseTitle,
        court,
        sectionsCharged: sections.split(',').map(s => s.trim()).filter(Boolean),
        presidingJudge: 'Special Sessions Judge (Presiding)',
        prosecutionAdvocate: 'Learned Special Public Prosecutor',
        defenseAdvocate: 'Lead Defense Counsel',
        defenseTheory: 'Material contradictions between FIR, 161 statements, and forensic autopsy proving ocular testimony untrustworthy under Section 145 IEA / 148 BSA.',
        credibilityScore: 78,
        documents,
        contradictions: [],
        questionTrees: []
      };

      // Run real-time detection engine
      const analysis = ContradictionDetector.analyzeDocket(draftDocket);
      const questionTrees = analysis.contradictions.map(c => CrossExamGenerator.generateForContradiction(c));

      const finalizedDocket: CaseDocket = {
        ...draftDocket,
        credibilityScore: analysis.credibilityScore > 0 ? analysis.credibilityScore : 82,
        contradictions: analysis.contradictions,
        questionTrees
      };

      onCaseCreated(finalizedDocket);
      onClose();
    } catch (err) {
      console.error('Error creating custom docket:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border border-gold-500/40 bg-court-950 text-parchment-100 shadow-2xl overflow-hidden"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-court-700 bg-court-900/90 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400">
              <PlusCircle className="h-5 w-5" />
            </div>
            <div>
              <h2 id="modal-title" className="font-serif text-lg font-bold text-parchment-50 flex items-center gap-2">
                Ingest New Trial Case & Legal Documents
                <span className="font-mono text-[10px] rounded bg-gold-500/15 border border-gold-500/30 px-2 py-0.5 text-gold-300">
                  REAL-TIME AI ANALYSIS
                </span>
              </h2>
              <p className="text-xs text-parchment-400">
                Input your own FIR, Section 161 statements, or Autopsy records to detect statutory contradictions under Sec 145 IEA / 148 BSA.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePreFill}
              className="flex items-center gap-1.5 rounded-lg border border-gold-500/40 bg-gold-500/10 px-3 py-1.5 text-xs font-semibold text-gold-300 hover:bg-gold-500/20 transition-all"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Auto-Fill Example
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="rounded-lg border border-court-700 bg-court-850 p-2 text-parchment-400 hover:bg-court-800 hover:text-parchment-100 transition-all"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Modal Body / Scrollable Form */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Metadata Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-parchment-300 uppercase tracking-wider mb-1">
                Case Number / Docket ID
              </label>
              <input
                type="text"
                required
                value={caseNumber}
                onChange={e => setCaseNumber(e.target.value)}
                placeholder="e.g. SC-104/2026"
                className="w-full rounded-lg border border-court-700 bg-court-900 px-3 py-2 text-xs text-parchment-100 font-mono focus:border-gold-500/60 focus:outline-none focus:ring-1 focus:ring-gold-500/40"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-parchment-300 uppercase tracking-wider mb-1">
                Case Title / Parties
              </label>
              <input
                type="text"
                required
                value={caseTitle}
                onChange={e => setCaseTitle(e.target.value)}
                placeholder="e.g. State vs. Accused"
                className="w-full rounded-lg border border-court-700 bg-court-900 px-3 py-2 text-xs text-parchment-100 focus:border-gold-500/60 focus:outline-none focus:ring-1 focus:ring-gold-500/40"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-parchment-300 uppercase tracking-wider mb-1">
                Court & Jurisdiction
              </label>
              <input
                type="text"
                required
                value={court}
                onChange={e => setCourt(e.target.value)}
                placeholder="e.g. Sessions Court, Mumbai"
                className="w-full rounded-lg border border-court-700 bg-court-900 px-3 py-2 text-xs text-parchment-100 focus:border-gold-500/60 focus:outline-none focus:ring-1 focus:ring-gold-500/40"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-parchment-300 uppercase tracking-wider mb-1">
                Key Witness to Impeach
              </label>
              <input
                type="text"
                required
                value={witnessName}
                onChange={e => setWitnessName(e.target.value)}
                placeholder="e.g. Ramesh Patel (PW-1)"
                className="w-full rounded-lg border border-court-700 bg-court-900 px-3 py-2 text-xs text-parchment-100 focus:border-gold-500/60 focus:outline-none focus:ring-1 focus:ring-gold-500/40"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-parchment-300 uppercase tracking-wider mb-1">
              Statutory Penal Sections & Evidence Provisions
            </label>
            <input
              type="text"
              required
              value={sections}
              onChange={e => setSections(e.target.value)}
              placeholder="e.g. Sec 302 IPC / 103 BNS, Sec 145 IEA / 148 BSA"
              className="w-full rounded-lg border border-court-700 bg-court-900 px-3 py-2 text-xs text-parchment-100 font-mono focus:border-gold-500/60 focus:outline-none focus:ring-1 focus:ring-gold-500/40"
            />
          </div>

          {/* Document 1: FIR */}
          <div className="rounded-xl border border-court-700 bg-court-900/60 p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-xs font-bold text-gold-400 font-mono">
                <FileText className="h-4 w-4" />
                EXHIBIT P-1: Initial Police FIR / Statement
              </span>
              <span className="text-[11px] text-parchment-400">Baseline Statement</span>
            </div>
            <textarea
              rows={3}
              required
              value={firText}
              onChange={e => setFirText(e.target.value)}
              className="w-full rounded-lg border border-court-700 bg-court-950 p-3 text-xs text-parchment-100 font-sans leading-relaxed focus:border-gold-500/60 focus:outline-none focus:ring-1 focus:ring-gold-500/40"
              placeholder="Enter or paste the FIR text (mention time like 18:15 PM, weapons like stick/lathi, light condition)..."
            />
          </div>

          {/* Document 2: Courtroom Deposition */}
          <div className="rounded-xl border border-court-700 bg-court-900/60 p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-xs font-bold text-amber-400 font-mono">
                <FileText className="h-4 w-4" />
                EXHIBIT D-1: Witness Oral Testimony in Court (Deposition)
              </span>
              <span className="text-[11px] text-crimson-400 font-semibold">Variance Source</span>
            </div>
            <textarea
              rows={3}
              required
              value={depText}
              onChange={e => setDepText(e.target.value)}
              className="w-full rounded-lg border border-court-700 bg-court-950 p-3 text-xs text-parchment-100 font-sans leading-relaxed focus:border-gold-500/60 focus:outline-none focus:ring-1 focus:ring-gold-500/40"
              placeholder="Enter what the witness swore in court (mention conflicting time like 21:45 PM, upgraded weapon like knife, blackout)..."
            />
          </div>

          {/* Document 3: Medical / Autopsy Report */}
          <div className="rounded-xl border border-court-700 bg-court-900/60 p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-xs font-bold text-azure-400 font-mono">
                <FileText className="h-4 w-4" />
                EXHIBIT P-3: Post-Mortem / Forensic Science Report
              </span>
              <span className="text-[11px] text-azure-400 font-semibold">Objective Corroboration</span>
            </div>
            <textarea
              rows={3}
              required
              value={pmText}
              onChange={e => setPmText(e.target.value)}
              className="w-full rounded-lg border border-court-700 bg-court-950 p-3 text-xs text-parchment-100 font-sans leading-relaxed focus:border-gold-500/60 focus:outline-none focus:ring-1 focus:ring-gold-500/40"
              placeholder="Enter forensic autopsy findings (e.g. blunt trauma, ruled out incised wounds)..."
            />
          </div>

          {/* Submit Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-court-700">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-court-700 bg-court-850 px-4 py-2 text-xs font-semibold text-parchment-300 hover:bg-court-800 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-gold-500 to-gold-600 px-5 py-2 text-xs font-bold text-court-950 shadow-gold-glow hover:brightness-110 active:scale-95 transition-all"
            >
              {isSubmitting ? 'Analyzing Documents...' : '⚡ Run AI Contradiction Engine'}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
