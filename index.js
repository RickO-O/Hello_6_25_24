const express = require('express');
const { styleText } = require('util');
const app = express();
const port = 3000;


app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/home.html');
});


app.get('/aboutMe', (req, res) => {
  res.sendFile(__dirname + '/aboutMe.html');
});


app.get('/facts', (req, res) => {
  res.sendFile(__dirname + '/facts.html');
});


app.get('/whatILike', (req, res) => {
  res.sendFile(__dirname + '/whatILike.html');
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


let bgc = Document.getElementsByTagName('button')


let skibidi=0


if(skibidi==0){
  bgc.style.backgroundColor = "lime"
}