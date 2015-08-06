(function(){
	'use strict';
	var mod = angular.module('user.controller');
	mod.controller("ProfileDetailCtrl", ['$scope', function($scope){
		
		$scope.save = function(){
			//save..until callback
			$scope.isModify = !$scope.isModify;
		};
		
		
		var getProfileDetails = function(){
			//get from API..
			var profileDetail = {
				nickname:"GGG", 
				imageUrl:"", 
				moto:"god bless you", 
				gender:"男", 
				address:"北京-海淀",
				birthday:new Date('1988-01-01')	
			};
			return profileDetail;
		};
		
		$scope.init = function(){
			$scope.isModify = false;
			$scope.items = _.range(1, 8);
			$scope.profileDetail = getProfileDetails();
		};
		
		//init
		$scope.init();
		
	}]);
})();