const { response, request } = require('express')
const Tags = require("../models/tags.model");
const { body } = require('express-validator');


const tagsGet = async (req, res = response) => {

    try {
        const listaTags = await Tags.find().lean();

        res.json({
            ok: true,
            data: listaTags
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
    tagsGet
}