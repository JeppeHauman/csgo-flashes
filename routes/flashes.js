const express = require('express')
const router = express.Router()
const flashesController = require('../controllers/flashes')

router.get('/', flashesController.getFlashes)

module.exports = router