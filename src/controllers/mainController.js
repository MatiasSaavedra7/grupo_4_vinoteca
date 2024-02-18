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
		res.render("search", {
			products: await productService.searchProduct(req.query.keywords),
			search: req.query.keywords,
		});
	},

	test: async (req, res) => {
		try {
			res.render("test", {pages: await productService.getCount(12),
				products: await productService.paginate(req.params.page),
			});
		} catch (error) {
			res.send(error.message);
		}
	},
};

module.exports = controller;
