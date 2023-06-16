const express = require("express");
const bodyParser = require("body-parser");



const app = express();


var works =[];
var heads = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/read", function(req, res) {
  res.sendFile(__dirname + "/views/read.ejs");
  res.render("read", {content: works, heading: heads });
});
app.get("/write", function(req, res) {
  res.sendFile(__dirname + "/write.html");
});


app.post("/read", function(req, res){
var work = req.body.Write;
var head = req.body.headingContent;
res.redirect("/read");

 works.push(work);
 heads.push(head);
 console.log(work);

});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
