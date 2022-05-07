module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
    id: {
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      // field: 'user_id',
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      // field: 'seller_id',
    },
    totalPrice: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
    },
    deliveryAddress: {
      type: DataTypes.STRING({ length: 100 }),
      allowNull: false,
    },
    deliveryNumber: {
      type: DataTypes.STRING({ length: 50 }),
      allowNull: false,
    },
    saleDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      defaultValue: 'pendente',
      type: DataTypes.STRING({ length: 50 }),
    }
  },
  {
    tableName: 'sales',
    timestamps: false,
    underscored: true,
  });

  Sales.associate = (models) => {
    Sales.hasMany(models.SalesProducts, {foreignKey: 'sale_id', as: 'sale_products'});
    Sales.belongsTo(models.Users, {foreignKey: 'user_id', as: 'user_sales'});
    Sales.belongsTo(models.Users, {foreignKey: 'seller_id', as: 'user_seller'});
  };

  return Sales;
};