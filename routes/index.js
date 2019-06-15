const router = require('express').Router();

router.get('/', (req, res) => {
    res.format({
        'text/html': res.status(200).send(`
            <h1>Api para cambiar a mayusculas las letras de una palabra</h1>
            <p>dirigete a <a href="/api/v1/upperPhrase">${ req.headers.host }/api/v1/upperPhrase<a/></p>
        `)
    });
});

module.exports = router;