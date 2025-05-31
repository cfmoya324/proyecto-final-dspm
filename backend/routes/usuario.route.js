const { Router } = require('express');
const { check } = require('express-validator');
const { login, usuarioGet } = require('../controllers/usuario.controller');
const { validarJWT } = require("../middlewares/validar-jwt");
//const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', validarJWT, usuarioGet);

router.post('/auth', [
    check('mail','El correo es obligatorio').isEmail(),
    check('password','La contraseña es obligatoria').not().isEmpty(),
    //validarCampos
], login);

module.exports = router;