const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const notaSchema = new Schema({
  nombre:String,
  correo:{type: String, required: [true, 'CORREO USUARIO obligatorio']},
  contrasena: {type: String, required: [true, 'NOMBRE USUARIO obligatorio']},
  img:String,
  estado:Boolean,
  razon:String,
});

// Convertir a modelo
const Nota = mongoose.model('solicitudes', notaSchema);
// Exportación de Nota
module.exports = Nota;