const express = require('express');
const path = require('path');
var router = express.Router();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

router.use(function (req, res, next) {
console.log('Time:', Date.now());
next();
});

router.use('/user/:id', function(req, res, next) {
console.log('Request URL:', req.originalUrl);
next();    
}, function (req, res, next) {    
console.log('Request Type:', req.method);    
next();
});

app.get('/',(req, res) => {
    res.render('index', {
    });
});

app.get('/user/:id', function (req, res, next) {
    res.send('USER');
    });
    app.use('/user/:id', function(req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next();
    }, function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
    });

app.post('/createusers', (req, res) => {});

app.listen(3000);

console.log('listen on port 3000');