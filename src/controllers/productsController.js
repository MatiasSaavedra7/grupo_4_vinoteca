const productsController = {
    productsController: (req, res) => {
        res.render('products/products', {title: 'Productos'});
    },
    productsCartController: (req, res) => {
        res.render('products/productCart', {title: 'Carrito'});
    },
    productsDetailController: (req, res) => {
        res.render('products/productDetail', {title: 'Detalle de Producto'});
    },
    addProductController: (req, res) => {
        res.render('products/addProduct', {title: 'Agregar Productos'});
    },
    editProductController: (req, res) => {
        res.render('products/editProduct', {title: 'Editar Productos'});
    }
};

module.exports = productsController;