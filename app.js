
require('dotenv').config(); //Variables de entorno
const Server = require('./models/server');


const server = new Server();

server.listen();




