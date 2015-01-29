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
        /**
         * A boolean descriptor of if there are
         * search results or not.
         *
         * @type {Boolean}
         * @public
         */
        this._scope.noResults = false;
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

    /**
     * Fires a query to the Autocomplete Factory
     * then applies the returned cities to the scope
     * to be displayed to the user.
     *
     * @param  {String} query  A string representing the query the user types in.
     */
    proto.fireAutocomplete = function(query) {
        // Store context of 'this'
        var self = this;

        // Success function
        var success = function(response) {
            if (response.cities.length === 0) {
                console.log('womp');
                self._scope.noResults = true;
            }
            self._scope.cities = response.cities;
        };

        // Error function
        var error = function(error) {
            console.log(error);
        };

        this._autocompleteFactory.queryAutocomplete(query)
            .then(success, error);
    };


    return HomeController;

});
