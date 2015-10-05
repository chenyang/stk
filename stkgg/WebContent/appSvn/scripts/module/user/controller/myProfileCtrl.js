(function(){
	'use strict';
	var mod = angular.module('user.controller');
	mod.controller("MyProfileCtrl", ['$scope', 'API', 'APIMOCK', '$location', '$http', '$cookies',
	                                 function($scope, API, APIMOCK, $location, $http, $cookies){
		
		//获取用户信息
		var getUserProfile = function(){
			var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
			var data = {
				sessionId:sessionId
			};
			$http({
				method: 'POST', 
				url: APIMOCK.MYPROFILE, 
				data:data
			})
			.then(function(res){
				if(res.data.result=="success"){
					$scope.userInfo = res.data.userInfo;
				}else{
					alert(res.data.reason);
				}
			}, function(res){
				console.log('error tech', res);
			});
		};

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
					console.log('error tech', res);
				});
			}
		};
		
		$scope.$on('refreshPage', function(){
			getUserProfile();
		});
		
		//init
		var init = function(){
			$scope.userInfo = {};
			getUserProfile();
		};
		init();
	}]);
})();