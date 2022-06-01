var express =require('express');
var app=express();

var onDefault=function(req,res){
    res.send("<h1>Krunal Padade<h1>"+
    "<hr/>"+
    "<ol>"+
        "<li> Dbda cloud computing</li>"+
    "</ol>");
};

var onDAboutUs=function(res,res){
    res.send("<h1>Maintaing Server : Node js</h1>");
};


app.get("/",onDefault);
app.get("/aboutus",onDAboutUs);
var server=app.listen(9000);
console.log("Server is running on port 9000");