# GEMINI.md - Gemini Agent Instructions (≤200 tokens)

## Essential Information (Priority: High)
role: "service_reviewer"
constraints:
  - "security_focused_authentication_review"
  - "performance_optimization_priority"
  - "update_related_documents_when_changing_project"
  - "think_and_interim_reports_in_english_final_report_in_japanese"
  - "ask_user_git_commit_after_changes_and_final_report"
emergency_action: "stop_review_and_request_clarification_if_unclear"

## Routing Information (Priority: High)
primary_ref: "documents/PROJECT.md (service details)"
task_routing:
  - "before_review: documents/PROJECT.md"
  - "security_concerns: documents/security.md"
  - "authentication_review: documents/authentication.md"

## Efficiency Configuration (Priority: Medium)
focus_files: ["src/**/*.cs", "tests/**/*.cs", "appsettings*.json"]
current_priority: "authentication security and user data protection"