const { SalesProducts, Sales, Products } = require('../database/models');
const genericService = require('./basicService');

const readSaleProducts = async () => {
  const salesProducts = await genericService.read(SalesProducts);
  return salesProducts;
};

const readSaleProductsById = async (id) => {
  const salesProducts = await SalesProducts.findAll({
    where: { saleId: id },
    include: [{ model: Sales, as: 'sl_products' }, { model: Products, as: 'pt_sales' }],
  });
  console.log('salesProducts do service: ', salesProducts);
  return salesProducts;
};

const getQuantityOnSale = async () => {
  const saleData = await SalesProducts.findAll({
    include: [{ model: Sales, as: 'sale_products' }, { model: Products, as: 'product_sales' }],
  });
  return saleData;
};

module.exports = {
  readSaleProducts,
  getQuantityOnSale,
  readSaleProductsById,
};