# Document Workflow - Operational Guidelines

```yaml
document_type: "workflow"
target_audience: "ai_agents"
optimization: "process_consistency"
language: "english"
```

This document defines the operational procedures for applying the documentation
strategy: setting up a new project, adopting the strategy in an existing project,
updating documents during development, and knowing when to re-read this strategy.

```yaml
ownership_split:
  this_doc: "FLOW — when to act, what steps to follow, when to confirm"
  FILE_AND_STRUCTURE.md: "HOW + WHERE — file roles, directory layout, token limits"
  DOCUMENTATION_PHILOSOPHY.md: "WHY — principles behind the rules"
  INDEX.md: "routes to all of the above"
```

---

## Use Cases

```yaml
use_cases:
  1_new_project: "Apply the strategy from scratch — no existing documentation structure."
  2_existing_project: "Adopt the strategy in a project that already has documentation (brownfield)."
  3_ongoing_updates: "The project already follows this strategy; update or add documents during development."
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
token_limit: 200
content_template:
  essential:
    - "role: the agent's responsibility in this project"
    - "constraints: project-specific rules the agent must follow"
    - "emergency_action: what to do if intent is unclear"
  routing:
    - "primary_ref: documents/agents/project.md (or documents/PROJECT.md)"
    - "task_routing: map task types to specific documents"
  efficiency:
    - "focus_files: glob patterns for the agent to prioritize"
    - "current_priority: the current development focus"
```

### Step 2: Create the Documents Directory

```yaml
action: "Create the directory tree."
structure:
  - "documents/ (shared specs)"
  - "documents/agents/ (AI-facing docs, English)"
  - "documents/users/ (human-facing docs, Japanese, _JP.md suffix)"
rule: "Only create directories you will populate. Do not create empty directories speculatively (YAGNI)."
```

### Step 3: Create PROJECT.md

```yaml
action: "Create the project overview file."
placement: "documents/agents/project.md (preferred) or documents/PROJECT.md"
token_limit: 800
content:
  - "project name, status, priority"
  - "tech stack and architecture"
  - "constraints (test coverage, security, compliance)"
  - "current phase and focus areas"
  - "routing to task-specific documents"
```

### Step 4: Create README.md

```yaml
action: "Create the human-facing entry point."
language: "project's human language (Japanese primary target)"
content:
  - "project description and purpose"
  - "setup and usage instructions"
  - "contribution guidelines"
  - "project background"
token_limit: none
```

### Step 5: Add Task-Specific Documents As Needed

```yaml
action: "Create documents as the project grows — not all at once."
trigger: "When a task requires context that does not fit in PROJECT.md (800 tokens), extract it into a task-specific file."
placement: "documents/agents/<topic>.md (AI-facing) or documents/users/<topic>_JP.md (human-facing)"
rule: "Prefer fewer files with clear routing over many files with overlapping content."
```

---

## Use Case 2: Existing Project Adoption (Brownfield)

**When:** a project already has documentation but wants to adopt this strategy.

### Step 1: Audit Existing Documentation

```yaml
action: "Read all existing documentation and classify each file."
classification:
  ai_facing: "content an AI agent needs during development (specs, constraints, architecture)"
  human_facing: "content for human developers (setup, tutorials, background)"
  shared: "content both audiences need (API schemas, data models)"
  obsolete: "outdated or redundant content"
```

### Step 2: Map to the New Structure

```yaml
action: "Decide where each piece of information belongs."
mapping:
  ai_facing: "documents/agents/ (English, no suffix)"
  human_facing: "documents/users/ (Japanese, _JP.md suffix)"
  shared: "documents/ (context-dependent language)"
  obsolete: "remove or archive — do not migrate"
```

### Step 3: Create Agent Entry Files

```yaml
action: "Create CLAUDE.md / AGENTS.md / GEMINI.md as needed."
note: "These did not exist before — create them fresh following the New Project Setup steps."
```

### Step 4: Create or Consolidate PROJECT.md

```yaml
action: "Extract project-level context from existing docs into PROJECT.md."
token_limit: 800
rule: "Do NOT copy entire existing documents into PROJECT.md. Extract the essential context and route to details."
conflict: "If existing docs contradict each other, flag the conflict to the user — do not silently pick one."
```

### Step 5: Migrate Documents

```yaml
action: "Move or rewrite existing documents into the new directory structure."
rules:
  - "Rewrite for token efficiency if the original was prose-heavy."
  - "Convert structured data to YAML blocks where appropriate."
  - "Eliminate duplication: if two files covered the same topic, merge into one and link from the other."
  - "Preserve information — do not delete content without user confirmation."
  - "Report what was moved, merged, or flagged as obsolete."
```

