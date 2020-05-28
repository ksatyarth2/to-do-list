var bodyParser = require('body-parser');

var data =[{items:'make coffee'},{items:'make baz'},{items:'make boo'},{items:'make foo'}]
var urlencodedParser = bodyParser.urlencoded({extended: true});

module.exports = function(app){

app.get('/todo', function(req, res){
res.render('todo',{todos:data});
});

app.post('/todo',urlencodedParser, function(req, res){
data.push(req.body);
res.json(data);
});

app.delete('/todo/:items', function(req, res){
data = data.filter(function(todo){                      //filter the false items
    return todo.items.replace(/ /g, '-') !== req.params.items;      //checking the items from url with above array items and if it matches, return false and filtered out
});
res.json(data);
});


}
