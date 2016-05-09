var app = angular.module('app', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'views/pirates.html'
    })
  })
