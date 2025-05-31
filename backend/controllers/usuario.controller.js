const { response } = require("express");

//const { Usuario} = require("../models/usuario");
const Usuario = require("../models/usuario.model");

const bcryptjs = require("bcryptjs");
const { generarJWT } = require("../helpers/generar-jwt");

//const { googleVerify } = require("../helpers/google-verify");



const usuarioGet = async (req, res = response) => {

    try {
        const listaUsuarios = await Usuario.find().lean();

        res.json({
            ok: true,
            data: listaUsuarios
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador',
            err: error
        })

    }
}



const login = async (req, res = response) => {
    const { mail, password } = req.body;

    try {
        const usuario = await Usuario.findOne({ mail });
        console.log(usuario);
        if (!usuario) {
            return res
                .status(400)
                .json({
                    ok: false,
                    msg: "Usuario / Password no son correctos - correo: " + mail,
                });
        }

        const validaPassword = bcryptjs.compareSync(password, usuario.password);
        // Verificar la contraseña

        if (!validaPassword) {
            return res
                .status(400)
                .json({
                    ok: false,
                    msg: "Usuario / Password no son correctos - password",
                });
        }

        // Generar el JWT
        const token = await generarJWT(usuario.nombre);

        res.json({
            ok: true,
            msg: "Login ok",
            usuario,
            token,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Hable con el Administrador...",
            error: error,
        });
    }
};


module.exports = {
    login,
    usuarioGet
};
