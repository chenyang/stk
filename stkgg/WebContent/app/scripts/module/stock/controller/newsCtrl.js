(function(){
	'use strict';
	var mod = angular.module('stock.controller');
	mod.controller("NewsCtrl", ['$scope', '$http', 'APIMOCK', 'API', '$cookies', '$routeParams', 
	                            function($scope, $http, APIMOCK, API, $cookies, $routeParams){

		//预订/取消预订新闻
		$scope.bookNews = function(news, isToBook){
			var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
			var data = {
				sessionId:sessionId, 
				newsId:news.newsId, 
				isToBook: isToBook //if true==>will book news. vice versa.
			};
			$http({
				method: 'POST', 
				url: API.BOOKNEWS, 
				data:data
			})
			.then(function(res){
				if(res.data.result=="success"){
					if(res.data.isBooked){
						alert('成功预订');
					}else if(!res.data.isBooked){
						alert('成功取消预订');
					}
					//refresh page
					getNewsList();
				}else{
					alert(res.data.reason);
				}
			}, function(res){
				console.log('error tech', res);
			});
		};
		
		//获取新闻内容
		var getNewsContent = function(){
			var newsId = $routeParams.newsId;
			var data = function(){
				newsId:newsId
			};
			$http({
				method: 'POST', 
				url: API.GETNEWSCONTENT, 
				data:data
			})
			.then(function(res){
				if(res.data.result=="success"){
					$scope.news = res.data.news;
				}else{
					alert(res.data.reason);
				}
			}, function(res){
				console.log('error tech', res);
			});
		};
		
		//获取半年内 newsList
		var getNewsList = function(){
			var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
			var data = {
				sessionId:sessionId
			};
			$http({
				method: 'POST', 
				url: API.GETNEWSLIST, 
				data:data
			})
			.then(function(res){
				if(res.data.result=="success"){
					$scope.newsList = res.data.newsList;
				}else{
					alert(res.data.reason);
				}
			}, function(res){
				console.log('error tech', res);
			});
		};

		//listen $rootScope evt
		$scope.$on('refreshPage', function(){
			init();
		});

		//init
		var init = function(){
			$scope.newsList = [];
			$scope.news = {};
			//see if newsList or newsContent
			if(_.isEmpty($routeParams.newsId)){
				getNewsList();
			}else{
				getNewsContent();
			}
		};
		
		init();

	}]);
})();