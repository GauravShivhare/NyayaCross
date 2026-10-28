# NyayaCross Design System: The Obsidian Bench & Parchment War Room
### Architectural Specification for Autonomous Trial War Room & Cross-Examination Contradiction Engine
**Document Version:** 1.0.0 • **Classification:** Bespoke Legal Technology Design System

---

## 1. Executive Summary & Creative North Star

### The Creative North Star: "The Obsidian Bench & Parchment War Room"
**NyayaCross** is a bespoke, ultra-luxury legal technology design system architected for high-stakes litigation, courtroom war rooms, and autonomous witness impeachment intelligence.

In high-profile commercial disputes, criminal proceedings, and judicial inquiries, cross-examination is an adversarial art of millimeter precision. Counsel must instantaneously detect contradictions between prior recorded statements (e.g., Police Case Diaries, Section 161 CrPC / Section 180 BNSS) and oral trial testimony under Section 145 and Section 148 of the Bharatiya Sakshya Adhiniyam (BSA). A single unspotted variance can forfeit trial dominance; a decisively executed impeachment tree can dismantle opposing testimony in minutes.

NyayaCross completely rejects generic consumer AI aesthetics. There are:
- **Zero generic AI templates**: No bland bootstrap grays, no generic purple gradients, no playful rounded toy-cards.
- **Zero floaty, ambiguous card elevations**: Surfaces are grounded in heavy obsidian slabs, precision micro-borders, and burnished judicial brass.
- **Evidentiary tactility**: The visual language is forged from the physical atmosphere of high court benches—black robes, polished mahogany rostrums, stamped gold foil seals, vellum evidence folders, and high-frequency evidentiary radar.

### Atmospheric Profile
```
┌────────────────────────────────────────────────────────────────────────┐
│ ATMOSPHERIC PROFILE: THE OBSIDIAN BENCH & PARCHMENT WAR ROOM            │
├────────────────────┬───────────────────────────────────────────────────┤
│ Dominance          │ Imposing, Sovereign, Authoritative                │
│ Evidentiary Focus  │ Tabular Numerals, Section 145 BSA Impeachment Tag │
│ Precision Grid     │ 4px Surgical Base Unit, 1px Crisp Micro-Borders   │
│ Visual Contrast    │ High-contrast Obsidian (#080B11) vs Gold/Crimson  │
│ Optical Ergonomics │ Anti-glare deep obsidian for 16-hour trial prep   │
└────────────────────┴───────────────────────────────────────────────────┘
```

---

## 2. Three-Layer Token Architecture

NyayaCross is governed by a strict, non-leaking **Three-Layer Token Architecture**:

```
 ┌─────────────────────────────────────────────────────────────────┐
 │                   LAYER 1: PRIMITIVE TOKENS                     │
 │  Raw literals: Hex colors, Rem spacing, Font families, Radii    │
 └────────────────────────────────┬────────────────────────────────┘
                                  │
                                  ▼
 ┌─────────────────────────────────────────────────────────────────┐
 │                   LAYER 2: SEMANTIC TOKENS                      │
 │  Purpose-driven aliases: --bg-canvas, --border-fatal, --text-*  │
 └────────────────────────────────┬────────────────────────────────┘
                                  │
                                  ▼
 ┌─────────────────────────────────────────────────────────────────┐
 │                  LAYER 3: COMPONENT TOKENS                      │
 │  Scoped component overrides: --ny-comp-matrix-*, --ny-comp-tree │
 └─────────────────────────────────────────────────────────────────┘
```

---

### Layer 1: Primitive Tokens (Raw Design Values)

#### A. Obsidian Slate Surfaces (Deep Bench & Tactical Chamber)
| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| `--ny-primitive-obsidian-950` | `#080B11` | Deep Bench Void (Primary Canvas Background) |
| `--ny-primitive-obsidian-900` | `#0D111A` | Chamber Floor (Card Base / Recessed Surface) |
| `--ny-primitive-obsidian-850` | `#131926` | Dossier Slate (Tactical War Room Card Surface) |
| `--ny-primitive-obsidian-800` | `#1A2234` | Tactical Elevation (Raised Panels & Active Cards) |
| `--ny-primitive-obsidian-750` | `#232C42` | Sub-shelf & Inset Trench Surface |
| `--ny-primitive-obsidian-700` | `#2F3B55` | Boundary Slate (High-contrast Micro-border) |
| `--ny-primitive-obsidian-600` | `#425273` | Low-contrast Structural Separator |

