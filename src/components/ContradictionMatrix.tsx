'use client';

import React, { useState } from 'react';
import { 
  ShieldAlert, 
  BookOpen, 
  Scale, 
  ArrowUpRight, 
  Filter, 
  ChevronRight, 
  Copy, 
  Check, 
  FileText,
  AlertOctagon,
  Sparkles
} from 'lucide-react';
import { Contradiction, ContradictionSeverity } from '../types/trial';

interface ContradictionMatrixProps {
  contradictions: Contradiction[];
  onSelectContradiction: (contraId: string) => void;
  selectedId?: string;
}

export const ContradictionMatrix: React.FC<ContradictionMatrixProps> = ({
  contradictions,
  onSelectContradiction,
  selectedId
}) => {
  const [filter, setFilter] = useState<string>('ALL');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filtered = contradictions.filter(c => {
    if (filter === 'ALL') return true;
    return c.severity === filter;
  });

  const handleCopyCitation = (e: React.MouseEvent, c: Contradiction) => {
    e.stopPropagation();
    const citationText = `[BENCH CITATION - SEC 145 IEA / 148 BSA]\n` +
      `Case Docket Contradiction: "${c.title}"\n` +
      `Witness Under Impeachment: ${c.witness}\n` +
      `Statutory Ground: ${c.statutoryReference}\n` +
      `Ex. A (${c.factA.exhibitMark}, Pg. ${c.factA.page}): "${c.factA.quote}"\n` +
      `Ex. B (${c.factB.exhibitMark}, Pg. ${c.factB.page}): "${c.factB.quote}"\n` +
      `Strategic Impeachment Impact: ${c.strategicImpact}\n` +
      `Submitted by Defense Counsel for Judicial Record.`;

    navigator.clipboard.writeText(citationText);
    setCopiedId(c.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const getSeverityBadge = (severity: ContradictionSeverity) => {
    switch (severity) {
      case 'FATAL_IMPEACHMENT':
        return (
          <span className="flex items-center gap-1.5 rounded-md bg-crimson-950/70 px-2.5 py-1 text-[11px] font-mono font-bold text-crimson-400 border border-crimson-500/50 shadow-crimson-glow animate-fatal-pulse">
            <span className="h-1.5 w-1.5 rounded-full bg-crimson-400 animate-ping"></span>
            FATAL IMPEACHMENT
          </span>
        );
      case 'MATERIAL_VARIATION':
        return (
          <span className="flex items-center gap-1.5 rounded-md bg-amber-950/60 px-2.5 py-1 text-[11px] font-mono font-bold text-amber-400 border border-amber-500/50">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
            MATERIAL VARIATION
          </span>
        );
      case 'MINOR_DISCREPANCY':
        return (
          <span className="flex items-center gap-1.5 rounded-md bg-azure-900/60 px-2.5 py-1 text-[11px] font-mono font-bold text-azure-400 border border-azure-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-azure-400"></span>
            MINOR DISCREPANCY
          </span>
        );
    }
  };

  return (
    <div className="rounded-xl border border-court-700 bg-court-850 p-6 shadow-2xl relative">
      {/* Top Banner & Filters */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-court-700 pb-4">
        <div>
          <div className="flex items-center gap-2.5">
            <Scale className="h-5 w-5 text-gold-400" />
            <h3 className="font-serif text-lg font-bold text-parchment-50">
              Witness Contradiction Matrix
            </h3>
            <span className="rounded-full bg-court-750 px-2.5 py-0.5 text-xs font-mono font-semibold text-gold-300 border border-court-650">
              {contradictions.length} Flagged
            </span>
          </div>
          <p className="mt-1 text-xs text-parchment-400 font-sans">
            Surgical evidentiary variance engine mapped across police statements and trial testimonies.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-1 rounded-lg border border-court-700 bg-court-950 p-1 text-xs font-mono" role="group" aria-label="Contradiction severity filters">
          {[
            { key: 'ALL', label: `All (${contradictions.length})` },
            { key: 'FATAL_IMPEACHMENT', label: 'Fatal Only' },
            { key: 'MATERIAL_VARIATION', label: 'Material' }
          ].map(f => (
            <button
              key={f.key}
              type="button"
              aria-pressed={filter === f.key}
              aria-label={`Filter contradictions by ${f.label}`}
              onClick={() => setFilter(f.key)}
              className={`rounded px-3 py-1 font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
                filter === f.key
                  ? 'bg-gold-500 text-court-950 shadow'
                  : 'text-parchment-400 hover:text-parchment-100 hover:bg-court-800'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Contradiction Cards Stream */}
      <div className="mt-5 space-y-4" role="region" aria-label="Contradiction list">
        {filtered.map(c => {
          const isSelected = selectedId === c.id;
          const isCopied = copiedId === c.id;

          return (
            <div
              key={c.id}
              role="button"
              tabIndex={0}
              aria-pressed={isSelected}
              aria-label={`Select contradiction: ${c.title}. Severity: ${c.severity.replace(/_/g, ' ')}. Statutory Ground: ${c.statutoryReference}. Click or press Enter to inspect tactical question tree.`}
              onClick={() => onSelectContradiction(c.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectContradiction(c.id);
                }
              }}
              className={`group cursor-pointer rounded-xl border p-5 transition-all duration-200 relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
                isSelected
                  ? 'border-gold-500 bg-court-800/95 shadow-gold-glow ring-1 ring-gold-500/40'
                  : 'border-court-700 bg-court-900/90 hover:border-court-600 hover:bg-court-850'
              }`}
            >
              {/* Gold selection indicator strip */}
              {isSelected && (
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-gold-400 via-gold-500 to-amber-500"></div>
              )}

              {/* Card Header */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  {getSeverityBadge(c.severity)}
                  <h4 className="font-serif text-sm font-bold text-parchment-50 group-hover:text-gold-300 transition-colors">
                    {c.title}
                  </h4>
                </div>

                {/* JetBrains Mono Statutory Code */}
                <div className="font-mono text-xs font-bold text-gold-400 bg-court-950 px-2.5 py-1 rounded border border-court-750">
                  {c.statutoryReference}
                </div>
              </div>

              {/* Description */}
              <p className="mt-2.5 text-xs text-parchment-200 font-sans leading-relaxed">
                {c.description}
              </p>

              {/* Side-by-Side Comparison Box */}
              <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans">
                {/* Source A */}
                <div className="rounded-lg border border-azure-900/60 bg-court-950/80 p-3">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="font-bold text-azure-400">{c.factA.documentTitle}</span>
                    <span className="rounded bg-azure-950 px-1.5 py-0.2 text-azure-300 border border-azure-800/60">
                      {c.factA.exhibitMark} • Pg. {c.factA.page}
                    </span>
                  </div>
                  <blockquote className="mt-2 text-xs italic text-parchment-200 leading-relaxed">
                    "{c.factA.quote}"
                  </blockquote>
                </div>

                {/* Source B */}
                <div className="rounded-lg border border-crimson-900/60 bg-court-950/80 p-3">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="font-bold text-crimson-400">{c.factB.documentTitle}</span>
                    <span className="rounded bg-crimson-950 px-1.5 py-0.2 text-crimson-300 border border-crimson-800/60">
                      {c.factB.exhibitMark} • Pg. {c.factB.page}
                    </span>
                  </div>
                  <blockquote className="mt-2 text-xs italic text-parchment-200 leading-relaxed">
                    "{c.factB.quote}"
                  </blockquote>
                </div>
              </div>

              {/* Card Footer: Witness Info, Copy Citation Button, and Action CTA */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-court-800 pt-3 text-xs">
                <span className="text-[11px] text-parchment-400">
                  Witness Target: <strong className="text-gold-300 font-serif">{c.witness}</strong>
                </span>

                <div className="flex items-center gap-2">
                  {/* Copy for Court Master Button */}
                  <button
                    type="button"
                    onClick={(e) => handleCopyCitation(e, c)}
                    title="Copy official statutory citation for Court Master record"
                    aria-label={`Copy official statutory citation for ${c.title} to clipboard`}
                    className={`flex items-center gap-1.5 rounded-lg border px-3 py-1 font-mono text-[11px] font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
                      isCopied
                        ? 'border-emerald-500 bg-emerald-950/50 text-emerald-300'
                        : 'border-court-700 bg-court-800 text-parchment-300 hover:border-gold-500/50 hover:text-gold-300'
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span>Copied for Bench!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy for Court Master</span>
                      </>
                    )}
                  </button>

                  {/* Select CTA */}
                  <span className="flex items-center gap-1 font-semibold text-gold-400 group-hover:translate-x-1 transition-transform">
                    View Tree <ChevronRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
