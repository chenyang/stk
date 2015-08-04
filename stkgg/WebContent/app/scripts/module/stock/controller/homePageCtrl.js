(function(){
	'use strict';
	var mod = angular.module('stock.controller');
	mod.controller("HomePageCtrl", ['$scope', '$location','$cookies',
	                                function($scope, $location, $cookies){
		
		//repeated parts
		$scope.items = 
			[
			 {

				 tipId:1, 
				 b:"", 
				 c:"", 
				 d:""
			 }, 
			 {

				 tipId:2, 
				 b:"", 
				 c:"", 
				 d:""
			 },
			 {

				 tipId:3, 
				 b:"", 
				 c:"", 
				 d:""
			 }

			 ];
		
		$scope.goToCoverPage = function(item){
			var allVisitedTipId = $cookies.getObject('allVisitedTipId');
			if(_.contains(allVisitedTipId, item.tipId)){
				//bypass coverpage
				alert('cookie 已经访问过 tipId '+item.tipId+", 直接进入相关timeline页");
				$location.path("/stkAnal");
			}else{
				$location.path("/buyCmt");
			}
		};
		
		$scope.goToCreatePub = function(){
			$location.path("/createPub");
		};
		
	}]);
})();