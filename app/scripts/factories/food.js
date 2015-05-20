'use strict';

/**
 * @ngdoc function
 * @name v1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the v1App
 */
angular.module('v1App')
	.factory('foodFactory', function(){

		var service = {};

		var sampleMenu = {
			1 : {
				'name' : 'spaghetti',
				'price' : 5
			},
			2 : {
				'name' : 'burrito',
				'price' : 7
			},
			3 : {
				'name' : 'steak',
				'price' : 13
			},
			4 : {
				'name' : 'salad',
				'price' : 5
			},
			5 : {
				'name' : 'turnip',
				'price' : 9001
			},
		};

		service.getMenu = function () {
			return sampleMenu;
		};


		service.fuckyougrunt = function() {
			
		};
		return service;

	});
