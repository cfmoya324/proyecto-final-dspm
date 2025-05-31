const { Router } = require('express');
const { validarJWT } = require("../middlewares/validar-jwt");

const {
        sitioGet,
        sitioPost,
        sitioPut,
        sitioDelete
        } = require('../controllers/sitio.controller');

const router = Router();

router.get('/', validarJWT, sitioGet);

//Para insertar un Heroe en la BD
router.post('/', validarJWT, sitioPost);

//Para modificar un Heroe en la BD
router.put('/', validarJWT, sitioPut);

//Para eliminar un Heroe de la BD
router.delete('/', validarJWT, sitioDelete);



module.exports = router;
