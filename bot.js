//adapted from github.com/flint-bot

const Flint = require('node-flint');
const webhook = require('node-flint/webhook');
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request')
const app = express();
app.use(bodyParser.json());

// flint options - change these
var config = {
  webhookUrl: 'https://13c6ab63.ngrok.io/bot',
  token: 'YOUR BOT TOKEN HERE',
  port: 8888
};

// init flint
var flint = new Flint(config);
flint.start();

// say hello
flint.hears('/hello', function(bot, trigger) {
  bot.say('Hello %s!', trigger.personDisplayName);
});

flint.hears('help', function(bot, trigger) {
  bot.say(flint.showHelp('here is how to use me', 'end'))
})

flint.hears('starwars', function(bot, trigger) {
  var options = { method: 'GET',
    url: 'http://swapi.co/api/planets/',
  headers: {}
  }
  request(options, function (error, response, body) {
    bot.say("markdown",body)
  });
})

// define express handler for incoming webhooks from cisco spark
app.post('/bot', webhook(flint));

// start express server
var server = app.listen(config.port, function () {
  flint.debug('Flint listening on port %s', config.port);
});

// gracefully shutdown (ctrl-c)
process.on('SIGINT', function() {
  flint.debug('stoppping...');
  server.close();
  flint.stop().then(function() {
    process.exit();
  });
});
