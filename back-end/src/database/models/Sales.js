module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
    id: {
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // foreignKey: true,
    },
    seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    total_price: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
    },
    delivery_address: {
      type: DataTypes.STRING({ length: 100 }),
      allowNull: false,
    },
    delivery_number: {
      type: DataTypes.STRING({ length: 50 }),
      allowNull: false,
    },
    sale_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING({ length: 50 }),
      allowNull: false,
    }
  },
  {
    tableName: 'sales',
    timestamps: false,
    
  });

  Sales.associate = (models) => {
    // Sales.hasMany(models.SalesProducts, {foreignKey: 'sale_id', as: 'sale_products'});
    // Sales.belongsTo(models.Users, {foreignKey: 'user_id', as: 'user_sales'});
    Sales.belongsTo(models.Users, {foreignKey: 'sellerId', as: 'user_seller'});
  };

  return Sales;
};