const models = require('./');
module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
    saleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'sale_id',
      foreignKey: true,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'product_id',
      foreignKey: true,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'salesProducts',
    timestamps: false,
    // underscored: true,
  });

  SalesProducts.associate = (models) => {
    SalesProducts.belongsTo(models.Products, { foreignKey: 'product_id', as: 'pt_sales' });
    SalesProducts.belongsTo(models.Sales, { foreignKey: 'sale_id', as: 'sl_products' });
  }
  return SalesProducts;
};