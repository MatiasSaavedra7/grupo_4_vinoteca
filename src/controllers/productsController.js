const productService = require("../model/services/productService");
const grapeService = require("../model/services/grapesService");
const countryService = require("../model/services/countryService");

const productsController = {
  products: async (req, res) => {
    try {
      res.render("products/products", {
        products: await productService.getAll(),
        title: "Todos los productos",
      });
    } catch (error) {
      res.send(e);
    }
  },

  national: async (req, res) => {
    res.render("products/products", {
      products: await productService.getAllNational(),
      title: "National",
    });
  },

  imported: async (req, res) => {
    res.render("products/products", {
      products: await productService.getAllImported(),
      title: "Imported",
    });
  },

  detail: async (req, res) => {
    res.render("products/productDetail", {
      product: await productService.getBy(req.params.id),
    });
  },

  add: async (req, res) => {
    res.render("products/addProduct", {
      grapes: await grapeService.getAll(),
      country: await countryService.getAll(),
    });
  },

  create: async (req, res) => {
    const image = req.file ? req.file.filename : "vaquita.png";

    await productService.create(req.body, image);

    res.redirect("/products");
  },

  edit: async (req, res) => {
    res.render("products/editProduct", {
      product: await productService.getBy(req.params.id),
      grapes: await grapeService.getAll(),
      country: await countryService.getAll(),
    });
  },

  update: async (req, res) => {
    try {
      await productService.updateBy(req.params.id, req.body);
      res.redirect(`/products/detail/${req.params.id}`);
    } catch (error) {
      console.log(error);
    }
  },

  delete: async (req, res) => {
    res.render("products/deleteProduct", {
      product: await productService.getBy(req.params.id),
    });
  },

  destroy: async (req, res) => {
    await productService.deleteBy(req.params.id);

    res.redirect("/products");
  },
};

module.exports = productsController;
