(function(){
	'use strict';
	var mod = angular.module('user.service');

	//httpInterceptor for default $http behavior
	mod.factory('myHttpInterceptor', ['$q', '$window', '$location', function ($q, $window, $location) {
		return {
			'request': function(config) {
				// do something on success
				return config;
			},

			'requestError': function(rejection) {
				// do something on error
				return $q.reject(rejection);
			},

			'response': function(response) {
				// do something on success
				return response;
			},

			'responseError': function(rejection) {
				//do sth on error
				return $q.reject(rejection);
			}
		};
	}]);
	
	
})();