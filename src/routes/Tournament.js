const express = require('express')
const router = express.Router()
const controller = require('../controllers/Tournament')

router.get('/', controller.getTournament)
router.post('/regist', controller.registTournament)
router.post('/add/user', controller.addUserToTournamernt)

module.exports = router