/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function (filePath) {
  return new Promise(
    function (resolve, reject) {
      fs.readFile(filePath, 'utf8', function (err, content) {
        if (err) {
          reject(err);
          return;
        }
        content = content.split('\n');
        resolve(content[0]);
      });
    }
  );
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function (url) {
  return new Promise (
    function (resolve, reject) {
      request(url, function(err, response) {
        if (err) {
          reject(err);
          return;
        } 
        resolve(response.statusCode);
      });
    }
  );
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
