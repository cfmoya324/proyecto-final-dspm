const { response, request } = require('express')
const Visita = require("../models/visita.model");
const { body } = require('express-validator');


const visitaGet = async (req, res = response) => {

    try {
        const listaVisitas = await Visita.find().lean();

        res.json({
            ok: true,
            data: listaVisitas
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
    visitaGet
}