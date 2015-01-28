define(function(require, exports, module) { // jshint ignore:line
    'use strict';

    var angular = require('angular');
    //var firstController = require('controllers/FirstController');

    /**
     * Initial application setup. Runs once upon every page load.
     *
     * @class App
     * @constructor
     */
    var App = function() {
        this.init();
    };

    var proto = App.prototype;

    /**
     * Initializes the application and kicks off loading of prerequisites.
     *
     * @method init
     * @private
     */
    proto.init = function() {

        var app = angular.module('app', []);

        app.controller('FirstController', require('controllers/FirstController'));

        angular.element(document).ready(function() {
            angular.bootstrap(document, [app.name]);
        });

    };

    return App;

});