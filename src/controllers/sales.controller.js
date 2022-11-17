// Require modules
const errors = require('../utils/status.error');
const salesService = require('../services/sales.service');

// Constants
const STATUS_CREATED = 201;

const createSale = async (req, res) => {
  console.log('controller', req.body);
  const itensSold = req.body;
  const { type, message } = await salesService.createSale(itensSold);
  if (type) return res.status(errors.findError(type)).json({ message });
  return res.status(STATUS_CREATED).json(message);
};

module.exports = {
  createSale,
};
