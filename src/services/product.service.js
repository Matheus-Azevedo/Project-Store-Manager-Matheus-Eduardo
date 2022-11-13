const productModel = require('../models/product.model');

const getAllProducts = async () => {
  const products = await productModel.selectAll();
  return products;
};

const getProductById = async (id) => {
  const product = await productModel.selectById(id);
  return product;
};

module.exports = {
  getAllProducts,
  getProductById,
};
