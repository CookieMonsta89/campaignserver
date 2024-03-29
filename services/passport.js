const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy; //exports multiple properties but only care about "Strategy"
const keys = require("../config/keys");

passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback"
      },
      (accessToken, refreshToken, profile, done) => {
        console.log('accessToken', accessToken);
        console.log('refreshToken', refreshToken);
        console.log('profile', profile);
      }//our opportunity to grab users identifying info and save to our database.
    )
  );