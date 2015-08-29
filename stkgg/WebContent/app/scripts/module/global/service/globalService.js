(function(){
	'use strict';
	var mod = angular.module('global.service');
	
	//httpInterceptor for default $http behavior
	mod.factory('globalHttpInterceptor', ['$q', '$window', '$location', function ($q, $window, $location) {
		return {
			'request': function(config) {
				//for mock api
				if(config.method=='GET' && config.url.indexOf('.json')!=-1){
					console.log('[REQ]['+config.method+']'+config.url, config.data);
				}
				//for real api
				if(config.method=='POST'){
					console.log('[REQ]['+config.method+']'+config.url, config.data);
				}
				return config;
			},
			'requestError': function(rejection) {
				return $q.reject(rejection);
			},
			'response': function(response) {
				//for mock api
				if(response.config.method=='GET'&&response.config.url.indexOf('.json')!=-1){
					console.log('[RES]['+response.config.method+']', response.data);
				}
				//for real api
				if(response.config.method=='POST'){
					console.log('[RES]['+response.config.method+']', response.data);
				}
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
				templateUrl:"views/homePage.html", 
				headerName:"发现 PUB"
			 }, 
			 {  when:"/home", 
				templateUrl:"views/homePage.html", 
				headerName: "发现 PUB"
				 
			 }, 
			 {  when:"/stkAnal", 
				templateUrl:"views/stockAnalysis.html", 
				headerName: "股票时间线"
			 }, 
			 {  when:"/stkAnal/:pubId", 
				templateUrl:"views/stockAnalysis.html", 
				headerName: "股票时间线"
			 }, 
			 {  when:"/buyPub", 
				templateUrl:"views/buyPub.html", 
				headerName: "PUB介绍"
			 }, 
			 {  when:"/buyPub/:pubId", 
				templateUrl:"views/buyPub.html", 
				headerName: "PUB介绍"
			 }, 
			 {  when:"/login", 
				templateUrl:"views/login.html", 
				headerName: "登录"
			 }, 
			 {  when:"/createPub", 
				templateUrl:"views/createPub.html", 
				headerName: "创建新的PUB"
			 },
			 {  when:"/feed", 
				templateUrl:"views/feed.html", 
				headerName: "PUB动态"
			 }, 
			 {  when:"/history/tip/:tipId", 
				templateUrl:"views/historyTip.html", 
				headerName: "TIP历史"
			 }, 
			 {  when:"/history/prediction/:pubId", 
				templateUrl:"views/historyPrediction.html", 
				headerName: "预测历史"
			 }, 
			 {  when:"/myProfile", 
				templateUrl:"views/myProfile.html", 
				headerName: "我的"
			 }, 
			 {  when:"/myBought", 
				templateUrl:"views/myBought.html", 
				headerName: "我的购买记录"
			 }, 
			 {  when:"/myApply", 
				templateUrl:"views/myApply.html", 
				headerName: "申请小巴"
			 }, 
			 {  when:"/myPub", 
				templateUrl:"views/myPub.html", 
				headerName: "我的PUB"
			 }, 
			 {  when:"/myFavorite", 
				templateUrl:"views/myFavorite.html", 
				headerName: "我的收藏"
			 }, 
			 {  when:"/profileDetail", 
				templateUrl:"views/profileDetail.html", 
				headerName: "我的帐户"
			 }, 
			 {  when:"/payment",
				templateUrl:"views/payment.html", 
				headerName: "支付"
			 },
			 {  when:"/register",
				templateUrl:"views/register.html", 
				headerName: "注册"
			 },
			 {  when:"/newsList/:pubId",//for pubId, current user, newsList booked situation
				templateUrl:"views/newsList.html", 
				headerName: "新闻列表"
			 },
			 {  when:"/newsContent/:newsId",
				templateUrl:"views/newsContent.html", 
				headerName: "新闻详情"
			 },
			 {
				when:"/comments/:tipId",
				templateUrl:"views/comment.html" , 
				headerName: "用户评论"
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
					MYPROFILE:'http://123.57.210.176/member/get?access-token=test', 
					MYPROFILEEDIT:'http://123.57.210.176/member/edit?access-token=test', 
					MYPUBS:'http://123.57.210.176/member/pubs?access-token=test', 
					MYFAVORITES:'http://123.57.210.176/member/collection?access-token=test', 
					MYBOUGHTS:'http://123.57.210.176/member/buylog?access-token=test', 
					MYAPPLY:'http://123.57.210.176/member/applyvip?access-token=test', 
					
				//动态页
					GETFEED:'http://123.57.210.176/feed/get?access-token=test', 
					
				//评论相关
					GETCOMMENT:'http://123.57.210.176/discussion/list?access-token=test', 
					ADDCOMMENT:'http://123.57.210.176/discussion/add?access-token=test', 
					
			});
			
			mod.constant('APIMOCK', {
				//登陆
					CHECKPHONE:'http://localhost:8080/stkgg/app/mockData/login/checkphone.json', 
					GETCAPCHA:'http://localhost:8080/stkgg/app/mockData/login/getcapcha.json', 
					SENDCODE:'http://localhost:8080/stkgg/app/mockData/login/sendcode.json', 
					LOGIN:'http://localhost:8080/stkgg/app/mockData/login/login.json', 
					REGISTER:'http://localhost:8080/stkgg/app/mockData/login/reg.json', 
					LOGOUT:'http://localhost:8080/stkgg/app/mockData/login/logout.json', 
					FINDPWD:'http://localhost:8080/stkgg/app/mockData/login/findpwd.json', 
					RESETPWD:'http://localhost:8080/stkgg/app/mockData/login/resetpwd.json', 
				//发现页
					SEARCHPUBS:'http://localhost:8080/stkgg/app/mockData/find/search.json', 
					DEFAULTPUBS:'http://localhost:8080/stkgg/app/mockData/find/pubs.json', 
				//创建新PUB页
					SEARCHSTOCK:'http://localhost:8080/stkgg/app/mockData/createPub/stocks.json',
					UPLOADIMG: 'http://localhost:8080/stkgg/app/mockData/createPub/img.json', 
					POSTPUB:'http://localhost:8080/stkgg/app/mockData/createPub/postpubs.json',
				//Timeline页
					GETTIMELINE:'http://localhost:8080/stkgg/app/mockData/timeline/timeline.json', 
					ADDTIP:'http://localhost:8080/stkgg/app/mockData/timeline/add.json', 
					EDITTIP:'http://localhost:8080/stkgg/app/mockData/timeline/edit.json', 
					EVALUATETIP:'http://localhost:8080/stkgg/app/mockData/timeline/evaluate.json', 
					ADDFAVORITE:'http://localhost:8080/stkgg/app/mockData/timeline/fav.json', 
					//新闻相关
					GETNEWSLIST:'http://localhost:8080/stkgg/app/mockData/timeline/getNewsList.json', 
					GETNEWSCONTENT:'http://localhost:8080/stkgg/app/mockData/timeline/getNewsContent.json', 
					BOOKNEWS:'http://localhost:8080/stkgg/app/mockData/timeline/bookNews.json', 
					
				//预测发布
					GETPREDICTION:'http://localhost:8080/stkgg/app/mockData/prediction/get.json',
					ADDPREDICTION:'http://localhost:8080/stkgg/app/mockData/prediction/add.json', 
					EDITPREDICTION:'http://localhost:8080/stkgg/app/mockData/prediction/edit.json',
					
				//Coverpage页
					COVERPAGEGET: 'http://localhost:8080/stkgg/app/mockData/coverpage/get.json', 
					REPORTADD:'http://localhost:8080/stkgg/app/mockData/coverpage/report.json',
				//修改历史页面
					HISTORYTIP:'http://localhost:8080/stkgg/app/mockData/history/tip.json', 
					HISTORYPREDICTION:'http://localhost:8080/stkgg/app/mockData/history/prediction.json', 
					
				//"我的"页面
					MYPROFILE:'http://localhost:8080/stkgg/app/mockData/my/profile.json', 
					MYPROFILEEDIT:'http://localhost:8080/stkgg/app/mockData/my/edit.json', 
					MYPUBS:'http://localhost:8080/stkgg/app/mockData/my/pub.json', 
					MYFAVORITES:'http://localhost:8080/stkgg/app/mockData/my/fav.json', 
					MYBOUGHTS:'http://localhost:8080/stkgg/app/mockData/my/bought.json', 
					MYAPPLY:'http://localhost:8080/stkgg/app/mockData/my/apply.json', 
					
				//动态页
					GETFEED:'http://localhost:8080/stkgg/app/mockData/feed/get.json', 
				//评论相关
					GETCOMMENT:'http://localhost:8080/stkgg/app/mockData/comment/get.json', 
					ADDCOMMENT:'http://localhost:8080/stkgg/app/mockData/comment/add.json', 
			});
	
})();