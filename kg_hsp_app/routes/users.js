var express = require('express');
var router = express.Router();
module.exports = router;

var Service = require('../modules/Services');
var config=require('../config.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with ');
});

router.post('/', function(req, res, next) {
  var user = req.body;
  var service = new Service(config.service.userdetails, user.name, user.password);
  service.post(user,function(err,msg){
    msg.title = "KG_Hospital";
    if(err)next("err -->",err);
    else res.render("index",msg);
  })
});
