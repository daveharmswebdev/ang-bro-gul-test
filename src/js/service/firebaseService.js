'use strict';

let FBCreds = require('../values/firebaseCreds');
let firebase = require('firebase');

module.exports = function() {
  var config = {
    apiKey: FBCreds.apiKey,
    authDomain: FBCreds.authDomain,
    databaseURL: FBCreds.databaseURL,
    storageBucket: FBCreds.storageBucket
  };
  this.FBInstance = firebase.initializeApp(config);
};
