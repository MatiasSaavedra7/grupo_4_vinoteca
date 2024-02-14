const fs = require("fs");
const path = require("path");
// const db = require('../model/database/models');

// const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
// const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

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

	search: (req, res) => {
		let words = req.query.keywords;

		let search = products.filter((p) =>
			p.name.toLowerCase().includes(words.toLowerCase())
		);

		res.render("search", { products: search });
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
