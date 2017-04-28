const express = require('express')
const bodyParser = require('body-parser')
const request = require("request");

const app = express()
app.use(bodyParser.json());

app.get('/hello', function(req,res) {
  res.send("Hello!")
})

app.get('/goodbye', function(req,res) {
  res.send("Goodbye")
})

app.get('/', function(req,res) {
  res.send("go somewhere better")
})

app.post('/body', function(req,res) {
  console.log(req.body);
  res.end("SUCCESS")
})

app.get('/swapi', function(req,res) {

  var options = { method: 'GET',
    url: 'http://swapi.co/api/planets/',
  headers: {}
  }
  request(options, function (error, response, body) {
   if (error) throw new Error(error);
   console.log(body);
   res.end(body)
  });

})

app.get('/google', function(req,res) {
  request('https://google.com', function(error, response, body) {
    res.end(body)
  })
})

app.listen(8888, function() {
  console.log("Server is Started")
})
