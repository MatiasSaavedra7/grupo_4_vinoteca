const db = require("../database/models");

const countryService = {

	getAll: async () => {
		try {
			return await db.Country.findAll();
		} catch (e) {
			console.error(e);
			return [];
		}
	},
};

module.exports = countryService;
