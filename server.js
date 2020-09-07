var express = require('express');
var app = express();//create app
var bodyparser = require('body-parser');
var routing = require('./routes/route.js');




app.use(bodyparser.urlencoded({extended:true}));//use this middleware in my express
app.use(routing);//use this routing whenever request arrives
app.listen(4000);
console.log('server started at 4000');
