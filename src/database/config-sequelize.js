//* Sequelize - Conectar y mostrar una base de datos MySQL: https://www.youtube.com/watch?v=im7THL67z0c

import Sequelize from 'sequelize';
import 'dotenv/config';

// Definimos los parametros de conexión a la base de datos.
const sequelize = new Sequelize('diceGame','root',process.env.MYSQLKEY,{
    host: 'localhost', // Host de la base de datos.
    dialect: 'mysql', // Motor de la base de datos que estamos utilizando.
});

//CREATE TABLE IF NOT EXISTS
sequelize.sync({ force: false })
    .then(() => {
        console.log("Tablas sincronizadas")
    });

//DROP ALL TABLES
// sequelize.drop()
// .then(() => {
//   console.log("Tablas eliminadas")
// });

export default sequelize;