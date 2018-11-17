const express = require('express')
const router = express.Router()
const controller = require('../controllers/User')

router.post('/regist', controller.handleRegistUser)
router.post('/login', controller.handleLoginUser)

module.exports = router