const db = require("../database/models");

const grapeService = {
	getAll: async () => {
		try {
			return await db.Grape.findAll();
		} catch (e) {
			console.error(e);
			return [];
		}
	},
};

module.exports = grapeService;
