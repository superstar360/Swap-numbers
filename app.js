var express = require("express");
var prompt  = require("prompt");
var app     = express();

prompt.start();

// this code isn't included
// app.set("view engine", "ejs");

// app.get("/", function(req, res){
//     res.render("home");
// });


prompt.get(['num1', 'num2'], function (err, res) {
    //handle error
    if(err){
        console.log(err);
    }
    // Log the results.
    //manipulation
    var temp = res.num1;

    res.num1 = res.num2;
    res.num2 = temp;
    
console.log('Command-line input received:');
    
    console.log('  num1: ' + res.num1);
    console.log('  num2: ' + res.num2);
  });


app.listen(process.env.PORT, process.env.IP, function(){
    //console.log("the server is running smoothly!!!");
});