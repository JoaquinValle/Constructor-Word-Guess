var inquirer = require("inquirer")
var Word = require("./word.js")

var words = ["malachite", "periwinkle", "gamboge", "fallow", "razzmatazz", "falu red", "arsenic", "feldgrau", "united nations blue", "xanadu", "caput mortuum",]
var rand = Math.floor(Math.random() * (words.length + 1))
var randWord = words[rand]
console.log(randWord)
var currentWord = new Word(randWord)

currentWord.makeWord()
currentWord.displayWord()

var guessCounter = 0

function game() {
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
        })
    }   
    else {
        console.log("Out of Guesses")
    }
}

game()

