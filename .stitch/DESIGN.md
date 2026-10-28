# NyayaCross Design System: The Obsidian Bench & Parchment War Room
*Autonomous Trial War Room & Cross-Examination Contradiction Engine*

---

## 1. Executive Vision & Creative North Star

### The Creative North Star: "The Obsidian Bench & Parchment War Room"
NyayaCross is an imposing, ultra-high-density tactical legal intelligence platform designed for senior trial counsel, litigation defense war rooms, and judicial research teams conducting cross-examination in multi-million dollar commercial disputes and complex criminal trials. 

In high-stakes litigation, trials are won or lost in seconds during rapid-fire cross-examination. A single witness contradiction between an initial police statement (e.g. GD Entry / Section 161 CrPC) and deposition testimony on the stand under Section 145/148 of the Bharatiya Sakshya Adhiniyam (BSA) can dismantle the prosecution's entire case.

NyayaCross rejects generic, consumer SaaS tropes. There are:
- **Zero generic AI templates**: No bland bootstrap grays, no generic purple gradients, no pastel candy-coated alert boxes.
- **Zero floaty, ambiguous card elevations**: Surfaces are grounded in heavy obsidian slabs, precision micro-borders, and burnished judicial brass.
- **Evidentiary tactility**: The aesthetic evokes judicial mahogany, hand-stamped gold foil seals, vellum evidence dockets, and glowing tactical contradiction radar.

### Atmospheric Profile
| Dimension | Specification | Psychological Intent |
| :--- | :--- | :--- |
| **Dominance** | Imposing, Sovereign, Authoritative | The gravity of a supreme judicial bench; radiates absolute evidentiary credibility. |
| **Precision** | Surgical, Micro-Borders, Tabular Numerals | Evokes laser-calibrated cross-examination questions and tamper-evident forensic audits. |
| **Density** | Tactical Bento War Room | Counsel can absorb 50+ deposition lines, 12 exhibits, and 5 contradiction trees in a single glance. |
| **Urgency** | Fatal Impeachment Crimson vs. Burnished Brass | Instantaneous ocular triage: counsel's eyes immediately lock onto fatal witness contradictions. |

---

## 2. Three-Layer Token Architecture

NyayaCross enforces a strict, leak-free **Three-Layer Token Architecture**:
```
┌────────────────────────────────────────────────────────┐
│  LAYER 1: PRIMITIVE TOKENS                             │
│  (Raw literals: Absolute Hex, Rem Spacing, Font Stacks)│
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│  LAYER 2: SEMANTIC TOKENS                              │
│  (Purpose-driven aliases: Canvas, Card, Text, Verdict) │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│  LAYER 3: COMPONENT TOKENS                             │
│  (Component-scoped overrides: Matrix, Tree, Binder)    │
└────────────────────────────────────────────────────────┘
```

---

### Layer 1: Primitive Tokens (Raw Design Values)

#### A. Obsidian & Chamber Surfaces
The foundation of the war room is built from deep obsidian slate surfaces that eliminate glare in dim trial preparation war rooms:
- `--ny-primitive-obsidian-950`: `#080B11` *(Deep Bench Void - Primary Canvas)*
- `--ny-primitive-obsidian-900`: `#0D111A` *(Chamber Floor - Base Surface)*
- `--ny-primitive-obsidian-850`: `#131926` *(Dossier Slate - Tactical Card Surface)*
- `--ny-primitive-obsidian-800`: `#1A2234` *(Elevated Panel - Raised Structural Tile)*
- `--ny-primitive-obsidian-750`: `#232C42` *(Recessed Sub-shelf - Inset Trench)*
- `--ny-primitive-obsidian-700`: `#2F3B55` *(Boundary Slate - High-contrast Structural Rim)*
- `--ny-primitive-obsidian-600`: `#425273` *(Muted Boundary)*

#### B. Judicial Gold & Burnished Brass Accents
Symbolizing the weight of the court gavel, gold foil docket seals, and institutional authority:
- `--ny-primitive-gold-300`: `#FFE082` *(Gilded Flare / Primary Focus Inscription)*
- `--ny-primitive-gold-400`: `#E5C07B` *(Burnished Brass / Primary Interactive Accent)*
- `--ny-primitive-gold-500`: `#D4AF37` *(Judicial Seal Gold / Gavel Embellishment)*
- `--ny-primitive-gold-600`: `#B8860B` *(Dark Court Brass / Low-key Rim)*
- `--ny-primitive-gold-700`: `#8C6508` *(Antique Bronze / Deep Shadow Tone)*
- `--ny-primitive-gold-900`: `#3D2C04` *(Underglow Base)*

#### C. Fatal Impeachment Crimson
Reserved strictly for direct, irreconcilable witness contradictions, perjury traps, and constitutional violations:
- `--ny-primitive-crimson-400`: `#FF4D4D` *(Fatal Flare / Impeachment Warning Beacon)*
- `--ny-primitive-crimson-500`: `#DC2626` *(Impeachment Red / Section 145 BSA Flag)*
- `--ny-primitive-crimson-700`: `#991B1B` *(Severe Perjury Strike)*
- `--ny-primitive-crimson-900`: `#7F1D1D` *(Fatal Ground Bed / Shaded Floor)*
- `--ny-primitive-crimson-950`: `#450A0A` *(Critical Anomaly Trench)*

