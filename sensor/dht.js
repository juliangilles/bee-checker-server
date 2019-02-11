const sensor = require('node-dht-sensor');
const moment = require('moment');
const isPi = require('detect-rpi');

module.exports = {
    getValues: async () => {
        const defaultStatus = {
            temp: 'N/A',
            tempUnit: '°C',
            humidity: 'N/A',
            humidityUnit: '%',
            dateTime: moment().format()
        };
        if (!isPi()) {
            return new Promise((resolve) => {
                resolve(defaultStatus);
            });
        }
        return new Promise((resolve, reject) => {
            sensor.read(22, 4, (err, temperature, humidity) => {
                if (!err) {
                    resolve({
                        temp: temperature.toFixed(1),
                        tempUnit: '°C',
                        humidity: humidity.toFixed(1),
                        humidityUnit: '%',
                        dateTime: moment().format()
                    });
                } else {
                    reject(defaultStatus)
                }
            });
        });
    }
};
