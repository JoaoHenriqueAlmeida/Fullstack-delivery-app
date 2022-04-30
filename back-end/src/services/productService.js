const genericService = require('./basicService');
const { Products } = require('../database/models');

const createProduct = async (data) => genericService.create(Products, data);

const editProduct = async (id, data) => genericService.update(Products, id, data);

const deleteProduct = async (id) => genericService.delete(Products, id);

const findProducts = async () => genericService.read(Products);

const findOneProduct = async (id) => genericService.readOne(Products, id);

module.exports = {
  createProduct,
  deleteProduct,
  editProduct,
  findOneProduct,
  findProducts,
};