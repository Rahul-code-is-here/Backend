const fs= require("fs");
// This line is importing the fs (file system) module from Node.js. This module allows you to interact with the file system on your computer.
const express=require("express");
function callback(err,data){
    console.log(data);
}

// utf-8 encoding
fs.readFile("a.txt", "utf-8", callback);