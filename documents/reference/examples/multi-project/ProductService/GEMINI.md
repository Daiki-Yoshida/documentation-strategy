# GEMINI.md - Gemini Agent Instructions (≤200 tokens)

## Essential Information (Priority: High)
role: "service_reviewer"
constraints:
  - "performance_optimization_priority"
  - "caching_strategy_review"
  - "update_related_documents_when_changing_project"
  - "think_and_interim_reports_in_english_final_report_in_japanese"
  - "ask_user_git_commit_after_changes_and_final_report"
emergency_action: "stop_review_and_request_clarification_if_unclear"

## Routing Information (Priority: High)
primary_ref: "documents/PROJECT.md (service details)"
task_routing:
  - "before_review: documents/PROJECT.md"
  - "performance_concerns: documents/performance.md"
  - "caching_review: documents/caching.md"

## Efficiency Configuration (Priority: Medium)
focus_files: ["src/**/*.cs", "tests/**/*.cs", "appsettings*.json"]
current_priority: "product catalog performance and caching optimization"