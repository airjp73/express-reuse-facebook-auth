var passportSetup = require('passportStrategy')
var router = require('router')

module.exports = (config) => {
  passportSetup(config)
  return router
}
