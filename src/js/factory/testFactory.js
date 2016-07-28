'use strict';

let testArray = ['paul', 'george', 'john', 'ringo'];

// exports out as TestFactory
module.exports = function() {

  let getTestArray = function() {
    return testArray;
  };

  let setTestArray = name => testArray.push(name);

  return {
    getTestArray,
    setTestArray
  };

};
