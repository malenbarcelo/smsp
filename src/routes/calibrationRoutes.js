const express = require('express')
const calibrationController = require('../controllers/calibrationController.js')

const router = express.Router()

router.get('/:idWell/boundary-condition-calibration',calibrationController.bCcalibration)
router.post('/:idWell/boundary-condition-calibration',calibrationController.bCcalibrationValidation)
router.get('/:idWell/charts/:chartRouteParam',calibrationController.viewChart)
router.get('/:idWell/thermal-calibration',calibrationController.thermalCalibration)
router.post('/:idWell/thermal-calibration',calibrationController.thermalCalibrationValidation)

module.exports = router



