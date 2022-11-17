const connection = require('./db/connection');

const insertSalesProducts = async (saleId, itemSold) => {
  console.log('model', itemSold);
  const { productId, quantity } = itemSold;
  await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, productId, quantity],
  );
};

const insertSales = async () => {
  const [sale] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW())', [],
  );
  return { saleId: sale.insertId };
};

module.exports = {
  insertSalesProducts,
  insertSales,
};
