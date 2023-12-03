const fs = require('fs');

const fileReader = () => {
    fs.readFile('./input.txt', (err, data) => {
        const inputText = data.toString();
        const inputArray = inputText.split(/[\n]/);
        console.log(inputArray);
        if (err) {
            console.log(err);
        } else {
            inputArray.forEach(line => {
                const lineArray = [];
                // lineArray.push(inputArray.split(/[;]/));
                // console.log(lineArray);
            });
        }
    });
}
fileReader();