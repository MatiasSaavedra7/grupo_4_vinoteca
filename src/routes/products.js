const controller = require('../controllers/productsController');
const { Router } = require('express');
const router = Router();
const {upload} = require("../middlewares/multer");
const adminMiddleware = require('../middlewares/adminMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// GET PRODUCTS
router.get('/', controller.products);

router.get('/national', controller.national);

router.get('/imported', controller.imported);

// DETAIL PRODUCTS
router.get('/detail/:id', controller.detail);

// ADD PRODUCTS
router.get('/add', authMiddleware, adminMiddleware, controller.add);
//! AGREGAR MIDDLEWARE PARA PERMISOS DE ADMIN!!!!!!!!!
router.post('/add', adminMiddleware, upload.single('image'), controller.create);

//EDIT PRODUCTS
router.get('/edit/:id', authMiddleware, adminMiddleware, controller.edit);

router.put('/edit/:id', authMiddleware, adminMiddleware, upload.single('image'), controller.update);

// DELETE PRODUCT
router.get('/delete/:id', authMiddleware, adminMiddleware, controller.delete)

router.delete('/delete/:id', authMiddleware, adminMiddleware, controller.destroy);

module.exports = router;