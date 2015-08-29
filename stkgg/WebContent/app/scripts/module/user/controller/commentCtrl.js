(function(){
	'use strict';
	var mod = angular.module('user.controller');
	mod.controller("CommentCtrl", ['$scope', '$http', 'APIMOCK', '$cookies', 'API', '$routeParams', 
	                            function($scope, $http, APIMOCK, $cookies, API, $routeParams){
		
		
		//获取评论
		var getComments = function(){
			var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
			var tipId =  $routeParams.tipId;
			var data = {
				tipId:tipId, 
				sessionId:sessionId
			};
			$http({
				method: 'POST', 
				url: API.GETCOMMENT, 
				data:data
			})
			.then(function(res){
				if(res.data.result=="success"){
					var comments = res.data.tipInfo.comments;
					$scope.positiveComments = comments.likes;
					$scope.negativeComments = comments.dislikes;
				}else{
					alert(res.data.reason);
				}
			}, function(res){
				console.log('error tech', res);
			});
		};
		
		//listen $rootScope evt
		$scope.$on('refreshPage', function(){
			getComments();
		});
		
		//init
		var init = function(){
			$scope.positiveComments = [];
			$scope.negativeComments = [];
			getComments();
		};
		init();
		
	}]);
})();