const PiCamera = require('pi-camera');
const moment = require('moment');


module.exports = {
    getPicture: async () => {
        const myCamera = new PiCamera({
            mode: 'photo',
            output: `${__dirname}/test.jpg`,
            width: 640,
            height: 480,
            nopreview: true,
        });

        return new Promise((resolve, reject) => {
            myCamera
                .snap()
                .then((result) => {
                    console.log('done :-)');
                    resolve('FUN');
                })
                .catch((error) => {
                    console.log('upps :-(');
                    reject('ERROR');
                });
        });
    }
};
