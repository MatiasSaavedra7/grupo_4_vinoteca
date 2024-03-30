const productService = require("../model/services/productService");
const grapeService = require("../model/services/grapesService");
const countryService = require("../model/services/countryService");
const cloudinary = require("../model/services/apiServices/cloudinaryService");
const { validationResult } = require("express-validator");

const productsController = {
  products: async (req, res) => {
    try {
      const results = await productService.getAll(12, req.params.page);
      const count = results.count;
      const totalPages = Math.ceil(count / 12);

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
      const totalPages = Math.ceil(count / 12);

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
      const totalPages = Math.ceil(count / 12);

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
      //Definimos una variable para almacenar los errores.
      const errors = validationResult(req);

      //Verificamos si hay errores
      if (!errors.isEmpty()) {
        return res.render("products/addProduct", {
          errors: errors.mapped(),
          old: req.body,
          grapes: await grapeService.getAll(),
          country: await countryService.getAll(),
        });
      }
      // const image = req.file ? req.file.filename : "vaquita.png";

      let img = "https://res.cloudinary.com/dq2jw6jnn/image/upload/v1711224395/products/gfjdrs8sjftgkioylodt.png"

      //Verificamos si se cargó una imagen
      if (req.file && req.file.buffer) {
        //En caso afirmativo subimos la imagen a Clodinary
        const { secure_url } = await cloudinary.uploadImgBuffer(req.file.buffer, "products")
        img = secure_url;
      }

      await productService.create(req.body, img);

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
      //Definimos una variable para almacenar los errores.
      const errors = validationResult(req);

      //Verificamos si hay errores
      if (!errors.isEmpty()) {
        return res.render("products/editProduct", {
          errors: errors.mapped(),
          product: await productService.getBy(req.params.id),
          grapes: await grapeService.getAll(),
          country: await countryService.getAll(),
          old: req.body
        });
      }
      //Verificamos si se subio una imagen.
      // let filename = req.file ? req.file.filename : "";

      let img = "";

      //Verificamos si se cargó una imagen
      if (req.file && req.file.buffer) {
        //En caso afirmativo subimos la imagen a Clodinary
        const { secure_url } = await cloudinary.uploadImgBuffer(req.file.buffer, "products")
        img = secure_url;
      }

      //Llamamos al service de actualizacion.
      await productService.updateBy(req.params.id, req.body, img);

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