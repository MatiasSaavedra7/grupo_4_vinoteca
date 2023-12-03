const productsController = {
    productsController: (req, res) => {
        res.render('products/products', {title: 'Productos', css: 'products.css'});
    },
    productsCartController: (req, res) => {
        res.render('products/productCart', {title: 'Carrito', css: 'productcart.css'});
    },
    productsDetailController: (req, res) => {
        res.render('products/productDetail', {title: 'Detalle de Producto', css: 'productDetail.css'});
    },
    addProductController: (req, res) => {
        res.render('products/addProduct', {title: 'Agregar Productos', css: 'addProduct.css'});
    },
    editProductController: (req, res) => {
        res.render('products/editProduct', {title: 'Editar Productos', css: 'editProduct.css'});
    }
};

module.exports = productsController;