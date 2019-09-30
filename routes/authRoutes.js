const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  ); //GoogleStrategy has an internal identifier named 'google'. This lets passport.authenticate know to use GoogleStrategy.
  //scope specifies to google what access we want to have in this users profile. There are others such as contact list etc.

  app.get("/auth/google/callback", passport.authenticate("google")); //sees the code in the url and exchanges the code for the google profile
};
