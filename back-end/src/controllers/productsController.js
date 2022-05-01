const { Product } = require('../database/models');

const read = async (req, res) => {
  const products = await Product.findAll();
  return res.status(200).json(products);
};

module.exports = {
  read,
};