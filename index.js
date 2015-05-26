'use strict';

var express = require( 'express' );
var router = express.Router();
var app = express();
var port = process.env.PORT || 3000;

require( './app/routes' )( router );
app.use( '/', router );

app.listen( port );
console.log( 'The magic happens on http://localhost:%d', port );