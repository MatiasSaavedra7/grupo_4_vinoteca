"use strict";
const { faker } = require("@faker-js/faker");
const db = require("../../models");

module.exports = {
  async up(queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert("colors", [
      {
        name: "tinto"
      },
      {
        name: "blanco"
      },
      {
        name: "rosado"
      },
      {
        name: "espumante"
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("colors", null, {});
  },
};
