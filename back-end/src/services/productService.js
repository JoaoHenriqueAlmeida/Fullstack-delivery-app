const genericService = require('./basicService');
const { Products } = require('../database/models');

const createProduct = async (data) => {
  const result = await genericService.create(Products, data);
  return result;
};

const editProduct = async (id, data) => {
  const result = await genericService.update(Products, id, data);
  return result;
};


module.exports = {
  createProduct,
  editProduct,
};