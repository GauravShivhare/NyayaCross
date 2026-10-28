import { CaseDocket } from '../types/trial';

export const benchmarkCaseDocket: CaseDocket = {
  caseNumber: "SC/842/2025",
  caseTitle: "State of Maharashtra vs. Vikram Shinde & Anr.",
  court: "City Civil & Sessions Court, Greater Mumbai (Courtroom 14)",
  presidingJudge: "Hon'ble Judge R. K. Deshmukh",
  sectionsCharged: ["BNS Section 103(1) (Murder)", "BNS Section 115(2) (Hurt)", "IPC 302", "IPC 34"],
  prosecutionAdvocate: "Special Public Prosecutor Mrs. Smita Kulkarni",
  defenseAdvocate: "Adv. Gaurav Shivhare & Antigravity Legal Partner",
  defenseTheory: "False implication due to longstanding civil land boundary dispute; death occurred due to accidental fall under the influence of alcohol, not homicidal assault.",
  credibilityScore: 84, // 84% credibility damage calculated by contradiction engine
  documents: [
    {
      id: "DOC-FIR-01",
      type: "FIR",
      title: "First Information Report (CR No. 184/2024)",
      sourceExhibit: "Ex. P-1",
      recordedDate: "2024-07-02T23:45:00Z",
      author: "Sub-Inspector V. B. Patil, MIDC Andheri East PS",
      witnessName: "Ramesh Pawar (Complainant / PW-1)",
      pageCount: 3,
      content: `FIRST INFORMATION REPORT (Under Section 173 BNSS / 154 CrPC)
Police Station: MIDC Andheri East | District: Mumbai Suburban
Date & Hour of Occurrence: 02/07/2024 at approximately 21:45 hrs (9:45 PM).
Date & Hour reported to PS: 02/07/2024 at 23:45 hrs.

Statement of Complainant Ramesh Pawar, Age 34:
"I reside near Pump House, Andheri East. Today night at about 9:45 PM, there was a power blackout in our galli and the streetlights were completely off. It was pitch dark. My cousin brother Ganesh and I were walking past the chai tapri. Suddenly, one person emerged from the dark alley. Because of the dark, I could only recognize him when he shouted abuse in the voice of Vikram Shinde. He struck Ganesh on the back with a heavy wooden danda (lathi) and fled into the darkness towards the nullah. No one else was accompanying him."`
    },
    {
      id: "DOC-161-01",
      type: "POLICE_STATEMENT_161",
      title: "Witness Statement under Sec 180 BNSS / 161 CrPC",
      sourceExhibit: "Ex. P-2",
      recordedDate: "2024-07-03T10:30:00Z",
      author: "Inspector S. T. Sawant (Investigating Officer)",
      witnessName: "Ramesh Pawar (PW-1)",
      pageCount: 2,
      content: `STATEMENT OF WITNESS RECORDED UNDER SECTION 180 BNSS / 161 CrPC:
Witness: Ramesh Pawar, S/o Dnyaneshwar Pawar, Occupation: Mechanic.
Questioned by I.O. on 03/07/2024:
"I reaffirm what I said yesterday. The incident occurred late night around 21:45 hrs. Due to power outage, vision was poor. Accused Vikram Shinde was holding a wooden stick. He hit Ganesh once on the shoulder/back. Ganesh fell down on the gutter curb. Vikram fled alone. Co-accused Sunny was not present at the spot when the blow was struck."`
    },
    {
      id: "DOC-PM-01",
      type: "MEDICAL_REPORT",
      title: "Post-Mortem Examination Report (Cooper Hospital)",
      sourceExhibit: "Ex. P-4",
      recordedDate: "2024-07-03T14:15:00Z",
      author: "Dr. A. K. Cooper, Department of Forensic Medicine",
      witnessName: "Dr. A. K. Cooper (Forensic Expert / PW-4)",
      pageCount: 4,
      content: `POST-MORTEM REPORT NO: PM-892/2024
Deceased: Ganesh Pawar, Male, 31 Years
Date & Time of Autopsy: 03/07/2024 at 14:15 hrs.

EXTERNAL INJURIES:
1. Contused abrasion over right occipital scalp, 4 cm x 3 cm.
2. Minor abrasion over right elbow, 2 cm x 1 cm.
NOTE: NO INCISED WOUNDS, NO PENETRATING STAB WOUNDS, NO DEFENSE WOUNDS PRESENT ON BODY.

INTERNAL EXAMINATION:
Head: Massive subdural and subarachnoid hemorrhage over occipital lobes. Linear skull fracture (3 cm) over right occipital bone.
Thorax & Abdomen: All organs intact, pale. No perforation or thoracic laceration.
Stomach: Contained 150ml semi-digested food with strong smell of ethyl alcohol.

CAUSE OF DEATH:
Cranio-cerebral damage resulting from blunt force impact to head, consistent with deceleration impact against a hard concrete surface (e.g. curbstone).`
    },
    {
      id: "DOC-DEP-01",
      type: "DEPOSITION_CHIEF",
      title: "Courtroom Deposition (Examination-in-Chief of PW-1)",
      sourceExhibit: "Ex. D-1",
      recordedDate: "2025-02-14T11:00:00Z",
      author: "Sessions Court Court Clerk / Stenographer",
      witnessName: "Ramesh Pawar (PW-1 on Oath)",
      pageCount: 5,
      content: `IN THE COURT OF SESSIONS FOR GREATER BOMBAY
SESSION CASE NO. 842 OF 2025
Deposition of Prosecution Witness No. 1 (PW-1)
Name: Ramesh Pawar | Taken on Solemn Affirmation:

Examination-in-Chief by Learned Special PP Smita Kulkarni:
1. I know both accused Vikram Shinde and Sunny. They are our sworn enemies.
2. On 02/07/2024, the incident took place in broad daylight at around 6:15 PM in the evening. The streetlights and market shop lights were bright.
3. My brother Ganesh and I were standing near the tea stall. Accused Vikram Shinde came with co-accused Sunny.
4. Sunny caught both arms of my brother Ganesh from behind so he could not move.
5. Accused Vikram Shinde pulled out a long, rusty iron butcher's knife from his jacket and repeatedly stabbed Ganesh in the chest and stomach with murderous intent.
6. Ganesh cried out in blood and collapsed. I saw everything clearly with my own eyes. I identify both accused standing in the dock.`
    }
  ],
  contradictions: [
    {
      id: "CONTRA-01",
      category: "TEMPORAL_CLASH",
      severity: "FATAL_IMPEACHMENT",
      title: "Blatant Time & Daylight Contradiction",
      description: "PW-1 initially registered the FIR reporting the attack at 9:45 PM in pitch dark blackout, but in court testified it happened at 6:15 PM in broad daylight to establish eye-witness visibility.",
      statutoryReference: "Section 145 Indian Evidence Act / Section 148 BSA",
      witness: "Ramesh Pawar (PW-1)",
      factA: {
        documentTitle: "FIR (CR No. 184/2024)",
        exhibitMark: "Ex. P-1",
        date: "02/07/2024 23:45 hrs",
        quote: "Today night at about 9:45 PM, there was a power blackout in our galli and the streetlights were completely off. It was pitch dark.",
        page: 1
      },
      factB: {
        documentTitle: "Examination-in-Chief Deposition",
        exhibitMark: "Ex. D-1",
        date: "14/02/2025",
        quote: "The incident took place in broad daylight at around 6:15 PM in the evening. The streetlights and market shop lights were bright.",
        page: 2
      },
      strategicImpact: "Destroys the witness's claim of having visually identified the accused's face. Proves the prosecution introduced an artificial timeline shift to overcome the blackout defense.",
      recommendedQuestionTreeId: "TREE-01"
    },
    {
      id: "CONTRA-02",
      category: "WEAPON_DISCREPANCY",
      severity: "FATAL_IMPEACHMENT",
      title: "Weapon Shift: Wooden Danda vs. Butcher Knife",
      description: "PW-1 originally told police Vikram wielded a wooden lathi/stick and hit Ganesh on the back, but upgraded his testimony in court to a rusty butcher's knife stabbing the chest.",
      statutoryReference: "Section 145 IEA / Section 148 BSA & Section 162 CrPC / 181 BNSS",
      witness: "Ramesh Pawar (PW-1)",
      factA: {
        documentTitle: "Sec 161 CrPC Statement",
        exhibitMark: "Ex. P-2",
        date: "03/07/2024",
        quote: "Accused Vikram Shinde was holding a wooden stick. He hit Ganesh once on the shoulder/back.",
        page: 1
      },
      factB: {
        documentTitle: "Examination-in-Chief Deposition",
        exhibitMark: "Ex. D-1",
        date: "14/02/2025",
        quote: "Accused Vikram Shinde pulled out a long, rusty iron butcher's knife from his jacket and repeatedly stabbed Ganesh in the chest and stomach.",
        page: 3
      },
      strategicImpact: "Conclusively impeaches witness veracity. Recovery of alleged knife under Section 27 Evidence Act can be challenged as a police fabrication.",
      recommendedQuestionTreeId: "TREE-02"
    },
    {
      id: "CONTRA-03",
      category: "MEDICAL_CONFLICT",
      severity: "FATAL_IMPEACHMENT",
      title: "Eyewitness Testimony vs. Post-Mortem Forensic Reality",
      description: "PW-1 testified under oath that the deceased was repeatedly stabbed in chest and abdomen, yet the Forensic Autopsy found ZERO stab or incised wounds.",
      statutoryReference: "Ram Narain v. State of Punjab (1975 SC Precedent on Medical Conflict)",
      witness: "Ramesh Pawar (PW-1) vs. Dr. Cooper (PW-4)",
      factA: {
        documentTitle: "Post-Mortem Report",
        exhibitMark: "Ex. P-4",
        date: "03/07/2024",
        quote: "NO INCISED WOUNDS, NO PENETRATING STAB WOUNDS... Cranio-cerebral damage resulting from blunt force impact to head, consistent with deceleration impact against a hard concrete surface.",
        page: 2
      },
      factB: {
        documentTitle: "Examination-in-Chief Deposition",
        exhibitMark: "Ex. D-1",
        date: "14/02/2025",
        quote: "Vikram Shinde repeatedly stabbed Ganesh in the chest and stomach with murderous intent.",
        page: 3
      },
      strategicImpact: "Supreme Court landmark ruling: Where ocular testimony is completely irreconcilable with unimpeachable medical evidence, ocular testimony must be discarded in toto.",
      recommendedQuestionTreeId: "TREE-03"
    },
    {
      id: "CONTRA-04",
      category: "MATERIAL_OMISSION",
      severity: "MATERIAL_VARIATION",
      title: "Material Omission & False Implication of Co-Accused Sunny",
      description: "Co-accused Sunny's active role of pinning the victim's arms was never stated to police in FIR or 161 statement; it is a belated court improvement.",
      statutoryReference: "Explanation to Section 162 CrPC / Section 181 BNSS (Material Omission equates to Contradiction)",
      witness: "Ramesh Pawar (PW-1)",
      factA: {
        documentTitle: "Sec 161 CrPC Statement",
        exhibitMark: "Ex. P-2",
        date: "03/07/2024",
        quote: "Vikram fled alone. Co-accused Sunny was not present at the spot when the blow was struck.",
        page: 1
      },
      factB: {
        documentTitle: "Examination-in-Chief Deposition",
        exhibitMark: "Ex. D-1",
        date: "14/02/2025",
        quote: "Sunny caught both arms of my brother Ganesh from behind so he could not move.",
        page: 3
      },
      strategicImpact: "Entitles co-accused Sunny to immediate acquittal under Section 232 CrPC / 255 BNSS, while severely tainting PW-1's overall truthfulness.",
      recommendedQuestionTreeId: "TREE-04"
    }
  ],
  questionTrees: [
    {
      id: "TREE-01",
      contradictionId: "CONTRA-01",
      witness: "Ramesh Pawar (PW-1)",
      targetStatement: "Incident occurred at 6:15 PM in broad daylight",
      stages: {
        commitmentQuestion: "Mr. Pawar, you have testified before this Hon'ble Court that on 2nd July 2024, the incident took place around 6:15 PM while the sun was out and visibility was clear, correct?",
        foundationQuestion: "On the very night of the occurrence, when your memory was completely fresh, you went to the MIDC Police Station and narrated the true events to Sub-Inspector Patil, did you not?",
        confrontationQuestion: "I show you your signature on Exhibit P-1 (FIR). Please read lines 7 to 9: Did you not state: 'Today night at about 9:45 PM, there was a power blackout in our galli and it was pitch dark'?",
        impeachmentAction: "Your Honour, under Section 145 Evidence Act (Sec 148 BSA), I confront the witness with portion marked 'A' of Ex. P-1 and request it be marked as Contradiction C-1."
      },
      branches: [
        {
          expectedAnswer: "YES",
          advocateFollowUp: "So when you told police it was 9:45 PM in pitch darkness, you were speaking the truth, which means your claim of broad daylight today is an afterthought concocted to save the case?",
          tacticalObjective: "Forces witness to admit timeline was changed or that FIR was false."
        },
        {
          expectedAnswer: "NO",
          advocateFollowUp: "Are you claiming the police officer fabricated the 9:45 PM timing and forged your signature on the FIR?",
          tacticalObjective: "Impeaches police investigation and prosecution's primary registration document."
        },
        {
          expectedAnswer: "I_DO_NOT_RECALL",
          advocateFollowUp: "If you cannot recall whether an assault on your own brother happened in the afternoon sun or midnight darkness, how can this Court rely on your identification of the accused?",
          tacticalObjective: "Demolishes eyewitness certainty and reliable memory capacity."
        }
      ]
    },
    {
      id: "TREE-03",
      contradictionId: "CONTRA-03",
      witness: "Ramesh Pawar (PW-1)",
      targetStatement: "Accused stabbed the victim repeatedly in the chest and stomach with a butcher knife",
      stages: {
        commitmentQuestion: "You are certain that Vikram Shinde struck your brother with a sharp knife in the chest and stomach multiple times?",
        foundationQuestion: "You saw blood gushing from his chest right before your eyes?",
        confrontationQuestion: "I present Exhibit P-4, the official Autopsy Report by Cooper Hospital, which certifies that there is NOT A SINGLE incised or stab wound anywhere on the deceased's body. How do you explain this imaginary knife?",
        impeachmentAction: "Praying for judicial notice under Section 57 IEA that the witness is giving perjured ocular evidence diametrically opposed to scientific forensic findings."
      },
      branches: [
        {
          expectedAnswer: "YES",
          advocateFollowUp: "So Dr. Cooper and the forensic autopsy team are lying, but only your invisible stab wounds exist?",
          tacticalObjective: "Showcase absurdity of ocular evidence before the Sessions Judge."
        },
        {
          expectedAnswer: "NO",
          advocateFollowUp: "Then you admit you never saw a knife, and the entire stabbing narrative was scripted later?",
          tacticalObjective: "Procure outright concession on weapon fabrication."
        },
        {
          expectedAnswer: "I_DO_NOT_RECALL",
          advocateFollowUp: "I put it to you that Ganesh was heavily intoxicated, stumbled over the concrete curbstone, suffered a fatal head concussion, and you exploited his accidental death to settle a land score with Vikram Shinde!",
          tacticalObjective: "Establish defense theory firmly in cross-examination record."
        }
      ]
    }
  ]
};

