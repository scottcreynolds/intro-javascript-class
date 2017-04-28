// express is a web server module. npm install express
const express = require('express')
// bodyParser is a response body parsing middleware. npm install body-parser
const bodyParser = require('body-parser')
// request is an AJAX library. npm install request
const request = require("request");

// create new instance of express application
const app = express()
// tell express to use body parser middleware
app.use(bodyParser.json());

//express route handler for GET /hello
app.get('/hello', function(req,res) {
  res.send("Hello!")
})

//express route handler for GET /goodbye
app.get('/goodbye', function(req,res) {
  res.send("Goodbye")
})

//express route handler for GET site root ("/")
app.get('/', function(req,res) {
  res.send("go somewhere better")
})

//express route handler for POST /body
app.post('/body', function(req,res) {
  console.log(req.body); //req.body provided by body-parser
  res.end("SUCCESS")
})

app.get('/swapi', function(req,res) {
  var options = {
    method: 'GET',
    url: 'http://swapi.co/api/planets/',
    headers: {}
  }

  request(options, function (error, response, body) {
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
