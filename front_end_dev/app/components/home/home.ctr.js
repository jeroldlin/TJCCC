(function(){
    'use strict';

    angular
        .module('tjcccApp')
        .controller('homeController', homeController);
    
    function homeController ($scope){
        $scope.test = 'hello homeController!';
    }
})();