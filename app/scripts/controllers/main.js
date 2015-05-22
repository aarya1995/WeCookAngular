'use strict';

/**
 * @ngdoc function
 * @name v1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the v1App
 */
angular.module('v1App')
  .controller('MainCtrl', 
  function (
    $scope,
    $sessionStorage,
    $cookies,
    $cookieStore,
    $location,
    $http,
    SweetAlert,
    userFactory
  ) {
    // Temporary variables for testing purposes, eventually
    // will allow for user entry of course
    $scope.email = 'richguy@gotham.com';
    $scope.pwd = 'im_batman';

    $scope.$storage = $sessionStorage;

    // Login Function
  	$scope.login = function (username, password) {
      // Call Factory Built to handle all user related data
  		userFactory.login(username, password, function(data) {
        // Process data returned by factory
        var userID = data;
        // If user exists, send user to account page
        // Otherwise error
        if (userID !== -1) {
          $sessionStorage.currID = userID;
          $location.path('/account');
        } else {
          SweetAlert.swal(
            'Incorrect Login',
            'Please Try Again', 
            'error'
          );
        }
      });
  	};

    // Register Function
    $scope.register = function (user) {
      // Call factory built to handle all user related data
      userFactory.register(user);
      SweetAlert.swal(
        'Welcome to WeCook', 
        'We sent you an email to confirm the account,\n once you respond we can get cooking',
        'success'
        );
    };

    $scope.logout = function() {
      $sessionStorage.$reset();
    };

  });
