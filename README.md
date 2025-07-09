# Universal Documentation Strategy for AI Agent-Driven Development

A comprehensive documentation strategy framework designed for software projects where AI agents (Claude, Gemini, Copilot) are actively involved in development.

## Overview

This strategy provides a structured approach to organizing and managing documentation that serves both human developers and AI agents effectively. It addresses the unique challenges of AI-driven development while maintaining traditional documentation best practices.

## Key Features

- **Audience-Specific Design**: Separate documentation for humans and AI agents
- **Context-Aware Information Management**: Optimized for AI agent context limitations
- **Scalable Architecture**: Supports single projects, multi-project workspaces, and monorepos
- **Minimal Reference Principle**: Reduces unnecessary information traversal
- **Multi-Agent Collaboration**: Guidelines for multiple AI agents working together

## Documentation Files

### Core Strategy Documents
- **[DOCUMENTATION_STRATEGY.md](./DOCUMENTATION_STRATEGY.md)** - Complete strategy specification (English)
- **[DOCUMENTATION_STRATEGY_ja.md](./DOCUMENTATION_STRATEGY_ja.md)** - Complete strategy specification (Japanese)

### Implementation Examples
- **[examples/single-project/](./examples/single-project/)** - Single project implementation
- **[examples/multi-project/](./examples/multi-project/)** - Multi-project workspace implementation
- **[examples/workspace/](./examples/workspace/)** - Monorepo/workspace implementation

## Quick Start

### 1. Choose Your Architecture Pattern
- **Single Project**: Simple projects with unified codebase
- **Multi-Project**: Independent projects with shared standards
- **Workspace/Monorepo**: Packages with hierarchical dependencies

### 2. Implement Core Structure
```
/
├── README.md (Human entry point)
├── CLAUDE.md (AI agent instructions)
├── documents/
│   └── PROJECT_INFO.md (Detailed documentation)
```

### 3. Follow Information Hierarchy Rules
- **Parent Level**: Global architecture, shared standards, dependencies
- **Child Level**: Project-specific features, local configurations
- **Minimal Reference**: Only essential cross-references

## Key Principles

### Single Source of Truth
- Avoid information duplication
- Establish canonical locations for each information type
- Maintain clear information hierarchy

### Context Efficiency
- Essential information in agent files
- Minimal external references
- Self-contained child project documentation

### Progressive Disclosure
- Agent → README → documents/INFO → implementations
- Layered information access
- Targeted section references

## Integration Guide

### For New Projects
1. Copy the appropriate example structure
2. Customize agent instructions for your technology stack
3. Populate documentation following the content guidelines

### For Existing Projects
1. Assess current documentation structure
2. Migrate content following the hierarchy rules
3. Update agent instructions to reference new structure

## Maintenance

### Regular Review Cycles
- **Monthly**: Agent instruction effectiveness
- **Quarterly**: Architecture optimization
- **Annually**: Strategy evolution

### Quality Assurance
- Information consistency across hierarchy
- Agent and human audience effectiveness
- Development velocity impact monitoring

## License

This documentation strategy is released under the MIT License. Feel free to adapt and use in your projects.

## Contributing

This strategy is designed to evolve with AI agent development practices. Contributions and improvements are welcome through:
- Issue reports for unclear guidance
- Pull requests for strategy enhancements
- Examples of successful implementations

## Future Roadmap

- Enhanced multi-agent collaboration patterns
- Integration with popular development tools
- Automated documentation consistency checking
- Community-driven best practices collection

---

*This documentation strategy provides a foundation for effective documentation management in AI agent-driven development environments, supporting projects of varying complexity and organizational structures.*