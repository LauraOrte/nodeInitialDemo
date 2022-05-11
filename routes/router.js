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
  } = require('../jwtManagment/jwt')

  
juego.post('/login',checkAdmin)
juego.use( checkJWT)
juego.post('/players', addNewPlayer) 
juego.post('/players/:id/games', playerRollDices) 
juego.put('/players/:id', modifyPlayerName) 
juego.delete('/players/:id/games', deleteGames) 
juego.get('/players', getAllPlayers)
juego.get('/players/:id/games', playerGamesList)
juego.get('/players/ranking', generalRanking) 
juego.get('/players/ranking/loser', getWorstPlayer )
juego.get('/players/ranking/winner', getBetterPlayer)


module.exports = juego
