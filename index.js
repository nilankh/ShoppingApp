const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;
const app = express();




// Listen for requests
app.listen(port, function(err){
    if(err){console.log(`Error in running the server, ${err}`)};
    console.log(`Server is running on port: ${port}`);
})