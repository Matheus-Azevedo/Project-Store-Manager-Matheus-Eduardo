// Require modules
const errors = require('../utils/status.error');
const salesService = require('../services/sales.service');

// Constants
const STATUS_CREATED = 201;
const STATUS_OK = 200;
const STATUS_DELETED = 204;

const getAllSales = async (_req, res) => {
  const { message } = await salesService.getAllSales();
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

const updateSaleById = async (req, res) => {
  const { id } = req.params;
  const itensSold = req.body;
  const { type, message } = await salesService.updateSaleById(id, itensSold);
  if (type) return res.status(errors.findError(type)).json({ message });
  return res.status(STATUS_OK).json(message);
};

const deleteSaleById = async (req, res) => {
  const { type, message } = await salesService.deleteSaleById(req.params.id);
  if (type) return res.status(errors.findError(type)).json({ message });
  return res.status(STATUS_DELETED).json();
};

module.exports = {
  getAllSales,
  getSaleById,
  createSale,
  updateSaleById,
  deleteSaleById,
};
