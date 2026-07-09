# File Roles & Directory Structure - AI Agent Reference

```yaml
document_type: "file_and_structure"
target_audience: "ai_agents"
optimization: "structural_consistency"
language: "english"
scope: "file roles, token limits, format standards, directory layout, hierarchy rules"
```

This document owns the **physical realization of the documentation strategy**:
what each file does, how large it may be, where it lives, and how projects are
structured — including hierarchical (multi-service) projects.

```yaml
ownership_split:
  this_doc: "HOW + WHERE — file roles, token limits, format, directory layout, hierarchy"
  DOCUMENTATION_PHILOSOPHY.md: "WHY — AI-agent priority, token optimization, SSOT, universality"
  DOCUMENT_WORKFLOW.md: "FLOW — setup, update, brownfield, re-read triggers"
  INDEX.md: "routes to all of the above"
rule: "Do not duplicate the principles or the workflow here; link to the owning doc."
```

---

## 1. File Role Definitions

### Agent Entry Files (CLAUDE.md, AGENTS.md, GEMINI.md)

```yaml
purpose: "AI agent entry point — routes the agent to the right context"
token_limit: 200
placement: "project root (one per agent tool)"
one_per_tool:
  CLAUDE_md: "Claude Code entry point"
  AGENTS_md: "Devin / Codex entry point"
  GEMINI_md: "Gemini entry point"
```

**Priority structure within the file:**

```yaml
high_priority:
  - "role and responsibility scope"
  - "immediate action guidelines"
  - "critical constraints and prohibitions"
  - "routing to PROJECT.md"
  - "task-specific document guidance"
medium_priority:
  - "frequently used information (direct inclusion to save a lookup)"
  - "cost optimization processing guidelines"
  - "unnecessary processing avoidance criteria"
```

**Critical design considerations:**
- Information density must be maximized within the token limit.
- The file must define an emergency action (what to do if other docs are unavailable).
- The file routes; it does not explain. Detail lives in PROJECT.md and below.
- A fallback strategy is required: minimum essential information for initial access.

**When to create vs skip an agent file:**
- Create one for each AI tool the project actually uses.
- Do NOT create agent files for tools the project does not use (YAGNI).
- If only one tool is used, create only that file. The structure scales.

### PROJECT.md

```yaml
purpose: "project description and routing — the agent's second stop"
token_limit: 800
placement: "documents/ (root shared) or documents/agents/ (see Directory Structure)"
routing_responsibility: true
content:
  - "project overview and objectives"
  - "tech stack and architecture"
  - "constraints and business rules"
  - "current status and progress"
  - "routing to task-specific documents"
```

**Why 800 tokens:** enough for a single AI processing pass that gives the agent
project-level context without exceeding typical context-window efficiency
thresholds. Larger than 800 → split into task-specific files and route to them.

### README.md

```yaml
purpose: "human interface only — the one human-readable exception"
token_limit: none
placement: "project root"
content:
  - "basic project information"
  - "setup and usage"
  - "contribution guidelines"
  - "project background"
audience: "human developers, not AI agents"
```

**Rule:** AI agents should NOT rely on README.md for project context. It is
human-facing and may contain prose, tutorials, and background that waste tokens.
The agent entry files and PROJECT.md are the AI's context path.

---

## 2. Token Limits

```yaml
limits:
  agent_entry_files: 200
  PROJECT_md: 800
  task_specific_docs: "no hard limit, but prefer splitting over 800"
  README_md: "none (human-facing exception)"
rationale:
  "200": "entry files route, they do not explain. 200 tokens is enough for role + constraints + routing."
  "800": "one processing pass of project-level context. Beyond this, the agent should be routed to task-specific files."
enforcement: "soft — exceeding by a small margin is acceptable if it prevents a file split that would hurt routing clarity. Gross violation → restructure."
```

---

## 3. File Format Standards

```yaml
format_priority: "AI efficiency > human readability"
base_format: "markdown with embedded YAML blocks"
processing_efficiency: "maximum AI parsing speed"
```

### Format Selection Guide

```yaml
structured_data: "YAML (settings, metadata, lists, configuration)"
explanations: "markdown (procedures, guides, rationale)"
api_specs: "JSON (OpenAPI, machine-readable schemas)"
mixed: "markdown + YAML blocks (most efficient — structure + context in one file)"
```

### Format Usage by File Type

```yaml
agent_entry_files: "structured markdown with YAML blocks"
PROJECT_md: "markdown with YAML sections"
documents: "markdown / YAML / JSON (flexible — choose by content)"
README_md: "standard markdown (human-facing exception — prose allowed)"
```

