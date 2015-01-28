define(function(require, exports, module) { // jshint ignore:line
    'use strict';

    var angular = require('angular');

    /**
     * Route Definitions
     * @type {Object}
     */
    var routes = {
        'home': {
            url: '/',
            template: require('text!../../templates/home/home.html'),
            controller: 'HomeController'
        },
        '404': {
            url: '/404',
            template: require('text!../../templates/404/404.html'),
            controller: function(){
                console.log('404 Lyfe');
            }
        }
    };

    return routes;

});
