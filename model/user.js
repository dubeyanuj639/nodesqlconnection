const mysql = require('mysql');
const config = require('../config')
const connection = mysql.createConnection(config.dbOptions);
let User = `create table if not exists user(
    id int primary key auto_increment,
    name varchar(255)not null,
    status tinyint(1) not null default 0
)`;

connection.query(User, function (err, results, fields) {
    // if (err) {
    //     console.log(err.message);
    // }
    // else console.log("user tables created ==>")
});

module.exports = User