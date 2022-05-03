const { Op } = require('sequelize');
const genericService = require('./basicService');
const { Sales } = require('../models');

const createSale = async (data) => genericService.create(Sales, data);

const readSales = async () => genericService.read(Sales);

const readSale = async (id) => genericService.readOne(Sales, id);

const readSaleByUser = async (id) => {
  const sale = await Sales.findOne({
    where: {
      [Op.or]: [{ seller_id: id }, { user_id: id }]
    }});
  if (!sale) throw new Error('Usuário não cadastrado para essa venda');
  return sale;
};

const updateSale = async (id, data) => genericService.update(Sales, id, data);

const deleteSale = async (id) => genericService.delete(Sales, id);


module.exports = {
  createSale,
  readSales,
  readSale,
  readSaleByUser,
  updateSale,
  deleteSale,
};