import { describe, it, expect } from 'vitest';
import { CrossExamGenerator } from '../src/engine/crossExamGenerator';
import { benchmarkCaseDocket } from '../src/data/sampleCases';

describe('Task 3: Cross-Examination Question Tree Generator', () => {
  it('should generate a 4-stage question tree for any contradiction', () => {
    const contra = benchmarkCaseDocket.contradictions[0];
    const tree = CrossExamGenerator.generateForContradiction(contra);

    expect(tree.id).toContain('TREE-');
    expect(tree.stages.commitmentQuestion).toBeDefined();
    expect(tree.stages.foundationQuestion).toBeDefined();
    expect(tree.stages.confrontationQuestion).toBeDefined();
    expect(tree.stages.impeachmentAction).toBeDefined();
  });

  it('should tailor the questions according to statutory contradiction category', () => {
    const medContra = benchmarkCaseDocket.contradictions.find(c => c.category === 'MEDICAL_CONFLICT')!;
    const tree = CrossExamGenerator.generateForContradiction(medContra);

    expect(tree.stages.confrontationQuestion).toContain('Forensic');
    expect(tree.stages.impeachmentAction).toContain('Ram Narain');
  });

  it('should generate adaptive response branches for YES, NO, and I_DO_NOT_RECALL', () => {
    const weaponContra = benchmarkCaseDocket.contradictions.find(c => c.category === 'WEAPON_DISCREPANCY')!;
    const tree = CrossExamGenerator.generateForContradiction(weaponContra);

    expect(tree.branches.length).toBe(3);
    const answers = tree.branches.map(b => b.expectedAnswer);
    expect(answers).toContain('YES');
    expect(answers).toContain('NO');
    expect(answers).toContain('I_DO_NOT_RECALL');

    for (const branch of tree.branches) {
      expect(branch.advocateFollowUp.length).toBeGreaterThan(15);
      expect(branch.tacticalObjective.length).toBeGreaterThan(10);
    }
  });
});
