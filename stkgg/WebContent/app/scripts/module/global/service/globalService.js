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
			 {  when:"/buyCmt", 
				 templateUrl:"views/buyCmt.html"
			 }, 
			 {  when:"/login", 
				 templateUrl:"views/login.html"
			 }, 
			 {  when:"/createPub", 
				 templateUrl:"views/createPub.html"
			 },
			 {  when:"/trendFollow", 
				 templateUrl:"views/trendFollow.html"
			 }, 
			 {  when:"/history/tip/:tipId", 
				 templateUrl:"views/historyTip.html"
			 }, 
			 {  when:"/history/preview/:tipId", 
				 templateUrl:"views/historyPreview.html"
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
			 {  when:"/buyPub",
					templateUrl:"views/buyPub.html"
				 },
			 {  when:"/register",
				templateUrl:"views/register.html"
			 },
			 
			 //项目进展
			 {  when:"/projectProgress",
				templateUrl:"views/project_progress.html"
			 }	 
			 ]);
	
})();