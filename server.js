const app = require('./app/app');

var port = process.env.PORT ? process.env.PORT : 3000;

app.listen(port, () => {
    console.log(`Server started in port ${port}`);
});