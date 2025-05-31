const { Schema, model } = require('mongoose');

const MenuSchema = Schema({
    _id: String|Object,
    sitio: String,
    descripcion: String,
    platos: [
        {
            nombre: String,
            precio: Number
        }
    ]
});



module.exports = model( 'Menu_sitio', MenuSchema );
