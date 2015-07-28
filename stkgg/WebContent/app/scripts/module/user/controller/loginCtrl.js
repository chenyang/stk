(function(){
	'use strict';
	var mod = angular.module('user.controller');
	mod.controller("LoginCtrl", ['$scope', function($scope){
		//default collapse is true for 3rd party login
		$scope.isCollapsed = true;
	}]);

})();