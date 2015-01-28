define(function(require, exports, module) { // jshint ignore:line
    'use strict';

    var angular = require('angular');

    angular.module('weather.modules', [
        require('./home/index')
        // add components here
    ]);

});
