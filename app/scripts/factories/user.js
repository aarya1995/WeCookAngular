'use strict';

/**
 * @ngdoc function
 * @name v1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the v1App
 */

angular.module('v1App')
	.factory('userFactory', ['$http', function($http){

		var service = {};

		service.login = function (username, password, callback){
			var loginURL = 'http://localhost:3000/users/login/';
			var complete = String(
				loginURL + 
				username + 
				'/' + 
				password
			);
			$http.get(complete).success(callback);
		};

		service.register = function (user, callback) {
			var registerURL = 'http://localhost:3000/users/';
			$http.post(registerURL, 
				{
					name: user.flname, 
					password: user.password,
					email: user.email,
					address: user.address,
					phone: user.phone
				}
			).success(callback);
		};

		service.fuckyougrunt = function() {
			$http.get('/').success(function(data) {
				return data;
			});
		};

		return service;

	}]);
