#!/usr/bin/env node

var password = process.argv.slice(2)[0];

var botkit = require('botkit');

var controller = botkit.slackbot({
  debug: false
});

controller.spawn({
  token: password
}).startRTM();

controller.hears('hello', 'direct_message,direct_mention,mention', function(bot, message){
  bot.reply(message, "what'll it be?");
});
