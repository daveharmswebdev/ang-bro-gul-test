'use strict';

var app = require('angular').module('app');

app.service('TestService', require('./testService'));
app.service('FirebaseService', require('./firebaseService'));
