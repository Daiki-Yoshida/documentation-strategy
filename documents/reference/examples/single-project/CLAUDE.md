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