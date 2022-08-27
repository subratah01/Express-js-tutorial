var express=require('express');
var app =express();

app.get('/',function(req,res){
    res.send('Hello express js!');
})


app.listen(8000,function(){
    console.log("Server Run Success!");
})