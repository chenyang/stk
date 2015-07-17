(function(){
	'use strict';
	var mod = angular.module('user.controller');
	
	mod.controller("LoginCtrl", ['$scope', function($scope){
		
		$(window).scroll(function () {
			console.log($("#cc").offset().top+", "+$(window).scrollTop()+", "+($("#cc").offset().top - $(window).scrollTop()));
			
			var eTop = $('#aa').offset().top;
			var scrolltopAA = eTop - $(window).scrollTop();
			if(scrolltopAA<=0){
				$("#bb").css({"position": "fixed", "top":"50px"});
				$("#cc").css({"position": "absolute", "top":"250px"});
				
			}else{
				$("#bb").css({"position": "relative", "top":"0"});
				$("#cc").css({"position": "relative", "top":"0"});
			}
		});
		
		
		
	}]);

})();