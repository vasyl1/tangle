/* global app:true */
'use strict';

var app = angular.module('tangleApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .when('/register',{
      	templateUrl: 'views/register.html',
      	controller: 'AuthCtrl'
      })
      .when ('/posts/:postId', {
		    templateUrl: 'views/showpost.html',
		    controller: 'PostViewCtrl'
      })
      .when('/login', {
      	templateUrl: 'views/login.html',
      	controller: 'AuthCtrl'
      })
      .when ('/user/:username',{
      	templateUrl: 'views/profile.html',
      	controller: 'ProfileCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
.constant ('FIREBASE_URL','https://glaring-fire-3204.firebaseio.com/');
