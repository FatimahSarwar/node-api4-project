const express = require('express');
const server = express();


server.use(express.json());

server.get('/api/users', (req , res) =>{
res.status(200).json({name:"fatimah", bio:"developer"
})
})
server.get('/', (req,res)=>{
    res.end('<h1>Hello World</h1>')
})

module.exports = server;