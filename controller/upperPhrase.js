class upperPhrase {
    constructor(req, res){
        this.req = req;
        this.res = res;
    }
    
    setPhrase(phrase){
        this.originalPhrase = !phrase ? "hello" : phrase;
        return;
    }

    getUpperPhrase(){
        var result =  new Object({ result: this.originalPhrase.toUpperCase()});
        this.res.status(200).send(result);
        return;
    }
}

module.exports = upperPhrase;