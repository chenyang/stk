(function(){
	'use strict';
	var mod = angular.module('user.controller');
	mod.controller("ProfileDetailCtrl", ['$scope', function($scope){
		$scope.items = _.range(1, 8);
	}]);
})();