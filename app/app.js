'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}])


.config(function ($mdThemingProvider) {
  $mdThemingProvider
      .theme('default')
      .primaryPalette('indigo')
      .accentPalette('indigo')
    .warnPalette('red');
 /*     .primaryPalette('brown')
      .accentPalette('green')
      .warnPalette('red')
      .backgroundPalette('teal', {
        'default': '50',
        'hue-1': '100',
        'hue-2': '200',
        'hue-3': '300'

      });*/
})

.controller('sideNavCtrl', function ($scope, $timeout, $mdSidenav) {

});
