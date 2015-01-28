define(function(require, exports, module) { // jshint ignore:line
    'use strict';

    var angular = require('angular');
    require('ui-router');
    require('modules/index');


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

                $urlRouterProvider
                    .when('', '/')
                    .otherwise('/404');

                $stateProvider.state('home', {
                    url: '/',
                    template: require('text!../../templates/home/home.html'),
                    controller: 'HomeController'
                });

                $stateProvider.state('404', {
                    url: '/404',
                    template: require('text!../../templates/404/404.html'),
                    controller: function(){
                        console.log('404 Lyfe');
                    }
                });


        }]);


        // Bootstrap app to the document
        angular.element(document).ready(function() {
            angular.bootstrap(document, [appModule.name]);
        });

    //     var routes = {
    //     // home
    //     'home': {
    //         url: '/'
    //     },
    //     'farms.crop.activity': {
    //         url: ''
    //     },
    //     'farms.crop.weather': {
    //         url: '/weather'
    //     },
    //     'farms.crop.planting': {
    //         url: '/planting'
    //     },
    //     'farms.crop.nutrients': {
    //         url: '/nutrients'
    //     },
    //     'farms.crop.pests': {
    //         url: '/pests'
    //     },
    //     'farms.crop.harvest': {
    //         url: '/harvest'
    //     },
    //     'farms.crop.growth': {
    //         url: '/growth'
    //     },
    //     'farms.crop.scouting': {
    //         url: '/scouting'
    //     }
    // };

    // var routeName;

    // for (routeName in routes) {

    //     if (routes.hasOwnProperty(routeName)) {
    //         console.log(routeName);
    //         console.log(routes[routeName]);
    //         // $stateProvider.state(routeName, routes[routeName]);
    //     }
    // }

    };

    return App;

});