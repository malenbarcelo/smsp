const express = require('express')
const hiSensibilityController = require('../controllers/hiSensibilityController.js')

const router = express.Router()

router.get('/:idWell/hi',hiSensibilityController.hi)
router.post('/:idWell/hi',hiSensibilityController.hiValidation)
router.get('/:idWell/charts/:chartRouteParam',hiSensibilityController.viewChart)

module.exports = router



