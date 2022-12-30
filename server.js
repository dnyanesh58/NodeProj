const express = require('express')
var app = express();
var bodyparse = require("body-parser");
var mod = require('./module');
app.use(bodyparse.urlencoded({extended : false}));

app.get("/home",function(req,resp) 
{
    resp.sendFile("public/index.html",{root : __dirname});
});

app.get("/submit_data",function(req,resp) 
{
    var num1 = req.body.num1;
    var num2 = req.body.num2;
    var result = mod.add(num1,num2); 
    resp.send("<h2> Addition : "+result+"</h2>");
});

app.listen(6969);
console.log("server running on 6969");