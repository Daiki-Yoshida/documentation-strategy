# Multi-Project Implementation Example

This example demonstrates how to implement the Universal Documentation Strategy for multi-project workspaces.

## Project Structure

```
/
├── README.md (Workspace overview)
├── CLAUDE.md (Global agent instructions)
├── documents/
│   ├── WORKSPACE_INFO.md (Workspace documentation)
│   └── DOCUMENTATION_STRATEGY.md (Reference to this strategy)
├── project-a/
│   ├── README.md (Project-specific overview)
│   ├── CLAUDE.md (Local agent instructions)
│   ├── documents/
│   │   └── PROJECT_INFO.md (Project-specific documentation)
│   └── src/
└── project-b/
    ├── README.md (Project-specific overview)
    ├── CLAUDE.md (Local agent instructions)
    ├── documents/
    │   └── PROJECT_INFO.md (Project-specific documentation)
    └── src/
```

## Implementation Steps

### 1. Create Root README.md (Workspace Overview)
```markdown
# Workspace Name

Multi-project workspace description and purpose.

## Projects Overview
- **project-a**: Brief description and purpose
- **project-b**: Brief description and purpose

## Quick Start
- Prerequisites for entire workspace
- Setup instructions
- Build all projects

## Architecture
- Overall system design
- Project relationships
- Shared components

## Documentation
- [Workspace Documentation](./documents/WORKSPACE_INFO.md)
- [Project A Documentation](./project-a/README.md)
- [Project B Documentation](./project-b/README.md)
```

### 2. Create Root CLAUDE.md (Global Agent Instructions)
```markdown
# CLAUDE.md

This file guides Claude when working with this multi-project workspace.

For workspace-wide information, refer to [documents/WORKSPACE_INFO.md](./documents/WORKSPACE_INFO.md).

## Workspace-Level Instructions

- **Shared Standards**: [documents/WORKSPACE_INFO.md#coding-standards](./documents/WORKSPACE_INFO.md#coding-standards)
- **Build System**: [documents/WORKSPACE_INFO.md#build-system](./documents/WORKSPACE_INFO.md#build-system)
- **Cross-Project Dependencies**: [documents/WORKSPACE_INFO.md#dependencies](./documents/WORKSPACE_INFO.md#dependencies)

## Project-Specific Work

When working on specific projects:
- Refer to project-specific CLAUDE.md files
- Follow project-specific constraints and patterns
- Consider cross-project impact

## Known Limitations

- Workspace-level constraints
- Cross-project dependency considerations
- Shared resource limitations
```

### 3. Create documents/WORKSPACE_INFO.md (Workspace Documentation)
```markdown
# Workspace Technical Documentation

## Architecture Overview
- System-wide design principles
- Project relationships and dependencies
- Shared components and libraries

## Coding Standards
- Unified coding conventions across projects
- Shared style guidelines
- Common patterns and practices

## Build System
- Workspace-level build configuration
- Cross-project build dependencies
- Release and deployment procedures

## Dependencies
- Shared dependencies management
- Version synchronization
- Dependency resolution strategies

## Development Environment
- Workspace setup procedures
- Common development tools
- Environment configuration

## Cross-Project Guidelines
- Inter-project communication patterns
- Shared API conventions
- Data sharing protocols

## Testing Strategy
- Workspace-level testing approach
- Integration testing procedures
- Cross-project test coordination
```

### 4. Create Project-Specific Documentation

#### project-a/README.md
```markdown
# Project A

Project-specific overview and quick start.

## Purpose
- Project A's specific role in the workspace
- Key features and capabilities

## Quick Start
- Project-specific setup
- Local development
- Testing procedures

## Architecture
- Project-specific design
- Internal components
- External dependencies

## Documentation
- [Detailed Documentation](./documents/PROJECT_INFO.md)
- [Workspace Documentation](../documents/WORKSPACE_INFO.md)
```

#### project-a/CLAUDE.md
```markdown
# Project A - CLAUDE.md

This file guides Claude when working specifically with Project A.

## Essential Information
- **Project Role**: Core business logic implementation
- **Key Technologies**: [List specific to this project]
- **Build Commands**: `npm run build` (project-specific)

## Reference Information
- **Workspace Standards**: [../documents/WORKSPACE_INFO.md#coding-standards](../documents/WORKSPACE_INFO.md#coding-standards)
- **Project Details**: [documents/PROJECT_INFO.md](./documents/PROJECT_INFO.md)

## Project-Specific Constraints
- Performance requirements
- Memory limitations
- Integration requirements with Project B

## Quality Assurance
- Project-specific code generation standards
- Local testing requirements
- Integration testing considerations
```

#### project-a/documents/PROJECT_INFO.md
```markdown
# Project A Technical Documentation

## Project Architecture
- Internal component design
- Data flow and processing
- Service interfaces

## Implementation Details
- Key algorithms and logic
- Database schema (if applicable)
- API specifications

## Dependencies
- External libraries
- Workspace dependencies
- System requirements

## Testing
- Unit testing strategy
- Integration testing
- Performance testing

## Deployment
- Build artifacts
- Deployment procedures
- Environment configuration
```

## Information Hierarchy Rules

### Parent Level (Workspace)
- Global architecture and design principles
- Shared coding standards and conventions
- Cross-project dependencies and relationships
- Unified build and release processes

### Child Level (Projects)
- Project-specific features and implementations
- Local development and testing procedures
- Internal architecture and design decisions
- Project-specific API and interfaces

### Minimal Reference Pattern
- Child projects reference only essential parent information
- Specific section references: `[Standards](../documents/WORKSPACE_INFO.md#coding-standards)`
- Self-contained project documentation when possible

## Benefits of This Structure

- **Clear Separation**: Workspace and project concerns are distinct
- **Context Efficient**: AI agents access minimal necessary information
- **Maintainable**: Single source of truth for each information type
- **Scalable**: Easy to add new projects to workspace

## Customization Guidelines

- Adapt workspace-level standards to your technology stack
- Define clear project boundaries and responsibilities
- Maintain consistent referencing patterns across projects
- Regular review of cross-project dependencies and standards