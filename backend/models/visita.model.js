const { Schema, model } = require('mongoose');

const VisitaSchema = Schema({
    _id: String|Object,
    sitio: String,
    fechaYHora: {
        type: Date,
		default: Date.now
    },
    usuario: String
});



module.exports = model( 'Visita', VisitaSchema );
