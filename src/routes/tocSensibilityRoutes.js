const express = require('express')
const tocSensibilityController = require('../controllers/tocSensibilityController.js')

const router = express.Router()

router.get('/:idWell/sensibility-exercises',tocSensibilityController.instructions)
router.get('/:idWell/toc',tocSensibilityController.toc)
router.post('/:idWell/toc',tocSensibilityController.tocValidation)
router.get('/:idWell/charts/:chartRouteParam',tocSensibilityController.viewChart)

module.exports = router



