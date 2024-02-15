const fs = require("fs");
const path = require("path");
const productService = require("../model/services/productService")
const grapeService = require("../model/services/grapesService")
const countryService = require("../model/services/countryService")

// const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
// const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productsController = {

    products: async (req, res) => {
        // res.render('products/products', {products, title: 'Todos los productos'});

        try {
            // return res.send(await productService.getAllNational());
            res.render('products/products', {products: await productService.getAll(), title: 'Todos los productos'})
        } catch (error) {
            res.send(e);
        }
    },

    national: async (req, res) => {
        // let national = products.filter( product => product.category == 'national')

        res.render('products/products', {products: await productService.getAllNational(), title: 'National'});
    },

    imported: async (req, res) => {
        // let imported = products.filter( product => product.category == 'international')

        res.render('products/products', {products: await productService.getAllImported(), title: 'Imported'});
    },

    detail: async (req, res) => {
        // const id = req.params.id;

        // const product = products.find((product) => product.id == id);

        res.render('products/productDetail', {product: await productService.getBy(req.params.id)});
    },

    add: async (req, res) => {
        res.render('products/addProduct', {grapes: await grapeService.getAll(), country: await countryService.getAll()});
    },
    
    create: (req, res) => {
        const image = req.file ? req.file.filename : "default-image.png";
        
        const newProduct = {
            id: products[products.length - 1].id + 1,
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            origin: req.body.origin,
            varieties: req.body.varieties,
            tall: req.body.tall,
            description: req.body.description,
            image,
        };

        products.push(newProduct);

        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));

        res.redirect("/products");
    },
    
    //!FALTAN CORREGIR COSITAS/////////////////////////////////////
    edit: async (req, res) => {
        res.render('products/editProduct', {product: await productService.getBy(req.params.id)});
    },
    
    update: (req, res) => {
        let indice = products.findIndex(p => p.id == req.params.id);
        
        products[indice].name = req.body.name
        products[indice].category = req.body.category
        products[indice].price = req.body.price
        products[indice].origin = req.body.origin
        products[indice].varieties = req.body.varieties
        products[indice].tall = req.body.tall
        products[indice].description = req.body.description

        if(req.file)  products[indice].image = req.file.filename;

        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));

        res.redirect("/products");
    },

    delete: (req, res) => {
        let indice = products.findIndex(p => p.id == req.params.id);

        products.splice(indice, 1);

        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));

        res.redirect("/products");
    }
};

module.exports = productsController;