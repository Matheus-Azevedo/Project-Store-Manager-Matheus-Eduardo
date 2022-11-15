const productModel = require('../models/product.model');

const getAllProducts = async () => {
  const products = await productModel.selectAll();
  return { type: null, message: products };
};

const getProductById = async (productId) => {
  const product = await productModel.selectById(productId);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: product };
};

const createProduct = async (productName) => {
  const newProduct = await productModel.insert(productName);
  return { type: null, message: newProduct };
};

  module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
};
