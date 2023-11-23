const express = require('express')
const simulationController = require('../controllers/simulationController.js')

const router = express.Router()

router.get('/:idWell/entry-data/base-data',simulationController.baseData)
router.post('/:idWell/entry-data/base-data',simulationController.baseDataValidation)
router.get('/:idWell/entry-data/data-in-well',simulationController.dataInWell)
router.post('/:idWell/entry-data/data-in-well',simulationController.dataInWellValidation)
router.get('/:idWell/entry-data/boundary-condition',simulationController.boundaryCondition)
router.post('/:idWell/entry-data/boundary-condition',simulationController.boundaryConditionValidation)
router.get('/:idWell/charts/:chartRouteParam',simulationController.viewChart)

module.exports = router



