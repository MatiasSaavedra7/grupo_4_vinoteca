"use strict";
const { faker } = require("@faker-js/faker");
const db = require("../../models");

module.exports = {
  async up(queryInterface, Sequelize) {

    const origins = [
      { name: "nacional" },
      { name: "importado" }
    ]
    
    await queryInterface.bulkInsert("origins", origins);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("origins", null, {});
  },
};
