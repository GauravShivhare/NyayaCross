'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Mail, 
  Bot, 
  CheckCircle2, 
  RefreshCw, 
  Send, 
  ShieldAlert, 
  Sparkles, 
  Terminal, 
  Play, 
  Copy, 
  Check, 
  Trash2,
  Cpu,
  Radio
} from 'lucide-react';

interface LogLine {
  id: string;
  timestamp: string;
  tag: 'INFO' | 'INBOUND' | 'OCR' | 'CONTRADICTION' | 'BENCH';
  text: string;
}

export const AgentMailIntegrationCard: React.FC = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [copiedLog, setCopiedLog] = useState(false);
  const [logs, setLogs] = useState<LogLine[]>([
    {
      id: '1',
      timestamp: '16:40:01.120',
      tag: 'INFO',
      text: 'Daemon initialized: Connected to AgentMail webhook inbox (devlopergauravai@agentmail.to).'
    },
    {
      id: '2',
      timestamp: '16:40:02.405',
      tag: 'INFO',
      text: 'Registry daemon verified: e-Courts Judicial Ingestion Stream active.'
    },
    {
      id: '3',
      timestamp: '16:40:03.880',
      tag: 'BENCH',
      text: 'Court War Room synchronization active. Listening for incoming PDF briefs and exhibits.'
    }
  ]);

  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, []);

  const handleSimulateDocket = () => {
    if (isSimulating) return;
    setIsSimulating(true);

    const nowStr = () => {
      const d = new Date();
      return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}.${d.getMilliseconds().toString().padStart(3, '0')}`;
    };

    // Step 1: Inbound email
    const t1 = setTimeout(() => {
      setLogs(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          timestamp: nowStr(),
          tag: 'INBOUND',
          text: 'INCOMING MAIL: From lead.counsel@highcourt.in | Subject: "URGENT DOCKET: PW-1 Case Diary & Autopsy"'
        }
      ]);
    }, 400);

    // Step 2: Attachment Extraction
    const t2 = setTimeout(() => {
      setLogs(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          timestamp: nowStr(),
          tag: 'OCR',
          text: 'EXTRACTING ATTACHMENTS: 4 court exhibits parsed (Ex. P-1 FIR, Ex. P-2 161 Stmt, Ex. P-4 PM, Ex. D-1 Deposition).'
        }
      ]);
    }, 1100);

    // Step 3: Contradiction Engine Run
    const t3 = setTimeout(() => {
      setLogs(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          timestamp: nowStr(),
          tag: 'CONTRADICTION',
          text: 'CRITICAL AUDIT: Found 3 FATAL CONTRADICTIONS under Sec 145 IEA / 148 BSA (21:45 hrs Blackout vs 18:15 hrs Daylight).'
        }
      ]);
    }, 1800);

    // Step 4: War Room Live Update
    const t4 = setTimeout(() => {
      setLogs(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          timestamp: nowStr(),
          tag: 'BENCH',
          text: 'SUCCESS: Trial War Room updated. Credibility damage recalculation: 84% FATAL. Cross-exam trees generated.'
        }
      ]);
      setIsSimulating(false);
    }, 2500);

    timeoutsRef.current.push(t1, t2, t3, t4);
  };

  const handleClearLogs = () => {
    setLogs([
      {
        id: Date.now().toString(),
        timestamp: '16:45:00.000',
        tag: 'INFO',
        text: 'Terminal logs reset. AgentMail daemon standing by on devlopergauravai@agentmail.to.'
      }
    ]);
  };

  const handleCopyLogs = () => {
    const raw = logs.map(l => `[${l.timestamp}] [${l.tag}] ${l.text}`).join('\n');
    navigator.clipboard.writeText(raw);
    setCopiedLog(true);
    setTimeout(() => setCopiedLog(false), 2000);
  };

  const getTagBadge = (tag: LogLine['tag']) => {
    switch (tag) {
      case 'INBOUND':
        return <span className="text-azure-400 font-bold">[INBOUND]</span>;
      case 'OCR':
        return <span className="text-amber-400 font-bold">[EXTRACT]</span>;
      case 'CONTRADICTION':
        return <span className="text-crimson-400 font-bold animate-pulse">[CONTRADICTION]</span>;
      case 'BENCH':
        return <span className="text-emerald-400 font-bold">[SYNCHRONIZED]</span>;
      default:
        return <span className="text-parchment-400 font-bold">[DAEMON]</span>;
    }
  };

  return (
    <div className="rounded-xl border border-court-700 bg-court-850 p-6 shadow-2xl relative overflow-hidden">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-court-700 pb-4">
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-azure-500/10 text-azure-400 border border-azure-500/30 shadow-cyan-glow">
            <Bot className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-base font-bold text-parchment-50">
                e-Courts Registry Autonomous Ingestion Daemon
              </h3>
              <span className="font-mono rounded bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
                ACTIVE INBOX STREAM
              </span>
            </div>
            <p className="mt-0.5 text-xs text-parchment-400 font-sans">
              Node: <strong className="text-parchment-200">High Court & Sessions Registry</strong> | Protocol: <strong className="text-gold-300">Secure Webhook Daemon</strong> | Security: <span className="font-mono text-emerald-400">TLS 1.3 / SHA-256</span>
            </p>
          </div>
        </div>

        {/* Action Button: Simulate Docket Ingestion */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-busy={isSimulating}
            aria-label="Simulate incoming case docket via AgentMail webhook"
            onClick={handleSimulateDocket}
            disabled={isSimulating}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 font-mono text-xs font-bold transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
              isSimulating
                ? 'bg-court-750 text-gold-400 border border-gold-500/30 cursor-wait'
                : 'bg-gold-500 text-court-950 border border-gold-400 hover:brightness-110 shadow-gold-glow'
            }`}
          >
            <RefreshCw className={`h-4 w-4 ${isSimulating ? 'animate-spin' : ''}`} />
            {isSimulating ? 'Ingesting Case Docket...' : 'Simulate Incoming Case Docket'}
          </button>
        </div>
      </div>

      {/* 3 Status Cards */}
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {/* Inbox Address */}
        <div className="rounded-lg border border-court-700 bg-court-900 p-3.5">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-parchment-400 font-sans">
            Autonomous Registry Inbox
          </div>
          <div className="mt-1.5 flex items-center gap-2 font-mono text-xs font-bold text-gold-300">
            <Mail className="h-4 w-4 text-gold-400 shrink-0" />
            <span className="truncate">devlopergauravai@agentmail.to</span>
          </div>
        </div>

        {/* Roster & Model */}
        <div className="rounded-lg border border-court-700 bg-court-900 p-3.5">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-parchment-400 font-sans">
            Judicial Verification Protocol
          </div>
          <div className="mt-1.5 flex items-center gap-2 font-mono text-xs font-bold text-emerald-400">
            <Radio className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>e-Filing v4.2 • Certified Node</span>
          </div>
        </div>

        {/* Autonomous Pipeline */}
        <div className="rounded-lg border border-court-700 bg-court-900 p-3.5">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-parchment-400 font-sans">
            Autonomous Pipeline Capabilities
          </div>
          <div className="mt-1.5 flex items-center gap-2 font-mono text-xs text-parchment-200">
            <Cpu className="h-4 w-4 text-azure-400 shrink-0" />
            <span>Multi-Exhibit OCR & Sec 145 Impeachment</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          TERMINAL-STYLE LIVE EVENT LOG
          ========================================================================= */}
      <div className="mt-4 rounded-xl border border-court-700 bg-court-950 font-mono text-xs shadow-inner overflow-hidden">
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between border-b border-court-800 bg-court-900 px-4 py-2 text-[11px] text-parchment-400">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-crimson-500/80"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80"></span>
            </div>
            <span className="font-semibold text-parchment-300 ml-2">
              bash: agentmail-docket-daemon --stream devlopergauravai@agentmail.to
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyLogs}
              title="Copy terminal logs"
              aria-label="Copy terminal logs to clipboard"
              className="flex items-center gap-1 rounded p-1 text-parchment-400 hover:text-white hover:bg-court-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              {copiedLog ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
              <span className="text-[10px]">{copiedLog ? 'Copied' : 'Copy'}</span>
            </button>
            <button
              type="button"
              onClick={handleClearLogs}
              title="Clear terminal"
              aria-label="Clear terminal logs"
              className="flex items-center gap-1 rounded p-1 text-parchment-400 hover:text-white hover:bg-court-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              <Trash2 className="h-3 w-3" />
              <span className="text-[10px]">Clear</span>
            </button>
          </div>
        </div>

        {/* Terminal Body Stream */}
        <div 
          role="log"
          aria-live="polite"
          aria-label="AgentMail daemon log stream"
          className="max-h-48 overflow-y-auto p-4 space-y-2 leading-relaxed"
        >
          {logs.map((log) => (
            <div key={log.id} className="flex items-start gap-2 text-parchment-300">
              <span className="text-parchment-600 select-none tabular-nums shrink-0">
                {log.timestamp}
              </span>
              <span className="shrink-0">{getTagBadge(log.tag)}</span>
              <span className="text-parchment-200">{log.text}</span>
            </div>
          ))}

          {isSimulating && (
            <div className="flex items-center gap-2 text-gold-400 font-bold animate-pulse pt-1">
              <RefreshCw className="h-3 w-3 animate-spin" />
              <span>[PROCESSING STREAM] Ingesting legal exhibits and resolving Section 145 BSA contradictions...</span>
            </div>
          )}

          {/* Blinking prompt line */}
          <div className="flex items-center gap-1 text-emerald-400 pt-1">
            <span>root@nyayacross-warroom:~#</span>
            <span className="h-3.5 w-1.5 bg-emerald-400 animate-pulse inline-block"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
