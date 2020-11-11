const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's .catch() method 
            if (err) {
                reject(err);
                //return out of the function here to make sure the Promise doesnt accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve Promise and send the successfull data to the .then() method 
            resolve({
                ok: true, 
                message: 'File created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
              reject(err);
              return;
            }
            resolve({
                ok: true, 
                message: 'Style sheet copied successfully!'
            })
          });
    })
}

module.exports = { writeFile, copyFile };

// javascript promises: 
// to create a promise, we need to create a new Promise object using the javascript keyword "new". This Promise object acts like a container that allows us to run code that at some point will
// be in a status of "pending", which means that the code has started to run but it is waiting for a response. Inside the parentheses we provide it with a function that accepts two parameters
// : resolve and reject. From there, we can write whatever asynchronous functionality we need to execute, and run the resolve() function whent he code executes successfully or reject() when 
// it fails to execute succesfully. 

// with shorthand property names, if we have a property key name with the same name as the value we're associating with ti, like writeFile: writeFile, we can just say writeFile, and it will
// understand that we're using writeFile for both the property name and its value. 