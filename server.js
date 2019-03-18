const express = require('express')
var bodyParser = require('body-parser')
const userTable = require('./model/user')
const userRoutes = require('./routes/userRoutes')
const config = require('./config')
const mysql = require('mysql');//require mysql module
const connection = mysql.createConnection(config.dbOptions); //create sql connection
connection.connect((err, result) => {
    if (err) console.log("MySql connection Errro")
    else console.log("Mysql connected ")
});
connection.end();

const app = express();
/* Body parser */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* Define your Routes here */
app.use('/', userRoutes)

/* Litening your  server port */
app.listen(config.port, (req, res) => {
    console.log("connected to port ", config.port)
})