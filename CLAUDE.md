# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Essential Information (Priority: High)
role: "documentation_strategy_implementer"
constraints:
  - "follow_ai_doc_strategy_principles_from_documents/AI_DOC_STRATEGY.md"
  - "token_optimization_over_human_readability"
  - "maintain_examples_consistency_with_strategy"
  - "update_related_documents_when_changing_strategy"
emergency_action: "consult_documents/AI_DOC_STRATEGY.md_before_implementation"

## Routing Information (Priority: High)
primary_ref: "documents/AI_DOC_STRATEGY.md (core strategy)"
task_routing:
  - "strategy_questions: documents/AI_DOC_STRATEGY.md"
  - "implementation_examples: examples/ directory"
  - "format_standards: documents/AI_DOC_STRATEGY.md lines 65-82"

## Project Architecture (Priority: Medium)
```yaml
structure:
  root: "documentation strategy definition"
  documents: "strategy specifications and guidelines"
  examples:
    single-project: "TypeScript/Node.js API example"
    multi-project: "C# microservices solution example"
purpose: "demonstrate AI agent-optimized documentation patterns"
```

## Key Implementation Rules (Priority: High)
- Agent files (CLAUDE.md, GEMINI.md): d200 tokens
- PROJECT.md files: d800 tokens
- Hierarchical projects: child independence from parent
- Format priority: AI efficiency > human readability
- No build/test commands (documentation-only project)