module.exports = (sequelize, DataTypes) => {
  let alias = "Rol";

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
  };

  let config = {
    tableName: "roles",
    timestamps: false,
  };

  let Rol = sequelize.define(alias, columns, config);
  Rol.associate = function (models) {
    Rol.hasMany(models.User, {
      as: "roles",
      foreignKey: "rol_id",
    });
  };

  return Rol;
};
