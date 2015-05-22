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

		var baseURL = 'http://localhost:3000/users/';

		service.currID = 1;

		service.login = function (username, password, callback){
			var complete = String(
				baseURL + 'login/' + 
				username + '/' + password
			);
			$http.get(complete).success(callback);
		};

		service.register = function (user, callback) {
			$http.post(baseURL, 
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
