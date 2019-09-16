//root file

const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send({ hi:'what is up' });
})

const PORT = process.env.PORT || 5000; //creates dynamic variable. Uses the port that heroku gives to us during runtime
app.listen(PORT);