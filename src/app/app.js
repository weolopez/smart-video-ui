'use strict';
var videoData;
var videoType,videoId;
	/*$rootScope.seekedTime="";
	$rootScope.datatype = "";*/
	

	
	function getParameterByName(name) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex
				.exec(location.search);
		return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g,
				" "));
	}
	$(document).ready(function(){
		
		var id=getParameterByName('id');
		videoId=id;
		
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
		
var url=dataPath+id+'/script.json';
url="assets/data/script.json";
$.get(url,function(res){
			
			videoType=res.videoType;
			videoData=res;
			
			getVideo(res);
			ga('send', 'pageview');
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
	var audioPath=audioPath+videoId+'/'+data.media;
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
		var ccpath=audioPath+videoId+'/'+data.closedCaption;
		$('#canvasAudio').append('<track id="cc" kind="captions" src="'+ccpath+'" srclang="en" label="Caption" default/>');
		}
	/*.append(
			'  <track id="cc" kind="captions" src="" srclang="en" label="Caption" default><track id="subtit" kind="subtitles" src="" srclang="en" label="English" default><track id="chptr" kind="chapters" src="" srclang="en"></audio>');*/
	/*$("#videoViewport").append(
			$("#canvasvideo"));*/
}

	/*$scope.$on("controllerLoaded",function(){
		$scope.templateUrl="app/template/"+$scope.videoType+"/template/animate.html";
	});*/
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
			 
			var tplUrl="app/template/"+templ+"/template/animate.html";
				  var j = document.createElement('script');
					j.type="text/javascript";
					  j.src = "app/template/"+templ+"/js/animate.js";
					  if (data.format == "css"){
						  $('#template').load(tplUrl,function(){
								 document.getElementsByTagName('head')[0].appendChild(j);
							});
					  }
					  else if (data.format == "html")
						  {
						  document.getElementsByTagName('head')[0].appendChild(j);
						  }
				
			

		}
	}
	
	
	
	

			