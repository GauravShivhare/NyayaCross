import { describe, it, expect } from 'vitest';
import { benchmarkCaseDocket } from '../src/data/sampleCases';

describe('Task 1: Benchmark Case Docket & Schema Integrity', () => {
  it('should load benchmark docket with valid courtroom metadata', () => {
    expect(benchmarkCaseDocket.caseNumber).toBe('SC/842/2025');
    expect(benchmarkCaseDocket.sectionsCharged).toContain('BNS Section 103(1) (Murder)');
    expect(benchmarkCaseDocket.documents.length).toBeGreaterThanOrEqual(4);
  });

  it('should contain all essential trial documents (FIR, 161, Medical, Deposition)', () => {
    const docTypes = benchmarkCaseDocket.documents.map(d => d.type);
    expect(docTypes).toContain('FIR');
    expect(docTypes).toContain('POLICE_STATEMENT_161');
    expect(docTypes).toContain('MEDICAL_REPORT');
    expect(docTypes).toContain('DEPOSITION_CHIEF');
  });

  it('should have properly structured contradictions with statutory references', () => {
    expect(benchmarkCaseDocket.contradictions.length).toBeGreaterThanOrEqual(3);
    for (const c of benchmarkCaseDocket.contradictions) {
      expect(c.id).toBeDefined();
      expect(c.severity).toMatch(/FATAL_IMPEACHMENT|MATERIAL_VARIATION|MINOR_DISCREPANCY/);
      expect(c.factA.quote.length).toBeGreaterThan(10);
      expect(c.factB.quote.length).toBeGreaterThan(10);
      expect(c.statutoryReference.length).toBeGreaterThan(5);
    }
  });

  it('should map question trees with all 4 stages of cross-examination doctrine', () => {
    expect(benchmarkCaseDocket.questionTrees.length).toBeGreaterThanOrEqual(2);
    for (const qt of benchmarkCaseDocket.questionTrees) {
      expect(qt.stages.commitmentQuestion).toBeDefined();
      expect(qt.stages.foundationQuestion).toBeDefined();
      expect(qt.stages.confrontationQuestion).toBeDefined();
      expect(qt.stages.impeachmentAction).toBeDefined();
      expect(qt.branches.length).toBe(3); // YES, NO, I_DO_NOT_RECALL
    }
  });
});
