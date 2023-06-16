const router = require("express").Router();

const perguntaController = require('../controllers/perguntasController');
const matematicaController = require('../controllers/matematicaController');
const portguesController = require('../controllers/portguesController');
const historiaController = require('../controllers/historiaController');
const edufisicaController = require('../controllers/edufisicaController');
const artesController = require('../controllers/artesController'); 
const informaticaController = require('../controllers/informaticaController');

router.route('/perguntas').post((req, res) => perguntaController.perguntas(req, res));
router.route('/matematica').post((req, res) => matematicaController.perguntas(req, res));
router.route('/portugues').post((req, res) => portguesController.perguntas(req,res));
router.route('/historia').post((req, res) => historiaController.perguntas(req, res));
router.route('/edufisica').post((req, res) => edufisicaController.perguntas (req, res));
router.route('/edufisica/:id').delete((req, res) => edufisicaController.delete(req, res));
router.route('/artes').post((req, res) => artesController.perguntas(req, res));
router.route('/informatica').post((req, res) => informaticaController.perguntas(req, res));
router.route('/historia').get((req, res) => historiaController.get(req, res));




module.exports = router