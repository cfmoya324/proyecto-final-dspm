const { Schema, model } = require('mongoose');

const PaisSchema = Schema({
    _id: String|Object,
    nombre: String,
    imagen: String,
    descripcion: String
});



module.exports = model( 'Paises', PaisSchema );
