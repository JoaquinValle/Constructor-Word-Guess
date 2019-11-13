var inquirer = require("inquirer")
var Word = require("./word.js")

var words = ["malachite", "periwinkle", "gamboge", "fallow", "razzmatazz", "falu red", "arsenic", "feldgrau", "united nations blue", "xanadu", "caput mortuum",]
var currentWord
var guessCounter

function startGame() {
        var rand = Math.floor(Math.random() * (words.length))
        var randWord = words[rand]
        var index = words.indexOf(randWord)
        words.splice(index, 1)
        console.log(randWord)
        currentWord = new Word(randWord)

        currentWord.makeWord()
        currentWord.displayWord()
        guessCounter = 0
        game()
}

startGame()

function game() {
    var lengthNoSpaces = 0
    for (let i in currentWord.constructedWord) {
        if (currentWord.constructedWord[i].char !== " ") {
            lengthNoSpaces++
        }
    }
    console.log(lengthNoSpaces)
    console.log(currentWord.checkCounter)
    if (currentWord.checkCounter !== lengthNoSpaces) {
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
    if (words.length < 1) {
        console.log("All words completed. Thank you for playing!!!")
    }
    else {
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
}


