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
    if (!result) return null;
    return result;
  },

  update: async (model, id, data) => {
    const result = await model.update(data, { where: { id } });
    if (!result) return null;
    return result;
  },

  delete: async (model, id) => {
    const result = await model.destroy({ where: { id } });
    if (!result) return null;
    return result;
  },
};

export default genericService;