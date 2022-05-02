module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.STRING,
      }
    },
    {
      tableName: "users",
      timestamps: false,
    }    
  );

  Users.associate = (models) => {
    Users.hasMany(models.Sales, {foreignKey: 'user_id', as: 'user_sales'});
    Users.hasMany(models.Sales, {foreignKey: 'seller_id', as: 'user_seller'});
  };
  return Users;
}