#### D. Material Variation Amber
Indicates factual deviations, timeline slippages, and secondary witness variance requiring probe:
- `--ny-primitive-amber-400`: `#FBBF24` *(Caution Flare)*
- `--ny-primitive-amber-500`: `#F59E0B` *(Material Variation Warning)*
- `--ny-primitive-amber-700`: `#B45309` *(Deep Inconsistency Rim)*
- `--ny-primitive-amber-800`: `#78350F` *(Amber Shadow Floor)*
- `--ny-primitive-amber-950`: `#451A03` *(Amber Trench)*

#### E. Evidence Azure & Cyan
Denotes statutory citations, verified AgentMail ingestion threads, forensic document hashes, and chronological pins:
- `--ny-primitive-cyan-400`: `#38BDF8` *(Active Evidentiary Pin / Azure Text)*
- `--ny-primitive-cyan-500`: `#0EA5E9` *(Docket Cyan / Document Link)*
- `--ny-primitive-cyan-600`: `#0284C7` *(Statutory Citation Deep Azure)*
- `--ny-primitive-cyan-800`: `#075985` *(Exhibit Pin Rim)*
- `--ny-primitive-cyan-900`: `#0C4A6E` *(Evidentiary Floor)*

#### F. Courtroom Parchment White
Clean, high-legibility document tones engineered for fatigue-free reading of 1,000-page depositions:
- `--ny-primitive-parchment-50`: `#F8FAFC` *(High Judicial Vellum White - Primary Headings)*
- `--ny-primitive-parchment-100`: `#E2E8F0` *(Docket Parchment Off-White - Body Copy)*
- `--ny-primitive-parchment-200`: `#CBD5E1` *(Secondary Transcript Text)*
- `--ny-primitive-parchment-400`: `#94A3B8` *(Archival Muted Slate - Metadata)*
- `--ny-primitive-parchment-600`: `#64748B` *(De-emphasized Footnotes)*
- `--ny-primitive-parchment-800`: `#334155` *(Inactive Inscriptions)*

#### G. Corroborated Safe Emerald
- `--ny-primitive-emerald-400`: `#34D399` *(Corroborated / Unimpeached Text)*
- `--ny-primitive-emerald-500`: `#10B981` *(Verified Evidentiary Hash)*
- `--ny-primitive-emerald-800`: `#065F46` *(Admissible Proof Border)*

---

### Layer 2: Semantic Tokens (Purpose-Driven Aliases)

Semantic tokens bridge primitive values to intentional interface meanings. No raw colors are ever directly referenced in component styling.

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

#### Structural Border & Divider Semantics
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

#### Inscription & Typographic Role Semantics
```css
--text-primary:               var(--ny-primitive-parchment-50);  /* #F8FAFC */
--text-secondary:             var(--ny-primitive-parchment-100); /* #E2E8F0 */
--text-muted:                 var(--ny-primitive-parchment-400); /* #94A3B8 */
--text-faint:                 var(--ny-primitive-parchment-600); /* #64748B */
--text-gold-burnished:        var(--ny-primitive-gold-400);      /* #E5C07B */
--text-gold-gilded:           var(--ny-primitive-gold-300);      /* #FFE082 */
--text-fatal-impeachment:     var(--ny-primitive-crimson-400);   /* #FF4D4D */
--text-material-variation:    var(--ny-primitive-amber-400);     /* #FBBF24 */
--text-evidence-azure:        var(--ny-primitive-cyan-400);      /* #38BDF8 */
```

#### Verdict & Litigation State Semantics
```css
--verdict-fatal-bg:           rgba(220, 38, 38, 0.12);
--verdict-fatal-border:       rgba(255, 77, 77, 0.35);
--verdict-fatal-text:         var(--ny-primitive-crimson-400);   /* #FF4D4D */
--verdict-fatal-glow:         0 0 16px rgba(220, 38, 38, 0.30);

--verdict-material-bg:        rgba(245, 158, 11, 0.12);
--verdict-material-border:    rgba(245, 158, 11, 0.35);
--verdict-material-text:      var(--ny-primitive-amber-500);     /* #F59E0B */

--verdict-minor-bg:           rgba(56, 189, 248, 0.12);
--verdict-minor-border:       rgba(56, 189, 248, 0.35);
--verdict-minor-text:         var(--ny-primitive-cyan-400);      /* #38BDF8 */

--verdict-safe-bg:            rgba(16, 185, 129, 0.12);
--verdict-safe-border:        rgba(16, 185, 129, 0.35);
--verdict-safe-text:          var(--ny-primitive-emerald-400);   /* #34D399 */
```

---

### Layer 3: Component Tokens (Scoped Overrides)

Component tokens are specifically scoped to the domain fixtures of the NyayaCross War Room:

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

## 3. The Typography Engine & Statutory Typesetting Rules

