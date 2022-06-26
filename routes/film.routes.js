const router = require('express').Router();
const filmController = require('../controllers/filmController');

router.get('/films',filmController.getAll);
router.post('/films', filmController.addFilm);
router.get('/films/id/:id',filmController.getFilmById);
router.get('/films/title',filmController.getFilmByTitle);

module.exports = router;