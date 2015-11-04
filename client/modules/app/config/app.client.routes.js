'use strict';

// Setting up route
angular.module('app').config(['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('app', {
			url: '/',
			templateUrl: 'modules/app/views/app.client.view.html'
		});
	}
]);