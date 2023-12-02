const controller = require('../controllers/productsController');
const { Router } = require('express');
const router = Router();

const routes = {
    productsRoute: '/',
    productsCartRoute: '/productsCart',
    productsDetailRoute: '/productsDetail/:idProduct',
    addProductRoute: '/addProduct',
    editProductRoute: '/editProduct'
};

router.get(routes.productsRoute, controller.productsController);

router.get(routes.productsCartRoute, controller.productsCartController);

router.get(routes.productsDetailRoute, controller.productsDetailController);

router.get(routes.addProductRoute, controller.addProductController);

router.get(routes.editProductRoute, controller.editProductController);

module.exports = router;