### Step 6: Update Cross-References

```yaml
action: "Fix any internal references broken by the migration."
check: "All routing paths in agent entry files and PROJECT.md point to correct locations."
```

### Brownfield Guard

```yaml
guard:
  scope: "Do NOT let a documentation migration expand into a content rewrite."
  rule: "Structural migration and content improvement are separate tasks. Do one, then the other — not both at once."
  violation_handling: "If you find existing documentation that violates the strategy, note it in the report. Do NOT silently fix it unless the task explicitly asks for it."
  local_convention: "Explicit project conventions (existing lint, house style) OUTRANK this strategy where they conflict. Report the conflict once, then follow the local rule."
```

---

## Use Case 3: Ongoing Document Updates

**When:** the project already follows this strategy and documents need updating during development.

### When to Update

```yaml
update_triggers:
  architecture_change: "Update PROJECT.md and affected task-specific docs."
  new_feature: "Add task-specific docs in documents/agents/ as needed; update PROJECT.md routing."
  constraint_change: "Update PROJECT.md constraints section and agent entry files if the constraint affects agent behavior."
  tech_stack_change: "Update PROJECT.md tech_stack; review whether existing docs are still accurate."
  directory_restructure: "Update all routing references in agent entry files and PROJECT.md."
```

### What to Update

```yaml
decision_tree:
  question: "Does the change affect what an AI agent needs to know?"
  yes:
    action: "Update the relevant AI-facing document."
    check: "Is the information already in PROJECT.md, or does it need a task-specific file?"
    in_project_md: "Update PROJECT.md (stay under 800 tokens)."
    needs_own_file: "Create or update documents/agents/<topic>.md and add routing from PROJECT.md."
  no:
    action: "Update only human-facing docs (documents/users/) or README.md if needed."
    ai_docs: "Leave AI-facing docs unchanged."
```

### Update Discipline

```yaml
rules:
  - "Change-triggered: update documents when the code changes, not on a schedule."
  - "Proportional: a one-line code fix does not require a full documentation review."
  - "Routing-first: if you add a new document, add its routing reference in PROJECT.md or the agent entry file."
  - "Token-check: if an update pushes a file over its token limit, split it — do not let it grow unbounded."
  - "SSOT-check: if you add information, verify it does not duplicate an existing document. Link instead of duplicating."
```

---

## Document Creation Decision Tree

```yaml
question_1: "Does an AI agent need this information during development?"
  no: "Place in documents/users/ (human-facing) or README.md."
  yes: "Continue to question 2."

question_2: "Is it project-level context (overview, tech stack, constraints, status)?"
  yes: "Place in PROJECT.md (if under 800 tokens) or extract a summary + link."
  no: "Continue to question 3."

question_3: "Is it a shared specification or schema (API, data model)?"
  yes: "Place in documents/ (shared root)."
  no: "Continue to question 4."

question_4: "Is it task-specific AI-facing detail (workflow, optimization guide, development standard)?"
  yes: "Place in documents/agents/<topic>.md."
  no: "Re-evaluate — it may be human-facing after all."

anti_pattern: "Do not create a new file for every small piece of information. Prefer extending an existing file with a new section + routing update."
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
  - "Adding a new agent entry file (e.g., project starts using a new AI tool)."
  - "Restructuring documents (moving files between directories)."
  - "Changing the project from single to hierarchical (or vice versa)."
  - "Uncertainty about where a piece of information belongs."

no_re_read_needed:
  - "Routine content updates within an existing file."
  - "Adding a new task-specific document in an established directory."
  - "Updating constraints or status in PROJECT.md."
```

---

## Confirmation Gate

Before changing the documentation structure, assess the impact.

```yaml
L0_internal: "Updating content within an existing file (no structural change) — proceed."
L1_local: "Adding a new task-specific file in an existing directory — proceed and report."
L2_structural: "Moving files between directories, changing routing paths, renaming files — proceed only if clearly implied by the task; report explicitly."
L3_breaking: "Changing the project from single to hierarchical, removing an agent entry file, or restructuring the entire documents/ tree — MUST confirm before implementation."
rule: "When in doubt, ask the user. Structural changes to documentation affect every future AI agent session."
```

---

## Operational Guidelines

```yaml
version_control: "Documents are managed in git alongside source code."
multi_developer: "Standard git workflow (PR/merge) applies to documentation."
update_frequency: "Change-triggered — update documents when the code or architecture changes."
maintenance: "Review documentation during code review. If a PR changes architecture, it should also update PROJECT.md."
document_sync: "The AI agent's constraint 'update_related_documents_when_changing_project' enforces this."
reporting: "When updating documents, report what changed, why, and whether any routing references were updated."
```