#### B. Judicial Gold & Burnished Brass Accents (Gavel & Gilded Foil)
| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| `--ny-primitive-gold-300` | `#FFE082` | Gilded Flare / Inscription Highlight |
| `--ny-primitive-gold-400` | `#E5C07B` | Burnished Judicial Brass / Primary Interactive Accent |
| `--ny-primitive-gold-500` | `#D4AF37` | Judicial Seal Gold / Gavel Embellishment |
| `--ny-primitive-gold-600` | `#B8860B` | Dark Court Brass / Low-key Rim |
| `--ny-primitive-gold-700` | `#8C6508` | Antique Bronze / Shadow Tone |
| `--ny-primitive-gold-900` | `#3D2C04` | Gold Underglow Base |

#### C. Fatal Impeachment Crimson (Section 145 BSA Inconsistency)
| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| `--ny-primitive-crimson-400` | `#FF4D4D` | Fatal Flare / Impeachment Warning Beacon |
| `--ny-primitive-crimson-500` | `#DC2626` | Impeachment Red / Direct Contradiction Flag |
| `--ny-primitive-crimson-700` | `#991B1B` | Severe Perjury Strike / Bloodline Rim |
| `--ny-primitive-crimson-900` | `#7F1D1D` | Fatal Ground Bed / Shaded Floor |
| `--ny-primitive-crimson-950` | `#450A0A` | Critical Anomaly Trench |

#### D. Material Variation Amber (Factual Variance & Omissions)
| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| `--ny-primitive-amber-400` | `#FBBF24` | Caution Highlight Flare |
| `--ny-primitive-amber-500` | `#F59E0B` | Material Inconsistency Accent |
| `--ny-primitive-amber-700` | `#B45309` | Deep Inconsistency Border |
| `--ny-primitive-amber-800` | `#78350F` | Section 145 BSA Flag Shadow |
| `--ny-primitive-amber-950` | `#451A03` | Amber Base Trench |

#### E. Evidence Azure & Cyan (Statutory Citations & AgentMail Sync)
| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| `--ny-primitive-cyan-400` | `#38BDF8` | Active Evidentiary Pin / Azure Text |
| `--ny-primitive-cyan-500` | `#0EA5E9` | Docket Cyan / Document Link |
| `--ny-primitive-cyan-600` | `#0284C7` | Statutory Citation Deep Azure |
| `--ny-primitive-cyan-800` | `#075985` | Exhibit Pin Rim |
| `--ny-primitive-cyan-900` | `#0C4A6E` | Evidentiary Floor |

#### F. Courtroom Parchment White (Dossier Text & Vellum Inscription)
| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| `--ny-primitive-parchment-50` | `#F8FAFC` | High Judicial Vellum White (H1/H2 Headings) |
| `--ny-primitive-parchment-100` | `#E2E8F0` | Docket Parchment Off-White (Body Transcript) |
| `--ny-primitive-parchment-200` | `#CBD5E1` | Secondary Inscription Text |
| `--ny-primitive-parchment-400` | `#94A3B8` | Archival Muted Slate (Metadata & Timestamps) |
| `--ny-primitive-parchment-600` | `#64748B` | De-emphasized Footnotes |
| `--ny-primitive-parchment-800` | `#334155` | Inactive Ledger Grid Lines |

#### G. Corroborated Safe Emerald (Admissible Proof)
| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| `--ny-primitive-emerald-400` | `#34D399` | Corroborated Testimony Text |
| `--ny-primitive-emerald-500` | `#10B981` | Cryptographic SHA-256 Audit Pass |
| `--ny-primitive-emerald-800` | `#065F46` | Admissible Proof Border |

---

### Layer 2: Semantic Tokens (Purpose-Driven Aliases)

Semantic tokens abstract raw design values into functional UI commitments:

