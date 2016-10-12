(function(){
    'use strict';
    angular
        .module('tjcccApp')
        .controller('blogController', blogController);
    
    function blogController ($scope){
        $scope.test = 'hello blogController!';
        console.log('entering blog Controller');
    }
})();