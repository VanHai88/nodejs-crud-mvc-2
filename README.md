# Node.js MVC API

A Node.js MVC API built with Express and TypeScript, using JSON file for data storage.

## Features

- MVC Architecture
- CRUD operations for Products
- JSON file-based data storage
- TypeScript support

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Start the server:
   ```bash
   npm start
   ```

For development:
```bash
npm run dev
```

## API Endpoints

- GET /api/products - Get all products
- GET /api/products/:id - Get product by ID
- POST /api/products - Create a new product
- PUT /api/products/:id - Update a product
- DELETE /api/products/:id - Delete a product

## Request Flow

1. Client sends request to route (e.g., GET /api/products/123)
2. Route forwards to Controller
3. Controller requests data from Model
4. Model retrieves/updates data in data.json
5. Model returns data to Controller
6. Controller sends JSON response to Client