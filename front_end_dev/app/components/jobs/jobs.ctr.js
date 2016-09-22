(function(){
    'use strict';
    angular
        .module('tjcccApp')
        .controller('jobsController', jobsController);
    
    function jobsController ($scope){
        $scope.test = 'hello jobsController!';
        console.log('entering jobs Controller');
    }
})();