const path = require('path');
const express = require('express');

const bodyParser = require('body-parser');
const port = 8000;
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});


// Listen for requests
app.listen(port, function(err){
    if(err){console.log(`Error in running the server, ${err}`)};
    console.log(`Server is running on port: ${port}`);
})

