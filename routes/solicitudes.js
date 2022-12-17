import express from 'express';
const router = express.Router();

// importar el modelo nota
import solicitudes from '../models/solicitudes';

// Agregar un nuevo
router.post('/nuevo_solicitud', async(req, res) => {
  const body = req.body;  
  try {
    const notaDB = await solicitudes.create(body);
    res.status(200).json(notaDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Get con parámetros
router.get('/solicitud/:id', async(req, res) => {
  const _id = req.params.id;
  try {
    const notaDB = await solicitudes.findOne({_id});
    res.json(notaDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Get con todos los documentos
router.get('/todos_solicitudes', async(req, res) => {
  try {
    const notaDb = await solicitudes.find();
    res.json(notaDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Delete eliminar una nota
router.delete('/solicitud_el/:id', async(req, res) => {
  const _id = req.params.id;
  try {
    const notaDb = await solicitudes.findByIdAndDelete({_id});
    if(!notaDb){
      return res.status(400).json({
        mensaje: 'No se encontró el id indicado',
        error
      })
    }
    res.json(notaDb);  
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Put actualizar una nota
router.put('/solicitud_ac/:id', async(req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const notaDb = await solicitudes.findByIdAndUpdate(
      _id,
      body,
      {new: true});
    res.json(notaDb);  
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Exportación de router
module.exports = router;