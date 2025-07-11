project: "UserService"
status: "in_development"
priority: "high"
tech_stack: "C# + .NET 8 + Entity Framework Core + SQL Server"
architecture: "Clean Architecture + Domain-Driven Design"
constraints:
  - "jwt_authentication_required"
  - "password_hashing_bcrypt"
  - "role_based_authorization"
  - "input_validation_required"
  - "audit_logging_user_actions"
current_phase: "authentication_and_user_management"

## Service Routing

### Core Documentation
- **Authentication Flow**: documents/authentication.md
- **Database Schema**: documents/database.md
- **API Endpoints**: documents/api-endpoints.md
- **Security Guidelines**: documents/security.md

### Domain Responsibilities
- User registration and profile management
- Authentication and JWT token generation
- Role and permission management
- Password reset and email verification
- User activity audit logging

### API Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User authentication
- `GET /api/users/profile` - User profile retrieval
- `PUT /api/users/profile` - User profile update
- `POST /api/auth/refresh` - Token refresh
- `POST /api/auth/logout` - User logout

### Database Tables
- Users (Id, Email, PasswordHash, CreatedAt, UpdatedAt)
- Roles (Id, Name, Description)
- UserRoles (UserId, RoleId)
- UserProfiles (UserId, FirstName, LastName, Phone, Address)
- AuditLogs (Id, UserId, Action, Timestamp, Details)

### External Dependencies
- Redis for session management
- Email service for notifications
- RabbitMQ for user events
- SharedLibraries for common utilities

### Performance Requirements
- Authentication: < 100ms response time
- User profile operations: < 200ms
- Database connection pooling: 20-50 connections
- Cache frequently accessed user data