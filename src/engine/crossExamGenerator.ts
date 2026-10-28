import { Contradiction, QuestionTree, QuestionBranch } from '../types/trial';
import { sanitizeInput } from './timelineSync';

export class CrossExamGenerator {
  /**
   * Synthesize a structured cross-examination question tree based on statutory doctrine.
   * Hardened against null/undefined fields, missing facts, and hostile payloads.
   */
  public static generateForContradiction(contra: Contradiction): QuestionTree {
    const safeContra = contra || ({} as Contradiction);
    const witness = sanitizeInput(safeContra.witness || 'Witness');
    const factA = safeContra.factA || {
      documentTitle: 'Previous Statement',
      exhibitMark: 'Ex. Marked',
      date: 'Prior Date',
      quote: '',
      page: 1
    };
    const factB = safeContra.factB || {
      documentTitle: 'Court Testimony',
      exhibitMark: 'Ex. Current',
      date: 'Trial Date',
      quote: '',
      page: 1
    };

    const docA = sanitizeInput(factA.documentTitle || 'Previous Statement');
    const exA = sanitizeInput(factA.exhibitMark || 'Ex. Marked');
    const docB = sanitizeInput(factB.documentTitle || 'Court Testimony');
    const exB = sanitizeInput(factB.exhibitMark || 'Ex. Current');
    const quoteA = sanitizeInput(factA.quote || '');
    const quoteB = sanitizeInput(factB.quote || '');
    const category = safeContra.category || 'MATERIAL_VARIATION';

    let commitment = `Mr./Ms. ${witness}, in this Hon'ble Court today on solemn affirmation, you have specifically testified that: "${quoteB.slice(0, 110)}...", is that your sworn testimony?`;
    let foundation = `When you gave your statement regarding this tragic occurrence to the police authorities in ${docA} (${exA}), you spoke truthfully about everything you personally witnessed, correct?`;
    let confrontation = `I place before you ${docA} (${exA}). Please read line by line where it is recorded: "${quoteA.slice(0, 120)}". How do you reconcile this with your current claim?`;
    let impeachment = `Your Honour, pursuant to Section 145 Indian Evidence Act (Sec 148 BSA), defense formally confronts the witness with Exhibit ${exA} and prays that the marked contradiction be taken on record as defense exhibit.`;

    if (category === 'TEMPORAL_CLASH') {
      commitment = `You have asserted on oath that the assault occurred during ${factB.date || 'the stated time'}, correct?`;
      foundation = `You registered ${docA} promptly after the incident when every detail of the timeline was vivid in your memory?`;
      confrontation = `In ${exA}, you clearly stated: "${quoteA}". Were you lying then, or are you inventing this new timeline today?`;
      impeachment = `Your Honour, request that contradiction marked 'A' in Exhibit ${exA} regarding time of occurrence be entered into the judicial deposition sheet.`;
    } else if (category === 'WEAPON_DISCREPANCY') {
      commitment = `You saw the weapon with your own eyes and were close enough to observe its exact make and model, correct?`;
      foundation = `You described the weapon to the Investigating Officer when your statement ${exA} was recorded?`;
      confrontation = `In your statement ${exA}, you specifically reported a wooden stick, whereas today you dramatically introduce a butcher knife! Where did this knife come from?`;
      impeachment = `Defense places on record the fatal variance between statement under Sec 161 CrPC (Sec 180 BNSS) and court deposition under Section 145 IEA.`;
    } else if (category === 'MEDICAL_CONFLICT') {
      commitment = `You stand by your statement that the victim was repeatedly stabbed with a penetrating blade?`;
      foundation = `You are aware that physical autopsy and medical examination was conducted immediately following the incident?`;
      confrontation = `The Forensic Post-Mortem Report (${exA}) conclusively rules out any stab wounds or sharp cuts on the body. Isn't it true that your entire stabbing narrative is a complete fiction?`;
      impeachment = `Praying for court finding under Ram Narain v. State of Punjab that ocular testimony is rendered wholly untrustworthy due to direct medical impossibility.`;
    }

    const branches: QuestionBranch[] = [
      {
        expectedAnswer: 'YES',
        advocateFollowUp: `If that is true, then your initial version in ${exA} was deliberately false, meaning you are capable of giving false statements under legal proceedings?`,
        tacticalObjective: 'Forces witness to either confess to perjury or admit previous official statement was fabricated.'
      },
      {
        expectedAnswer: 'NO',
        advocateFollowUp: `Are you asking the Court to believe that the recording officer fabricated ${exA} out of thin air without your knowledge?`,
        tacticalObjective: 'Pits the prosecution eyewitness against the prosecution\'s own investigating officer.'
      },
      {
        expectedAnswer: 'I_DO_NOT_RECALL',
        advocateFollowUp: `If your memory fails you on such a fundamental aspect of this fatal incident, how can the Court believe your identification of the accused?`,
        tacticalObjective: 'Demolishes credibility and reliable recollection capacity.'
      }
    ];

    const safeId = safeContra.id || `CONTRA-${Date.now()}`;

    return {
      id: `TREE-${safeId}`,
      contradictionId: safeId,
      witness,
      targetStatement: quoteB.slice(0, 90) || 'Sworn testimony in court',
      stages: {
        commitmentQuestion: commitment,
        foundationQuestion: foundation,
        confrontationQuestion: confrontation,
        impeachmentAction: impeachment
      },
      branches
    };
  }
}

