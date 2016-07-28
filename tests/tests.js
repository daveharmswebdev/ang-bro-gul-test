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
