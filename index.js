const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views','views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page not Found'});
});


// Listen for requests
app.listen(port, function(err){
    if(err){console.log(`Error in running the server, ${err}`)};
    console.log(`Server is running on port: ${port}`);
})

