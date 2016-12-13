
'use strict';
"scripts": {
		"start": "node app.js"
	},

var express = require('express'),
    tradeoffAnalyticsConfig = require('./tradeoff-analytics-config');

var app = express();
app.use('/',express.static(__dirname + '/public'));

// For local development, copy your service instance credentials here, otherwise you may ommit this parameter
var serviceCredentials = {
  username: '01972d6a-39e0-4cc1-a005-c0a65c9ccd6e',
  password: 'fpxr41GXHGsN'
}
// When running on Bluemix, serviceCredentials will be overriden by the credentials obtained from VCAP_SERVICES
tradeoffAnalyticsConfig.setupToken(app, serviceCredentials); 

// to communicate with the service using a proxy rather then a token, add a dependency on "body-parser": "^1.15.0" 
// to package.json, and use:
// tradeoffAnalyticsConfig.setupProxy(app, serviceCredentials);

var port = process.env.VCAP_APP_PORT || 2000;
app.set('port', port);
http.createServer(app).listen(app.get('port'), function(){
console.log('Express server listening on port ' + app.get('port'));
});


