const express = require('express')
const router = express.Router()
const flashesController = require('../controllers/flashes')

router.get('/', flashesController.getFlashes)

router.get('/maps/:map', flashesController.getFlashesMap)

module.exports = router