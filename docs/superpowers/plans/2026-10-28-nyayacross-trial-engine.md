# NyayaCross: AI Trial War Room & Cross-Examination Contradiction Engine Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build "NyayaCross", an autonomous trial intelligence system for Indian litigators that digests trial case bundles (FIR, Section 161 statements, charge sheets, medical reports, and chief depositions), flags fatal witness contradictions under Section 145/148 BSA, generates strategic cross-examination question trees, and integrates with AgentMail for automated docket briefings.

**Architecture:** A modular, full-stack application consisting of:
1. **Core Intelligence Engine:** Fact extraction, timeline synchronization, contradiction classification (Temporal, Spatial, Identity, Omission, Medical Conflict), and Cross-Examination Tree synthesis.
2. **AgentMail Autonomous Worker:** Background worker listening on `devlopergauravai@agentmail.to` for case docket emails, analyzing them, and auto-replying with an executive trial contradiction brief.
3. **Interactive Trial War Room UI:** Dark-mode legal tactical dashboard featuring document viewer, visual timeline comparison, interactive contradiction matrix with severity indicators, and step-by-step cross-exam question trees with printable exhibit export.

**Tech Stack:** Next.js 14 / React, TypeScript, Tailwind CSS, Lucide icons, Python 3.14 (analysis engine & AgentMail client), Vitest/Pytest.

**Spec:** AI for Lawyers Hackathon (HackIndia 2026) Problem Statement for team `chor_chapati_gang`.

---

## Global Constraints

- Must specifically implement Indian procedural criminal/civil trial dynamics (FIR, 161 CrPC / 180 BNSS, Charge Sheet 173 CrPC / 193 BNSS, Sec 145 Evidence Act / 148 BSA).
- No external heavy cloud dependencies required for local evaluation; includes self-contained high-fidelity case datasets and rule-assisted LLM extraction so judges/users can test instantly.
- Connected directly to live AgentMail inbox `devlopergauravai@agentmail.to`.
- UI must be polished, responsive, dark-mode first, with high aesthetic density suited for a trial war room.

---

## Review Focus

1. **Handling Inconsistent Date/Time Formats:** Police FIRs often use 24hr or informal times ("around twilight", "9:15 PM", "21:30 hrs"). The engine must normalize times without throwing parse errors.
2. **Distinguishing Material Contradictions from Minor Discrepancies:** Normal human variance (e.g. "red shirt" vs "maroon shirt") vs Fatal Impeachments (e.g. "accused held a revolver" vs "accused was unarmed").
3. **Handling Missing Documents:** If a user only uploads FIR and Deposition without a Medical Report, the system must gracefully analyze available pairs without failing.
4. **AgentMail Email Parsing Resiliency:** Handling multipart MIME, plain text, and HTML formatted incoming emails with attached or inline case text.
5. **Courtroom Exhibit Formatting:** Printable summary must include exact document tags (e.g. `[Ex. P-1: FIR pg. 2] vs [Ex. D-3: Deposition pg. 14, para 4]`) so advocates can cite them to the judge verbatim.

---

## Tasks

### Task 1: Domain Core Models & High-Fidelity Trial Case Bundles

**Files:**
- Create: `src/types/trial.ts`
- Create: `src/data/sampleCases.ts`
- Test: `tests/data_integrity.test.ts`

- [ ] Define TypeScript schemas for `TrialDocument`, `WitnessStatement`, `FactNode`, `Contradiction`, `QuestionNode`, and `CrossExamStrategy`.
- [ ] Build a realistic benchmark Indian murder/assault case docket (*State of Maharashtra vs. Vikram Shinde*):
  - Document 1: Handwritten vernacular FIR (Police Station Andheri East, IPC 302/34 & BNS 103(1))
  - Document 2: Witness Statement of Complainant PW-1 under Section 161 CrPC
  - Document 3: Witness Statement of Eyewitness PW-2 under Section 161 CrPC
  - Document 4: Medico-Legal Certificate (MLC) & Post-Mortem Report (Cooper Hospital)
  - Document 5: In-Court Examination-in-Chief Deposition of PW-1 before Sessions Court
- [ ] Write tests verifying schema validation and fact extraction keys.

---

### Task 2: The Contradiction & Fact-Graph Engine

**Files:**
- Create: `src/engine/contradictionDetector.ts`
- Create: `src/engine/timelineSync.ts`
- Test: `tests/contradiction_engine.test.ts`

