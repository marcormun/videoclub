const router = require('express').Router();
const filmController = require('../controllers/filmController');

router.get('/films',filmController.getAll);
router.post('/films', filmController.addFilm);

module.exports = router;