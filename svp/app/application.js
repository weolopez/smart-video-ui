'use strict';
var audioPath = 'media/audio/';
var dataPath = 'rest/api/data/';
'use strict';
var videoData;
var videoType, videoId;
function getParameterByName(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'), results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
$(document).ready(function () {
  var id = getParameterByName('id');
  videoId = id;
  var url = dataPath + id + '/script.json';
  url = 'assets/data/script.json';
  $.get(url, function (res) {
    videoType = res.videoType;
    videoData = res;
    getVideo(res);
    ga('send', 'pageview');
    setPlayerReady(res);
  });
});
function setPlayerReady(data) {
  if (data.format == 'html') {
    $('#canvas').show();
  } else {
    $('#canvas').hide();
  }
  var audioPath = audioPath + videoId + '/' + data.media;
  audioPath = 'app/template/homesolution/audio/vo9.m4a';
  var audioType = 'audio/mp4';
  $('#videoViewport').append('<audio id="canvasAudio" class="video-js vjs-default-skin"  controls preload="auto"></audio>');
  if (navigator.userAgent.indexOf('safari') != -1) {
    audioPath = 'app/template/homesolution/audio/vo9.ogg';
    audioType = 'audio/ogg';
  }
  $('audio').append('<source id="audioSource" src="' + audioPath + '" type="' + audioType + '" />');
  $('audio').load();
  if (data.closedCaption != undefined && data.closedCaption != '') {
    var ccpath = audioPath + videoId + '/' + data.closedCaption;
    $('audio').append('<track id="cc" kind="captions" src="' + ccpath + '" srclang="en" label="Caption" default/>');
  }
  if (data.chapter != undefined && data.chapter != '') {
    var chaptpath = audioPath + videoId + '/' + data.chapter;
    $('audio').append('<track id="chptr" kind="chapters" src="' + chaptpath + '" srclang="en"/>');
  }
  if (data.subtitle != undefined && data.subtitle != '') {
    var subtPath = audioPath + videoId + '/' + data.subtitle;
    $('audio').append('<track id="subtit" kind="subtitles" src="' + subtPath + '" srclang="en" label="English" default/>');
  }
}
function getVideo(data) {
  if (data != undefined) {
    var templ = data.videoType;
    $('link[rel=stylesheet][href*="style.css"]').remove();
    if (data.format == 'css') {
      var l = document.createElement('link');
      l.type = 'text/css';
      l.rel = 'stylesheet';
      l.href = 'app/template/' + templ + '/css/style.css';
      document.getElementsByTagName('head')[0].appendChild(l);
    }
    var tplUrl = 'app/template/' + templ + '/template/animate.html';
    var j = document.createElement('script');
    j.type = 'text/javascript';
    j.src = 'app/template/' + templ + '/js/animate.js';
    if (data.format == 'css') {
      $('#template').load(tplUrl, function () {
        document.getElementsByTagName('head')[0].appendChild(j);
      });
    } else if (data.format == 'html') {
      document.getElementsByTagName('head')[0].appendChild(j);
    }
  }
}