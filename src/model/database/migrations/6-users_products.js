"use strict";
const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users_products", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "users"
          },
          key: "id",
        }
      },
      product_id: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "products"
          },
          key: "id",
        }
      },
      quantity: {
        type: DataTypes.INTEGER,
      }
    });
    
    await queryInterface.createTable('users_products', { id: Sequelize.INTEGER });
    
  },

  async down(queryInterface, Sequelize) {
      await queryInterface.dropTable("users_products");
    },
};

