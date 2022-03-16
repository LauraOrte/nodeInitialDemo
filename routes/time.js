
const { Router } = require('express');
const { mostrarFecha } = require('../controllers/time.js');
const {cacheMiddleware, checkAuth } = require('../middleware/middlewares.js');
const router = Router();
const cors = require('cors');

router.post('/', cors(), cacheMiddleware, checkAuth, mostrarFecha );

module.exports = router;