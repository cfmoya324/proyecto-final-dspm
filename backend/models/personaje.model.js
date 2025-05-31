const { Schema, model } = require('mongoose');

const PersonajeSchema = Schema({
    _id: String|Object,
    nombre: String,
    imagen: String,
    profesion: String,
    descripcion: String,
    ciudad: String
});



module.exports = model( 'Personajes', PersonajeSchema );
