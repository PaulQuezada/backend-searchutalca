import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const notaSchema = new Schema({
  nombre_user:String,
  correo:{type: String, required: [true, 'CORREO USUARIO obligatorio']},
  contrasena: {type: String, required: [true, 'NOMBRE USUARIO obligatorio']},
  roladmin:Boolean,
  img:String,
  seguidores:Number,
  fecha_creacion:Date,
  nivel:Number,
  puntos:Number,
});

// Convertir a modelo
const Nota = mongoose.model('usuarios', notaSchema);
export default Nota;