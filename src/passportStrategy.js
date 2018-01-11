var FacebookStrategy = require('passport-facebook').Strategy
var passport = require('passport')

module.exports = (config) => {
  passport.use('facebook', new FacebookStrategy({
      clientID: config.options.facebookAppId,
      clientSecret: config.options.facebookAppSecret
    },
    async (accessToken, refreshToken, profile, done) => {

      try {
        var user = await config.database.getUser({ facebookId: profile.id })
        if (user)
          return done(null, user)

        user = await config.database.newUser({ facebookId: profile.id })
        return done(null, user)
      }
      catch(err) {
        done(err)
      }

    }
  ))

}
