const mongoose = require( 'mongoose');
const Schema = mongoose.Schema;

const notaSchema = new Schema({
  refcreador:{type: Schema.Types.ObjectId, ref: 'usuarios'},
  titulo:String,
  descripcion:String,
  link:String,
  fecha:{type: Date, default: Date.now},
  likes:Number,
});

// Convertir a modelo
const Nota = mongoose.model('publicaciones', notaSchema);
// Exportación de Nota
module.exports = Nota;