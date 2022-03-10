const server = require('./api/server');
require('dotenv').config();
const PORT = process.env.PORT || 9000;


// START YOUR SERVER HERE
server.listen(PORT, ()=>{
    console.log("server is running" , PORT, process.env.USER)
});