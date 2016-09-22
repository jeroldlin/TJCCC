(function(){
    'use strict';

    angular
        .module('tjcccApp')
        .controller('organizationController', organizationController);
    
    function organizationController ($scope){
        $scope.test = 'hello organizationController!';
    }
})();