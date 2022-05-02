const Router = require('express');
const cors = require('cors');
const userController = require('../controllers/userController');
const productsController = require('../controllers/productsController');
const jwtAuth = require('../controllers/jwtAuth');
const validateAuthField = require('../middlewares/authField');

const router = Router();
router.use(cors());

router.post('/login', userController.login);
router.post('/register', userController.register);

router.use(validateAuthField);
router.use(jwtAuth);
router.get('/products', productsController.read);
router.get('/products/:id', productsController.readOne);

module.exports = router;