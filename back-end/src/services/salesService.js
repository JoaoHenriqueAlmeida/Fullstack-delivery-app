const { Op } = require('sequelize');
const genericService = require('./basicService');
const { Sales } = require('../database/models');
const { SalesProducts } = require('../database/models');
const { Users } = require('../database/models');

const formatSalesProductArray = (cart, sale) => {
  const salesProducts = cart.map((item) => ({
    saleId: sale.id,
    productId: item.id,
    quantity: item.quantity,
  }));
  return salesProducts;
};

const formatSalesObject = (data) => {
  const formattedSales = {
    userId: data.user_id,
    sellerId: data.seller_id,
    totalPrice: data.totalPrice,
    deliveryAddress: data.deliveryAddress,
    deliveryNumber: data.deliveryNumber,
    saleDate: data.saleDate,
    status: data.status,
  };
  return formattedSales;
};

const createSale = async (data) => {
  const sale = await genericService.create(Sales, formatSalesObject(data));

  const salesProducts = await SalesProducts.bulkCreate(formatSalesProductArray(data.cart, sale));
 
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
    include: [{ model: Users, as: 'user_sales' }],
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