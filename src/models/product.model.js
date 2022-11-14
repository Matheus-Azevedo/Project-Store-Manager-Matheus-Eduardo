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

module.exports = {
  selectAll,
  selectById,
};
