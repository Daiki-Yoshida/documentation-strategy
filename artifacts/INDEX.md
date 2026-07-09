# AI Agent Documentation Strategy - Index

```yaml
document_type: "index"
target_audience: "ai_agents"
optimization: "token_efficiency"
language: "english"
role: "entry point for the exported documentation strategy set"
```

This is the entry point for the exported guidance. Read it first.

## Read Order

```yaml
1_philosophy: "DOCUMENTATION_PHILOSOPHY.md"   # WHY:  core values, AI-agent priority, token optimization, misreadings
2_structure:  "FILE_AND_STRUCTURE.md"         # HOW+WHERE: file roles, token limits, directory layout, hierarchy
3_workflow:   "DOCUMENT_WORKFLOW.md"           # FLOW: setup, update, brownfield, re-read triggers
```

On first contact, read 1 → 2 → 3. For a specific task, jump via the Quick Task Routing below.

## Document Split Policy

```yaml
split_by: "the question each doc answers — WHY (philosophy) / HOW+WHERE (file roles & structure) / FLOW (workflow); INDEX routes."
one_owner: "each concept lives in exactly ONE doc — see Ownership Map; link, never duplicate."
restatement_cap: "when a doc needs a concept it does not own, restate AT MOST one sentence + a link to the owner; on any apparent conflict between docs, the OWNING doc's wording is authoritative."
not_split_by: ["audience", "language", "feature/domain"]   # all docs are AI-facing, English
```

## Foundational Lens

These artifacts assume an **AI-Agent Priority** paradigm for documentation.

```yaml
core_idea: "Documentation is structured so AI agents locate the right context with minimal token cost. Human-facing documents are a separate, clearly-scoped concern — not the default."
interpret_through: ["token efficiency", "cognitive load reduction", "single source of truth", "routing clarity"]
do_not_optimize_for: ["human readability (except README)", "exhaustive prose", "redundant explanation"]
scale_invariant: "the strategy applies to single projects and hierarchical (multi-service) projects alike."
```

## Ownership Map (Single Source of Truth)

Each concept has exactly ONE authoritative document. Do not duplicate; link instead.

```yaml
DOCUMENTATION_PHILOSOPHY.md:
  owns:
    - "AI-Agent Priority: definition & rationale"
    - "Token optimization: the principle (the WHY)"
    - "Cognitive load reduction: the principle (the WHY)"
    - "Single source of truth / duplicate elimination: the principle (the WHY)"
    - "Universality: single and hierarchical projects, any scale"
    - "Format priority: AI efficiency > human readability (the WHY)"
    - "Common misreadings to prevent"
    - "Relationship to design-principles: domain boundary, shared concepts, divergent policies, simultaneous-read guidance"

FILE_AND_STRUCTURE.md:
  owns:
    - "Agent entry files (CLAUDE.md, AGENTS.md, GEMINI.md): role, token limit, priority structure"
    - "PROJECT.md: role, token limit, routing responsibility"
    - "README.md: role as human-only interface"
    - "Token limits: 200 / 800 and their rationale"
    - "File format standards: markdown + YAML blocks, format selection guide"
    - "Directory structure: documents/, documents/agents/, documents/users/"
    - "Language and naming conventions per directory"
    - "Hierarchical projects: OOP design, child independence, parent containment"
    - "Information priority order (AI and human)"
    - "Reference and routing strategy between files"

DOCUMENT_WORKFLOW.md:
  owns:
    - "New project setup: step-by-step from strategy to project files"
    - "Existing project adoption (brownfield): audit, classify, migrate"
    - "Ongoing document updates: when to update, what to re-read"
    - "Re-read triggers: when an AI agent should reload this strategy"
    - "Document creation decision tree: when to create a new file vs extend"
    - "Operational guidelines: version control, update frequency, maintenance"
    - "Confirmation gate: when to ask the user before changing documentation structure"
```

## Quick Task Routing

```yaml
"setting up docs for a new project":           "DOCUMENT_WORKFLOW.md (New Project Setup) + FILE_AND_STRUCTURE.md (File Roles)"
"adopting this strategy in an existing project": "DOCUMENT_WORKFLOW.md (Brownfield Adoption)"
"updating an existing document":               "DOCUMENT_WORKFLOW.md (Ongoing Updates) + FILE_AND_STRUCTURE.md (find the right file)"
"should I create a new doc or extend existing": "DOCUMENT_WORKFLOW.md (Creation Decision Tree)"
"which file should hold this information":      "FILE_AND_STRUCTURE.md (File Role Definitions) + DOCUMENTATION_PHILOSOPHY.md (SSOT)"
"how to structure a multi-service project":     "FILE_AND_STRUCTURE.md (Hierarchical Projects)"
"token limit for a specific file":              "FILE_AND_STRUCTURE.md (Token Limits)"
"which format to use (YAML/JSON/Markdown)":     "FILE_AND_STRUCTURE.md (File Format Standards)"
"when should I re-read this strategy":          "DOCUMENT_WORKFLOW.md (Re-read Triggers)"
"why is README the only human-readable file":   "DOCUMENTATION_PHILOSOPHY.md (AI-Agent Priority + Misreadings)"
"how does this relate to design-principles":    "DOCUMENTATION_PHILOSOPHY.md (Relationship to design-principles)"
```
