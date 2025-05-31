const { Router } = require('express');
//const { check } = require('express-validator');
const { platoGet } = require('../controllers/plato.controller');
const { validarJWT } = require("../middlewares/validar-jwt");
//const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();


router.get('/', validarJWT, platoGet);

module.exports = router;