module.exports = (sequelize, DataTypes) => {
  let alias = "User";

  let columns = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER,
    },
  };

  let config = {
    tableName: "users",
    timestamps: false,
  };

  let User = sequelize.define(alias, columns, config);

  User.associate = function (models) {
    User.belongsTo(models.Role, {
      as: "role",
      foreignKey: "role_id",
    }) 

    User.belongsToMany(models.Product, {
        as: "products",
        through: 'users_products',
        foreignKey: 'users_id',
        otherKey: 'products_id',
        timestamps: false
    })   
  };
  return User;
};
