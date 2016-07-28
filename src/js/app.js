'use strict';

require('jQuery');
require('angular');
require('angular-route');
let app = angular.module('app', ['ngRoute']);

// this where the browserification happens
require('./controller');
require('./factory');
require('./service');

app.config(function($routeProvider) {

  $routeProvider
  .when('/', {
    templateUrl: '../views/main.html',
    controller: 'MainController'
  });
  // .when('/main', {
  //   templateUrl: '../views/main.html',
  //   controller: 'MainController'
  // })
  // .when('/movies', {
  //   templateUrl: '../views/movies.html',
  //   controller: 'MoviesController'
  // })
  // .otherwise({
  //   redirectTo: '/main'
  // });
});
