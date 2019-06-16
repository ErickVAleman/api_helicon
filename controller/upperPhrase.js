module.exports = {
    toUpperPhrase: function (phrase = "Hello") {
        if(phrase == "" || phrase == null ){
            phrase = "hello";
            return phrase.toUpperCase()
        }
        return {
            result: phrase.toUpperCase()
        }
    }
}