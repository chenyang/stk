(function(){
	'use strict';
	var mod = angular.module('stock.controller');
	mod.controller("FeedCtrl", ['$scope', '$http', 'APIMOCK', '$cookies', 'API', '$location', 
	                            function($scope, $http, APIMOCK, $cookies, API, $location){
		
		//点赞/踩 tip
		$scope.evaluateTip = function(feed, evaluation){
			var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
			$http({
				method: 'POST', 
				url: APIMOCK.EVALUATETIP, 
				sessionId:sessionId, 
				tipId:feed.tipId
			})
			.then(function(res){
				if(res.data.result=="success"){
					alert('评价成功！');
					feed.nbLikes = res.data.tip.nbLikes;
					feed.nbDislikes = res.data.tip.nbDislikes;
				}else{
					alert(res.data.reason);
				}
			}, function(res){
				console.log('error tech', res);
			});
		};
		
		
		//获取动态
		var getFeeds = function(){
			var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
			$http({
				method: 'POST', 
				url: APIMOCK.GETFEED, 
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
		
		$scope.gotoComment = function(feed){
			$location.path("/comments/"+feed.tipId);
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