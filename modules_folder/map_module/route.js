var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	res.send('MAP root');
});
router.get('/:id', function (req, res) {
	res.send('MAP ' + req.params.id);
});

module.exports = {
	url: '/map/',
	router: router
};
