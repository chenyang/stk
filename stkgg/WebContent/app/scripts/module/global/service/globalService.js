(function(){
	'use strict';
	var mod = angular.module('global.service');
	
	mod.constant('Navigation',
			[
			 {  when:"/", 
				 templateUrl:"views/homePage.html"
			 }, 
			 {  when:"/home", 
				 templateUrl:"views/homePage.html"
			 }, 
			 {  when:"/stkAnal", 
				 templateUrl:"views/stockAnalysis.html"
			 }, 
			 {  when:"/buyPub", 
				 templateUrl:"views/buyPub.html"
			 }, 
			 {  when:"/buyPub/:pubId", 
				 templateUrl:"views/buyPub.html"
			 }, 
			 {  when:"/login", 
				 templateUrl:"views/login.html"
			 }, 
			 {  when:"/createPub", 
				 templateUrl:"views/createPub.html"
			 },
			 {  when:"/feed", 
				 templateUrl:"views/feed.html"
			 }, 
			 {  when:"/history/tip/:tipId", 
				 templateUrl:"views/historyTip.html"
			 }, 
			 {  when:"/history/prediction/:tipId", 
				 templateUrl:"views/historyPrediction.html"
			 }, 
			 {  when:"/myProfile", 
				 templateUrl:"views/myProfile.html"
			 }, 
			 {  when:"/myBought", 
				 templateUrl:"views/myBought.html"
			 }, 
			 {  when:"/myApply", 
				 templateUrl:"views/myApply.html"
			 }, 
			 {  when:"/myPub", 
				 templateUrl:"views/myPub.html"
			 }, 
			 {  when:"/myFavorite", 
				 templateUrl:"views/myFavorite.html"
			 }, 
			 {  when:"/profileDetail", 
				 templateUrl:"views/profileDetail.html"
			 }, 
			 {  when:"/payment",
					templateUrl:"views/payment.html"
				 },
			 {  when:"/register",
				templateUrl:"views/register.html"
			 },
			 
			 //项目进展
			 {  when:"/projectProgress",
				templateUrl:"views/others/project_progress.html"
			 }, 
			 {  when:"/apiProgress",
				templateUrl:"views/others/api_progress.html"
			 }	 
			 ]);
	
	
			mod.constant('API', {
				//登陆
					CHECKPHONE:'http://123.57.210.176/util/checkphone', 
					GETCAPCHA:'http://123.57.210.176/util/getcapcha ', 
					SENDCODE:'http://123.57.210.176/util/sendcode', 
					LOGIN:'http://123.57.210.176/util/login', 
					REGISTER:'http://123.57.210.176/member/reg', 
					LOGOUT:'http://123.57.210.176/member/logout', 
					FINDPWD:'http://123.57.210.176/member/findpwd', 
					RESETPWD:'http://123.57.210.176/member/resetpwd', 
				//发现页
					SEARCHPUBS:'http://123.57.210.176/util/search', 
					DEFAULTPUBS:'http://123.57.210.176/util/pubs', 
				//创建新PUB页
					SEARCHSTOCK:'http://123.57.210.176/stocks',
					UPLOADIMG: 'http://123.57.210.176/upload/img', 
					POSTPUB:'http://123.57.210.176/pubs',
				//Timeline页
					TIMELINEPUBS:'http://123.57.210.176/pubs/id', 
				//预测发布
					ADDPREDICTION:'http://123.57.210.176/prediction/add', 
					EDITPREDICTION:'http://123.57.210.176/prediction/edit'
					
				//Coverpage页
				//修改历史页面
				//"我的"页面
				//个人详情页面
				//动态页
			});
			
			mod.constant('APIMOCK', {
				//登陆
					CHECKPHONE:'/stkgg/app/mockData/login/checkphone.json', 
					GETCAPCHA:'/stkgg/app/mockData/login/getcapcha.json', 
					SENDCODE:'/stkgg/app/mockData/login/sendcode.json', 
					LOGIN:'/stkgg/app/mockData/login/login.json', 
					REGISTER:'/stkgg/app/mockData/login/reg.json', 
					LOGOUT:'/stkgg/app/mockData/login/logout.json', 
					FINDPWD:'/stkgg/app/mockData/login/findpwd.json', 
					RESETPWD:'/stkgg/app/mockData/login/resetpwd.json', 
				//发现页
					SEARCHPUBS:'/stkgg/app/mockData/find/search.json', 
					DEFAULTPUBS:'/stkgg/app/mockData/find/pubs.json', 
				//创建新PUB页
					SEARCHSTOCK:'/stkgg/app/mockData/createPub/stocks.json',
					UPLOADIMG: '/stkgg/app/mockData/createPub/img.json', 
					POSTPUB:'/stkgg/app/mockData/createPub/pubs.json',
				//Timeline页
					TIMELINEPUBS:'/stkgg/app/mockData/timeline/timeline.json', 
				//预测发布
					ADDPREDICTION:'/stkgg/app/mockData/prediction/add.json', 
					EDITPREDICTION:'/stkgg/app/mockData/createPub/edit.json'
					
				//Coverpage页
				//修改历史页面
				//"我的"页面
				//个人详情页面
				//动态页
			});
	
})();