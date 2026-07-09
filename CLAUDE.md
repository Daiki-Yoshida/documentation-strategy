# CLAUDE.md

```yaml
document_type: "agent_entry"
target_audience: "ai_agents"
language: "english"
```

## Essential Information (Priority: High)
role: "documentation_strategy_developer"
constraints:
  - "follow_strategy_from_artifacts/INDEX.md"
  - "information_accuracy_over_token_savings"
  - "documents/_is_AI-facing_only_human_content_goes_to_docs-jp/"
  - "update_INDEX.md_version_registry_when_changing_documents"
  - "use_conventional_commit_prefixes_with_Japanese_descriptions"
emergency_action: "read_artifacts/INDEX.md_then_route_to_owning_doc"

## Routing Information (Priority: High)
primary_ref: "artifacts/INDEX.md (strategy entry point)"
secondary_ref: "documents/INDEX.md (this project's document registry)"
task_routing:
  - "why_questions: artifacts/DOCUMENTATION_PHILOSOPHY.md"
  - "file_roles_or_structure: artifacts/FILE_AND_STRUCTURE.md"
  - "setup_or_update_or_brownfield: artifacts/DOCUMENT_WORKFLOW.md"
  - "examples: documents/reference/examples/"

## Project Architecture (Priority: Medium)
```yaml
artifacts: "exported strategy (INDEX + PHILOSOPHY + FILE_AND_STRUCTURE + WORKFLOW)"
documents: "AI-facing project docs (INDEX.md + project/ + reference/)"
docs-jp: "human-facing docs (Japanese)"
```
