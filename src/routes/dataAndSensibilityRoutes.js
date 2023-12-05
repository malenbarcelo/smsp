const express = require('express')
const dataAndSensibilityController = require('../controllers/dataAndSensibilityController.js')

const router = express.Router()

router.get('/:idWell/:processName/charts/:chartRouteParam',dataAndSensibilityController.viewChart)
router.get('/:idWell/:processName/:stepAlias',dataAndSensibilityController.viewTable)
router.post('/:idWell/:processName/:stepAlias',dataAndSensibilityController.dataValidation)
router.get('/:idWell/sensibility-exercises',dataAndSensibilityController.instructions)
router.get('/:idWell/:processName',dataAndSensibilityController.viewTable)
router.post('/:idWell/:processName',dataAndSensibilityController.dataValidation)

module.exports = router



