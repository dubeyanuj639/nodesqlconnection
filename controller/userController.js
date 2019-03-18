// const User = require('../model/user.js')
var mysql = require('mysql');
const config = require('../config')
const connection = mysql.createConnection(config.dbOptions);

getUser = (req, res) => {
    console.log("req.body ==>>", req.params)
    connection.query('SELECT * FROM user WHERE id = ' + req.params.id, function (err, rows) {
        if (err) console.log("Error =>", err)
        else console.log("rows ==>", rows)
    })
}

registerUser = (req, res) => {
    // let data = { "name": req.body.name }
    // connection.query('INSERT INTO user (name , status) VALUES (`req.body.name`)' + data, (err, result) => {
    //     if (err) console.log("Error =>", err)
    //     else console.log("result ==>", result)
    // })
}


module.exports = {
    getUser: getUser,
    registerUser: registerUser
}
