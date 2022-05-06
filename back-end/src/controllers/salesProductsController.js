const salesProductsService = require('../services/salesProductsService');

const read = async (_req, res) => {
  const salesProducts = await salesProductsService.getQuantityOnSale();
  return res.status(200).json(salesProducts);
};

module.exports = {
  read,
}