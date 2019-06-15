module.exports = {
    logErrors: (err, req, res, next) => {
        console.error(err.stack);
        next(err);
    },
    clientErrorHandler: (err, req, res, next) => {
        if(req.xhr){
            res.status(500).send({err: 'Ah pasado un error'});
        } else {
            next(err);
        }
    },
    errorHandler: (err, req, res, next) => {
        res.status(500);
        res.render('err', {error: err});
    }
}