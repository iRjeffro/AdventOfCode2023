const fs = require('fs');
const bagCubes = {
    red: 12,
    green: 13,
    blue: 14
}
const successfulGameArray = [];
let redPassPerRound = [];
let greenPassPerRound = [];
let bluePassPerRound = [];
let gamePassTest = false;

const fileReader = () => {
    fs.readFile('./input.txt', (err, data) => {
        const inputText = data.toString();
        const inputArray = inputText.split(/[\n]/);
        if (err) {
            console.log(err);
        } else {
            inputArray.forEach(game => {
                const gameArray = game.split(/[;]/);
                console.log(gameArray);
                redPassPerRound = [];
                greenPassPerRound = [];
                bluePassPerRound = [];
                gamePassTest = false;
                let gameNumber = '';
                for (let i=(gameArray[0].search(/Game/) + 4); i<(gameArray[0].search(/:/)); i++) {
                    gameNumber += gameArray[0][i];
                }
                for (let i=0; i<gameArray.length; i++) {
                    if (gameArray[i].includes('red')) {
                        if (gameArray[i][(gameArray[i].search(/red/)) - 3] !== ' ') {
                            let twoDigitNumber = Number((gameArray[i][((gameArray[i].search(/red/)) - 3)]) + (gameArray[i][((gameArray[i].search(/red/)) - 2)]));
                            if (twoDigitNumber <= bagCubes.red) {
                                redPassPerRound.push(true);
                            } else {
                                redPassPerRound.push(false);
                            }
                        } else if (Number(gameArray[i][(gameArray[i].search(/red/)) - 2]) <= bagCubes.red) {
                            redPassPerRound.push(true);
                        } else {
                            redPassPerRound.push(false);
                        }  
                    } else {
                        redPassPerRound.push(true);
                    }
                    if (gameArray[i].includes('blue')) {
                        if (gameArray[i][(gameArray[i].search(/blue/)) - 3] !== ' ') {
                            let twoDigitNumber = Number((gameArray[i][((gameArray[i].search(/blue/)) - 3)]) + (gameArray[i][((gameArray[i].search(/blue/)) - 2)]));
                            if (twoDigitNumber <= bagCubes.blue) {
                                bluePassPerRound.push(true);
                            } else {
                                bluePassPerRound.push(false);
                            }
                        } else if (Number(gameArray[i][(gameArray[i].search(/blue/)) - 2]) <= bagCubes.blue) {
                            bluePassPerRound.push(true);
                        } else {
                            bluePassPerRound.push(false);
                        }  
                    } else {
                        bluePassPerRound.push(true);
                    }
                    if (gameArray[i].includes('green')) {
                        if (gameArray[i][(gameArray[i].search(/green/)) - 3] !== ' ') {
                            let twoDigitNumber = Number((gameArray[i][((gameArray[i].search(/green/)) - 3)]) + (gameArray[i][((gameArray[i].search(/green/)) - 2)]));
                            if (twoDigitNumber <= bagCubes.green) {
                                greenPassPerRound.push(true);
                            } else {
                                greenPassPerRound.push(false);
                            }
                        } else if (Number(gameArray[i][(gameArray[i].search(/green/)) - 2]) <= bagCubes.green) {
                            greenPassPerRound.push(true);
                        } else {
                            greenPassPerRound.push(false);
                        }  
                    } else {
                        greenPassPerRound.push(true);
                    }
                }
                if (redPassPerRound.every(round => round === true) && bluePassPerRound.every(round => round === true) && greenPassPerRound.every(round => round === true)) {
                    successfulGameArray.push(Number(gameNumber));
                }
            });
            const finalGameSum = successfulGameArray.reduce((a, b) => a + b, 0);
            console.log(finalGameSum);
        }
    });
}
fileReader();