module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('products', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING({ length: 100 }),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: false,
    },
    url_image: {
      type: DataTypes.STRING({ length: 200 }),
      allowNull: false,
    }
  },
  {
    tableName: 'products',
    timestamps: false
  });

  Products.associate = (models) => {
    Products.hasMany(models.SalesProducts, {foreingKey: 'product_id', as: 'product_sales'});
  };

  return Products;
};