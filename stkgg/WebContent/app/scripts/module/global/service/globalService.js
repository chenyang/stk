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
			 {  when:"/stkCmt", 
				 templateUrl:"views/stockCmt.html"
			 }, 
			 {  when:"/buyCmt", 
				 templateUrl:"views/buyCmt.html"
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