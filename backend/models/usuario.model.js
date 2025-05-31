const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    _id: String|Object,
    nombre: String,
    mail: String,
    password: String,
    perfil: { type: String, enum: ["admin", "basico"], default: "basico" },
});



module.exports = model( 'Usuarios', UsuarioSchema );
