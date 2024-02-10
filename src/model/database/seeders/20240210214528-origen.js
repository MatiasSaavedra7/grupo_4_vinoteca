"use strict";
const { faker } = require("@faker-js/faker");
const db = require("../../models");

module.exports = {
  async up(queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert("origins", [
      {
        name: "nacional",
      },
      {
        name: "importado",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("origins", null, {});
  },
};
