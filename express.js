'use strict';

// Module dependencies
var express    = require('express'),
  bodyParser   = require('body-parser');

module.exports = function (app) {

  // Configure Express
  app.set('view engine', 'ejs');
  //require('ejs').delimiter = '$';
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // Setup static public directory
  app.use(express.static(__dirname + '/../public'));

  // Only loaded when running in Bluemix
  if (process.env.VCAP_APPLICATION)
    require('./security')(app);

};
