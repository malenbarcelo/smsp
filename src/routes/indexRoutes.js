const express = require('express')
const indexController = require('../controllers/indexController.js')
const userFormsValidations = require('../validations/userFormsValidations.js')

const router = express.Router()

router.get('/',indexController.index)
router.get('/login/:processName/:idWell',indexController.login)
router.post('/login/:processName/:idWell',userFormsValidations.loginForm,indexController.loginProcess)
router.get('/logout/:processName/:idWell',indexController.logout)
router.get('/entry-data/:idWell/:processName/well',indexController.well)
router.get('/entry-data/:idWell/:processName/:processDesc/process',indexController.process)
router.get('/sensibility/:idWell/:processName/:processDesc/process',indexController.process)
router.get('/entry-data/:idWell/:processName/end-process',indexController.endProcess)
router.get('/sensibility/:idWell/:processName/end-process',indexController.endProcess)
router.get('/pse-table/:idWell/:processName/end-process',indexController.endProcess)

module.exports = router



