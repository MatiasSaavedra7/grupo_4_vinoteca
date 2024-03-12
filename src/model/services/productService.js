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

	getAll: async (limit, page) => {
		try {
			// El metodo findAndCountAll() devuelve un objeto con dos propiedades, count y rows.
			// Siendo count la cantidad total de registros y rows un array con todos los registros
			return await db.Product.findAndCountAll({
				include: [
					{ association: "countries" },
					{ association: "grapes" },
				],
				limit: limit,
				offset: page * limit || 0
			});
		} catch (e) {
			console.error(e);
			return [];
		}
	},

	getAllNational: async (limit, page) => {
		try {
			return await db.Product.findAndCountAll({
				include: [
					{ association: "countries" },
					{ association: "grapes" },
				],
				where: {
					"$countries.name$": "Argentina",
				},
				limit: limit,
				offset: page * limit || 0
			});
		} catch (e) {
			console.error(e);
			return [];
		}
	},

	getAllImported: async (limit, page) => {
		try {
			return await db.Product.findAndCountAll({
				include: [
					{ association: "countries" },
					{ association: "grapes" },
				],
				where: {
					"$countries.name$": { [Op.ne]: "Argentina" },
				},
				limit: limit,
				offset: page * limit || 0
			});
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
				order: [["discount", "DESC"]],
				limit: 12
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
				include: ["countries", "grapes"],
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
	}
};

module.exports = productService;
