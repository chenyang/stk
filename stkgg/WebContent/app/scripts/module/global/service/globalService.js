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
			 {  when:"/stockAnalysis", 
				 templateUrl:"views/stockAnalysis.html"
			 }, 
			 {  when:"/stockCmt", 
				 templateUrl:"views/stockCmt.html"
			 }, 
			 {  when:"/login", 
				 templateUrl:"views/login.html"
			 }, 
			 {
				when:"/register",
				templateUrl:"views/register.html"
			 }
			 ]);
	
})();