# documents/ — Routing Hub & Version Registry

```yaml
document_type: "index"
target_audience: "ai_agents"
language: "english"
project: "documentation-strategy"
index_version: "2.1.0"
last_updated_commit: "d94a6a7"
last_updated_date: "2025-07-09"
```

This is the routing hub for all AI-facing documentation in this project.
Read this first, then follow the routing to the document you need.

---

## Document Inventory

```yaml
documents:
  - path: "documents/INDEX.md"
    version: "2.0.0"
    last_updated_commit: "92787f4"
    last_updated_date: "2025-07-09"
    purpose: "Routing hub and version registry (this file)"

  - path: "documents/project/REPOSITORY_STRUCTURE.md"
    version: "1.0.0"
    last_updated_commit: "92787f4"
    last_updated_date: "2025-07-09"
    purpose: "Repository structure and file layout"

  - path: "documents/reference/AI_DOC_STRATEGY_DESIGN.md"
    version: "1.0.0"
    last_updated_commit: "92787f4"
    last_updated_date: "2025-07-09"
    purpose: "Design notes for the documentation strategy itself"

  - path: "documents/reference/REVIEW_INSTRUCTIONS.md"
    version: "1.0.0"
    last_updated_commit: "d94a6a7"
    last_updated_date: "2025-07-09"
    purpose: "Self-contained review prompt for AI agents to review artifacts/"

  - path: "documents/reference/examples/"
    version: "2.0.0"
    last_updated_commit: "92787f4"
    last_updated_date: "2025-07-09"
    purpose: "Example projects demonstrating the strategy (single-project and multi-project)"
```

---

## Routing Map

```yaml
task_routing:
  "understand the repository layout": "documents/project/REPOSITORY_STRUCTURE.md"
  "understand the strategy design rationale": "documents/reference/AI_DOC_STRATEGY_DESIGN.md"
  "review artifacts/": "documents/reference/REVIEW_INSTRUCTIONS.md"
  "see example projects": "documents/reference/examples/"
  "understand the strategy itself": "artifacts/INDEX.md (exported strategy — read this first)"
  "human-facing project overview (Japanese)": "docs-jp/PROJECT_OVERVIEW_JP.md"
  "human-facing strategy translations (Japanese)": "docs-jp/artifacts_jp/"
```

---

## Strategy Artifacts (Exported)

The strategy itself lives in `artifacts/` and is exported to target projects
via `copy-design-docs.sh`.

```yaml
artifacts:
  entry: "artifacts/INDEX.md"
  files:
    - "artifacts/INDEX.md — entry point, read order, ownership map"
    - "artifacts/DOCUMENTATION_PHILOSOPHY.md — WHY: accuracy, scope, git as recording"
    - "artifacts/FILE_AND_STRUCTURE.md — HOW+WHERE: file roles, versioning, git conventions"
    - "artifacts/DOCUMENT_WORKFLOW.md — FLOW: setup, update, version bumping"
```

---

## Cross-Reference Map

```yaml
references:
  documents/project/REPOSITORY_STRUCTURE.md:
    links_to: []
    linked_from: ["documents/INDEX.md"]
  documents/reference/AI_DOC_STRATEGY_DESIGN.md:
    links_to: []
    linked_from: ["documents/INDEX.md"]
  documents/reference/REVIEW_INSTRUCTIONS.md:
    links_to: ["artifacts/INDEX.md", "artifacts/DOCUMENTATION_PHILOSOPHY.md", "artifacts/FILE_AND_STRUCTURE.md", "artifacts/DOCUMENT_WORKFLOW.md"]
    linked_from: ["documents/INDEX.md"]
  documents/reference/examples/:
    links_to: []
    linked_from: ["documents/INDEX.md"]
  artifacts/INDEX.md:
    links_to: ["artifacts/DOCUMENTATION_PHILOSOPHY.md", "artifacts/FILE_AND_STRUCTURE.md", "artifacts/DOCUMENT_WORKFLOW.md"]
    linked_from: ["CLAUDE.md", "AGENTS.md", "README.md"]
```