export const delhiBallisticsDocket: CaseDocket = {
  caseNumber: "SC/912/2025",
  caseTitle: "State of NCT of Delhi vs. Tariq Khan & Ors.",
  court: "Special Sessions Court, Patiala House Courts, New Delhi (Courtroom 04)",
  presidingJudge: "Hon'ble Special Judge M. K. Sharma",
  sectionsCharged: ["Arms Act Sec 25/27", "IPC Section 307 (Attempt to Murder)", "IPC Section 353", "BNS Section 109"],
  prosecutionAdvocate: "Addl. Public Prosecutor Shri Rajesh Taneja",
  defenseAdvocate: "Senior Advocate Tariq Siddiqui & War Room Team",
  defenseTheory: "Staged encounter recovery; CFSL Ballistic analysis certifies the seized country-made firearm had a fractured firing pin and was mechanically incapable of discharge.",
  credibilityScore: 91,
  documents: [
    {
      id: "DOC-DEL-FIR-01",
      type: "FIR",
      title: "First Information Report (CR No. 412/2024, Tilak Marg PS)",
      sourceExhibit: "Ex. P-1",
      recordedDate: "2024-09-15T22:30:00Z",
      author: "Sub-Inspector Arvind Rawat, Special Staff",
      witnessName: "SI Arvind Rawat (Complainant / PW-1)",
      pageCount: 3,
      content: `FIRST INFORMATION REPORT (Under Section 154 CrPC / 173 BNSS)
Police Station: Tilak Marg, New Delhi | Date of Incident: 15/09/2024 at 20:15 hrs.
Statement of SI Arvind Rawat:
"During vehicle checking at India Gate C-Hexagon, accused Tariq Khan stopped his motorcycle, drew a black 9mm semi-automatic pistol, and fired two live rounds directly at the police team. Const. Satish ducked and the bullet ricocheted off the PCR Gypsy door. We tackled the accused and recovered the hot weapon on the spot with two spent cartridges."`
    },
    {
      id: "DOC-DEL-161-01",
      type: "POLICE_STATEMENT_161",
      title: "Statement of Head Constable Satish (Eye-Witness)",
      sourceExhibit: "Ex. P-2",
      recordedDate: "2024-09-16T08:00:00Z",
      author: "Inspector Devendra Singh (I.O.)",
      witnessName: "HC Satish (PW-2)",
      pageCount: 2,
      content: `STATEMENT UNDER SECTION 161 CrPC:
"I was standing 5 meters away. Accused Tariq fired two rapid shots from a pistol. The barrel flashed twice in the darkness. The weapon recovered was a 9mm pistol stamped Made in USA."`
    },
    {
      id: "DOC-DEL-CFSL-01",
      type: "FORENSIC_REPORT",
      title: "CFSL Ballistics Examination Report (Lodhi Road CFSL)",
      sourceExhibit: "Ex. P-3",
      recordedDate: "2024-10-10T16:00:00Z",
      author: "Dr. K. N. Banerjee, Senior Scientific Officer (Ballistics)",
      witnessName: "Dr. K. N. Banerjee (Ballistic Expert / PW-5)",
      pageCount: 4,
      content: `CENTRAL FORENSIC SCIENCE LABORATORY (CFSL), NEW DELHI
REPORT NO: CFSL/DEL/BALL/2024/771
Item Parcel 'A': One improvised .315 bore country-made single-shot pistol (desi katta).
Item Parcel 'B': Two fired 9mm cartridge cases recovered from scene.

EXAMINATION & TEST-FIRING RESULTS:
1. The country-made firearm marked Exhibit W-1 is chambered for .315 caliber ammunition. Fired 9mm cartridge cases of Parcel 'B' CANNOT be fired from this firearm due to chamber dimensional incompatibility.
2. The firing pin of Exhibit W-1 was found heavily rusted, fractured, and mechanically defective. TEST FIRING FAILED in laboratory conditions.
CONCLUSION:
The weapon Exhibit W-1 was incapable of firing ammunition in its present condition on 15/09/2024.`
    },
    {
      id: "DOC-DEL-DEP-01",
      type: "DEPOSITION_CHIEF",
      title: "Courtroom Deposition of SI Arvind Rawat (PW-1)",
      sourceExhibit: "Ex. D-1",
      recordedDate: "2025-01-22T11:30:00Z",
      author: "Sessions Court Stenographer",
      witnessName: "SI Arvind Rawat (PW-1 on Oath)",
      pageCount: 5,
      content: `EXAMINATION-IN-CHIEF OF PW-1:
"The accused fired at us twice with Exhibit W-1. The bullets hit our PCR vehicle. I personally seized the pistol, sealed it in cloth pulanda with seal 'AR', and sent it to CFSL. There was no tampering. He intentionally tried to kill us."`
    }
  ],
  contradictions: [
    {
      id: "DEL-CONTRA-01",
      category: "WEAPON_DISCREPANCY",
      severity: "FATAL_IMPEACHMENT",
      title: "Physical Weapon Impossibility: .315 Pistol vs 9mm Ammunition",
      description: "Police claimed accused fired 9mm rounds from the seized weapon; CFSL report proved seized weapon is a .315 bore country-made katta which physically cannot chamber or fire 9mm cartridges.",
      statutoryReference: "Section 145 IEA / 148 BSA & State of UP v. Sughar Singh (1978 SC)",
      witness: "SI Arvind Rawat (PW-1)",
      factA: {
        documentTitle: "FIR No. 412/2024",
        exhibitMark: "Ex. P-1",
        date: "15/09/2024",
        quote: "Accused drew a 9mm semi-automatic pistol and fired two live rounds directly at the police team.",
        page: 1
      },
      factB: {
        documentTitle: "CFSL Ballistics Report",
        exhibitMark: "Ex. P-3",
        date: "10/10/2024",
        quote: "Firearm marked Exhibit W-1 is chambered for .315 caliber. Fired 9mm cartridge cases CANNOT be fired from this firearm.",
        page: 2
      },
      strategicImpact: "Conclusively establishes weapon planting. The recovery is fabricated under Section 27 Evidence Act.",
      recommendedQuestionTreeId: "DEL-TREE-01"
    },
    {
      id: "DEL-CONTRA-02",
      category: "MATERIAL_OMISSION",
      severity: "FATAL_IMPEACHMENT",
      title: "Broken Firing Pin vs. Claim of Active Live Fire",
      description: "PW-1 testified under oath that the accused discharged two rounds at the police team; CFSL certified the weapon was mechanically dead with a rusted fractured firing pin.",
      statutoryReference: "Section 145 IEA / 148 BSA (Physical Impossibility Impeachment)",
      witness: "SI Arvind Rawat (PW-1) vs CFSL Expert",
      factA: {
        documentTitle: "Courtroom Deposition (Chief)",
        exhibitMark: "Ex. D-1",
        date: "22/01/2025",
        quote: "The accused fired at us twice with Exhibit W-1... I personally seized the hot weapon on the spot.",
        page: 2
      },
      factB: {
        documentTitle: "CFSL Ballistics Report",
        exhibitMark: "Ex. P-3",
        date: "10/10/2024",
        quote: "Firing pin was found heavily rusted, fractured, and mechanically defective. Weapon was incapable of firing.",
        page: 3
      },
      strategicImpact: "Destroys Section 307 IPC attempt to murder charges. Mandates summary dismissal of firing narrative.",
      recommendedQuestionTreeId: "DEL-TREE-02"
    }
  ],
  questionTrees: [
    {
      id: "DEL-TREE-01",
      contradictionId: "DEL-CONTRA-01",
      witness: "SI Arvind Rawat (PW-1)",
      targetStatement: "Accused fired 9mm rounds from the seized firearm",
      stages: {
        commitmentQuestion: "Sub-Inspector Rawat, you are trained in police ballistics and you specifically swore in Exhibit P-1 that you heard two 9mm gunshots, correct?",
        foundationQuestion: "You personally sealed Exhibit W-1 at the spot without letting anyone tamper with the chamber, correct?",
        confrontationQuestion: "I show you Exhibit P-3, the Senior Scientific Officer's CFSL Report. Can you explain to his Lordship how a .315 single-shot country-made barrel could magically fire two 9mm factory-rimmed cartridges?",
        impeachmentAction: "Praying for dismissal of encounter evidence under Sec 145 IEA; witness has presented demonstrably forged physical evidence."
      },
      branches: [
        {
          expectedAnswer: "YES",
          advocateFollowUp: "Then you admit the 9mm cartridges produced in court were planted by your team from another incident?",
          tacticalObjective: "Procure concession on planted evidentiary shells."
        },
        {
          expectedAnswer: "NO",
          advocateFollowUp: "If you don't understand the difference between .315 and 9mm, on what basis did you file an attempt to murder charge against the accused?",
          tacticalObjective: "Demolish professional investigation competence."
        },
        {
          expectedAnswer: "I_DO_NOT_RECALL",
          advocateFollowUp: "You cannot recall the caliber of the gun that allegedly almost killed your head constable 4 months ago?",
          tacticalObjective: "Expose witness prevarication to the Sessions Judge."
        }
      ]
    }
  ]
};

