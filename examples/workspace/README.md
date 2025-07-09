# Workspace/Monorepo Implementation Example

This example demonstrates how to implement the Universal Documentation Strategy for monorepo/workspace environments with packages.

## Project Structure

```
/
├── README.md (Workspace overview)
├── CLAUDE.md (Global agent instructions)
├── documents/
│   ├── WORKSPACE_INFO.md (Workspace documentation)
│   ├── DOCUMENTATION_STRATEGY.md (Reference to this strategy)
│   └── [shared documentation]
├── packages/
│   ├── core/
│   │   ├── README.md (Package overview)
│   │   ├── CLAUDE.md (Package-specific instructions)
│   │   ├── documents/
│   │   │   └── PACKAGE_INFO.md (Package documentation)
│   │   └── src/
│   └── ui/
│       ├── README.md (Package overview)
│       ├── CLAUDE.md (Package-specific instructions)
│       ├── documents/
│       │   └── PACKAGE_INFO.md (Package documentation)
│       └── src/
├── tools/
│   └── [shared tooling]
└── scripts/
    └── [build and automation scripts]
```

## Implementation Steps

### 1. Create Root README.md (Workspace Overview)
```markdown
# Workspace Name

Monorepo workspace description and architecture overview.

## Packages Overview
- **@workspace/core**: Core business logic and utilities
- **@workspace/ui**: User interface components and themes
- **@workspace/api**: API layer and service definitions

## Quick Start
```bash
# Install dependencies
npm install

# Build all packages
npm run build

# Run tests
npm test

# Start development
npm run dev
```

## Architecture
- Package dependency relationships
- Shared tooling and build system
- Development and deployment workflows

## Documentation
- [Workspace Documentation](./documents/WORKSPACE_INFO.md)
- [Core Package](./packages/core/README.md)
- [UI Package](./packages/ui/README.md)
```

### 2. Create Root CLAUDE.md (Global Agent Instructions)
```markdown
# CLAUDE.md

This file guides Claude when working with this monorepo workspace.

For workspace-wide information, refer to [documents/WORKSPACE_INFO.md](./documents/WORKSPACE_INFO.md).

## Workspace-Level Instructions

- **Monorepo Management**: Use workspace commands for cross-package operations
- **Shared Standards**: [documents/WORKSPACE_INFO.md#coding-standards](./documents/WORKSPACE_INFO.md#coding-standards)
- **Build System**: [documents/WORKSPACE_INFO.md#build-system](./documents/WORKSPACE_INFO.md#build-system)
- **Package Dependencies**: [documents/WORKSPACE_INFO.md#package-dependencies](./documents/WORKSPACE_INFO.md#package-dependencies)

## Package-Specific Work

When working on specific packages:
- Refer to package-specific CLAUDE.md files
- Consider package boundaries and interfaces
- Maintain package independence where possible

## Cross-Package Considerations

- API compatibility between packages
- Shared dependency management
- Version synchronization requirements

## Known Limitations

- Package interdependency constraints
- Build order requirements
- Shared resource limitations
```

### 3. Create documents/WORKSPACE_INFO.md (Workspace Documentation)
```markdown
# Workspace Technical Documentation

## Monorepo Architecture
- Package organization principles
- Dependency management strategy
- Build system architecture

## Coding Standards
- Unified coding conventions across packages
- Shared linting and formatting configuration
- Common patterns and practices

## Build System
- Workspace-level build configuration
- Package build dependencies and order
- Optimization and bundling strategies

## Package Dependencies
- Internal package dependencies
- External dependency management
- Version synchronization policies

## Development Environment
- Workspace setup procedures
- Development tools and configuration
- Local development workflows

## Testing Strategy
- Package-level testing
- Integration testing across packages
- End-to-end testing procedures

## Release Management
- Package versioning strategy
- Release coordination procedures
- Deployment automation
```

### 4. Create Package-Specific Documentation

#### packages/core/README.md
```markdown
# @workspace/core

Core business logic and utility functions.

## Purpose
- Shared business logic
- Common utility functions
- Type definitions and interfaces

## Installation
```bash
# Install from workspace root
npm install

