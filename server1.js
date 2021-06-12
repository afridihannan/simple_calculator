const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

//Install body-parser
app.post("/", function (req, res) {
  var v1 = Number(req.body.num1);
  var oper = req.body.operator;
  var v2 = Number(req.body.num2);
  if (oper == '+') {
    var result = v1 + v2;
    res.send("The result is " + result);
    res.send("Thanks for posting!!!");
  }
  else if (oper == '-') {
    var result = v1 - v2;
    res.send("The result is " + result);
    res.send("Thanks for posting!!!");
  }
  else if (oper == '*') {
    var result = v1 * v2;
    res.send("The result is " + result);
    res.send("Thanks for posting!!!");
  }
  else if (oper == '/') {
    if (v2 == 0) {
      res.send("2nd number cannot be zero");
    }
    else {
      var result = v1 / v2;
      res.send("The result is " + result);
      res.send("Thanks for posting!!!");
    }
  }
  else {
    res.send("Please enter valid operator");
  }


})

app.listen(3000, function () {
  console.log("server has started at port 3000");
});
