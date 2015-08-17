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
			 {  when:"/stkAnal/:pubId", 
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
			 {  when:"/history/prediction/:pubId", 
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
	
	
			//数字与中文时间
			mod.constant('NumToChineseTime', {
				"1":"一天", 
				"2":"两天", 
				"7":"一周", 
				"14":"两周", 
				"30":"一个晕", 
				"90":"三个月", 
				"180":"半年", 
			});
	
			mod.constant('API', {
				//登陆
					CHECKPHONE:'http://123.57.210.176/util/checkphone?access-token=test', 
					GETCAPCHA:'http://123.57.210.176/util/getcaptcha?access-token=test', 
					SENDCODE:'http://123.57.210.176/util/sendcode?access-token=test', 
					LOGIN:'http://123.57.210.176/user/login?access-token=test', 
					REGISTER:'http://123.57.210.176/user/reg?access-token=test',  
					LOGOUT:'http://123.57.210.176/user/logout?access-token=test', 
					FINDPWD:'http://123.57.210.176/user/findpwd?access-token=test', 
					RESETPWD:'http://123.57.210.176/user/resetpwd?access-token=test', 
				//发现页
					SEARCHPUBS:'http://123.57.210.176/util/search?access-token=test', 
					DEFAULTPUBS:'http://123.57.210.176/util/pubs?access-token=test', 
				//创建新PUB页
					SEARCHSTOCK:'http://123.57.210.176/stocks',
					UPLOADIMG: 'http://123.57.210.176/upload/img?access-token=test', 
					POSTPUB:'http://123.57.210.176/pubs/add?access-token=test',
				//Timeline页
					GETTIMELINE:'http://123.57.210.176/pubs/timeline/get?access-token=test', 
					ADDTIP:'http://123.57.210.176/tips/add?access-token=test', 
					EDITTIP:'http://123.57.210.176/tips/edit?access-token=test', 
				//预测发布
					GETPREDICTION:'http://123.57.210.176/prediction/get?access-token=test', 
					ADDPREDICTION:'http://123.57.210.176/prediction/add?access-token=test', 
					EDITPREDICTION:'http://123.57.210.176/prediction/edit?access-token=test', 
					
				//Coverpage页
					COVERPAGEGET: 'http://123.57.210.176/coverpage/get?access-token=test', 
					REPORTADD:'http://123.57.210.176/report/add?access-token=test',
					
				//修改历史页面
					HISTORYTIP:'http://123.57.210.176/hisotry/tip?access-token=test', 
					HISTORYPREDICTION:'http://123.57.210.176/hisotry/prediction?access-token=test', 
					
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
					POSTPUB:'/stkgg/app/mockData/createPub/postpubs.json',
				//Timeline页
					GETTIMELINE:'/stkgg/app/mockData/timeline/timeline.json', 
					ADDTIP:'/stkgg/app/mockData/timeline/add.json', 
					EDITTIP:'/stkgg/app/mockData/timeline/edit.json', 
				//预测发布
					GETPREDICTION:'/stkgg/app/mockData/prediction/get.json',
					ADDPREDICTION:'/stkgg/app/mockData/prediction/add.json', 
					EDITPREDICTION:'/stkgg/app/mockData/prediction/edit.json',
					
				//Coverpage页
					COVERPAGEGET: '/stkgg/app/mockData/coverpage/get.json', 
					REPORTADD:'/stkgg/app/mockData/coverpage/report.json',
				//修改历史页面
					HISTORYTIP:'/stkgg/app/mockData/history/tip.json', 
					HISTORYPREDICTION:'/stkgg/app/mockData/history/prediction.json', 
				//"我的"页面
				//个人详情页面
				//动态页
			});
	
})();