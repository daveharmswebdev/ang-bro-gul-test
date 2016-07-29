'use strict';

module.exports = function($scope, AuthFactory) {
  $scope.credSubmit = function() {
    let email = $scope.cred.email;
    let password = $scope.cred.password;
    console.log(email,password);
    AuthFactory.createAccount(email, password).
    then(function(result) {
      console.log(result);
    });
  };
};
