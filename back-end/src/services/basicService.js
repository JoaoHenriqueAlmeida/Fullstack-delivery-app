const genericService = {
  create: async (model, data) => {
    const result = await model.create(data);
    return result;
  },

  read: async (model) => {
    const result = await model.findAll();
    return result;
  },

  readOne: async (model, id) => {
    const result = await model.findOne({ where: { id } });
    return result;
  },

  update: async (model, id, data) => {
    const result = await model.update(data, { where: { id } });
    return result;
  },

  delete: async (model, id) => {
    const result = await model.destroy({ where: { id } });
    return result;
  },
};

export default genericService;