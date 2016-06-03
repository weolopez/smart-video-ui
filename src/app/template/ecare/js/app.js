$(window).ready(function() {
	$('.webpagedivseg').addClass('showContent');
	setTimeout(function() {
		runVideo();
	}, 3000);

});

$(document).ready(function() {

	var vid = document.getElementById("ourvideo");
	vid.onpause = function() {
		$('.animate').css('animation-play-state', 'paused');
	};
	vid.onplaying = function() {
		$('.animate').css('animation-play-state', 'running');
	};
	vid.onseeking = function() {
		$('.animate').css('animation-play-state', 'paused');

	};

});

function runVideo() {
	var pop = Popcorn("#ourvideo");
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
	var animate4 = [ {
		"element" : ".phone",
		"classname" : "flipInY animated"
	}, {
		"element" : ".text",
		"classname" : "slideInRight animated"
	}, {
		"element" : ".stepNum",
		"classname" : "flipInY animated"
	} ];
	var animate5 = [ {
		"element" : ".phone",
		"classname" : "flipInY animated"
	}, {
		"element" : ".text",
		"classname" : "slideInRight animated"
	}, {
		"element" : ".stepNum",
		"classname" : "flipInY animated"
	}, {
		"element" : ".notes",
		"classname" : "flipInX animated"
	} ];
	var items = [ [ 0, 0.5 ], [ 0.5, 2, animate1 ], [ 2, 3, animate2 ],
			[ 3, 18, animate4 ], [ 18, 24, animate4 ], [ 24, 33, animate4 ],
			[ 33, 37, animate4 ], [ 37, 42, animate4 ], [ 42, 47, animate4 ],
			[ 47, 49, animate4 ], [ 49, 52, animate4 ] ];
	for (i = 0; i < items.length; i++) {
		pop
				.code({
					start : items[i][0],
					end : items[i][1],

					ind : i,

					classname : items[i][2],
					onStart : function(options) {
						if (options.ind == 0) {
							document.getElementById("videoViewport").style.display = "block";
							$('#webpagediv' + options.ind).show();
						}

						if (options.classname != undefined) {
							options.classname.forEach(function(item) {
								if (item.count != undefined) {
									$('#webpagediv' + options.ind).find(
											item.element).css(
											'animation-iteration-count',
											item.count);
								}
								$('#webpagediv' + options.ind).find(
										item.element).addClass(item.classname);
							});

						}
						document.getElementById("webpagediv" + options.ind).style.display = "block";

					},
					onEnd : function(options) {
						if (options.classname != undefined) {
							options.classname.forEach(function(item) {
								if (item.count != undefined) {
									$('#webpagediv' + options.ind).find(
											item.element).css(
											'animation-iteration-count', '0');
								}
								$('#webpagediv' + options.ind).find(
										item.element).removeClass(
										item.classname);
							});
						}

						document.getElementById("webpagediv" + options.ind).style.display = "none";

					}
				});
	}
	pop.play();
}
