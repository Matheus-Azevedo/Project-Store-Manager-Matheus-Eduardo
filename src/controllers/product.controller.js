const errors = require('../utils/status.error');
const productService = require('../services/product.service');

// Constants
const STATUS_OK = 200;
const STATUS_CREATED = 201;

const getAllProducts = async (_req, res) => {
  const { type, message } = await productService.getAllProducts();
  if (type) return res.status(errors.findError(type)).json({ message });
  return res.status(STATUS_OK).json(message);
};

const getProductById = async (req, res) => {
  const { type, message } = await productService.getProductById(req.params.id);
  if (type) return res.status(errors.findError(type)).json({ message });
  return res.status(STATUS_OK).json(message);
};

const createProduct = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productService.createProduct(name);
  if (type) return res.status(errors.findError(type)).json({ message });
  return res.status(STATUS_CREATED).json(message);
};

const updateProduct = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productService.updateProduct(req.params.id, name);
  if (type) return res.status(errors.findError(type)).json({ message });
  return res.status(STATUS_OK).json(message);
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
};
