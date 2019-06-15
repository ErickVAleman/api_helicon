const router = require('express').Router();
const { toUpperPhrase } = require('../controller/upperPhrase');

router.get('/upperPhrase',(req, res) => {
    res.format({
        'application/json': () => res.status(200).send(toUpperPhrase(req.query.phrase)),
    });
});

module.exports = router;