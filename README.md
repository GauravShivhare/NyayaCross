# 🏛️ NyayaCross: AI Trial War Room & Cross-Examination Contradiction Engine

> **Built for HackIndia: AI for Lawyers Hackathon 2026**  
> **Team:** `chor_chapati_gang`  
> **Autonomous Agent Partner:** `devlopergauravai@agentmail.to` (via [AgentMail](https://www.agentmail.to/))

[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black.svg)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8.svg)](https://tailwindcss.com/)
[![Tests](https://img.shields.io/badge/Tests-16%20Passed-success.svg)](https://vitest.dev/)

---

## 🎯 The Core Problem

In Indian trial courts (Sessions and District Courts), criminal and civil cases are won or lost during **cross-examination**. 

Under **Section 145 of the Indian Evidence Act (now Section 148 of Bharatiya Sakshya Adhiniyam / BSA)**, the credibility of an ocular prosecution witness can be completely impeached if they contradict their prior statements made in the FIR or Section 161 CrPC (Section 180 BNSS) police recordings.

However, litigators and junior advocates spend **dozens of grueling hours** manually highlighting and comparing disparate trial documents:
- Handwritten vernacular FIRs
- Section 161 CrPC / Section 180 BNSS statements
- Medico-Legal Certificates (MLC) & Post-Mortem Autopsy Reports
- In-Court Examination-in-Chief Depositions

Existing legal AI tools are almost exclusively generic *"chat with your PDF contract"* or basic case-law retrieval wrappers. They offer **zero tactical combat assistance** for active trial litigators standing in the courtroom well.

---

## 💡 The Solution: NyayaCross

**NyayaCross** transforms trial preparation into an autonomous tactical war room:

1. **Multi-Document Ingestion & Fact Graph:** Aligns FIRs, 161 statements, medical records, and trial depositions into a synchronized chronological timeline.
2. **Automated Contradiction Detection Engine:** Flags fatal inconsistencies across:
   - **Temporal Clashes:** e.g., 21:45 hrs pitch darkness in FIR vs. 18:15 hrs broad daylight in court.
   - **Weapon Discrepancies:** e.g., blunt wooden stick in 161 statement upgraded to a butcher knife in court.
   - **Medical Impossibility:** e.g., witness swearing to multiple chest stab wounds while the autopsy proves zero incised wounds and blunt head trauma.
   - **Material Omissions:** e.g., attributing an active holding role to a co-accused not named to police.
3. **Tactical Cross-Examination Question Trees:** Generates a structured 4-stage cross-examination doctrine:
   - **Stage 1 (Commitment):** Locks the witness into their in-court claim.
   - **Stage 2 (Foundation):** Establishes that their earlier police statement was given truthfully.
   - **Stage 3 (Confrontation):** Confontation with contradictory lines under Section 145 IEA / 148 BSA.
   - **Stage 4 (Impeachment):** Specific motion for the judge to record the contradiction on judicial record.
   - **Adaptive Branching:** Anticipates whether the witness answers *"Yes"*, *"No"*, or *"I do not recall"*, providing immediate advocate counter-traps.
4. **Courtroom Exhibit Binder:** One-click printable judicial table with exact exhibit markers (`Ex. P-1`, `Ex. D-1`) and page citations for presentation to the Sessions Judge.
5. **AgentMail Teammate Integration:** Seamless integration with `devlopergauravai@agentmail.to`. Advocates can email case dockets to the agent partner from anywhere and receive an executive contradiction brief in return.

---

## 🚀 Quickstart & Installation

### Prerequisites
- Node.js 18+ (tested on Node v24)
- Python 3.10+ (for AgentMail background worker)

### 1. Clone & Install Dependencies
```bash
git clone <repo-url>
cd ai_hackathon_agent_integration

# Install web dependencies
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser to view the Trial War Room.

### 3. Run Test Suites
```bash
# Run TypeScript Vitest suite (14 tests)
npm test

# Run Python AgentMail Worker tests (2 tests)
python -m unittest tests/test_agentmail_worker.py
```

### 4. Run Autonomous AgentMail Worker
```bash
python backend/agentmail_worker.py
```

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      NyayaCross UI                          │
│  (Next.js 14 • Tailwind CSS • Lucide • Judicial Dark Mode)  │
└──────────────────────────────┬──────────────────────────────┘
                               │
       ┌───────────────────────┴───────────────────────┐
       ▼                                               ▼
┌──────────────────────────────┐        ┌──────────────────────────────┐
│    Contradiction Engine      │        │    Cross-Exam Generator      │
│  - Timeline Normalization    │        │  - 4-Stage Legal Doctrine    │
│  - Severity Scoring (0-100)  │        │  - Adaptive Evasion Branches │
│  - Statutory Classification  │        │  - Judicial Exhibit Binder   │
└──────────────┬───────────────┘        └──────────────┬───────────────┘
               │                                       │
               └───────────────────────┬───────────────┘
                                       ▼
┌─────────────────────────────────────────────────────────────┐
│             AgentMail Teammate Integration                  │
│       (devlopergauravai@agentmail.to • Model Context)       │
│    - Autonomous docket email intake & trial brief delivery   │
└─────────────────────────────────────────────────────────────┘
```

---

## ⚖️ Indian Statutory & Case Law Framework

- **Section 145, Indian Evidence Act, 1872 / Section 148, Bharatiya Sakshya Adhiniyam, 2023 (BSA):** Cross-examination as to previous statements in writing.
- **Section 161 & 162, Code of Criminal Procedure, 1973 / Section 180 & 181, BNSS, 2023:** Witness examination by police and strict evidentiary bar on omissions amounting to contradictions.
- **Supreme Court Landmark: *Ram Narain v. State of Punjab (1975 4 SCC 153)*:** Where ocular evidence is fundamentally inconsistent with unimpeachable medical autopsy evidence, the oral testimony must be rejected.
- **Supreme Court Landmark: *Tahsildar Singh v. State of U.P. (AIR 1959 SC 1012)*:** Lays down the test for when an omission in a police statement constitutes a vital contradiction.

---

## 👥 Hackathon Team: `chor_chapati_gang`
* **Gaurav Shivhare** — Lead Litigator & Full-Stack Builder
* **Antigravity AI** — Autonomous Pair Programmer & AgentMail Partner (`devlopergauravai@agentmail.to`)
