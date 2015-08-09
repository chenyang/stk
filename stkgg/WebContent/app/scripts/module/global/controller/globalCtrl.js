(function(){
	'use strict';
	var mod = angular.module('global.controller');
	mod.controller("GlobalCtrl", ['$scope', '$cookies', '$location', '$http', 'APIMOCK',
	                              function($scope, $cookies, $location, $http, APIMOCK){
		
		//登出
		$scope.logout = function(){
			if(!_.isEmpty($cookies.getObject('cookieUserProfile'))){
				var data = {
						"sessionId":$cookies.getObject('cookieUserProfile').sessionId
					};
					
					$http({
						method: 'POST', 
						url: APIMOCK.LOGOUT, 
						data:data
					})
					.then(function(res){
						if(res.data.result=="success"){
							$cookies.remove('cookieUserProfile');//仅仅删除user的cookie
							$location.path("/login");
						}else{
							alert(res.data.reason);
						}
					}, function(res){
						console.log('error tech', res.data);
					});
			}
		};
		
		$scope.clearAllCookies = function(){
			var allCookies = $cookies.getAll();
			_.each(_.allKeys(allCookies), function(c){
				$cookies.remove(c);
			});
		};
		
		//显示登陆状态信息
		$scope.getLoginStatus = function(){
			var cookieProfile = $cookies.getObject('cookieUserProfile');
			
			if(_.isEmpty(cookieProfile)){
				return '需要登陆（随便输）';
			}else if(cookieProfile.extended){
				return '已经登陆（5 days） session: '+cookieProfile.sessionId;
			}else{
				return '已经登陆 session: '+cookieProfile.sessionId;
			}
		};
		
		//随时监测用户cookie是否可用
		$scope.$on('$routeChangeStart', function(next, current){
			checkLogin();
			//根据页面 决定显示与否 appHeader
			if($location.path().indexOf('login')!=-1){
				$scope.showAppHeader = false;
			}else{
				$scope.showAppHeader = true;
			}
		});
		
		//validate user profile
		var checkLogin = function(){
			if(_.isEmpty($cookies.getObject('cookieUserProfile'))){
				$location.path("/login");
			}
		};
		
		//init
		var init = function(){
			$scope.showAppHeader = false;
			checkLogin();
		};
		
		init();
	}]);
	
})();