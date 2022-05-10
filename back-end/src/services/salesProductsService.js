const { SalesProducts, Sales, Products } = require('../database/models');
const genericService = require('./basicService');

const readSaleProducts = async () => {
  const salesProducts = await genericService.read(SalesProducts);
  return salesProducts;
};

const readSaleProductsById = async (id) => {
  const salesProducts = await Sales.findAll({
    where: { id },
    include: [{ model: SalesProducts, as: 'slProducts' }],
    // attributes: [],
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