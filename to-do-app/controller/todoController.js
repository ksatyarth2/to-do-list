var data =[{items:'make coffee'},{items:'make baz'},{items:'make boo'},{items:'make foo'}]
module.exports = function(app){

app.get('/todo', function(req, res){

res.render('todo',{data:data});
});

app.post('/todo', function(req, res){

});

app.delete('/todo', function(req, res){

});


}
