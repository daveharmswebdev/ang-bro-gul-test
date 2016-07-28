'use strict';

let testArray = ['paul', 'george', 'john', 'ringo'];

// exports out as TestFactory
module.exports = function() {

  let getTestArray = function() {
    return testArray;
  };

  let setTestArray = name => testArray.push(name);

  let getSome = (arg) => 5 * arg;

  let addArray = function(arr) {
    let sum = 0;
    for (let x = 0; x < arr.length; x++) {
        sum += arr[x];
    }
    return sum;
  };

  return {
    getTestArray,
    setTestArray,
    getSome,
    addArray
  };

};
