const { response, request } = require('express')
const Personaje = require("../models/personaje.model");
const { body } = require('express-validator');


const personajeGet = async (req, res = response) => {

    try {
        const listaPersonajes = await Personaje.find().lean();

        res.json({
            ok: true,
            data: listaPersonajes
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



module.exports = {
    personajeGet
}