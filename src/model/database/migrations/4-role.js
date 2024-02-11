"use strict";

const { DataTypes } = require("sequelize");

module.exports = {

  async up(queryInterface, Sequelize) {

    await queryInterface.createTable("roles", {

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
    });
  },

  async down(queryInterface, Sequelize) {
      await queryInterface.dropTable("roles");
    },
};

