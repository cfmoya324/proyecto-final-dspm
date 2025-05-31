const { Router } = require('express');
//const { check } = require('express-validator');
const { personajeGet } = require('../controllers/personaje.controller');
const { validarJWT } = require("../middlewares/validar-jwt");
//const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();


router.get('/', validarJWT, personajeGet);

module.exports = router;