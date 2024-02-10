"use strict";
const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true,
      },
      origin_id: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "origins"
          },
          key: "id",
        }
      },
      color_id: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "colors"
          },
          key: "id",
        }
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
      descripcion: {
        type: DataTypes.TEXT,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    });
    await queryInterface.createTable("products", { id: Sequelize.INTEGER });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};
