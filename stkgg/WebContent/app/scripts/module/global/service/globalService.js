(function(){
	'use strict';
	var mod = angular.module('global.service');
	
	//httpInterceptor for default $http behavior
	mod.factory('globalHttpInterceptor', ['$q', '$window', '$location', function ($q, $window, $location) {
		return {
			'request': function(config) {
				return config;
			},
			'requestError': function(rejection) {
				return $q.reject(rejection);
			},
			'response': function(response) {
				return response;
			},
			'responseError': function(rejection) {
				alert('服务器端技术/对接出现问题');
				return $q.reject(rejection);
			}
		};
	}]);
	
	
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
			 {  when:"/newsList/:pubId",//for pubId, current user, newsList booked situation
				templateUrl:"views/newsList.html"
			 },
			 {  when:"/newsContent/:newsId",
				templateUrl:"views/newsContent.html"
			 },
			 {
				when:"/comments/:tipId",
				templateUrl:"views/comment.html" 
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
					SEARCHSTOCK:'http://123.57.210.176/stocks?access-token=test',
					UPLOADIMG: 'http://123.57.210.176/upload/img?access-token=test', 
					POSTPUB:'http://123.57.210.176/pubs/add?access-token=test',
				//Timeline页
					GETTIMELINE:'http://123.57.210.176/pubs/timeline/get?access-token=test', 
					ADDTIP:'http://123.57.210.176/tips/add?access-token=test', 
					EDITTIP:'http://123.57.210.176/tips/edit?access-token=test', 
					EVALUATETIP:'http://123.57.210.176/tips/evaluate?access-token=test', 
					ADDFAVORITE:'http://123.57.210.176/user/favorites/add?access-token=test', 
					//新闻相关
					GETNEWSLIST:'http://123.57.210.176/news/list?access-token=test', 
					GETNEWSCONTENT:'http://123.57.210.176/news/get?access-token=test', 
					BOOKNEWS:'http://123.57.210.176/news/book?access-token=test', 
					
				//预测发布
					GETPREDICTION:'http://123.57.210.176/prediction/get?access-token=test', 
					ADDPREDICTION:'http://123.57.210.176/prediction/add?access-token=test', 
					EDITPREDICTION:'http://123.57.210.176/prediction/edit?access-token=test', 
					
				//Coverpage页
					COVERPAGEGET: 'http://123.57.210.176/coverpage/get?access-token=test', 
					REPORTADD:'http://123.57.210.176/report/add?access-token=test',
					
				//修改历史页面
					HISTORYTIP:'http://123.57.210.176/history/tip?access-token=test', 
					HISTORYPREDICTION:'http://123.57.210.176/history/prediction?access-token=test', 
					
				//"我的"页面
					MYPROFILE:'http://123.57.210.176/user/get?access-token=test', 
					MYPROFILEEDIT:'http://123.57.210.176/user/edit?access-token=test', 
					MYPUBS:'http://123.57.210.176/user/pubs?access-token=test', 
					MYFAVORITES:'http://123.57.210.176/user/favorites?access-token=test', 
					MYBOUGHTS:'http://123.57.210.176/user/boughts?access-token=test', 
					MYAPPLY:'http://123.57.210.176/user/applyVIP?access-token=test', 
					
				//动态页
					GETFEED:'http://123.57.210.176/feed/get?access-token=test', 
					
				//评论相关
					GETCOMMENT:'http://123.57.210.176/comments/get?access-token=test', 
					ADDCOMMENT:'http://123.57.210.176/comments/add?access-token=test', 
					
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
					EVALUATETIP:'/stkgg/app/mockData/timeline/evaluate.json', 
					ADDFAVORITE:'/stkgg/app/mockData/timeline/fav.json', 
					//新闻相关
					GETNEWSLIST:'/stkgg/app/mockData/timeline/getNewsList.json', 
					GETNEWSCONTENT:'/stkgg/app/mockData/timeline/getNewsContent.json', 
					BOOKNEWS:'/stkgg/app/mockData/timeline/bookNews.json', 
					
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
					MYPROFILE:'/stkgg/app/mockData/my/profile.json', 
					MYPROFILEEDIT:'/stkgg/app/mockData/my/edit.json', 
					MYPUBS:'/stkgg/app/mockData/my/pub.json', 
					MYFAVORITES:'/stkgg/app/mockData/my/fav.json', 
					MYBOUGHTS:'/stkgg/app/mockData/my/bought.json', 
					MYAPPLY:'/stkgg/app/mockData/my/apply.json', 
					
				//动态页
					GETFEED:'/stkgg/app/mockData/feed/get.json', 
				//评论相关
					GETCOMMENT:'/stkgg/app/mockData/comment/get.json', 
					ADDCOMMENT:'/stkgg/app/mockData/comment/add.json', 
			});
	
})();