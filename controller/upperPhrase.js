module.exports = {
    toUpperPhrase: function (phrase = "Hello") {
        if(phrase == "" || phrase == null ){
            return phrase.toUpperCase()
        }
        return {
            result: phrase.toUpperCase()
        }
    }
}