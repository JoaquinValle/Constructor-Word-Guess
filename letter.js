var Letter = function(char, placeholder, guessed, actualLetter) {
    this.char = char
    this.actualLetter = actualLetter
    this.placeholder = placeholder
    this.guessed = guessed
    this.wasGuessed = function() {
        char = placeholder
        if (this.guessed) {
            char = actualLetter
        }
    }
    this.check = function(letter) {
        if (letter === actualLetter) {
            guessed = true
        }
    }
}

module.exports = Letter