- [ ] Implement `TimelineSync`: Normalizes timestamps, extracts relative time markers, and aligns multi-witness events into a unified chronological sequence.
- [ ] Implement `ContradictionDetector`:
  - Temporal clashes (e.g. 18:30 hrs vs 21:00 hrs)
  - Weapon & role discrepancies (e.g. iron rod vs wooden stick)
  - Injury mismatch vs Post-Mortem (e.g. blunt trauma vs sharp incised wound)
  - Material omissions (facts absent in 161 statement but introduced in court deposition)
- [ ] Calculate credibility damage score (0-100%) and classify severity: `FATAL_IMPEACHMENT`, `MATERIAL_VARIATION`, `MINOR_DISCREPANCY`.
- [ ] Write comprehensive unit tests verifying that all planted contradictions in the benchmark case are accurately detected and classified.

---

### Task 3: Tactical Cross-Examination Question Tree Generator

**Files:**
- Create: `src/engine/crossExamGenerator.ts`
- Test: `tests/cross_exam_generator.test.ts`

- [ ] Implement legal questioning doctrine:
  - Stage 1 (Commitment): Lock witness into their court claim (e.g. *"You testified that you saw the accused strike the deceased under the streetlamp, correct?"*)
  - Stage 2 (Foundation): Establish reliance on prior police statement (e.g. *"You gave your statement to Sub-Inspector Patil immediately on the same night while memory was fresh?"*)
  - Stage 3 (Confrontation): Introduce contradictory document under Section 145 IEA / 148 BSA (e.g. *"Show Ex. P-2: In paragraph 3, did you not state that power was cut and you could not see the assailant's face?"*)
  - Stage 4 (Impeachment): Demand explanation or mark the omission on record.
- [ ] Generate decision trees with adaptive paths based on whether the witness says "Yes", "No", or "I don't remember".
- [ ] Write unit tests verifying tree structure, legal citation validity, and fallback handling.

---

### Task 4: AgentMail Autonomous Docket Worker

**Files:**
- Create: `backend/agentmail_worker.py`
- Test: `tests/test_agentmail_worker.py`

- [ ] Connect to `devlopergauravai@agentmail.to` via AgentMail API.
- [ ] Implement case parser for emails containing trial transcripts or case summaries in the subject/body.
- [ ] Generate an executive legal contradiction brief and email it back to the sender within 5 seconds.
- [ ] Test the email cycle end-to-end using our existing AgentMail test credentials.

---

### Task 5: Interactive Trial War Room UI

**Files:**
- Create: `src/app/page.tsx`
- Create: `src/components/WarRoomDashboard.tsx`
- Create: `src/components/TimelineVisualizer.tsx`
- Create: `src/components/ContradictionMatrix.tsx`
- Create: `src/components/CrossExamTreeViewer.tsx`
- Create: `src/components/ExhibitBinderModal.tsx`
- Create: `src/components/AgentMailIntegrationCard.tsx`

- [ ] Initialize modern Next.js + Tailwind project with crisp typography (Space Grotesk / Inter) and dark courtroom aesthetic.
- [ ] Build the **War Room Header**: Case badge, court jurisdiction (Sessions Court, Greater Mumbai), bench details, and credibility risk meter.
- [ ] Build **Case Selector & Document Viewer**: Switch between sample dockets or upload new trial text.
- [ ] Build **Timeline Synchronizer**: Interactive side-by-side chronological comparison highlighting discrepancies in red.
- [ ] Build **Contradiction Matrix**: Filterable table with severity badges, source document comparison, and statutory citation pills.
- [ ] Build **Interactive Question Tree Explorer**: Expandable nodes for cross-exam strategy with "Leading Question", "Witness Trap", and "Courtroom Impeachment".
- [ ] Build **Exhibit Binder**: One-click printable view with official exhibit labels (`Ex. P-1`, `Ex. D-1`) formatted for judge presentation.
- [ ] Build **Live AgentMail Teammate Panel**: Shows active agent status (`devlopergauravai@agentmail.to`), last received docket email, and real-time processing log.

---

### Task 6: Verification, Performance Check & Demo Packaging

**Files:**
- Create: `README.md`
- Create: `docs/DEMO_SCRIPT.md`
- Create: `docs/ARCHITECTURE.md`

- [ ] Run full test suite across TypeScript and Python modules.
- [ ] Verify production build (`npm run build`).
- [ ] Document the architecture, judges pitch, AgentMail integration, and step-by-step demo walkthrough.
- [ ] Confirm everything is ready for submission under `chor_chapati_gang` on HackIndia!
