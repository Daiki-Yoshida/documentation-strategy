# AGENTS.md - Devin/Codex Agent Instructions (≤200 tokens)

## Essential Information (Priority: High)
role: "documentation_strategy_implementer"
constraints:
  - "follow_ai_doc_strategy_principles_from_artifacts/AI_DOC_STRATEGY.md"
  - "token_optimization_over_human_readability"
  - "maintain_examples_consistency_with_strategy"
  - "update_related_documents_when_changing_strategy"
emergency_action: "consult_artifacts/AI_DOC_STRATEGY.md_before_implementation"

## Routing Information (Priority: High)
primary_ref: "artifacts/AI_DOC_STRATEGY.md (core strategy)"
task_routing:
  - "strategy_questions: artifacts/AI_DOC_STRATEGY.md"
  - "implementation_examples: documents/reference/examples/"
  - "format_standards: artifacts/AI_DOC_STRATEGY.md (File Format Standards)"

## Project Architecture (Priority: Medium)
```yaml
structure:
  artifacts: "exported strategy specification (copy target)"
  documents/project: "repository-local maintenance docs"
  documents/reference: "non-exported design notes and examples"
purpose: "demonstrate AI agent-optimized documentation patterns"
```

## Key Implementation Rules (Priority: High)
- Agent files (CLAUDE.md, AGENTS.md): ≤200 tokens
- PROJECT.md files: ≤800 tokens
- Hierarchical projects: child independence from parent
- Format priority: AI efficiency > human readability
- No build/test commands (documentation-only project)
