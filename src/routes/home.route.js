const express = require('express')
const router = express.Router()
const { homeController } = require('../controllers')

router.get('/createQR', homeController.viewCreateForm)
router.post('/createQR', homeController.createQrAndViewQr)

router.get('/test', homeController.test)
router.post('/saveCTV', homeController.saveCTV)

router.get('/', homeController.viewCtvTable)

module.exports = router
