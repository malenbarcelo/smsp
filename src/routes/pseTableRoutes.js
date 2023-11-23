const express = require('express')
const pseTableController = require('../controllers/pseTableController.js')

const router = express.Router()

router.get('/:idWell/charts/:chartRouteParam',pseTableController.viewChart)
router.get('/:idWell/pse-summary-table',pseTableController.pseTable)
router.post('/:idWell/pse-summary-table',pseTableController.pseTableValidation)

module.exports = router



