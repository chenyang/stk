(function(){
	'use strict';
	var mod = angular.module('global.controller');
	mod.controller("GlobalCtrl", ['$scope', '$cookies', '$location',
	                              function($scope, $cookies, $location){
		
		$scope.clearAllCookies = function(){
			var allCookies = $cookies.getAll();
			_.each(_.allKeys(allCookies), function(c){
				$cookies.remove(c);
			});
		};
		
		
		//validate user profile
		var checkLogin = function(){
			console.log($cookies.getObject('isUseCookieLong'));
			
			if(_.isEmpty($cookies.getObject('cookieUserProfile'))){
				$location.path("/login");
			}
			
		};
		//when route changes
		$scope.$on('$routeChangeStart', function(next, current){
			checkLogin();
		});
		
		//init
		var init = function(){
			checkLogin();
		};
		init();
	}]);
	
})();