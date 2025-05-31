const { Router } = require('express');
//const { check } = require('express-validator');
const { paisGet } = require('../controllers/pais.controller');
const { validarJWT } = require("../middlewares/validar-jwt");
//const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();


router.get('/', validarJWT, paisGet);

module.exports = router;