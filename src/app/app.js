'use strict';
var videoData;
var videoType,videoId;
	

	
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
		
	});

	
function setPlayerReady(data){
	if (data.format == "html"){
	$("#canvas").show();
	}
	else
		{
		$("#canvas").hide();
		}
	var audioPath=audioPath+videoId+'/'+data.media;
	
	
	audioPath="app/template/homesolution/audio/vo9.m4a";
	var audioType="audio/mp4";
	/*var audioPath1="app/template/homesolution/audio/vo9.mp3";
	var audioType1="audio/mp3";*/
	
	$('#videoViewport').append('<audio id="canvasAudio" class="video-js vjs-default-skin"  controls preload="auto"></audio>');
	if (navigator.userAgent.indexOf('safari') != -1)
		{
		audioPath="app/template/homesolution/audio/vo9.ogg";
		audioType="audio/ogg";
		}
	
	$('audio').append('<source id="audioSource" src="'+audioPath+'" type="'+audioType+'" />');
	//$('audio').append('<source id="audioSource1" src="'+audioPath1+'" type="'+audioType1+'" />');
	$('audio').load();
	if ((data.closedCaption != undefined)&&(data.closedCaption != ""))
		{
		var ccpath=audioPath+videoId+'/'+data.closedCaption;
		$('audio').append('<track id="cc" kind="captions" src="'+ccpath+'" srclang="en" label="Caption" default/>');
		}
	if ((data.chapter != undefined)&&(data.chapter != ""))
	{
		var chaptpath=audioPath+videoId+'/'+data.chapter;
		$('audio').append('<track id="chptr" kind="chapters" src="'+chaptpath+'" srclang="en"/>');
	}
	if ((data.subtitle != undefined)&&(data.subtitle != ""))
	{
		var subtPath=audioPath+videoId+'/'+data.subtitle;
		$('audio').append('<track id="subtit" kind="subtitles" src="'+subtPath+'" srclang="en" label="English" default/>');
	}
}

	
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
	
	
	
	

			