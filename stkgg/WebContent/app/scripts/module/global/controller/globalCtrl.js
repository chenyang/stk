(function(){
	'use strict';
	var mod = angular.module('global.controller');
	mod.controller("GlobalCtrl", ['$scope', '$cookies',
	                              function($scope, $cookies){
		
		$scope.clearAllCookies = function(){
			var allCookies = $cookies.getAll();
			_.each(_.allKeys(allCookies), function(c){
				$cookies.remove(c);
			});
		};
		
	}]);
	
})();