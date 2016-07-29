'use strict';

var app = require('angular').module('app');


app.factory('TestFactory', require('./testFactory'));
app.factory('OmdbFactory', require('./omdbFactory'));
app.factory('AuthFactory', require('./authFactory'));
