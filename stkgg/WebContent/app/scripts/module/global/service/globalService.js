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
					console.log('[RES]['+response.config.method+']'+response.config.url, response.data);
				}
				//for real api
				if(response.config.method=='POST'){
					console.log('[RES]['+response.config.method+']'+response.config.url, response.data);
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
			
			//real API
			mod.factory('API', ['$location', function($location){
				var hostUrl = 'http://123.57.210.176/';
				
				return {
				//登陆
					CHECKPHONE:hostUrl+'util/checkphone?access-token=test', 
					GETCAPCHA:hostUrl+'util/getcaptcha?access-token=test', 
					SENDCODE:hostUrl+'util/sendcode?access-token=test', 
					LOGIN:hostUrl+'user/login?access-token=test', 
					REGISTER:hostUrl+'user/reg?access-token=test',  
					LOGOUT:hostUrl+'user/logout?access-token=test', 
					FINDPWD:hostUrl+'user/findpwd?access-token=test', 
					RESETPWD:hostUrl+'user/resetpwd?access-token=test', 
				//发现页
					SEARCHPUBS:hostUrl+'util/search?access-token=test', 
					DEFAULTPUBS:hostUrl+'util/pubs?access-token=test', 
				//创建新PUB页
					SEARCHSTOCK:hostUrl+'stocks?access-token=test',
					UPLOADIMG: hostUrl+'upload/img?access-token=test', 
					POSTPUB:hostUrl+'pubs/add?access-token=test',
				//Timeline页
					GETTIMELINE:hostUrl+'pubs/timeline/get?access-token=test', 
					ADDTIP:hostUrl+'tips/add?access-token=test', 
					EDITTIP:hostUrl+'tips/edit?access-token=test', 
					EVALUATETIP:hostUrl+'tips/evaluate?access-token=test', 
					ADDFAVORITE:hostUrl+'user/favorites/add?access-token=test', 
					//新闻相关
					GETNEWSLIST:hostUrl+'news/list?access-token=test', 
					GETNEWSCONTENT:hostUrl+'news/get?access-token=test', 
					BOOKNEWS:hostUrl+'news/book?access-token=test', 
					
				//预测发布
					GETPREDICTION:hostUrl+'prediction/get?access-token=test', 
					ADDPREDICTION:hostUrl+'prediction/add?access-token=test', 
					EDITPREDICTION:hostUrl+'prediction/edit?access-token=test', 
					
				//Coverpage页
					COVERPAGEGET: hostUrl+'coverpage/get?access-token=test', 
					REPORTADD:hostUrl+'report/add?access-token=test',
					
				//修改历史页面
					HISTORYTIP:hostUrl+'history/tip?access-token=test', 
					HISTORYPREDICTION:hostUrl+'history/prediction?access-token=test', 
					
				//"我的"页面
					MYPROFILE:hostUrl+'user/get?access-token=test', 
					MYPROFILEEDIT:hostUrl+'user/edit?access-token=test', 
					MYPUBS:hostUrl+'user/pubs?access-token=test', 
					MYFAVORITES:hostUrl+'user/collection?access-token=test', 
					MYBOUGHTS:hostUrl+'user/buylog?access-token=test', 
					MYAPPLY:hostUrl+'user/applyvip?access-token=test', 
					
				//动态页
					GETFEED:hostUrl+'feed/get?access-token=test', 
					
				//评论相关
					GETCOMMENT:hostUrl+'discussion/list?access-token=test', 
					ADDCOMMENT:hostUrl+'discussion/add?access-token=test',	
				};
					
			}]);
			
			//Mock api
			mod.factory('APIMOCK', ['$location', function($location){
				var hostUrl = 'http://'+$location.host()+':'+$location.port()+"/";
				return {
				//登陆
					CHECKPHONE:hostUrl+'stkgg/app/mockData/login/checkphone.json', 
					GETCAPCHA:hostUrl+'stkgg/app/mockData/login/getcapcha.json', 
					SENDCODE:hostUrl+'stkgg/app/mockData/login/sendcode.json', 
					LOGIN:hostUrl+'stkgg/app/mockData/login/login.json', 
					REGISTER:hostUrl+'stkgg/app/mockData/login/reg.json', 
					LOGOUT:hostUrl+'stkgg/app/mockData/login/logout.json', 
					FINDPWD:hostUrl+'stkgg/app/mockData/login/findpwd.json', 
					RESETPWD:hostUrl+'stkgg/app/mockData/login/resetpwd.json', 
				//发现页
					SEARCHPUBS:hostUrl+'stkgg/app/mockData/find/search.json', 
					DEFAULTPUBS:hostUrl+'stkgg/app/mockData/find/pubs.json', 
				//创建新PUB页
					SEARCHSTOCK:hostUrl+'stkgg/app/mockData/createPub/stocks.json',
					UPLOADIMG: hostUrl+'stkgg/app/mockData/createPub/img.json', 
					POSTPUB:hostUrl+'stkgg/app/mockData/createPub/postpubs.json',
				//Timeline页
					GETTIMELINE:hostUrl+'stkgg/app/mockData/timeline/timeline2.json', 
					ADDTIP:hostUrl+'stkgg/app/mockData/timeline/add.json', 
					EDITTIP:hostUrl+'stkgg/app/mockData/timeline/edit.json', 
					EVALUATETIP:hostUrl+'stkgg/app/mockData/timeline/evaluate.json', 
					ADDFAVORITE:hostUrl+'stkgg/app/mockData/timeline/fav.json', 
					//新闻相关
					GETNEWSLIST:hostUrl+'stkgg/app/mockData/timeline/getNewsList.json', 
					GETNEWSCONTENT:hostUrl+'stkgg/app/mockData/timeline/getNewsContent.json', 
					BOOKNEWS:hostUrl+'stkgg/app/mockData/timeline/bookNews.json', 
					
				//预测发布
					GETPREDICTION:hostUrl+'stkgg/app/mockData/prediction/get.json',
					ADDPREDICTION:hostUrl+'stkgg/app/mockData/prediction/add.json', 
					EDITPREDICTION:hostUrl+'stkgg/app/mockData/prediction/edit.json',
					
				//Coverpage页
					COVERPAGEGET: hostUrl+'stkgg/app/mockData/coverpage/get.json', 
					REPORTADD:hostUrl+'stkgg/app/mockData/coverpage/report.json',
				//修改历史页面
					HISTORYTIP:hostUrl+'stkgg/app/mockData/history/tip.json', 
					HISTORYPREDICTION:hostUrl+'stkgg/app/mockData/history/prediction.json', 
					
				//"我的"页面
					MYPROFILE:hostUrl+'stkgg/app/mockData/my/profile.json', 
					MYPROFILEEDIT:hostUrl+'stkgg/app/mockData/my/edit.json', 
					MYPUBS:hostUrl+'stkgg/app/mockData/my/pub.json', 
					MYFAVORITES:hostUrl+'stkgg/app/mockData/my/fav.json', 
					MYBOUGHTS:hostUrl+'stkgg/app/mockData/my/bought.json', 
					MYAPPLY:hostUrl+'stkgg/app/mockData/my/apply.json', 
					
				//动态页
					GETFEED:hostUrl+'stkgg/app/mockData/feed/get.json', 
				//评论相关
					GETCOMMENT:hostUrl+'stkgg/app/mockData/comment/get.json', 
					ADDCOMMENT:hostUrl+'stkgg/app/mockData/comment/add.json',
				};
			}]);
	
})();