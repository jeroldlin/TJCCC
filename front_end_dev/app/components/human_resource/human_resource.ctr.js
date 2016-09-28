(function(){
    'use strict';

    angular
        .module('tjcccApp')
        .controller('humanResourceController', humanResourceController);
    
    function humanResourceController ($scope){
        $scope.test = 'hello human_resource!';
    }
})();