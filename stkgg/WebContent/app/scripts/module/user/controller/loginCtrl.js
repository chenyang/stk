(function(){
	'use strict';
	var mod = angular.module('user.controller');
	mod.controller("LoginCtrl", ['$scope', '$cookies',
	                             function($scope, $cookies){
		
		//generate random validate code from API
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
			return {"code":code};
		};
		
		//set cookie for app
		var setCookie = function(data){
			if($scope.isUseLongCookie){
				var today = new Date();
				var someDay = new Date(today);
				someDay.setDate(today.getDate()+5);
				//set long cookie, n days
				//TODO
				$cookies.putObject('cookieUserProfile', 
					{
						"userId":12, 
						"tokenId":"9238849201", 
						"extended":true //extended login
					}, 
					//$cookies settings
					{
						expires:someDay
					}
				);
				
			}else{
				//set normal cookie (session)
				$cookies.putObject('cookieUserProfile', 
					{
						"userId":12, 
						"tokenId":"9238849201",
						"extended":false
					}
				);
			}
		};
		
		//refresh code
		$scope.refreshCode = function(){
			var codeObj = createCode();
			$scope.userLoginInfo.code = codeObj.code;
			$scope.userRegisterInfo.code = codeObj.code;
		};
		
		//login
		$scope.login = function(){
			console.log("login", $scope.userLoginInfo);
			//TODO
						
			//suppose success..data
			setCookie(null);
		};
		
		
		//register
		$scope.register = function(){
			console.log("register", $scope.userRegisterInfo);
			//TODO
			//if use cookie?
			
			//suppose success..data..
			setCookie(null);
		};
		
		/**initialization**/
		var init= function(){
			//default collapse for 3rd party login
			$scope.isCollapsed = true;
			//use cookie to automatically login
			$scope.isUseLongCookie = false;
			$scope.userLoginInfo = {};
			$scope.userRegisterInfo = {};
			
			$scope.refreshCode();
		};
		
		//init
		init();

	}]);

})();