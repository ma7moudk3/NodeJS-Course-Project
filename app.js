const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const app = express(); // new object from express as function
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
app.use(bodyParser.urlencoded({extended : false})); 

app.use('/admin',adminRoute);
app.use(shopRoute);

app.use((req,res,next) => {
res.status(404).sendFile(path.join(__dirname,"views","404.html"))
});




app.listen(3000);