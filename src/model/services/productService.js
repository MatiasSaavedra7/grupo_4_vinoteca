const { where } = require("sequelize");
const db = require("../database/models");
const e = require("express");
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

	searchProduct: async (data) => {
		try {
			return await db.Product.findAll({
				where: {
					name: { [Op.like]: `%${data}%` },
				}
			})
		} catch (error) {
			console.error(error);
			return [];
		}
	},

	findAndCount: async function(limit, page){
		try {
			//El método findAndCountAll me devuelve un objeto con dos propiedades, count y rows.
			return await db.Product.findAndCountAll({
				include: [{association: "country"}],
				limit: limit,
				offset: page * limit || 0
			});
		} catch (error) {
			console.log(error.message);
		}
	},

	findAndCountNational: async function (limit, page) {
		try {
			return await db.Product.findAndCountAll({
				include: ["country"],
				where: {
					"$country.name$": "Argentina"
				},
				limit: limit,
				offset: limit * page || 0
			});
		} catch (error) {
			return error.message;
		}
	},

	findAndCountImported: async function (limit, page) {
		try {
			return await db.Product.findAndCountAll({
				include: ["country"],
				where: {
					"$country.name$": { [Op.ne]: "Argentina" }
				},
				limit: limit,
				offset: limit * page || 0
			});
		} catch (error) {
			return error.message;
		}
	}
};

module.exports = productService;
