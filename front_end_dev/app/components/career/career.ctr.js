(function(){
    'use strict';
    angular
        .module('tjcccApp')
        .controller('careerController', careerController);
    
    function careerController ($scope){
        $scope.test = 'hello careerController!';
        console.log('entering career Controller');
    }
})();