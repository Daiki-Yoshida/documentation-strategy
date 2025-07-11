# AI Agent Documentation Strategy

## Core Principles

```yaml
ai_agent_priority:
  human_readability: false
  token_optimization: true
  cognitive_load_reduction: true
  
information_consolidation:
  duplicate_elimination: true
  single_source_of_truth: true
  
universality:
  single_projects: true
  hierarchical_projects: true
  scale_independence: true
  target: "projects using AI agents (any scale)"
```

## Basic Structure (Multi-Agent)

```yaml
project_structure:
  root_files:
    - "CLAUDE.md"      # ≤200 tokens
    - "GEMINI.md"      # ≤200 tokens  
    - "README.md"      # human-only
  documents:
    - "PROJECT.md"     # ≤800 tokens
    - "context.md"     # example
    - "workflows.md"   # example
    - "specs.md"       # example
    - "[project_specific_files]"
  source_code: true
```

## Hierarchical Projects (OOP Design)

```yaml
hierarchy_principles:
  child_independence: "complete independence without parent knowledge"
  parent_containment: "parent manages all child project information"
  information_flow: "parent → child (unidirectional only)"
  external_reference: "only when necessary as external project reference"
  encapsulation: "child does not know parent implementation details"
  oop_analogy: "similar to object-oriented class containment design"

structure:
  parent_project:
    files: ["CLAUDE.md", "GEMINI.md", "README.md"]
    documents: 
      - "PROJECT.md"
      - "children.md (child project list and management)"
    child_projects:
      - independent_management: "complete independence"
      - parent_awareness: false
      - documents: ["PROJECT.md (parent unaware)"]
      - external_reference: "treat parent as external project if needed"
```

## File Format Standards

```yaml
format_priority: "AI efficiency > human readability"
base_format: "markdown with YAML blocks"
processing_efficiency: "maximum AI parsing speed"

format_usage:
  agent_files: "structured markdown with YAML blocks"
  project_files: "markdown with YAML sections"
  documents: "markdown/YAML/JSON (flexible)"
  readme: "standard markdown (human exception)"

format_selection:
  structured_data: "YAML"
  explanations: "markdown"
  api_specs: "JSON"
  mixed: "markdown + YAML blocks (most efficient)"
```

## File Role Definitions

```yaml
PROJECT_md:
  purpose: "project description and routing"
  content:
    - "project overview and objectives"
    - "tech stack and architecture"
    - "constraints and business rules"
    - "current status and progress"
  token_limit: 800
  routing_responsibility: true

agent_md:
  purpose: "AI agent entry point"
  design_importance: "entry point with critical responsibilities"
  priority_structure:
    high:
      - "role and responsibility scope"
      - "immediate action guidelines"
      - "critical constraints and prohibitions"
      - "routing to documents/PROJECT.md"
      - "task-specific document guidance"
      - "gradual information acquisition guidelines"
    medium:
      - "frequently used information direct inclusion"
      - "cost optimization processing guidelines"
      - "unnecessary processing avoidance criteria"
  token_limit: 200
  self_sufficiency: "emergency action defined"
  critical_considerations:
    - "information density maximization within token limits"
    - "fallback strategy when other documents not read"
    - "minimum essential information for initial access"

README_md:
  purpose: "human interface only"
  content:
    - "basic project information"
    - "setup and usage"
    - "contribution guidelines"
    - "project background"
  token_limit: "none"
```

## Documents Directory Structure

```yaml
documents_principles:
  PROJECT_md: "required (description + routing)"
  other_files: "project-specific and unique"
  example_files: "context.md, workflows.md, specs.md (reference only)"

reference_strategy:
  critical_files: "reference in agent.md"
  standard_files: "reference in PROJECT.md"
  gradual_guidance: "agent.md → PROJECT.md → individual files"

routing_strategy:
  PROJECT_md_responsibility: "guide to documents/ files"
  task_specific_routing: "clear reference targets"
  lost_prevention: "AI agent navigation safety"
```

## Implementation Examples

```yaml
# PROJECT.md Example
project: "User Management API"
status: "in_development"
priority: "high"
tech_stack: "TypeScript + Express + PostgreSQL"
architecture: "REST API + MVC pattern"
constraints:
  - "test coverage ≥80%"
  - "OpenAPI compliant"
  - "OAuth2.0 required"
current_phase: "MVP implementation"

# CLAUDE.md Example (Markdown + YAML Structure)
format_example: |
  # CLAUDE.md - Claude Agent Instructions (≤200 tokens)
  
  ## Essential Information (Priority: High)
  role: "main_developer"
  constraints:
    - "test_driven_development_required"
    - "type_safety_priority_no_any"
    - "update_related_documents_when_changing_project"
    - "think_and_interim_reports_in_english_final_report_in_japanese"
    - "ask_user_git_commit_after_changes_and_final_report"
  emergency_action: "stop_implementation_and_request_clarification_if_unclear"
  
  ## Routing Information (Priority: High)
  primary_ref: "documents/PROJECT.md (project details)"
  task_routing:
    - "before_implementation: documents/PROJECT.md"
    - "unclear_specs: documents/specs.md"
    - "testing_related: documents/workflows.md"
  
  ## Efficiency Configuration (Priority: Medium)
  focus_files: ["src/**/*.ts", "tests/**/*.test.ts"]
  current_priority: "API endpoint implementation"

# GEMINI.md Example
# Use CLAUDE.md structure, customize per agent
```

## Information Priority

```yaml
priority_order:
  1: "[AI_NAME].md (root directory entry point)"
  2: "documents/PROJECT.md (common project details)"
  3: "documents/ (detailed information)"
  4: "README.md (human interface)"
```

## Operational Guidelines

```yaml
version_control: "git management with source code"
multi_developer: "standard git workflow (PR/merge)"
update_frequency: "change-triggered document updates"
maintenance: "document review in code review process"
document_sync: "AI agent responsibility via constraints"
```