// Requires modules
const express = require('express');
const productController = require('../controllers/product.controller');

// Router instance
const productRouter = express.Router();

// GET /products  -  Returns an list of all products
productRouter.get('/', productController.getAllProducts);
// GET /products/:id  -  Returns an product by id
productRouter.get('/:id', productController.getProductById);

module.exports = productRouter;
