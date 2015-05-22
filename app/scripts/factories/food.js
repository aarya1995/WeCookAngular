'use strict';

/**
 * @ngdoc function
 * @name v1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the v1App
 */
angular.module('v1App')
	.factory('foodFactory', ['$http', function($http){

		var service = {};

		var baseURL = 'http://localhost:3000/menu/';

		service.getMenu = function (callback) {
			$http.get(baseURL).success(callback);
		};

		service.fuckyougrunt = function() {
			
		};
		return service;

	}]);
