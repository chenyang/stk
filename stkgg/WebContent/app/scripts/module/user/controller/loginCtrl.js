(function(){
	'use strict';
	var mod = angular.module('user.controller');
	mod.controller("LoginCtrl", ['$scope', '$cookies', 'APIMOCK', '$http', '$location',
	                             function($scope, $cookies, APIMOCK, $http, $location){

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
			return {"capcha":code};
		};

		//!!set cookie for app
		var setCookie = function(data){
			if($scope.isUseLongCookie){
				var today = new Date();
				var someDay = new Date(today);
				someDay.setDate(today.getDate()+5);
				//set long cookie, n days
				$cookies.putObject('cookieUserProfile', 
						{
							"sessionId":data.sessionId, 
							"tokenId":"123456", 
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
							"sessionId":data.sessionId, 
							"tokenId":"123456",
							"extended":false
						}
				);
			}
		};

		//发送短信验证码
		$scope.sendCode = function(){
			if(_.isEmpty($scope.userRegisterInfo.login)){
				alert('请输入手机号');
			}else{
				var data = {
					cellphone:$scope.userRegisterInfo.login
				};
				$http({
					method: 'POST', 
					url: APIMOCK.SENDCODE, 
					data:data
				})
				.then(function(res){
					if(res.data.result=="success"){
						alert('已成功发送验证码到您的手机');
					}else{
						alert(res.data.reason);
					}
				}, function(res){
					console.log('error tech', res.data);
				});
			}
		};


		//刷新随机验证码
		$scope.refreshCapcha = function(){
			$http({
				method: 'GET', 
				url: APIMOCK.GETCAPCHA
			})
			.then(function(res){
				if(res.data.result=="success"){
					$scope.userLoginInfo.capcha = res.data.capcha;
				}else{
					alert(res.data.reason);
				}
			}, function(res){
				console.log('error tech', res.data);
			})['finally'](function(){
				//本地随机产生
				var codeObj = createCode();
				$scope.userLoginInfo.capcha = codeObj.capcha;
			});
		};


		//login
		$scope.login = function(){
			console.log("login", $scope.userLoginInfo);
			
			var data = {
					login:$scope.userLoginInfo.login, 
					password:$scope.userLoginInfo.password,
					capcha:$scope.userLoginInfo.inputCapcha
			};
			
			$http({
				method: 'POST', 
				url: APIMOCK.LOGIN, 
				data:data
			})
			.then(function(res){
				if(res.data.result=="success"){
					alert('登陆成功');
					setCookie(res.data);
					//跳转发现页
					$location.path("/home");
				}else{
					alert(res.data.reason);
				}
			}, function(res){
				console.log('error tech', res.data);
			});
		};


		//register
		$scope.register = function(){
			if($scope.userRegisterInfo.password!=$scope.userRegisterInfo.passwordConfirm){
				alert('两次输入的密码需要相同');
			}else{
				var data = {
						login:$scope.userRegisterInfo.login,
						password:$scope.userRegisterInfo.password,
						code:$scope.userRegisterInfo.inputCode
				};
				$http({
					method: 'POST', 
					url: APIMOCK.REGISTER, 
					data:data
				}).then(function(res){
					if(res.data.result=="success"){
						//cookie 更新关联用户信息
						alert('注册成功!');
						setCookie(res.data);
						//跳转发现页
						$location.path("/home");
					}else{
						alert('注册失败： '+res.data.reason);
					}
				}, function(res){
					console.log('error tech', res.data);
				});
			}
		};

		/**initialization**/
		var init= function(){
			//default collapse for 3rd party login
			$scope.isCollapsed = true;
			//use cookie to automatically login
			$scope.isUseLongCookie = false;
			$scope.userLoginInfo = {};
			$scope.userRegisterInfo = {};

			//获取随机验证码
			$scope.refreshCapcha();
		};

		//init
		init();

	}]);

})();




