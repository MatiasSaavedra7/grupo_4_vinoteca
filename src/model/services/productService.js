const db = require("../database/models");

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
			const data = await db.Product.findAll({ include: ["country"] });
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
			const data = await db.Product.findAll({ include: ["country"] });
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
			return await db.Product.findByPk(id, { include: ["country", "grapes"] });
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
