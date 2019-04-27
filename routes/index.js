var express = require('express');
var request = require('request')
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  request('https://api.crypto-bridge.org/api/v1/ticker/worx_BTC', function (error, response, body) {
    if (error) throw error
    res.render('index', { data: JSON.parse(body) });
  });
});

module.exports = router;
