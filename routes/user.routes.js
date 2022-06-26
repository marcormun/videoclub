const router = require('express').Router();
const userController = require('../controllers/userController');


router.get('/users', userController.getAll);
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);


module.exports = router;