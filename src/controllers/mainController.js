const fs = require("fs");
const path = require("path");
const db = require('../model/models');

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

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

	test: async (req, res) => {
		db.User.findAll()
			.then((users) => {
				res.render("test", { users });
			})
			.catch((error) => {
				res.send(error.message);
			});
	},
};

module.exports = controller;
