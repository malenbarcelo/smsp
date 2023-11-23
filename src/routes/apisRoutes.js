const express = require('express')
const apisController = require('../controllers/apisController.js')

const router = express.Router()

router.get('/:idWell/pse-table',apisController.getData)
router.post('/:idWell/pse-table',apisController.postData)


module.exports = router



