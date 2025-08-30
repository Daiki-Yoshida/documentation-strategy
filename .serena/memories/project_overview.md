# Project Overview

## Purpose
AI Agent Documentation Strategy - A comprehensive framework for creating AI agent-optimized documentation that prioritizes token efficiency over human readability. The project demonstrates how to structure documentation for AI agents (Claude, Gemini, etc.) across single and hierarchical projects.

## Tech Stack
- **Primary Language**: Documentation (Markdown)
- **Examples Include**:
  - TypeScript/Node.js (Express.js API example)
  - C# (.NET Core microservices example)
- **No Build Dependencies**: This is a documentation-only project

## Project Structure
```
documentation-strategy/
├── CLAUDE.md              # Claude agent instructions (≤200 tokens)
├── GEMINI.md              # Gemini agent instructions (≤200 tokens)  
├── README.md              # Human-readable project interface
├── documents/
│   ├── AI_DOC_STRATEGY.md # Core strategy specification
│   └── [other docs]       # Supporting documentation
└── examples/
    ├── single-project/    # TypeScript/Node.js API example
    └── multi-project/     # C# microservices example
```

## Key Principles
- Token optimization over human readability
- Cognitive load reduction for AI agents
- Scale-independent design (single & hierarchical projects)
- OOP-inspired hierarchy with child independence
- Standardized file structure and token limits