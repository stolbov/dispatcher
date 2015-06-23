var http = require('http');
var express = require('express');
var path = require('path');
var router = require('./router');
var app = express();
var httpServer = http.Server(app);

app.set('view engine', 'ejs');

app.use(express.static(path.join(process.cwd(), 'build')));

router(app);

var port = process.env.PORT || 4000;
httpServer.listen(port);
console.log('Server listening on port', port);
