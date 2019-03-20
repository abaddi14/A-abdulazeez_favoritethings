var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  connect.query(SELECT name, avter FROM hero',(err,result) => {
    if(err) {
      throw err;
      console.log(err);
    }else{
      console.log(result);
    }
    });
  res.render('index', { title: 'Express' });
});

module.exports = router;
