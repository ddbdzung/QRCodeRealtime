const express = require('express')
const router = express.Router()
const { homeController } = require('../controllers')

router.get('/', homeController.viewHome)
router.post('/createQR', homeController.createQrAndViewQr)
router.post('/saveCTV', homeController.saveCTV)
router.get('/test', homeController.test)

module.exports = router
