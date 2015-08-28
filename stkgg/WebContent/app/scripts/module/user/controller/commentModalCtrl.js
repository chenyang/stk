(function(){
	'use strict';
	var mod = angular.module('user.controller');
	mod.controller("CommentModalCtrl", ['$scope', '$http', 'APIMOCK', '$cookies', 'API', '$routeParams','param', '$modalInstance', 
	                                    function($scope, $http, APIMOCK, $cookies, API, $routeParams, param, $modalInstance){

		$scope.add = function(){
			var commentInfo = $scope.commentInfo;
			var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
			if(_.isEmpty(commentInfo.content)){
				alert('请输入评论');
			}else{
				var data= {
					sessionId:sessionId, 
					tipId:param.tip.tipId,
					attitude:param.attitude, 
					content:commentInfo.content
				};
				
				console.log('data is ', data)
				
				$http({
					method: 'POST', 
					url: APIMOCK.ADDCOMMENT, 
					data:data
				})
				.then(function(res){
					if(res.data.result=="success"){
						alert('添加评论成功');
						$modalInstance.close();
					}else{
						alert(res.data.reason);
					}
				}, function(res){
					console.log('error tech', res);
				});
			}
		};
		
		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};
		
		//init
		var init = function(){
			$scope.commentInfo = {};
		};
		init();


	}]);
})();