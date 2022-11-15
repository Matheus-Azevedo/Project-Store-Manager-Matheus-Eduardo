// Requires modules
const express = require('express');
const productController = require('../controllers/product.controller');

// Router instance
const productRouter = express.Router();

// GET /products  -  Return an list of all products
productRouter.get('/', productController.getAllProducts);
// GET /products/:id  -  Return an product by id
productRouter.get('/:id', productController.getProductById);
// POST /products  -  Create a new product
productRouter.post('/', productController.createProduct);

module.exports = productRouter;
