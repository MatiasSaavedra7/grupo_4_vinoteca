"use strict";

const { DataTypes } = require("sequelize");

module.exports = {

  async up(queryInterface, Sequelize) {

    await queryInterface.createTable("users", {

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
        references: {
          model: {
            tableName: 'roles'
          },
          key: "id"
        }
      },

    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};

