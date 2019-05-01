/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
pluckFirstLineFromFile = (filePath, callback) => {
  fs.readFile(filePath, 'utf8', function(err, content) {
    if (err) {
      callback(err);
    } else {
      content = content.split('\n');
      callback(err, content[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
getStatusCode = (url, callback) => {
  request(url, function(err, response) {
    if (err) {
      callback(err);
    } else {
      callback(err, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};