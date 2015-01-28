/**
 * @fileOverview
 * BaseModel Declaration File
 *
 * @version 1.0
 */
define(function(require, exports, module) { // jshint ignore:line
    'use strict';

    /**
     * BaseModel definition
     *
     * @class BaseModel
     * @param {Object} initialModel Initial Data to convert into model
     * @constructor
     */
    var BaseModel = function(initialModel) {
        this.fromJSON(initialModel || {});
    };

    /**
     * Output serializable version of model data
     *
     * @method toJSON
     * @returns {Object}
     */
    BaseModel.prototype.toJSON = function() {
        throw new Error('BaseModel.toJSON: Models must implement toJSON');
    };

    /**
     * Convert serializable data to model properties
     *
     * @method fromJSON
     * @param {Object} modelData Data to read from
     */
    BaseModel.prototype.fromJSON = function(modelData) {
        throw new Error('BaseModel.fromJSON: Models must implement fromJSON');
    };


    /**
     * Format date to server convention
     *
     * @method _formatDate
     * @param {Object} modelData Data to read from
     */
    BaseModel.prototype.formatDate = function(date) {
        return date ? [
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate()
        ].join('-') : undefined;
    };


    return BaseModel;

});
