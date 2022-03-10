const express = require('express');
const server = express();
const User = require('./users/user-model');

server.use(express.json());

server.get('/api/users', (req,res)=>{
 res.status(200).json(User.users)
})
module.exports = server;