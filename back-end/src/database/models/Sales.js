module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('sales', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    timestamps: false
  });

  Sales.associate = (models) => {
    Sales.belongsTo(models.Users, {foreingKey: 'user_id', as: 'user_sales'});
    Sales.belongsTo(models.Users, {foreingKey: 'seller_id', as: 'user_seller'});
  };

  return Sales;
};