//root file

const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;//exports multiple properties but only care about "Strategy"
const app = express();

passport.use(new GoogleStrategy());//creates a new instance of the GoogleStrategy



const PORT = process.env.PORT || 5000; //creates dynamic variable. Uses the port that heroku gives to us during runtime
app.listen(PORT);