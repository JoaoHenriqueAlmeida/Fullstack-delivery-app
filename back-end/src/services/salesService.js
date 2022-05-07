const { Op } = require('sequelize');
const genericService = require('./basicService');
const { Sales } = require('../database/models');
const { SalesProducts } = require('../database/models');

const createSale = async (data) => {
  const saleData = {
    userId: data.user_id,
    sellerId: data.seller_id,
    totalPrice: data.total_price,
    deliveryAddress: data.delivery_address,
    deliveryNumber: data.delivery_number,
    saleDate: data.sale_date,
    status: data.status,    
  };

  const sale = await genericService.create(Sales, saleData);
  const salesProducts = Promise.all(data.vendas.map(async (venda) => {
    await SalesProducts
    .create({ saleId: sale.id, productId: venda.product_id, quantity: venda.quantity });
  }));
  return { sale, salesProducts };
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