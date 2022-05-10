module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
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
      allowNull: false,
      type: DataTypes.STRING({ length: 200 }),
    }
  },
  {
    tableName: 'products',
    timestamps: false,
    underscored: true,
  });

  Products.associate = (models) => {
    Products.hasMany(models.SalesProducts, {foreignKey: 'product_id', as: 'pt_sales'});
  };

  return Products;
};