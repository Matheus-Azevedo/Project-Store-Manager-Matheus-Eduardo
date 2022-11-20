// Requires modules
const express = require('express');
const productController = require('../controllers/product.controller');
const {
  nameCanNotBeEmpty,
  nameCanNotBeLessThanFivCharacters,
} = require('../middlewares/product.validation');

// Router instance
const productRouter = express.Router();

// GET /products  -  Return an list of all products
productRouter.get('/', productController.getAllProducts);
// GET /products/:id  -  Return an product by id
productRouter.get('/:id', productController.getProductById);
// POST /products  -  Create a new product
productRouter.post('/',
  nameCanNotBeEmpty,
  nameCanNotBeLessThanFivCharacters,
  productController.createProduct);
// PUT /products/:id  -  Update an product by id
productRouter.put('/:id',
  nameCanNotBeEmpty,
  nameCanNotBeLessThanFivCharacters,
  productController.updateProduct);

module.exports = productRouter;
