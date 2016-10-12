(function(){
    'use strict';
    angular
        .module('tjcccApp')
        .controller('aboutController', aboutController);
    
    function aboutController ($scope){
        $scope.test = 'hello aboutController!';
        console.log('entering about Controller');
    }
})();