function internalError (err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    path: process.cwd(),
    message: err.message,
    error: (process.env.DEBUG) ? err : {}
  })
}

module.exports = internalError
