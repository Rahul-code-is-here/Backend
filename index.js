
const express = require('express')
const app = express()
const port = 3003

function calculateSum(counter){
    var sum=0;
    for(let i=0; i<counter; i++){
        sum += i;
    }
    return sum;
}

function handleFirstRequest(req,res){
    var calculatedsum= calculateSum(100);
    console.log(calculatedsum);
    var answer= "the sum is" + calculatedsum;
    res.send(answer);
}

app.get('/handlesum',handleFirstRequest);
// jyare link pachi route '/handlesum' hoy tyare aa run karo

function started(){
    console.log(`Example app listening on port ${port}`);
}

app.listen(port, started)




