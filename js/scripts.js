var AngularApp = angular.module('AngularApp', ['ngRoute', 'ngAnimate']);

AngularApp.controller('HelloController', function($scope) {
    $scope.heading = 'Home';
    $scope.message = 'Here you will find the meaning of life.';
});

AngularApp.controller('AboutController', function($scope) {
    $scope.heading = 'About';
    $scope.message = 'Here you will find the About of meaning of life.';
});

AngularApp.controller('ContactController', function($scope) {
    $scope.heading = 'Contact';
    $scope.message = 'Here you will find the Contact of meaning of life.';
});

AngularApp.config(function($routeProvider) {
$routeProvider
        .when('/', {
            templateUrl : 'hello.html',
            controller  : 'HelloController',
            controllerAs: 'hello'
        })
        .when('/about', {
            templateUrl : 'about.html',
            controller  : 'AboutController',
            controllerAs: 'about'
        })
        .when('/contact', {
            templateUrl : 'contact.html',
            controller  : 'ContactController',
            controllerAs: 'contact'
        });
});