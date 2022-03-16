
const { response } = require('express'); //para habilitar que te salga automatico al escribir.

//Crear funciones y exportarlas

const mostrarFecha = (req,res)=>{
    const {user} = req.body
    dateNow = {
      user,
      date: new Date().toLocaleString()
    }
    res.status(200).send({dateNow})
  }


module.exports = {
    mostrarFecha,

}
