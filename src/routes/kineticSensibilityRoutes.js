const express = require('express')
const kineticSensibilityController = require('../controllers/kineticSensibilityController.js')

const router = express.Router()

router.get('/:idWell/:kineticRouteParam',kineticSensibilityController.kinetic)
router.post('/:idWell/:kineticRouteParam',kineticSensibilityController.kineticValidation)
router.get('/:idWell/charts/:chartRouteParam',kineticSensibilityController.viewChart)

module.exports = router



