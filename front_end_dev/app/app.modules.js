'use strict';

angular
    .module('tjcccApp', [
        'ui.router'
    ])

.config(function (
    $provide,
    $urlRouterProvider,
    $stateProvider,
    $httpProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/components/home/home.tpl.html',
            controller: 'homeController as home'
        })
        .state('organization', {
            url: '/organization',
            templateUrl: 'app/components/organization/organization.tpl.html',
            controller: 'organizationController as organization'
        })
        .state('events', {
            url: '/events',
            templateUrl: 'app/components/events/events.tpl.html',
            controller: 'eventsController as events'
        })
        .state('jobs', {
            url: '/jobs',
            templateUrl: 'app/components/jobs/jobs.tpl.html',
            controller: 'jobsController as jobs'
        })
        .state('business_promotion', {
            url: '/business_promotion',
            templateUrl: 'app/components/business_promotion/business_promotion.tpl.html',
            controller: 'businessPromotionController as bizPromo'
        })
        .state('human_resource', {
            url: '/human_resource',
            templateUrl: 'app/components/human_resource/human_resource.tpl.html',
            controller: 'humanResourceController as humanresource'
        })
        .state('membership', {
            url: '/membership',
            templateUrl: 'app/components/membership/membership.tpl.html'
        })
        .state('tips', {
            url: '/tips',
            templateUrl: 'app/components/tips/tips.tpl.html'
        })
        
        .state('contact_faq', {
            url: '/contact_faq',
            templateUrl: 'app/components/contact_faq/contact_faq.tpl.html'
        })

        .state('error', {
            url: '/error',
            templateUrl: 'app/components/error/error.tpl.html'
        });

    // redirect to home page upon entering the site.
    $urlRouterProvider.when('', '/home');

    // error page when invalid page is entered.
    $urlRouterProvider.otherwise('/error');

});

// this willrun right before the page start loading.
// .run(['$state', function ($state) {

// }])