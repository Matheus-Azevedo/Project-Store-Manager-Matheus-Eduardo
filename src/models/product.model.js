const connection = require('./db/connection');

const selectAll = async () => {
  const [results] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return results;
};

const selectById = async (id) => {
  const [[results]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [id],
  );
  return results;
};

const insert = async (productName) => {
  const [results] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)', [productName],
  );
  return { id: results.insertId, name: productName };
};

module.exports = {
  selectAll,
  selectById,
  insert,
};
