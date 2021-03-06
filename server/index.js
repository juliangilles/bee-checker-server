const express = require('express');
const app = express();
const dht = require('./../sensor/dht');
const camera = require('./../sensor/camera');

app.get('/api/temp', async (req, res) => {
    const values = await dht.getValues();
    res.send(JSON.stringify(values));
});

app.get('/api/pic', async (req, res) => {
    const values = await camera.getPicture();
    res.send(JSON.stringify(values));
});

app.use((req, res, next) => {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

app.listen(8080, () => {
    console.log('bee checker is listening on port 8080.');
});
