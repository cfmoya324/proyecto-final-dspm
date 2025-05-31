const { response, request } = require('express')
const Plato = require("../models/plato.model");
const { body } = require('express-validator');


const platoGet = async (req, res = response) => {

    try {
        const listaPlatos = await Plato.find().lean();

        res.json({
            ok: true,
            data: listaPlatos
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
    platoGet
}