// registerController
const express = require('express');
const router = express.Router()
const {registerController} = require("../../controllers/auth")

router.post('/register', registerController)

module.exports = router;