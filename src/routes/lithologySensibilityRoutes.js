const express = require('express')
const lithologySensibilityController = require('../controllers/lithologySensibilityController.js')

const router = express.Router()

router.get('/:idWell/:lithologyRouteParam',lithologySensibilityController.lithology)
router.post('/:idWell/:lithologyRouteParam',lithologySensibilityController.lithologyValidation)
router.get('/:idWell/charts/:chartRouteParam',lithologySensibilityController.viewChart)

module.exports = router



