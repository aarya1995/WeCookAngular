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
  function ($scope, 
    $location, 
    $localStorage,
    $sessionStorage,
    SweetAlert, 
    userFactory, 
    foodFactory) {
  	// Temporary console log that lists all cookies

    $scope.$storage = $sessionStorage;

    if (typeof $scope.$storage.currID === 'undefined' || $scope.$storage.currID === null){
      $location.path('/');
    }

    foodFactory.getMenu(function(data) {
      $scope.menu = data;
    });

    $scope.logout = function () {
      $sessionStorage.$reset();
      $location.path('/');
    };

  	$scope.fuckyougrunt = function () {
  		userFactory.fuckyougrunt();
  		foodFactory.fuckyougrunt();
  		$location.path('/account');
  		SweetAlert.swal('Incorrect Login');
    };

  });
 