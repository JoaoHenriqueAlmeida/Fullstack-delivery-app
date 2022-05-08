const { Op } = require('sequelize');
const genericService = require('./basicService');
const { Sales } = require('../database/models');
const { SalesProducts } = require('../database/models');

const createSale = async (data) => {
  const saleData = {
    userId: data.userId,
    sellerId: data.sellerId,
    totalPrice: data.totalPrice,
    deliveryAddress: data.deliveryAddress,
    deliveryNumber: data.deliveryNumber,
    saleDate: data.saleDate,
    status: data.status,    
  };

  const sale = await genericService.create(Sales, saleData);
  const salesProducts = await Promise.all(data.cart.map(async (venda) => {
    const results = await SalesProducts
      .create({ saleId: sale.id, productId: venda.id, quantity: venda.quantity });
    return results;
  }));
  console.log(salesProducts)
  return { sale, salesProducts };
};

const readSales = async () => genericService.read(Sales);

const readSale = async (id) => genericService.readOne(Sales, id);

const readSaleByUsersInvolved = async (id) => {
  const sale = await Sales.findOne({
    where: {
      [Op.or]: [{ sellerId: id }, { userId: id }],
    } });
  if (!sale) throw new Error('Usuário não cadastrado para essa venda');
  return sale;
};

const readSaleByUserId = async (id) => {
  const sale = await Sales.findAll({
    where: { userId: id },
  });

  if (!sale) throw new Error('Usuário não participou dessa venda');

  return sale;
};

const updateSale = async (id, data) => genericService.update(Sales, id, data);

const deleteSale = async (id) => genericService.delete(Sales, id);

module.exports = {
  createSale,
  readSales,
  readSale,
  readSaleByUsersInvolved,
  readSaleByUserId,
  updateSale,
  deleteSale,
};