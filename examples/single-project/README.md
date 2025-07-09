# Single Project Implementation Example

This example demonstrates how to implement the Universal Documentation Strategy for a single project.

## Project Structure

```
/
├── README.md (Human entry point)
├── CLAUDE.md (AI agent instructions)
├── GEMINI.md (AI agent instructions)
├── documents/
│   ├── PROJECT_INFO.md (Comprehensive documentation)
│   └── DOCUMENTATION_STRATEGY.md (Reference to this strategy)
├── src/
│   └── [source code]
└── tests/
    └── [test files]
```

## Implementation Steps

### 1. Create README.md (Human Entry Point)
```markdown
# Project Name

Brief project description and value proposition.

## Quick Start
- Prerequisites
- Installation steps
- Basic usage

## Architecture
- High-level system design
- Key components
- Technology stack

## Documentation
- [Detailed Documentation](./documents/PROJECT_INFO.md)
- [Contributing Guide](./documents/PROJECT_INFO.md#contributing)

## Getting Help
- Issue tracker
- Community resources
```

### 2. Create CLAUDE.md (AI Agent Instructions)
```markdown
# CLAUDE.md

This file guides Claude when working with this project.

For general project information, setup instructions, and coding conventions, refer to [documents/PROJECT_INFO.md](./documents/PROJECT_INFO.md).

## Agent-Specific Workflow Instructions

- Use project-specific coding standards from [documents/PROJECT_INFO.md#coding-standards](./documents/PROJECT_INFO.md#coding-standards)
- Build commands: [documents/PROJECT_INFO.md#build-commands](./documents/PROJECT_INFO.md#build-commands)
- Testing procedures: [documents/PROJECT_INFO.md#testing](./documents/PROJECT_INFO.md#testing)

## Known Limitations

- Specific constraints for this project
- Performance considerations
- External dependencies

## Quality Assurance

- Code generation must follow established patterns
- All generated code must include appropriate tests
- Documentation updates required for new features
```

### 3. Create documents/PROJECT_INFO.md (Comprehensive Documentation)
```markdown
# Project Technical Documentation

## Setup Instructions
- Environment preparation
- Dependencies installation
- Configuration steps

## Build Commands
- Development build
- Production build
- Testing commands

## Coding Standards
- Code style guidelines
- Naming conventions
- Best practices

## Architecture Deep Dive
- System design details
- Component interactions
- Data flow

## API Documentation
- Endpoint specifications
- Request/response formats
- Authentication

## Testing
- Testing strategy
- Test execution
- Coverage requirements

## Contributing
- Development workflow
- Pull request process
- Code review guidelines

## Troubleshooting
- Common issues
- Debugging procedures
- Support resources
```

### 4. Create documents/DOCUMENTATION_STRATEGY.md (Strategy Reference)
```markdown
# Documentation Strategy

This project follows the [Universal Documentation Strategy for AI Agent-Driven Development](../../DOCUMENTATION_STRATEGY.md).

## Key Principles Applied

- **Single Source of Truth**: Technical details in PROJECT_INFO.md
- **Audience Separation**: README.md for humans, CLAUDE.md for agents
- **Context Efficiency**: Essential information in agent files

## Maintenance

- Review agent instructions monthly
- Update technical documentation as needed
- Ensure consistency across all documentation files
```

## Benefits of This Structure

- **Clear Separation**: Human and AI agent documentation are distinct
- **Context Efficient**: AI agents get essential information without excess
- **Maintainable**: Single source of truth for technical details
- **Scalable**: Easy to extend as project grows

## Customization Guidelines

- Adapt agent instructions to your specific technology stack
- Include project-specific constraints and limitations
- Maintain consistent referencing patterns
- Regular review and updates based on usage patterns