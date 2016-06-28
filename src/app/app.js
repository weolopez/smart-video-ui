'use strict';
var videoData;
var svmodule = angular.module('smartvideo', ['ngRoute','ngSanitize','com.att.controllers.config']);
svmodule.controller("SVMainController",['$rootScope','$scope','$http','$q','config',function($rootScope,$scope,$http,$q,config){
	$rootScope.seekedTime="";
	$rootScope.datatype = "";
	
	$scope.videojs="";
	
	function getParameterByName(name) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex
				.exec(location.search);
		return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g,
				" "));
	}
	angular.element(document).ready(function(){
		
		/*var type = getParameterByName('type');
		if (type == ""){
			type="orderstatus";
		}*/
		
		var id=getParameterByName('id');
		$scope.videoId=id;
		
/***********************GOOGLE ANALYTICS EVENT TRACKING-START**********************************/
        
        //Code for Event tracking
		/*var _gaq = _gaq || [];
		_gaq.push(['_setAccount','UA-52702404-1']);
		_gaq.push(['_trackPageview']);
		
		//Tracking Id of the video
		_gaq.push(["_trackPageview", 'videoID='+id]); 
		
		//Tracking the link visits
		$("a").each(function() {
			$(this).click(function(event) {
				gaq(event,$(this));
			});
		});*/

	/*	function gaq(event,obj) { // when someone clicks these links
			event.preventDefault(); // don't open the link yet
			var href = $(obj).attr("href");
			var target = $(obj).attr("target");
			_gaq.push(["_trackPageview", href]); // create a dynamic pageview
			setTimeout(function() { // now wait 300 milliseconds...
				console.log('Event recorded');
				window.open(href, (!target ? "_self" : target)); // ...and open the link as usual
			}, 300);
		}*/
      
/***********************GOOGLE ANALYTICS EVENT TRACKING - END**********************************/		
		
var url=config.dataPath+id+'/script.json';
url="assets/data/script.json";
		$http.get(url).success(function(res){
			$rootScope.videoData=res;
			$scope.videoType=res.videoType;
			videoData=res;
			
			getVideo(res);
			setPlayerReady(res);

		});
		
	
		/*var vid = document.getElementById("ourvideo");
		vid.onpause = function() {
			$('.animate').css('animation-play-state', 'paused');
		};
		vid.onplaying = function() {
			$('.animate').css('animation-play-state', 'running');
		};
		vid.onseeking = function() {
			$('.animate').css('animation-play-state', 'paused');
			// $('.effect').css('animation-iteration-count','1');
		};*/
		
	});

	
function setPlayerReady(data){
	$("#canvas").show();
	var audioPath=config.audioPath+$scope.videoId+'/'+data.media;
	var audioType="audio/mp3";
	
	audioPath="app/template/homesolution/audio/vo9.mp3";
	if(data.media!=undefined)
	{
		if(data.media.indexOf('.m4a')!=-1)
		{
			audioType="audio/mp4";
		}
		
	}
	$('#videoViewport').append('<audio id="canvasAudio" class="video-js vjs-default-skin"  controls preload="auto" ></audio>');
	$('#canvasAudio').append('<source id="CanvasaudioSource" src="'+audioPath+'" type="'+audioType+'" />');
	if ((data.closedCaption != undefined)&&(data.closedCaption != ""))
		{
		var ccpath=config.audioPath+$scope.videoId+'/'+data.closedCaption;
		$('#canvasAudio').append('<track id="cc" kind="captions" src="'+ccpath+'" srclang="en" label="Caption" default/>');
		}
	/*.append(
			'  <track id="cc" kind="captions" src="" srclang="en" label="Caption" default><track id="subtit" kind="subtitles" src="" srclang="en" label="English" default><track id="chptr" kind="chapters" src="" srclang="en"></audio>');*/
	/*$("#videoViewport").append(
			$("#canvasvideo"));*/
}

	$scope.$on("controllerLoaded",function(){
		$scope.templateUrl="app/template/"+$scope.videoType+"/template/animate.html";
	});
function getVideo(data){


		if (data != undefined){
			var templ=data.videoType;
						
			
			$('link[rel=stylesheet][href*="style.css"]').remove();
			if (data.format == "css"){
			var l = document.createElement('link');
			l.type="text/css";
			l.rel="stylesheet";
			  l.href = "app/template/"+templ+"/css/style.css";
			  
			  document.getElementsByTagName('head')[0].appendChild(l);
		}
			  var deferred = $q.defer();
			 
			 
				  var jsUrl="app/template/"+templ+"/js/animate.js";
				  $script(
							jsUrl,
							function() {
								$rootScope.$apply(function() {
									
									deferred.resolve();
									if (data.format == "css"){
									$scope.$broadcast("controllerLoaded");
									}
								});
																
							});
			

		}
	}
	
	
	
	
}]);
svmodule
.config([
			'$routeProvider','$controllerProvider',function($routeProvider,$controllerProvider) {
				svmodule.controllerProvider = $controllerProvider;
			}]);
			