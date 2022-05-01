const productService = require('../services/productService');

const read = async (_req, res) => {
  const products = await productService.findProducts();
  return res.status(200).json(products);
};

module.exports = {
  read,
};