# File Roles & Directory Structure

```yaml
document_type: "file_and_structure"
target_audience: "ai_agents"
language: "english"
strategy_version: "2.0.0"
scope: "file roles, directory layout, versioning, git conventions, hierarchy"
```

```yaml
ownership_split:
  this_doc: "HOW + WHERE — file roles, directory layout, versioning, git conventions, hierarchy"
  DOCUMENTATION_PHILOSOPHY.md: "WHY — accuracy priority, scope, git as recording"
  DOCUMENT_WORKFLOW.md: "FLOW — setup, update, version bumping, brownfield"
  INDEX.md: "routes to all of the above"
```

---

## 1. Top-Level Directory Layout

```yaml
project_root:
  documents: "AI-facing documentation (all content under here is for AI agents)"
  docs-jp: "Human-facing documentation (Japanese, for project owners and developers)"
  artifacts: "Exported strategy files (this set) — copied into target projects"
  CLAUDE_md: "Claude Code entry point (project root)"
  AGENTS_md: "Devin / Codex entry point (project root)"
  GEMINI_md: "Gemini entry point (project root, if used)"
  README_md: "Brief human-facing project description (points to docs-jp/ for details)"
```

### documents/ — AI-Facing

```yaml
rule: "Everything under documents/ is written for AI agents to read."
language: "English by default. Japanese is allowed when the AI agent needs Japanese context (e.g., Japanese API specs, Japanese domain terms)."
structure:
  - "documents/INDEX.md — routing hub + version registry (required)"
  - "documents/project/ — project-level context (overview, architecture, constraints)"
  - "documents/reference/ — reference materials (specs, standards, examples)"
  - "documents/<topic>/ — topic-specific directories as needed"
principle: "Split by concern, not by audience. There is no audience split inside documents/ — it is all AI-facing."
```

### docs-jp/ — Human-Facing

```yaml
rule: "Human-facing content lives here, never under documents/."
language: "Japanese"
naming: "descriptive.md or descriptive_JP.md"
content_examples:
  - "Project background and motivation"
  - "Setup tutorials for human developers"
  - "Design rationale and decision records"
  - "Japanese translations of AI-facing documents (for human review)"
```

---

## 2. File Roles

### documents/INDEX.md (Required)

```yaml
purpose: "Routing hub + document version registry"
placement: "documents/INDEX.md"
required: true
content:
  - "Document inventory: every file under documents/ with its purpose"
  - "Routing map: which document to read for which task"
  - "Version registry: each document's version + last-updated git commit hash"
  - "Cross-reference map: which documents link to which"
```

See §4 "Document Versioning System" for the version registry format.

### Agent Entry Files (CLAUDE.md, AGENTS.md, GEMINI.md)

```yaml
purpose: "AI agent entry point — routes to documents/INDEX.md"
placement: "project root (one per agent tool)"
content:
  - "role: the agent's responsibility in this project"
  - "constraints: project-specific rules"
  - "emergency_action: what to do if intent is unclear"
  - "routing: documents/INDEX.md as primary reference"
  - "focus_files: glob patterns the agent should prioritize"
  - "current_priority: the current development focus"
design_rule: "The entry file routes; it does not explain. Detail lives under documents/."
when_to_create: "One file per AI tool the project actually uses. Do not create files for unused tools (YAGNI)."
```

### Project Documents (documents/project/)

```yaml
purpose: "Project-level context the AI agent needs for every task"
placement: "documents/project/"
content_examples:
  - "Project overview, objectives, scope"
  - "Architecture summary"
  - "Constraints (business rules, compliance, performance)"
  - "Current status and roadmap"
routing_rule: "INDEX.md routes to these files. Each file covers one concern."
```

### Reference Documents (documents/reference/)

```yaml
purpose: "Reference material the agent reads on demand"
placement: "documents/reference/"
content_examples:
  - "API specifications, data models, schemas"
  - "Coding standards specific to the project"
  - "Example projects demonstrating the strategy"
  - "Glossary, domain terms"
routing_rule: "Project documents and INDEX.md link to these when needed. The agent does not read them unless a task requires it."
```

### README.md

```yaml
purpose: "Brief human-facing project description"
placement: "project root"
audience: "human developers, project owners"
content: "One-paragraph project summary + pointer to docs-jp/ for details"
rule: "AI agents should NOT rely on README.md for project context. It is human-facing."
```

---

## 3. Cross-Reference and Routing Strategy

```yaml
routing_chain: "agent.md → documents/INDEX.md → project/ or reference/ → detail files"
principles:
  - "INDEX.md is the single routing hub. Every document is listed there."
  - "Each document links to related documents instead of duplicating content."
  - "One file = one concern. A task that touches one concern should require reading one file."
  - "The agent follows the routing chain only as far as needed."
  - "Cross-references use relative paths from the project root."
```

### Reference Format

```yaml
format: "markdown links with brief context"
example: "See [documents/project/architecture.md](../project/architecture.md) for the architecture overview."
rule: "Never duplicate content that exists elsewhere. Link to it with a one-sentence description."
```

---

## 4. Document Versioning System

