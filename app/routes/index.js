'use strict';

exports = module.exports = function( router, passport ) {
    router.get( '/', function( req, res ) {
        res.json({ home: true });
    })
    .get( '/profile', function( req, res ) {
        res.json({ profile: true });
    });
};