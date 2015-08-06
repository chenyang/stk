(function(){
	'use strict';
	var mod = angular.module('user.controller');
	mod.controller("MyApplyCtrl", ['$scope', function($scope){

		
		var getUserProfileDetails = function(){
			
			//get from API
			
			return{
				realName:"", 
				company:"", 
				contact:"", 
				degree:"",
				gender:"男", 
				address:"北京 - 海淀", 
				birthday:"1988-01-01"
			};
		};
		
		var init = function(){
			$scope.profileDetail = getUserProfileDetails();
		};
		
		//init
		init();
	}]);
})();