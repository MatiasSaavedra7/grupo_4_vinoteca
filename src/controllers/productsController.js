const productsController = {
    productsController: (req, res) => {
        res.render(('products/products'));
    },
    productsCartController: (req, res) => {
        res.render(('products/productCart'));
    },
    productsDetailController: (req, res) => {
        res.render(('products/productDetail'));
    },
    addProductController: (req, res) => {
        res.render('products/addProduct');
    },
    editProductController: (req, res) => {
        res.render('products/editProduct');
    }
};

module.exports = productsController;