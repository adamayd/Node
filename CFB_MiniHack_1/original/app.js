var express = require('express')
var app = express()
const myArray = [__dirname + '/views/index.pug', __dirname + '/views/index2.pug']
var rand = 0
var a = 0
var b = 0

app.set('view engine','pug')

app.get('/', function (req, res) {
  var rand = myArray[Math.floor(Math.random() * myArray.length)];
  if (myArray[0] == rand) {
    a++
    res.render(rand, { title: 'Hey', message: 'Hello World!', count: a})
  } else {
    b++
    res.render(rand, { title: 'Hey', message: 'Hello Code for Baltimore!', count: b})
  }
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})
