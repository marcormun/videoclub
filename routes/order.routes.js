const router = require('express').Router();
const orderController = require('../controllers/orderController');
const verifyToken = require('../middlewares/verifyToken');

router.get('/orders',verifyToken, orderController.getAll);
router.post('/orders',verifyToken, orderController.createOrder);



module.exports = router;