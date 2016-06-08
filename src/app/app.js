'use strict';
var videoData;
var svmodule = angular.module('smartvideo', ['ngRoute','ngSanitize','com.att.controllers.config']);
svmodule.controller("SVMainController",['$rootScope','$scope','$http','$q','config',function($rootScope,$scope,$http,$q,config){
	$rootScope.showCC=false;
	$scope.playlists=[];
	$scope.showPlaylists=false;
	$scope.fullScreenMode=false;
	$scope.showHeader=true;
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
		if (type != "ecare"){
		$http.get(config.dataPath+id+'/script.json').success(function(res){
			$rootScope.videoData=res;
			
			videoData=res;
			videoData.audio=config.audioPath+id+'/output.wav';
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
		var vid = document.getElementById("ourvideo");
		vid.onpause = function() {
			$('.animate').css('animation-play-state', 'paused');
		};
		vid.onplaying = function() {
			$('.animate').css('animation-play-state', 'running');
		};
		vid.onseeking = function() {
			$('.animate').css('animation-play-state', 'paused');
			// $('.effect').css('animation-iteration-count','1');
		};
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
	$rootScope.$on('changeplayer',function(){
		changePlayer();
	});
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
		
	   if($(window).width()>320 && $(window).width()<767 )
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
		}
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
			  document.getElementsByTagName('head')[0].appendChild(l);
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
			