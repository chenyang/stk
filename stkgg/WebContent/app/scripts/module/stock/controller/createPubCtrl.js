(function(){
	'use strict';
	var mod = angular.module('stock.controller');
	mod.controller("CreatePubCtrl", ['$scope', '$location', '$http', 'APIMOCK', '$cookies', 
	                                 function($scope, $location, $http, APIMOCK, $cookies){

		//搜索股票, return promise
		$scope.searchStock = function(searchText){
			return $http({
				method: 'POST', 
				url: APIMOCK.SEARCHSTOCK, 
				data:{
					keyword:searchText
				}
			})
			.then(function(res){
				if(res.data.result=="success"){
					return res.data.stocks;
				}else{
					alert(res.data.reason);
				}
			}, function(res){
				console.log('error tech', res.data);
			});
		};


		//上传图片。。
		
		
		
		//创建
		$scope.submit = function(){
			if(_.isEmpty($scope.pubInfo.stock)){
				alert('请选择一支股票');
			}else{
				var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
				if(_.isEmpty(sessionId)){
					alert('session 有问题，请注册');
				}else{
					var data = {
							"sessionId":sessionId,
							"stockId":$scope.pubInfo.stock.id, 
							"type":1, //商品类型 1 股票
							"imageUrl": null, 
							"desc":$scope.pubInfo.desc,
							"price":$scope.pubInfo.price,
							"pubName":$scope.pubInfo.pubName
					}
					
					$http({
						method: 'POST', 
						url: APIMOCK.POSTPUB, 
						data:data
					})
					.then(function(res){
						if(res.data.result=="success"){
							var pubId = res.data.pubId;
							alert('创建成功！');
							$location.path("/stkAnal/"+pubId);
						}else{
							alert(res.data.reason);
						}
					}, function(res){
						console.log('error tech', res.data);
					});
				}
			}
		};
		
		var init = function(){
			$scope.pubInfo = {};
			$scope.stocks = [];
		};
		//initialisation
		init();
		
	}]);
})();