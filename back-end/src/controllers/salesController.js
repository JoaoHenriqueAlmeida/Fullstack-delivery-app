const salesService = require('../services/salesService');
// const salesProductsService = require('../services/salesProductsService');

const create = async (req, res) => {
  try {
    const sale = await salesService.createSale(req.body);
    return res.status(201).json(sale.sale);
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

const read = async (_req, res) => {
  try {
    const sales = await salesService.readSale();
    return res.status(200).json(sales);
  } catch (e) {
    return res.status(400)
      .json({ message: 'Não foi possível listar as vendas, sentimos muito D:' });
  }
};

const readOne = async (req, res) => {
  const sale = await salesService.readSale(req.params.id);
  if (!sale) return res.status(404).json({ message: 'Venda não encontrada' });
  return res.status(200).json(sale);
};

const readSaleByUserId = async (req, res) => {
  try {
    const sale = await salesService.readSaleByUserId(req.body.id);
    return res.status(200).json(sale);
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

const readSaleBySellerId = async (req, res) => {
  try {
    const sale = await salesService.readSaleBySellerId(req.params.id);
    return res.status(200).json(sale);
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

const updateSaleStatus = async (req, res) => {
  try {
    const sale = await salesService.updateSaleStatus(req.params.id, req.body);
    return res.status(200).json(sale);
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

module.exports = {
  create,
  read,
  readOne,
  readSaleByUserId,
  readSaleBySellerId,
  updateSaleStatus,
};