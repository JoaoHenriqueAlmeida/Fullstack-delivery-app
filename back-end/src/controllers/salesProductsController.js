const salesProductsService = require('../services/salesProductsService');

const read = async (_req, res) => {
  const salesProducts = await salesProductsService.getQuantityOnSale();
  return res.status(200).json(salesProducts);
};

const saleProductsById = async (req, res) => {
  const { id } = req.params;
  const results = await salesProductsService.readSaleProductsById(id);
  if (!results) res.status(404).json({ message: 'Venda não encontrada' });
  return res.status(200).json(results);
};

module.exports = {
  read,
  saleProductsById,
};