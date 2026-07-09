# Document Workflow

```yaml
document_type: "workflow"
target_audience: "ai_agents"
language: "english"
strategy_version: "2.0.0"
```

```yaml
ownership_split:
  this_doc: "FLOW — when to act, what steps to follow, when to confirm"
  FILE_AND_STRUCTURE.md: "HOW + WHERE — file roles, directory layout, versioning, git conventions"
  DOCUMENTATION_PHILOSOPHY.md: "WHY — accuracy priority, scope, git as recording"
  INDEX.md: "routes to all of the above"
```

---

## Use Cases

```yaml
1_new_project: "Apply the strategy from scratch."
2_existing_project: "Adopt the strategy in a project that already has documentation."
3_ongoing_updates: "The project follows the strategy; update documents during development."
```

---

## Use Case 1: New Project Setup

**When:** starting a new project that will use AI agents.

### Step 1: Create Agent Entry Files

```yaml
action: "Create one entry file per AI tool the project uses."
files:
  CLAUDE_md: "if using Claude Code"
  AGENTS_md: "if using Devin or Codex"
  GEMINI_md: "if using Gemini"
content:
  essential:
    - "role: the agent's responsibility in this project"
    - "constraints: project-specific rules"
    - "emergency_action: what to do if intent is unclear"
  routing:
    - "primary_ref: documents/INDEX.md"
  efficiency:
    - "focus_files: glob patterns for the agent to prioritize"
    - "current_priority: the current development focus"
rule: "The entry file routes to documents/INDEX.md. It does not contain project detail."
```

### Step 2: Create the documents/ Directory

```yaml
action: "Create the directory tree."
structure:
  - "documents/INDEX.md (required — create in Step 3)"
  - "documents/project/ (project-level context)"
  - "documents/reference/ (reference material)"
rule: "Only create directories you will populate. Do not create empty directories speculatively (YAGNI)."
```

### Step 3: Create documents/INDEX.md

```yaml
action: "Create the routing hub and version registry."
content:
  - "Document inventory: list every file under documents/ with its purpose"
  - "Routing map: which document to read for which task"
  - "Version registry: each document's version + last-updated git commit hash"
  - "Cross-reference map"
format: "See FILE_AND_STRUCTURE.md → §4 Document Versioning System"
```

### Step 4: Create Project Documents

```yaml
action: "Create project-level context documents in documents/project/."
content:
  - "Project overview, objectives, scope"
  - "Architecture summary"
  - "Constraints (business rules, compliance, performance)"
  - "Current status and roadmap"
rule: "One file = one concern. Split when a file covers multiple concerns."
versioning: "Each file starts at version 1.0.0 with the current commit hash."
```

### Step 5: Create docs-jp/ (If Human-Facing Content Is Needed)

```yaml
action: "Create docs-jp/ for human-facing documentation."
content:
  - "Project background and motivation"
  - "Setup tutorials"
  - "Design rationale"
rule: "Human-facing content does NOT go under documents/. It goes in docs-jp/."
```

### Step 6: Add Reference and Topic-Specific Documents As Needed

```yaml
action: "Create documents as the project grows — not all at once."
trigger: "When a task requires context that does not fit in existing project documents, create a new file."
placement: "documents/reference/<topic>.md or documents/<topic>/<topic>.md"
rule: "Prefer fewer files with clear routing over many files with overlapping content."
versioning: "Register every new file in documents/INDEX.md with version 1.0.0."
```

---

## Use Case 2: Existing Project Adoption (Brownfield)

**When:** a project already has documentation but wants to adopt this strategy.

### Step 1: Audit Existing Documentation

```yaml
action: "Read all existing documentation and classify each file."
classification:
  ai_facing: "content an AI agent needs during development"
  human_facing: "content for human developers (setup, tutorials, background)"
  shared: "content both audiences need"
  obsolete: "outdated or redundant content"
```

### Step 2: Map to the New Structure

```yaml
mapping:
  ai_facing: "documents/project/ or documents/reference/ (AI-facing)"
  human_facing: "docs-jp/ (human-facing)"
  shared: "documents/ (AI-facing by default; extract human summary to docs-jp/ if needed)"
  obsolete: "remove or archive — do not migrate"
```

### Step 3: Create Agent Entry Files and INDEX.md

```yaml
action: "Create CLAUDE.md / AGENTS.md / GEMINI.md as needed, and documents/INDEX.md."
note: "Follow Use Case 1 Steps 1–3 for these."
```

### Step 4: Migrate Documents

```yaml
action: "Move or rewrite existing documents into the new structure."
rules:
  - "AI-facing content goes to documents/ with proper versioning."
  - "Human-facing content goes to docs-jp/."
  - "Eliminate duplication: if two files covered the same topic, merge into one and link from the other."
  - "Preserve information — do not delete content without user confirmation."
  - "Report what was moved, merged, or flagged as obsolete."
```

### Step 5: Update INDEX.md and Cross-References

