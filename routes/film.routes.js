const router = require('express').Router();
const filmController = require('../controllers/filmController');

router.get('/films',filmController.getAll);

module.exports = router;