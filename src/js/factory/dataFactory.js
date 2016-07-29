'use strict';

module.exports = function(FirebaseService) {
  let firebase = FirebaseService.FBInstance;

  let getStuff = function() {
    let stuff = firebase.database().ref('items');
    stuff.on('value', function(data) {
      console.log(data.val());
    });
  };

  return {
    getStuff
  };
};
