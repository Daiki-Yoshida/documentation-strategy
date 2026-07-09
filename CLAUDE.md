# CLAUDE.md - Claude Agent Instructions (≤200 tokens)

## Essential Information (Priority: High)
role: "documentation_strategy_implementer"
constraints:
  - "follow_documentation_strategy_from_artifacts/INDEX.md"
  - "token_optimization_over_human_readability"
  - "update_related_documents_when_changing_strategy"
  - "consult_INDEX.md_ownership_map_before_writing"
emergency_action: "read_artifacts/INDEX.md_then_route_to_owning_doc"

## Routing Information (Priority: High)
primary_ref: "artifacts/INDEX.md (entry point + ownership map)"
task_routing:
  - "why_questions: artifacts/DOCUMENTATION_PHILOSOPHY.md"
  - "file_roles_or_structure: artifacts/FILE_AND_STRUCTURE.md"
  - "setup_or_update_or_brownfield: artifacts/DOCUMENT_WORKFLOW.md"
  - "examples: documents/reference/examples/"

## Project Architecture (Priority: Medium)
```yaml
artifacts: "exported strategy (INDEX + PHILOSOPHY + FILE_AND_STRUCTURE + WORKFLOW)"
documents/project: "repository-local maintenance docs"
documents/reference: "non-exported design notes and examples"
```
