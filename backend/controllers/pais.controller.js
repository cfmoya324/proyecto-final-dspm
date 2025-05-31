const { response, request } = require('express')
const Pais = require("../models/pais.model");
const { body } = require('express-validator');


const paisGet = async (req, res = response) => {

    try {
        const listaPaises = await Pais.find().lean();

        res.json({
            ok: true,
            data: listaPaises
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
    paisGet
}