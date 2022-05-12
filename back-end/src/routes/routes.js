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

router.use(validateAuthField);
router.use(jwtAuth);
// pega todos os produtos:
router.get('/products', productsController.read);

// pega um produto pelo id:
router.get('/products/:id', productsController.readOne);

// pega um pedido pela id de usuário (passado no body):
router.get('/orders', salesController.readSaleByUserId);

// pega um pedido pela id de vendedor:
router.get('/orders/seller', salesController.readSaleBySellerId);

// pega os detalhes de uma venda: 
router.get('/orders/:id', salesProductsController.saleProductsById);

// edita uma venda baseada no id, altera o status:
router.put('/orders/:id', salesController.updateSaleStatus);

// cria uma venda:
router.post('/sales', salesController.create);

// rotas relacionadas ao admin:

// - cria um novo usuário:
router.post('/admin', userController.register);

// - edita um usuário (mudando a role dele):
router.put('/admin/:id', userController.adminUpdateUser);

// - deleta um usuário:
router.delete('/admin/:id', userController.adminDeleteUser);

module.exports = router;