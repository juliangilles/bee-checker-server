var sensor = require('node-dht-sensor');
var moment = require('moment');

module.exports = {
    getValues: async () => {
        return new Promise((resolve, reject) => {
            sensor.read(22, 4, (err, temperature, humidity) => {
                if (!err) {
                    resolve({
                        temp: temperature.toFixed(1),
                        tempUnit: '°C',
                        humidity: humidity.toFixed(1),
                        tempUnit: '%',
                        dateTime: moment().format()
                    });
                } else {
                    reject({
                        temp: 'N/A',
                        tempUnit: '°C',
                        humidity: 'N/A',
                        tempUnit: '%',
                        dateTime: moment().format()
                    })
                }
            });
        });
    }
};
