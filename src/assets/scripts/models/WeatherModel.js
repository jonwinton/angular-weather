/*jshint camelcase:false */ // remove camelcase because of api responses
/**
 * @fileOverview
 * WeatherModel Declaration File
 *
 * @version 1.0
 */
define(function(require, exports, module) { // jshint ignore:line
    'use strict';

    var angular = require('angular');
    var BaseModel = require('./BaseModel');

    /**
     * WeatherModel definition
     *
     * @class WeatherModel
     * @constructor
     */
    var WeatherModel = function(initialModel) {
        BaseModel.call(this, initialModel);
    };

    WeatherModel.prototype = Object.create(BaseModel.prototype);
    WeatherModel.prototype.constructor = WeatherModel;

    /**
     * Output serializable version of model data
     *
     * @method toJSON
     * @returns {Object}
     */
    WeatherModel.prototype.toJSON = function() {
        return {};
    };

    /**
     * Convert serializable data to model properties
     *
     * @method fromJSON
     * @param {Object} modelData Data to read from
     */
    WeatherModel.prototype.fromJSON = function(modelData) {

        this.data = modelData;
    };


    return WeatherModel;
});
