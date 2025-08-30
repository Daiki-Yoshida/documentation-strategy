# Code Style and Conventions

## Documentation Standards
- **CLAUDE.md/GEMINI.md**: ≤200 tokens, YAML format preferred
- **PROJECT.md**: ≤800 tokens, structured sections
- **Markdown**: Standard GitHub-flavored markdown
- **File naming**: lowercase with hyphens (kebab-case)

## Token Optimization Rules
- Prioritize AI agent efficiency over human readability
- Use structured YAML format for configuration
- Eliminate duplicate information
- Single source of truth principle

## Formatting Conventions
- **Headers**: Use `#` for primary sections
- **Code blocks**: Use triple backticks with language specification
- **Lists**: Use `-` for unordered, numbers for ordered
- **Emphasis**: `**bold**` for high priority, `*italic*` for medium

## File Organization
- Root level: Agent files (CLAUDE.md, GEMINI.md, README.md)
- documents/: Detailed specifications and context
- examples/: Implementation demonstrations
- Hierarchical: Parent manages child information, children remain independent

## Example Code Style (TypeScript)
- Import statements at top
- Express.js routing patterns
- Consistent indentation (2 spaces)
- Named exports preferred