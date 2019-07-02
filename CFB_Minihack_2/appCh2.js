const express = require('express')
const app = express()
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  bearer_token: process.env.TWITTER_BEARER_TOKEN
});

app.get('/', function(req, res) {
  var params = {screen_name: 'adam_ayd', count: 3};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      res.send('<h1>Most Recent tweets from ' + tweets[0]["user"]["name"] + '</h1><p>' + tweets[0]["text"] + '</p><p>' + tweets[1]["text"] + '</p><p>' + tweets[2]["text"] + '</p>');
    }
  });
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
