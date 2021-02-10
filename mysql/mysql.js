const mysql = require('mysql');
//Import table config
const {database} = require('../config/config.js');

//Creating connection
const db = mysql.createConnection(database);

//Connect to db
db.connect();

module.exports = db;