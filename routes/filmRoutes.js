const router = require('express').Router();
<<<<<<< HEAD
const filmController = require('../controllers/FilmController');
=======
const filmController = require('../controllers/FilmController')
>>>>>>> ec463c3b7fc3f4f4e4f1d5d2c79ea71c3019f010
const isAdmin = require('../middlewares/isAdmin');
const verifyToken = require('../middlewares/verifyToken');

router.get('/films',filmController.getAll);
router.post('/films',verifyToken, isAdmin, filmController.addFilm);
router.get('/films/id/:id',filmController.getFilmById);
router.get('/films/title',filmController.getFilmByTitle);

module.exports = router;
