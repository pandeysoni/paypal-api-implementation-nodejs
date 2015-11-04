'use strict';


angular.module('app').controller('AppController', ['$scope', 'appService', 'growl',
	function($scope, appService, growl) {
		// This provides Authentication context.
		$scope.payment = function(){   
            appService.get({url: 'payment'}).$promise.then(function(result) { 
                 window.location.href = result.url;
            }).catch(function(error){
                growl.addErrorMessage('oops something went wrong');
            });
        }
	}
]);