const connection = require('./db/connection');

const selectAll = async () => {
  const [results] = await connection.execute('SELECT * FROM products');
  return results;
};

const selectById = async (id) => {
  const [[results]] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
  return results;
};

module.exports = {
  selectAll,
  selectById,
};
