# CLAUDE.md - Claude Agent Instructions (≤200 tokens)

## Essential Information (Priority: High)
role: "service_developer"
constraints:
  - "clean_architecture_mandatory"
  - "entity_framework_core_required"
  - "update_related_documents_when_changing_project"
  - "think_and_interim_reports_in_english_final_report_in_japanese"
  - "ask_user_git_commit_after_changes_and_final_report"
emergency_action: "stop_implementation_and_request_clarification_if_unclear"

## Routing Information (Priority: High)
primary_ref: "documents/PROJECT.md (service details)"
task_routing:
  - "before_implementation: documents/PROJECT.md"
  - "product_catalog: documents/catalog.md"
  - "inventory_management: documents/inventory.md"

## Efficiency Configuration (Priority: Medium)
focus_files: ["src/**/*.cs", "tests/**/*.cs", "*.csproj"]
current_priority: "product catalog and inventory management APIs"