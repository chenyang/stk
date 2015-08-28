(function(){
	'use strict';
	var mod = angular.module('user.controller');
	mod.controller("CommentCtrl", ['$scope', '$http', 'APIMOCK', '$cookies', 'API', '$routeParams', 
	                            function($scope, $http, APIMOCK, $cookies, API, $routeParams){
		
		
		//获取评论
		var getComments = function(){
			var tipId =  $routeParams.tipId;
			$http({
				method: 'POST', 
				url: APIMOCK.GETCOMMENT, 
				tipId:tipId
			})
			.then(function(res){
				if(res.data.result=="success"){
					var comments = res.data.comments;
					$scope.positiveComments = _.where(comments, {attitude: "like"});
					$scope.negativeComments = _.where(comments, {attitude: "dislike"});
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