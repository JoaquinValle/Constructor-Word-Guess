var Letter = function(char) {
    this.char = char
    this.guessed = false
    
    this.display = function() {
        if (this.char === " ") {
            return " " 
        }
        else if (!this.guessed) {
            return "_"
        }
        else if (this.guessed) {
            return this.char
        }
    }
    this.check = function(userInput) {
        if (userInput === this.char) {
            this.guessed = true
            return true
        }
    }
}

module.exports = Letter