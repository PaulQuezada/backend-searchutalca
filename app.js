const express= require('express');
const  morgan= require('morgan');
const  cors=require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

//Conexion DB Local
/* const uri = 'mongodb://localhost:27017/myapp'; */
//hola
//Conexion DB nubr
const uri ='mongodb+srv://Paul:QkTLWQXErcmMgE6h@cluster0.s3bq3ap.mongodb.net/test';
const options = {useNewUrlParser: true};
// Or using promises
mongoose.connect(uri, options).then(
  () => { console.log('Conectado a DB') },
  err => { console.log(err) }
);

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes/publicaciones'));
app.use('/api', require('./routes/usuarios'));
app.use('/api', require('./routes/solicitudes'));

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
  console.log('Example app listening on port'+ app.get('puerto'));
});

