# Review Instructions

```yaml
document_type: "review_instructions"
target_audience: "ai_agents"
language: "english"
purpose: "self-contained prompt for reviewing artifacts/"
usage: "Tell the AI agent: '@documents/reference/REVIEW_INSTRUCTIONS.md を読んで実行して'"
output_location: "documents/tmp/"
output_format: "documents/tmp/YYYY-MM-DD_review_<agent_name>.md"
mode: "review_only — DO NOT modify artifacts/ files"
```

---

## Your Task

You are a documentation strategy reviewer. Review the four strategy artifacts
in `artifacts/` and produce a review report. **Do NOT modify any files.**
Output only a review report to `documents/tmp/`.

---

## Target Files

```yaml
artifacts_to_review:
  - path: "artifacts/INDEX.md"
    role: "entry point, read order, ownership map, quick task routing"
  - path: "artifacts/DOCUMENTATION_PHILOSOPHY.md"
    role: "WHY — accuracy priority, scope, git as recording, design-principles relationship"
  - path: "artifacts/FILE_AND_STRUCTURE.md"
    role: "HOW+WHERE — file roles, directory layout, versioning, git conventions, hierarchy, deletion"
  - path: "artifacts/DOCUMENT_WORKFLOW.md"
    role: "FLOW — setup, update, brownfield, staleness handling, version bumping, deletion"
```

Read all four files completely before evaluating.

---

## Project Context (Minimal)

This repository defines a documentation strategy for projects that use AI
coding agents. The strategy is exported via `artifacts/` and copied into
target projects. The current strategy version is 2.1.0.

```yaml
core_principle: "Information accuracy > routing > token efficiency"
scope: "documents/ only — not code design, not git timing"
audience: "documents/ is AI-facing; docs-jp/ is human-facing (Japanese)"
recording: "Git is the recording tool — commit message format + version tracking, not timing"
```

---

## Review Criteria

Evaluate each file against the following criteria. For each finding, classify
severity and provide a concrete suggestion.

### 1. Internal Consistency

```yaml
checks:
  - "Does the file contradict itself anywhere?"
  - "Are YAML field names and values consistent within the file?"
  - "Do section numbers and cross-references match?"
  - "Does the Ownership Map in INDEX.md match the actual content of each file?"
```

### 2. Cross-File Consistency

```yaml
checks:
  - "Do the four files contradict each other?"
  - "Does a concept in one file duplicate (not link) a concept owned by another file?"
  - "Are cross-references between files accurate (paths, section numbers)?"
  - "Does each file's ownership_split accurately describe the other files?"
```

### 3. Executability

```yaml
checks:
  - "Can an AI agent follow the workflow steps as written?"
  - "Are there any circular dependencies or chicken-and-egg problems?"
  - "Are git commands and examples correct and runnable?"
  - "Are decision trees unambiguous — every branch leads to a clear action?"
```

### 4. Completeness

```yaml
checks:
  - "Are there edge cases not covered (e.g., empty project, single-file project, massive monorepo)?"
  - "Are there scenarios where an agent would not know what to do?"
  - "Is any referenced section missing from the target file?"
  - "Are there implicit assumptions not stated?"
```

### 5. Clarity

```yaml
checks:
  - "Would an AI agent unfamiliar with this strategy understand the instructions?"
  - "Are YAML blocks self-explanatory, or do they need surrounding prose?"
  - "Are there ambiguous terms that could be interpreted multiple ways?"
  - "Is the distinction between rules and guidelines clear?"
```

### 6. Structural Integrity

```yaml
checks:
  - "Does the Read Order in INDEX.md match the logical dependency chain?"
  - "Is the Quick Task Routing comprehensive enough for common tasks?"
  - "Are section headings descriptive and consistent in style?"
  - "Is the file length justified by the content, or could sections be split/merged?"
```

---

## Output Format

Write your review to `documents/tmp/YYYY-MM-DD_review_<your_agent_name>.md`
(replace YYYY-MM-DD with today's date, and `<your_agent_name>` with your
model/tool name, e.g., `claude`, `gemini`, `devin`).

Use this exact structure:

```markdown
# Artifacts Review — YYYY-MM-DD

```yaml
reviewer: "<your_agent_name>"
date: "YYYY-MM-DD"
strategy_version_reviewed: "2.1.0"
files_reviewed:
  - "artifacts/INDEX.md"
  - "artifacts/DOCUMENTATION_PHILOSOPHY.md"
  - "artifacts/FILE_AND_STRUCTURE.md"
  - "artifacts/DOCUMENT_WORKFLOW.md"
```

## Summary

```yaml
total_findings: <number>
by_severity:
  critical: <number>
  major: <number>
  minor: <number>
  suggestion: <number>
overall_assessment: "<one or two sentences>"
```

## Findings

### Finding 1: <short title>

```yaml
severity: "critical | major | minor | suggestion"
criterion: "internal_consistency | cross_file_consistency | executability | completeness | clarity | structural_integrity"
location: "artifacts/<file>.md, §<section> or line <n>"
description: "<what the problem is>"
suggestion: "<concrete fix or improvement>"
```

### Finding 2: ...

(continue for all findings)

## Strengths

```yaml
- "<what the strategy does well>"
- "<what should be preserved>"
```

## Overall Recommendations

```yaml
- "<high-level recommendation>"
- "<high-level recommendation>"
```
```

---

## Rules

```yaml
must:
  - "Read all four artifacts/ files completely before evaluating."
  - "Output ONLY to documents/tmp/YYYY-MM-DD_review_<agent_name>.md."
  - "Use the exact output format above."
  - "Classify every finding with severity and criterion."
  - "Provide concrete, actionable suggestions — not vague observations."
  - "Note strengths as well as weaknesses."

must_not:
  - "DO NOT modify any files in artifacts/ or documents/."
  - "DO NOT create files outside documents/tmp/."
  - "DO NOT execute git commands other than reading (git log, git show for reference)."
  - "DO NOT reformat, reorder, or 'fix' the artifacts during review."
  - "DO NOT skip criteria — evaluate all six even if no findings."
```

---

## Severity Definitions

```yaml
critical: "The strategy contains a contradiction or impossible instruction that would cause an AI agent to fail or produce incorrect results."
major: "A significant gap or ambiguity that would cause confusion or inconsistent behavior in real use."
minor: "A small inconsistency, typo, or unclear phrasing that does not break functionality but should be fixed."
suggestion: "An improvement idea — not a defect, but a way to make the strategy better."
```
