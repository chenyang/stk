(function(){
	'use strict';
	var mod = angular.module('stock.controller');
	mod.controller("StockCmtCtrl", ['$scope', '$modalInstance', 'items', function($scope, $modalInstance, items){

		//items who will pass to service
		$scope.item = {};
		
		//TODO
		//pass to service "ADD"
		
		$scope.ok = function () {
			//return back service status
			$modalInstance.close($scope.item);
		};
		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};
	}]);
})();