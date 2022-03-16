
const express = require('express');
const cors = require('cors');



class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        

        //Middlewares (se ejecutan cuando levanto el servidor)
        this.middlewares();

        //Rutas de la aplicacion
        this.routes();
    }

    middlewares(){ 
        //Cors (protege)
        this.app.use(cors());

        //Lectura del body, para que lea en formato Json
        this.app.use(express.json());

        //Directorio publico
       this.app.use( express.static('public'));
        
    }

    routes(){
       this.app.use('/user', require('../routes/userImg.js'));
       this.app.use('/upload', require('../routes/userImg.js'));
       this.app.use('/time', require('../routes/time.js'));
    }

    listen(){
        this.app.listen( this.port, ()=>{
            console.log('Servidor corriendo en puerto', this.port )
         });
    }
}




module.exports = Server;