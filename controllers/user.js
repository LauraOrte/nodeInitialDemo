
const { response } = require('express'); //para habilitar que te salga automatico al escribir.

//Crear funciones y exportarlas

const usuarioGet = (req, res = response) => {
    res.status(200).json({
        nomUsuario: 'Laura',
        edad: 31,
        url: 'http://localhost:5000/user'
    })
}

const subirImg = (req,res = response)=>{
    if(req.errorValidation){
      res.status(400).send({message: req.errorValidation})
    }
    res.status(200).send({success: true})
}




module.exports = {
    usuarioGet,
    subirImg,

}


