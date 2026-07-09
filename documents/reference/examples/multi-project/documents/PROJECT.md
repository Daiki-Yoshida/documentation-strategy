project: "E-Commerce Microservices Solution"
status: "in_development"
priority: "high"
tech_stack: "C# + .NET 8 + SQL Server + Redis + RabbitMQ"
architecture: "Clean Architecture + Domain-Driven Design + Microservices"
constraints:
  - "clean_architecture_mandatory"
  - "test_coverage_80_percent_minimum"
  - "api_versioning_required"
  - "centralized_logging_required"
  - "jwt_authentication_across_services"
current_phase: "core_services_implementation"

## Solution Routing

### Child Projects (Microservices)
- **UserService/**: User management, authentication, profiles
- **ProductService/**: Product catalog, inventory, pricing
- **OrderService/**: Order processing, payment, fulfillment
- **SharedLibraries/**: Common utilities, domain models, contracts

### Core Documentation
- **Architecture Overview**: documents/architecture.md
- **Security Guidelines**: documents/security.md
- **Development Standards**: documents/development.md
- **Deployment Guide**: documents/deployment.md
- **Child Project Management**: documents/children.md

### Communication Patterns
- **Synchronous**: HTTP REST APIs for real-time operations
- **Asynchronous**: RabbitMQ for event-driven operations
- **Data Consistency**: Event sourcing for critical operations
- **Caching**: Redis for performance optimization

### Current Focus Areas
1. API Gateway implementation and configuration
2. Service-to-service authentication
3. Database per service pattern implementation
4. Event-driven communication setup
5. Centralized logging and monitoring

### Global Constraints
- All services must implement health checks
- API responses must follow standard format
- All database operations must be transactional
- Error handling must be consistent across services
- Performance SLA: 95% requests < 200ms