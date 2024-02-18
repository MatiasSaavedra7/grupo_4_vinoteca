const productService = require("../model/services/productService");

const controller = {
	home: async (req, res) => {
		res.render("home", { products: await productService.getAllDiscount() });
	},

	about: (req, res) => {
		res.render("nosotros");
	},

	contact: (req, res) => {
		res.render("contacto");
	},

	search: async (req, res) => {
		res.render("search", { products: await productService.searchProduct(req.query.keywords), search: req.query.keywords });
	},

	// test: async (req, res) => {
	// 	db.Product.findAll({include: [
	// 		{association: 'country'},
	// 		{association: 'grapes'},
	// 		{association: 'images'}
	// 		]})
	// 		.then((products) => {
	// 			return res.render("test", { products });
	// 		})
	// 		.catch((error) => {
	// 			return res.send(error.message);
	// 		});
	// },

};

module.exports = controller;
