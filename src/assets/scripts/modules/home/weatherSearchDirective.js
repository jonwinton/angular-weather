define(function(require, exports, module) { // jshint ignore:line
    'use strict';

    var CONSTANTS = {
        QUERY_LENGTH: 2
    };

    return [function() {
            return {
                restrict: 'A',
                controller: 'HomeController',
                link: function(scope, element, attrs, ctrl) {
                    element.bind('input', function(){
                        var inputValue = element.val();
                        if (inputValue.length >= CONSTANTS.QUERY_LENGTH) {
                            ctrl.fireAutocomplete(inputValue);
                        }
                    });
                }
            };
        }
    ];
});
