const { Schema, model } = require('mongoose');

const PlatoSchema = Schema({
    _id: String|Object,
    nombre: String,
    ciudad: String,
    descripcion: String
});



module.exports = model( 'Platos', PlatoSchema );
