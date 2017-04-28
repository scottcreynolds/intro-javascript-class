//basic HTTP server in default node.js libraries

// require 'http', which is built-in to node
const http = require("http")

function helloHandler(req,res) {
  res.writeHead(200, {"Content-Type": "text/plain"})
  res.write("Hello!")
}

function goodbyeHandler(req,res) {
  res.writeHead(200, {"Content-Type": "text/plain"})
  res.write("Goodbye!")
}

function unhandledRouteHandler(req, res) {
  res.writeHead(404, {"Content-Type": "text/plain"})
  res.write("Route not Handled")
}

http.createServer(function(req, res) {
  let url = req.url.toLowerCase()
  switch(url) {
    case "/hello":
      helloHandler(req,res)
      break;
    case "/goodbye":
      goodbyeHandler(req,res)
      break;
    default:
      unhandledRouteHandler(req,res)
  }
  res.end();
}).listen(8888);
