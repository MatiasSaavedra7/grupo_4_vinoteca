const controller = require('../controllers/productsController');
const { Router } = require('express');
const router = Router();
const multer = require('multer');
const path = require('path');

// MULTER - Manejo del almacenamiento
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "../../public/images/products"));
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    },
});

const upload = multer({ storage: storage });


const routes = {
    productsRoute: '/',
    productsNationalRoute: '/national',
    productsImportedRoute: '/imported',
    productsCartRoute: '/cart',
    productsDetailRoute: '/detail/:idProduct',
    addProductRoute: '/addProduct',
    editProductRoute: '/editProduct'
};

router.get(routes.productsRoute, controller.productsController);

router.get(routes.productsNationalRoute, controller.productsNationalController);

router.get(routes.productsImportedRoute, controller.productsImportedController);

router.get(routes.productsCartRoute, controller.productsCartController);

router.get(routes.productsDetailRoute, controller.productsDetailController);

router.get(routes.addProductRoute, controller.addProductController);

router.post(routes.addProductRoute, upload.single('image'), controller.create);

router.get(routes.editProductRoute, controller.editProductController);

module.exports = router;