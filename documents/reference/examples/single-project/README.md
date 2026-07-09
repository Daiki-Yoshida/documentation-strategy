# User Management API

A secure and high-performance user management system backend API built with TypeScript, Express, and PostgreSQL.

## Project Overview

This project provides a comprehensive user management solution with OAuth2.0 authentication, role-based access control, and RESTful API design following OpenAPI specifications.

## Setup Instructions

1. **Prerequisites**
   - Node.js 18+ 
   - PostgreSQL 14+
   - npm or yarn

2. **Installation**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Copy `.env.example` to `.env`
   - Configure database connection
   - Set OAuth2.0 credentials

4. **Database Setup**
   ```bash
   npm run db:migrate
   npm run db:seed
   ```

5. **Development Server**
   ```bash
   npm run dev
   ```

## Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run integration tests
npm run test:integration
```

## API Documentation

- OpenAPI specification: `/api/docs`
- Postman collection: `docs/postman-collection.json`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and ensure coverage ≥80%
5. Submit a pull request

## Contact

Project Lead: [Your Name]
Email: [your.email@company.com]
Slack: #user-management-api