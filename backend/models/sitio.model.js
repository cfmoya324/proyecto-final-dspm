const { Schema, model } = require('mongoose');

const SitioSchema = Schema({
    _id: String|Object,
    nombre: String,
    ciudad: String,
    descripcion: String
});



module.exports = model( 'Sitios', SitioSchema );
