var express = require('express');
var app = express();
var dht = require('./../sensor/dht');

app.get('/api/temp', async function (req, res) {
    var values = await dht.getValues();
    res.send(JSON.stringify(values));
});

app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080.');
});