#### Canvas & Elevation Semantics
```css
--bg-canvas:                  var(--ny-primitive-obsidian-950); /* #080B11 */
--bg-surface-elevated:        var(--ny-primitive-obsidian-900); /* #0D111A */
--bg-surface-card:            var(--ny-primitive-obsidian-850); /* #131926 */
--bg-surface-overlay:         var(--ny-primitive-obsidian-800); /* #1A2234 */
--bg-surface-recessed:        var(--ny-primitive-obsidian-750); /* #232C42 */
--bg-surface-glass:           rgba(13, 17, 26, 0.82);
--bg-surface-glass-heavy:     rgba(8, 11, 17, 0.92);
--bg-surface-parchment-wash:  rgba(248, 250, 252, 0.03);
```

#### Structural Border & Micro-Dividers
```css
--border-subtle:              rgba(47, 59, 85, 0.45);
--border-default:             var(--ny-primitive-obsidian-800); /* #1A2234 */
--border-prominent:           var(--ny-primitive-obsidian-700); /* #2F3B55 */
--border-gold-accent:         rgba(212, 175, 55, 0.35);
--border-gold-solid:          var(--ny-primitive-gold-500);     /* #D4AF37 */
--border-fatal:               rgba(220, 38, 38, 0.45);
--border-material:            rgba(245, 158, 11, 0.45);
--border-evidence:            rgba(56, 189, 248, 0.40);
```

#### Inscription & Typographic Roles
```css
--text-primary:               var(--ny-primitive-parchment-50);  /* #F8FAFC */
--text-secondary:             var(--ny-primitive-parchment-100); /* #E2E8F0 */
--text-muted:                 var(--ny-primitive-parchment-400); /* #94A3B8 */
--text-faint:                 var(--ny-primitive-parchment-600); /* #64748B */
--text-disabled:              var(--ny-primitive-parchment-800); /* #334155 */
--text-gold-burnished:        var(--ny-primitive-gold-400);      /* #E5C07B */
--text-gold-gilded:           var(--ny-primitive-gold-300);      /* #FFE082 */
--text-fatal-impeachment:     var(--ny-primitive-crimson-400);   /* #FF4D4D */
--text-material-variation:    var(--ny-primitive-amber-400);     /* #FBBF24 */
--text-evidence-azure:        var(--ny-primitive-cyan-400);      /* #38BDF8 */
```

#### Litigation Verdict States
```css
--verdict-fatal-bg:           rgba(220, 38, 38, 0.12);
--verdict-fatal-border:       rgba(255, 77, 77, 0.35);
--verdict-fatal-text:         var(--ny-primitive-crimson-400);
--verdict-fatal-glow:         0 0 16px rgba(220, 38, 38, 0.30);

--verdict-material-bg:        rgba(245, 158, 11, 0.12);
--verdict-material-border:    rgba(245, 158, 11, 0.35);
--verdict-material-text:      var(--ny-primitive-amber-400);

--verdict-minor-bg:           rgba(56, 189, 248, 0.12);
--verdict-minor-border:       rgba(56, 189, 248, 0.35);
--verdict-minor-text:         var(--ny-primitive-cyan-400);

--verdict-safe-bg:            rgba(16, 185, 129, 0.12);
--verdict-safe-border:        rgba(16, 185, 129, 0.35);
--verdict-safe-text:          var(--ny-primitive-emerald-400);
```

---

### Layer 3: Component Tokens (Component-Scoped Overrides)

Component tokens decouple individual courtroom widgets from semantic foundations, enabling isolated customization without cascading side effects:

#### 1. Supreme Bench Header (`--ny-comp-header-*`)
- `--ny-comp-header-bg`: `var(--bg-surface-glass-heavy)`
- `--ny-comp-header-border`: `var(--border-default)`
- `--ny-comp-header-badge-bg`: `rgba(212, 175, 55, 0.08)`
- `--ny-comp-header-badge-border`: `rgba(212, 175, 55, 0.25)`
- `--ny-comp-header-badge-text`: `var(--ny-primitive-gold-400)`

