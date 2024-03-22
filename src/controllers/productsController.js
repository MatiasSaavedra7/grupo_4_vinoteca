const productService = require("../model/services/productService");
const grapeService = require("../model/services/grapesService");
const countryService = require("../model/services/countryService");

const productsController = {
  products: async (req, res) => {
    try {
      const results = await productService.getAll(12, req.params.page);
      console.log("ERORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
      console.log(results);
      const count = results.count;
      const totalPages = Math.ceil(count/12);

      res.render("products/products", {
        title: "Todos los productos",
        products: results.rows,
        totalPages,
        path: "all"
      })
    } catch (error) {
      res.send(error);
    }
  },

  national: async (req, res) => {
    try {
      const results = await productService.getAllNational(12, req.params.page);
      const count = results.count;
      const totalPages = Math.ceil(count/12);

      res.render("products/products", {
        title: "Vinos nacionales",
        products: results.rows,
        totalPages,
        path: "national"
      })
    } catch (error) {
      res.send(error)
    }
  },

  imported: async (req, res) => {
    try {
      const results = await productService.getAllImported(12, req.params.page);
      const count = results.count;
      const totalPages = Math.ceil(count /12);

      res.render("products/products", {
        title: "Vinos importados",
        products: results.rows,
        totalPages,
        path: "imported"
      })
    } catch (error) {
      res.send(error)
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

      res.redirect("/products/all");
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

      res.redirect("/products/all");
    } catch (error) {
      res.send(error);
    }
  },
};

module.exports = productsController;