# Documentation Strategy

This repository defines the strategy for structuring AI-facing documentation in
projects that use AI coding agents.

## Core Principle

```yaml
priority:
  1: "Information accuracy — documents must be correct and complete"
  2: "Proper routing — the agent reads only what it needs, when it needs it"
  3: "Token efficiency — minimize waste, but never at the cost of accuracy"
```

Documentation lives under `documents/` and is entirely AI-facing. Human-facing
content lives in `docs-jp/`. See `artifacts/INDEX.md` for the full strategy.

## Repository Layout

```yaml
artifacts/: "Exported strategy files (copy into target projects)"
documents/: "AI-facing project documentation (INDEX.md + project/ + reference/)"
docs-jp/: "Human-facing documentation (Japanese)"
```

## Exported Artifacts

1. `INDEX.md` — entry point, read order, ownership map
2. `DOCUMENTATION_PHILOSOPHY.md` — accuracy priority, scope, git as recording
3. `FILE_AND_STRUCTURE.md` — file roles, versioning, git conventions, hierarchy
4. `DOCUMENT_WORKFLOW.md` — setup, update, brownfield, version bumping

## Usage

### Git Submodule

```bash
git submodule add https://github.com/Daiki-Yoshida/documentation-strategy.git documentation-strategy
git submodule update --init --recursive
```

Then instruct the AI agent:
> "Based on `documentation-strategy/artifacts/INDEX.md`, set up the documentation for this project."

### Copy Script

```bash
./copy-design-docs.sh path/to/target/artifacts
```

## License

MIT License — see `LICENSE` for details.
