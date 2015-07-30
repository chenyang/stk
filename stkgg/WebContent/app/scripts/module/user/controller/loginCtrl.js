(function(){
	'use strict';
	var mod = angular.module('user.controller');
	mod.controller("LoginCtrl", ['$scope', function($scope){
		//default collapse is true for 3rd party login
		$scope.isCollapsed = true;

		//generate random validate code
		var createCode = function(){
			var code = "";
			var codeLength = 6; 
			var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
					'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
					'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
			for (var i = 0; i < codeLength; i++){
				var charNum = Math.floor(Math.random() * 52);
				code += codeChars[charNum];
			}
			return code;
		};
		
		//refresh code
		$scope.refreshCode = function(){
			$scope.validateCode = createCode();
		};
		
		/**initialization**/
		var init= function(){
			$scope.validateCode = createCode();
		};
		
		//init
		init();

	}]);

})();