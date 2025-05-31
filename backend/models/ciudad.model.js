const { Schema, model } = require('mongoose');

const CiudadSchema = Schema({
    _id: String|Object,
    nombre: String,
    pais: String,
    imagen: String,
    descripcion: String
});



module.exports = model( 'Ciudades', CiudadSchema );
