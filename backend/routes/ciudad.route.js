const { Router } = require('express');
//const { check } = require('express-validator');
const { ciudadGet } = require('../controllers/ciudad.controller');
const { validarJWT } = require("../middlewares/validar-jwt");
//const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();


router.get('/', validarJWT, ciudadGet);

module.exports = router;