# Documentation Strategy - Index

```yaml
document_type: "index"
target_audience: "ai_agents"
language: "english"
role: "entry point for the documentation strategy artifact set"
strategy_version: "2.0.0"
```

This is the entry point for the exported strategy. Read it first.

## Read Order

```yaml
1_philosophy: "DOCUMENTATION_PHILOSOPHY.md"   # WHY:  accuracy priority, scope, git as recording
2_structure:  "FILE_AND_STRUCTURE.md"         # HOW+WHERE: file roles, directory layout, versioning, git conventions
3_workflow:   "DOCUMENT_WORKFLOW.md"           # FLOW: setup, update, brownfield, version bumping
```

On first contact, read 1 → 2 → 3. For a specific task, jump via Quick Task Routing.

## Ownership Map (Single Source of Truth)

Each concept lives in exactly ONE document. Link, never duplicate.

```yaml
DOCUMENTATION_PHILOSOPHY.md:
  owns:
    - "Information accuracy as top priority (accuracy > token efficiency)"
    - "Scope boundary: documents/ only, not code"
    - "Git as a recording tool (principle, not timing)"
    - "AI-facing by default; human-facing is a separate concern"
    - "Routing over truncation: split files, do not shrink information"
    - "Common misreadings"

FILE_AND_STRUCTURE.md:
  owns:
    - "documents/ directory: all AI-facing"
    - "docs-jp/ directory: human-facing (Japanese)"
    - "INDEX.md role: routing hub + document version registry"
    - "File roles: agent entry files, INDEX.md, project docs, reference docs"
    - "Document versioning system: semantic version + git commit hash"
    - "Git commit message conventions for documentation"
    - "Cross-reference and routing strategy"
    - "Hierarchical projects (parent-child documentation)"
    - "File format standards"

DOCUMENT_WORKFLOW.md:
  owns:
    - "New project setup: step-by-step"
    - "Brownfield adoption: audit, classify, migrate"
    - "Ongoing document updates"
    - "Version bumping workflow"
    - "Re-read triggers"
    - "Confirmation gate (L0–L3)"
```

## Quick Task Routing

```yaml
"setting up docs for a new project":       "DOCUMENT_WORKFLOW.md (New Project Setup) + FILE_AND_STRUCTURE.md (File Roles)"
"adopting strategy in existing project":    "DOCUMENT_WORKFLOW.md (Brownfield Adoption)"
"updating an existing document":            "DOCUMENT_WORKFLOW.md (Ongoing Updates) + FILE_AND_STRUCTURE.md (find the right file)"
"bumping a document version":               "DOCUMENT_WORKFLOW.md (Version Bumping) + FILE_AND_STRUCTURE.md (Versioning System)"
"writing a git commit message for docs":    "FILE_AND_STRUCTURE.md (Git Commit Conventions)"
"which file should hold this information":  "FILE_AND_STRUCTURE.md (File Role Definitions)"
"how to structure a multi-service project": "FILE_AND_STRUCTURE.md (Hierarchical Projects)"
"setting up documents/INDEX.md":            "FILE_AND_STRUCTURE.md (INDEX.md Role) + DOCUMENT_WORKFLOW.md (New Project Setup)"
"when should I re-read this strategy":      "DOCUMENT_WORKFLOW.md (Re-read Triggers)"
"what does this strategy govern":           "DOCUMENTATION_PHILOSOPHY.md (Scope Boundary)"
```
