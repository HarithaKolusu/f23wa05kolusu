var express = require('express');
var router = express.Router();

/* Math.cos function */
router.get('/', function(req, res, next) {
  var randomPick = Math.random()* 100;
  var x = randomPick;

  if (req.query.x !== undefined) 
  {
    x = parseFloat(req.query.x);
  }

  var result = Math.cos(x);

  var finalRes = `Math.cos(${x}) is ${result}`;
  
  res.render('computation', { title: finalRes});
});

module.exports = router;