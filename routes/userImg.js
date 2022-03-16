
const { Router } = require('express');
const { usuarioGet, subirImg } = require('../controllers/user.js');
const uploadImgs = require('../upload/imgConfig.js');

const router = Router();

router.get('/', usuarioGet);

router.post('/', uploadImgs.single('image'), subirImg);

module.exports = router;