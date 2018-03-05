// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const path = require('path');

module.exports = function (config) {
  config.set({
    //basePath: '',
    basePath: './',
    frameworks: ['jasmine', '@angular/cli'],
    files: [
      // paths loaded by Karma
      //{pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', included: true, watched: true},
      //{pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true},
      //{pattern: 'node_modules/rxjs/bundles/Rx.js', included: true, watched: true},
      //{pattern: 'node_modules/angular2/bundles/angular2.dev.js', included: true, watched: true},
      //{pattern: 'node_modules/angular2/bundles/testing.dev.js', included: true, watched: true},
      //{pattern: 'node_modules/angular2/bundles/http.dev.js', included: true, watched: true},
      //{pattern: 'karma-test-shim.js', included: true, watched: true},

      // paths loaded via module imports
      //{pattern: 'dist/**/*.js', included: true, watched: true},

      {pattern: 'src/**/*.spec.ts', included: true, watched: false},

      // paths to support debugging with source maps in dev tools
      //{pattern: 'dist/**/*.js', included: false, watched: false},
      //{pattern: 'dist/**/*.js.map', included: false, watched: false}
    ],
    // proxied base paths
    proxies: {
      // required for component assests fetched by Angular's compiler
      //'/src/': '/base/src/'
    },
    plugins: [
      require('karma-jasmine'),
      require('karma-coverage'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-istanbul-threshold'),
      require('@angular/cli/plugins/karma')
    ],
    preprocessors: {
      //'src/**/!(*spec).js': ['coverage'],
      'src/app/**/!(*spec).ts': ['coverage']
   },
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly', 'json' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: [
      'progress', 
      'kjhtml', 
      'coverage',
      'coverage-istanbul',
      'istanbul-threshold'
    ],
    coverageReporter: {
      reporters:[
          { 
            type: "html", 
            dir: "./", 
            subdir: "coverage/html" ,
            includeAllSources: true
          }
      ]
    },
    coverageIstanbulReporter: {
      includeAllSources: true,
      reports: ['html', 'lcovonly', 'text-summary'],
      dir: path.join(__dirname, 'coverage/istanbul'),
      combineBrowserReports: true,
      fixWebpackSourcePaths: true,
      skipFilesWithNoCoverage: true,
      'report-config': {
        html: {
          subdir: 'html'
        }
      },
      thresholds: {
        emitWarning: false,
        global: {
          statements: 50,
          lines: 50,
          branches: 50,
          functions: 50
        },
        each: { // thresholds per file
          statements: 70,
          lines: 60,
          branches: 50,
          functions: 30,
          overrides: {
            'src/**/*.ts': {
              statements: 70
            }
          }
        }
      }
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
