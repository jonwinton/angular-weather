define(function(require, exports, module) { // jshint ignore:line
    'use strict';

    var angular = require('angular');

    /**
     * @ngdoc overview
     * @name weather.modules.home
     *
     * @description
     * Handles company account administration
     *
     */
    var mod = angular.module('weather.modules.home', []);

    mod.controller('HomeController', require('./homeController'));
    mod.directive('weatherSearch', require('./weatherSearchDirective'));

    return mod.name;
});