Every document under `documents/` (except INDEX.md itself) has a version and
tracks the git commit at which it was last updated.

### Version Format

```yaml
scheme: "semantic versioning (MAJOR.MINOR.PATCH)"
major: "Structural change — file added, removed, renamed, or routing significantly changed"
minor: "Content addition or significant update — new section, new information"
patch: "Small fix — typo, clarification, minor correction"
initial_version: "1.0.0"
```

### Version Registry in INDEX.md

```yaml
# Example entry in documents/INDEX.md
documents:
  - path: "documents/project/overview.md"
    version: "1.2.0"
    last_updated_commit: "abc1234"
    last_updated_date: "2024-07-09"
    purpose: "Project overview and objectives"
  - path: "documents/project/architecture.md"
    version: "1.0.0"
    last_updated_commit: "def5678"
    last_updated_date: "2024-07-09"
    purpose: "Architecture summary"
```

### Per-Document Header

Each document includes a version header at the top:

```yaml
# At the top of each document file
---
document_version: "1.2.0"
last_updated_commit: "abc1234"
last_updated_date: "2024-07-09"
---
```

### Why Track Commit Hash

```yaml
rationale: |
  When an AI agent reads a document, it can check the commit hash to verify
  whether the document reflects the current state of the code. If the document's
  last_updated_commit is behind HEAD, the agent knows the document may be stale
  and should be verified against the code before relying on it.
```

---

## 5. Git Commit Message Conventions

Documentation commits use Conventional Commits prefixes with Japanese descriptions.

### Format

```yaml
format: "<type>: <Japanese description>"
types:
  docs: "Documentation changes (new file, content update, routing change)"
  feat: "New documentation feature (new section, new versioning entry)"
  fix: "Documentation fix (correcting inaccurate information)"
  refactor: "Documentation restructuring (moving files, reorganizing sections)"
  chore: "Maintenance (version bump, metadata update)"
examples:
  - "docs: プロジェクト概要を更新"
  - "fix: API仕様のエンドポイントURLを修正"
  - "refactor: documents/reference/ 配下を整理"
  - "feat: セキュリティ要件ドキュメントを追加"
  - "chore: ドキュメントバージョンを1.2.0に更新"
```

### Rules

```yaml
rules:
  - "Use Japanese for the description after the prefix."
  - "The prefix is English (docs:, feat:, fix:, refactor:, chore:)."
  - "Description should be concise and describe what changed, not why (the diff shows why)."
  - "If a documentation commit accompanies a code change, the documentation commit should reference the code commit hash in its body."
```

### What We Do NOT Govern

```yaml
not_governed:
  - "When to commit (that is a code-side / development workflow decision)"
  - "Whether to branch (that is a code-side / development workflow decision)"
  - "Commit size or granularity (that is a development practice decision)"
```

---

## 6. File Format Standards

```yaml
base_format: "markdown with embedded YAML blocks"
format_selection:
  structured_data: "YAML (settings, metadata, version registries, lists)"
  explanations: "markdown (procedures, guides, rationale)"
  api_specs: "JSON or YAML (OpenAPI, machine-readable schemas)"
  mixed: "markdown + YAML blocks (structure + context in one file)"
naming: "lowercase, hyphen-separated for files; directories are lowercase"
```

---

## 7. Hierarchical Projects

For multi-service or multi-package projects, each child has an independent
`documents/` tree. The parent does not enter children's trees.

### Principles

```yaml
child_independence: "Each child has its own documents/INDEX.md and version registry."
parent_containment: "Parent's documents/ describes children at a high level but does not duplicate child details."
information_flow: "Parent → child (unidirectional). Child does not reference parent's internal documents."
external_reference: "If a child needs parent context, it treats the parent as an external project."
```

### Structure

```yaml
parent_project:
  documents:
    index: "documents/INDEX.md (parent's routing + version registry)"
    project: "documents/project/ (parent project context)"
    reference: "documents/reference/ (shared reference, child-overview)"
    children_overview: "documents/project/children.md (high-level child descriptions, parent-only)"

child_projects:
  each_child:
    documents: "Independent documents/ tree with its own INDEX.md"
    parent_awareness: false
    rule: "Child's INDEX.md does not list parent documents. Child is self-contained."
```

### Parent's children.md

```yaml
placement: "documents/project/children.md"
purpose: "High-level overview of child projects — names, boundaries, responsibilities, inter-service communication"
audience: "parent-level AI agents only"
rule: "Children do not reference this file. Children are unaware of each other unless explicitly coordinated."
```

---

## How These Interlock

```yaml
entry_file_routes: "agent.md routes to documents/INDEX.md"
index_routes: "INDEX.md routes to project/ or reference/ based on the task"
version_registry: "INDEX.md tracks every document's version + commit hash for staleness detection"
cross_references: "Documents link to each other instead of duplicating content"
hierarchy: "Parent and child each have independent documents/ trees; coordination via parent's children.md"
one_idea: "INDEX.md is the map, documents are the destinations, version headers are the timestamps. The agent reads the map, picks a destination, and follows links only as far as needed."
```
