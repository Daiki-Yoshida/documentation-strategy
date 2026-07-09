project: "User Management API"
status: "in_development"
priority: "high"
tech_stack: "TypeScript + Express + PostgreSQL"
architecture: "REST API + MVC pattern"
constraints:
  - "test coverage ≥80%"
  - "OpenAPI compliant"
  - "OAuth2.0 required"
  - "role-based access control"
  - "input validation on all endpoints"
current_phase: "MVP implementation"

## Project Routing

### Core Documentation
- **Security Requirements**: documents/agents/security.md
- **API Specifications**: documents/api-specs.md
- **Testing Guidelines**: documents/agents/testing.md

### Development Workflow
- **Before Implementation**: Read this file + documents/api-specs.md
- **Security Concerns**: Refer to documents/agents/security.md
- **Database Changes**: Update documents/database.md
- **Testing**: Follow documents/agents/testing.md guidelines

### Current Focus Areas
1. User authentication endpoints
2. Role-based authorization middleware
3. Password reset functionality
4. API rate limiting implementation

### Key Constraints
- All endpoints must include input validation
- Database transactions required for multi-table operations
- Audit logging for all user actions
- GDPR compliance for user data handling