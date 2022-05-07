const Router = require('express');
const userController = require('../controllers/userController');
const productsController = require('../controllers/productsController');
const salesController = require('../controllers/salesController');
const salesProductsController = require('../controllers/salesProductsController');
const jwtAuth = require('../controllers/jwtAuth');
const validateAuthField = require('../middlewares/authField');

const router = Router();

router.post('/login', userController.login);
router.post('/register', userController.register);

// router.use(validateAuthField);
// router.use(jwtAuth);
router.get('/products', validateAuthField, jwtAuth, productsController.read);
router.get('/products/:id', validateAuthField, jwtAuth, productsController.readOne);
router.get('/sales/:id', validateAuthField, jwtAuth, salesController.readSaleByUserId);
router.get('/sales', validateAuthField, jwtAuth, salesProductsController.read);
router.post('/sales', validateAuthField, jwtAuth, salesController.create);
module.exports = router;