var http = require('http')
var express = require('express')
var path = require('path')

var routes = require('./routes')
var middlewares = require('./middlewares')

var app = express()
var port = process.env.PORT || 3000

// Set the view engine
app.set('view engine', 'pug')
// Set the views folder
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, '../../public')))
app.use('/', routes)

// catch 404 and forward to error handler
app.use(middlewares.notFound)

// error handler
app.use(middlewares.internalError)

var server = http.createServer(app)
server.listen(port, function () {
  console.log('Server listening on ' + port)
})
