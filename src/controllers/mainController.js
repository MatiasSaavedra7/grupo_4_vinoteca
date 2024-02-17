const productService = require("../model/services/productService");

const controller = {
	home: (req, res) => {
		res.render("home");
	},

	about: (req, res) => {
		res.render("nosotros");
	},

	contact: (req, res) => {
		res.render("contacto");
	},

	search: async (req, res) => {
		res.render("search", {
			products: await productService.searchProduct(req.query.keywords),
			search: req.query.keywords,
		});
	},

	test: async (req, res) => {
		try {
			res.render("test", {
				products: await productService.paginate(req.params.page),
			});
		} catch (error) {
			res.send(error.message);
		}
	},
};

module.exports = controller;
