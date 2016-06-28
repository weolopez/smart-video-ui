'use strict';
const audioPath = 'media/audio/';
const dataPath = 'rest/api/data/';
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
  $('#canvas').show();
  var audioPath = audioPath + videoId + '/' + data.media;
  var audioType = 'audio/mp3';
  audioPath = 'app/template/homesolution/audio/vo9.mp3';
  if (data.media != undefined) {
    if (data.media.indexOf('.m4a') != -1) {
      audioType = 'audio/mp4';
    }
  }
  $('#videoViewport').append('<audio id="canvasAudio" class="video-js vjs-default-skin"  controls preload="auto" ></audio>');
  $('#canvasAudio').append('<source id="CanvasaudioSource" src="' + audioPath + '" type="' + audioType + '" />');
  if (data.closedCaption != undefined && data.closedCaption != '') {
    var ccpath = audioPath + videoId + '/' + data.closedCaption;
    $('#canvasAudio').append('<track id="cc" kind="captions" src="' + ccpath + '" srclang="en" label="Caption" default/>');
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