'use strict';
svmodule.controllerProvider
.register(
		'ecareController',
		[
				'$scope',
				'$http',
				'$rootScope',
				
				function($scope, $http, $rootScope) {
					$scope.tut={};
					$scope.id=0;
					
					$scope.getId=function(){
						$scope.id=$scope.id+1;
						console.log($scope.id);
						return "webpagediv"+$scope.id;
					}
var caption=[];
$(window).ready(function() {
	$('.webpagedivseg').addClass('showContent');
	var data=$rootScope.videoData;
	assignData(data);
});

function assignData(data) {
	var audio = $("#ourvideo");
	$("#audioSource").attr("src", "app/template/ecare/audio/"+data.topicId);
	$rootScope.$broadcast("changeplayer");
	audio[0].pause();
	audio[0].load();
	$scope.tut.title=data.articleName;
		if (data.caption != undefined){
		jQuery.get(data.caption,function(res){
			$rootScope.showCC=true;
			caption=res;
			setTimeout(function() {
				runVideo();
			}, 2000);
		
	}).fail(function(res) {
		
		setTimeout(function() {
			runVideo();
		}, 2000);
	});
		}
		else
			{
			setTimeout(function() {
				runVideo();
			}, 3000);
			}
}



function runVideo() {
	var animate0 = [ {
		"element" : ".att-globe",
		"classname" : "attGlobeAni animated"
	} ];
	var animate1 = [ {
		"element" : ".animate",
		"classname" : "logoanimation"
	},{
		"element" : ".dtv_logo",
		"classname" : "slideInRight animated"
	},{
		"element" : ".orange",
		"classname" : "zoomIn animated"
	},{
		"element" : ".people1",
		"classname" : "slideInLeft animated"
	}  ];
	var animate2 = [ {
		"element" : ".people2",
		"classname" : "people12Ani animated"
	}, {
		"element" : ".green",
		"classname" : "zoomIn animated"
	},
	{
		"element" : ".pink",
		"classname" : "zoomIn animated"
	}, {
		"element" : ".hitxt",
		"classname" : "hitxtAni animated"
	}];
	var animate3 = [ {
		"element" : ".hitxt",
		"classname" : "hitxtAni animated"
	}];
	var animate4 = [ {
		"element" : ".orange",
		"classname" : "fadeOut animated"
	}, {
		"element" : ".people12",
		"classname" : "bounceOut animated"
	}, {
		"element" : ".green",
		"classname" : "zoomOut animated"
	}, {
		"element" : ".people1",
		"classname" : "zoomOut animated"
	},  {
		"element" : ".pink",
		"classname" : "rotateOut animated"
	}, {
		"element" : ".userNameFirst",
		"classname" : "flipOutX animated"
	} ];
	var animate5 = [ {
		"element" : ".tv",
		"classname" : "zoomIn animated"
	}, {
		"element" : ".orderTxt",
		"classname" : "slideInLeft animated"
	}];
	var animate6 = [ {
		"element" : ".package",
		"classname" : "flipInY animated"
		
	},{
		"element" : ".plus",
		"classname" : "zoomIn animated"
	}, {
		"element" : ".internet",
		"classname" : "zoomIn animated"
		
	} ];
	var animate7 = [ {
		"element" : ".package",
		"classname" : "flipOutY animated"
	}, {
		"element" : ".orderTxt",
		"classname" : "slideOutLeft animated"
	},{
		"element" : ".tv",
		"classname" : "zoomOut animated"
	},{
		"element" : ".plus",
		"classname" : "zoomOut animated"
	},{
		"element" : ".internet",
		"classname" : "zoomOut animated"
	}   ];
	var animate8 = [ {
		"element" : ".orderText",
		"classname" : "flipInX animated"
	}, {
		"element" : ".calendar",
		"classname" : "zoomIn animated"
	}, {
		"element" : ".green21",
		"classname" : "pulse animated",
		"count":"infinite"
	}, {
		"element" : ".schDate",
		"classname" : "schDateAni animated"
	}, {
		"element" : ".schTime",
		"classname" : "schTimeAni animated"
	}];
	var animate9 = [  {
		"element" : ".orderText",
		"classname" : "flipOutX animated"
	}, {
		"element" : ".calendar",
		"classname" : "zoomOut animated"
	}, {
		"element" : ".green21",
		"classname" : "zoomOut animated"
	}, {
		"element" : ".schDate",
		"classname" : "zoomOut animated"
	}, {
		"element" : ".schTime",
		"classname" : "zoomOut animated"
	} ];
	var animate10 = [ {
		"element" : ".orderTxt",
		"classname" : "slideInLeft animated"
	}, {
		"element" : ".people_13",
		"classname" : "zoomIn animated"
	}, {
		"element" : ".green31",
		"classname" : "green31Ani animated"
	}, {
		"element" : ".orange31",
		"classname" : "orange31Ani animated"
	}, {
		"element" : ".chklist1",
		"classname" : "chklist1Ani animated"
	},{
		"element" : ".chklist2",
		"classname" : "chklist2Ani animated"
	},{
		"element" : ".chklist3",
		"classname" : "chklist3Ani animated"
	},{
		"element" : ".chklist4",
		"classname" : "chklist4Ani animated"
	} ];
	var animate11 = [ {
		"element" : ".orderTxt",
		"classname" : "slideOutLeft animated"
	}, {
		"element" : ".people_13",
		"classname" : "zoomOut animated"
	}, {
		"element" : ".green31",
		"classname" : "zoomOut animated"
	}, {
		"element" : ".orange31",
		"classname" : "zoomOut animated"
	}, {
		"element" : ".chklist1",
		"classname" : "flipOutX animated"
	},{
		"element" : ".chklist2",
		"classname" : "flipOutX animated"
	},{
		"element" : ".chklist3",
		"classname" : "flipOutX animated"
	},{
		"element" : ".chklist4",
		"classname" : "flipOutX animated"
	} ];
	var animate12 = [ {
		"element" : ".orderTxt",
		"classname" : "slideInLeft animated"
	}, {
		"element" : ".people_14",
		"classname" : "flipInY animated"
	}, {
		"element" : ".green41",
		"classname" : "green41Ani animated"
	},{
		"element" : ".orange41",
		"classname" : "orange41Ani animated"
	},{
		"element" : ".btn1",
		"classname" : "btn1Ani animated"
	},{
		"element" : ".btn2",
		"classname" : "btn2Ani animated"
	},{
		"element" : ".btn3",
		"classname" : "btn3Ani animated"
	} ];
	
	var items = [ [ 0, 0.5], [ 0.5, 2.5,animate0 ],
	  			[ 2.5, 3.5, animate1 ],
	  			[ 3.5, 5, animate2 ],
	  			
	  			[ 5, 6, animate4 ],
	  			[ 6, 7,  animate5 ],
	  			[ 7, 24, animate6 ],
	  			[ 24, 25, animate7 ],
	  			[ 25, 36, animate8 ],
	  			[ 36, 37,  animate9 ],
	  			[ 37, 65,  animate10 ],
	  			[ 65, 66,  animate11 ],
	  			[ 66, 111,  animate12 ],
	  			[111,114]
	  			 ];
	var pop = Popcorn("#ourvideo");
	for (var i = 0; i < items.length; i++) {
		pop
				.code({
					start : items[i][0],
					end : items[i][1],
					ind : i,
					classname : items[i][2],
					onStart : function(options) {
						if (options.ind == 0) {
							document.getElementById("imgdiv1").style.display = "none";
							document.getElementById("videoViewport").style.display = "block";
							$('#webpagediv' + options.ind).show();
						}
						if (options.classname != undefined) {
							$('#webpagediv' + options.ind).show();
							
							
								options.classname.forEach(function(item) {
									if (item.count != undefined) {
										$('#webpagediv' + options.ind).find(
												item.element).css(
												'animation-iteration-count',
												item.count);
									}
									$('#webpagediv' + options.ind).find(
											item.element).addClass(
											item.classname);
								});
							
						} else {
							document.getElementById("webpagediv" + options.ind).style.display = "block";
						}
						
					},
					onEnd : function(options) {
						if (options.classname != undefined) {
														
								options.classname.forEach(function(item) {
									if (item.count != undefined) {
										$('#webpagediv' + options.ind).find(
												item.element).css(
												'animation-iteration-count',
												'0');
									}
									$('#webpagediv' + options.ind).find(
											item.element).removeClass(
											item.classname).width();
								});
							
							document.getElementById("webpagediv" + options.ind).style.display = "none";

						} else {

							document.getElementById("webpagediv" + options.ind).style.display = "none";
						}
					}
				});
	}
	if ($rootScope.showCC){
	caption.forEach(function(item){
		pop.footnote({
			start: item.start,
			  end: item.end,
			  text: item.text,
			  target: "closedCaption"
		});
	});}
	$('.audioplayer-playpause a').trigger('click');

}
				}]);
				
