# Repository Structure

```yaml
document_version: "2.0.0"
document_scope: "repository_policy"
applies_to: "documentation-strategy repository only"
exported_artifact: false
language: "english"
```

## Boundary Rule

This repository separates its own project documentation from the strategy it produces.

```yaml
directories:
  artifacts/:
    role: "exported deliverables (the strategy itself)"
    rule: "markdown files here are intended to be copied or referenced by target projects"
    audience: "AI agents working in target projects"
  documents/:
    role: "AI-facing project documentation for this repository"
    audience: "AI agents working on this repository"
    structure:
      INDEX_md: "routing hub + version registry"
      project/: "project-level context"
      reference/: "reference material, examples"
  docs-jp/:
    role: "human-facing documentation (Japanese)"
    audience: "human maintainers and project owners"
  README.md:
    role: "brief human entry point (points to docs-jp/ for details)"
  CLAUDE.md:
    role: "Claude Code agent entry point"
  AGENTS.md:
    role: "Devin/Codex agent entry point"
```

## Classification Rule

Before adding or moving a document, classify it first:

```yaml
exported_artifact:
  location: "artifacts/"
  describes: "strategy guidance consumed by target projects"
  must_not_describe: "private maintenance rules for this repository"

ai_facing_project_doc:
  location: "documents/"
  describes: "AI-facing documentation about this repository"
  must_not_contain: "human-facing prose (that goes in docs-jp/)"

human_facing_doc:
  location: "docs-jp/"
  describes: "human-facing documentation (Japanese)"
  must_not_be: "AI-facing content (that goes in documents/)"

reference_material:
  location: "documents/reference/"
  describes: "examples, design notes, source material"
  default_copy_target: false
```

If a document contains both AI-facing and human-facing content, split it.
AI-facing content goes in `documents/`, human-facing content goes in `docs-jp/`.
