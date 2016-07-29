'use strict';


// require('firebase/auth');
// let currentUserId = null;

module.exports = function(FirebaseService) {
  let firebase = FirebaseService.FBInstance;

  let test = function() {
    return 0;
  };

  firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
      console.log('user logged in', user.uid);
    } else {
      console.log('no user logged in');
    }
  });

  let createAccount = function(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  };
  // let signIn = function(email, password) {
  //   return firebase.auth().signInWithEmailAndPassword(email, password);
  // };
  // let logout = function() {
  //   return firebase.auth().signOut();
  // };

  return {
    test,
    createAccount
    // signIn,
    // logout
  };
};
