

const cacheMiddleware = (req,res,next)=>{
    res.set('Cache-control', 'no-cache')
    next()
  }
  
  
  const checkAuth = (req,res,next)=>{
    if(req.headers.authorization){
      next()
    } else {
      res.status(401).send({message: 'No autorizado'})
    }
  
  }

  module.exports = {
      cacheMiddleware,
      checkAuth
  }