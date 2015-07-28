(function(){
	'use strict';
	var mod = angular.module('stock.controller');
	mod.controller("StockAnalysisCtrl", ['$scope', '$modal', function($scope, $modal){

		$scope.repeatCommentBlock = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 
		                             '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];

		$scope.options = {
				chart: {
					type: 'lineChart',
					height: 170,
					margin : {
						top: 20,
						right: 5,
						bottom: 40,
						left: 35
					},
					x: function(d){ return d.x; },
					y: function(d){ return d.y; },	
					useInteractiveGuideline: true,
					dispatch: {
						stateChange: function(e){ console.log("stateChange"); },
						changeState: function(e){ console.log("changeState"); },
						tooltipShow: function(e){ console.log("tooltipShow"); },
						tooltipHide: function(e){ console.log("tooltipHide"); }
					},
					xAxis: {
						axisLabel: '证监会公告日期', 
						tickFormat: function(d) {
							//in data list is epoch time
	                        return d3.time.format('%x')(new Date(d*1000));
	                    },
	                    showMaxMin: false
					},
					yAxis: {
						axisLabel: 'Voltage (v)',
						tickFormat: function(d){
							return d3.format('.02f')(d);
						},
						axisLabelDistance: 30, 
						showMaxMin: false
					},
					callback: function(chart){
						console.log("!!! lineChart callback !!!");
					}
				}
		};

		/**
		 * generateMockData
		 */
		function generateMockData(){
			var data1 = [
			             	{
			             		x: 1434326400,
			             		y: 15.7
			             	}, 
			             	{
			             		x: 1434585600,
			             		y: 15.8
			             	}, 
			             	{
			             		x: 1434758400,
			             		y: 12.7
			             	}, 
			             	{
			             		x: 1434931200,
			             		y: 18.7
			             	}, 
			             	{
			             		x: 1435190400,
			             		y: 12.6
			             	}, 
			             	{
			             		x: 1435276800,
			             		y: 15.8
			             	}, 
			             	{
			             		x: 1435363200,
			             		y: 16.8
			             	}, 
			             	{
			             		x: 1435622400,
			             		y: 18.2
			             	}
		             	];
			var data2 = [
			             	{
								x: 1434326400,
								y: 11.7
							}, 
							{
								x: 1434585600,
								y: 12.8
							}, 
							{
								x: 1434758400,
								y: 12.9
							}, 
							{
								x: 1434931200,
								y: 12.1
							}, 
							{
								x: 1435190400,
								y: 11.23
							}, 
							{
								x: 1435276800,
								y: 11.5
							}, 
							{
								x: 1435363200,
								y: 13.2
							}, 
							{
								x: 1435622400,
								y: 12.9
							}
			             ];
			
			return [
			        {
			        	values: data1,      //values - represents the array of {x,y} data points
			        	key: '市值', //key  - the name of the series.
			        	color: '#ff7f0e'  //color - optional: choose your own line color.
			        }, 
			        {
			        	values: data2,      //values - represents the array of {x,y} data points
			        	key: 'A股行情', //key  - the name of the series.
			        	color: 'green'  //color - optional: choose your own line color.
			        }
			        ];
			
		}
		$scope.data = generateMockData();

		/**
		 * calculate offset
		 */
		$(window).scroll(function () {
			var navTooltip = $("[id^='nvtooltip-']");
			navTooltip.css("top", $(window).scrollTop()*(-1)+"px");
			navTooltip.css("opacity", "0");
		});
		
		
		/**
		 * modal for stock comment
		 */
		$scope.openModal = function(){
			var modalInstance = $modal.open({
		      animation: true,
		      templateUrl: 'views/modal/stockCmtModal.html',
		      controller: 'StockCmtCtrl',
		      resolve: {
		        items: function () {
		          return ['it1', 'it2', 'it3'];
		        }
		      }
		    });

		    modalInstance.result.then(function (selectedItem) {
		    	//selected
		      $scope.selected = selectedItem;
		    }, function () {
		    	//canceled
		      console.log('Modal dismissed at: ' + new Date());
		    });
		  };
		
	}]);
	
})();