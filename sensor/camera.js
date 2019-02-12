const PiCamera = require('pi-camera');
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
                    console.log(result);
                    resolve(result);
                })
                .catch((error) => {
                    console.log('upps :-(');
                    reject('ERROR');
                });
        });
    }
};
