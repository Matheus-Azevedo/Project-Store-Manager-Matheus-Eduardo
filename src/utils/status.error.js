const statusError = {
  BAD_REQUEST: 400,
  SALE_NOT_FOUND: 404,
  PRODUCT_NOT_FOUND: 404,
  INVALID_VALUE: 422,
  PRODUCT_CONFLICT: 409,
};

const findError = (type) => statusError[type] || 500;

module.exports = {
  statusError,
  findError,
};
