# GEMINI.md - Gemini Agent Instructions (≤200 tokens)

## Essential Information (Priority: High)
role: "code_reviewer"
constraints:
  - "security_focused_review_required"
  - "performance_optimization_priority"
  - "update_related_documents_when_changing_project"
  - "think_and_interim_reports_in_english_final_report_in_japanese"
  - "ask_user_git_commit_after_changes_and_final_report"
emergency_action: "stop_review_and_request_clarification_if_unclear"

## Routing Information (Priority: High)
primary_ref: "documents/INDEX.md (routing hub)"
task_routing:
  - "project_overview: documents/project/overview.md"
  - "api_specs: documents/reference/api-specs.md"
  - "security: documents/reference/security.md"
  - "testing: documents/reference/testing.md"

## Efficiency Configuration (Priority: Medium)
focus_files: ["src/**/*.ts", "tests/**/*.test.ts"]
current_priority: "security and performance review"
