var userRoutes = require('express').Router();
var userController = require('../controller/userController')
userRoutes.get('/getUser/:id', userController.getUser);
userRoutes.post('/registerUser', userController.registerUser)

module.exports = userRoutes