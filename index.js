//root file

const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy; //exports multiple properties but only care about "Strategy"
const keys = require("./config/keys");
const app = express();

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

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
); //GoogleStrategy has an internal identifier named 'google'. This lets passport.authenticate know to use GoogleStrategy.
//scope specifies to google what access we want to have in this users profile. There are others such as contact list etc.

app.get("/auth/google/callback", passport.authenticate("google"));//sees the code in the url and exchanges the code for the google profile

const PORT = process.env.PORT || 5000; //creates dynamic variable. Uses the port that heroku gives to us during runtime
app.listen(PORT);
