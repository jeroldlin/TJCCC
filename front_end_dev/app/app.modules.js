'use strict';

angular
.module('tjcccApp', [
    'ui.router'
])

.config(function(
    $provide,
    $urlRouterProvider,
    $stateProvider,
    $httpProvider){
        $urlRouterProvider.otherwise('/error');

        $stateProvider
            .state('home',{
                url:'/home',
                templateUrl: 'app/components/home/home.tpl.html',
                controller: 'homeController as home'
            })
            .state('organization',{
                url:'/organization',
                templateUrl: 'app/components/organization/organization.tpl.html',
                controller: 'organizationController as organization'
            })
            .state('events',{
                url:'/events',
                templateUrl: 'app/components/events/events.tpl.html',
                controller: 'eventsController as events'
            })
            .state('jobs',{
                url:'/jobs',
                templateUrl: 'app/components/jobs/jobs.tpl.html',
                controller: 'jobsController as jobs'
            })
            
            .state('error',{
                url:'/error',
                templateUrl: 'app/components/error/error.tpl.html'
            });

    }
)

.run(['$state', function ($s){
    // go to homepage when first time entering website
    $s.transitionTo('home');
}]);