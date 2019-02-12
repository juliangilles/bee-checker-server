const PiCamera = require('pi-camera');
const fs = require('fs');
const moment = require('moment');


module.exports = {
    getPicture: async () => {
        const picPath = `${__dirname}/../tmp/test.jpg`;
        const myCamera = new PiCamera({
            mode: 'photo',
            output: picPath,
            width: 640,
            height: 480,
            nopreview: true,
        });

        return new Promise((resolve, reject) => {
            myCamera
                .snap()
                .then((result) => {
                    resolve({
                        img: fs.readFileSync(picPath, 'base64'),
                        dateTime: moment().format()
                    });
                })
                .catch((error) => {
                    reject({
                        img: '',
                        dateTime: moment().format()
                    });
                });
        });
    }
};
