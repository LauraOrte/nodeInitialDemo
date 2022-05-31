const
  express = require('express'),
  juego = express.Router(),
  controllersURL = process.env.NODE_ENV === 'mongo' 
  ? '../controllers/controllersDiceMongo' 
  : '../controllers/controllersDiceMysql',
  { 
    addNewPlayer,
    getAllPlayers,
    modifyPlayerName,
    playerRollDices,
    deleteGames,
    playerGamesList,
    generalRanking,
    getBetterPlayer,
    getWorstPlayer
  } = require(controllersURL),
  {
    checkAdmin,
    checkJWT
  } = require('../services/jwtManagment/jwt')

//rutas jugadores
juego.post('/login',checkAdmin)
juego.use( checkJWT)
juego.post('/players', addNewPlayer) 
juego.put('/players/:id', modifyPlayerName) 
//rutas juego
juego.post('/players/:id/games', playerRollDices) 
juego.delete('/players/:id/games', deleteGames) 
juego.get('/players', getAllPlayers)
juego.get('/players/:id/games', playerGamesList)
//rutas ranking
juego.get('/players/ranking', generalRanking) 
juego.get('/players/ranking/loser', getWorstPlayer )
juego.get('/players/ranking/winner', getBetterPlayer)


module.exports = juego
