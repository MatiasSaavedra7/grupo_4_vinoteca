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

const grapeService = {
	//!COMPLETAR
	create: async (data) => {

	},

	getAll: async () => {
		try {
			return await db.Grape.findAll();
		} catch (e) {
			console.error(e);
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

module.exports = grapeService;
