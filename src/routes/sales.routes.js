const express = require('express');
const salesController = require('../controllers/sales.controller');
const {
  productIdIsRequired,
  quantityIsRequired,
  quantityIsGreaterThanZero,
  itensSoldMustBeInDatabase,
} = require('../middlewares/sales.validation');

const salesRouter = express.Router();

// POST /sales  -  Create a new sale
salesRouter.post('/',
  productIdIsRequired,
  quantityIsGreaterThanZero,
  quantityIsRequired,
  itensSoldMustBeInDatabase,
  salesController.createSale);

module.exports = salesRouter;
