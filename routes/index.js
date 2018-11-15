var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/ceremony', function(req, res, next) {
  res.render('ceremony', { title: 'Ceremony' });
});
router.get('/reception', function(req, res, next) {
  res.render('reception', { title: 'Reception' });
});
router.get('/rsvp', function(req, res, next) {
  res.render('rsvp', { title: 'RSVP' });
});

module.exports = router;
