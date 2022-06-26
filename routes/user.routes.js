const router = require('express').Router();
const userController = require('../Controllers/userController');


router.get('/user', userController.getAll);
router.post('/user', userController.createUser);
//router.get('/user/:id', verifyToken, userController.getUserById);
//router.put('/user/:id', verifyToken, userController.update);
//router.delete('/user/:id', verifyToken, userController.delete);

module.exports = router;