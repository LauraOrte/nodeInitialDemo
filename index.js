const express = require("express"); 
const cors = require('cors');
const app = express();
const path = require('path');

const {userGet} = require('./controllers/user.js')
const {time} = require('./controllers/time.js')
const {authe} = require('./middlewares/auth.js')
const {cache} = require('./middlewares/cache.js')
const  uploadimgs  =  require('./upload/upload.js')

//middlewares
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));



app.get('/user', userGet);

app.post('/upload', uploadimgs.single('nodeImg') , function(req, res){ //aquí pongo el middleware de la imagen, para que no afecte a todas las rutas, sola ha ésta
  if(req.errorValidation){
    res.status(400).send({message: req.errorValidation})
  }
  res.status(200).send({success: true})
  
});


app.post('/time', cors(), authe, cache, time);


app.listen(9000, () => { 
console.log("El servidor está inicializado en el puerto 9000"); 
});