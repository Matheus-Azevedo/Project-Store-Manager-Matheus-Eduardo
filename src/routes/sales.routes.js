const express = require('express');
const salesController = require('../controllers/sales.controller');
const {
  productIdIsRequired,
  quantityIsRequired,
  quantityIsGreaterThanZero,
  itensSoldMustBeInDatabase,
} = require('../middlewares/sales.validation');

const salesRouter = express.Router();

// GET /sales - Returns all sales
salesRouter.get('/', salesController.getAllSales);
// GET /sales/:id - Returns a sale by id
salesRouter.get('/:id', salesController.getSaleById);
// POST /sales  -  Create a new sale
salesRouter.post('/',
  productIdIsRequired,
  quantityIsGreaterThanZero,
  quantityIsRequired,
  itensSoldMustBeInDatabase,
  salesController.createSale);
// PUT /sales/:id - Update a sale by id
salesRouter.put('/:id',
  productIdIsRequired,
  quantityIsGreaterThanZero,
  quantityIsRequired,
  itensSoldMustBeInDatabase,
  salesController.updateSaleById);
// DELETE /sales/:id - Delete a sale by id
salesRouter.delete('/:id', salesController.deleteSaleById);

module.exports = salesRouter;
