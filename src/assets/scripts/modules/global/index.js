define(function(require, exports, module) { // jshint ignore:line
    'use strict';

    var angular = require('angular');

    /**
     * @ngdoc overview
     * @name weather.modules.global
     *
     * @description
     * Global components
     *
     */
    var mod = angular.module('weather.modules.global', []);

    mod.factory('WeatherFactory', require('./weatherFactory'));

    return mod.name;

});
