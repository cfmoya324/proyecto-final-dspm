const { Schema, model } = require('mongoose');

const TagsSchema = Schema({
    _id: String|Object,
    sitio: String,
    personaje: String,
    usuario: String,
    geolocalizacionFoto: String,
});



module.exports = model( 'Tags', TagsSchema );
