const jwt = require('jsonwebtoken');
const { request, response } = require("express");
const Usuario = require('../models/usuario.model')


const validarJWT = async (req = request, res = response, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>;

    if (!token) {
        return res.status(401).json({
            msg: ' No hay token en la peticion...'
        })
    }

    try {
        //Valida el token
        const usuarioT = jwt.verify(token, process.env.PRIVATE_KEY_JWT);

        //console.log(uid);
        const usuarioBD = await Usuario.find({nombre: usuarioT.uid})

        if(!usuarioBD){
            return res.status(401).json({
                msg: 'Token no valido - usuario no existe en BD'
            })

        }

        req.usuario = usuarioBD;

        next();

    } catch (error) {
        console.log(error);
        return res.status(401).json({
            msg: ' El token no es valido...'
        })

    }


    //console.log(token);

    //next();
}


module.exports = {
    validarJWT
}
