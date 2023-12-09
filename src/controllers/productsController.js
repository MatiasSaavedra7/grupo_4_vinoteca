const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productsController = {
    productsController: (req, res) => {
        res.render('products/products', {title: 'Productos', css: 'products.css', products});
    },
    productsNationalController: (req, res) => {
        let national = products.filter( product => product.category == 'national')

        res.render('products/national', {title: 'Nacionales', css: 'products.css', national});
    },
    productsImportedController: (req, res) => {
        let imported = products.filter( product => product.category == 'international')

        res.render('products/imported', {title: 'Importados', css: 'products.css', imported});
    },
    productsCartController: (req, res) => {
        res.render('products/productCart', {title: 'Carrito', css: 'productcart.css'});
    },
    productsDetailController: (req, res) => {
        const id = req.params.idProduct;

        const product = products.find((product) => product.id == id);

        res.render('products/productDetail', {title: 'Detalle de Producto', css: 'productDetail.css', product});
    },
    addProductController: (req, res) => {
        res.render('products/addProduct', {title: 'Agregar Productos', css: 'addProduct.css'});
    },
    editProductController: (req, res) => {
        res.render('products/editProduct', {title: 'Editar Productos', css: 'editProduct.css'});
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

        fs.writeFileSync(productsFilePath, JSON.stringify(products));

        res.redirect("/products");
    }
};

module.exports = productsController;