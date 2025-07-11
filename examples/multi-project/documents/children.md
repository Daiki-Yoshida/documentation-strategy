# Child Project Management

## Active Child Projects

### UserService
- **Path**: `UserService/`
- **Status**: Active Development
- **Responsibility**: User authentication, profile management, role management
- **Database**: UserService.Database (SQL Server)
- **API Port**: 5001
- **Health Check**: `/health`
- **Dependencies**: SharedLibraries.Common, SharedLibraries.Security

### ProductService
- **Path**: `ProductService/`
- **Status**: Active Development
- **Responsibility**: Product catalog, inventory management, pricing
- **Database**: ProductService.Database (SQL Server)
- **API Port**: 5002
- **Health Check**: `/health`
- **Dependencies**: SharedLibraries.Common, SharedLibraries.Events

### OrderService
- **Path**: `OrderService/`
- **Status**: Active Development
- **Responsibility**: Order processing, payment integration, fulfillment
- **Database**: OrderService.Database (SQL Server)
- **API Port**: 5003
- **Health Check**: `/health`
- **Dependencies**: SharedLibraries.Common, SharedLibraries.Events, SharedLibraries.Payment

### SharedLibraries
- **Path**: `SharedLibraries/`
- **Status**: Active Development
- **Responsibility**: Common utilities, domain models, contracts
- **Type**: Class Library Collection
- **Dependencies**: None (foundational libraries)

## Service Communication Matrix

```
UserService -> ProductService: User preferences, recommendations
ProductService -> OrderService: Product availability, pricing
OrderService -> UserService: Order notifications, loyalty points
All Services -> SharedLibraries: Common functionality
```

## Development Coordination

### Branch Strategy
- Each service has independent development branches
- Feature branches: `feature/service-name/feature-description`
- Integration testing occurs at solution level

### Build and Deployment
- Each service can be built and deployed independently
- Solution-level CI/CD pipeline coordinates deployments
- Database migrations handled per service

### Testing Strategy
- Unit tests: Per service (80% coverage minimum)
- Integration tests: Service-to-service communication
- End-to-end tests: Complete user flows across services
- Performance tests: Load testing per service and solution-wide

### Monitoring and Observability
- Centralized logging: All services log to shared infrastructure
- Distributed tracing: Correlation IDs across service calls
- Health monitoring: Individual service health + solution health
- Performance metrics: Per service and aggregated metrics