(function () {
    'use strict';

    angular
        .module('tjcccApp')
        .controller('eventsController', eventsController);

    function eventsController($scope) {
        $scope.test = 'hello eventsController!';
    }
})();