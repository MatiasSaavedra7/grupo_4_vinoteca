const { where } = require("sequelize");
const db = require("../database/models");
const Op = db.Sequelize.Op;

function Product(data, image) {
	this.grapes_id = data.grapes_id;
	this.country_id = data.country_id;
	this.name = data.name;
	this.price = data.price;
	this.discount = data.discount;
	this.description = data.description;
	this.stock = data.stock;
	this.image = image;
}

const productService = {
	create: async (data, image) => {
		try {
			return await db.Product.create(new Product(data, image));
		} catch (error) {
			console.error(error);
		}
	},

	getAll: async () => {
		try {
			const data = await db.Product.findAll({
				include: [
					{ association: "country" },
					{ association: "grapes" },
				],
			});
			return data;
		} catch (e) {
			console.error(e);
			return [];
		}
	},

	getAllNational: async () => {
		try {
			const products = await db.Product.findAll({
				include: [
					{ association: "country" },
					{ association: "grapes" },
				],
				where: {
					"$country.name$": "Argentina",
				},
			});
			return products;
		} catch (e) {
			console.error(e);
			return [];
		}
	},

	getAllImported: async () => {
		try {
			const products = await db.Product.findAll({
				include: [
					{ association: "country" },
					{ association: "grapes" },
				],
				where: {
					"$country.name$": { [Op.ne]: "Argentina" },
				},
			});
			return products;
		} catch (e) {
			console.error(e);
			return [];
		}
	},

	getBy: async (id) => {
		try {
			return await db.Product.findByPk(id, {
				include: ["country", "grapes"],
			});
		} catch (e) {
			console.error(e);
			return [];
		}
	},

	updateBy: async (id, data) => {
	    try {
	        return await db.Product.update(new Product(data), { where: { id: id } });
	    } catch (e) {
	        console.error(e);
	    }
	},

	deleteBy: async (id) => {
	    try {
	        return await db.Product.destroy({ where: { id: id } });
	    } catch (e) {
	        console.error(e);
	    }
	},
};

module.exports = productService;
