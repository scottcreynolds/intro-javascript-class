const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Hello Express!')
})

app.post('/', function(req,res) {
  console.log(req.body);
  res.end("SUCCESS")
})

app.listen(8888, function() {
  console.log("Hello, Seattle, I'm listening")
})
