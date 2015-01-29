/**
 * @fileOverview
 * AutocompleteFactory Declaration File
 *
 * @version 1.0
 */
define(function(require, exports, module) { // jshint ignore:line
    'use strict';

    var AutocompleteModel = require('models/AutocompleteModel');

    return ['$http', function($http){

        var AutocompleteFactory = function() {};

        // Alias prototype
        var proto = AutocompleteFactory.prototype;

        proto.queryAutocomplete = function(query) {
            var endpoint = 'http://autocomplete.wunderground.com/aq?query=' + query + '&cb=JSON_CALLBACK';
            return $http.jsonp(endpoint)
                .then(function(response){
                    return new AutocompleteModel(response.data.RESULTS);
                });
        };

        return new AutocompleteFactory();
    }];


});