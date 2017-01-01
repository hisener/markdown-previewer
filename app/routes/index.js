'use strict'

var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.render('index', {
    title: 'Markdown Previewer',
    desc: 'GitHub flavored markdown previewer with ReactJS Edit'
  })
})

module.exports = router
