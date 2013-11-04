'use strict';

angular.module('appApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/yours', {
        templateUrl: 'views/yours.html',
        controller: 'UserCtrl'
      })
      .when('/chat/:city', {
        templateUrl: 'views/chat.html',
        controller : 'ChatCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
