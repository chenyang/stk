(function(){
	'use strict';
	var mod = angular.module('stock.controller');
	mod.controller("StockAnalysisCtrl", ['$scope', '$modal', '$cookies', '$location',
	                                     function($scope, $modal, $cookies, $location){

		//popover
		$scope.yucePopover = {
				content: '预计一周内跌5%， 跌幅15点',
		};
		
		$scope.pubInfo = {
				sessionId:"IUWID987398OSI", //关联用户
				pubId:15, //关联pub, 
				stockId:123, //关联 stock
				stockName: "中石油",
				stockCode: "06160",
				result:"success", 
				reason: null, 
				desc:"一段评述", 
				owner:"股神小白", 
				available:true,
				prediction:{
					time:7,
					minVal:-2, 
					maxVal:3.5,
					minPect:15, 
					maxPect:20,
					cmt:"预测跌幅较大，建议抛售", 
					lastModifiedTime:'2015-07-01 15:37:28'
				},
				tips:[
				      {
				    	  tipId:1, 
				    	  newsId:2, //关联新闻
				    	  newsTitle:"消息称国务院将特批银行持券商牌照试点", 
				    	  newsDate:"2015-09-09",
				    	  newsContent:"伴随着银行混合所有制改革拉开大幕，混业经营备受关注，放开券商牌照的问题如一把悬在头上的达摩克利斯之剑。日前，《经济参考报》记者从知情人士处获悉，《商业银行法》修改的内容里，除了取消存贷比外，更重要的是涉及银行经营业务范围的进一步完善和补充，给混业经营在法律层面上预留空间。银行受托理财的功能，银行不能直接做信托业务，但实际上银行理财产品已经承担了代客理财、受托投资的功能。收益与风险挂钩，不可能全是刚性兑付，而现实是投资者无法接受损失风险，这也是制度层面不完善所带来的误区。未来银行业在混业经营的趋势下，业务范围需要进一步界定。在监管方面，未来一定是倾向于根据金融机构的具体业务划定监管职责，而非根据机构本身来划定监管，因此协同监管也越来越重要。”鲁政委说。", 
				    	  tipContent:"持续的资金注入难改短期的弱势格局1， 便再次出现大跌", 
				    	  lastModifiedTime:"2015-07-01 16:26", //最后修改时间
				    	  isCollapsedShare:true, 
				    	  isCollapsedCmt:true,
				    	  isModifyTip:false
				      }, 
				      {
				    	  tipId:2, 
				    	  newsId:1, //关联新闻
				    	  newsTitle:"消息称国务院将特批银行持券商牌照试点", 
				    	  newsDate:"2015-09-09",
				    	  newsContent:"伴随着银行混合所有制改革拉开大幕，混业经营备受关注，放开券商牌照的问题如一把悬在头上的达摩克利斯之剑。日前，《经济参考报》记者从知情人士处获悉，《商业银行法》修改的内容里，除了取消存贷比外，更重要的是涉及银行经营业务范围的进一步完善和补充，给混业经营在法律层面上预留空间。银行受托理财的功能，银行不能直接做信托业务，但实际上银行理财产品已经承担了代客理财、受托投资的功能。收益与风险挂钩，不可能全是刚性兑付，而现实是投资者无法接受损失风险，这也是制度层面不完善所带来的误区。未来银行业在混业经营的趋势下，业务范围需要进一步界定。在监管方面，未来一定是倾向于根据金融机构的具体业务划定监管职责，而非根据机构本身来划定监管，因此协同监管也越来越重要。”鲁政委说。", 
				    	  tipContent:"持续的资金注入难改短期的弱势格局1， 便再次出现大跌", 
				    	  lastModifiedTime:"2015-07-01 16:26", //最后修改时间
				    	  isCollapsedShare:true, 
				    	  isCollapsedCmt:true,
				    	  isModifyTip:false
				      }, 
				      {
				    	  tipId:3, 
				    	  newsId:2, //关联新闻
				    	  newsTitle:"消息称国务院将特批银行持券商牌照试点", 
				    	  newsDate:"2015-09-09",
				    	  newsContent:"伴随着银行混合所有制改革拉开大幕，混业经营备受关注，放开券商牌照的问题如一把悬在头上的达摩克利斯之剑。日前，《经济参考报》记者从知情人士处获悉，《商业银行法》修改的内容里，除了取消存贷比外，更重要的是涉及银行经营业务范围的进一步完善和补充，给混业经营在法律层面上预留空间。银行受托理财的功能，银行不能直接做信托业务，但实际上银行理财产品已经承担了代客理财、受托投资的功能。收益与风险挂钩，不可能全是刚性兑付，而现实是投资者无法接受损失风险，这也是制度层面不完善所带来的误区。未来银行业在混业经营的趋势下，业务范围需要进一步界定。在监管方面，未来一定是倾向于根据金融机构的具体业务划定监管职责，而非根据机构本身来划定监管，因此协同监管也越来越重要。”鲁政委说。", 
				    	  tipContent:"持续的资金注入难改短期的弱势格局1， 便再次出现大跌", 
				    	  lastModifiedTime:"2015-07-01 16:26", //最后修改时间
				    	  isCollapsedShare:true, 
				    	  isCollapsedCmt:true,
				    	  isModifyTip:false
				      }
				      ]
		};

		//查看我的预测
		$scope.modifyMyPrediction = function(){

		};

		$scope.modifyTip = function(item){
			item.isModifyTip = !item.isModifyTip;
			if(!item.isModifyTip){//保存修改
				item.lastModifiedTime = new Date();
			}
		};

		$scope.pubDetail = function(item){
			item.available = $scope.pubInfo.available;
			//not yet bought
			if(!item.available){
				$location.path("/buyCmt");
			}else{
				//check if tipId is already visited
				var cookieAllVisitedTipId = $cookies.getObject('cookieAllVisitedTipId');
				console.log(cookieAllVisitedTipId);
				if(_.isEmpty($cookies.getObject('cookieAllVisitedTipId'))){
					cookieAllVisitedTipId = [];
					$cookies.putObject('cookieAllVisitedTipId', cookieAllVisitedTipId);
				};
				if(_.contains(cookieAllVisitedTipId, item.tipId)){
					alert('cookie 已经访问过 tipId '+item.tipId+", 直接进入相关timeline页");
					$location.path("/stkAnal");
				}else{
					cookieAllVisitedTipId = $cookies.getObject('cookieAllVisitedTipId');
					cookieAllVisitedTipId.push(item.tipId);
					$cookies.putObject('cookieAllVisitedTipId', cookieAllVisitedTipId);
					$location.path("/buyCmt");
				}
			}

		};

		$scope.gotoProfile = function(){
			$location.path("/profileDetail");
		};

		/**charts**/
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
						tickFormat: function(d){
							return d3.format('.02f')(d);
						},
						axisLabelDistance: 30, 
						showMaxMin: false
					},
					callback: function(chart){
						console.log("!!! lineChart callback !!!");
					}
				}, 
				title: {
					enable: true,
					text: '中国中车(06160)'
				},
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
		 * modal for stock comment
		 */
		$scope.openModal = function(item){
			var modalInstance = $modal.open({
				animation: true,
				templateUrl: 'views/modal/stockCmtModal.html',
				controller: 'StockCmtCtrl',
				resolve: {
					prediction: function () {
						var prediction = item.prediction;
						if(!_.isEmpty(prediction)){
							prediction.userId = item.userId;
						}
						return prediction;
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

		/** initialization **/
		var init = function(){

		};

		//Init
		init();
	}]);
})();