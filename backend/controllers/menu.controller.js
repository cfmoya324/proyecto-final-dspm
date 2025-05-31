const { response, request } = require('express')
const Menu = require("../models/menu.model");
const { body } = require('express-validator');


const menuGet = async (req, res = response) => {

    try {
        const listaMenus = await Menu.find().lean();

        res.json({
            ok: true,
            data: listaMenus
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
    menuGet
}