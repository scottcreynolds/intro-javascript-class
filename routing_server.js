const http = require("http")
const request = require('request')
const port = 8888

function hiHandler(req, res) {
  res.end("Hi!")
}

function byeHandler (req,res) {
  res.end("Bye!")
}

function apiHandler (req, res) {
  let opts = {url: 'https://api.github.com/users/octocat/repos',
              headers: {
                'User-Agent': 'request'
              },
              json: true
            }
  request(opts, function(err, resp, body) {
    res.end(JSON.stringify(body))
  })
  // var request = require('request');
  // request('http://www.example.com', function(err, resp, body) {
    // console.log(body);
// });
}

function webHandler(req, res) {
  let site = `https://google.com`
  request(site, function(err, resp, body) {
    // res.set('Content-Type', 'text/html');
    res.end(body)
  })
}

function requestHandler(req, res) {
  console.log(req.url)
  console.log(req.headers)
  //VERY basic routing handler but this is the gist
  switch(req.url) {
    case "/hi":
      //pass along request and response so we can get data
      hiHandler(req, res)
      break
    case "/bye":
      byeHandler(req, res)
      break
    case "/api":
      apiHandler(req, res)
      break
    case "/google":
      webHandler(req, res)
      break
    default:
      res.end("Unhandled Route")
  }
  // response.end("\nRequest Complete")
}

// refactor
// need to handle response.end in the thing

// create server and use the handler function as callback
const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if(err) {
    return console.log('something bad happened', err)
  }

  console.log(`server listening on ${port}`)
})
