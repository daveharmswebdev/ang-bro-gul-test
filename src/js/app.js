'use strict';

require('jQuery');
require('angular');
require('angular-route');
// require('firebase/app');
let app = angular.module('app', ['ngRoute']);

// this where the browserification happens
// linked to these directories
// each of these directories have an index.js
require('./controller');
require('./factory');
require('./service');

app.constant('FirebaseCreds', require('./values/firebaseCreds'));

app.config(function($routeProvider) {
  // firebase.initializeApp(authConfig);
  $routeProvider
  .when('/', {
    templateUrl: '../views/main.html',
    controller: 'MainController'
  })
  .when('/login', {
    templateUrl: '../views/login.html',
    controller: 'LoginController'
  })
  .when('/main', {
    templateUrl: '../views/main.html',
    controller: 'MainController'
  })
  .when('/movies', {
    templateUrl: '../views/movies.html',
    controller: 'MoviesController'
  })
  .otherwise({
    redirectTo: '/main'
  });
});
