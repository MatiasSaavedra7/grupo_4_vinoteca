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
			// res.render("test", {pages: await productService.countAll(12),
			// 	products: await productService.paginate(req.params.page),
			// });
			let products = await productService.findAndCount(req.params.page);
			let currentPage = req.params.page;
			let count = products.count;
			let totalPages = Math.ceil(count / 12);
			res.render("test", {products: products.rows, count, currentPage, totalPages})
		} catch (error) {
			res.send(error.message);
		}
	},
};

module.exports = controller;
