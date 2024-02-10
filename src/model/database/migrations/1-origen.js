"use strict";
const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("origins", {
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
        unique: true
      },
    });

    await queryInterface.createTable("origins", { id: Sequelize.INTEGER });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("origins");
  },
};
