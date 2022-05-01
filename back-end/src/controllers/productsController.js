const productService = require('../services/productService');

const read = async (_req, res) => {
  const products = await productService.findProducts();
  return res.status(200).json(products);
};

const readOne = async (req, res) => {
  const { id } = req.params;
  const product = await productService.findOneProduct(id);
  return res.status(200).json(product);
};

module.exports = {
  read,
  readOne,
};