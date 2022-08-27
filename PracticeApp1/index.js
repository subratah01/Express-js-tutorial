var express=require('express');
var app =express();

//String Response
app.get('/',function(req,res){
    res.send('Hello express js!');
})

//Response Status Code
app.get('/one', function(req, res){
    res.status(201).end('Object created!');
})

//JSON Response
app.get('/two', function(req, res){
    var jsonData={
        'FirstName':'Subrata',
        'LastName':'Haldar',
    }
    res.json(jsonData);
})

//Download Response
app.get('/three', function(req, res){
    res.download('./uploads/SearchLead.png');
})

//Response Redirect
app.get('/bangladesh', function(req, res){
    res.redirect("http://localhost:8000/india");
})

app.get('/india', function(req, res){
    res.end('This is India');
})


app.listen(8000,function(){
    console.log("Server Run Success!");
})