var express = require('express');
var app = express();

app.get('/hello', function(req, res){
   res.send("Hello World!");
});

app.post('/hello', function(req, res){
   res.send("You just called the post method at '/hello'!\n");
});

app.all('/test', function(req, res){
   res.send("HTTP method doesn't have any effect on this route!");
});

app.get('/things/:name/:id', function(req, res) {
   res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});

//Other routes here
app.get('*', function(req, res){
   res.send('Sorry, this is an invalid URL.');
});

//both index.js and things.js should be in same directory
app.use('/things', things);


app.listen(3000);