# Inventory Management System API

This is a simple Inventory Management System API built with Node.js and Express. It helps manage products in stock — adding, updating, deleting, and keeping track of low-stock items.

Live Demo: https://inventory-management-api-dxqw.onrender.com

## Features
1. Add, update, and delete products  
2. Set stock quantity and low-stock thresholds  
3. REST API with JSON responses  
4. Basic structure that can be extended for real-world use  

## Local Setup
1. Clone the repository  
   ```bash
   
   git clone https://github.com/your-username/inventory-management-api.git
   cd inventory-management-api

2. Install dependencies
   ```bash
   
   npm install

3. create a .env file and add environment variables
    ```bash
    
     MONGO_URI=your_mongodb_connection_string
     PORT=5000

4. Run the server
   ```bash
   
   npm start or node server.js

**Design choices**

1. The API is designed to be simple and beginner-friendly

2. MongoDB is used as the database (you can replace it with another DB if needed)

3. Stock management is kept basic — only quantity and a low-stock threshold


## API Routes

**Products**

1. POST / → Create a new product (send JSON body with name, description, stock_quantity, low_stock_threshold, price)

2. GET / → Get all products

3. GET /:id → Get a single product by ID

4. PUT /:id → Update a product by ID

5. DELETE /:id → Delete a product by ID

**Stock Management**

1. PUT /:id/increase-stock → Increase stock of a product

2. PUT /:id/decrease-stock → Decrease stock of a product

**Low Stock**

1. GET /low-stock/all → Get all products that are low on stock
