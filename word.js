var Letter = require("./letter.js")

var Word = function(newWord) {
    this.newWord = newWord
    this.constructedWord = []
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
        }    
    }
}

module.exports = Word
