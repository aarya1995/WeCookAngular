'use strict';

/**
 * @ngdoc function
 * @name v1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the v1App
 */
 
angular.module('v1App')
  .controller('AccountCtrl', 
  function ($scope, $location, $cookies,$cookieStore, SweetAlert, userFactory, foodFactory) {
  	// Temporary console log that lists all cookies
    console.log($cookies);


    $scope.logout = function () {
      $cookieStore.remove('AYYY');
      $cookieStore.remove('userID');
      $location.path('/');
    };


  	$scope.fuckyougrunt = function () {
  		userFactory.fuckyougrunt();
  		foodFactory.fuckyougrunt();
  		$location.path('/account');
  		SweetAlert.swal('Incorrect Login');
    };

  });
 