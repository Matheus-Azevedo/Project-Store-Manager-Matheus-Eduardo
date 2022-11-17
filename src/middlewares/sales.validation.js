const productService = require('../services/product.service');

// Constants
const STATUS_BAD_REQUEST = 400;
const STATUS_INVALID_VALUE = 422;
const STATUS_NOT_FOUND = 404;

const productIdIsRequired = (req, res, next) => {
  const itensSold = req.body;
  itensSold.every((itemSold) => {
    if (!itemSold.productId) {
      return res
        .status(STATUS_BAD_REQUEST)
        .json({ message: '"productId" is required' });
    }
    return next();
  });
};

const quantityIsRequired = (req, res, next) => {
  const itensSold = req.body;
  itensSold.every((itemSold) => {
    if (!itemSold.quantity) {
      return res
        .status(STATUS_BAD_REQUEST)
        .json({ message: '"quantity" is required' });
    }
    return next();
  });
};

const quantityIsGreaterThanZero = (req, res, next) => {
  const itensSold = req.body;
  itensSold.every((itemSold) => {
    if (itemSold.quantity <= 0) {
      return res
        .status(STATUS_INVALID_VALUE)
        .json({ message: '"quantity" must be greater than or equal to 1' });
    }
    return next();
  });
};

const itensSoldMustBeInDatabase = async (req, res, next) => {
  const itensSold = req.body;
  const products = await (await productService.getAllProducts()).message;
  const arrayOfProductsIds = products.map((product) => product.id);
  const idNotHaveInDatabase = itensSold
    .every((itemSold) => arrayOfProductsIds
    .includes(itemSold.productId));
  if (!idNotHaveInDatabase) {
    return res
      .status(STATUS_NOT_FOUND)
      .json({ message: 'Product not found' });
  }
  return next();
};

module.exports = {
  productIdIsRequired,
  quantityIsRequired,
  quantityIsGreaterThanZero,
  itensSoldMustBeInDatabase,
};
