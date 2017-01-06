var express = require('express')
var router = express.Router()
var getHome = require('./getHome')

router.get('/', getHome)

module.exports = router
