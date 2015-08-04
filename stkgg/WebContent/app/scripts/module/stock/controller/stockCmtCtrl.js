(function(){
	'use strict';
	var mod = angular.module('stock.controller');
	mod.controller("StockCmtCtrl", ['$scope', '$modalInstance', 'preview','$location',
	                                function($scope, $modalInstance, preview, $location){

		//items who will pass to service
		$scope.preview = preview;
		
		//TODO
		//pass to service "ADD"
		
		$scope.gotoHistoryPage = function(userId){
			$modalInstance.dismiss('cancel');
			$location.path("/history/preview/"+userId);
		};
		
		$scope.save = function(){
			if($scope.preview==null){
				$scope.preview={};
			}
			$scope.preview.lastModifiedTime = new Date();
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