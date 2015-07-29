(function(){
	'use strict';
	var mod = angular.module('stock.controller');
	mod.controller("HomePageCtrl", ['$scope', function($scope){
		
		$scope.items = _.range(1, 8);
		
	}]);
})();