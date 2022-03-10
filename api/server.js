const express = require('express');
const server = express();


server.use(express.json());


server.get('/', (req,res)=>{
    res.end(`name: fatimah bio: developer`)
});


module.exports = server;