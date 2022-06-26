const router = require('express').Router();
const userController = require('../controllers/userController');


router.get('/user', userController.getAll);
<<<<<<< HEAD
// router.post('/user', userController.createUser);
//router.get('/user/:id', verifyToken, userController.getUserById);
//router.put('/user/:id', verifyToken, userController.update);
//router.delete('/user/:id', verifyToken, userController.delete);
=======
router.post('/user', userController.createUser);
router.get('/user/:id', userController.getUserById);
//router.put('/user/:id', userController.update);
//router.delete('/user/:id', userController.delete);


>>>>>>> 41a1b9417e1db245ebd4e1005220e04c54692170

module.exports = router;