const fs = require('fs');
const calibrationArray = [];
let total = 0;
let numberArray = [];

const readFunction = () => {
    fs.readFile('./input.txt', 'utf-8', (err, data) => {
        const inputText = data.toString();
        const inputTextArray = inputText.split('\r\n');
        if (err) {
            console.log(err);
        } else {
            inputTextArray.forEach(line => {
                let calibrationForLine = '';
                let newCalibration = '';
                for (let i=0; i < line.length; i++) {
                    if (Number(line[i])) {
                        calibrationForLine += line[i];
                    }
                }
                if (calibrationForLine.length === 2) {
                    calibrationArray.push(calibrationForLine);
                } else if (calibrationForLine.length === 1) {
                    calibrationForLine += calibrationForLine;
                    calibrationArray.push(calibrationForLine);
                } else {
                    for (let i=0; i < calibrationForLine.length; i++) {
                        if (i === 0 || i === (calibrationForLine.length - 1)) {
                            newCalibration += calibrationForLine[i];
                        }
                    }
                    calibrationForLine = newCalibration;
                    calibrationArray.push(calibrationForLine);
                }
            });
            numberArray = calibrationArray.map((num) => Number(num));
            numberArray.forEach(num => {
                total += num;
            });
            console.log(total);
        }
    });
}
readFunction();
    