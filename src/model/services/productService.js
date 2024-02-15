const db = require("../database/models");

function Product(data) {
	this.grapes_id = data.grapes_id;
	this.country_id = data.country_id;
	this.name = data.name;
	this.price = data.price;
	this.discount = data.discount;
	this.descripcion = data.descripcion;
	// this.stock = data.stock;
}

const productService = {
	//!COMPLETAR
	create: async (data) => {

	},

	getAll: async () => {
		try {
			const data = await db.Product.findAll({
				include: [
					{ association: "country" },
					{ association: "grapes" },
					{ association: "images" },
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
			const data = await db.Product.findAll({ include: ["country", "images"] });
			return data.filter(
				(w) =>
					w &&
					w.country &&
					typeof w.country.name === "string" &&
					w.country.name.toLowerCase() == "argentina"
			);
		} catch (e) {
			console.error("Error al obtener los productos:", e);
			return [];
		}
	},

	getAllImported: async () => {
		try {
			const data = await db.Product.findAll({ include: ["country", "images"] });
			return data.filter(
				(w) =>
					w &&
					w.country &&
					typeof w.country.name === "string" &&
					w.country.name.toLowerCase() !== "argentina"
			);
		} catch (e) {
			console.error("Error al obtener los productos:", e);
			return [];
		}
	},

	getBy: async (id) => {
		try {
			return await db.Product.findByPk(id, {include: ["country", "images", "grapes"]});
		} catch (e) {
			console.e(e);
			return [];
		}
	},

	// updateBy: async (id, data) => {
	//     try {
	//         return await db.Product.update(new Product(body), { where: { id: id } });
	//     } catch (e) {
	//         console.e(e);
	//     }
	// },

	// deleteBy: async (id) => {
	//     //Opcion 1:
	//     //Falta buscar las relaciones de este producto en las tablas intermedias y borrarlas antes de hacer
	//     //el destroy

	//     //Opcion 2: borrarla logicamente
	//     try {
	//         return await db.Product.destroy({ where: { id: id } });
	//     } catch (e) {
	//         console.e(e);
	//     }
	// },
};

module.exports = productService;
