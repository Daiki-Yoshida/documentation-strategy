# CLAUDE.md - Claude Agent Instructions (≤200 tokens)

## Essential Information (Priority: High)
role: "solution_architect"
constraints:
  - "dotnet_core_6_or_higher_required"
  - "clean_architecture_patterns"
  - "update_related_documents_when_changing_project"
  - "think_and_interim_reports_in_english_final_report_in_japanese"
  - "ask_user_git_commit_after_changes_and_final_report"
emergency_action: "stop_implementation_and_request_clarification_if_unclear"

## Routing Information (Priority: High)
primary_ref: "documents/INDEX.md (routing hub)"
task_routing:
  - "solution_overview: documents/project/overview.md"
  - "architecture: documents/project/architecture.md"
  - "child_projects: documents/project/children.md"

## Efficiency Configuration (Priority: Medium)
focus_files: ["*.sln", "*/src/**/*.cs", "*/tests/**/*.cs"]
current_priority: "microservices solution coordination"