#### 2. Contradiction Matrix (`--ny-comp-matrix-*`)
- `--ny-comp-matrix-panel-bg`: `var(--bg-surface-card)`
- `--ny-comp-matrix-panel-border`: `var(--border-default)`
- `--ny-comp-matrix-card-bg`: `var(--ny-primitive-obsidian-900)`
- `--ny-comp-matrix-card-border`: `var(--border-subtle)`
- `--ny-comp-matrix-card-hover-border`: `var(--border-prominent)`
- `--ny-comp-matrix-card-selected-bg`: `rgba(212, 175, 55, 0.04)`
- `--ny-comp-matrix-card-selected-border`: `var(--ny-primitive-gold-500)`
- `--ny-comp-matrix-card-selected-glow`: `var(--ny-primitive-shadow-gold-flare)`
- `--ny-comp-matrix-badge-fatal-bg`: `rgba(220, 38, 38, 0.14)`
- `--ny-comp-matrix-badge-fatal-border`: `rgba(255, 77, 77, 0.40)`
- `--ny-comp-matrix-badge-fatal-text`: `var(--ny-primitive-crimson-400)`
- `--ny-comp-matrix-badge-fatal-glow`: `0 0 12px rgba(220, 38, 38, 0.25)`

#### 3. Cross-Examination Question Tree (`--ny-comp-tree-*`)
- `--ny-comp-tree-viewport-bg`: `var(--ny-primitive-obsidian-950)`
- `--ny-comp-tree-node-bg`: `var(--ny-primitive-obsidian-900)`
- `--ny-comp-tree-node-border`: `var(--border-subtle)`
- `--ny-comp-tree-node-active-bg`: `var(--ny-primitive-obsidian-850)`
- `--ny-comp-tree-node-active-border`: `var(--ny-primitive-gold-400)`
- `--ny-comp-tree-node-active-glow`: `0 0 16px rgba(212, 175, 55, 0.20)`
- `--ny-comp-tree-connector-line`: `var(--ny-primitive-obsidian-700)`
- `--ny-comp-tree-connector-active`: `var(--ny-primitive-gold-500)`
- `--ny-comp-tree-pressure-low`: `var(--ny-primitive-cyan-400)`
- `--ny-comp-tree-pressure-med`: `var(--ny-primitive-amber-500)`
- `--ny-comp-tree-pressure-high`: `var(--ny-primitive-crimson-400)`

#### 4. Exhibit Binder Modal (`--ny-comp-binder-*`)
- `--ny-comp-binder-backdrop`: `rgba(8, 11, 17, 0.88)`
- `--ny-comp-binder-frame-bg`: `var(--ny-primitive-obsidian-900)`
- `--ny-comp-binder-frame-border`: `var(--border-prominent)`
- `--ny-comp-binder-sheet-bg`: `var(--ny-primitive-obsidian-850)`
- `--ny-comp-binder-gold-seal`: `var(--ny-primitive-gold-500)`
- `--ny-comp-binder-stamp-red`: `var(--ny-primitive-crimson-500)`

#### 5. Timeline Discrepancy Stream (`--ny-comp-timeline-*`)
- `--ny-comp-timeline-track`: `var(--ny-primitive-obsidian-750)`
- `--ny-comp-timeline-pin-bg`: `var(--ny-primitive-obsidian-900)`
- `--ny-comp-timeline-pin-fatal`: `var(--ny-primitive-crimson-400)`
- `--ny-comp-timeline-pin-material`: `var(--ny-primitive-amber-400)`
- `--ny-comp-timeline-flag-azure`: `var(--ny-primitive-cyan-400)`

#### 6. Autonomous AgentMail Ingestion Card (`--ny-comp-mail-*`)
- `--ny-comp-mail-card-bg`: `var(--bg-surface-card)`
- `--ny-comp-mail-card-border`: `var(--border-default)`
- `--ny-comp-mail-badge-bg`: `rgba(56, 189, 248, 0.10)`
- `--ny-comp-mail-badge-border`: `rgba(56, 189, 248, 0.30)`
- `--ny-comp-mail-badge-text`: `var(--ny-primitive-cyan-400)`
- `--ny-comp-mail-pulse-indicator`: `#10B981`

---

## 3. Typography Engine & Evidentiary Typesetting Rules

