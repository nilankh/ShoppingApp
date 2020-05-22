const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1> Page not FOund</h1>');
});


// Listen for requests
app.listen(port, function(err){
    if(err){console.log(`Error in running the server, ${err}`)};
    console.log(`Server is running on port: ${port}`);
})

