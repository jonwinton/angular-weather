/*jshint camelcase:false */ // remove camelcase because of api responses
/**
 * @fileOverview
 * Autocomplete Declaration File
 *
 * @version 1.0
 */
define(function(require, exports, module) { // jshint ignore:line
    'use strict';

    var angular = require('angular');
    var BaseModel = require('./BaseModel');

    /**
     * Autocomplete definition
     *
     * @class Autocomplete
     * @constructor
     */
    var Autocomplete = function(initialModel) {
        BaseModel.call(this, initialModel);
    };

    Autocomplete.prototype = Object.create(BaseModel.prototype);
    Autocomplete.prototype.constructor = Autocomplete;

    /**
     * Output serializable version of model data
     *
     * @method toJSON
     * @returns {Object}
     */
    Autocomplete.prototype.toJSON = function() {
        return {};
    };

    /**
     * Convert serializable data to model properties
     *
     * @method fromJSON
     * @param {Object} modelData Data to read from
     */
    Autocomplete.prototype.fromJSON = function(modelData) {
        this.cities = modelData.map(function(item){
            return {
                name: item.name,
                url: item.l
            };
        });
        this.data = modelData;
    };


    return Autocomplete;
});
