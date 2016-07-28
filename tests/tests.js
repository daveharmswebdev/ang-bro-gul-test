'use strict';

describe('sorting the list of users', function() {

  let testService;

  beforeEach(function() {
    angular.module('app');
  });

  beforeEach(inject(function() {
    let $injector = angular.injector(['app']);
    testService = $injector.get('TestService');
  }));

  it('is very true', function(){
    let output = testService.getX();
    expect(output).toBe(0);
  });
});

describe('user factory', function() {
  let TF;

  // Load our api.users module
  beforeEach(angular.mock.module('app'));

  // Set our injected Users factory (_Users_) to our local Users variable
  beforeEach(inject(function(_TestFactory_) {
    TF = _TestFactory_;
  }));

  // A simple test to verify the Users service exists
  it('should exist', function() {
    expect(TF).toBeDefined();
  });
  it('should have a function named getSome', function(){
    expect(TF.getSome).toBeDefined();
    let some = TF.getSome(3);
    expect(some).toEqual(15);
  });
  it('should be able to add numbers in an array', function() {
    let xxx = [3,4,5,6];
    expect(TF.addArray).toBeDefined();
    let testSum = TF.addArray(xxx);
    expect(testSum).toEqual(18);
  })

});
