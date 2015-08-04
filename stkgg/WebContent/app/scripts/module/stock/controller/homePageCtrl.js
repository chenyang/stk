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
		
		$scope.goToCoverPage = function(tipId){
			var lastVisitedTipId = $cookies.get('lastVisitedTipId');
			if(_.isEmpty(lastVisitedTipId)){
				$location.path("/buyCmt");
			}
			else{
				//bypass coverpage
				alert('已经访问过 tipId'+tipId+", 直接进入相关timeline页");
				//temp $cookies.remove('lastVisitedTipId');
				$location.path("/stkAnal");
			}
		};
		
		$scope.goToCreatePub = function(){
			$location.path("/createPub");
		};
		
	}]);
})();