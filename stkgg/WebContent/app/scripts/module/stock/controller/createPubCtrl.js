(function(){
	'use strict';
	var mod = angular.module('stock.controller');
	mod.controller("CreatePubCtrl", ['$scope', '$location', function($scope, $location){
		
		
		
		
		
		$scope.submit = function(){
			$location.path("/stkAnal");
		};
		
	}]);
})();