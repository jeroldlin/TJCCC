(function () {
    'use strict';

    angular
        .module('tjcccApp')
        .directive('footer', footer);
        
        function footer() {
            return {
                restirect: 'A',
                templateUrl: 'app/shared/footer/footer.tpl.html',
                controller: footerController,
                controllerAs: 'footer'
            }
        }

        function footerController ($scope){
            $scope.test = 'hello world';
        }
})();