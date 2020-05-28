// keys to remember: 
// 1)ejs for the template engine.
// 2)express middleware for static files
// 3)open up a port, set up your controller and fire it


var express = require('express');
var todoController = require('./controller/todoController.js');

var app = express();

//setting up template engine
app.set('view engine' , 'ejs');

//static files
app.use(express.static('./public'));   

//firing controllers
todoController(app);

//listen on port 3000
app.listen(3000);
console.log("listening on port 3000");
