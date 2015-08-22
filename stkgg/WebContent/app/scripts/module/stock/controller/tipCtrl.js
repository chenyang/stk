(function(){
	'use strict';
	var mod = angular.module('stock.controller');
	mod.controller("TipCtrl", ['$scope', '$modalInstance', 'APIMOCK', 'API', '$http', 'params', '$filter', 
	                           function($scope, $modalInstance, APIMOCK, API, $http, params, $filter){	
		
		$scope.add = function(){
			var tipInfo = $scope.tipInfo;
			if(_.isEmpty(tipInfo.content)){
				alert('请输入评述');
			}else{
				var data= {
					pubId:params.pubId, 
					newsId:params.newsId, 
					content:tipInfo.content
				};
				
				$http({
					method: 'POST', 
					url: API.ADDTIP, 
					data:data
				})
				.then(function(res){
					if(res.data.result=="success"){
						alert('添加评述成功');
						$modalInstance.close();
					}else{
						alert(res.data.reason);
					}
				}, function(res){
					console.log('error tech', res.data);
				});
			}
		};
		
		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};
		
		//init
		var init = function(){
			$scope.tipInfo = {};
		};
		
		init();
		
	}]);
})();