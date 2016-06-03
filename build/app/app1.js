'use strict';
var userData;
function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex
			.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g,
			" "));
}
$(document).ready(function(){
	var givenUser = getParameterByName('user');
	if (givenUser == ""){
		givenUser="JOHN";
	}
	$.get('assets/data/'+givenUser+'.json',function(res){
		userData=res[0];
		processData(res[0]);
	});
});


function processData(data){
	if (data != undefined){
	var tpl=data.template;
	var tplUrl="app/template/"+tpl+"/template/animate.html";
	var l = document.createElement('link');
	l.type="text/css";
	l.rel="stylesheet";
	  l.href = "app/template/"+tpl+"/css/style.css";
	  document.getElementsByTagName('head')[0].appendChild(l);
	  
	  var j = document.createElement('script');
		j.type="text/javascript";
		  j.src = "app/template/"+tpl+"/js/animate.js";
	$('#templateWrapper').load(tplUrl,function(){
		 document.getElementsByTagName('head')[0].appendChild(j);
	});
		 
	var imageUrl="app/template/"+tpl+"/images/headline.png";
	$('#titleImage').attr('src',imageUrl);

	}
	else
		{
		//error handling
		}
	
}
