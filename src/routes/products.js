const controller = require('../controllers/productsController');
const { Router } = require('express');
const router = Router();
const { upload3 } = require("../middlewares/multer");
const adminMiddleware = require('../middlewares/adminMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const validateMiddleware = require('../middlewares/validateMiddleware');

// GET PRODUCTS
router.get('/all/:page?', controller.products);

router.get('/national/:page?', controller.national);

router.get('/imported/:page?', controller.imported);

// DETAIL PRODUCTS
router.get('/detail/:id', controller.detail);

// ADD PRODUCTS
router.get('/add', authMiddleware, adminMiddleware, controller.add);

router.post('/add', adminMiddleware, upload3.single('image'), validateMiddleware.product, controller.create);

//EDIT PRODUCTS
router.get('/edit/:id', authMiddleware, adminMiddleware, controller.edit);

router.put('/edit/:id', authMiddleware, adminMiddleware, upload3.single('image'), validateMiddleware.product, controller.update);

// DELETE PRODUCT
router.get('/delete/:id', authMiddleware, adminMiddleware, controller.delete)

router.delete('/delete/:id', authMiddleware, adminMiddleware, controller.destroy);

module.exports = router;