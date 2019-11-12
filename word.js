var Letter = require("./letter.js")

var Word = function(newWord) {
    this.newWord = newWord
    this.constructedWord = []
    this.checkCounter = 0
    this.makeWord = function() {
        for (let i = 0; i < this.newWord.length; i++) {
            let singleLetter = new Letter(newWord[i])
            this.constructedWord.push(singleLetter)
        }
    }
    this.displayWord = function() {
        var currentGuessed = []
        for (let i in this.constructedWord) {
            currentGuessed.push(this.constructedWord[i].display())
        }
        console.log(currentGuessed.join(" "))
    }
    this.guessedWord = function(char) {
        for (let i in this.constructedWord) {
            this.constructedWord[i].check(char)
            if (this.constructedWord[i].check(char)) {
                this.checkCounter++
                console.log(this.checkCounter)
            }
        }    
    }
}

module.exports = Word
