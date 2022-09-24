const express = require('express')
const router = express.Router()
const flashesController = require('../controllers/flashes')

router.get('/', flashesController.getFlashes)

router.get('/:map', flashesController.getFlashesMap)

router.post('/createFlash', flashesController.createFlash)

module.exports = router