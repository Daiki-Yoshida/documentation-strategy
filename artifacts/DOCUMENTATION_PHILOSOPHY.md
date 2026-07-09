# Documentation Philosophy - AI Agent Reference

```yaml
document_type: "documentation_philosophy"
target_audience: "ai_agents"
optimization: "token_efficiency"
language: "english"
core_value: "AI_Agent_Priority"
```

## Core Philosophy: AI-Agent Priority

Documentation is structured so AI agents locate the right context with minimal token cost. Human-facing documents are a separate, clearly-scoped concern — not the default.

```yaml
principle: "AI-Agent Priority"
definition: "Optimize documentation structure for AI agent processing efficiency, not human readability."
formula: "Efficient context = minimal tokens × correct routing × low cognitive load"
rationale: |
  AI agents operate under token limits and processing-cost constraints.
  Every unnecessary token spent on prose, redundancy, or misrouted lookups
  degrades performance and increases cost. Structure the documentation so
  the agent reaches the right information in the fewest tokens possible.
```

## Design Priorities

```yaml
priority_order:
  1: "AI agent processing efficiency (over human readability)"
  2: "token optimization (minimize consumption per task)"
  3: "cognitive load reduction (clear routing, no ambiguity)"
  4: "single source of truth (eliminate duplication)"
  5: "universality (single and hierarchical projects, any scale)"
```

When two priorities conflict, the higher number wins. For example: eliminating
duplication (4) is good, but not if it forces the AI to read three files instead
of one for a common task (violates 2 and 3).

---

## Token Optimization

```yaml
principle: "Minimize token consumption per task."
guidelines:
  - "Entry files (agent.md) stay under 200 tokens — they route, they do not explain."
  - "Project files (PROJECT.md) stay under 800 tokens — enough for one processing pass."
  - "Prefer dense YAML over prose for structured information."
  - "Link to details instead of inlining them."
  - "One sentence + link beats one paragraph of restatement."
  - "No decorative language, no redundant headers, no preamble."
```

> **Single source of truth**: concrete token limits and file-size rules live in
> `FILE_AND_STRUCTURE.md`. This section states only the principle (the *why*).

---

## Cognitive Load Reduction

```yaml
principle: "An AI agent should never guess where information lives."
mechanisms:
  routing: "Every entry file contains explicit routing to the next file."
  single_owner: "Each concept has exactly ONE authoritative document (see INDEX.md → Ownership Map)."
  directory_purpose: "Each directory has one clear purpose — no ambiguous placement."
  gradual_disclosure: "Entry → project overview → task-specific detail. Never front-load everything."
  no_split_by_audience: "All AI-facing docs are English; language is not a routing axis."
```

---

## Single Source of Truth (Duplicate Elimination)

```yaml
principle: "Each piece of information lives in exactly one place."
rules:
  - "If a concept appears in two files, one must own it and the other must link."
  - "Restatement is allowed only as AT MOST one sentence + a link to the owner."
  - "On any apparent conflict between docs, the OWNING doc's wording is authoritative."
  - "When a document needs a concept it does not own, link — do not re-derive."
  - "Splitting a topic into 'why' and 'how' is allowed; join them with SSOT pointers."
```

---

## Universality

```yaml
principle: "The strategy works for any project that uses AI agents — regardless of scale."
scope:
  single_project: "One repository, one set of agent files, one documents/ tree."
  hierarchical_project: "Parent + child projects with OOP-style encapsulation."
  scale_independence: "From a single-script repo to a multi-service monorepo."
target: "projects using AI agents (any scale, any language, any stack)"
```

> **Single source of truth**: the hierarchical structure rules and child/parent
> independence live in `FILE_AND_STRUCTURE.md` → "Hierarchical Projects". This
> section states only the principle (the *why*).

---

## Format Priority

```yaml
principle: "AI efficiency > human readability."
base_format: "markdown with embedded YAML blocks"
rationale: |
  YAML blocks are dense, parse-friendly, and carry structure without prose overhead.
  Markdown provides readable section headers for navigation. JSON is used only when
  the content is a machine schema (e.g., OpenAPI). Human-readable prose is reserved
  for README.md — the one human-facing exception.
```

> **Single source of truth**: the format selection guide (when to use YAML vs
> JSON vs Markdown) lives in `FILE_AND_STRUCTURE.md` → "File Format Standards".

---

## Scope Boundary: Documentation-Strategy vs Coding-Design

This artifact set has a specific responsibility boundary.

```yaml
this_artifact_set:
  name: "documentation-strategy"
  owns: "HOW to structure, route, and maintain documentation for AI agents"
  question_answered: "Where does this information go, and how does the agent find it?"

sibling_artifact_set:
  name: "design-principles"
  owns: "HOW to design and write code that AI agents produce"
  question_answered: "What patterns, boundaries, and contracts should the code follow?"

boundary_rule: "documentation-strategy governs documents; design-principles governs code. They do not overlap."
coordination: "A target project may use both. Each is referenced independently from the project's agent entry files."
```

---

## Common Misreadings to Prevent

These principles are easy to over-read. Do NOT collapse them into:

```yaml
misreadings:
  - "'AI efficiency > human readability' != humans don't matter (README is explicitly human-facing; the rule applies to AI-facing files only)"
  - "'token optimization' != make everything one file (routing and cognitive load also matter — see Design Priorities)"
  - "'single source of truth' != never mention a concept twice (one-sentence restatement + link is allowed)"
  - "'entry files ≤200 tokens' != starve the agent of information (the entry file ROUTES to detail; it is not the detail)"
  - "'universality' != one rigid template (the strategy adapts to single and hierarchical projects; structure follows project shape)"
  - "'YAML blocks preferred' != ban all prose (explanations and examples use markdown; YAML is for structured data)"
  - "'documents/agents/ is AI-only' != humans cannot read it (they can; it is optimized for AI, not restricted from humans)"
  - "'child independence' != children cannot coordinate with parent (they treat parent as an external project reference when needed)"
  - "this strategy != a documentation generator (it defines structure and routing; the AI agent writes the content following these rules)"
```
