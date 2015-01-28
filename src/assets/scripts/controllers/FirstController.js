define(function(require, exports, module) { // jshint ignore:line
    'use strict';

    var FirstController = function($scope){
        $scope.message = 'hey i finally figured it out... somehow';
        $scope.toggle = true;
    };

    FirstController.$inject = ['$scope'];

    return FirstController;
});
