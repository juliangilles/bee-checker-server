var sensor = require('node-dht-sensor');

module.exports = {
    getValues: async function () {
        return new Promise((resolve, reject) => {
            sensor.read(22, 4, function (err, temperature, humidity) {
                if (!err) {
                    resolve({
                        temp: temperature.toFixed(1),
                        humidity: humidity.toFixed(1)
                    });
                } else {
                    reject({
                        temp: 'N/A',
                        humidity: 'N/A'
                    })
                }
            });
        });

    }
};
