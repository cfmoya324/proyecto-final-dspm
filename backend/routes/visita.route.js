const { Router } = require('express');
//const { check } = require('express-validator');
const { visitaGet } = require('../controllers/visita.controller');
const { validarJWT } = require("../middlewares/validar-jwt");
//const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();


router.get('/', validarJWT, visitaGet);

module.exports = router;