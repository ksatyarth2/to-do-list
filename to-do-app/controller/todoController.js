var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to the database MongoDB
mongoose.connect('mongodb+srv://todoApp:todoApp@cluster0-28ura.mongodb.net/test?retryWrites=true&w=majority');

//create a schema - this is like a blueprint

var todoSchema = new mongoose.Schema({
    items: String
});

var Todo = mongoose.model('Todo', todoSchema);
// var itemOne = Todo({items: 'go to sleep'}).save(function(err){
//     if (err) throw err;
//     console.log("itemOne saved");
// });


// var data =[{items:'make coffee'},{items:'make baz'},{items:'make boo'},{items:'make foo'}]
var urlencodedParser = bodyParser.urlencoded({extended: true});

module.exports = function(app){

app.get('/todo', function(req, res){
    //get data from mongodb and pass it to view
    Todo.find({}, function(err, data){      //find methods finds all the items in the collection if left empty
        if (err) throw err;
        res.render('todo',{todos:data});      //pass the data from Todo db to view

    });
});

app.post('/todo',urlencodedParser, function(req, res){
    //get data from view and add it to mongodb
    var newTodo = Todo(req.body).save(function(err, data){
        if(err) throw err;
        res.json(data);     
    });
// data.push(req.body);
// res.json(data);
});

app.delete('/todo/:items', function(req, res){
    //delete requested item from database
    Todo.find({items: req.params.items.replace(/\-/g, ' ')}).remove(function(err, data){    //replace - with space and remove that data
        if (err) throw err;
        res.json(data);
    });
// data = data.filter(function(todo){                      //filter the false items
//     return todo.items.replace(/ /g, '-') !== req.params.items;      //checking the items from url with above array items and if it matches, return false and filtered out
// });
// res.json(data);
});


}
