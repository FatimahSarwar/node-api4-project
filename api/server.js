const express = require('express');
const server = express();


server.use(express.json());

server.get('/api/users', (req , res) =>{
res.status(200).json({name:"fatimah", bio:"developer"
})
})
module.exports = server;