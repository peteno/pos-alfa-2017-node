const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/teste', function(req, res, next) {
    const data = { title: 'Express', course: 'Pós Alfa' };
    res.render('index', data);    
});

module.exports = router;
