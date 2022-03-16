
const { Router } = require('express');
const { usuarioGet, subirImg } = require('../controllers/user.js');
const uploadImgs = require('../upload/imgConfig.js');

const router = Router();

//NIVEL 1; EJERCICIO 1
router.get('/', usuarioGet);

router.post('/', uploadImgs.single('image'), subirImg);

module.exports = router;