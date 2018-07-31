var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
    var options = {
      url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
      headers: {
        'User-Agent': 'request'
      }
    };
  
    request(options, function(err, res, body) {
      cb(err, body);
      curl -i -H 'Authorization: token YOUR_TOKEN_HERE' https://api.github.com/repos/jquery/jquery/contributors
    });
  }
