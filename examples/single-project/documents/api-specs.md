# API Specifications

## Base Configuration
```yaml
base_url: "https://api.example.com/v1"
content_type: "application/json"
authentication: "Bearer JWT"
```

## Core Endpoints

### Authentication
```yaml
POST /auth/login:
  description: "User login with credentials"
  request:
    email: "string (required)"
    password: "string (required)"
  response:
    access_token: "string"
    refresh_token: "string"
    expires_in: "number"

POST /auth/refresh:
  description: "Refresh access token"
  request:
    refresh_token: "string (required)"
  response:
    access_token: "string"
    expires_in: "number"
```

### User Management
```yaml
GET /users:
  description: "List users with pagination"
  parameters:
    page: "number (default: 1)"
    limit: "number (default: 20)"
    role: "string (optional)"
  response:
    users: "array"
    total: "number"
    page: "number"
    limit: "number"

POST /users:
  description: "Create new user"
  request:
    email: "string (required)"
    password: "string (required)"
    role: "string (required)"
    profile: "object (optional)"
  response:
    user: "object"
    created_at: "string"
```

### Role Management
```yaml
GET /roles:
  description: "List available roles"
  response:
    roles: "array"

POST /users/{id}/roles:
  description: "Assign role to user"
  parameters:
    id: "string (required)"
  request:
    role_id: "string (required)"
  response:
    success: "boolean"
```

## Error Responses
```yaml
error_format:
  error: "string"
  code: "number"
  message: "string"
  details: "object (optional)"

common_errors:
  400: "Bad Request - Invalid input"
  401: "Unauthorized - Invalid credentials"
  403: "Forbidden - Insufficient permissions"
  404: "Not Found - Resource not found"
  429: "Too Many Requests - Rate limit exceeded"
  500: "Internal Server Error"
```

## Validation Rules
- Email: Valid email format, unique
- Password: Minimum 8 characters, must include uppercase, lowercase, number, special character
- Role: Must exist in roles table
- User ID: Valid UUID format