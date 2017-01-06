function getHome (req, res) {
  res.render('index', {
    title: 'Markdown Previewer',
    desc: 'GitHub flavored markdown previewer with ReactJS Edit'
  })
}

module.exports = getHome
