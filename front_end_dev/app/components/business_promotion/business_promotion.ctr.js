(function(){
    'use strict';

    angular
        .module('tjcccApp')
        .controller('businessPromotionController', businessPromotionController);
    
    function businessPromotionController ($scope){
        console.log('entering bizPromoCtrl');
        $scope.test = 'hello businessPromotionController!';
    }
})();