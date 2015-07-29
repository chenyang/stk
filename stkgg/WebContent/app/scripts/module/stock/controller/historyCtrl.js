(function(){
	'use strict';
	var mod = angular.module('stock.controller');
	mod.controller("HistoryCtrl", ['$scope', function($scope){
			$scope.items = _.range(1, 6);
			$scope.items2 = _.range(1, 3);
	}]);
})();