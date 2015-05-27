'use strict';

var mainRoutes = require( './mainRoutes' );

exports = module.exports = function indexRoutes( router ) {
  router.get( '/', mainRoutes.index );
  router.get( '/profile', mainRoutes.profile );
};