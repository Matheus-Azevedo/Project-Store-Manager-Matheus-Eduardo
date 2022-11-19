const connection = require('./db/connection');

const selectAllSales = async () => {
  const [sales] = await connection.execute(
    `SELECT S.id AS saleId, S.date, SP.product_id AS productId, SP.quantity
    FROM StoreManager.sales_products AS SP
    INNER JOIN StoreManager.sales AS S
    ON SP.sale_id = S.id
    ORDER BY saleId`,
  );
  return sales;
};

const selectSaleById = async (id) => {
  const [sale] = await connection.execute(
    `SELECT S.date, SP.product_id AS productId, SP.quantity
    FROM StoreManager.sales_products AS SP
    INNER JOIN StoreManager.sales AS S
    ON SP.sale_id = S.id
    WHERE S.id = ?`,
    [id],
  );
  return sale;
};

const insertSalesProducts = async (saleId, itemSold) => {
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
  selectAllSales,
  selectSaleById,
  insertSalesProducts,
  insertSales,
};
