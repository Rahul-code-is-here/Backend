//express is a framework : lets you to create http server
// aapne app.post and app.listen use karishu and e internaly it http server
// and start listening the request
const express = require("express");
const app = express();
var bodyparser = require("body-parser");
const port = 3001;

//middalewar ne use karva:
// bodyparswr middlewar route ne call thai e pela body ne extract karashe
// app.use(middleware1);
app.use(bodyparser.json());

// request sidhi handlesum/routeHandler ne eni pase na jai te mate aavya middlewar
// first middlewar chalshe pachi eni andar next() call thashe to j handle sum ne e run thashe

//middleware je library ma che je amuk people through write karayela che aapne eno sidho use kari shakie

var noOfReq = 0;
// middleware ma j no of req count kari levathi badha routerHandler ma same code nai lakhvo pade like function

function middleware1(req, res, next) {
  noOfReq += 1;
  // console.log("from inside middleware"+ req.headers.counter);
  console.log(noOfReq);
  //jo next e controll na pahoche to eror in inside middalware
  if (1 == 1) {
    next(); // aa nai lakhie to handlesum/routeHandler call j nai thai. sending request... aavi jshe
  } else {
    res.send("error inside middalware"); //aama and handlesum/routeHandler banne ma res.send na kri shakie ek ma j karvanu otherwise error
  }
}

function calculateSum(counter) {
  var sum = 1;
  for (let i = 1; i <= counter; i++) {
    sum += i;
  }
  return sum;
}

function calculateMul(counter) {
  var ans = 1;
  for (let i = 1; i <= counter; i++) {
    ans *= i;
  }
  return ans;
}

function handleFirstRequest(req, res) {
  // query ma j input leva: ? karine lai levanu
  // 1st method: route (query selector not exactly)
  var counter = req.query.counter; // jene leva mate
//   console.log(req.query.counter2);
//   console.log(req.query.counter3); // aa console ma print
  var calculatedSum = calculateSum(counter);
  var ansObj={
    sum: calculatedSum
  }
  // console.log(calculatedSum);
//   var answer = "the sum is " + calculatedSum;
  res.send(ansObj);
}
app.get("/handleSum", handleFirstRequest);

function handleFirstRequest1(req, res) {
  //2nd method to take input from user
  // from header and 3rd from body
  // req.headers;
  // req.body
  console.log("hello world!");
}

function createUser(req, res) {
  res.send("hey bro");
}

//4 method get,post,pull,delete
// get - idealy data get karva but badhi request nu kam kari shake
// post: ex; linked ma create new account, tame data tya server ma send karo cho
// put: data update karva
//delete: delete karva

// app.get('/handleSum2',handleFirstRequest);

function handleFirstRequest3(req, res) {
  // quser pasethi custom output leva
  // 2nd method: from header
  // console.log(req.body);
  // console.log(req.headers);
  // var counter=req.headers.counter;
  var counter = req.body.counter;

  var calculatedSum = calculateSum(counter);
  // console.log(calculatedSum);
  var answer = "the sum is " + calculatedSum;
  res.send(answer);
  // res.status(401).send(answer);  //status code send karva
}
app.post("/handleSum3", handleFirstRequest3);
// jyare link pachi route '/handlesum' hoy tyare aa run karo

app.get("/handleSum1", handleFirstRequest1);

app.post("/createUser", createUser); // aa brwoser local host ma run nai kare
//tethi postman ma run karavo
// why postman? it's hard to send post request from browser

// route ma je username / pachi pass karyu te find karvanu che
// /:(slesh colon) lakhvathi je / pachi pass thashe route ma e handle function ma jashe and req.params.username1 thi get kari shakie
// do not understand do not worry
function handle(req, res) {
  var queryString1 = req.params.username1;
  console.log(queryString1);
}

app.get("/:username1", handle);

//status code send karva
function handleStatusCode(req, res) {
  var counter = req.body.counter;
  if (counter < 10000) {
    var calculatedSum = calculateSum(counter);
    var calculatedMul = calculateMul(counter);

    var ansObject = {
      sum: calculatedSum,
      mul: calculatedMul,
    };
    var ans = "the sum is" + calculatedSum;
    // var StringAns= "the calculated sum is"+calculateSum+ "and calculated mul is"+ calculatedMul;  //this is not strucuture way tethi object ma ans pass karie
    res.send(ansObject);
    // res.json(ansObject);  // json formant ma ans aavshe e verify kare
  } else {
    res.status(411).send("you have send very big number");
  }
}


// 3 format ma res send kari shakie 1]simple text, 2] json file 3] html
// for html type return

function givePage(req, res) {
  res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello from this page</title>
    </head>
    <body>
        <b>hi there </b>
    </body>
    </html>`);
    // res.sendFile(__dirname + "index.html")  // direcr html file share karva
}
app.get('/',givePage)

function started() {
  console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);
