const mongoose = require('mongoose');

module.exports = (address) => {
    return new Promise((resolve, reject) => {
        resolve();
        // mongoose.connect(address, (error) => {
        //     if (error) {
        //         return reject(error);
        //     }
        //
        //     resolve();
        // });
    });
};
