var mysql = require('mysql');
var config = require('../config');
var connect = require('../utils/sqlConnect');



const connect = mysql.createConnection({

  host:config.host,
  port: config.port,
  user: config.user,
  password: config.pword,
  datebase: config.datebase
});
module.exports = connect;
