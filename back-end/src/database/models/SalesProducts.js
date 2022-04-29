module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('salesProducts', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'sales_products',
    timestamps: false,
    underscored: true,
  });

  SalesProducts.associate = (models) => {
    SalesProducts.belongsTo(models.Sales, {foreignKey: 'sale_id', as: 'sale_products'});
    SalesProducts.belongsTo(models.Products, {foreignKey: 'product_id', as: 'product_sales'});
  };

  return SalesProducts;
};