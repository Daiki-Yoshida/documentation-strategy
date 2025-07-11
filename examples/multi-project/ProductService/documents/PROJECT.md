project: "ProductService"
status: "in_development"
priority: "high"
tech_stack: "C# + .NET 8 + Entity Framework Core + SQL Server + Redis"
architecture: "Clean Architecture + Domain-Driven Design"
constraints:
  - "redis_caching_required"
  - "search_optimization_required"
  - "inventory_consistency_required"
  - "image_storage_azure_blob"
  - "price_calculation_precision"
current_phase: "product_catalog_and_inventory"

## Service Routing

### Core Documentation
- **Product Catalog**: documents/catalog.md
- **Inventory Management**: documents/inventory.md
- **Pricing Strategy**: documents/pricing.md
- **Search Implementation**: documents/search.md

### Domain Responsibilities
- Product catalog management
- Inventory tracking and updates
- Price calculation and promotions
- Product search and filtering
- Product image and media management

### API Endpoints
- `GET /api/products` - Product listing with pagination
- `GET /api/products/{id}` - Product details
- `POST /api/products` - Create product (admin)
- `PUT /api/products/{id}` - Update product (admin)
- `GET /api/products/search` - Product search
- `GET /api/products/{id}/inventory` - Inventory status
- `PUT /api/products/{id}/inventory` - Update inventory

### Database Tables
- Products (Id, Name, Description, Price, CategoryId, CreatedAt)
- Categories (Id, Name, Description, ParentId)
- ProductImages (Id, ProductId, ImageUrl, IsMain)
- Inventory (ProductId, Quantity, ReservedQuantity, MinimumStock)
- ProductPrices (ProductId, Price, StartDate, EndDate, IsActive)

### External Dependencies
- Redis for product caching
- Azure Blob Storage for images
- Elasticsearch for product search
- RabbitMQ for inventory events
- SharedLibraries for common utilities

### Performance Requirements
- Product listing: < 200ms response time
- Product search: < 500ms response time
- Cache hit ratio: > 80% for product data
- Database connection pooling: 20-50 connections
- Search index updates: Near real-time (< 30 seconds)