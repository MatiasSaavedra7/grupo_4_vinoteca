module.exports = (sequelize, DataTypes) => {
  let alias = "Product";

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
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      unsigned: true,
    },
    discount: {
      type: DataTypes.INTEGER,
      unsigned: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
    origin_id: {
      type: DataTypes.INTEGER,
    },
    color_id: {
      type: DataTypes.INTEGER,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  };

  let config = {
    tableName: "products",
    timestamps: false,
  };

  let Product = sequelize.define(alias, columns, config);
  Product.associate = function (models) {
    Product.belongsTo(
      models.Origin,
      {
        as: "origin",
        foreignKey: "origin_id",
      },
      Product.belongsTo(models.Color, {
        as: "color",
        foreignKey: "color_id",
      })   )
      Product.belongsToMany(models.User, {
        as: "users",
        through: 'users_products',
        foreignKey: 'products_id',
        otherKey: 'users_id',
        timestamps: false
    })  ;
  };
  return Product;
};
