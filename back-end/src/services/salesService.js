const { Op } = require('sequelize');
const genericService = require('./basicService');
const { Sales } = require('../database/models');
const { SalesProducts } = require('../database/models');

const createSale = async (data) => {
  const saleData = {
    user_id: data.user_id,
    seller_id: data.seller_id,
    total_price: data.total_price,
    delivery_address: data.delivery_address,
    delivery_number: data.delivery_number,
    sale_date: data.sale_date,
    status: data.status,    
  }
  const sale = await genericService.create(Sales, saleData);
  const salesProducts = Promise.all(data.vendas.map((venda) => {
    await SalesProducts.create({ sale_id: sale.id, product_id: venda.product_id, quantity: venda.quantity });
  }));
  return {
    sale,
    salesProducts,
  };
};

const readSales = async () => genericService.read(Sales);

const readSale = async (id) => genericService.readOne(Sales, id);

const readSaleByUser = async (id) => {
  const sale = await Sales.findOne({
    where: {
      [Op.or]: [{ sellerId: id }, { userId: id }],
    } });
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