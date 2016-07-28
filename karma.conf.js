'use strict';

// Karma configuration
// Generated on Wed Jul 20 2016 18:57:18 GMT-0500 (CDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'browserify'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'dist/bundle.js',
      'tests/*.js'
    ],


    // list of files to exclude
    exclude: [
      'karma.conf.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'tests/*.js': ['browserify'],
      // 'src/js/controller/*.js': ['browserify']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],
    // specReporter: {
    //     maxLogLines: 5,         // limit number of lines logged per test
    //     suppressErrorSummary: true,  // do not print error summary
    //     suppressFailed: false,  // do not print information about failed tests
    //     suppressPassed: false,  // do not print information about passed tests
    //     suppressSkipped: true,  // do not print information about skipped tests
    //     showSpecTiming: false // print the time elapsed for each spec
    //   },
    //   plugins: ["karma-spec-reporter"],
    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // you can define custom flags
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // browserify configuration
    browserify: {
      watch: true,
      debug: true,
      transform: [ 'brfs', 'browserify-shim' ]
    }
  });
};
