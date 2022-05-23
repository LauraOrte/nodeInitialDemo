const express = require('express'),
app = express(),
juego = require('./routes/router')
require('./config/connectionDB')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(juego)
app.listen(3000, ()=>{
  console.log('server running on port 3000')
})