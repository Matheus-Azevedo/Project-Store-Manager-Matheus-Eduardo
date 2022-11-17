const salesModel = require('../models/sales.model');

const createSale = async (itensSold) => {
  console.log('service', itensSold);
  const { saleId } = await salesModel.insertSales();
  await Promise.all(
    itensSold.map(async (itemSold) => salesModel.insertSalesProducts(saleId, itemSold)),
  );
  return { type: null, message: { id: saleId, itemsSold: itensSold } };
};

module.exports = {
  createSale,
};
