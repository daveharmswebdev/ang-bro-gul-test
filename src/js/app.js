'use strict';

require('angular');
require('angular-route');
let app = angular.module('app', ['ngRoute']);

// this where the browserification happens
require('./controller');
require('./factory');

app.config(function($routeProvider) {

  $routeProvider
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
