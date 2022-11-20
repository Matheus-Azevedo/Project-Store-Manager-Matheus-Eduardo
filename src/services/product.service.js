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

const updateProduct = async (productId, productName) => {
  const product = await productModel.selectById(productId);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  const updatedProduct = await productModel.update(productId, productName);
  return { type: null, message: updatedProduct };
};

const deleteProduct = async (productId) => {
  const product = await productModel.selectById(productId);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  await productModel.remove(productId);
  return { type: null, message: 'Product deleted' };
};

const searchProduct = async (productName) => {
  const products = await productModel.selectByName(productName);
  return { type: null, message: products };
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
};
