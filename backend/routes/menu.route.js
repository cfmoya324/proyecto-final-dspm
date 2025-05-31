const { Router } = require('express');
//const { check } = require('express-validator');
const { menuGet } = require('../controllers/menu.controller');
const { validarJWT } = require("../middlewares/validar-jwt");
//const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();


router.get('/', validarJWT, menuGet);

module.exports = router;