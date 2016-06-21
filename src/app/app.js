'use strict';
var videoData;
var svmodule = angular.module('smartvideo', ['ngRoute','ngSanitize','com.att.controllers.config']);
svmodule.controller("SVMainController",['$rootScope','$scope','$http','$q','config',function($rootScope,$scope,$http,$q,config){
	$rootScope.showCC=false;
	$rootScope.seekedTime="";
	$rootScope.datatype = "";
	$scope.playlists=[];
	$scope.showPlaylists=false;
	$scope.fullScreenMode=false;
	$scope.showHeader=true;
	$scope.videojs="";
	function getParameterByName(name) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex
				.exec(location.search);
		return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g,
				" "));
	}
	angular.element(document).ready(function(){
		
		var type = getParameterByName('type');
		if (type == ""){
			type="orderstatus";
		}
		$scope.videoType=type;
		
		var id=getParameterByName('id');
		$scope.videoId=id;
		
/***********************GOOGLE ANALYTICS EVENT TRACKING-START**********************************/
        
        //Code for Event tracking
		var _gaq = _gaq || [];
		_gaq.push(['_setAccount','UA-52702404-1']);
		_gaq.push(['_trackPageview']);
		
		//Tracking Id of the video
		_gaq.push(["_trackPageview", 'videoID='+id]); 
		
		//Tracking the link visits
		$("a").each(function() {
			$(this).click(function(event) {
				gaq(event,$(this));
			});
		});

		function gaq(event,obj) { // when someone clicks these links
			event.preventDefault(); // don't open the link yet
			var href = $(obj).attr("href");
			var target = $(obj).attr("target");
			_gaq.push(["_trackPageview", href]); // create a dynamic pageview
			setTimeout(function() { // now wait 300 milliseconds...
				console.log('Event recorded');
				window.open(href, (!target ? "_self" : target)); // ...and open the link as usual
			}, 300);
		}
      
/***********************GOOGLE ANALYTICS EVENT TRACKING - END**********************************/		
		

		
		if (type != "ecare"){
		$http.get(config.dataPath+id+'/script.json').success(function(res){
			$rootScope.videoData=res;
			
			videoData=res;
			videoData.audio=config.audioPath+id+'/output.wav';
			if(type=="adobeanimate")
				{
				changeCSS('../svp/lib/videojs/global.css',0);
				$("#canvas").show();
				$('.video-js-responsive-container')
				.prepend(
						' <audio id="canvasvideo" class="video-js vjs-default-skin"  controls preload="auto" height="100%" width="100%" > <source id="CanvasaudioSource" src="" type="" /><track id="cc" kind="captions" src="" srclang="en" label="Caption" default><track id="subtit" kind="subtitles" src="" srclang="en" label="English" default><track id="chptr" kind="chapters" src="" srclang="en"></audio>');
				
				$("#CanvasaudioSource").attr("src",
						videoData.media);
				if(videoData.media!=undefined)
					{
						if(videoData.media.indexOf('.m4a')==-1)
						{
							$("#CanvasaudioSource").attr("type","audio/mp3");
						}
						else{
							$("#CanvasaudioSource").attr("type","audio/mp4");
						}
					}
					else
					{
						$("#CanvasaudioSource").attr("type","audio/mp3");
					}
				$("#cc").attr("src",
				"assets/data/os_caption.vtt");
				$("#subtit").attr("src",
						"assets/data/os_subtitle.vtt");
				$("#chptr").attr("src",
				"assets/data/os_chapter.vtt");
				
				$("#videoViewport").append(
						$("#canvasvideo"));
				
				videojs = videojs("canvasvideo", {
					"controls" : true,
					"autoplay" : true,
					"preload" : "auto",
					"html5": {
					    nativeTextTracks: false
					}
				},function() {});
				$("#canvas").insertBefore(
						$(".vjs-tech"));
				

				videojs.on('play', function(e) {
					
					// createjs.Ticker.addEventListener("tick", stage);
					createjs.Ticker.paused = false;
				});
				videojs.on('pause', function(e) {
					createjs.Ticker.paused = true;
					
				});
				videojs.on("seeked", function() {
					seekedTime = this.currentTime();
					
				});
				/*$("#imgdiv1").insertBefore($(".vjs-tech"));
				$("#videoViewport")
						.insertBefore($(".vjs-tech"));*/
			}
			else
			{
				if(videoData.format!=undefined)
				{
					$rootScope.datatype = videoData.format;
				}
				else
				{
					$rootScope.datatype="html";
				}
				if ($rootScope.datatype != undefined) {
					if ($rootScope.datatype == "html") {
						$("#canvas").hide();
						$('.video-js-responsive-container')
								.prepend(
' <audio id="ourvideo" class="video-js vjs-default-skin" style="display:none;" controls preload="auto" height="100%" width="100%" > <source id="audioSource" src="" type="" /><track id="cc" kind="captions" src="" srclang="en" label="Caption" default><track id="subtit" kind="subtitles" src="" srclang="en" label="English" default><track id="chptr" kind="chapters" src="" srclang="en"></audio>');
						
						$("#audioSource").attr("src",
								videoData.media);
						
								
						if(videoData.media!=undefined)
						{
							if(videoData.media.indexOf('.m4a')==-1)
							{
								$("#audioSource").attr("type","audio/mp3");
							}
							else{
								$("#audioSource").attr("type","audio/mp4");
							}
						}
						else
						{
							$("#audioSource").attr("type","audio/mp3");
						}
						$("#cc").attr("src",
								"assets/data/os_caption.vtt");
						$("#subtit").attr("src",
								"assets/data/os_subtitle.vtt");
						$("#chptr").attr("src",
						"assets/data/os_chapter.vtt");
						$("#videoViewport").insertBefore(
								$(".vjs-tech"));
						
						
					} else {
						$("#canvas").hide();
						$('.video-js-responsive-container')
								.prepend(
										' <video id="newvideo" class="video-js vjs-default-skin"  controls preload="auto" width="100%" height="100%" > <source id="videoSource" src="" type=""><track id="cc" kind="captions" src="" srclang="en" label="Caption" default><track id="subtit" kind="subtitles" src="" srclang="en" label="English" default><track id="chptr" kind="chapters" src="" srclang="en"><button class="previous">Previous</button><button class="next">Next</button><div class="autoadvance-group"><h4>Auto-advance (in seconds)</h4><label><input type="radio" name="autoadvance" value="null" checked> No auto-advance</label><label><input type="radio" name="autoadvance" value="0"> 0</label><label><input type="radio" name="autoadvance" value="5"> 5</label><label><input type="radio" name="autoadvance" value="10"> 10</label><label><input type="radio" name="autoadvance" value="30"> 30</label></div></video>');
						$("#videoSource").attr("src",
								videoData.media);
						if(videoData.media!=undefined)
						{
							if(videoData.media.indexOf('.m4a')==-1)
							{
								$("#videoSource").attr("type","video/mp4");
							}
							else{
								$("#videoSource").attr("type","audio/mp4");
							}
						}
						else
						{
							$("#videoSource").attr("type","video/mp4");
						}
						$("#cc").attr("src",
						"assets/data/os_caption.vtt");
						$("#subtit").attr("src",
								"assets/data/os_subtitle.vtt");
						$("#chptr").attr("src",
						"assets/data/os_chapter.vtt");
						videojs("newvideo", {
							"controls" : true,
							"autoplay" : true,
							"preload" : "auto",
							"fluid":true,
							"html5": {
								nativeTextTracks: false}
						});
						
					}
				}
				
			}
		});
		}
		else
			{
			$scope.showHeader=false;
			$http.get(config.dataPath+id+'/script.json').success(function(res){
				$rootScope.videoData=res;
				
				videoData=res;
				videoData.audio=config.audioPath+id+'/output.wav';
			});
			}
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
		$('#closedCaptionBtn a').click(function(){
			if ($('#closedCaption').hasClass('shown')){
				$('#closedCaption').removeClass('shown');
				$('#closedCaptionBtn a').removeClass('active');
			}
			else
				{
				$('#closedCaptionBtn a').addClass('active');
				$('#closedCaption').addClass('shown');
				}
		});
	});
	$rootScope.$on('customizeplayer',function(){
		//customizePlayer();
	});
	function changeCSS(cssFile, cssLinkIndex) {

	    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

	    var newlink = document.createElement("link");
	    newlink.setAttribute("rel", "stylesheet");
	    newlink.setAttribute("type", "text/css");
	    newlink.setAttribute("href", cssFile);

	    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
	}
	function changePlayer(){
		$( '#ourvideo' ).audioPlayer(
				{
				    classPrefix: 'audioplayer',
				    strPlay: 'Play',
				    strPause: 'Pause',
				    strVolume: 'Volume'
				});
		
		if ($rootScope.showpl){
			customizePlayer();
		}
	}
	function customizePlayer(){
		
	  /* if($(window).width()>320 && $(window).width()<767 )
		{
			$('.audioplayer-bar').css('width','24%');
			$('.audioplayer-time-duration').css('right','50%');
		}
		else if($(window).width()>768 && $(window).width()<991 )
		{
			$('.audioplayer-bar').css('width','32%');
			$('.audioplayer-time-duration').css('right','44%');
		}
		else
		{
			$('.audioplayer-bar').css('width','45%');
			$('.audioplayer-time-duration').css('right','27%');
		}*/
	}
	$scope.$on("controllerLoaded",function(){
		$scope.templateUrl="app/template/"+$scope.videoType+"/template/animate.html";
	});
	$scope.$watch("videoData",function(){
		$rootScope.showCC=false;
		$scope.playlists=[];
		$scope.showPlaylists=false;
		if ($rootScope.videoData != undefined){
			var templ=$scope.videoType;
						
			
			$('link[rel=stylesheet][href*="style.css"]').remove();
			var l = document.createElement('link');
			l.type="text/css";
			l.rel="stylesheet";
			  l.href = "app/template/"+templ+"/css/style.css";
			  if ($scope.videoType != "adobeanimate"){
			  document.getElementsByTagName('head')[0].appendChild(l);
		}
			  var deferred = $q.defer();
			 
			 
				  var jsUrl="app/template/"+templ+"/js/animate.js";
				  $script(
							jsUrl,
							function() {
								$rootScope.$apply(function() {
									
									deferred.resolve();
									$scope.$broadcast("controllerLoaded");
								});
																
							});
			
			$scope.imageUrl="app/template/"+templ+"/images/headline.png";
			processPlaylist();
		}
	});
	
	function processPlaylist(){
		if (($rootScope.videoData.relatedVideos != undefined)&&($rootScope.videoData.relatedVideos.length > 0)){
			$scope.playlists=$rootScope.videoData.relatedVideos;
			$rootScope.showpl=true;
		}
	}
	$scope.showPlaylist=function (){
		if ($scope.showPlaylists){
			$('#showPlBtn a').removeClass('active');
			$scope.showPlaylists=false;
		}
		else
			{
			$scope.showPlaylists=true;
			$('#showPlBtn a').addClass('active');
			}
	};
	$scope.playVideo=function(type,id){
		var url=type;
		if (id != undefined){
			url=type+"_"+id;
		}
		$http.get('assets/data/'+url+'.json').success(function(res){
			resetPlayer();
			$scope.videoType=type;
			if (type != "ecare"){
				ga('send', 'pageview');
				$rootScope.videoData=res[0];
				
				videoData=res[0];
			}
			else
				{
								$rootScope.videoData=res;

				videoData=res;
				$rootScope.$broadcast("videoChanged");
				}
		});
	};
	function resetPlayer(){
		$('#imgdiv1').show();
		$('#videoViewport').hide();
		$('.audioplayer').remove();
		$scope.showPlaylists=false;
		$('#showPlBtn a').removeClass('active');
		$('#videodiv').prepend(' <audio id="ourvideo" controls  height="1px"><source id="audioSource" src=""></audio>');
	}
	
	$scope.showFullScreen=function(){
		if($(window).width()>480)
		{
			if ($scope.fullScreenMode){
			$scope.fullScreenMode=false;
			$('#fullscreen a').removeClass('active');
			$('#body').removeClass('fullScreen');
			$('#container').removeClass('fullScreen');
			$('#videoViewport').removeClass('fullScreen');
			$('#videodiv').removeClass('fullScreen');
			$('#videoViewport').removeAttr('style');
			$('#videoViewport').show();
		var videoviewht=$('#videoViewport').height();
		$('.webpagedivseg').css('height',videoviewht-27+'px');
			$('.header').show();
			}
		else
			{
			$scope.fullScreenMode=true;
			$('.header').hide();
			$('#fullscreen a').addClass('active');
			$('#body').addClass('fullScreen');
			$('#container').addClass('fullScreen');
			$('#videoViewport').addClass('fullScreen');
			$('#videodiv').addClass('fullScreen');
			var headerht=$('.header').height();
			var windowht=$(window).height();
			$('#videoViewport').css('height',windowht-30+'px');
			$('.webpagedivseg').css('height',windowht-30+'px');
			}
		}
	
	};
	
}]);
svmodule
.config([
			'$routeProvider','$controllerProvider',function($routeProvider,$controllerProvider) {
				svmodule.controllerProvider = $controllerProvider;
			}]);
			