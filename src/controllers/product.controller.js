const productService = require('../services/product.service');

// Constants http status
const OK = 200;
const NOT_FOUND = 404;
const INTERNAL_SERVER_ERROR = 500;

const getAllProducts = async (_req, res) => {
  try {
    const products = await productService.getAllProducts();
    if (!products) {
      return res.status(NOT_FOUND).json({ message: 'Product not found' });
    }
    res.status(OK).json(products);
  } catch (err) {
    res.status(INTERNAL_SERVER_ERROR).json(err.message);
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);
    if (!product) {
      return res.status(NOT_FOUND).json({ message: 'Product not found' });
    }
    return res.status(OK).json(product);
  } catch (err) {
    return res.status(INTERNAL_SERVER_ERROR).json(err.message);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};