export const cbiSecuritiesDocket: CaseDocket = {
  caseNumber: "CBI/519/2024",
  caseTitle: "CBI vs. Harshad Singhania & Singhania Infrastructure Ltd.",
  court: "Special CBI Court, Rouse Avenue District Courts, New Delhi (Courtroom 02)",
  presidingJudge: "Hon'ble Special Judge Smt. Ananya Sen",
  sectionsCharged: ["IPC Section 420 (Cheating)", "IPC Section 120B (Criminal Conspiracy)", "PC Act Sec 13(1)(d)", "BNS 318(4)"],
  prosecutionAdvocate: "Special Public Prosecutor Shri K. V. Raman",
  defenseAdvocate: "Adv. Gaurav Shivhare & Strategic Litigation Group",
  defenseTheory: "All fund disbursements were pre-approved by the Bank Credit Committee via Board Resolution #BR-2023-14; complainant suppressed certified bank minutes.",
  credibilityScore: 78,
  documents: [
    {
      id: "DOC-CBI-FIR-01",
      type: "FIR",
      title: "CBI Regular Case (RC 220/2024/EOW-III)",
      sourceExhibit: "Ex. P-1",
      recordedDate: "2024-04-12T14:00:00Z",
      author: "DSP Vikramaditya Singh, CBI EOW",
      witnessName: "Complainant GM N. K. Murthy (PW-1)",
      pageCount: 4,
      content: `REGULAR CASE (FIR) UNDER SECTION 154 CrPC
CBI/EOW-III/New Delhi | Accused: Harshad Singhania, MD
Allegation: Accused clandestinely diverted Rs. 42 Crores on 12/03/2023 from Consortium Loan Account without any bank approval or credit sanction.`
    },
    {
      id: "DOC-CBI-AUDIT-01",
      type: "FORENSIC_REPORT",
      title: "Statutory Consortium Audit & SWIFT Ledger",
      sourceExhibit: "Ex. D-2",
      recordedDate: "2024-06-20T17:00:00Z",
      author: "M/s Deloitte & Touche Forensic Audit",
      witnessName: "Auditor Sameer Chawla",
      pageCount: 8,
      content: `FORENSIC AUDIT REPORT:
Disbursement of Rs. 42 Crores on 12/03/2023 was executed pursuant to Bank Consortium Board Resolution #BR-2023-14 dated 18/02/2023, co-signed by Complainant GM N. K. Murthy himself. No diversion detected.`
    },
    {
      id: "DOC-CBI-DEP-01",
      type: "DEPOSITION_CHIEF",
      title: "Deposition of General Manager N. K. Murthy",
      sourceExhibit: "Ex. D-1",
      recordedDate: "2025-02-05T12:00:00Z",
      author: "CBI Court Stenographer",
      witnessName: "N. K. Murthy (Complainant / PW-1)",
      pageCount: 6,
      content: `EXAMINATION-IN-CHIEF:
"The accused transferred the funds completely behind our back. The bank never passed any board resolution authorizing this tranche. I never signed any sanction letter."`
    }
  ],
  contradictions: [
    {
      id: "CBI-CONTRA-01",
      category: "MATERIAL_OMISSION",
      severity: "FATAL_IMPEACHMENT",
      title: "Sanction Authorization Contradiction: Board Resolution Signature",
      description: "Complainant GM swore under oath the bank never sanctioned the tranche; Exhibit D-2 forensic audit bears his own registered signature on Board Resolution #BR-2023-14.",
      statutoryReference: "Section 145 IEA / 148 BSA & Section 65B Indian Evidence Act",
      witness: "N. K. Murthy (PW-1)",
      factA: {
        documentTitle: "CBI Regular Case FIR",
        exhibitMark: "Ex. P-1",
        date: "12/04/2024",
        quote: "Accused clandestinely diverted Rs. 42 Crores without any bank approval or credit sanction.",
        page: 1
      },
      factB: {
        documentTitle: "Board Resolution #BR-2023-14",
        exhibitMark: "Ex. D-2",
        date: "18/02/2023",
        quote: "Disbursement executed pursuant to Board Resolution co-signed by Complainant GM N. K. Murthy himself.",
        page: 3
      },
      strategicImpact: "Destroys dishonest misappropriation element of Section 420 IPC. Establishes commercial dispute maliciously criminalized.",
      recommendedQuestionTreeId: "CBI-TREE-01"
    }
  ],
  questionTrees: [
    {
      id: "CBI-TREE-01",
      contradictionId: "CBI-CONTRA-01",
      witness: "N. K. Murthy (PW-1)",
      targetStatement: "Bank never authorized the Rs. 42 Cr loan tranche",
      stages: {
        commitmentQuestion: "Mr. Murthy, you affirmed on oath that no officer of your bank, including yourself, ever approved the March 2023 transfer, correct?",
        foundationQuestion: "As General Manager, you are required under Banking Regulation Act to verify your signature on all consortium board minutes, correct?",
        confrontationQuestion: "I present Exhibit D-2, certified under Section 65B IEA / Section 63 BSA. Is that not your digital signature and stamp approving the exact Rs. 42 Crores disbursement on 18th February 2023?",
        impeachmentAction: "Praying for prosecution under Section 193/195 IPC for tendering false criminal complaint before CBI."
      },
      branches: [
        {
          expectedAnswer: "YES",
          advocateFollowUp: "So you initiated a criminal CBI prosecution knowing full well you had personally authorized the disbursement?",
          tacticalObjective: "Compel witness into admitting malicious prosecution."
        },
        {
          expectedAnswer: "NO",
          advocateFollowUp: "Are you suggesting your own bank's digital key infrastructure and audited consortium records are forged?",
          tacticalObjective: "Impeach bank's internal record keeping."
        },
        {
          expectedAnswer: "I_DO_NOT_RECALL",
          advocateFollowUp: "You cannot recall approving a 42-crore tranche that forms the entire basis of this CBI trial?",
          tacticalObjective: "Demonstrate gross witness unreliability to Special Judge."
        }
      ]
    }
  ]
};

export const allSampleDockets: CaseDocket[] = [
  benchmarkCaseDocket,
  delhiBallisticsDocket,
  cbiSecuritiesDocket
];

