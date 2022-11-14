const statusError = {
  PRODUCT_NOT_FOUND: 404,
  INVALID_VALUE: 422,
  PRODUCT_CONFLICT: 409,
};

const findError = (type) => statusError[type] || 500;

module.exports = {
  statusError,
  findError,
};
