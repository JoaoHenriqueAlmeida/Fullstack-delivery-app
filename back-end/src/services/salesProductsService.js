const { SalesProducts, Sales, Products } = require('../../models');
const genericService = require('./basicService');

const readSaleProducts = async () => {
  const salesProducts = await genericService.read(SalesProducts);
  return salesProducts;
}

const getQuantityOnSale = async () => {
  const saleData = await SalesProducts.findAll({
    include: [{ model: Sales, as: 'sale' }, { model: Products, as: 'product' }],
  });

  console.log(saleData);
  return saleData;
}

module.exports = {
  readSaleProducts,
}