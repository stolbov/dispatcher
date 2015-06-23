var express = require('express');

var router = module.exports = express.Router();

router.get('/ui', function (req, res) {
    res.send('UI');
});
