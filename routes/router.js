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
juego.post('/players', addNewPlayer) //POST  crea un jugador   --Works
juego.post('/players/:id/games', playerRollDices) //POST /players/{id}/games: un jugador específic realitza una tirada --Works
juego.put('/players/:id', modifyPlayerName) //PUT  modifica el nom del jugador --Works
juego.delete('/players/:id/games', deleteGames) // DELETE /players/{id}/games: elimina les tirades del jugador --Works
juego.get('/players', getAllPlayers)//GET : retorna el llistat de tots els jugadors del sistema amb el seu percentatge mig d’èxits --Works
juego.get('/players/:id/games', playerGamesList)//GET /players/{id}/games: retorna el llistat de jugades per un jugador. --Works
juego.get('/players/ranking', generalRanking) //GET : retorna el percentatge mig d’èxits del conjunt de tots els jugadors --Works
juego.get('/players/ranking/loser', getWorstPlayer )//GET : retorna el jugador amb pitjor percentatge d’èxit --Works
juego.get('/players/ranking/winner', getBetterPlayer)//GET : retorna el jugador amb millor percentatge d’èxit  --Works


module.exports = juego