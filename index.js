'use strict';

var express = require( 'express' );
var session = require( 'express-session' );

var router = express.Router();
var app = express();
var port = process.env.PORT || 3000;

require( './app/routes' )( router );

app.use( session({
    secret: '$3cr3tK&y',
    resave: true,
    saveUninitialized: true
}));

app.use( '/', router );

app.listen( port );
console.log( 'The magic happens on http://localhost:%d', port );