# Build core package
npm run build --workspace=@workspace/core
```

## Usage
```javascript
import { utility } from '@workspace/core';
```

## API Documentation
- [Detailed API Documentation](./documents/PACKAGE_INFO.md)
- [Workspace Documentation](../../documents/WORKSPACE_INFO.md)
```

#### packages/core/CLAUDE.md
```markdown
# @workspace/core - CLAUDE.md

This file guides Claude when working specifically with the core package.

## Essential Information
- **Package Role**: Foundational business logic and utilities
- **Key Technologies**: TypeScript, Node.js utilities
- **Build Commands**: `npm run build --workspace=@workspace/core`

## Reference Information
- **Workspace Standards**: [../../documents/WORKSPACE_INFO.md#coding-standards](../../documents/WORKSPACE_INFO.md#coding-standards)
- **Package Details**: [documents/PACKAGE_INFO.md](./documents/PACKAGE_INFO.md)

## Package-Specific Constraints
- Must remain framework-agnostic
- No UI dependencies allowed
- Performance-critical code paths
- Comprehensive test coverage required

## Quality Assurance
- All exports must be properly typed
- Breaking changes require version coordination
- Documentation required for all public APIs

## Cross-Package Considerations
- This package is a dependency for other packages
- Changes affect downstream consumers
- Maintain backward compatibility
```

#### packages/core/documents/PACKAGE_INFO.md
```markdown
# @workspace/core Technical Documentation

## Package Architecture
- Module organization and structure
- Internal component relationships
- Export strategy and public API

## Implementation Details
- Core algorithms and data structures
- Performance optimization strategies
- Error handling patterns

## API Reference
- Function signatures and parameters
- Return types and error conditions
- Usage examples and patterns

## Dependencies
- External dependencies and rationale
- Peer dependencies and version constraints
- Development dependencies

## Testing
- Unit testing strategy and coverage
- Integration testing with other packages
- Performance testing requirements

## Build and Distribution
- Build configuration and optimization
- Distribution formats and targets
- Compatibility considerations
```

#### packages/ui/CLAUDE.md
```markdown
# @workspace/ui - CLAUDE.md

This file guides Claude when working specifically with the UI package.

## Essential Information
- **Package Role**: Reusable UI components and themes
- **Key Technologies**: React, CSS-in-JS, Storybook
- **Build Commands**: `npm run build --workspace=@workspace/ui`

## Reference Information
- **Workspace Standards**: [../../documents/WORKSPACE_INFO.md#coding-standards](../../documents/WORKSPACE_INFO.md#coding-standards)
- **Package Details**: [documents/PACKAGE_INFO.md](./documents/PACKAGE_INFO.md)

## Package-Specific Constraints
- Components must be framework-agnostic where possible
- Accessibility requirements (WCAG 2.1 AA)
- Theme consistency requirements
- Responsive design principles

## Quality Assurance
- Visual regression testing required
- Component documentation in Storybook
- Accessibility testing for all components
- Cross-browser compatibility testing

## Cross-Package Considerations
- Uses @workspace/core for business logic
- Provides components for application packages
- Theme coordination across consuming packages
```

## Information Hierarchy Rules

### Workspace Level
- Monorepo architecture and organization
- Cross-package standards and conventions
- Shared build system and tooling
- Package dependency management

### Package Level
- Package-specific functionality and API
- Internal architecture and implementation
- Package-specific build and test procedures
- Package-specific constraints and requirements

### Minimal Reference Pattern
- Packages reference only essential workspace information
- Specific section references with anchors
- Self-contained package documentation
- Clear package boundary definitions

## Benefits of This Structure

- **Clear Package Boundaries**: Each package has distinct responsibilities
- **Context Efficient**: AI agents access minimal necessary information
- **Maintainable**: Single source of truth for each concern level
- **Scalable**: Easy to add new packages to workspace

## Customization Guidelines

- Adapt workspace-level standards to your monorepo setup
- Define clear package boundaries and interfaces
- Maintain consistent referencing patterns across packages
- Regular review of cross-package dependencies and standards
- Consider package-specific tooling and configuration needs