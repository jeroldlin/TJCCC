(function () {
    'use strict';

    angular
        .module('tjcccApp')
        .directive('header', header);
        
        function header() {
            return {
                restirect: 'A',
                templateUrl: 'app/shared/header/header.tpl.html',
                controller: headerController,
                controllerAs: 'header'
            }
        }

        function headerController ($scope){
            $scope.test = 'hello world';
        }
})();