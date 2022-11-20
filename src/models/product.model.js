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

const update = async (id, productName) => {
  await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?', [productName, id],
  );
  return { id, name: productName };
};

const remove = async (id) => {
  const [result] = await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?', [id],
  );
  return result;
};

const selectByName = async (productName) => {
  const [results] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE name LIKE ?', [`%${productName}%`],
  );
  return results;
};

module.exports = {
  selectAll,
  selectById,
  insert,
  update,
  remove,
  selectByName,
};
