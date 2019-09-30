//root file

const express = require("express");
require('./services/passport');
const app = express();

require('./routes/authRoutes')(app); //valid javascript. Second set of parenthesis immediately invokes.


const PORT = process.env.PORT || 5000; //creates dynamic variable. Uses the port that heroku gives to us during runtime
app.listen(PORT);
