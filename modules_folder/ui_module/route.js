var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	res.send('UI');
});

module.exports = {
	url: '/ui/',
	router: router
};
