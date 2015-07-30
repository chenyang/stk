(function(){
	'use strict';
	var mod = angular.module('stock.controller');
	mod.controller("HomePageCtrl", ['$scope', '$location', function($scope, $location){
		
		$scope.items = _.range(1, 8);
		
		$scope.goToCoverPage = function(){
			$location.path("/buyCmt");
		};
		
		$scope.goToCreatePub = function(){
			$location.path("/createPub");
		};
		
	}]);
})();