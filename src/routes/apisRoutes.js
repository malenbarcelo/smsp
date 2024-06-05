const express = require('express')
const apisController = require('../controllers/apisController.js')

const router = express.Router()

router.get('/:idWell/pse-table',apisController.getData)
router.post('/:idWell/pse-table',apisController.postData)
router.get('/:idWell/pse-table/momento-critico',apisController.getDataMC)
router.post('/:idWell/pse-table/momento-critico',apisController.postDataMC)


module.exports = router



