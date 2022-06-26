const router = require('express').Router();
const orderController = require('../controllers/orderController');

router.get('/orders',orderController.getAll);
router.post('/orders', orderController.createOrder);



module.exports = router;