### Typeface Hierarchy & Domain Roles
```
┌────────────────────────────────────────────────────────────────────────┐
│                        SUPREME BENCH SERIF                             │
│       Cinzel / Instrument Serif (700, 800, 900)                        │
│       "HIGH COURT OF DELHI • SUIT NO. 4092/2024 • BENCH TRIAL"         │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
 ┌──────────────────────────────────────────────────────────────────────┐
 │                      TACTICAL DISPLAY SANS                           │
 │       Space Grotesk (600, 700)                                       │
 │       "FATAL CONTRADICTION DETECTED: SECTION 145 BSA"                │
 └──────────────────────────────────┬───────────────────────────────────┘
                                    │
                                    ▼
 ┌──────────────────────────────────────────────────────────────────────┐
 │                      DOSSIER BODY TRANSCRIPT                         │
 │       Plus Jakarta Sans / Inter (400, 500, 600)                      │
 │       "Witness states under cross-examination that he saw the accused│
 │        at 10:15 PM, contradicting his signed Section 161 statement." │
 └──────────────────────────────────┬───────────────────────────────────┘
                                    │
                                    ▼
 ┌──────────────────────────────────────────────────────────────────────┐
 │               STATUTE & IDENTIFIER MONO (TABULAR)                    │
 │       JetBrains Mono (400, 500, 600, tnum)                           │
 │       [EX-2024-089] • T-00:14:22 • BSA § 145(2) • CONFIDENCE: 98.4% │
 └──────────────────────────────────────────────────────────────────────┘
```

### The Sacred Law of Tabular Numerals (`tnum`)
```css
.tabular-nums,
[data-tabular-nums="true"] {
  font-variant-numeric: tabular-nums;
  font-feature-settings: "tnum" 1;
}
```
In live trial proceedings, timestamps (`00:14:22` to `00:14:23`), witness confidence metrics (`94.8%`), and discrepancy drift intervals (`+01:45 hr`) continuously update. Proportional numerals alter string bounding boxes, creating subconscious visual instability. **Tabular numerals enforce uniform character advance widths across all figures, maintaining surgical stillness.**

---

## 4. Component Anatomy & Blueprint Specifications

