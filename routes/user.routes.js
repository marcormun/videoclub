const router = require('express').Router();
const userController = require('../Controllers/userController');


router.get('/user', verifyToken, userController.getAll);
router.post('/user', verifyToken, userController.createUser);
//router.get('/user/:id', verifyToken, userController.getUserById);
//router.put('/user/:id', verifyToken, userController.update);
//router.delete('/user/:id', verifyToken, userController.delete);

module.exports = router;