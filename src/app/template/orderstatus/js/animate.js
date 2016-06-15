'use strict';
svmodule.controllerProvider
		.register(
				'animationController',
				[
						'$scope',
						'$http',
						'$rootScope',

						function($scope, $http, $rootScope) {
							$(window).ready(function() {
								$('.webpagedivseg').addClass('showContent');
								var data = $rootScope.videoData;
								assignData(data);
							});
							var caption = [];
							
							function assignData(data) {

								$(".userNameFirst").html(data.data.firstName);
								$("#userNameLast").html(data.data.lastName);
								$(".product").html(data.data.product);
								$(".memory").html(data.data.memory);
								$(".shippedon").html(data.data.delivery);
								$(".productImg").attr(
										'src',
										'app/template/orderstatus/images/'
												+ data.data.productImg);
								if(data.datatype!=undefined)
								{
									$rootScope.datatype = data.datatype;
								}
								else
									{
									$rootScope.datatype="audio";
									}
								if ($rootScope.datatype != null) {
									if ($rootScope.datatype == "audio") {
										$('.video-js-responsive-container')
												.prepend(
														' <audio id="ourvideo" class="video-js vjs-default-skin" style="display:none;" controls preload="auto" height="100%" width="100%" > <source id="audioSource" src="" type="audio/mp3" /><track id="cc" kind="captions" src="" srclang="en" label="Caption" default><track id="subtit" kind="subtitles" src="" srclang="en" label="English" default></audio>');
										$("#audioSource").attr("src",
												data.audio);
										$("#cc").attr("src",
												"assets/data/os_caption.vtt");
										$("#subtit").attr("src",
												"assets/data/os_subtitle.vtt");
										var audio = $("#ourvideo");
										audio[0].pause();
										audio[0].load();
									} else {
										$('.video-js-responsive-container')
												.prepend(
														' <video id="newvideo" class="video-js vjs-default-skin" style="display:none;" controls preload="auto" width="100%" height="100%" > <source id="videoSource" src="" type="video/mp4"> </video>');
										$("#videoSource").attr("src",
												data.video);
									}
								}
								// $rootScope.$broadcast("changeplayer");

								data.caption = "assets/data/os_caption.json";
								if (data.caption != undefined) {
									jQuery.get(data.caption, function(res) {
										$rootScope.showCC = true;
										caption = res;
										setTimeout(function() {
											if ($rootScope.datatype == "audio") {
												runVideo();
											} else {
												runnewVideo();
											}
										}, 2000);

									}).fail(function(res) {

										setTimeout(function() {
											if ($rootScope.datatype == "audio") {
												runVideo();
											} else {
												runnewVideo();
											}
										}, 2000);
									});
								} else {
									setTimeout(function() {
										if ($rootScope.datatype == "audio") {
											runVideo();
										} else {
											runnewVideo();
										}
									}, 2000);
								}
							}
							
							function runnewVideo() {
								videojs("newvideo", {
									"controls" : true,
									"autoplay" : true,
									"preload" : "auto",
									"fluid":true,
									"html5": {
										nativeTextTracks: false}
								});
								document.getElementById("newvideo").style.display = "block";
							/*	videojs('newvideo', {}, function() {
							        this.ga();
							      });
								player.ga({
									  'eventsToTrack': ['loaded', 'percentsPlayed', 'start', 'end', 'seek', 'play', 'pause', 'resize', 'volumeChange', 'error', 'fullscreen'],
									  'debug': true
									});*/
							}
							function runVideo() {
								var pop = Popcorn("#ourvideo");
								var animate1 = [ {
									"element" : ".animate",
									"classname" : "logoanimation"
								} ];
								var animate2 = [ {
									"element" : ".animate",
									"classname" : "rotateIn animated"
								} ];
								var animate3 = [ {
									"element" : ".people3",
									"classname" : "people3Ani animated"
								}, {
									"element" : ".people4",
									"classname" : "people4Ani animated"
								}, {
									"element" : ".people2-1",
									"classname" : "people2-1Ani animated"
								}, {
									"element" : ".orange1",
									"classname" : "orangeAni animated"
								}, {
									"element" : ".hitxt",
									"classname" : "hitxtAni animated"
								}, {
									"element" : ".green1",
									"classname" : "greenAni animated"
								}, {
									"element" : ".pink1",
									"classname" : "pinkAni animated"
								} ];
								var animate4 = [ {
									"element" : ".people4",
									"classname" : "fadeOut animated"
								}, {
									"element" : ".people2-1",
									"classname" : "bounceOut animated"
								}, {
									"element" : ".orange1",
									"classname" : "zoomOut animated"
								}, {
									"element" : ".hitxt",
									"classname" : "zoomOut animated"
								}, {
									"element" : ".green1",
									"classname" : "flipOutY animated"
								}, {
									"element" : ".pink1",
									"classname" : "rotateOut animated"
								}, {
									"element" : ".userNameFirst",
									"classname" : "flipOutX animated"
								}, {
									"element" : ".att_logo",
									"classname" : "rotateOut animated"
								} ];
								var animate5 = [ {
									"element" : ".circle",
									"classname" : "zoomIn animated"
								}, {
									"element" : ".devicePhoto",
									"classname" : "flipInY animated"
								} ];
								var animate6 = [ {
									"element" : ".circle",
									"classname" : "pulse animated",
									"count" : "2"
								}, {
									"element" : ".devicePhoto",
									"classname" : "pulse animated",
									"count" : "2"
								} ];
								var animate7 = [ {
									"element" : ".text",
									"classname" : "zoomIn animated"
								}, {
									"element" : ".green1",
									"classname" : "zoomIn animated"
								} ];
								var animate8 = [ {
									"element" : ".text",
									"classname" : "shipTextAni animated"
								}, {
									"element" : ".green1",
									"classname" : "zoomOut animated"
								}, {
									"element" : ".orange1",
									"classname" : "zoomIn animated"
								}, {
									"element" : ".greenbase",
									"classname" : "slideInLeft animated"
								}, {
									"element" : ".tablet",
									"classname" : "slideInLeft animated"
								}, {
									"element" : ".hdrText",
									"classname" : "bounce animated"
								} ];
								var animate9 = [ {
									"element" : ".linkTxt",
									"classname" : "swing animated"
								}, {
									"element" : ".text",
									"classname" : "shipText1Ani animated"
								}, {
									"element" : ".tablet",
									"classname" : "tabletAni animated"
								} ];
								var animate10 = [ {
									"element" : ".hdrText",
									"classname" : "flipOutX animated"
								}, {
									"element" : ".text",
									"classname" : "slideOutRight animated"
								}, {
									"element" : ".tablet",
									"classname" : "slideOutLeft animated"
								}, {
									"element" : ".greenbase",
									"classname" : "slideOutLeft animated"
								}, {
									"element" : ".orange1",
									"classname" : "zoomOut animated"
								} ];
								var animate11 = [ {
									"element" : ".green2",
									"classname" : "zoomIn animated"
								}, {
									"element" : ".blue2",
									"classname" : "zoomIn animated"
								}, {
									"element" : ".orangebase",
									"classname" : "slideInLeft animated"
								}, {
									"element" : ".phoneapp",
									"classname" : "slideInLeft animated"
								} ];
								var animate12 = [ {
									"element" : ".phoneapp",
									"classname" : "phappAni animated"
								} ];
								var animate13 = [ {
									"element" : ".green2",
									"classname" : "green2Ani animated"
								}, {
									"element" : ".blue2",
									"classname" : "blue2Ani animated"
								}, {
									"element" : ".orangebase",
									"classname" : "orangebaseAni animated"
								}, {
									"element" : ".phoneapp",
									"classname" : "phoneAppAni animated"
								}, {
									"element" : ".tctxt",
									"classname" : "slideInUp animated"
								}, {
									"element" : ".mobTransfer",
									"classname" : "zoomIn animated"
								}, {
									"element" : ".bulky",
									"classname" : "flipInX animated"
								}, {
									"element" : ".bulky2",
									"classname" : "bounceIn animated"
								}, {
									"element" : ".text3",
									"classname" : "slideInUp animated"
								} ];
								var animate14 = [ {
									"element" : ".phoneapp",
									"classname" : "flipInY animated"
								} ];
								var animate15 = [ {
									"element" : ".phoneapp",
									"classname" : "phapp1Ani animated"
								}, {
									"element" : ".orangebase",
									"classname" : "orangebase1Ani animated"
								}, {
									"element" : ".mobile",
									"classname" : "slideInLeft animated"
								}, {
									"element" : ".contacticon",
									"classname" : "contacticonAni animated"
								}, {
									"element" : ".musicicon",
									"classname" : "musiciconAni animated"
								}, {
									"element" : ".galleryicon",
									"classname" : "galleryiconAni animated"
								}, {
									"element" : ".mailicon",
									"classname" : "mailiconAni animated"
								} ];
								var animate16 = [ {
									"element" : ".phoneapp",
									"classname" : "slideOutRight animated"
								}, {
									"element" : ".orangebase",
									"classname" : "slideOutRight animated"
								}, {
									"element" : ".mobile",
									"classname" : "flipOutY animated"
								}, {
									"element" : ".green2",
									"classname" : "zoomOut animated"
								}, {
									"element" : ".blue2",
									"classname" : "zoomOut animated"
								}, {
									"element" : ".blue2",
									"classname" : "zoomOut animated"
								}, {
									"element" : ".mobText",
									"classname" : "slideOutUp animated"
								}, {
									"element" : ".tctxt",
									"classname" : "flipOutX animated"
								} ];
								var animate17 = [ {
									"element" : ".green2",
									"classname" : "zoomIn animated"
								}, {
									"element" : ".activateTxt",
									"classname" : "zoomIn animated"
								}, {
									"element" : ".person",
									"classname" : "zoomIn animated"
								}, {
									"element" : ".pink",
									"classname" : "zoomIn animated"
								} ];
								var animate18 = [
										{
											"element" : ".green2",
											"classname" : "green3Ani animated"
										},
										{
											"element" : ".activateTxt",
											"classname" : "activateTxtAni animated"
										},
										{
											"element" : ".person",
											"classname" : "zoomIn animated"
										},
										{
											"element" : ".pink",
											"classname" : "pink2Ani animated"
										},
										{
											"element" : ".person",
											"classname" : "personAni animated"
										},
										{
											"element" : ".person1",
											"classname" : "zoomIn animated"
										},
										{
											"element" : ".purple1",
											"classname" : "zoomIn animated"
										},
										{
											"element" : ".attscreen",
											"classname" : "attscreenAni animated"
										},
										{
											"element" : ".headingContainer",
											"classname" : "headingContainerAni animated"
										},
										{
											"element" : ".attscreenBody",
											"classname" : "attscreenBodyAni animated"
										}, {
											"element" : ".arrow",
											"classname" : "arrowAni animated"
										} ];
								var animate19 = [ {
									"element" : ".activate_circle",
									"classname" : "zoomOut animated"
								}, {
									"element" : ".pink",
									"classname" : "slideOutLeft animated"
								}, {
									"element" : ".person",
									"classname" : "slideOutUp animated"
								}, {
									"element" : ".person1",
									"classname" : "zoomOut animated"
								}, {
									"element" : ".attscreen",
									"classname" : "slideOutRight animated"
								}, {
									"element" : ".purple1",
									"classname" : "bounceOutRight animated"
								}, {
									"element" : ".headingContainer",
									"classname" : "flipOutX animated"
								} ];
								var animate20 = [ {
									"element" : ".devicetxt",
									"classname" : "swing animated"
								}, {
									"element" : ".orange2",
									"classname" : "zoomIn animated"
								}, {
									"element" : ".phoneIcon",
									"classname" : "bounceIn animated"
								}, {
									"element" : ".people5",
									"classname" : "zoomIn animated"
								}, {
									"element" : ".devicetxt1",
									"classname" : "devicetxt1Ani animated"
								} ];
								var animate21 = [ {
									"element" : ".orange2",
									"classname" : "orange2Ani animated"
								}, {
									"element" : ".phoneIcon",
									"classname" : "zoomOut animated"
								}, {
									"element" : ".att_screen1",
									"classname" : "slideInRight animated"
								} ];
								var animate22 = [ {
									"element" : ".orange2",
									"classname" : "rollOut animated"
								}, {
									"element" : ".people5",
									"classname" : "rotateOut animated"
								}, {
									"element" : ".att_screen1",
									"classname" : "slideOutRight animated"
								}, {
									"element" : ".devicetxt",
									"classname" : "bounceOutDown animated"
								}, {
									"element" : ".devicetxt1",
									"classname" : "flipOutX animated"
								} ];

								var animate23 = [ {
									"element" : ".myatt",
									"classname" : "flipInX animated"
								}, {
									"element" : ".myatttxt",
									"classname" : "bounceIn animated"
								}, {
									"element" : ".myatttc",
									"classname" : "slideInUp animated"
								}, {
									"element" : ".item1",
									"classname" : "item1Ani animated"
								}, {
									"element" : ".item2",
									"classname" : "item2Ani animated"
								}, {
									"element" : ".item3",
									"classname" : "item3Ani animated"
								}, {
									"element" : ".item4",
									"classname" : "item4Ani animated"
								} ];
								var animate24 = [ {
									"element" : ".orange3",
									"classname" : "rollIn animated"
								}, {
									"element" : ".people6",
									"classname" : "zoomIn animated"
								}, {
									"element" : ".headingContainer",
									"classname" : "flipInX animated"
								}, {
									"element" : ".buttonsBlock",
									"classname" : "slideInRight animated"
								}, {
									"element" : ".pink3",
									"classname" : "flipInY animated"
								} ];
								var animate25 = [ {
									"element" : ".buttonsBlock",
									"classname" : "pulse animated",
									"count" : "1"
								}, {
									"element" : ".people6",
									"classname" : "people6Ani animated"
								}, {
									"element" : ".button1",
									"classname" : "button1Ani animated"
								}, {
									"element" : ".button2",
									"classname" : "button2Ani animated"
								}, {
									"element" : ".button3",
									"classname" : "button3Ani animated"
								} ];

								var items = [
										[ 0, 0.5, "pop0.png" ],
										[ 0.5, 1, "pop0.png", "zoomin" ],
										[ 1, 1.5, "pop1.png", "flipin" ],
										[ 1.5, 2, "pop1.png", "zoomin",
												animate1 ],
										[ 2, 5.5, "pop3.png", "rubber",
												animate2 ],
										[ 5.5, 10, "pop4.png", "na", animate3 ],
										[ 10, 11, "pop5.png", "na", animate4 ],
										[ 11, 12, "pop6.png", "na", animate5 ],
										[ 12, 13, "pop6.png", "na", animate6 ],
										[ 13, 14.5, "p", "na", animate7 ],
										[ 14.5, 18, "po", "na", animate8 ],
										[ 18, 25.5, "po", "na", animate9 ],
										[ 25.5, 26.5, "po", "na", animate10 ],
										[ 26, 27, "pop8.png", "na", animate11 ],
										[ 27, 28, "pop8.png", "na", animate12 ],
										[ 28, 30, "pop8.png", "na", animate13 ],
										[ 30, 33, "po", "na", animate14 ],
										[ 33, 39, "po", "na", animate15 ],
										[ 39, 40, "po", "na", animate16 ],
										[ 40, 41, "po", "na", animate17 ],
										[ 41, 52, "po", "na", animate18 ],
										[ 52, 53, "po", "na", animate19 ],
										[ 53, 55, "po", "na", animate20 ],
										[ 55, 60, "po", "na", animate21 ],
										[ 60, 61, "po", "na", animate22 ],
										[ 61, 86, "po", "na", animate23 ],
										[ 86, 87, "po", "na", animate24 ],
										[ 87, 115, "po", "na", animate25 ] ];
								for (var i = 0; i < items.length; i++) {
									pop
											.code({
												start : items[i][0],
												end : items[i][1],
												img : items[i][2],
												ind : i,
												opt : items[i][3],
												classname : items[i][4],
												onStart : function(options) {
													if (options.ind == 0) {
														document
																.getElementById("imgdiv1").style.display = "none";
														document
																.getElementById("videoViewport").style.display = "block";
														$(
																'#webpagediv'
																		+ options.ind)
																.show();
														$(
																'#webpagediv'
																		+ options.ind)
																.css(
																		'visibility',
																		'visible');
													}
													// console.log(options);
													if (options.opt != undefined) {
														$(
																'#webpagediv'
																		+ options.ind)
																.show();
														$(
																'#webpagediv'
																		+ options.ind)
																.css(
																		'visibility',
																		'visible');
														// document.getElementById("webpagediv"
														// +
														// options.ind).style.display
														// = "block";
														switch (options.opt) {
														case "zoomin":
															$(
																	'#webpagediv'
																			+ options.ind
																			+ ' .effect')
																	.addClass(
																			"animated zoomIn");
															break;
														case "flipin":
															$(
																	'#webpagediv'
																			+ options.ind
																			+ ' .effect')
																	.addClass(
																			"animated flipInY");
															break;
														case "rubber":
															$(
																	'#webpagediv'
																			+ options.ind
																			+ ' .effect')
																	.addClass(
																			"animated rubberBand");
															break;
														}
														if (options.classname != undefined) {
															options.classname
																	.forEach(function(
																			item) {
																		if (item.count != undefined) {
																			$(
																					'#webpagediv'
																							+ options.ind)
																					.find(
																							item.element)
																					.css(
																							'animation-iteration-count',
																							item.count);
																		}
																		$(
																				'#webpagediv'
																						+ options.ind)
																				.find(
																						item.element)
																				.addClass(
																						item.classname);
																	});
														}
													} else {
														document
																.getElementById("webpagediv"
																		+ options.ind).style.display = "block";
														$(
																"webpagediv"
																		+ options.ind)
																.css(
																		'visibility',
																		'visible');
													}

												},
												onEnd : function(options) {
													if (options.opt != undefined) {
														switch (options.opt) {
														case "zoomin":
															$(
																	'#webpagediv'
																			+ options.ind
																			+ ' .effect')
																	.removeClass(
																			"animated zoomIn")
																	.width();
															break;
														case "flipin":
															$(
																	'#webpagediv'
																			+ options.ind
																			+ ' .effect')
																	.removeClass(
																			"animated flipInY")
																	.width();
															break;
														case "rubber":
															$(
																	'#webpagediv'
																			+ options.ind
																			+ ' .effect')
																	.removeClass(
																			"animated rubberBand")
																	.width();
															break;
														}
														if (options.classname != undefined) {
															options.classname
																	.forEach(function(
																			item) {
																		if (item.count != undefined) {
																			$(
																					'#webpagediv'
																							+ options.ind)
																					.find(
																							item.element)
																					.css(
																							'animation-iteration-count',
																							'0');
																		}
																		$(
																				'#webpagediv'
																						+ options.ind)
																				.find(
																						item.element)
																				.removeClass(
																						item.classname)
																				.width();
																	});
														}
														document
																.getElementById("webpagediv"
																		+ options.ind).style.display = "none";

													} else {

														document
																.getElementById("webpagediv"
																		+ options.ind).style.display = "none";
													}
												}
											})
								}
								if ($rootScope.showCC) {
									caption.forEach(function(item) {
										pop.footnote({
											start : item.start,
											end : item.end,
											text : item.text,
											target : "closedCaption"
										});
									});
								}
								videojs("ourvideo", {
									"controls" : true,
									"autoplay" : true,
									"preload" : "auto",
									"html5": {
									    nativeTextTracks: false
									}
								},function() {this.ga();});
								
								$("#imgdiv1").insertBefore($(".vjs-tech"));
								$("#videoViewport")
										.insertBefore($(".vjs-tech"));

								document.getElementById("ourvideo").style.display = "block";
								var player = videojs('ourvideo');
								player.ga({
									  'eventsToTrack': ['loaded', 'percentsPlayed', 'start', 'end', 'seek', 'play', 'pause', 'resize', 'volumeChange', 'error', 'fullscreen'],
									  'debug': true
									});
								
								
								/* var video = videojs('ourvideo');
								 var video_wrapper = video.caption({
								      data: "assets/data/os_caption.json", 
								      setting:{
								         onCaptionChange: function(num_c){
								            console.log("playing: " + num_c + " caption");
								         }
								      }
								   });*/
								
								 

							}

						} ]);