### A. The Supreme Bench Navigation Header
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ [⚖ NYAYACROSS] [TRIAL WAR ROOM]                  [LIVE DOCKET: STATE v. KAPOOR] [BINDER]│
│  Autonomous Witness Impeachment Engine          ● 3 ACTIVE CONTRADICTIONS       [AGENT] │
└────────────────────────────────────────────────────────────────────────────────────────┘
```
- **Height**: 64px (`h-16`)
- **Surface**: `var(--bg-surface-glass-heavy)` with `backdrop-filter: blur(16px)`
- **Border Bottom**: `1px solid var(--border-default)`
- **Emblem**: Burnished brass gavel with `rgba(212, 175, 55, 0.15)` ring

### B. Witness Contradiction Matrix Grid
```
┌────────────────────────────────────────────────────────────────────────┐
│  WITNESS CONTRADICTION MATRIX [ 4 Flagged ]                            │
├────────────────────────────────────────────────────────────────────────┤
│  [FATAL IMPEACHMENT]  § 145 BSA  •  PW-1 Inspector V. Sharma           │
│  "Stated on oath he recovered weapon at 10:30 PM, but Case Diary GD-73 │
│   records recovery at 08:15 PM under SI Raman."                        │
│  ┌─────────────────────────┐  ┌─────────────────────────┐              │
│  │ POLICE DIARY (EX-01)    │  │ COURT DEPOSITION (EX-04)│              │
│  │ Line 42: "08:15 PM"     │  │ Page 8: "10:30 PM sharp"│              │
│  └─────────────────────────┘  └─────────────────────────┘              │
│  [SELECT QUESTION TREE →]                                              │
└────────────────────────────────────────────────────────────────────────┘
```
- **Card Padding**: 20px (`p-5`)
- **Card Border**: `1px solid var(--border-subtle)`
- **Selected Card Glow**: `box-shadow: 0 0 15px rgba(212, 175, 55, 0.22); border-color: var(--ny-primitive-gold-500);`
- **Severity Badge**: Fatal Impeachment pills feature `border: 1px solid rgba(255, 77, 77, 0.40)` with `rgba(220, 38, 38, 0.14)` fill

### C. Cross-Examination Question Tree Viewer
```
┌────────────────────────────────────────────────────────────────────────┐
│  TACTICAL QUESTION TREE: RECOVERY TIMELINE TRAP                        │
├────────────────────────────────────────────────────────────────────────┤
│  [STEP 1: LOCK-IN TESTIMONY] (Low Pressure)                            │
│  "Inspector, you personally drafted GD Entry 73 on the night of the    │
│   incident, correct?"                                                  │
│   ├─ [YES] ──► [STEP 2: CORROBORATE GD ENTRY TIMESTAMP]                │
│   └─ [NO]  ──► [STEP 2B: ATTACK OFFICIAL DUTY PRESUMPTION § 114 BSA]   │
│                                                                        │
│  [STEP 3: FATAL SPRING / TRAP CONFRONTATION] (High Pressure)           │
│  "Then how do you explain your signature at 08:15 PM when you just told│
│   his Lordship you did not reach the scene until 10:00 PM?"            │
└────────────────────────────────────────────────────────────────────────┘
```
- **Tree Branch Lines**: `2px solid var(--ny-primitive-obsidian-700)` with active branches highlighted in `var(--ny-primitive-gold-500)`
- **Trap Highlight**: Border pulsing with `var(--verdict-fatal-glow)`

---

## 5. Motion Choreography & Micro-Interactions

| Interaction | Trigger | Animation Spec | Intent |
| :--- | :--- | :--- | :--- |
| **Impeachment Beacon** | Fatal contradiction identified | `2.5s` infinite ease-in-out pulse (`animate-fatal-pulse`) | Draws counsel focus without jarring strobe effects |
| **Gilded Foil Shimmer** | Cryptographic hash confirmed | `4.0s` linear horizontal gradient sweep (`shimmer-brass`) | Verifies authentic chain of custody |
| **Node Expansion** | User clicks branch option | `200ms cubic-bezier(0.16, 1, 0.3, 1)` scale & expand | Snappy, tactile response during live cross-exam |
| **Hover Feedback** | Mouseover docket item | `150ms ease-out` surface elevate + gold micro-border | Tactical readiness |

---

## 6. Accessibility & Mathematical Contrast Matrix (WCAG 2.1 AAA)

| Background Surface | Text Token | Foreground Hex | Ratio | WCAG 2.1 Compliance |
| :--- | :--- | :--- | :--- | :--- |
| `#080B11` (Deep Void) | `--text-primary` | `#F8FAFC` | **18.4 : 1** | **AAA Pass** (Enhanced) |
| `#080B11` (Deep Void) | `--text-gold-burnished` | `#E5C07B` | **11.2 : 1** | **AAA Pass** (Enhanced) |
| `#0D111A` (Chamber Floor) | `--text-secondary` | `#E2E8F0` | **14.8 : 1** | **AAA Pass** (Enhanced) |
| `#131926` (Dossier Slate) | `--text-fatal-impeachment` | `#FF4D4D` | **6.1 : 1** | **AA+ Pass** (Standard) |
| `#131926` (Dossier Slate) | `--text-evidence-azure` | `#38BDF8` | **8.6 : 1** | **AAA Pass** (Enhanced) |
| `#131926` (Dossier Slate) | `--text-muted` | `#94A3B8` | **5.7 : 1** | **AA Pass** (Standard) |

---

## 7. Developer Implementation & Token Consumption Guide

### A. CSS Tokens Import
Ensure [`src/styles/tokens.css`](file:///C:/Users/Administrator/.gemini/antigravity/worktrees/epic-carson/ai_hackathon_agent_integration/src/styles/tokens.css) is loaded at the root of your stylesheet:
```css
@import '../styles/tokens.css';
```

### B. Tailwind Semantic Utilities
Use the semantic utilities provided in [`tailwind.config.js`](file:///C:/Users/Administrator/.gemini/antigravity/worktrees/epic-carson/ai_hackathon_agent_integration/tailwind.config.js):
```tsx
{/* Supreme Bench Header */}
<header className="sticky top-0 z-40 border-b border-court-750 bg-court-900/90 backdrop-blur-md">
  <h1 className="font-serif text-xl font-bold tracking-tight text-parchment-50">
    NYAYACROSS
  </h1>
</header>

{/* Fatal Impeachment Card */}
<div className="rounded-xl border border-red-500/40 bg-court-850 p-5 shadow-obsidian-card animate-fatal-pulse">
  <span className="font-mono text-xs text-crimson-400 tabular-nums">
    SECTION 145 BSA • CONTRADICTION SCORE: 98.4%
  </span>
</div>
```

---
*Authored by the Principal Design Systems Architect for NyayaCross Autonomous Legal Intelligence.*
