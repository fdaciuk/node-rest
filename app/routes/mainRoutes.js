'use strict';

exports.index = function indexRoute( req, res ) {
  res.json({ home: true });
};

exports.profile = function profileRoute( req, res ) {
  res.json({ profile: true });
};