var inquirer = require("inquirer")
var Word = require("./word.js")

var words = ["malachite", "periwinkle", "gamboge", "fallow", "razzmatazz", "falu red", "arsenic", "feldgrau", "united nations blue", "xanadu", "caput mortuum",]
var currentWord
var guessCounter

function startGame() {
    var rand = Math.floor(Math.random() * (words.length + 1))
    var randWord = words[rand]
    console.log(randWord)
    currentWord = new Word(randWord)

    currentWord.makeWord()
    currentWord.displayWord()
    guessCounter = 0
    game()
}

startGame()

// var rand = Math.floor(Math.random() * (words.length + 1))
// var randWord = words[rand]
// console.log(randWord)
// var currentWord = new Word(randWord)

// currentWord.makeWord()
// currentWord.displayWord()
// var guessCounter = 0

function game() {
    if (currentWord.checkCounter !== currentWord.constructedWord.length) {
        if (guessCounter < 9) {
            guessCounter++
            inquirer.prompt([
                {
                type: "input",
                name: "guess",
                message: "Select a Letter to Check"
                }
            ]).then((data) => {
                currentWord.guessedWord(data.guess)
                currentWord.displayWord()
                game()
            })
        }  
        else {
            console.log("Out of Guesses")
            playAgain()
        } 
    }
    else {
        console.log("Yaaaaaaaay!")
        playAgain()
    }

}

function playAgain() {
    inquirer.prompt([
        {
            type: "list",
            name: "option",
            message: "Play again?",
            choices: ["Yes", "No"]
        }
    ]).then((answer) => {
        if (answer.option === "Yes") {
            startGame()
        }
        else {
            console.log("No")
        }
    })
}


