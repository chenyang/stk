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
		
		$scope.getLoginStatus = function(){
			if(_.isEmpty($cookies.getObject('cookieUserProfile'))){
				return '需要登陆（随便输）';
			}else if($cookies.getObject('cookieUserProfile').extended){
				return '已经登陆（五天内自动登陆）';
			}else{
				return '已经登陆';
			}
		};
		
		
		//validate user profile
		var checkLogin = function(){
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