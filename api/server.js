const express = require('express');
const server = express();
const User = require('./users/user-model');

server.use(express.json());

server.get('/api/users', (req , res) =>{
    User.find()
    .then(user =>{
        res.json(user)
    })
})
module.exports = server;