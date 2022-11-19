// Require modules
const errors = require('../utils/status.error');
const salesService = require('../services/sales.service');

// Constants
const STATUS_CREATED = 201;
const STATUS_OK = 200;

const getAllSales = async (_req, res) => {
  const { type, message } = await salesService.getAllSales();
  if (type) {
    return res.status(errors.findError(type).status).json({ message });
  }
  return res.status(STATUS_OK).json(message);
};

const getSaleById = async (req, res) => {
  const { type, message } = await salesService.getSaleById(req.params.id);
  if (type) return res.status(errors.findError(type)).json({ message });
  return res.status(STATUS_OK).json(message);
};

const createSale = async (req, res) => {
  const itensSold = req.body;
  const { type, message } = await salesService.createSale(itensSold);
  if (type) return res.status(errors.findError(type)).json({ message });
  return res.status(STATUS_CREATED).json(message);
};

module.exports = {
  getAllSales,
  getSaleById,
  createSale,
};
