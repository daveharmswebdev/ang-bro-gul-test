# Test Repo for Angular/Browserify/gulp

This repo is for testing modularizing angular files.

It borrows heavily from this [blog written by Bastian Krol](https://blog.codecentric.de/en/2014/08/angularjs-browserify/).

The idea is to have one app.js (or index.js, or main.js) file, like all browserify projects:

```javascript
'use strict';

let angular = require('angular');
let app = angular.module('app', []);

require('./controller');
```

which requires an index.js in the controller directory residing next to it, which requires other modules. Example:

```javascript
'use strict';

var app = require('angular').module('app');


app.controller('MainController', require('./mainCtrl'));
```

here's that MainController:

```javascript
'use strict';

module.exports = function($scope) {
  $scope.message = "Angular Works!!!";
  console.log($scope.message);
};
```

If you clone and install don't forget to `npm install` and `gulp`.
