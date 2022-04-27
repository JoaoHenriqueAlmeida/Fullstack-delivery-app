module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('sales_products', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'sales_products',
    timestamps: false
  });

  SalesProducts.associate = (models) => {
    models.Products.belongsToMany(models.Sales, {
      as: 'sale_products',
      foreingKey: 'sale_id',
      otherKey: 'product_id',
      through: SalesProducts,
    });
    models.Sales.belongsToMany(models.Products, { 
      as: 'product_sales',
      foreingKey: 'product_id',
      otherKey: 'sale_id',
      through: SalesProducts,
    });
  };

  return SalesProducts;
};