const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if thers an error reject the promise and send error to promise .catch()
            if (err) {
                reject(err);
                // return out of the function to make sure promise doesnt execute
                return;
            }
            // if everything went well, resolve promise and send successful data to the .then()
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./dist/index.html', fileContent, err => {
            //if thers an error reject the promise and send error to promise .catch()
            if (err) {
                reject(err);
                // return out of the function to make sure promise doesnt execute
                return;
            }
            // if everything went well, resolve promise and send successful data to the .then()
            resolve({
                ok: true,
                message: 'Stylesheet created!'
            });
        });
    });
};

module.exports = { writeFile, copyFile };