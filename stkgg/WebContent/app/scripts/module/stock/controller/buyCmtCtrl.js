(function(){
	'use strict';
	var mod = angular.module('stock.controller');
	mod.controller("BuyCmtCtrl", ['$scope', '$location',
	                              function($scope, $location){
		$scope.buyPub = function(){
			$location.path("/buyPub");
		};
		//default is true
		$scope.isCollapseCmt = true;
		$scope.isCollapseReport = true;
		
		$scope.userComments = [
		                       {
		                    	   "username":"user1", 
		                    	   "comment":"不错， 赞一个", 
		                    	   "time":"2015-06-10-19:18"
		                       }, 
		                       {
		                    	   "username":"user2", 
		                    	   "comment":"评论挺详实的",
		                    	   "time":"2015-06-10-19:18"
		                       },
		                       {
		                    	   "username":"user3", 
		                    	   "comment":"股神啊，强烈推荐！",
		                    	   "time":"2015-06-10-19:18"
		                       }
		                       ];
		
	}]);
})();