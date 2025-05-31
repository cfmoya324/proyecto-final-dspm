const { Router } = require('express');
//const { check } = require('express-validator');
const { tagsGet } = require('../controllers/tags.controller');
const { validarJWT } = require("../middlewares/validar-jwt");
//const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();


router.get('/', validarJWT, tagsGet);

module.exports = router;