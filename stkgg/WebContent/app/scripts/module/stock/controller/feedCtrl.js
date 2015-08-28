(function(){
	'use strict';
	var mod = angular.module('stock.controller');
	mod.controller("FeedCtrl", ['$scope', '$http', 'APIMOCK', '$cookies', 'API', 
	                            function($scope, $http, APIMOCK, $cookies, API){
		
		
		//获取动态
		var getFeeds = function(){
			var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
			$http({
				method: 'POST', 
				url: API.GETFEED, 
				sessionId:sessionId
			})
			.then(function(res){
				if(res.data.result=="success"){
					$scope.feeds = res.data.feeds;
				}else{
					alert(res.data.reason);
				}
			}, function(res){
				console.log('error tech', res);
			});
		};
		
		
		//listen $rootScope evt
		$scope.$on('refreshPage', function(){
			getFeeds();
		});
		
		//init
		var init = function(){
			getFeeds();
			$scope.feeds = [];
		};
		init();
		
	}]);
})();