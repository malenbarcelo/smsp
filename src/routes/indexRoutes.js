const express = require('express')
const indexController = require('../controllers/indexController.js')
const userFormsValidations = require('../validations/userFormsValidations.js')

const router = express.Router()

router.get('/',indexController.index)
router.get('/login/:processName/:idWell',indexController.login)
router.post('/login/:processName/:idWell',userFormsValidations.loginForm,indexController.loginProcess)
router.get('/:processName/:idWell/well',indexController.well)
router.get('/:processName/:idWell/:processDesc/process',indexController.process)
router.get('/:processName/:idWell/end-process',indexController.endProcess)



module.exports = router



