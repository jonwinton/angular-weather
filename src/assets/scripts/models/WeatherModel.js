/*jshint camelcase:false */ // remove camelcase because of api responses
/**
 * @fileOverview
 * GroupModel Declaration File
 *
 * @version 1.0
 */
define(function(require, exports, module) { // jshint ignore:line
    'use strict';

    var angular = require('angular');
    var BaseModel = require('./BaseModel');

    /**
     * GroupModel definition
     *
     * @class GroupModel
     * @constructor
     */
    var GroupModel = function(initialModel) {
        BaseModel.call(this, initialModel);
    };

    GroupModel.prototype = Object.create(BaseModel.prototype);
    GroupModel.prototype.constructor = GroupModel;

    /**
     * Output serializable version of model data
     *
     * @method toJSON
     * @returns {Object}
     */
    GroupModel.prototype.toJSON = function() {
        return {};
    };

    /**
     * Convert serializable data to model properties
     *
     * @method fromJSON
     * @param {Object} modelData Data to read from
     */
    GroupModel.prototype.fromJSON = function(modelData) {
        console.log(modelData);

        this.data = modelData;
    };


    return GroupModel;
});
