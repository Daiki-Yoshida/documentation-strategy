# Architecture and Design Patterns

## Core Architecture
- **Documentation-First Design**: Strategy definitions drive implementation
- **Multi-Agent Support**: Separate files for different AI agents
- **Scale Independence**: Works for simple and complex projects

## Design Patterns
- **OOP Hierarchy**: Parent-child relationships with encapsulation
- **Single Responsibility**: Each document serves specific purpose
- **Token Budget Pattern**: Strict limits force optimization
- **Information Routing**: Clear paths for AI agent navigation

## Hierarchical Project Structure
```yaml
hierarchy_principles:
  child_independence: "complete independence without parent knowledge"
  parent_containment: "parent manages all child project information"
  information_flow: "parent → child (unidirectional only)"
  encapsulation: "child does not know parent implementation details"
```

## File Responsibilities
- **CLAUDE.md**: Entry point with routing and constraints
- **PROJECT.md**: Detailed project information and workflows
- **documents/**: Supporting specifications and context
- **examples/**: Concrete implementations demonstrating patterns

## Anti-Patterns to Avoid
- Human readability over token efficiency
- Duplicate information across files
- Bidirectional parent-child dependencies
- Exceeding token budgets