const fs = require('fs');



const fileReader = () => {
    fs.readFile('./input.txt', (err, data) => {
        const powerPerGame = [];
        const inputText = data.toString();
        const inputArray = inputText.split(/[\n]/);
        if (err) {
            console.log(err);
        } else {
            inputArray.forEach(game => {
                const gameArray = game.split(/[;]/);
                let lowestColor = {red: 0, green: 0, blue: 0};
                let colorProduct = 0;
                for (let i=0; i<gameArray.length; i++) {
                    if (gameArray[i].includes('red')) {
                        let redDigit = Number(gameArray[i][(gameArray[i].search(/red/)) - 2]);
                        if (gameArray[i][(gameArray[i].search(/red/)) - 3] !== ' ') {
                            let twoDigitNumber = Number((gameArray[i][((gameArray[i].search(/red/)) - 3)]) + (gameArray[i][((gameArray[i].search(/red/)) - 2)]));
                            if (twoDigitNumber > lowestColor.red) {
                                lowestColor.red = twoDigitNumber;
                            }
                        } else if (redDigit > lowestColor.red) {
                            lowestColor.red = redDigit;
                        }
                    }
                    if (gameArray[i].includes('blue')) {
                        let blueDigit = Number(gameArray[i][(gameArray[i].search(/blue/)) - 2]);
                        if (gameArray[i][(gameArray[i].search(/blue/)) - 3] !== ' ') {
                            let twoDigitNumber = Number((gameArray[i][((gameArray[i].search(/blue/)) - 3)]) + (gameArray[i][((gameArray[i].search(/blue/)) - 2)]));
                            if (twoDigitNumber > lowestColor.blue) {
                                lowestColor.blue = twoDigitNumber;
                            }
                        } else if (blueDigit > lowestColor.blue) {
                            lowestColor.blue = blueDigit;
                        } 
                    }
                    if (gameArray[i].includes('green')) {
                        let greenDigit = Number(gameArray[i][(gameArray[i].search(/green/)) - 2]);
                        if (gameArray[i][(gameArray[i].search(/green/)) - 3] !== ' ') {
                            let twoDigitNumber = Number((gameArray[i][((gameArray[i].search(/green/)) - 3)]) + (gameArray[i][((gameArray[i].search(/green/)) - 2)]));
                            if (twoDigitNumber > lowestColor.green) {
                                lowestColor.green = twoDigitNumber;
                            }
                        } else if (greenDigit > lowestColor.green) {
                            lowestColor.green = greenDigit;
                        }
                    }
                }
                colorProduct = lowestColor.red * lowestColor.blue * lowestColor.green;
                powerPerGame.push(colorProduct);
            });
            const finalGameSum = powerPerGame.reduce((a, b) => a + b, 0);
            console.log(finalGameSum);
        }
    });
}
fileReader();