const http = require("http")
const request = require('request')
const port = 8888

function hiHandler(req, res) {
  response.end("Hi!")
}

function byeHandler (request,response) {
  response.end("Bye!")
}

function apiHandler (request, response) {
  let opts = {url: 'https://api.github.com/users/octocat/repos',
              headers: {
                'User-Agent': 'request'
              },
              json: true
            }
  request(opts, function(err, resp, body) {
    response.end(JSON.stringify(body))
  })
}

function requestHandler(request, response) {
  console.log(request.url)
  console.log(request.headers)
  //VERY basic routing handler but this is the gist
  switch(request.url) {
    case "/hi":
      //pass along request and response so we can get data
      hiHandler(request, response)
      break
    case "/bye":
      byeHandler(request, response)
      break
    case "/api":
      apiHandler(request, response)
      break
    default:
      response.end("Unhandled Route")
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
