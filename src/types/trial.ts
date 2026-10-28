export type DocumentType = 
  | 'FIR' 
  | 'POLICE_STATEMENT_161' 
  | 'CHARGE_SHEET' 
  | 'MEDICAL_REPORT' 
  | 'DEPOSITION_CHIEF' 
  | 'FORENSIC_REPORT';

export interface TrialDocument {
  id: string;
  type: DocumentType;
  title: string;
  sourceExhibit: string; // e.g. "Ex. P-1", "Ex. D-2"
  recordedDate: string; // ISO date or formatted
  author: string; // e.g. "Sub-Inspector Patil", "Dr. Mehta"
  witnessName?: string;
  content: string;
  pageCount: number;
}

export interface FactNode {
  id: string;
  docId: string;
  witnessName: string;
  timestampStr?: string;
  normalizedTime?: string; // HH:MM
  location?: string;
  lightCondition?: string;
  weaponObserved?: string;
  overtActDescription: string;
  injuriesObserved?: string[];
  exactQuote: string;
  pageNumber: number;
  paragraphNumber?: number;
}

export type ContradictionSeverity = 'FATAL_IMPEACHMENT' | 'MATERIAL_VARIATION' | 'MINOR_DISCREPANCY';

export type ContradictionCategory = 
  | 'TEMPORAL_CLASH' 
  | 'WEAPON_DISCREPANCY' 
  | 'LIGHT_AND_VISIBILITY' 
  | 'MEDICAL_CONFLICT' 
  | 'MATERIAL_OMISSION'
  | 'IDENTITY_AND_PRESENCE';

export interface Contradiction {
  id: string;
  category: ContradictionCategory;
  severity: ContradictionSeverity;
  title: string;
  description: string;
  statutoryReference: string; // e.g. "Section 145 IEA / Section 148 BSA"
  witness: string;
  factA: {
    documentTitle: string;
    exhibitMark: string;
    date: string;
    quote: string;
    page: number;
  };
  factB: {
    documentTitle: string;
    exhibitMark: string;
    date: string;
    quote: string;
    page: number;
  };
  strategicImpact: string;
  recommendedQuestionTreeId: string;
}

export interface QuestionBranch {
  expectedAnswer: 'YES' | 'NO' | 'I_DO_NOT_RECALL';
  advocateFollowUp: string;
  tacticalObjective: string;
  subBranches?: QuestionBranch[];
}

export interface QuestionTree {
  id: string;
  contradictionId: string;
  witness: string;
  targetStatement: string;
  stages: {
    commitmentQuestion: string; // Step 1: Lock witness into in-court statement
    foundationQuestion: string; // Step 2: Establish previous police statement was truthful
    confrontationQuestion: string; // Step 3: Confront with contradictory document
    impeachmentAction: string; // Step 4: Record on judicial record under Sec 145 IEA / 148 BSA
  };
  branches: QuestionBranch[];
}

export interface CaseDocket {
  caseNumber: string;
  caseTitle: string; // e.g. "State of Maharashtra vs. Vikram Shinde"
  court: string; // e.g. "Sessions Court, Greater Mumbai (Courtroom 14)"
  presidingJudge: string;
  sectionsCharged: string[]; // e.g. ["BNS 103(1)", "BNS 115", "IPC 302", "IPC 323"]
  prosecutionAdvocate: string;
  defenseAdvocate: string;
  defenseTheory: string;
  documents: TrialDocument[];
  credibilityScore: number; // 0 - 100% damage to prosecution
  contradictions: Contradiction[];
  questionTrees: QuestionTree[];
}
