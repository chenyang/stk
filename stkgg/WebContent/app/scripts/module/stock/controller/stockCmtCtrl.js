(function(){
	'use strict';
	var mod = angular.module('stock.controller');
	mod.controller("StockCmtCtrl", ['$scope', '$modalInstance', 'prediction','$location',
	                                function($scope, $modalInstance, prediction, $location){

		//items who will pass to service
		$scope.prediction = prediction;
		
		//TODO
		//pass to service "ADD"
		
		$scope.gotoHistoryPage = function(userId){
			$modalInstance.dismiss('cancel');
			$location.path("/history/prediction/"+userId);
		};
		
		$scope.save = function(){
			if($scope.prediction==null){
				$scope.prediction={};
			}
			$scope.prediction.lastModifiedTime = new Date();
		};
		
		/*$scope.ok = function () {
			//return back service status
			$modalInstance.close($scope.item);
		};*/
		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};
	}]);
})();