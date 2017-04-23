//adapted from github.com/flint-bot

const Flint = require('node-flint');
const webhook = require('node-flint/webhook');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

// flint options - change these
var config = {
  webhookUrl: 'http://myserver.com/bot',
  token: '',
  port: 8888
};

// init flint
var flint = new Flint(config);
flint.start();

// say hello
flint.hears('/hello', function(bot, trigger) {
  bot.say('Hello %s!', trigger.personDisplayName);
});

// define express path for incoming webhooks
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
