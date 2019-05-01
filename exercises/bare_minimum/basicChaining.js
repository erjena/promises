/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');


var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  return new Promise (
    function(resolve, reject) {
      fs.readFile(readFilePath, 'utf8', function(err, content) {
        if (err) {
          reject(err);
          return;
        }
        content = content.split('\n');
        var options = {
          url: `https://api.github.com/users/${content[0]}`,
          headers: {
            'User-Agent': 'test'
          }
        };
        request(options, function(err, response, body) {
          if (err) {
            reject(err);
            return;
          }
          fs.writeFile(writeFilePath, body, (err) => {
            if (err) {
              reject(err);
              return;
            }
            resolve();
          });
        });
      });
    }
  );
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};