```yaml
action: "Register all migrated documents in documents/INDEX.md with version 1.0.0."
check: "All routing paths in agent entry files and INDEX.md point to correct locations."
```

### Brownfield Guard

```yaml
guard:
  scope: "Do NOT let a documentation migration expand into a content rewrite."
  rule: "Structural migration and content improvement are separate tasks. Do one, then the other."
  violation_handling: "If you find documentation that violates the strategy, note it in the report. Do NOT silently fix it unless the task explicitly asks."
  local_convention: "Explicit project conventions OUTRANK this strategy where they conflict. Report the conflict once, then follow the local rule."
```

---

## Use Case 3: Ongoing Document Updates

**When:** the project follows this strategy and documents need updating.

### When to Update

```yaml
update_triggers:
  architecture_change: "Update project architecture docs and INDEX.md version registry."
  new_feature: "Add reference docs as needed; update INDEX.md routing."
  constraint_change: "Update project constraints document and INDEX.md version registry."
  tech_stack_change: "Update project docs; review whether existing docs are still accurate."
  directory_restructure: "Update all routing references in INDEX.md and agent entry files."
```

### What to Update

```yaml
decision_tree:
  question: "Does the change affect what an AI agent needs to know?"
  yes:
    action: "Update the relevant document under documents/."
    check: "Is the information already in an existing file, or does it need a new file?"
    existing_file: "Update the file and bump its version."
    new_file: "Create the file, register it in INDEX.md, and add routing."
  no:
    action: "Update docs-jp/ if human-facing content is affected."
    ai_docs: "Leave documents/ unchanged."
```

### Update Discipline

```yaml
rules:
  - "Change-triggered: update documents when the code changes, not on a schedule."
  - "Proportional: a one-line code fix does not require a full documentation review."
  - "Routing-first: if you add a new document, register it in INDEX.md."
  - "Accuracy-first: if an update makes a document inaccurate, fix the inaccuracy — do not leave stale information."
  - "SSOT-check: if you add information, verify it does not duplicate an existing document. Link instead of duplicating."
```

---

## Version Bumping Workflow

```yaml
when_to_bump:
  major: "Structural change — file added, removed, renamed, or routing significantly changed"
  minor: "Content addition or significant update — new section, new information"
  patch: "Small fix — typo, clarification, minor correction"

how_to_bump:
  1: "Update the document's version header (document_version, last_updated_commit, last_updated_date)."
  2: "Update the corresponding entry in documents/INDEX.md version registry."
  3: "Record the git commit hash of the commit that includes the update."
  4: "Use the appropriate commit message prefix (see FILE_AND_STRUCTURE.md → Git Commit Conventions)."

example:
  document: "documents/project/architecture.md"
  change: "Added a new section about caching strategy"
  version_bump: "1.0.0 → 1.1.0 (minor — content addition)"
  commit_message: "feat: アーキテクチャドキュメントにキャッシュ戦略セクションを追加"
  index_update: "Update version to 1.1.0 and last_updated_commit to the new commit hash"
```

---

## Document Creation Decision Tree

```yaml
question_1: "Does an AI agent need this information during development?"
  no: "Place in docs-jp/ (human-facing)."
  yes: "Continue to question 2."

question_2: "Is it project-level context (overview, architecture, constraints, status)?"
  yes: "Place in documents/project/<topic>.md."
  no: "Continue to question 3."

question_3: "Is it reference material (specs, schemas, standards, examples)?"
  yes: "Place in documents/reference/<topic>.md."
  no: "Continue to question 4."

question_4: "Is it a topic-specific concern that needs its own directory?"
  yes: "Create documents/<topic>/ and place files there."
  no: "Re-evaluate — it may be human-facing after all."

anti_pattern: "Do not create a new file for every small piece of information. Prefer extending an existing file with a new section + INDEX.md routing update."
```

---

## Re-read Triggers

When an AI agent should reload this strategy before acting.

```yaml
must_re_read:
  - "First contact with a project using this strategy (read INDEX.md first)."
  - "Creating or restructuring the documents/ directory tree."
  - "Setting up a new project that will use AI agents."
  - "Adopting this strategy in an existing project (brownfield)."

should_re_read:
  - "Adding a new agent entry file."
  - "Restructuring documents (moving files between directories)."
  - "Changing the project from single to hierarchical (or vice versa)."
  - "Uncertainty about where a piece of information belongs."

no_re_read_needed:
  - "Routine content updates within an existing file."
  - "Adding a new document in an established directory."
  - "Updating constraints or status in an existing project document."
```

---

## Confirmation Gate

Before changing the documentation structure, assess the impact.

```yaml
L0_content: "Updating content within an existing file (no structural change) — proceed."
L1_additive: "Adding a new file in an existing directory — proceed and report."
L2_structural: "Moving files, changing routing paths, renaming files — proceed only if clearly implied by the task; report explicitly."
L3_breaking: "Removing a document, restructuring the entire documents/ tree, changing project from single to hierarchical — MUST confirm before implementation."
rule: "When in doubt, ask the user. Structural changes affect every future AI agent session."
```
