'use strict';

module.exports = function($scope, OmdbFactory) {
  $scope.search = function() {
    console.log('search', $scope.query);
    OmdbFactory.searchOMDB($scope.query)
    .then(function(results) {
      console.log(results);
      $scope.movies = results;
    })
    .catch(function(error) {
      console.log(error);
    });
  };
};
