# documents/ — Index

```yaml
document_type: "index"
target_audience: "ai_agents"
language: "english"
project: "E-Commerce Microservices Solution (example)"
```

## Document Inventory

```yaml
documents:
  - path: "documents/INDEX.md"
    version: "1.0.0"
    purpose: "Routing hub (this file)"
  - path: "documents/project/overview.md"
    version: "1.0.0"
    purpose: "Solution overview, child projects, communication patterns"
  - path: "documents/project/architecture.md"
    version: "1.0.0"
    purpose: "Architecture patterns, technology stack, service design"
  - path: "documents/project/children.md"
    version: "1.0.0"
    purpose: "Child project management and coordination"
```

## Routing Map

```yaml
"solution overview or child project list": "documents/project/overview.md"
"architecture decisions": "documents/project/architecture.md"
"child project coordination": "documents/project/children.md"
```

## Child Projects

```yaml
child_projects:
  - name: "UserService"
    path: "UserService/"
    has_own_documents: true
  - name: "ProductService"
    path: "ProductService/"
    has_own_documents: true
```
