define(function(require, exports, module) { // jshint ignore:line
    'use strict';

    var angular = require('angular');
    require('ui-router');
    require('modules/index');

    /**
     * Routes for the application to be iterated over
     *
     * @type {Object}
     */
    var ROUTES = require('./routes');


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

        var appModule = angular.module('weather', [
            'ui.router',
            'weather.modules'
        ]);

        appModule.config([
            '$stateProvider',
            '$urlRouterProvider',
            '$httpProvider',
            function(
                $stateProvider,
                $urlRouterProvider,
                $httpProvider
            ) {

                // Register route aliases
                $urlRouterProvider
                    .when('', '/')
                    .otherwise('/404');

                // Iterate over all of the routes in the ROUTES
                // object and inject them into the app via the
                // for loop. To add routes visit routes.js in
                // this director and add the appropriate information
                for (var route in ROUTES) {
                    if (ROUTES.hasOwnProperty(route)) {
                        $stateProvider.state(route, ROUTES[route]);
                    }
                }

        }]);

        // Bootstrap app to the document
        angular.element(document).ready(function() {
            angular.bootstrap(document, [appModule.name]);
        });

    };

    return App;

});