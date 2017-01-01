var http = require('http')
var express = require('express')

var routes = require(process.cwd() + '/app/routes')

var app = express()
var dev = app.get('env') !== 'prod'
var port = process.env.PORT || 3000

// Set the view engine
app.set('view engine', 'pug')
app.set('views', process.cwd() + '/app/views')

app.use(express.static(process.cwd() + '/app/public'))
app.use('/', routes)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    path: process.cwd(),
    message: err.message,
    error: (dev) ? err : {}
  })
})

var server = http.createServer(app)
server.listen(port, function () {
  console.log('Server listening on ' + port)
})
