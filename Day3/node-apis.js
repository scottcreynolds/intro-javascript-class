const http = require("http")
const port = 8888
const fetch = require('node-fetch')
const req = require('request')

const hiHandler = (request, response) => {
  response.write("Hi!")
}

const byeHandler = (request,response) => {
  response.write("Bye!")
}

const apiHandler = (request, response) => {
  let opts = {url: 'https://api.github.com/users/octocat/repos',
              headers: {
                'User-Agent': 'request'
              },
              json: true
            }
  // req(opts).then( data => {
  //   console.log(data)
  //   response.write(JSON.stringify(data))
  // }).catch( err => {
  //     console.log(err)
  //   })

  // request.pipe(req(opts, function(err, resp, body) {

    // console.log(err)
    // console.log(body)
    // return body
  // })).pipe(response)
  // req(opts, function(err, resp, body) {
  //   console.log(body)

  //   response.end(JSON.stringify(body))
  // })
  fetch('https://api.github.com/repos/jquery/jquery/commits')
   .then(resp => resp.json())
   .then(json => response.end(JSON.stringify(json)));
}

const requestHandler = (request, response) => {
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
