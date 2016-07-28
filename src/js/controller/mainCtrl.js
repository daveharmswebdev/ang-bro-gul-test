'use strict';

module.exports = function($scope, TestFactory) {
  $scope.message = "Angular Works!!! And I am so happy";
  $scope.message2 = "A lot of work tomorrow";
  console.log($scope.message);
  console.log($scope.message2);

  $scope.test = function() {
    console.log('test', TestFactory.getTestArray());
  }

  $scope.testName = function() {
    console.log('testName', $scope.name);
    TestFactory.setTestArray($scope.name);
  };
};