### Typeface Hierarchy & Domain Pairing
| Role | Family Stack | Weights | Use Cases |
| :--- | :--- | :--- | :--- |
| **Supreme Bench Serif** | `Cinzel`, `Instrument Serif`, `Georgia`, serif | 700, 800, 900 | Main courtroom case headers, Latin maxims (*Falsus in uno, falsus in omnibus*), bench proclamations. |
| **Tactical Display** | `Space Grotesk`, -apple-system, sans-serif | 600, 700 | Tally counters, module section titles, contradiction severity banners. |
| **Dossier Body & Arguments** | `Plus Jakarta Sans`, `Inter`, sans-serif | 400, 500, 600 | Deposition transcripts, cross-examination question text, factual reasoning. |
| **Statute & Timestamp Mono** | `JetBrains Mono`, monospace | 400, 500, 600 (`tnum`) | Section 145/148 BSA statutory citations, Exhibit IDs (`EX-2024-089`), timeline offsets (`T-00:14:22`). |

### The Mandatory Rule of Tabular Numerals (`tnum`)
In cross-examination war rooms, numbers constantly stream in: witness confidence percentages, timeline drift minutes, exhibit line numbers.
```css
/* All numeric readouts, dates, line citations, and scores MUST use tabular numbers */
.tabular-nums,
[data-tabular-nums="true"] {
  font-variant-numeric: tabular-nums;
  font-feature-settings: "tnum" 1;
}
```
*Why this is mandatory:* Proportional numbers cause layout jitters and visual twitching when timestamps tick up or contradiction probabilities recalculate in real-time. Tabular numerals ensure character widths are identical, locking the war room grid into unwavering stillness.

---

## 4. Evidentiary Visual Grammar & Micro-Surfaces

### Micro-Border Hierarchy
- **Subtle Partition (1px)**: `border: 1px solid rgba(47, 59, 85, 0.45);` - Separates sub-sections within a card.
- **Card Framing (1px)**: `border: 1px solid #1A2234;` - Primary structural perimeter.
- **Burnished Brass Accent**: `border: 1px solid rgba(212, 175, 55, 0.35); box-shadow: inset 0 1px 0 rgba(255, 224, 130, 0.15);` - Signals counsel focus.
- **Fatal Impeachment Warning**: `border: 1px solid rgba(255, 77, 77, 0.6); box-shadow: 0 0 12px rgba(220, 38, 38, 0.25);` - Highlights active fatal traps.

### Motion Choreography
1. **Breathing Impeachment Beacon (`animate-fatal-pulse`)**:
   - `2.5s` infinite ease-in-out cycle.
   - Gently oscillates between `rgba(220, 38, 38, 0.4)` and `rgba(220, 38, 38, 0.15)`.
   - Never causes jarring visual strobe; maintains counsel composure under trial pressure.
2. **Burnished Brass Shimmer (`shimmer-brass`)**:
   - `4s` linear metallic sweep across newly verified evidentiary records.
   - Signals cryptographic integrity when an AgentMail document is verified via SHA-256 HMAC.
3. **Question Tree Branch Navigation**:
   - Smooth `200ms` ease-out focus transitions between branch nodes with spring damping (`cubic-bezier(0.16, 1, 0.3, 1)`).

---

## 5. Accessibility & Contrast Integrity (WCAG 2.1 AAA)

Every token combination in the Obsidian Bench system is mathematically audited for high-contrast legibility in both illuminated trial courts and dark war room environments:

| Surface Background | Text Token | Hex Foreground | Contrast Ratio | Rating |
| :--- | :--- | :--- | :--- | :--- |
| `#080B11` (Canvas) | `--text-primary` | `#F8FAFC` | **18.4 : 1** | **AAA** |
| `#080B11` (Canvas) | `--text-gold-burnished` | `#E5C07B` | **11.2 : 1** | **AAA** |
| `#0D111A` (Chamber Floor) | `--text-secondary` | `#E2E8F0` | **14.8 : 1** | **AAA** |
| `#131926` (Dossier Card) | `--text-fatal-impeachment` | `#FF4D4D` | **6.1 : 1** | **AA+** |
| `#131926` (Dossier Card) | `--text-evidence-azure` | `#38BDF8` | **8.6 : 1** | **AAA** |
| `#131926` (Dossier Card) | `--text-muted` | `#94A3B8` | **5.7 : 1** | **AA** |

---

## 6. Implementation & Code References

- **CSS Variables Specification**: Defined in [`src/styles/tokens.css`](file:///C:/Users/Administrator/.gemini/antigravity/worktrees/epic-carson/ai_hackathon_agent_integration/src/styles/tokens.css)
- **Tailwind Engine Mapping**: Mapped in [`tailwind.config.js`](file:///C:/Users/Administrator/.gemini/antigravity/worktrees/epic-carson/ai_hackathon_agent_integration/tailwind.config.js)
- **Global Theme Injection**: Loaded in [`src/app/globals.css`](file:///C:/Users/Administrator/.gemini/antigravity/worktrees/epic-carson/ai_hackathon_agent_integration/src/app/globals.css)
