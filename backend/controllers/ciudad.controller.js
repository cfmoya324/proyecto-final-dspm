const { response, request } = require('express')
const Ciudad = require("../models/ciudad.model");
const { body } = require('express-validator');


const ciudadGet = async (req, res = response) => {

    try {
        const listaCiudades = await Ciudad.find().lean();

        res.json({
            ok: true,
            data: listaCiudades
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
    ciudadGet
}