const salesModel = require('../models/sales.model');

const getAllSales = async () => {
  const sales = await salesModel.selectAllSales();
  return { type: null, message: sales };
};

const getSaleById = async (saleId) => {
  const sale = await salesModel.selectSaleById(saleId);
  const saleIsNotFound = sale.length === 0;
  if (!sale || saleIsNotFound) return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
  return { type: null, message: sale };
};

const createSale = async (itensSold) => {
  const { saleId } = await salesModel.insertSales();
  await Promise.all(
    itensSold.map(async (itemSold) => salesModel.insertSalesProducts(saleId, itemSold)),
  );
  return { type: null, message: { id: saleId, itemsSold: itensSold } };
};

module.exports = {
  getAllSales,
  getSaleById,
  createSale,
};
