var passport = require('passport')
var express = require('express')
var fb = express.Router()

fb.route('/facebook').post((req, res, next) => {
  passport.authenticate('facebook', (err, user, info) => {
    if (err)
      return next(err)

    req.logIn(user, (err) => {
      if (err)
        return next(err)

      res.sendStatus(200)
    })
  })
})

module.exports = fb