---

## 4. Directory Structure

### Single Project

```yaml
project_structure:
  root_files:
    - "CLAUDE.md      # ≤200 tokens (Claude Code entry)"
    - "AGENTS.md      # ≤200 tokens (Devin/Codex entry)"
    - "GEMINI.md      # ≤200 tokens (Gemini entry, if used)"
    - "README.md      # human interface only"
  documents:
    root: "documents/ — shared specifications and schemas"
    agents: "documents/agents/ — AI-optimized documentation (English, no suffix)"
    users: "documents/users/ — human-readable documentation (Japanese, _JP.md suffix)"
  source_code: true
```

### Directory Responsibilities

```yaml
"documents/":
  content: "shared specifications, schemas, APIs"
  audience: "both AI agents and humans"
  language: "context-dependent (technical specs often English)"
  naming: "descriptive.md or descriptive.json"

"documents/agents/":
  content: "project details, workflows, optimization guides for AI"
  audience: "AI agents only"
  language: "English (processing efficiency)"
  naming: "descriptive.md (no language suffix)"
  optimization: "token efficiency priority"

"documents/users/":
  content: "setup guides, explanations, tutorials for humans"
  audience: "human developers"
  language: "Japanese (primary target language)"
  naming: "descriptive_JP.md (language suffix required)"
  optimization: "comprehensibility priority"
```

### Reference & Routing Strategy

```yaml
ai_workflow: "agent.md → documents/agents/project.md → task-specific files"
human_workflow: "README.md → documents/users/setup_JP.md → detailed guides"
shared_specs: "both reference documents/ for API specs, schemas, standards"
gradual_disclosure: "agent.md → PROJECT.md → documents/agents/ → documents/ (shared specs)"
lost_prevention: "clear directory purpose prevents confusion — each directory has one role"
```

---

## 5. Hierarchical Projects (OOP Design)

For multi-service or multi-package projects, apply OOP-style encapsulation to
the documentation structure.

### Hierarchy Principles

```yaml
child_independence: "complete independence — child does not know parent exists"
parent_containment: "parent manages all child project information"
information_flow: "parent → child (unidirectional only)"
external_reference: "child treats parent as external project if coordination needed"
encapsulation: "child does not know parent implementation details"
oop_analogy: "similar to object-oriented class containment design"
```

### Structure

```yaml
parent_project:
  files: ["CLAUDE.md", "AGENTS.md", "GEMINI.md", "README.md"]
  documents:
    shared_root: "documents/ (shared specifications)"
    agents: "documents/agents/ (parent project AI docs)"
    users: "documents/users/ (parent project human docs)"
    child_management: "documents/agents/children.md (child project coordination)"

child_projects:
  independence: "complete independence without parent knowledge"
  structure:
    files: ["CLAUDE.md", "AGENTS.md", "GEMINI.md", "README.md"]
    documents:
      shared_root: "documents/ (child-specific shared specs)"
      agents: "documents/agents/ (child AI docs, parent unaware)"
      users: "documents/users/ (child human docs, parent unaware)"
  parent_awareness: false
  external_reference: "treat parent as external project if coordination needed"
```

### Parent's children.md

The parent project maintains a coordination file at `documents/agents/children.md`
that lists child projects, their boundaries, and inter-service communication
patterns. This file is parent-only — children do not reference it.

---

## 6. Information Priority

### AI Agent Priority Order

```yaml
1: "agent.md (root directory entry point — CLAUDE.md / AGENTS.md / GEMINI.md)"
2: "documents/agents/project.md (AI-specific project details)"
3: "documents/agents/ (detailed AI-optimized information, task-specific)"
4: "documents/ (shared specifications and schemas)"
5: "README.md (human interface — last resort, not designed for AI)"
```

### Human Priority Order

```yaml
1: "README.md (human entry point)"
2: "documents/users/setup_JP.md (setup and getting started)"
3: "documents/ (shared specifications when needed)"
4: "documents/users/ (detailed human-readable guides)"
```

---

## How These Interlock

```yaml
entry_file_routes: "agent.md defines role + routes to PROJECT.md"
project_file_routes: "PROJECT.md gives context + routes to task-specific docs"
directory_purpose_routes: "documents/agents/ vs documents/users/ vs documents/ — audience decides placement"
hierarchy_encapsulates: "parent and child each have independent doc trees; coordination via children.md (parent-only)"
one_idea: "Make the entry file the router, PROJECT.md the context, and directories the audience boundary. Hierarchy repeats this pattern per level."
```
