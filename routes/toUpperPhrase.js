const router = require('express').Router();
const { toUpperPhrase } = require('../controller/upperPhrase');

router.get('/upperPhrase',(req, res) => {
    res.format({
        'application/json': () => {
            if(req.query.phrase.length)
                res.status(200).send(toUpperPhrase(req.query.phrase));
            
            res.status(200).send(toUpperPhrase());
        }
    });
});

module.exports = router;