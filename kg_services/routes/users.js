var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({msg : "respond with a resource"});
});

router.post('/', function(req, res, next) {
  var result = {msg : req.body.name + " this is response from service side."}
  res.json(result);
});

module.exports = router;
