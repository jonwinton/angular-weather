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
        $scope,
        WeatherFactory,
        AutocompleteFactory
    ) {
        this._scope = $scope;
        this._weatherFactory = WeatherFactory;
        this._autocompleteFactory = AutocompleteFactory;
    };

    /**
     * Array of dependancies to inject
     *
     * @property $inject
     * @type {string[]}
     */
    HomeController.$inject = [
        '$scope',
        'WeatherFactory',
        'AutocompleteFactory'
    ];

    // Alias prototype
    var proto = HomeController.prototype;

    proto.retrieveWeather = function() {
        this._weatherFactory.getWeather()
            .then(function(modeledData){
                console.log(modeledData);
            });
    };

    proto.fireAutocomplete = function(query) {
        var self = this;
        var success = function(response) {
            self._scope.cities = response.cities;
        };

        var error = function(error) {
            console.log(error);
        };

        this._autocompleteFactory.queryAutocomplete(query)
            .then(success, error);
    };

    proto.test = function() {
        console.log('called from directive');
    };




    return HomeController;

});
