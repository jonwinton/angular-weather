define(function(require, exports, module) { // jshint ignore:line
    'use strict';

    var angular = require('angular');

    /**
     * @ngdoc controller
     * @name clearpath.modules.authentication.controller:HomeController
     *
     * @description
     * Handles scope/service interaction on user profile
     *
     */
    var HomeController = function(
        WeatherFactory
    ) {
        this._weatherFactory = WeatherFactory;

        this.init();
    };

    /**
     * Array of dependancies to inject
     *
     * @property $inject
     * @type {string[]}
     */
    HomeController.$inject = [
        'WeatherFactory'
    ];

    var proto = HomeController.prototype;

    /**
     * Initialize any behavior on creation
     *
     * @method init
     * @private
     * @chainable
     */
    proto.init = function() {
        console.log(this);

        var success = function(response) {
            console.log(response);
        };

        var fail = function(error) {
            console.log(error);
        };

        this._weatherFactory.getWeather()
                            .then(function(response){
                                console.log(response);
                            });


        return this;
    };





    return HomeController;

});
