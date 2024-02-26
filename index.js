
const express = require('express')
const app = express()
const port = 3001

function calculateSum(counter){
    var sum=0;
    for(let i=0; i<counter; i++){
        sum += i;
    }   
    return sum;
}

function handleFirstRequest(req,res){

    // query ma j input leva: ? karine lai levanu
    // 1st method: query selector
    var counter=req.query.counter;  // jene leva mate 
    console.log(req.query.counter2);
    console.log(req.query.counter3);// aa console ma print 
    var calculatedSum= calculateSum(counter);
    // console.log(calculatedSum);
    var answer= "the sum is " + calculatedSum;
    res.send(answer);
}

function handleFirstRequest1(req,res){
    //2nd method to take input from user
    // from header and 3rd from body
    // req.headers; 
    // req.body
    console.log("hello world!");
}

function createUser(req,res){
    res.send('hey bro');
}

//4 method get,post,pull,delete
// get - idealy data get karva but badhi request nu kam kari shake
// post: ex; linked ma create new account, tame data tya server ma send karo cho
// put: data update karva
//delete: delete karva 

app.get('/handleSum2',handleFirstRequest);
// jyare link pachi route '/handlesum' hoy tyare aa run karo
app.get('/handleSum1',handleFirstRequest1);

app.post('/createUser',createUser);// aa bwoser local host ma run nai kare
//tethi postman ma run karavo
// why postman? it's hard to send post request from browser

// do not understand do not worry
// query string ma je username / pachi pass karyu te find karvanu che
// /:(slesh colon) lakhvathi je / pachi pass thashe query string ma e handle function ma jashe and req.params.username1 thi get kari shakie 
function handle(req,res){
    var queryString1= (req.params.username1);
    console.log(queryString1);
}

app.get('/:username1', handle);


function started(){
    console.log(`Example app listening on port ${port}`);
}

app.listen(port, started)




