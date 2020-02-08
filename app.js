var express = require('express');
var todocontroller=require('./controllers/todocontroller');

var app=express();

//template engine
app.set('view engine','ejs');

//static files
app.use(express.static('./public')) ;

//fire controllers
todocontroller(app);

//listen to prt
app.listen(3000);
console.log('You are listening to port 3000');


