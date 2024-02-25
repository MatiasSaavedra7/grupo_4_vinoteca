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
	this.image = image || "";
}

const productService = {
	create: async (data, image) => {
		try {
			return await db.Product.create(new Product(data, image));
		} catch (error) {
			console.error(error);
		}
	},

	getAll: async (page) => {
		try {
			const products = await db.Product.findAll({
				include: [
					{ association: "country" },
					{ association: "grapes" },
				],
				limit: 12,
				offset: page * 12 || 0
			});
			return products;
		} catch (e) {
			console.error(e);
			return [];
		}
	},

	getAllNational: async (page) => {
		try {
			const products = await db.Product.findAll({
				include: [
					{ association: "country" },
					{ association: "grapes" },
				],
				where: {
					"$country.name$": "Argentina",
				},
				limit: 12,
				offset: page * 12 || 0
			});
			return products;
		} catch (e) {
			console.error(e);
			return [];
		}
	},

	getAllImported: async (page) => {
		try {
			const products = await db.Product.findAll({
				include: [
					{ association: "country" },
					{ association: "grapes" },
				],
				where: {
					"$country.name$": { [Op.ne]: "Argentina" },
				},
				limit: 12,
				offset: page * 12 || 0
			});
			return products;
		} catch (e) {
			console.error(e);
			return [];
		}
	},

	getAllDiscount: async () => {
		try {
			const products = await db.Product.findAll({
				where: {
					"discount": { [Op.ne]: 0 },
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

	updateBy: async (id, data, image) => {
		try {

			// Verificamos si el parámetro image es vacío o undefined
			if (!image) {
				// Buscamos el producto por id
				let product = await db.Product.findByPk(id);

				// Usamos el nombre de la imagen anterior
				image = product.image;
			}

			// Creamos un nuevo producto con los datos actualizados
			return await db.Product.update(new Product(data, image), { where: { id: id } });
		} catch (e) {
			Promise.reject(e)
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

	countAll: async () => {
		try {
			let count = await db.Product.count();
			console.log(count);
			return count;
		} catch (error) {
			return error.message;
		}
	},

	countNational: async () => {
		try {
			let count = await db.Product.count({
				include: ["country"],
				where: {
					"$country.name$": "Argentina",
			}});
			console.log(count);
			return count;
		} catch (error) {
			return error.message;
		}
	},

	countImported: async () => {
		try {
			let count = await db.Product.count({
				include: ["country"],
				where: {
					"$country.name$": { [Op.ne]: "Argentina" },
			}});
			console.log(count);
			return count
		} catch (error) {
			return error.message;
		}
	}
};

module.exports = productService;
