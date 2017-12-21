var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../web/archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
  console.log('called');
  var contents = [];
  contents.push(fs.readFileSync(exports.paths.list));
  contents = Buffer.concat(contents).toString();
  return contents;
};

exports.isUrlInList = function(url, callback) {
};

exports.addUrlToList = function(url, callback) {
  console.log('list ', exports.paths.list);

  var toAppend = url + '\n';
  fs.appendFile(exports.paths.list, toAppend, function() {
    console.log('finished appending ' + url + ' to ' + exports.paths.list);
  });
};

exports.isUrlArchived = function(url, callback) {
  // depends how we handle sites.txt - maybe we just keep a separate list of requested URLs which have been archived, or...
};

exports.downloadUrls = function(urls) {
// check list for requested url that haven't been downloaded
  // download them
};







