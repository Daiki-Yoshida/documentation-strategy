# E-Commerce Microservices Solution

A scalable e-commerce platform built with .NET 8, implementing microservices architecture with clean architecture patterns.

## Solution Overview

This solution consists of multiple microservices handling different business domains:
- **User Service**: Authentication, user management, profiles
- **Product Service**: Product catalog, inventory management
- **Order Service**: Order processing, payment integration
- **Shared Libraries**: Common utilities, domain models

## Architecture

- **Framework**: .NET 8
- **Architecture**: Clean Architecture + Domain-Driven Design
- **Communication**: HTTP REST + Message Queues (RabbitMQ)
- **Database**: SQL Server + Redis Cache
- **API Gateway**: Ocelot
- **Authentication**: JWT Bearer tokens
- **Monitoring**: Serilog + Application Insights

## Prerequisites

- .NET 8 SDK
- SQL Server 2022 (or SQL Server Express)
- Redis
- RabbitMQ
- Visual Studio 2022 or VS Code

## Quick Start

1. **Clone and Setup**
   ```bash
   git clone <repository-url>
   cd ecommerce-microservices
   ```

2. **Database Setup**
   ```bash
   dotnet ef database update --project UserService/src/UserService.Infrastructure
   dotnet ef database update --project ProductService/src/ProductService.Infrastructure
   dotnet ef database update --project OrderService/src/OrderService.Infrastructure
   ```

3. **Start Services**
   ```bash
   # Start all services
   dotnet run --project ApiGateway/src/ApiGateway.API
   dotnet run --project UserService/src/UserService.API
   dotnet run --project ProductService/src/ProductService.API
   dotnet run --project OrderService/src/OrderService.API
   ```

## Development Guidelines

1. Follow Clean Architecture principles
2. Implement proper error handling and logging
3. Write comprehensive unit and integration tests
4. Use dependency injection consistently
5. Implement proper API versioning
6. Follow REST API best practices

## Testing

```bash
# Run all tests
dotnet test

# Run tests with coverage
dotnet test --collect:"XPlat Code Coverage"

# Run specific service tests
dotnet test UserService/tests/
dotnet test ProductService/tests/
dotnet test OrderService/tests/
```

## Contributing

1. Create feature branches from `develop`
2. Follow naming convention: `feature/service-name/feature-description`
3. Ensure all tests pass
4. Update relevant documentation
5. Submit pull request to `develop`

## Contact

Architecture Team: architecture@company.com  
DevOps Team: devops@company.com  
Slack: #ecommerce-microservices