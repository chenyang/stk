(function(){
	'use strict';
	var mod = angular.module('stock.controller');
	mod.controller("StockAnalysisCtrl", ['$scope', '$modal', function($scope, $modal){

		//repeated parts
		$scope.items = _.range(1, 20);
		
		//default show kchart is false
		$scope.isCollapsedKChart = true;
		
		var createKChart = function(){
			/**K 线图 **/
			// 图表实例化------------------
			// srcipt标签式引入
			$("#kchart").height($(window).width()*0.6);
			$("#kchart").width($(window).width()*1.15);
			var myChart = echarts.init(document.getElementById("kchart"));
			console.log(myChart);
			// 过渡---------------------
			myChart.showLoading({
				text: '正在努力的读取数据中...',    //loading话术
			});
			// ajax getting data...............
			// ajax callback
			myChart.hideLoading();

			// 图表使用-------------------
			var option = {
					title : {
						text: '中国中车(06160)', 
						x:($(document).width()/2)-40
					},
					tooltip : {
						trigger: 'axis',
						formatter: function (params) {
							var res = params[0].seriesName + ' ' + params[0].name;
							res += '<br/>  开盘 : ' + params[0].value[0] + '  最高 : ' + params[0].value[3];
							res += '<br/>  收盘 : ' + params[0].value[1] + '  最低 : ' + params[0].value[2];
							return res;
						}
					},
					dataZoom : {
						show : true,
						realtime: true,
						start : 50,
						end : 100
					},
					xAxis : [
					         {
					        	 type : 'category',
					        	 boundaryGap : true,
					        	 axisTick: {onGap:false},
					        	 splitLine: {show:false},
					        	 data : [
					        	         "2013/1/24", "2013/1/25", "2013/1/28", "2013/1/29", "2013/1/30",
					        	         "2013/1/31", "2013/2/1", "2013/2/4", "2013/2/5", "2013/2/6", 
					        	         "2013/2/7", "2013/2/8", "2013/2/18", "2013/2/19", "2013/2/20", 
					        	         "2013/2/21", "2013/2/22", "2013/2/25", "2013/2/26", "2013/2/27", 
					        	         "2013/2/28", "2013/3/1", "2013/3/4", "2013/3/5", "2013/3/6", 
					        	         "2013/3/7", "2013/3/8", "2013/3/11", "2013/3/12", "2013/3/13", 
					        	         "2013/3/14", "2013/3/15", "2013/3/18", "2013/3/19", "2013/3/20" 
					        	         ]
					         }
					         ],
					         yAxis : [
					                  {
					                	  type : 'value',
					                	  scale:true,
					                	  boundaryGap: [0.01, 0.01]
					                  }
					                  ],
					                  series : [
					                            {
					                            	name:'上证指数',
					                            	type:'k',
					                            	data:[ // 开盘，收盘，最低，最高
					                            	       [2320.26,2302.6,2287.3,2362.94],
					                            	       [2300,2291.3,2288.26,2308.38],
					                            	       [2295.35,2346.5,2295.35,2346.92],
					                            	       [2347.22,2358.98,2337.35,2363.8],
					                            	       [2360.75,2382.48,2347.89,2383.76],
					                            	       [2383.43,2385.42,2371.23,2391.82],
					                            	       [2377.41,2419.02,2369.57,2421.15],
					                            	       [2425.92,2428.15,2417.58,2440.38],
					                            	       [2411,2433.13,2403.3,2437.42],
					                            	       [2432.68,2434.48,2427.7,2441.73],
					                            	       [2430.69,2418.53,2394.22,2433.89],
					                            	       [2416.62,2432.4,2414.4,2443.03],
					                            	       [2441.91,2421.56,2415.43,2444.8],
					                            	       [2420.26,2382.91,2373.53,2427.07],
					                            	       [2383.49,2397.18,2370.61,2397.94],
					                            	       [2378.82,2325.95,2309.17,2378.82],
					                            	       [2322.94,2314.16,2308.76,2330.88],
					                            	       [2320.62,2325.82,2315.01,2338.78],
					                            	       [2313.74,2293.34,2289.89,2340.71],
					                            	       [2297.77,2313.22,2292.03,2324.63],
					                            	       [2322.32,2365.59,2308.92,2366.16],
					                            	       [2364.54,2359.51,2330.86,2369.65],
					                            	       [2332.08,2273.4,2259.25,2333.54],
					                            	       [2274.81,2326.31,2270.1,2328.14],
					                            	       [2333.61,2347.18,2321.6,2351.44],
					                            	       [2340.44,2324.29,2304.27,2352.02],
					                            	       [2326.42,2318.61,2314.59,2333.67],
					                            	       [2314.68,2310.59,2296.58,2320.96],
					                            	       [2309.16,2286.6,2264.83,2333.29],
					                            	       [2282.17,2263.97,2253.25,2286.33],
					                            	       [2255.77,2270.28,2253.31,2276.22],
					                            	       [2269.31,2278.4,2250,2312.08],
					                            	       [2267.29,2240.02,2239.21,2276.05],
					                            	       [2244.26,2257.43,2232.02,2261.31],
					                            	       [2257.74,2317.37,2257.42,2317.86],
					                            	       ]
					                            }
					                            ]
			};
			myChart.setOption(option);
			/*
			// 图表清空-------------------
			myChart.clear();

			// 图表释放-------------------
			myChart.dispose();
			 */
		};
		
		var adjustPosition = function(isInit){
			console.log('change', isInit);
			
			var adjustHeight = (isInit==false?($("#kchart").height()+80):80);
			$(".stock-analysis .stock-gushen-comment").css("margin-top", adjustHeight+"px");
		};
		
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
		
		/**watcher**/
		$scope.$watch('isCollapsedKChart', function(newValue, oldValue) {
			adjustPosition(newValue);
		});
		
		
		/** initialization **/
		var init = function(){
			createKChart();
			adjustPosition(true);
		};
		
		//Init
		init();
	}]);
})();