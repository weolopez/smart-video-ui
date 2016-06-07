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
					
var caption=[];
$(window).ready(function() {
	var data=$rootScope.videoData;
	assignData(data);
	

});

function assignData(data) {
	var audio = $("#ourvideo");
	$("#audioSource").attr("src", "app/template/ecare/audio/"+data.topicId+".mp3");
	$rootScope.$broadcast("changeplayer");
	audio[0].pause();
	audio[0].load();
	$scope.tut.title=data.articleName;
	$scope.tut.steps=data.steps.step;
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
	$('.webpagedivseg').addClass('showContent');
	var animate1 = [ {
		"element" : ".welcometxt",
		"classname" : "zoomIn animated"
	} ];
	var animate2 = [ {
		"element" : ".welcometxt",
		"classname" : "welcometxtAni animated"
	}, {
		"element" : ".bubble",
		"classname" : "zoomIn animated"
	}, {
		"element" : ".phone",
		"classname" : "flipInY animated"
	}, {
		"element" : ".text",
		"classname" : "slideInRight animated"
	}, {
		"element" : ".notes",
		"classname" : "notesAni animated"
	}, {
		"element" : ".stepNum",
		"classname" : "flipInY animated"
	} ];
	var animate3 = [ {
		"element" : ".welcometxt",
		"classname" : "welcometxtAni animated"
	}, {
		"element" : ".phone",
		"classname" : "flipInY animated"
	}, {
		"element" : ".text",
		"classname" : "slideInRight animated"
	}, {
		"element" : ".notes",
		"classname" : "notesAni animated"
	}, {
		"element" : ".stepNum",
		"classname" : "flipInY animated"
	} ];
	
	var items=[[ 0, 0.5 ], [ 0.5, 2, animate1 ], [ 2, 3, animate2 ]];
	
	var interval=5;
	var frameDuration=5+interval;
	var startTime=3;
	$scope.tut.steps.forEach(function(item){
		if (item.stepOrder != "1"){
			startTime=frameDuration;
			frameDuration=frameDuration+10;
		}
		var draft=[startTime,frameDuration,animate3];
		items.push(draft);
	});
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
				
