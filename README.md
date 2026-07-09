# Documentation Strategy & AI Standards

This repository is the master source for the AI-agent documentation strategy — the structural rules that govern how AI-facing and human-facing documents are organized in projects that use AI coding agents.

## Scope Boundary

The repository has two document scopes:

```yaml
artifacts:
  path: "artifacts/"
  meaning: "documents produced by this repository"
  usage: "copy or reference from target projects"

repository_docs:
  path: "documents/project/"
  meaning: "documentation about this repository itself"
  usage: "maintain this repository"
```

If a document is meant to guide another project, it belongs under `artifacts/`.
If a document explains how this repository is organized or maintained, it belongs under `documents/project/`.

## Core Paradigm

The central philosophy is **AI-Agent Priority**.

```yaml
contract: "Structure + Routing + Token Optimization"
priority:
  1: "AI agent processing efficiency over human readability"
  2: "token optimization"
  3: "cognitive load reduction"
  4: "single source of truth (duplicate elimination)"
  5: "universality (single and hierarchical projects, any scale)"
```

> AI efficiency > human readability.

Documentation is structured so AI agents can locate the right context with minimal token cost. Human-facing documents are a separate, clearly-scoped concern — not the default.

## Exported Artifacts

AI-agent guidance artifacts live in `artifacts/`:

1. `AI_DOC_STRATEGY.md`: the documentation strategy itself — file roles, directory structure, hierarchy rules, format standards, and routing.

To copy the exported artifacts into another project's AI-agent document directory:

```bash
./copy-design-docs.sh path/to/target/documents/agents
```

## Repository Documentation

Repository-local documentation lives in `documents/project/`:

- `PROJECT_OVERVIEW_JP.md`: Japanese overview for maintainers.
- `REPOSITORY_STRUCTURE.md`: scope and directory classification rules.

Non-exported reference material lives in `documents/reference/`:

- `AI_DOC_STRATEGY_DESIGN.md`: design notes for strategy revisions.
- `examples/`: concrete implementation examples (single-project and multi-project). Not exported; used to validate and illustrate the strategy within this repository.

## Usage in Target Projects

### Git Submodule (recommended)

```bash
git submodule add https://github.com/Daiki-Yoshida/documentation-strategy.git documentation-strategy
git submodule update --init --recursive
```

Then instruct the AI agent:
> "Based on `documentation-strategy/artifacts/AI_DOC_STRATEGY.md`, create the CLAUDE.md / AGENTS.md and PROJECT.md for this project."

### Copy Script

```bash
./copy-design-docs.sh path/to/target/documents/agents
```

The script copies `artifacts/*.md` into the destination directory.

## License

MIT License — see `LICENSE` for details.

## Related Links

- [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code)
- [Google Gemini API Documentation](https://developers.google.com/gemini)
