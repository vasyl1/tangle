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
      .when ('/posts/:postId', {
		    templateUrl: 'views/showpost.html',
		    controller: 'PostViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
.constant ('FIREBASE_URL','https://glaring-fire-3204.firebaseio.com/');
