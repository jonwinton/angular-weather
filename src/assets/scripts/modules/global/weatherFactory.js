/**
 * @fileOverview
 * WeatherFactory Declaration File
 *
 * @version 1.0
 */
define(function(require, exports, module) { // jshint ignore:line
    'use strict';

    var WeatherModel = require('models/WeatherModel');

    return ['$http', function($http){
        var WeatherFactory = function() {
            this.test = 'totes testing';
        };

        var proto = WeatherFactory.prototype;

        proto.getWeather = function() {
            var endpoint = '//api.wunderground.com/api/7d7726dd54bbc10e/conditions/q/CA/San_Francisco.json';
            return $http.get(endpoint)
                .then(function(response){
                    return new WeatherModel(response.data);
                });
        };

        return new WeatherFactory();
    }];


});