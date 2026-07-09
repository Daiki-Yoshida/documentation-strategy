# Repository Structure

```yaml
document_scope: "repository_policy"
applies_to: "documentation-strategy repository only"
exported_artifact: false
language: "english"
```

## Boundary Rule

This repository separates its own project documentation from the documents it produces.

```yaml
directories:
  artifacts/:
    role: "exported deliverables"
    rule: "markdown files here are intended to be copied or referenced by target projects"
    audience: "AI agents working in target projects"
  documents/project/:
    role: "repository-local documentation"
    audience: "maintainers and agents working on this repository"
  documents/reference/:
    role: "non-exported reference material"
    audience: "maintainers designing future artifacts"
  README.md:
    role: "human entry point for this repository"
  CLAUDE.md:
    role: "Claude Code agent entry point for this repository"
  AGENTS.md:
    role: "Devin/Codex agent entry point for this repository"
```

## Classification Rule

Before adding or moving a document, classify it first:

```yaml
exported_artifact:
  location: "artifacts/"
  describes: "guidance consumed by another project"
  must_not_describe: "private maintenance rules for this repository"

repository_policy:
  location: "documents/project/"
  describes: "how this repository is organized and maintained"
  must_not_be_copied_as: "target-project guidance"

reference_material:
  location: "documents/reference/"
  describes: "source material, design notes, or examples that may inform artifacts"
  default_copy_target: false
```

If a document contains both scopes, split it. Do not rely on prose to disambiguate scope.
