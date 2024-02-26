const productService = require("../model/services/productService");
const grapeService = require("../model/services/grapesService");
const countryService = require("../model/services/countryService");

const productsController = {
  products: async (req, res) => {
    try {
      res.render("products/products", {
        title: "VENNER - Todos los productos",
        products: await productService.getAll(),
        totalPages: Math.ceil(await productService.countAll() / 12),
      });
    } catch (error) {
      res.send(error.message);
    }
  },

  national: async (req, res) => {
    try {
      res.render("products/products", {
        title: "VENNER - Productos nacionales",
        products: await productService.getAllNational(),
        totalPages: Math.ceil(await productService.countNational() / 12),
      });
    } catch (error) {
      res.send(error.message)
    }
  },

  imported: async (req, res) => {
    try {
      res.render("products/products", {
        title: "VENNER - Productos importados",
        products: await productService.getAllImported(),
        totalPages: Math.ceil(await productService.countImported() / 12),
      });
    } catch (error) {
      res.send(error.message)
    }
  },

  detail: async (req, res) => {
    try {
      res.render("products/productDetail", {
        product: await productService.getBy(req.params.id),
      });
    } catch (error) {
      res.send(error);
    }
  },

  add: async (req, res) => {
    try {
      res.render("products/addProduct", {
        grapes: await grapeService.getAll(),
        country: await countryService.getAll(),
      });
    } catch (error) {
      res.send(error);
    }
  },

  create: async (req, res) => {
    try {
      const image = req.file ? req.file.filename : "vaquita.png";

      await productService.create(req.body, image);

      res.redirect("/products");
    } catch (error) {
      res.send(error);
    }
  },

  edit: async (req, res) => {
    try {
      res.render("products/editProduct", {
        product: await productService.getBy(req.params.id),
        grapes: await grapeService.getAll(),
        country: await countryService.getAll(),
      });
    } catch (error) {
      res.send(error);
    }
  },

  update: async (req, res) => {
    try {
      //Verificamos si se subio una imagen.
      let filename = req.file ? req.file.filename : "";

      //Llamamos al service de actualizacion.
      await productService.updateBy(req.params.id, req.body, filename);

      //Redireccionamos una vez actualizado.
      res.redirect(`/products/detail/${req.params.id}`);

    } catch (error) {
      console.error(error);
      res.redirect("/")
    }
  },

  delete: async (req, res) => {
    try {
      res.render("products/deleteProduct", {
        product: await productService.getBy(req.params.id),
      });
    } catch (error) {
      res.send(error);
    }
  },

  destroy: async (req, res) => {
    try {
      await productService.deleteBy(req.params.id);

      res.redirect("/products");
    } catch (error) {
      res.send(error);
    }
  },
};

module.exports = productsController;