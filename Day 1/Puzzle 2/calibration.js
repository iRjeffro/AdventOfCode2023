const fs = require('fs');
const calibrationArray = [];
let total = 0;
let numberArray = [];
const stringKeys = {'1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9};

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
                let lineArray = [];
                for (let i=0; i<line.length; i++) {
                    for (let [word, number] of Object.entries(stringKeys)) {
                        if (line.slice(i, i + word.length) === word) {
                            lineArray.push(number);
                        }
                    }
                }
                console.log(lineArray);
                for (let i=0; i<lineArray.length; i++) {
                    calibrationForLine += lineArray[i];
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