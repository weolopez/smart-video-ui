'use strict';

var path="app/template/adobeanimate/";
							function init2(){
							(function (lib, img, cjs) {

								var p; // shortcut to reference prototypes

								// library properties:
								lib.properties = {
									width: 627,
									height: 352,
									fps: 24,
									color: "#FFFFFF",
									manifest: [
										{src:path+"images/ATT_Logo.png", id:"ATT_Logo"},
										{src:path+"images/att_screen_body.png", id:"att_screen_body"},
										{src:path+"images/iphone6plus_gold_portrait.png", id:"iphone6plus_gold_portrait"},
										{src:path+"images/iphone6splusboxrosegold2015_GEO_US.jpg", id:"iphone6splusboxrosegold2015_GEO_US"},
										{src:path+"images/iphone6s.png", id:"iphone6s"},
										{src:path+"images/iphone6splussilver.png", id:"iphone6splussilver"},
										{src:path+"images/lgGreen.png", id:"lgGreen"},
										{src:path+"images/orangeCircle.png", id:"orangeCircle"},
										{src:path+"images/people2.png", id:"people2"},
										{src:path+"images/people4.png", id:"people4"},
										{src:path+"images/people_1.png", id:"people_1"},
										{src:path+"images/person.png", id:"person"},
										{src:path+"images/person1.png", id:"person1"},
										{src:path+"images/ph_app.png", id:"ph_app"},
										{src:path+"images/pinkCircle.png", id:"pinkCircle"},
										{src:path+"images/ppage.png", id:"ppage"},
										{src:path+"images/tablet.png", id:"tablet"}
										/*{src:path+"audio/HENRY.mp3", id:"HENRY"}*/
									]
								};



								// symbols:



								(lib.ATT_Logo = function() {
									this.initialize(img.ATT_Logo);
								}).prototype = p = new cjs.Bitmap();
								p.nominalBounds = new cjs.Rectangle(0,0,210,210);


								(lib.att_screen_body = function() {
									this.initialize(img.att_screen_body);
								}).prototype = p = new cjs.Bitmap();
								p.nominalBounds = new cjs.Rectangle(0,0,331,246);


								(lib.iphone6plus_gold_portrait = function() {
									this.initialize(img.iphone6plus_gold_portrait);
								}).prototype = p = new cjs.Bitmap();
								p.nominalBounds = new cjs.Rectangle(0,0,740,740);


								(lib.iphone6splusboxrosegold2015_GEO_US = function() {
									this.initialize(img.iphone6splusboxrosegold2015_GEO_US);
								}).prototype = p = new cjs.Bitmap();
								p.nominalBounds = new cjs.Rectangle(0,0,478,595);


								(lib.iphone6s = function() {
									this.initialize(img.iphone6s);
								}).prototype = p = new cjs.Bitmap();
								p.nominalBounds = new cjs.Rectangle(0,0,292,588);


								(lib.iphone6splussilver = function() {
									this.initialize(img.iphone6splussilver);
								}).prototype = p = new cjs.Bitmap();
								p.nominalBounds = new cjs.Rectangle(0,0,100,160);


								(lib.lgGreen = function() {
									this.initialize(img.lgGreen);
								}).prototype = p = new cjs.Bitmap();
								p.nominalBounds = new cjs.Rectangle(0,0,219,223);


								(lib.orangeCircle = function() {
									this.initialize(img.orangeCircle);
								}).prototype = p = new cjs.Bitmap();
								p.nominalBounds = new cjs.Rectangle(0,0,114,98);


								(lib.people2 = function() {
									this.initialize(img.people2);
								}).prototype = p = new cjs.Bitmap();
								p.nominalBounds = new cjs.Rectangle(0,0,102,100);


								(lib.people4 = function() {
									this.initialize(img.people4);
								}).prototype = p = new cjs.Bitmap();
								p.nominalBounds = new cjs.Rectangle(0,0,153,151);


								(lib.people_1 = function() {
									this.initialize(img.people_1);
								}).prototype = p = new cjs.Bitmap();
								p.nominalBounds = new cjs.Rectangle(0,0,214,204);


								(lib.person = function() {
									this.initialize(img.person);
								}).prototype = p = new cjs.Bitmap();
								p.nominalBounds = new cjs.Rectangle(0,0,152,150);


								(lib.person1 = function() {
									this.initialize(img.person1);
								}).prototype = p = new cjs.Bitmap();
								p.nominalBounds = new cjs.Rectangle(0,0,172,172);


								(lib.ph_app = function() {
									this.initialize(img.ph_app);
								}).prototype = p = new cjs.Bitmap();
								p.nominalBounds = new cjs.Rectangle(0,0,156,268);


								(lib.pinkCircle = function() {
									this.initialize(img.pinkCircle);
								}).prototype = p = new cjs.Bitmap();
								p.nominalBounds = new cjs.Rectangle(0,0,141,137);


								(lib.ppage = function() {
									this.initialize(img.ppage);
								}).prototype = p = new cjs.Bitmap();
								p.nominalBounds = new cjs.Rectangle(0,0,122,224);


								(lib.tablet = function() {
									this.initialize(img.tablet);
								}).prototype = p = new cjs.Bitmap();
								p.nominalBounds = new cjs.Rectangle(0,0,263,226);


								(lib.van = function(mode,startPosition,loop) {
									this.initialize(mode,startPosition,loop,{});

									// Layer 1
									this.shape = new cjs.Shape();
									this.shape.graphics.f("#000000").s().p("AktAsIKKgsIAAAAIqKgrYgYgCgWATgBAYYgCAXATAWAYABYACAAADAAABAA");
									this.shape.setTransform(-192.9,0,1,1,180,0,0,2.4,0);

									this.shape_1 = new cjs.Shape();
									this.shape_1.graphics.f("#000000").s().p("Ai9AsIGtgsIAAAAImtgrYgZgDgWASgDAZYgCAXASAWAZACYADABADAAADgB");
									this.shape_1.setTransform(-210.9,20,1,1,180,0,0,2.5,0);

									this.shape_2 = new cjs.Shape();
									this.shape_2.graphics.f("#000000").s().p("AlGAsIK8gsIAAAAIq8grYgYgCgWATgBAZYgCAWATAWAZABYABAAADAAABAA");
									this.shape_2.setTransform(-208.4,40,1,1,180,0,0,2.4,0);

									this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(6));

									// Layer 2
									this.shape_3 = new cjs.Shape();
									this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AMhG8QjaAFAPB8IyNAUQh7iAhfgHQjGAIAUCJIkbAKIAPh2IiNgLIADhxIB6gXIANlBIDogMIAHALIVxgFIgQphII+gYIBKGqIDcBpIAQGdIBjgSIAICoIhfgLIABBoIkrgCQhbiBhYAAg");
									this.shape_3.setTransform(-0.8,-12.5);

									this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(6));

									// Layer 3
									this.shape_4 = new cjs.Shape();
									this.shape_4.graphics.f().s("#000000").ss(9,1,1).p("ABkAAQAAApgdAdQgeAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAeAdQAdAeAAAog");
									this.shape_4.setTransform(75.4,62.7,1.1,1.1);

									this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(3).to({scaleY:1.22,y:61.5},0).wait(3));

									// Layer 4
									this.shape_5 = new cjs.Shape();
									this.shape_5.graphics.f().s("#000000").ss(9,1,1).p("ABkAAQAAApgdAdQgeAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAeAdQAdAeAAAog");
									this.shape_5.setTransform(-81,62.7,1.1,1.1);

									this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(3).to({scaleY:1.22,y:61.5},0).wait(3));

								}).prototype = p = new cjs.MovieClip();
								p.nominalBounds = new cjs.Rectangle(-243.6,-76.3,382.8,154.6);


								(lib.txt = function(mode,startPosition,loop) {
									this.initialize(mode,startPosition,loop,{});

									// att.com/activations
									this.text = new cjs.Text("att.com/activations", "italic bold 18px 'Arial'", "#993399");
									this.text.lineHeight = 20;
									this.text.setTransform(-102.4,19.4,1,0.046);
									this.text._off = true;

									this.timeline.addTween(cjs.Tween.get(this.text).wait(34).to({_off:false},0).wait(1).to({scaleY:0.24},0).wait(1).to({scaleY:0.42,y:19.5},0).wait(1).to({scaleY:0.59},0).wait(1).to({scaleY:0.75},0).wait(1).to({scaleY:0.9,y:19.6},0).wait(1).to({scaleY:1.04},0).wait(1).to({scaleY:1.08},0).wait(1).to({scaleY:0.98},0).wait(1).to({scaleY:0.89},0).wait(1).to({scaleY:0.93},0).wait(1).to({scaleY:0.96},0).wait(1).to({scaleY:0.99},0).wait(1).to({scaleY:1},0).wait(8));

									// Go to:
									this.text_1 = new cjs.Text("Go to:", "18px 'Arial'", "#FFFFFF");
									this.text_1.lineHeight = 20;
									this.text_1.setTransform(-102.4,-10.5,1,0.041);
									this.text_1._off = true;

									this.timeline.addTween(cjs.Tween.get(this.text_1).wait(17).to({_off:false},0).wait(1).to({scaleY:0.24},0).wait(1).to({scaleY:0.43,y:-10.4},0).wait(1).to({scaleY:0.62,y:-10.3},0).wait(1).to({scaleY:0.8,y:-10.2},0).wait(1).to({scaleY:0.97},0).wait(1).to({scaleY:1.14,y:-10.1},0).wait(1).to({scaleY:1.02},0).wait(1).to({scaleY:0.93,y:-10.2},0).wait(1).to({scaleY:0.97},0).wait(1).to({scaleY:1,y:-10.1},0).wait(28));

									// To Activate Your Phone
									this.text_2 = new cjs.Text("To Activate Your Phone", "italic bold 18px 'Arial'", "#FFFFFF");
									this.text_2.lineHeight = 20;
									this.text_2.setTransform(-102.4,-43.4,1,0.042);

									this.timeline.addTween(cjs.Tween.get(this.text_2).wait(1).to({scaleY:0.24},0).wait(1).to({scaleY:0.43,y:-43.5},0).wait(1).to({scaleY:0.62},0).wait(1).to({scaleY:0.8},0).wait(1).to({scaleY:0.98},0).wait(1).to({scaleY:1.13},0).wait(1).to({scaleY:0.99,y:-43.6},0).wait(1).to({scaleY:0.92},0).wait(1).to({scaleY:0.98},0).wait(1).to({scaleY:1},0).wait(45));

								}).prototype = p = new cjs.MovieClip();
								p.nominalBounds = new cjs.Rectangle(-102.4,-43.4,207.2,1);


								(lib.Tween41 = function() {
									this.initialize();

									// Layer 1
									this.shape = new cjs.Shape();
									this.shape.graphics.f("#FFFFFF").s().p("AgRAmQgigjAAgVQAAgXAOgQQAPgQAVAAQASAAAPAQQAPAQAAAXQAAAVAFAjQAFAkgVAAQgUAAghgkg");
									this.shape.setTransform(5.9,8.2,1,1,0,0,0,5.9,8.2);

									this.addChild(this.shape);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-5.3,-7.4,10.6,14.9);


								(lib.Tween40 = function() {
									this.initialize();

									// Layer 1
									this.shape = new cjs.Shape();
									this.shape.graphics.f("#FFFFFF").s().p("AgRAmQgigjAAgVQAAgXAOgQQAPgQAVAAQASAAAPAQQAPAQAAAXQAAAVAFAjQAFAkgVAAQgUAAghgkg");
									this.shape.setTransform(5.9,8.2,1,1,0,0,0,5.9,8.2);

									this.addChild(this.shape);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-5.3,-7.4,10.6,14.9);


								(lib.Tween39 = function() {
									this.initialize();

									// Layer 1
									this.shape = new cjs.Shape();
									this.shape.graphics.f("#FFFFFF").s().p("AgRAmQgigjAAgVQAAgXAOgQQAPgQAVAAQASAAAPAQQAPAQAAAXQAAAVAFAjQAFAkgVAAQgUAAghgkg");
									this.shape.setTransform(-6.9,7.4,1,1,75.7,0,0,5.9,8.2);

									this.addChild(this.shape);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-6.8,-6.2,13.8,12.4);


								(lib.Tween38 = function() {
									this.initialize();

									// Layer 1
									this.shape = new cjs.Shape();
									this.shape.graphics.f("#FFFFFF").s().p("AgRAmQgigjAAgVQAAgXAOgQQAPgQAVAAQASAAAPAQQAPAQAAAXQAAAVAFAjQAFAkgVAAQgUAAghgkg");
									this.shape.setTransform(-6.9,7.4,1,1,75.7,0,0,5.9,8.2);

									this.addChild(this.shape);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-6.8,-6.2,13.8,12.4);


								(lib.Tween37 = function() {
									this.initialize();

									// Layer 1
									this.shape = new cjs.Shape();
									this.shape.graphics.f("#FFFFFF").s().p("AgRAmQgigjAAgVQAAgXAOgQQAPgQAVAAQASAAAPAQQAPAQAAAXQAAAVAFAjQAFAkgVAAQgUAAghgkg");
									this.shape.setTransform(-8.5,-5.3,1,1,151.9,0,0,5.9,8.3);

									this.addChild(this.shape);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-6.9,-6.1,13.9,12.2);


								(lib.Tween36 = function() {
									this.initialize();

									// Layer 1
									this.shape = new cjs.Shape();
									this.shape.graphics.f("#FFFFFF").s().p("AgRAmQgigjAAgVQAAgXAOgQQAPgQAVAAQASAAAPAQQAPAQAAAXQAAAVAFAjQAFAkgVAAQgUAAghgkg");
									this.shape.setTransform(-8.5,-5.3,1,1,151.9,0,0,5.9,8.3);

									this.addChild(this.shape);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-6.9,-6.1,13.9,12.2);


								(lib.Tween35 = function() {
									this.initialize();

									// Layer 1
									this.shape = new cjs.Shape();
									this.shape.graphics.f("#FFFFFF").s().p("AgRAmQgigjAAgVQAAgXAOgQQAPgQAVAAQASAAAPAQQAPAQAAAXQAAAVAFAjQAFAkgVAAQgUAAghgkg");
									this.shape.setTransform(3.5,-9.2,1,1,-130.9,0,0,5.9,8.3);

									this.addChild(this.shape);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-5.4,-7.4,10.9,14.9);


								(lib.Tween34 = function() {
									this.initialize();

									// Layer 1
									this.shape = new cjs.Shape();
									this.shape.graphics.f("#FFFFFF").s().p("AgRAmQgigjAAgVQAAgXAOgQQAPgQAVAAQASAAAPAQQAPAQAAAXQAAAVAFAjQAFAkgVAAQgUAAghgkg");
									this.shape.setTransform(3.5,-9.2,1,1,-130.9,0,0,5.9,8.3);

									this.addChild(this.shape);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-5.4,-7.4,10.9,14.9);


								(lib.Tween33 = function() {
									this.initialize();

									// Layer 1
									this.shape = new cjs.Shape();
									this.shape.graphics.f("#FFFFFF").s().p("AgRAmQgigjAAgVQAAgXAOgQQAPgQAVAAQASAAAPAQQAPAQAAAXQAAAVAFAjQAFAkgVAAQgUAAghgkg");
									this.shape.setTransform(9.5,-1.2,1,1,-65.2,0,0,5.9,8.3);

									this.addChild(this.shape);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-7.9,-5,15.8,10);


								(lib.Tween32 = function() {
									this.initialize();

									// Layer 1
									this.shape = new cjs.Shape();
									this.shape.graphics.f("#FFFFFF").s().p("AgRAmQgigjAAgVQAAgXAOgQQAPgQAVAAQASAAAPAQQAPAQAAAXQAAAVAFAjQAFAkgVAAQgUAAghgkg");
									this.shape.setTransform(9.5,-1.2,1,1,-65.2,0,0,5.9,8.3);

									this.addChild(this.shape);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-7.9,-5,15.8,10);


								(lib.Tween29 = function() {
									this.initialize();

									// Layer 1
									this.instance = new lib.ph_app();
									this.instance.setTransform(-78,-134);

									this.addChild(this.instance);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-78,-134,156,268);


								(lib.Tween28 = function() {
									this.initialize();

									// Layer 1
									this.instance = new lib.ph_app();
									this.instance.setTransform(-78,-134);

									this.addChild(this.instance);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-78,-134,156,268);


								(lib.Tween27 = function() {
									this.initialize();

									// Layer 1
									this.shape = new cjs.Shape();
									this.shape.graphics.f("#FABB42").s().p("AucIfIAAw9Ic5AAIAAQ9g");
									this.shape.setTransform(0,0,3.387,3.24);

									this.addChild(this.shape);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-313.5,-176,627,352);


								(lib.Tween26 = function() {
									this.initialize();

									// Layer 1
									this.shape = new cjs.Shape();
									this.shape.graphics.f("#FABB42").s().p("AucIfIAAw9Ic5AAIAAQ9g");
									this.shape.setTransform(0,0,3.387,3.24);

									this.addChild(this.shape);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-313.5,-176,627,352);


								(lib.Tween25 = function() {
									this.initialize();

									// Layer 1
									this.text = new cjs.Text("FEB 11th", "26px 'Arial Rounded MT Bold'");
									this.text.lineHeight = 28;
									this.text.setTransform(-55.9,-23.8);

									this.shape = new cjs.Shape();
									this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("AFilLQDnBOiwGBQBBH5kUkhQhREripjlQhpD5iNAsQCfkmgmg8QkKDSAwnAQi7jcDNjVQhJkUCtAxQBujwBkCXQCNjACIEMQCujZgeG4g");
									this.shape.setTransform(0,0,1.594,0.809);

									this.shape_1 = new cjs.Shape();
									this.shape_1.graphics.f("#FFCC66").s().p("AixFlQkKDSAwnAQi7jcDNjVQhJkUCtAxQBujwBkCXQCNjACIEMQCujZgeG4QDnBOiwGBQBBH5kUkhQhREripjlQhpD5iNAsQCfkmgmg8g");
									this.shape_1.setTransform(0,0,1.594,0.809);

									this.addChild(this.shape_1,this.shape,this.text);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-79.9,-60,160,120.1);


								(lib.Tween22 = function() {
									this.initialize();

									// Layer 1
									this.text = new cjs.Text("att.com/turorial", "italic bold 20px 'Arial'", "#0066FF");
									this.text.lineHeight = 22;
									this.text.setTransform(-75,34.7);

									this.shape = new cjs.Shape();
									this.shape.graphics.f("#FFFFFF").s().p("AwGCBQEDgcAVjmIb0AAQkCAdgWDlg");
									this.shape.setTransform(0,47.9);

									this.text_1 = new cjs.Text("Get help with your wireless\ndevice and its features at", "14px 'Arial'", "#0066FF");
									this.text_1.lineHeight = 16;
									this.text_1.setTransform(-75.7,-5.5);

									this.text_2 = new cjs.Text("Device How-To\nCenter", "24px 'Arial Rounded MT Bold'", "#FFFFFF");
									this.text_2.lineHeight = 26;
									this.text_2.setTransform(-75.7,-71);

									this.addChild(this.text_2,this.text_1,this.shape,this.text);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-103.1,-71,207.4,132.1);


								(lib.Tween21 = function() {
									this.initialize();

									// Layer 1
									this.text = new cjs.Text("PHONE SETUP", "35px 'Arial Rounded MT Bold'", "#FF3467");
									this.text.lineHeight = 37;
									this.text.setTransform(-129.5,-22.2);

									this.addChild(this.text);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-129.5,-22.2,259.1,44.5);


								(lib.Tween20 = function() {
									this.initialize();

									// Layer 1
									this.text = new cjs.Text("PHONE SETUP", "35px 'Arial Rounded MT Bold'", "#FF3467");
									this.text.lineHeight = 37;
									this.text.setTransform(-129.5,-22.2);

									this.addChild(this.text);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-129.5,-22.2,259.1,44.5);


								(lib.Tween19 = function() {
									this.initialize();

									// Layer 1
									this.shape = new cjs.Shape();
									this.shape.graphics.f("#FF5050").s().p("Ag5BEQgHgCgEgFQgFgGABgHQAAgHAEgFIAegkIgegjQgEgGAAgHQgBgGAFgGQAEgGAHgBQAHgCAGADIBqAxQAHAEADAHQADAGgDAHQgDAIgHADIhqAxQgEACgFAAIgEgBg");
									this.shape.setTransform(134.9,25.7);

									this.shape_1 = new cjs.Shape();
									this.shape_1.graphics.f().s("#FF5050").ss(4,1,1).p("A81AAMA5rAAA");
									this.shape_1.setTransform(-53.3,25.4);

									this.text = new cjs.Text("TRACK YOUR ORDER", "50px 'Arial Rounded MT Bold'", "#FFFF00");
									this.text.lineHeight = 52;
									this.text.setTransform(-240.9,-19.2,0.703,0.703);

									this.shape_2 = new cjs.Shape();
									this.shape_2.graphics.f("#66CC33").s().p("AqoImQgmAAAAgmIj6v/QAAgmAmAAIdFAAQAmAAAAAmIn0P/QAAAmgmAAg");
									this.shape_2.setTransform(213.4,-0.4,0.283,0.225);

									this.shape_3 = new cjs.Shape();
									this.shape_3.graphics.f("#000000").s().p("AHIgQYAAAAgOgBgZgBYgZgBgkgBgrgBYgqgBgygBg2gCYg1gBg5gBg5gBYg3AAg5gBg2AAYg1AAgygBgrAAYgrABgkAAgZAAYgZAAgOAAAAAAYgDAAgCACAAADYAAACACACACABIABAAYAAAAADABAHACYAHABAKADAMADYAMACAQAEARADYARABAUADAVADYArAGAyAGA1AEYAbACAcACAcABYAcABAcABAcAAYAbABAdAAAcgBYAcAAAcgBAbgBYA1gDAygEArgFYAVgDAUgDARgCYASgDAPgDANgCYAMAAAKgDAHgBYAGgCAEAAAAAAIABgBYADAAABgDAAgCYgBgDgCgBgCAA");
									this.shape_3.setTransform(172,12.2,0.157,0.283,180,0,0,0,-1.9);

									this.shape_4 = new cjs.Shape();
									this.shape_4.graphics.f("#000000").s().p("AHIgQYAAAAgOgBgZgBYgZgBgkgBgrgBYgqgBgygBg2gCYg1gBg5gBg5gBYg3AAg5gBg2AAYg1AAgygBgrAAYgrABgkAAgZAAYgZAAgOAAAAAAYgDAAgCACAAADYAAACACACACABIABAAYAAAAADABAHACYAHABAKADAMADYAMACAQAEARADYARABAUADAVADYArAGAyAGA1AEYAbACAcACAcABYAcABAcABAcAAYAbABAdAAAcgBYAcAAAcgBAbgBYA1gDAygEArgFYAVgDAUgDARgCYASgDAPgDANgCYAMAAAKgDAHgBYAGgCAEAAAAAAIABgBYADAAABgDAAgCYgBgDgCgBgCAA");
									this.shape_4.setTransform(166,2.4,0.2,0.283,180,0,0,0,-1.9);

									this.shape_5 = new cjs.Shape();
									this.shape_5.graphics.f("#000000").s().p("AHIgQYAAAAgOgBgZgBYgZgBgkgBgrgBYgqgBgygBg2gCYg1gBg5gBg5gBYg3AAg5gBg2AAYg1AAgygBgrAAYgrABgkAAgZAAYgZAAgOAAAAAAYgDAAgCACAAADYAAACACACACABIABAAYAAAAADABAHACYAHABAKADAMADYAMACAQAEARADYARABAUADAVADYArAGAyAGA1AEYAbACAcACAcABYAcABAcABAcAAYAbABAdAAAcgBYAcAAAcgBAbgBYA1gDAygEArgFYAVgDAUgDARgCYASgDAPgDANgCYAMAAAKgDAHgBYAGgCAEAAAAAAIABgBYADAAABgDAAgCYgBgDgCgBgCAA");
									this.shape_5.setTransform(157,-7.6,0.283,0.283,180,0,0,0,-1.9);

									this.shape_6 = new cjs.Shape();
									this.shape_6.graphics.f("#CC3300").s().rr(-34.5,-28,69,56,5);
									this.shape_6.setTransform(226.1,-16.1,0.317,0.24);

									this.shape_7 = new cjs.Shape();
									this.shape_7.graphics.f("#FF5050").s().p("AgwAxIAAAAQgVgUABgdQgBgbAVgVIAAAAQAVgVAbAAQAdAAAUAVIAAAAQAVAVgBAbQAAAdgUAUQgUAUgdABIAAAAQgbAAgVgVgAgTgTIgBAAQgIAIgBALQABAMAIAIIABABQAIAIALAAQAMABAJgJQAJgJAAgMQgBgLgIgIIAAAAQgJgJgMAAQgLAAgIAJg");
									this.shape_7.setTransform(220.6,26);

									this.shape_8 = new cjs.Shape();
									this.shape_8.graphics.f("#FFFFFF").s().p("AAAAdQgLAAgIgIIgBgBQgIgIgBgMQABgLAIgIIABAAQAIgJALAAQAMAAAIAJIABAAQAIAIAAALQABAMgJAJQgJAIgMAAIAAAAg");
									this.shape_8.setTransform(220.7,26);

									this.shape_9 = new cjs.Shape();
									this.shape_9.graphics.f("#FF5050").s().p("AgvAxIgBAAQgVgUABgdQgBgbAVgVIABAAQAUgVAbAAQAdAAAUAVIABAAQAUAVgBAbQAAAdgUAUQgUAUgdABIAAAAQgbAAgUgVgAgTgTIgBAAQgIAIgBALQABAMAIAIIABABQAIAIALAAQAMABAJgJQAJgJAAgMQgBgLgIgIIAAAAQgJgJgMAAQgLAAgIAJg");
									this.shape_9.setTransform(196.6,26);

									this.shape_10 = new cjs.Shape();
									this.shape_10.graphics.f("#FFFFFF").s().p("AAAAdQgLAAgIgIIgBgBQgIgIgBgMQABgLAIgIIABAAQAIgJALAAQAMAAAJAJIAAAAQAIAIABALQAAAMgJAJQgJAIgMAAIAAAAg");
									this.shape_10.setTransform(196.6,26);

									this.shape_11 = new cjs.Shape();
									this.shape_11.graphics.f("#FECC08").s().rr(-34.5,-28,69,56,5);
									this.shape_11.setTransform(203.7,-15.1,0.414,0.414);

									this.shape_12 = new cjs.Shape();
									this.shape_12.graphics.f("#E350FF").s().rr(-34.5,-28,69,56,5);
									this.shape_12.setTransform(218.2,-24.2,0.273,0.24);

									this.shape_13 = new cjs.Shape();
									this.shape_13.graphics.f("#FF5050").s().p("AxUpzYBoAwBpAvBpAwIgIgKIBTEbIBVEYICrI0YADAJAIAGAJAAIFXgMIFVgMIFXgNICsgHICrgIIAAAAYAEAAADgBACgDICwiuYAEgEAAgHgEgEYgDgEgGAAgEADIgBABIgzAkIgaATYgIAGgIAGgJAGIgxAmYgRANgRAMgQANIAcgMIhWgGYgdgBgcgDgdgBIhWgEIhWgEYgcgBgdgBgdgBIhWgCYg5gBg5gCg5AAIhWAAYgdgBgcABgdAAIhUAAIhWABYg5ABg5ABg5ABYg5ACg6ABg5ADIBoBJYgPgugPgvgOgvYgPgvgPgvgQguIgXhGIgYhGYgPgvgRgugQguYgQgtgRgugRguYgRgugRgugRgvIgbhEYgJgXgIgXgKgXIgbhFYgJgXgKgXgJgWIgEgKYgFgLgJgIgLgEIhTgaYgNgFgOgFgOgEIgqgMIgpgNYgOgEgOgEgOgEIhUgXIgBgBYgGgBgFADgCAGYgBAFACAFAFAC");
									this.shape_13.setTransform(201.8,-0.7,0.283,0.283,0,0,0,0,-0.5);

									this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.text,this.shape_1,this.shape);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-240.8,-30.9,481.8,64);


								(lib.Tween18 = function() {
									this.initialize();

									// Layer 1
									this.shape = new cjs.Shape();
									this.shape.graphics.bf(img.person, null, new cjs.Matrix2D(0.977,0,0,0.977,-75,-69.3)).s().p("AnNHOQjAjAABkOQgBkNDAjAQC/i/EOgBQEPABC/C/QDADAgBENQABEOjADAQi/C/kPAAQkOAAi/i/g");

									this.addChild(this.shape);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-65.4,-65.4,130.8,130.8);


								(lib.Tween16 = function() {
									this.initialize();

									// Layer 1
									this.instance = new lib.att_screen_body();
									this.instance.setTransform(-165.5,-123.3);

									this.shape = new cjs.Shape();
									this.shape.graphics.f("#000000").s("#514F4F").ss(1,1,1).rr(-179.7,-136.15,359.4,272.3,11.1);
									this.shape.setTransform(-0.1,-0.4,1,0.996);

									this.addChild(this.shape,this.instance);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-180.7,-137,361.4,273.3);


								(lib.Tween13 = function() {
									this.initialize();

									// Layer 1
									this.instance = new lib.people4();
									this.instance.setTransform(-116.2,-114.7,1.52,1.52);

									this.addChild(this.instance);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-116.2,-114.7,232.5,229.5);


								(lib.Tween12 = function() {
									this.initialize();

									// Layer 1
									this.instance = new lib.person();
									this.instance.setTransform(-51.5,-50.8,0.678,0.678);

									this.addChild(this.instance);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-51.5,-50.8,103,101.7);


								(lib.Tween11 = function() {
									this.initialize();

									// Layer 1
									this.shape = new cjs.Shape();
									this.shape.graphics.f("#FFFFFF").s().p("AhOCSIv9NMINKvoIt/vJIQdMWIO9t0IsMQSIQzRRg");
									this.shape.setTransform(0,0,0.157,0.157);

									this.addChild(this.shape);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-18.1,-16.8,36.2,33.7);


								(lib.Tween9 = function(mode,startPosition,loop) {
									this.initialize(mode,startPosition,loop,{});

									// Layer 1
									this.instance = new lib.iphone6plus_gold_portrait();
									this.instance.setTransform(-123.4,-123.4,0.334,0.334);

									this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

									// Layer 2
									this.shape = new cjs.Shape();
									this.shape.graphics.rf(["rgba(70,70,70,0.561)","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,35.7).s().p("Ak1AIQiAgDgBgFQABgECAgEQCBgDC0AAQC2AACAADQCBAEAAAEQAAAFiBADQiAAEi2AAQi0AAiBgEg");
									this.shape.setTransform(-1.2,137,1.351,3.769);

									this.timeline.addTween(cjs.Tween.get(this.shape).wait(10));

								}).prototype = p = new cjs.MovieClip();
								p.nominalBounds = new cjs.Rectangle(-123.4,-123.4,246.9,265.3);


								(lib.Tween8 = function() {
									this.initialize();

									// Layer 1
									this.shape = new cjs.Shape();
									this.shape.graphics.f().s("#514F4F").ss(1,1,1).p("ADxgmIjtCHIAAhNIj0AAIAAh0");
									this.shape.setTransform(0,3,0.77,0.77);

									this.shape_1 = new cjs.Shape();
									this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjwAJID0AAIAAhLIDtCG");
									this.shape_1.setTransform(0,-5.2,0.77,0.77);

									this.shape_2 = new cjs.Shape();
									this.shape_2.graphics.lf(["#69C7FA","#007DC2"],[0,1],-0.8,8,-0.8,-3.4).s().p("AAEA7Ij0AAIAAh0ID0AAIAAhOIDtCHIjtCIg");
									this.shape_2.setTransform(0,0,0.77,0.77);

									this.addChild(this.shape_2,this.shape_1,this.shape);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-19.5,-11.4,39.2,23);


								(lib.Tween7 = function() {
									this.initialize();

									// Layer 2
									this.shape = new cjs.Shape();
									this.shape.graphics.f("#7AC044").s().p("AsvMvQlRlRAAneQAAndFRlSQFTlRHcAAQHdAAFSFRQFSFSAAHdQAAHelSFRQlSFSndAAQncAAlTlSg");
									this.shape.setTransform(2.4,-2,0.954,0.954);

									// Layer 1
									this.instance = new lib.lgGreen();
									this.instance.setTransform(-77,-136,1,1,15);

									this.addChild(this.instance,this.shape);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-134.5,-136,269.2,272);


								(lib.Tween6 = function() {
									this.initialize();

									// Layer 2
									this.shape = new cjs.Shape();
									this.shape.graphics.f("#EB4777").s().p("AnbHdQjGjGAAkXQAAkWDGjFQDFjGEWAAQEXAADGDGQDFDFAAEWQAAEXjFDGQjGDFkXAAQkWAAjFjFg");
									this.shape.setTransform(-1.6,4.5,1.047,1.047);

									// Layer 1
									this.instance = new lib.pinkCircle();
									this.instance.setTransform(73.3,-65.5,1,1,94);

									this.addChild(this.instance,this.shape);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-73.2,-75.1,146.5,150.3);


								(lib.Tween5 = function() {
									this.initialize();

									// Layer 1
									this.instance = new lib.people2();
									this.instance.setTransform(-51,-50);

									this.addChild(this.instance);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-51,-50,102,100);


								(lib.Tween4 = function() {
									this.initialize();

									// Layer 1
									this.instance = new lib.people_1();
									this.instance.setTransform(-107,-102);

									this.addChild(this.instance);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-107,-102,214,204);


								(lib.Tween3copy = function() {
									this.initialize();

									// Layer 1
									this.text = new cjs.Text("Hi,", "50px 'Arial Rounded MT Bold'", "#FFFFFF");
									this.text.lineHeight = 52;
									this.text.setTransform(-35.5,-30.9);

									this.addChild(this.text);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-35.5,-30.9,71.4,61.9);


								(lib.Tween3 = function() {
									this.initialize();

									// Layer 2
									this.shape = new cjs.Shape();
									this.shape.graphics.f("#F97514").s().p("AlZFaQiQiPAAjLQAAjKCQiPQCPiPDKAAQDKAACQCPQCPCPAADKQAADLiPCPQiQCQjKAAQjKAAiPiQg");
									this.shape.setTransform(-5.9,0.1,1.065,1.065);

									// Layer 1
									this.instance = new lib.orangeCircle();
									this.instance.setTransform(-57,-49);

									this.addChild(this.instance,this.shape);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-58.1,-52,115.1,104.4);


								(lib.Tween2 = function() {
									this.initialize();

									// Layer 1
									this.text = new cjs.Text("Henry", "50px 'Arial Rounded MT Bold'", "#FFFFFF");
									this.text.lineHeight = 52;
									this.text.setTransform(-75.5,-30.9);

									this.addChild(this.text);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-75.5,-30.9,151.1,61.9);


								(lib.Tween1 = function() {
									this.initialize();

									// Layer 1
									this.instance = new lib.ATT_Logo();
									this.instance.setTransform(-52.5,-52.5,0.5,0.5);

									this.addChild(this.instance);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-52.5,-52.5,105,105);


								(lib.Symbol18 = function() {
									this.initialize();

									// Layer 1
									this.text = new cjs.Text("Getting\nStarted", "24px 'Arial Rounded MT Bold'", "#FFFFFF");
									this.text.lineHeight = 26;
									this.text.setTransform(-45.7,-30.7);

									this.addChild(this.text);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-45.7,-30.7,91.2,61.5);


								(lib.Symbol17 = function() {
									this.initialize();

									// Layer 1
									this.instance = new lib.person1();

									this.addChild(this.instance);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(0,0,172,172);


								(lib.Symbol14 = function() {
									this.initialize();

									// Layer 1
									this.shape = new cjs.Shape();
									this.shape.graphics.f().s("#514F4F").ss(1,1,1).p("AEBAAQAAAEhMADQhLADhqAAQhpAAhMgDQhLgDAAgEQAAgCBLgDQBMgEBpAAQBqAABLAEQBMADAAACg");

									this.shape_1 = new cjs.Shape();
									this.shape_1.graphics.f("#000000").s().p("Ai0AGQhMgCAAgEQAAgCBMgEQBLgDBpAAQBqAABLADQBLAEAAACQAAAEhLACQhLADhqAAQhpAAhLgDg");

									this.addChild(this.shape_1,this.shape);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-26.7,-2,53.4,4);


								(lib.Symbol13 = function() {
									this.initialize();

									// Layer 1
									this.shape = new cjs.Shape();
									this.shape.graphics.f("#1676CB").s().p("AgwAxQgUgVgBgcQABgcAUgUQAVgVAbAAQAdAAAUAVQAVAUAAAcQAAAcgVAVQgUAUgdABQgbgBgVgUg");
									this.shape.setTransform(21.4,11.9,0.53,0.53);

									this.shape_1 = new cjs.Shape();
									this.shape_1.graphics.f("#1676CB").s().p("AoVEPIEElIIBwCaIFJlvIFuIdg");
									this.shape_1.setTransform(31.7,21.3,0.285,0.285);

									this.shape_2 = new cjs.Shape();
									this.shape_2.graphics.f("#1676CB").s().p("Ax6L/IAA39MAj0AAAIAAX9gAvLJQIeXAAIAAyfI+XAAg");
									this.shape_2.setTransform(32.7,21.9,0.285,0.285);

									this.shape_3 = new cjs.Shape();
									this.shape_3.graphics.f("#FFFFFF").s().p("AvLJQIAAyfIeXAAIAASfg");
									this.shape_3.setTransform(32.7,21.9,0.285,0.285);

									this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(0,0,65.5,43.8);


								(lib.Symbol12 = function() {
									this.initialize();

									// Layer 1
									this.shape = new cjs.Shape();
									this.shape.graphics.f("#1676CB").s().p("Ah6iNID1CNIj1COg");
									this.shape.setTransform(36,22,0.712,0.712);

									this.shape_1 = new cjs.Shape();
									this.shape_1.graphics.f("#1676CB").s().p("AnKEzIAAgTIAZAAIAAhCIgZAAIAAm/IAZAAIAAhBIgZAAIAAgQIOVAAIAAAQIgOAAIAABBIAOAAIAAG/IgOAAIAABCIAOAAIAAATgAEuEgIBtAAIAAhCIhtAAgAChEgIBsAAIAAhCIhsAAgAAUEgIBsAAIAAhCIhsAAgAh3EgIBtAAIAAhCIhtAAgAkEEgIBsAAIAAhCIhsAAgAmREgIBsAAIAAhCIhsAAgAmaDKIM0AAIAAmTIs0AAgAEujhIBtAAIAAhBIhtAAgAChjhIBsAAIAAhBIhsAAgAAUjhIBsAAIAAhBIhsAAgAh3jhIBtAAIAAhBIhtAAgAkEjhIBsAAIAAhBIhsAAgAmRjhIBsAAIAAhBIhsAAg");
									this.shape_1.setTransform(32.7,21.9,0.712,0.712);

									this.shape_2 = new cjs.Shape();
									this.shape_2.graphics.f("#FFFFFF").s().p("AmZDKIAAmTIMzAAIAAGTg");
									this.shape_2.setTransform(32.7,21.9,0.712,0.712);

									this.addChild(this.shape_2,this.shape_1,this.shape);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(0,0,65.5,43.8);


								(lib.Symbol11 = function() {
									this.initialize();

									// Layer 1
									this.shape = new cjs.Shape();
									this.shape.graphics.f("#1676CB").s().p("AgeCqQgJgIgEgLQgKgOgGgaQgQg/AFhNQAEhPASgjIAGgJQAEgKAIgIQASgSAYAAQAZAAASASQASASAAAZQAAAagSASQgSARgZABQgLAAgHgDIgDANQgNArAMAxIAHAfQAGgBAJAAQAZAAASARQASASAAAaQAAAZgSARQgSATgZgBQgYABgSgTg");
									this.shape.setTransform(21.3,20.2,0.712,0.712,19.5);

									this.shape_1 = new cjs.Shape();
									this.shape_1.graphics.f("#1676CB").s().p("AAAC/QhQABgqgQQgvgUAHggQAHghAsgZQAXgPAfgGQAegTgZgdQghgrABgvQgBgvAagZQAYgYAigBIABAAIAAAAIAGAAQAfADAXAWQAaAZAAAvQAAAvghArQgYAdAdATQAfAHAYAOQArAZAGAhQAHAgguAUQgnAPhHAAIgNAAg");
									this.shape_1.setTransform(39.8,21.9,0.712,0.712);

									this.shape_2 = new cjs.Shape();
									this.shape_2.graphics.f("#1676CB").s().p("Ax6L/IAA39MAj0AAAIAAX9gAvLJQIeXAAIAAyfI+XAAg");
									this.shape_2.setTransform(32.7,21.9,0.285,0.285);

									this.shape_3 = new cjs.Shape();
									this.shape_3.graphics.f("#FFFFFF").s().p("AvLJQIAAyfIeXAAIAASfg");
									this.shape_3.setTransform(32.7,21.9,0.285,0.285);

									this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(0,0,65.5,43.8);


								(lib.Symbol8 = function() {
									this.initialize();

									// Layer 1
									this.instance = new lib.tablet();
									this.instance.setTransform(-131.5,-113);

									this.addChild(this.instance);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-131.5,-113,263,226);


								(lib.Symbol7 = function(mode,startPosition,loop) {
									this.initialize(mode,startPosition,loop,{});

									// Layer 3 (mask)
									var mask = new cjs.Shape();
									mask._off = true;
									var mask_graphics_0 = new cjs.Graphics().p("AifJmIAAzLIE/AAIAAFmIhzAAIAAAaIBzAAIAAFkIhsAAIAAA0IBsAAIAAGzg");
									var mask_graphics_1 = new cjs.Graphics().p("AjQJmIAAzLIGhAAIAAFmIjTAAIAAAaIBxAAIAAFkIhsAAIAAA0IBsAAIAAGzg");
									var mask_graphics_2 = new cjs.Graphics().p("AkAJmIAAzLIIBAAIAAFmIkzAAIAAAaIBwAAIAAFkIhqAAIAAA0IBqAAIAAGzg");
									var mask_graphics_3 = new cjs.Graphics().p("AkxJmIAAzLIJjAAIAAFmImVAAIAAAaIBxAAIAAFkIhrAAIAAA0IBrAAIAAGzg");
									var mask_graphics_4 = new cjs.Graphics().p("AliJmIAAzLILFAAIAAFmIn3AAIAAAaIBzAAIAAFkIhsAAIAAA0IBsAAIAAGzg");
									var mask_graphics_5 = new cjs.Graphics().p("AmTJmIAAzLIMnAAIAAFmIpZAAIAAAaIBzAAIAAFkIhsAAIAAA0IBsAAIAAGzg");
									var mask_graphics_6 = new cjs.Graphics().p("AnDJmIAAzLIOHAAIAAFmIq5AAIAAAaIByAAIAAFkIhsAAIAAA0IBsAAIAAGzg");
									var mask_graphics_7 = new cjs.Graphics().p("An0JmIAAzLIPpAAIAAFmIsbAAIAAAaIBzAAIAAFkIhtAAIAAA0IBtAAIAAGzg");
									var mask_graphics_8 = new cjs.Graphics().p("AolJmIAAzLIRLAAIAAFmIt9AAIAAAaIBzAAIAAFkIhsAAIAAA0IBsAAIAAGzg");
									var mask_graphics_9 = new cjs.Graphics().p("ApWJmIAAzLIStAAIAAFmIvfAAIAAAaIBzAAIAAFkIhsAAIAAA0IBsAAIAAGzg");
									var mask_graphics_10 = new cjs.Graphics().p("AqGJmIAAzLIUOAAIAAFmIxAAAIAAAaIByAAIAAFkIhsAAIAAA0IBsAAIAAGzg");
									var mask_graphics_11 = new cjs.Graphics().p("Aq3JmIAAzLIVvAAIAAFmIyhAAIAAAaIBzAAIAAFkIhtAAIAAA0IBtAAIAAGzg");
									var mask_graphics_12 = new cjs.Graphics().p("AroJmIAAzLIXRAAIAAFmI0DAAIAAAaIBzAAIAAFkIhsAAIAAA0IBsAAIAAGzg");
									var mask_graphics_13 = new cjs.Graphics().p("AsZJmIAAzLIYzAAIAAFmI1lAAIAAAaIBzAAIAAFkIhsAAIAAA0IBsAAIAAGzg");
									var mask_graphics_14 = new cjs.Graphics().p("AtJJmIAAzLIaTAAIAAFmI3FAAIAAAaIByAAIAAFkIhsAAIAAA0IBsAAIAAGzg");
									var mask_graphics_15 = new cjs.Graphics().p("At6JmIAAzLIb1AAIAAFmI4nAAIAAAaIBzAAIAAFkIhtAAIAAA0IBtAAIAAGzg");
									var mask_graphics_16 = new cjs.Graphics().p("AurJmIAAzLIdXAAIAAFmI6JAAIAAAaIBzAAIAAFkIhsAAIAAA0IBsAAIAAGzg");
									var mask_graphics_17 = new cjs.Graphics().p("AvcJmIAAzLIe5AAIAAFmI7rAAIAAAaIBzAAIAAFkIhsAAIAAA0IBsAAIAAGzg");
									var mask_graphics_18 = new cjs.Graphics().p("AwMJmIAAzLMAgZAAAIAAFmI9LAAIAAAaIByAAIAAFkIhsAAIAAA0IBsAAIAAGzg");
									var mask_graphics_19 = new cjs.Graphics().p("Aw9JmIAAzLMAh7AAAIAAFmI+tAAIAAAaIBzAAIAAFkIhtAAIAAA0IBtAAIAAGzg");
									var mask_graphics_20 = new cjs.Graphics().p("AxuJmIAAzLMAjdAAAIAAFmMggPAAAIAAAaIBzAAIAAFkIhsAAIAAA0IBsAAIAAGzg");
									var mask_graphics_21 = new cjs.Graphics().p("AyfJmIAAzLMAk/AAAIAAFmMghxAAAIAAAaIBzAAIAAFkIhsAAIAAA0IBsAAIAAGzg");
									var mask_graphics_22 = new cjs.Graphics().p("AzPJmIAAzLMAmgAAAIAAFmMgjSAAAIAAAaIByAAIAAFkIhsAAIAAA0IBsAAIAAGzg");
									var mask_graphics_23 = new cjs.Graphics().p("A0AJmIAAzLMAoBAAAIAAFmMgkzAAAIAAAaIBzAAIAAFkIhtAAIAAA0IBtAAIAAGzg");
									var mask_graphics_24 = new cjs.Graphics().p("A0xJmIAAzLMApjAAAIAAFmMgmVAAAIAAAaIBzAAIAAFkIhsAAIAAA0IBsAAIAAGzg");
									var mask_graphics_25 = new cjs.Graphics().p("A1iJmIAAzLMArFAAAIAAFmMgn3AAAIAAAaIBzAAIAAFkIhsAAIAAA0IBsAAIAAGzg");
									var mask_graphics_26 = new cjs.Graphics().p("A2SJmIAAzLMAslAAAIAAFmMgpXAAAIAAAaIByAAIAAFkIhsAAIAAA0IBsAAIAAGzg");
									var mask_graphics_27 = new cjs.Graphics().p("A3DJmIAAzLMAuHAAAIAAFmMgq5AAAIAAAaIBzAAIAAFkIhtAAIAAA0IBtAAIAAGzg");
									var mask_graphics_28 = new cjs.Graphics().p("A30JmIAAzLMAvpAAAIAAFmMgsbAAAIAAAaIBzAAIAAFkIhsAAIAAA0IBsAAIAAGzg");
									var mask_graphics_29 = new cjs.Graphics().p("A4lJmIAAzLMAxLAAAIAAFmMgt9AAAIAAAaIBzAAIAAFkIhsAAIAAA0IBsAAIAAGzg");
									var mask_graphics_30 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaIByAAIAAFkIhsAAIAAA0IBsAAIAAGzg");
									var mask_graphics_31 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaIDUAAIAAFkIjOAAIAAA0IBsAAIAAGzg");
									var mask_graphics_32 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaIE1AAIAAFkIkvAAIAAA0IBsAAIAAGzg");
									var mask_graphics_33 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaIGXAAIAAFkImRAAIAAA0IBsAAIAAGzg");
									var mask_graphics_34 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaIH5AAIAAFkInzAAIAAA0IBsAAIAAGzg");
									var mask_graphics_35 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaIJaAAIAAFkIpUAAIAAA0IBsAAIAAGzg");
									var mask_graphics_36 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaIK7AAIAAFkIq1AAIAAA0IBsAAIAAGzg");
									var mask_graphics_37 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaIMdAAIAAFkIsXAAIAAA0IBsAAIAAGzg");
									var mask_graphics_38 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaIN+AAIAAFkIt4AAIAAA0IBsAAIAAGzg");
									var mask_graphics_39 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaIPgAAIAAFkIvaAAIAAA0IBsAAIAAGzg");
									var mask_graphics_40 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaIRCAAIAAFkIw8AAIAAA0IBsAAIAAGzg");
									var mask_graphics_41 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaISjAAIAAFkIydAAIAAA0IBsAAIAAGzg");
									var mask_graphics_42 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaIUEAAIAAFkIz+AAIAAA0IBsAAIAAGzg");
									var mask_graphics_43 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaIVmAAIAAFkI1gAAIAAA0IBsAAIAAGzg");
									var mask_graphics_44 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaIXFAAIAAFkI2/AAIAAA0IBsAAIAAGzg");
									var mask_graphics_45 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaIYnAAIAAFkI4hAAIAAA0IBsAAIAAGzg");
									var mask_graphics_46 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaIaJAAIAAFkI6DAAIAAA0IBsAAIAAGzg");
									var mask_graphics_47 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaIbqAAIAAFkI7kAAIAAA0IBsAAIAAGzg");
									var mask_graphics_48 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaIdLAAIAAFkI9FAAIAAA0IBsAAIAAGzg");
									var mask_graphics_49 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaIetAAIAAFkI+nAAIAAA0IBsAAIAAGzg");
									var mask_graphics_50 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAgOAAAIAAFkMggIAAAIAAA0IBsAAIAAGzg");
									var mask_graphics_51 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAhwAAAIAAFkMghqAAAIAAA0IBsAAIAAGzg");
									var mask_graphics_52 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAjSAAAIAAFkMgjMAAAIAAA0IBsAAIAAGzg");
									var mask_graphics_53 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAkzAAAIAAFkMgktAAAIAAA0IBsAAIAAGzg");
									var mask_graphics_54 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAmUAAAIAAFkMgmOAAAIAAA0IBsAAIAAGzg");
									var mask_graphics_55 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAn2AAAIAAFkMgnwAAAIAAA0IBsAAIAAGzg");
									var mask_graphics_56 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMApXAAAIAAFkMgpRAAAIAAA0IBsAAIAAGzg");
									var mask_graphics_57 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAq5AAAIAAFkMgqzAAAIAAA0IBsAAIAAGzg");
									var mask_graphics_58 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAsbAAAIAAFkMgsVAAAIAAA0IBsAAIAAGzg");
									var mask_graphics_59 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAt8AAAIAAFkMgt2AAAIAAA0IBsAAIAAGzg");
									var mask_graphics_60 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAvdAAAIAAFkMgvXAAAIAAA0IBsAAIAAGzg");
									var mask_graphics_61 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAvdAAAIAAFkMgvXAAAIAAA0IC/AAIAAGzg");
									var mask_graphics_62 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAvdAAAIAAFkMgvXAAAIAAA0IERAAIAAGzg");
									var mask_graphics_63 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAvdAAAIAAFkMgvXAAAIAAA0IFkAAIAAGzg");
									var mask_graphics_64 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAvdAAAIAAFkMgvXAAAIAAA0IG2AAIAAGzg");
									var mask_graphics_65 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAvdAAAIAAFkMgvXAAAIAAA0IIIAAIAAGzg");
									var mask_graphics_66 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAvdAAAIAAFkMgvXAAAIAAA0IJaAAIAAGzg");
									var mask_graphics_67 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAvdAAAIAAFkMgvXAAAIAAA0IKtAAIAAGzg");
									var mask_graphics_68 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAvdAAAIAAFkMgvXAAAIAAA0IL/AAIAAGzg");
									var mask_graphics_69 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAvdAAAIAAFkMgvXAAAIAAA0INSAAIAAGzg");
									var mask_graphics_70 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAvdAAAIAAFkMgvXAAAIAAA0IOkAAIAAGzg");
									var mask_graphics_71 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAvdAAAIAAFkMgvXAAAIAAA0IP2AAIAAGzg");
									var mask_graphics_72 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAvdAAAIAAFkMgvXAAAIAAA0IRIAAIAAGzg");
									var mask_graphics_73 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAvdAAAIAAFkMgvXAAAIAAA0ISbAAIAAGzg");
									var mask_graphics_74 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAvdAAAIAAFkMgvXAAAIAAA0ITtAAIAAGzg");
									var mask_graphics_75 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAvdAAAIAAFkMgvXAAAIAAA0IVAAAIAAGzg");
									var mask_graphics_76 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAvdAAAIAAFkMgvXAAAIAAA0IWQAAIAAGzg");
									var mask_graphics_77 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAvdAAAIAAFkMgvXAAAIAAA0IXiAAIAAGzg");
									var mask_graphics_78 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAvdAAAIAAFkMgvXAAAIAAA0IY1AAIAAGzg");
									var mask_graphics_79 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAvdAAAIAAFkMgvXAAAIAAA0IaHAAIAAGzg");
									var mask_graphics_80 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAvdAAAIAAFkMgvXAAAIAAA0IbZAAIAAGzg");
									var mask_graphics_81 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAvdAAAIAAFkMgvXAAAIAAA0IcrAAIAAGzg");
									var mask_graphics_82 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAvdAAAIAAFkMgvXAAAIAAA0Id+AAIAAGzg");
									var mask_graphics_83 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAvdAAAIAAFkMgvXAAAIAAA0IfQAAIAAGzg");
									var mask_graphics_84 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAvdAAAIAAFkMgvXAAAIAAA0MAgjAAAIAAGzg");
									var mask_graphics_85 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAvdAAAIAAFkMgvXAAAIAAA0MAh1AAAIAAGzg");
									var mask_graphics_86 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAvdAAAIAAFkMgvXAAAIAAA0MAjHAAAIAAGzg");
									var mask_graphics_87 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAvdAAAIAAFkMgvXAAAIAAA0MAkZAAAIAAGzg");
									var mask_graphics_88 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAvdAAAIAAFkMgvXAAAIAAA0MAlsAAAIAAGzg");
									var mask_graphics_89 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAvdAAAIAAFkMgvXAAAIAAA0MAm+AAAIAAGzg");
									var mask_graphics_90 = new cjs.Graphics().p("A5VJmIAAzLMAyrAAAIAAFmMgvdAAAIAAAaMAvdAAAIAAFkMgvXAAAIAAA0MAoRAAAIAAGzg");

									this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-155.2,y:26.8}).wait(1).to({graphics:mask_graphics_1,x:-150.4,y:26.8}).wait(1).to({graphics:mask_graphics_2,x:-145.5,y:26.8}).wait(1).to({graphics:mask_graphics_3,x:-140.6,y:26.8}).wait(1).to({graphics:mask_graphics_4,x:-135.7,y:26.8}).wait(1).to({graphics:mask_graphics_5,x:-130.9,y:26.8}).wait(1).to({graphics:mask_graphics_6,x:-126,y:26.8}).wait(1).to({graphics:mask_graphics_7,x:-121.1,y:26.8}).wait(1).to({graphics:mask_graphics_8,x:-116.2,y:26.8}).wait(1).to({graphics:mask_graphics_9,x:-111.4,y:26.8}).wait(1).to({graphics:mask_graphics_10,x:-106.5,y:26.8}).wait(1).to({graphics:mask_graphics_11,x:-101.6,y:26.8}).wait(1).to({graphics:mask_graphics_12,x:-96.7,y:26.8}).wait(1).to({graphics:mask_graphics_13,x:-91.9,y:26.8}).wait(1).to({graphics:mask_graphics_14,x:-87,y:26.8}).wait(1).to({graphics:mask_graphics_15,x:-82.1,y:26.8}).wait(1).to({graphics:mask_graphics_16,x:-77.2,y:26.8}).wait(1).to({graphics:mask_graphics_17,x:-72.4,y:26.8}).wait(1).to({graphics:mask_graphics_18,x:-67.5,y:26.8}).wait(1).to({graphics:mask_graphics_19,x:-62.6,y:26.8}).wait(1).to({graphics:mask_graphics_20,x:-57.7,y:26.8}).wait(1).to({graphics:mask_graphics_21,x:-52.9,y:26.8}).wait(1).to({graphics:mask_graphics_22,x:-48,y:26.8}).wait(1).to({graphics:mask_graphics_23,x:-43.1,y:26.8}).wait(1).to({graphics:mask_graphics_24,x:-38.2,y:26.8}).wait(1).to({graphics:mask_graphics_25,x:-33.4,y:26.8}).wait(1).to({graphics:mask_graphics_26,x:-28.5,y:26.8}).wait(1).to({graphics:mask_graphics_27,x:-23.6,y:26.8}).wait(1).to({graphics:mask_graphics_28,x:-18.7,y:26.8}).wait(1).to({graphics:mask_graphics_29,x:-13.9,y:26.8}).wait(1).to({graphics:mask_graphics_30,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_31,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_32,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_33,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_34,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_35,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_36,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_37,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_38,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_39,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_40,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_41,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_42,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_43,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_44,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_45,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_46,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_47,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_48,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_49,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_50,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_51,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_52,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_53,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_54,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_55,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_56,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_57,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_58,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_59,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_60,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_61,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_62,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_63,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_64,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_65,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_66,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_67,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_68,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_69,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_70,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_71,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_72,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_73,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_74,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_75,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_76,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_77,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_78,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_79,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_80,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_81,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_82,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_83,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_84,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_85,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_86,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_87,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_88,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_89,x:-9,y:26.8}).wait(1).to({graphics:mask_graphics_90,x:-9,y:26.8}).wait(1));

									// Layer 1
									this.text = new cjs.Text("att.com/checkmyorder", "italic 20px 'Arial'", "#FF3467");
									this.text.lineHeight = 22;
									this.text.setTransform(-114.8,50.5);

									this.text_1 = new cjs.Text("Check delivery status\nwith our tracking tool", "26px 'Arial Rounded MT Bold'", "#FF3467");
									this.text_1.lineHeight = 28;
									this.text_1.setTransform(-137.2,-33.1);

									this.text.mask = this.text_1.mask = mask;

									this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(91));

								}).prototype = p = new cjs.MovieClip();
								p.nominalBounds = null;


								(lib.motion = function(mode,startPosition,loop) {
									this.initialize(mode,startPosition,loop,{});

									// Layer 1
									this.shape = new cjs.Shape();
									this.shape.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-641.6,90,-275.5,90).s().p("Eg26ACMIAAkXMBt1AAAIAAEXg");
									this.shape.setTransform(46,16.8,1.464,0.143,90);

									this.shape_1 = new cjs.Shape();
									this.shape_1.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-12.9,-919.9,-12.9,-383.8).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_1.setTransform(46,16.8);

									this.shape_2 = new cjs.Shape();
									this.shape_2.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-12.9,-900.2,-12.9,-364.1).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_2.setTransform(46,16.8);

									this.shape_3 = new cjs.Shape();
									this.shape_3.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13,-880.4,-13,-344.3).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_3.setTransform(46,16.8);

									this.shape_4 = new cjs.Shape();
									this.shape_4.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13.1,-860.7,-13.1,-324.6).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_4.setTransform(46,16.8);

									this.shape_5 = new cjs.Shape();
									this.shape_5.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13.1,-841,-13.1,-304.9).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_5.setTransform(46,16.8);

									this.shape_6 = new cjs.Shape();
									this.shape_6.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13.2,-821.2,-13.2,-285.1).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_6.setTransform(46,16.8);

									this.shape_7 = new cjs.Shape();
									this.shape_7.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13.2,-801.5,-13.2,-265.4).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_7.setTransform(46,16.8);

									this.shape_8 = new cjs.Shape();
									this.shape_8.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13.3,-781.8,-13.3,-245.7).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_8.setTransform(46,16.8);

									this.shape_9 = new cjs.Shape();
									this.shape_9.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13.3,-762,-13.3,-225.9).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_9.setTransform(46,16.8);

									this.shape_10 = new cjs.Shape();
									this.shape_10.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13.4,-742.3,-13.4,-206.2).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_10.setTransform(46,16.8);

									this.shape_11 = new cjs.Shape();
									this.shape_11.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13.4,-722.6,-13.4,-186.5).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_11.setTransform(46,16.8);

									this.shape_12 = new cjs.Shape();
									this.shape_12.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13.5,-702.8,-13.5,-166.7).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_12.setTransform(46,16.8);

									this.shape_13 = new cjs.Shape();
									this.shape_13.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13.6,-683.1,-13.6,-147).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_13.setTransform(46,16.8);

									this.shape_14 = new cjs.Shape();
									this.shape_14.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13.6,-663.4,-13.6,-127.3).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_14.setTransform(46,16.8);

									this.shape_15 = new cjs.Shape();
									this.shape_15.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13.7,-643.6,-13.7,-107.5).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_15.setTransform(46,16.8);

									this.shape_16 = new cjs.Shape();
									this.shape_16.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13.7,-623.9,-13.7,-87.8).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_16.setTransform(46,16.8);

									this.shape_17 = new cjs.Shape();
									this.shape_17.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13.8,-604.2,-13.8,-68.1).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_17.setTransform(46,16.8);

									this.shape_18 = new cjs.Shape();
									this.shape_18.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13.8,-584.4,-13.8,-48.3).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_18.setTransform(46,16.8);

									this.shape_19 = new cjs.Shape();
									this.shape_19.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13.9,-564.7,-13.9,-28.6).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_19.setTransform(46,16.8);

									this.shape_20 = new cjs.Shape();
									this.shape_20.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14,-545,-14,-8.9).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_20.setTransform(46,16.8);

									this.shape_21 = new cjs.Shape();
									this.shape_21.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14,-525.2,-14,10.9).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_21.setTransform(46,16.8);

									this.shape_22 = new cjs.Shape();
									this.shape_22.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14.1,-505.5,-14.1,30.6).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_22.setTransform(46,16.8);

									this.shape_23 = new cjs.Shape();
									this.shape_23.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14.1,-485.8,-14.1,50.3).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_23.setTransform(46,16.8);

									this.shape_24 = new cjs.Shape();
									this.shape_24.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14.2,-466,-14.2,70.1).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_24.setTransform(46,16.8);

									this.shape_25 = new cjs.Shape();
									this.shape_25.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14.2,-446.3,-14.2,89.8).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_25.setTransform(46,16.8);

									this.shape_26 = new cjs.Shape();
									this.shape_26.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14.3,-426.6,-14.3,109.5).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_26.setTransform(46,16.8);

									this.shape_27 = new cjs.Shape();
									this.shape_27.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14.3,-406.8,-14.3,129.3).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_27.setTransform(46,16.8);

									this.shape_28 = new cjs.Shape();
									this.shape_28.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14.4,-387.1,-14.4,149).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_28.setTransform(46,16.8);

									this.shape_29 = new cjs.Shape();
									this.shape_29.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14.5,-367.4,-14.5,168.7).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_29.setTransform(46,16.8);

									this.shape_30 = new cjs.Shape();
									this.shape_30.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14.5,-347.6,-14.5,188.5).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_30.setTransform(46,16.8);

									this.shape_31 = new cjs.Shape();
									this.shape_31.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14.6,-327.9,-14.6,208.2).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_31.setTransform(46,16.8);

									this.shape_32 = new cjs.Shape();
									this.shape_32.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14.6,-308.2,-14.6,227.9).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_32.setTransform(46,16.8);

									this.shape_33 = new cjs.Shape();
									this.shape_33.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14.7,-288.5,-14.7,247.6).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_33.setTransform(46,16.8);

									this.shape_34 = new cjs.Shape();
									this.shape_34.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14.7,-268.7,-14.7,267.4).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_34.setTransform(46,16.8);

									this.shape_35 = new cjs.Shape();
									this.shape_35.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14.8,-249,-14.8,287.1).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_35.setTransform(46,16.8);

									this.shape_36 = new cjs.Shape();
									this.shape_36.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14.9,-229.3,-14.9,306.8).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_36.setTransform(46,16.8);

									this.shape_37 = new cjs.Shape();
									this.shape_37.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14.9,-209.5,-14.9,326.6).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_37.setTransform(46,16.8);

									this.shape_38 = new cjs.Shape();
									this.shape_38.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15,-189.8,-15,346.3).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_38.setTransform(46,16.8);

									this.shape_39 = new cjs.Shape();
									this.shape_39.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15,-170.1,-15,366).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_39.setTransform(46,16.8);

									this.shape_40 = new cjs.Shape();
									this.shape_40.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15.1,-150.3,-15.1,385.8).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_40.setTransform(46,16.8);

									this.shape_41 = new cjs.Shape();
									this.shape_41.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15.1,-130.6,-15.1,405.5).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_41.setTransform(46,16.8);

									this.shape_42 = new cjs.Shape();
									this.shape_42.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15.2,-110.9,-15.2,425.2).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_42.setTransform(46,16.8);

									this.shape_43 = new cjs.Shape();
									this.shape_43.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15.2,-91.1,-15.2,445).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_43.setTransform(46,16.8);

									this.shape_44 = new cjs.Shape();
									this.shape_44.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15.3,-71.4,-15.3,464.7).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_44.setTransform(46,16.8);

									this.shape_45 = new cjs.Shape();
									this.shape_45.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15.4,-51.7,-15.4,484.4).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_45.setTransform(46,16.8);

									this.shape_46 = new cjs.Shape();
									this.shape_46.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15.4,-31.9,-15.4,504.2).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_46.setTransform(46,16.8);

									this.shape_47 = new cjs.Shape();
									this.shape_47.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15.5,-12.2,-15.5,523.9).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_47.setTransform(46,16.8);

									this.shape_48 = new cjs.Shape();
									this.shape_48.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15.5,7.5,-15.5,543.6).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_48.setTransform(46,16.8);

									this.shape_49 = new cjs.Shape();
									this.shape_49.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15.6,27.3,-15.6,563.4).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_49.setTransform(46,16.8);

									this.shape_50 = new cjs.Shape();
									this.shape_50.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15.6,47,-15.6,583.1).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_50.setTransform(46,16.8);

									this.shape_51 = new cjs.Shape();
									this.shape_51.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15.7,66.7,-15.7,602.8).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_51.setTransform(46,16.8);

									this.shape_52 = new cjs.Shape();
									this.shape_52.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15.8,86.5,-15.8,622.6).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_52.setTransform(46,16.8);

									this.shape_53 = new cjs.Shape();
									this.shape_53.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15.8,106.2,-15.8,642.3).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_53.setTransform(46,16.8);

									this.shape_54 = new cjs.Shape();
									this.shape_54.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15.9,125.9,-15.9,662).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_54.setTransform(46,16.8);

									this.shape_55 = new cjs.Shape();
									this.shape_55.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15.9,145.7,-15.9,681.8).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_55.setTransform(46,16.8);

									this.shape_56 = new cjs.Shape();
									this.shape_56.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-16,165.4,-16,701.5).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_56.setTransform(46,16.8);

									this.shape_57 = new cjs.Shape();
									this.shape_57.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-16,185.1,-16,721.2).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_57.setTransform(46,16.8);

									this.shape_58 = new cjs.Shape();
									this.shape_58.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-16.1,204.9,-16.1,741).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_58.setTransform(46,16.8);

									this.shape_59 = new cjs.Shape();
									this.shape_59.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-16.1,224.6,-16.1,760.7).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_59.setTransform(46,16.8);

									this.shape_60 = new cjs.Shape();
									this.shape_60.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-16.2,244.3,-16.2,780.4).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_60.setTransform(46,16.8);

									this.shape_61 = new cjs.Shape();
									this.shape_61.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-16.3,264.1,-16.3,800.2).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_61.setTransform(46,16.8);

									this.shape_62 = new cjs.Shape();
									this.shape_62.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-16.3,283.8,-16.3,819.9).s().p("EgASBQbMAAAig2IAlAAMAAACg2g");
									this.shape_62.setTransform(46,16.8);

									this.shape_63 = new cjs.Shape();
									this.shape_63.graphics.lf(["rgba(251,130,13,0)","#FB820D","#FB820D","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],207.3,114.9,573.4,114.9).s().p("Eg26ACMIAAkXMBt1AAAIAAEXg");
									this.shape_63.setTransform(46,16.8,1.464,0.143,90);

									this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},157).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[]},1).to({state:[]},1).wait(50));

									// Layer 2
									this.shape_64 = new cjs.Shape();
									this.shape_64.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-641.6,90,-275.5,90).s().p("Eg26ACMIAAkXMBt1AAAIAAEXg");
									this.shape_64.setTransform(18,-3.8,1.464,0.143);

									this.shape_65 = new cjs.Shape();
									this.shape_65.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-920.2,12.9,-384.1,12.9).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_65.setTransform(18,-3.7);

									this.shape_66 = new cjs.Shape();
									this.shape_66.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-900.8,13,-364.7,13).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_66.setTransform(18,-3.7);

									this.shape_67 = new cjs.Shape();
									this.shape_67.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-881.4,13,-345.3,13).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_67.setTransform(18,-3.7);

									this.shape_68 = new cjs.Shape();
									this.shape_68.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-861.9,13.1,-325.8,13.1).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_68.setTransform(18,-3.7);

									this.shape_69 = new cjs.Shape();
									this.shape_69.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-842.5,13.2,-306.4,13.2).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_69.setTransform(18,-3.7);

									this.shape_70 = new cjs.Shape();
									this.shape_70.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-823.1,13.2,-287,13.2).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_70.setTransform(18,-3.7);

									this.shape_71 = new cjs.Shape();
									this.shape_71.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-803.7,13.3,-267.6,13.3).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_71.setTransform(18,-3.7);

									this.shape_72 = new cjs.Shape();
									this.shape_72.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-784.2,13.3,-248.1,13.3).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_72.setTransform(18,-3.7);

									this.shape_73 = new cjs.Shape();
									this.shape_73.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-764.8,13.4,-228.7,13.4).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_73.setTransform(18,-3.7);

									this.shape_74 = new cjs.Shape();
									this.shape_74.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-745.4,13.4,-209.3,13.4).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_74.setTransform(18,-3.7);

									this.shape_75 = new cjs.Shape();
									this.shape_75.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-726,13.5,-189.9,13.5).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_75.setTransform(18,-3.7);

									this.shape_76 = new cjs.Shape();
									this.shape_76.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-706.5,13.5,-170.4,13.5).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_76.setTransform(18,-3.7);

									this.shape_77 = new cjs.Shape();
									this.shape_77.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-687.1,13.6,-151,13.6).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_77.setTransform(18,-3.7);

									this.shape_78 = new cjs.Shape();
									this.shape_78.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-667.7,13.7,-131.6,13.7).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_78.setTransform(18,-3.7);

									this.shape_79 = new cjs.Shape();
									this.shape_79.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-648.3,13.7,-112.2,13.7).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_79.setTransform(18,-3.7);

									this.shape_80 = new cjs.Shape();
									this.shape_80.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-628.8,13.8,-92.7,13.8).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_80.setTransform(18,-3.7);

									this.shape_81 = new cjs.Shape();
									this.shape_81.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-609.4,13.8,-73.3,13.8).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_81.setTransform(18,-3.7);

									this.shape_82 = new cjs.Shape();
									this.shape_82.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-590,13.9,-53.9,13.9).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_82.setTransform(18,-3.7);

									this.shape_83 = new cjs.Shape();
									this.shape_83.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-570.6,13.9,-34.5,13.9).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_83.setTransform(18,-3.7);

									this.shape_84 = new cjs.Shape();
									this.shape_84.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-551.1,14,-15,14).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_84.setTransform(18,-3.7);

									this.shape_85 = new cjs.Shape();
									this.shape_85.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-531.7,14,4.4,14).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_85.setTransform(18,-3.7);

									this.shape_86 = new cjs.Shape();
									this.shape_86.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-512.3,14.1,23.8,14.1).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_86.setTransform(18,-3.7);

									this.shape_87 = new cjs.Shape();
									this.shape_87.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-492.9,14.2,43.2,14.2).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_87.setTransform(18,-3.7);

									this.shape_88 = new cjs.Shape();
									this.shape_88.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-473.4,14.2,62.7,14.2).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_88.setTransform(18,-3.7);

									this.shape_89 = new cjs.Shape();
									this.shape_89.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-454,14.3,82.1,14.3).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_89.setTransform(18,-3.7);

									this.shape_90 = new cjs.Shape();
									this.shape_90.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-434.6,14.3,101.5,14.3).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_90.setTransform(18,-3.7);

									this.shape_91 = new cjs.Shape();
									this.shape_91.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-415.2,14.4,120.9,14.4).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_91.setTransform(18,-3.7);

									this.shape_92 = new cjs.Shape();
									this.shape_92.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-395.7,14.4,140.4,14.4).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_92.setTransform(18,-3.7);

									this.shape_93 = new cjs.Shape();
									this.shape_93.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-376.3,14.5,159.8,14.5).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_93.setTransform(18,-3.7);

									this.shape_94 = new cjs.Shape();
									this.shape_94.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-356.9,14.5,179.2,14.5).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_94.setTransform(18,-3.7);

									this.shape_95 = new cjs.Shape();
									this.shape_95.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-337.5,14.6,198.6,14.6).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_95.setTransform(18,-3.7);

									this.shape_96 = new cjs.Shape();
									this.shape_96.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-318,14.7,218.1,14.7).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_96.setTransform(18,-3.7);

									this.shape_97 = new cjs.Shape();
									this.shape_97.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-298.6,14.7,237.5,14.7).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_97.setTransform(18,-3.7);

									this.shape_98 = new cjs.Shape();
									this.shape_98.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-279.2,14.8,256.9,14.8).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_98.setTransform(18,-3.7);

									this.shape_99 = new cjs.Shape();
									this.shape_99.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-259.8,14.8,276.3,14.8).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_99.setTransform(18,-3.7);

									this.shape_100 = new cjs.Shape();
									this.shape_100.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-240.4,14.9,295.7,14.9).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_100.setTransform(18,-3.7);

									this.shape_101 = new cjs.Shape();
									this.shape_101.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-220.9,14.9,315.2,14.9).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_101.setTransform(18,-3.7);

									this.shape_102 = new cjs.Shape();
									this.shape_102.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-201.5,15,334.6,15).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_102.setTransform(18,-3.7);

									this.shape_103 = new cjs.Shape();
									this.shape_103.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-182.1,15,354,15).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_103.setTransform(18,-3.7);

									this.shape_104 = new cjs.Shape();
									this.shape_104.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-162.7,15.1,373.4,15.1).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_104.setTransform(18,-3.7);

									this.shape_105 = new cjs.Shape();
									this.shape_105.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-143.2,15.1,392.9,15.1).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_105.setTransform(18,-3.7);

									this.shape_106 = new cjs.Shape();
									this.shape_106.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-123.8,15.2,412.3,15.2).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_106.setTransform(18,-3.7);

									this.shape_107 = new cjs.Shape();
									this.shape_107.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-104.4,15.3,431.7,15.3).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_107.setTransform(18,-3.7);

									this.shape_108 = new cjs.Shape();
									this.shape_108.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-85,15.3,451.1,15.3).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_108.setTransform(18,-3.7);

									this.shape_109 = new cjs.Shape();
									this.shape_109.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-65.5,15.4,470.6,15.4).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_109.setTransform(18,-3.7);

									this.shape_110 = new cjs.Shape();
									this.shape_110.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-46.1,15.4,490,15.4).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_110.setTransform(18,-3.7);

									this.shape_111 = new cjs.Shape();
									this.shape_111.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-26.7,15.5,509.4,15.5).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_111.setTransform(18,-3.7);

									this.shape_112 = new cjs.Shape();
									this.shape_112.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],-7.3,15.5,528.8,15.5).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_112.setTransform(18,-3.7);

									this.shape_113 = new cjs.Shape();
									this.shape_113.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],12.2,15.6,548.3,15.6).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_113.setTransform(18,-3.7);

									this.shape_114 = new cjs.Shape();
									this.shape_114.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],31.6,15.6,567.7,15.6).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_114.setTransform(18,-3.7);

									this.shape_115 = new cjs.Shape();
									this.shape_115.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],51,15.7,587.1,15.7).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_115.setTransform(18,-3.7);

									this.shape_116 = new cjs.Shape();
									this.shape_116.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],70.4,15.8,606.5,15.8).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_116.setTransform(18,-3.7);

									this.shape_117 = new cjs.Shape();
									this.shape_117.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],89.9,15.8,626,15.8).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_117.setTransform(18,-3.7);

									this.shape_118 = new cjs.Shape();
									this.shape_118.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],109.3,15.9,645.4,15.9).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_118.setTransform(18,-3.7);

									this.shape_119 = new cjs.Shape();
									this.shape_119.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],128.7,15.9,664.8,15.9).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_119.setTransform(18,-3.7);

									this.shape_120 = new cjs.Shape();
									this.shape_120.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],148.1,16,684.2,16).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_120.setTransform(18,-3.7);

									this.shape_121 = new cjs.Shape();
									this.shape_121.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],167.6,16,703.7,16).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_121.setTransform(18,-3.7);

									this.shape_122 = new cjs.Shape();
									this.shape_122.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],187,16.1,723.1,16.1).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_122.setTransform(18,-3.7);

									this.shape_123 = new cjs.Shape();
									this.shape_123.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],206.4,16.1,742.5,16.1).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_123.setTransform(18,-3.7);

									this.shape_124 = new cjs.Shape();
									this.shape_124.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],225.8,16.2,761.9,16.2).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_124.setTransform(18,-3.7);

									this.shape_125 = new cjs.Shape();
									this.shape_125.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],245.3,16.3,781.4,16.3).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_125.setTransform(18,-3.7);

									this.shape_126 = new cjs.Shape();
									this.shape_126.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],264.7,16.3,800.8,16.3).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_126.setTransform(18,-3.7);

									this.shape_127 = new cjs.Shape();
									this.shape_127.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],284.1,16.4,820.2,16.4).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_127.setTransform(18,-3.7);

									this.shape_128 = new cjs.Shape();
									this.shape_128.graphics.lf(["rgba(159,255,0,0)","#9FFF00","rgba(160,253,2,0.992)","rgba(0,0,0,0)"],[0,0.875,0.941,0.953],207.3,114.9,573.4,114.9).s().p("Eg26ACMIAAkXMBt1AAAIAAEXg");
									this.shape_128.setTransform(18,-3.8,1.464,0.143);

									this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_64}]},206).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[]},1).wait(1));

									// Layer 3
									this.shape_129 = new cjs.Shape();
									this.shape_129.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-641.6,90,-275.5,90).s().p("Eg26ACMIAAkXMBt1AAAIAAEXg");
									this.shape_129.setTransform(18,-169.3,1.464,0.143);

									this.shape_130 = new cjs.Shape();
									this.shape_130.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-920.2,12.9,-384.1,12.9).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_130.setTransform(18,-169.2);

									this.shape_131 = new cjs.Shape();
									this.shape_131.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-900.8,13,-364.7,13).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_131.setTransform(18,-169.2);

									this.shape_132 = new cjs.Shape();
									this.shape_132.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-881.4,13,-345.3,13).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_132.setTransform(18,-169.2);

									this.shape_133 = new cjs.Shape();
									this.shape_133.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-861.9,13.1,-325.8,13.1).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_133.setTransform(18,-169.2);

									this.shape_134 = new cjs.Shape();
									this.shape_134.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-842.5,13.2,-306.4,13.2).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_134.setTransform(18,-169.2);

									this.shape_135 = new cjs.Shape();
									this.shape_135.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-823.1,13.2,-287,13.2).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_135.setTransform(18,-169.2);

									this.shape_136 = new cjs.Shape();
									this.shape_136.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-803.7,13.3,-267.6,13.3).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_136.setTransform(18,-169.2);

									this.shape_137 = new cjs.Shape();
									this.shape_137.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-784.2,13.3,-248.1,13.3).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_137.setTransform(18,-169.2);

									this.shape_138 = new cjs.Shape();
									this.shape_138.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-764.8,13.4,-228.7,13.4).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_138.setTransform(18,-169.2);

									this.shape_139 = new cjs.Shape();
									this.shape_139.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-745.4,13.4,-209.3,13.4).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_139.setTransform(18,-169.2);

									this.shape_140 = new cjs.Shape();
									this.shape_140.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-726,13.5,-189.9,13.5).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_140.setTransform(18,-169.2);

									this.shape_141 = new cjs.Shape();
									this.shape_141.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-706.5,13.5,-170.4,13.5).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_141.setTransform(18,-169.2);

									this.shape_142 = new cjs.Shape();
									this.shape_142.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-687.1,13.6,-151,13.6).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_142.setTransform(18,-169.2);

									this.shape_143 = new cjs.Shape();
									this.shape_143.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-667.7,13.7,-131.6,13.7).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_143.setTransform(18,-169.2);

									this.shape_144 = new cjs.Shape();
									this.shape_144.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-648.3,13.7,-112.2,13.7).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_144.setTransform(18,-169.2);

									this.shape_145 = new cjs.Shape();
									this.shape_145.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-628.8,13.8,-92.7,13.8).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_145.setTransform(18,-169.2);

									this.shape_146 = new cjs.Shape();
									this.shape_146.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-609.4,13.8,-73.3,13.8).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_146.setTransform(18,-169.2);

									this.shape_147 = new cjs.Shape();
									this.shape_147.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-590,13.9,-53.9,13.9).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_147.setTransform(18,-169.2);

									this.shape_148 = new cjs.Shape();
									this.shape_148.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-570.6,13.9,-34.5,13.9).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_148.setTransform(18,-169.2);

									this.shape_149 = new cjs.Shape();
									this.shape_149.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-551.1,14,-15,14).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_149.setTransform(18,-169.2);

									this.shape_150 = new cjs.Shape();
									this.shape_150.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-531.7,14,4.4,14).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_150.setTransform(18,-169.2);

									this.shape_151 = new cjs.Shape();
									this.shape_151.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-512.3,14.1,23.8,14.1).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_151.setTransform(18,-169.2);

									this.shape_152 = new cjs.Shape();
									this.shape_152.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-492.9,14.2,43.2,14.2).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_152.setTransform(18,-169.2);

									this.shape_153 = new cjs.Shape();
									this.shape_153.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-473.4,14.2,62.7,14.2).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_153.setTransform(18,-169.2);

									this.shape_154 = new cjs.Shape();
									this.shape_154.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-454,14.3,82.1,14.3).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_154.setTransform(18,-169.2);

									this.shape_155 = new cjs.Shape();
									this.shape_155.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-434.6,14.3,101.5,14.3).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_155.setTransform(18,-169.2);

									this.shape_156 = new cjs.Shape();
									this.shape_156.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-415.2,14.4,120.9,14.4).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_156.setTransform(18,-169.2);

									this.shape_157 = new cjs.Shape();
									this.shape_157.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-395.7,14.4,140.4,14.4).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_157.setTransform(18,-169.2);

									this.shape_158 = new cjs.Shape();
									this.shape_158.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-376.3,14.5,159.8,14.5).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_158.setTransform(18,-169.2);

									this.shape_159 = new cjs.Shape();
									this.shape_159.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-356.9,14.5,179.2,14.5).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_159.setTransform(18,-169.2);

									this.shape_160 = new cjs.Shape();
									this.shape_160.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-337.5,14.6,198.6,14.6).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_160.setTransform(18,-169.2);

									this.shape_161 = new cjs.Shape();
									this.shape_161.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-318,14.7,218.1,14.7).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_161.setTransform(18,-169.2);

									this.shape_162 = new cjs.Shape();
									this.shape_162.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-298.6,14.7,237.5,14.7).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_162.setTransform(18,-169.2);

									this.shape_163 = new cjs.Shape();
									this.shape_163.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-279.2,14.8,256.9,14.8).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_163.setTransform(18,-169.2);

									this.shape_164 = new cjs.Shape();
									this.shape_164.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-259.8,14.8,276.3,14.8).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_164.setTransform(18,-169.2);

									this.shape_165 = new cjs.Shape();
									this.shape_165.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-240.4,14.9,295.7,14.9).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_165.setTransform(18,-169.2);

									this.shape_166 = new cjs.Shape();
									this.shape_166.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-220.9,14.9,315.2,14.9).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_166.setTransform(18,-169.2);

									this.shape_167 = new cjs.Shape();
									this.shape_167.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-201.5,15,334.6,15).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_167.setTransform(18,-169.2);

									this.shape_168 = new cjs.Shape();
									this.shape_168.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-182.1,15,354,15).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_168.setTransform(18,-169.2);

									this.shape_169 = new cjs.Shape();
									this.shape_169.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-162.7,15.1,373.4,15.1).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_169.setTransform(18,-169.2);

									this.shape_170 = new cjs.Shape();
									this.shape_170.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-143.2,15.1,392.9,15.1).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_170.setTransform(18,-169.2);

									this.shape_171 = new cjs.Shape();
									this.shape_171.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-123.8,15.2,412.3,15.2).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_171.setTransform(18,-169.2);

									this.shape_172 = new cjs.Shape();
									this.shape_172.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-104.4,15.3,431.7,15.3).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_172.setTransform(18,-169.2);

									this.shape_173 = new cjs.Shape();
									this.shape_173.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-85,15.3,451.1,15.3).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_173.setTransform(18,-169.2);

									this.shape_174 = new cjs.Shape();
									this.shape_174.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-65.5,15.4,470.6,15.4).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_174.setTransform(18,-169.2);

									this.shape_175 = new cjs.Shape();
									this.shape_175.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-46.1,15.4,490,15.4).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_175.setTransform(18,-169.2);

									this.shape_176 = new cjs.Shape();
									this.shape_176.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-26.7,15.5,509.4,15.5).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_176.setTransform(18,-169.2);

									this.shape_177 = new cjs.Shape();
									this.shape_177.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-7.3,15.5,528.8,15.5).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_177.setTransform(18,-169.2);

									this.shape_178 = new cjs.Shape();
									this.shape_178.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],12.2,15.6,548.3,15.6).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_178.setTransform(18,-169.2);

									this.shape_179 = new cjs.Shape();
									this.shape_179.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],31.6,15.6,567.7,15.6).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_179.setTransform(18,-169.2);

									this.shape_180 = new cjs.Shape();
									this.shape_180.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],51,15.7,587.1,15.7).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_180.setTransform(18,-169.2);

									this.shape_181 = new cjs.Shape();
									this.shape_181.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],70.4,15.8,606.5,15.8).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_181.setTransform(18,-169.2);

									this.shape_182 = new cjs.Shape();
									this.shape_182.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],89.9,15.8,626,15.8).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_182.setTransform(18,-169.2);

									this.shape_183 = new cjs.Shape();
									this.shape_183.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],109.3,15.9,645.4,15.9).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_183.setTransform(18,-169.2);

									this.shape_184 = new cjs.Shape();
									this.shape_184.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],128.7,15.9,664.8,15.9).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_184.setTransform(18,-169.2);

									this.shape_185 = new cjs.Shape();
									this.shape_185.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],148.1,16,684.2,16).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_185.setTransform(18,-169.2);

									this.shape_186 = new cjs.Shape();
									this.shape_186.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],167.6,16,703.7,16).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_186.setTransform(18,-169.2);

									this.shape_187 = new cjs.Shape();
									this.shape_187.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],187,16.1,723.1,16.1).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_187.setTransform(18,-169.2);

									this.shape_188 = new cjs.Shape();
									this.shape_188.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],206.4,16.1,742.5,16.1).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_188.setTransform(18,-169.2);

									this.shape_189 = new cjs.Shape();
									this.shape_189.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],225.8,16.2,761.9,16.2).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_189.setTransform(18,-169.2);

									this.shape_190 = new cjs.Shape();
									this.shape_190.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],245.3,16.3,781.4,16.3).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_190.setTransform(18,-169.2);

									this.shape_191 = new cjs.Shape();
									this.shape_191.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],264.7,16.3,800.8,16.3).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_191.setTransform(18,-169.2);

									this.shape_192 = new cjs.Shape();
									this.shape_192.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],284.1,16.4,820.2,16.4).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_192.setTransform(18,-169.2);

									this.shape_193 = new cjs.Shape();
									this.shape_193.graphics.lf(["rgba(255,0,252,0)","#FF00FC","#FF00FC","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],207.3,114.9,573.4,114.9).s().p("Eg26ACMIAAkXMBt1AAAIAAEXg");
									this.shape_193.setTransform(18,-169.3,1.464,0.143);

									this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_129}]},113).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[]},1).to({state:[]},40).wait(54));

									// Layer 4
									this.shape_194 = new cjs.Shape();
									this.shape_194.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-641.6,90,-275.5,90).s().p("Eg26ACMIAAkXMBt1AAAIAAEXg");
									this.shape_194.setTransform(-251.5,-169.2,1.464,0.143,90);

									this.shape_195 = new cjs.Shape();
									this.shape_195.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-12.9,-920.2,-12.9,-384.1).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_195.setTransform(-251.5,-169.2);

									this.shape_196 = new cjs.Shape();
									this.shape_196.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-12.9,-900.8,-12.9,-364.7).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_196.setTransform(-251.5,-169.2);

									this.shape_197 = new cjs.Shape();
									this.shape_197.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-13,-881.4,-13,-345.3).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_197.setTransform(-251.5,-169.2);

									this.shape_198 = new cjs.Shape();
									this.shape_198.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-13,-861.9,-13,-325.8).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_198.setTransform(-251.5,-169.2);

									this.shape_199 = new cjs.Shape();
									this.shape_199.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-13.1,-842.5,-13.1,-306.4).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_199.setTransform(-251.5,-169.2);

									this.shape_200 = new cjs.Shape();
									this.shape_200.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-13.2,-823.1,-13.2,-287).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_200.setTransform(-251.5,-169.2);

									this.shape_201 = new cjs.Shape();
									this.shape_201.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-13.2,-803.7,-13.2,-267.6).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_201.setTransform(-251.5,-169.2);

									this.shape_202 = new cjs.Shape();
									this.shape_202.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-13.3,-784.2,-13.3,-248.1).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_202.setTransform(-251.5,-169.2);

									this.shape_203 = new cjs.Shape();
									this.shape_203.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-13.3,-764.8,-13.3,-228.7).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_203.setTransform(-251.5,-169.2);

									this.shape_204 = new cjs.Shape();
									this.shape_204.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-13.4,-745.4,-13.4,-209.3).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_204.setTransform(-251.5,-169.2);

									this.shape_205 = new cjs.Shape();
									this.shape_205.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-13.4,-726,-13.4,-189.9).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_205.setTransform(-251.5,-169.2);

									this.shape_206 = new cjs.Shape();
									this.shape_206.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-13.5,-706.5,-13.5,-170.4).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_206.setTransform(-251.5,-169.2);

									this.shape_207 = new cjs.Shape();
									this.shape_207.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-13.5,-687.1,-13.5,-151).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_207.setTransform(-251.5,-169.2);

									this.shape_208 = new cjs.Shape();
									this.shape_208.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-13.6,-667.7,-13.6,-131.6).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_208.setTransform(-251.5,-169.2);

									this.shape_209 = new cjs.Shape();
									this.shape_209.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-13.7,-648.3,-13.7,-112.2).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_209.setTransform(-251.5,-169.2);

									this.shape_210 = new cjs.Shape();
									this.shape_210.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-13.7,-628.8,-13.7,-92.7).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_210.setTransform(-251.5,-169.2);

									this.shape_211 = new cjs.Shape();
									this.shape_211.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-13.8,-609.4,-13.8,-73.3).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_211.setTransform(-251.5,-169.2);

									this.shape_212 = new cjs.Shape();
									this.shape_212.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-13.8,-590,-13.8,-53.9).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_212.setTransform(-251.5,-169.2);

									this.shape_213 = new cjs.Shape();
									this.shape_213.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-13.9,-570.6,-13.9,-34.5).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_213.setTransform(-251.5,-169.2);

									this.shape_214 = new cjs.Shape();
									this.shape_214.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-13.9,-551.1,-13.9,-15).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_214.setTransform(-251.5,-169.2);

									this.shape_215 = new cjs.Shape();
									this.shape_215.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-14,-531.7,-14,4.4).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_215.setTransform(-251.5,-169.2);

									this.shape_216 = new cjs.Shape();
									this.shape_216.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-14,-512.3,-14,23.8).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_216.setTransform(-251.5,-169.2);

									this.shape_217 = new cjs.Shape();
									this.shape_217.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-14.1,-492.9,-14.1,43.2).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_217.setTransform(-251.5,-169.2);

									this.shape_218 = new cjs.Shape();
									this.shape_218.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-14.2,-473.4,-14.2,62.7).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_218.setTransform(-251.5,-169.2);

									this.shape_219 = new cjs.Shape();
									this.shape_219.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-14.2,-454,-14.2,82.1).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_219.setTransform(-251.5,-169.2);

									this.shape_220 = new cjs.Shape();
									this.shape_220.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-14.3,-434.6,-14.3,101.5).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_220.setTransform(-251.5,-169.2);

									this.shape_221 = new cjs.Shape();
									this.shape_221.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-14.3,-415.2,-14.3,120.9).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_221.setTransform(-251.5,-169.2);

									this.shape_222 = new cjs.Shape();
									this.shape_222.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-14.4,-395.7,-14.4,140.4).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_222.setTransform(-251.5,-169.2);

									this.shape_223 = new cjs.Shape();
									this.shape_223.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-14.4,-376.3,-14.4,159.8).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_223.setTransform(-251.5,-169.2);

									this.shape_224 = new cjs.Shape();
									this.shape_224.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-14.5,-356.9,-14.5,179.2).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_224.setTransform(-251.5,-169.2);

									this.shape_225 = new cjs.Shape();
									this.shape_225.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-14.5,-337.5,-14.5,198.6).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_225.setTransform(-251.5,-169.2);

									this.shape_226 = new cjs.Shape();
									this.shape_226.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-14.6,-318,-14.6,218.1).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_226.setTransform(-251.5,-169.2);

									this.shape_227 = new cjs.Shape();
									this.shape_227.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-14.7,-298.6,-14.7,237.5).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_227.setTransform(-251.5,-169.2);

									this.shape_228 = new cjs.Shape();
									this.shape_228.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-14.7,-279.2,-14.7,256.9).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_228.setTransform(-251.5,-169.2);

									this.shape_229 = new cjs.Shape();
									this.shape_229.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-14.8,-259.8,-14.8,276.3).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_229.setTransform(-251.5,-169.2);

									this.shape_230 = new cjs.Shape();
									this.shape_230.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-14.8,-240.4,-14.8,295.7).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_230.setTransform(-251.5,-169.2);

									this.shape_231 = new cjs.Shape();
									this.shape_231.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-14.9,-220.9,-14.9,315.2).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_231.setTransform(-251.5,-169.2);

									this.shape_232 = new cjs.Shape();
									this.shape_232.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-14.9,-201.5,-14.9,334.6).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_232.setTransform(-251.5,-169.2);

									this.shape_233 = new cjs.Shape();
									this.shape_233.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-15,-182.1,-15,354).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_233.setTransform(-251.5,-169.2);

									this.shape_234 = new cjs.Shape();
									this.shape_234.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-15,-162.7,-15,373.4).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_234.setTransform(-251.5,-169.2);

									this.shape_235 = new cjs.Shape();
									this.shape_235.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-15.1,-143.2,-15.1,392.9).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_235.setTransform(-251.5,-169.2);

									this.shape_236 = new cjs.Shape();
									this.shape_236.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-15.2,-123.8,-15.2,412.3).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_236.setTransform(-251.5,-169.2);

									this.shape_237 = new cjs.Shape();
									this.shape_237.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-15.2,-104.4,-15.2,431.7).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_237.setTransform(-251.5,-169.2);

									this.shape_238 = new cjs.Shape();
									this.shape_238.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-15.3,-85,-15.3,451.1).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_238.setTransform(-251.5,-169.2);

									this.shape_239 = new cjs.Shape();
									this.shape_239.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-15.3,-65.5,-15.3,470.6).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_239.setTransform(-251.5,-169.2);

									this.shape_240 = new cjs.Shape();
									this.shape_240.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-15.4,-46.1,-15.4,490).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_240.setTransform(-251.5,-169.2);

									this.shape_241 = new cjs.Shape();
									this.shape_241.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-15.4,-26.7,-15.4,509.4).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_241.setTransform(-251.5,-169.2);

									this.shape_242 = new cjs.Shape();
									this.shape_242.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-15.5,-7.3,-15.5,528.8).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_242.setTransform(-251.5,-169.2);

									this.shape_243 = new cjs.Shape();
									this.shape_243.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-15.5,12.2,-15.5,548.3).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_243.setTransform(-251.5,-169.2);

									this.shape_244 = new cjs.Shape();
									this.shape_244.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-15.6,31.6,-15.6,567.7).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_244.setTransform(-251.5,-169.2);

									this.shape_245 = new cjs.Shape();
									this.shape_245.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-15.7,51,-15.7,587.1).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_245.setTransform(-251.5,-169.2);

									this.shape_246 = new cjs.Shape();
									this.shape_246.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-15.7,70.4,-15.7,606.5).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_246.setTransform(-251.5,-169.2);

									this.shape_247 = new cjs.Shape();
									this.shape_247.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-15.8,89.9,-15.8,626).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_247.setTransform(-251.5,-169.2);

									this.shape_248 = new cjs.Shape();
									this.shape_248.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-15.8,109.3,-15.8,645.4).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_248.setTransform(-251.5,-169.2);

									this.shape_249 = new cjs.Shape();
									this.shape_249.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-15.9,128.7,-15.9,664.8).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_249.setTransform(-251.5,-169.2);

									this.shape_250 = new cjs.Shape();
									this.shape_250.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-15.9,148.1,-15.9,684.2).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_250.setTransform(-251.5,-169.2);

									this.shape_251 = new cjs.Shape();
									this.shape_251.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-16,167.6,-16,703.7).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_251.setTransform(-251.5,-169.2);

									this.shape_252 = new cjs.Shape();
									this.shape_252.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-16,187,-16,723.1).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_252.setTransform(-251.5,-169.2);

									this.shape_253 = new cjs.Shape();
									this.shape_253.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-16.1,206.4,-16.1,742.5).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_253.setTransform(-251.5,-169.2);

									this.shape_254 = new cjs.Shape();
									this.shape_254.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-16.2,225.8,-16.2,761.9).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_254.setTransform(-251.5,-169.2);

									this.shape_255 = new cjs.Shape();
									this.shape_255.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-16.2,245.3,-16.2,781.4).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_255.setTransform(-251.5,-169.2);

									this.shape_256 = new cjs.Shape();
									this.shape_256.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-16.3,264.7,-16.3,800.8).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_256.setTransform(-251.5,-169.2);

									this.shape_257 = new cjs.Shape();
									this.shape_257.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],-16.3,284.1,-16.3,820.2).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_257.setTransform(-251.5,-169.2);

									this.shape_258 = new cjs.Shape();
									this.shape_258.graphics.lf(["rgba(12,219,87,0)","#0CDB57","#0CDB57","rgba(0,0,0,0)"],[0,0.875,0.945,0.953],207.3,114.9,573.4,114.9).s().p("Eg26ACMIAAkXMBt1AAAIAAEXg");
									this.shape_258.setTransform(-251.5,-169.2,1.464,0.143,90);

									this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_194}]},120).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[]},1).to({state:[]},29).wait(58));

									// Layer 5
									this.shape_259 = new cjs.Shape();
									this.shape_259.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-641.6,90,-275.5,90).s().p("Eg26ACMIAAkXMBt1AAAIAAEXg");
									this.shape_259.setTransform(18,156.2,1.464,0.143);

									this.shape_260 = new cjs.Shape();
									this.shape_260.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-920.2,12.9,-384.1,12.9).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_260.setTransform(18,156.3);

									this.shape_261 = new cjs.Shape();
									this.shape_261.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-900.8,13,-364.7,13).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_261.setTransform(18,156.3);

									this.shape_262 = new cjs.Shape();
									this.shape_262.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-881.4,13,-345.3,13).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_262.setTransform(18,156.3);

									this.shape_263 = new cjs.Shape();
									this.shape_263.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-861.9,13.1,-325.8,13.1).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_263.setTransform(18,156.3);

									this.shape_264 = new cjs.Shape();
									this.shape_264.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-842.5,13.2,-306.4,13.2).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_264.setTransform(18,156.3);

									this.shape_265 = new cjs.Shape();
									this.shape_265.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-823.1,13.2,-287,13.2).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_265.setTransform(18,156.3);

									this.shape_266 = new cjs.Shape();
									this.shape_266.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-803.7,13.3,-267.6,13.3).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_266.setTransform(18,156.3);

									this.shape_267 = new cjs.Shape();
									this.shape_267.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-784.2,13.3,-248.1,13.3).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_267.setTransform(18,156.3);

									this.shape_268 = new cjs.Shape();
									this.shape_268.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-764.8,13.4,-228.7,13.4).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_268.setTransform(18,156.3);

									this.shape_269 = new cjs.Shape();
									this.shape_269.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-745.4,13.4,-209.3,13.4).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_269.setTransform(18,156.3);

									this.shape_270 = new cjs.Shape();
									this.shape_270.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-726,13.5,-189.9,13.5).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_270.setTransform(18,156.3);

									this.shape_271 = new cjs.Shape();
									this.shape_271.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-706.5,13.5,-170.4,13.5).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_271.setTransform(18,156.3);

									this.shape_272 = new cjs.Shape();
									this.shape_272.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-687.1,13.6,-151,13.6).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_272.setTransform(18,156.3);

									this.shape_273 = new cjs.Shape();
									this.shape_273.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-667.7,13.7,-131.6,13.7).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_273.setTransform(18,156.3);

									this.shape_274 = new cjs.Shape();
									this.shape_274.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-648.3,13.7,-112.2,13.7).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_274.setTransform(18,156.3);

									this.shape_275 = new cjs.Shape();
									this.shape_275.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-628.8,13.8,-92.7,13.8).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_275.setTransform(18,156.3);

									this.shape_276 = new cjs.Shape();
									this.shape_276.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-609.4,13.8,-73.3,13.8).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_276.setTransform(18,156.3);

									this.shape_277 = new cjs.Shape();
									this.shape_277.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-590,13.9,-53.9,13.9).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_277.setTransform(18,156.3);

									this.shape_278 = new cjs.Shape();
									this.shape_278.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-570.6,13.9,-34.5,13.9).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_278.setTransform(18,156.3);

									this.shape_279 = new cjs.Shape();
									this.shape_279.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-551.1,14,-15,14).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_279.setTransform(18,156.3);

									this.shape_280 = new cjs.Shape();
									this.shape_280.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-531.7,14,4.4,14).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_280.setTransform(18,156.3);

									this.shape_281 = new cjs.Shape();
									this.shape_281.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-512.3,14.1,23.8,14.1).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_281.setTransform(18,156.3);

									this.shape_282 = new cjs.Shape();
									this.shape_282.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-492.9,14.2,43.2,14.2).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_282.setTransform(18,156.3);

									this.shape_283 = new cjs.Shape();
									this.shape_283.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-473.4,14.2,62.7,14.2).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_283.setTransform(18,156.3);

									this.shape_284 = new cjs.Shape();
									this.shape_284.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-454,14.3,82.1,14.3).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_284.setTransform(18,156.3);

									this.shape_285 = new cjs.Shape();
									this.shape_285.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-434.6,14.3,101.5,14.3).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_285.setTransform(18,156.3);

									this.shape_286 = new cjs.Shape();
									this.shape_286.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-415.2,14.4,120.9,14.4).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_286.setTransform(18,156.3);

									this.shape_287 = new cjs.Shape();
									this.shape_287.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-395.7,14.4,140.4,14.4).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_287.setTransform(18,156.3);

									this.shape_288 = new cjs.Shape();
									this.shape_288.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-376.3,14.5,159.8,14.5).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_288.setTransform(18,156.3);

									this.shape_289 = new cjs.Shape();
									this.shape_289.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-356.9,14.5,179.2,14.5).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_289.setTransform(18,156.3);

									this.shape_290 = new cjs.Shape();
									this.shape_290.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-337.5,14.6,198.6,14.6).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_290.setTransform(18,156.3);

									this.shape_291 = new cjs.Shape();
									this.shape_291.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-318,14.7,218.1,14.7).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_291.setTransform(18,156.3);

									this.shape_292 = new cjs.Shape();
									this.shape_292.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-298.6,14.7,237.5,14.7).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_292.setTransform(18,156.3);

									this.shape_293 = new cjs.Shape();
									this.shape_293.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-279.2,14.8,256.9,14.8).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_293.setTransform(18,156.3);

									this.shape_294 = new cjs.Shape();
									this.shape_294.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-259.8,14.8,276.3,14.8).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_294.setTransform(18,156.3);

									this.shape_295 = new cjs.Shape();
									this.shape_295.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-240.4,14.9,295.7,14.9).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_295.setTransform(18,156.3);

									this.shape_296 = new cjs.Shape();
									this.shape_296.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-220.9,14.9,315.2,14.9).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_296.setTransform(18,156.3);

									this.shape_297 = new cjs.Shape();
									this.shape_297.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-201.5,15,334.6,15).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_297.setTransform(18,156.3);

									this.shape_298 = new cjs.Shape();
									this.shape_298.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-182.1,15,354,15).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_298.setTransform(18,156.3);

									this.shape_299 = new cjs.Shape();
									this.shape_299.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-162.7,15.1,373.4,15.1).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_299.setTransform(18,156.3);

									this.shape_300 = new cjs.Shape();
									this.shape_300.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-143.2,15.1,392.9,15.1).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_300.setTransform(18,156.3);

									this.shape_301 = new cjs.Shape();
									this.shape_301.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-123.8,15.2,412.3,15.2).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_301.setTransform(18,156.3);

									this.shape_302 = new cjs.Shape();
									this.shape_302.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-104.4,15.3,431.7,15.3).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_302.setTransform(18,156.3);

									this.shape_303 = new cjs.Shape();
									this.shape_303.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-85,15.3,451.1,15.3).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_303.setTransform(18,156.3);

									this.shape_304 = new cjs.Shape();
									this.shape_304.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-65.5,15.4,470.6,15.4).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_304.setTransform(18,156.3);

									this.shape_305 = new cjs.Shape();
									this.shape_305.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-46.1,15.4,490,15.4).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_305.setTransform(18,156.3);

									this.shape_306 = new cjs.Shape();
									this.shape_306.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-26.7,15.5,509.4,15.5).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_306.setTransform(18,156.3);

									this.shape_307 = new cjs.Shape();
									this.shape_307.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-7.3,15.5,528.8,15.5).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_307.setTransform(18,156.3);

									this.shape_308 = new cjs.Shape();
									this.shape_308.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],12.2,15.6,548.3,15.6).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_308.setTransform(18,156.3);

									this.shape_309 = new cjs.Shape();
									this.shape_309.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],31.6,15.6,567.7,15.6).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_309.setTransform(18,156.3);

									this.shape_310 = new cjs.Shape();
									this.shape_310.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],51,15.7,587.1,15.7).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_310.setTransform(18,156.3);

									this.shape_311 = new cjs.Shape();
									this.shape_311.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],70.4,15.8,606.5,15.8).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_311.setTransform(18,156.3);

									this.shape_312 = new cjs.Shape();
									this.shape_312.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],89.9,15.8,626,15.8).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_312.setTransform(18,156.3);

									this.shape_313 = new cjs.Shape();
									this.shape_313.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],109.3,15.9,645.4,15.9).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_313.setTransform(18,156.3);

									this.shape_314 = new cjs.Shape();
									this.shape_314.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],128.7,15.9,664.8,15.9).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_314.setTransform(18,156.3);

									this.shape_315 = new cjs.Shape();
									this.shape_315.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],148.1,16,684.2,16).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_315.setTransform(18,156.3);

									this.shape_316 = new cjs.Shape();
									this.shape_316.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],167.6,16,703.7,16).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_316.setTransform(18,156.3);

									this.shape_317 = new cjs.Shape();
									this.shape_317.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],187,16.1,723.1,16.1).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_317.setTransform(18,156.3);

									this.shape_318 = new cjs.Shape();
									this.shape_318.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],206.4,16.1,742.5,16.1).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_318.setTransform(18,156.3);

									this.shape_319 = new cjs.Shape();
									this.shape_319.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],225.8,16.2,761.9,16.2).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_319.setTransform(18,156.3);

									this.shape_320 = new cjs.Shape();
									this.shape_320.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],245.3,16.3,781.4,16.3).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_320.setTransform(18,156.3);

									this.shape_321 = new cjs.Shape();
									this.shape_321.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],264.7,16.3,800.8,16.3).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_321.setTransform(18,156.3);

									this.shape_322 = new cjs.Shape();
									this.shape_322.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],284.1,16.4,820.2,16.4).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_322.setTransform(18,156.3);

									this.shape_323 = new cjs.Shape();
									this.shape_323.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],207.3,114.9,573.4,114.9).s().p("Eg26ACMIAAkXMBt1AAAIAAEXg");
									this.shape_323.setTransform(18,156.2,1.464,0.143);

									this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_259}]},120).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[]},1).to({state:[]},29).wait(58));

									// Layer 6
									this.shape_324 = new cjs.Shape();
									this.shape_324.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-641.6,90,-275.5,90).s().p("Eg26ACMIAAkXMBt1AAAIAAEXg");
									this.shape_324.setTransform(-31,16.8,1.464,0.143,90);

									this.shape_325 = new cjs.Shape();
									this.shape_325.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-12.9,-920.2,-12.9,-384.1).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_325.setTransform(-31,16.8);

									this.shape_326 = new cjs.Shape();
									this.shape_326.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-12.9,-900.8,-12.9,-364.7).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_326.setTransform(-31,16.8);

									this.shape_327 = new cjs.Shape();
									this.shape_327.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13,-881.4,-13,-345.3).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_327.setTransform(-31,16.8);

									this.shape_328 = new cjs.Shape();
									this.shape_328.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13,-861.9,-13,-325.8).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_328.setTransform(-31,16.8);

									this.shape_329 = new cjs.Shape();
									this.shape_329.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13.1,-842.5,-13.1,-306.4).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_329.setTransform(-31,16.8);

									this.shape_330 = new cjs.Shape();
									this.shape_330.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13.2,-823.1,-13.2,-287).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_330.setTransform(-31,16.8);

									this.shape_331 = new cjs.Shape();
									this.shape_331.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13.2,-803.7,-13.2,-267.6).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_331.setTransform(-31,16.8);

									this.shape_332 = new cjs.Shape();
									this.shape_332.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13.3,-784.2,-13.3,-248.1).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_332.setTransform(-31,16.8);

									this.shape_333 = new cjs.Shape();
									this.shape_333.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13.3,-764.8,-13.3,-228.7).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_333.setTransform(-31,16.8);

									this.shape_334 = new cjs.Shape();
									this.shape_334.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13.4,-745.4,-13.4,-209.3).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_334.setTransform(-31,16.8);

									this.shape_335 = new cjs.Shape();
									this.shape_335.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13.4,-726,-13.4,-189.9).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_335.setTransform(-31,16.8);

									this.shape_336 = new cjs.Shape();
									this.shape_336.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13.5,-706.5,-13.5,-170.4).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_336.setTransform(-31,16.8);

									this.shape_337 = new cjs.Shape();
									this.shape_337.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13.5,-687.1,-13.5,-151).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_337.setTransform(-31,16.8);

									this.shape_338 = new cjs.Shape();
									this.shape_338.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13.6,-667.7,-13.6,-131.6).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_338.setTransform(-31,16.8);

									this.shape_339 = new cjs.Shape();
									this.shape_339.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13.7,-648.3,-13.7,-112.2).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_339.setTransform(-31,16.8);

									this.shape_340 = new cjs.Shape();
									this.shape_340.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13.7,-628.8,-13.7,-92.7).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_340.setTransform(-31,16.8);

									this.shape_341 = new cjs.Shape();
									this.shape_341.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13.8,-609.4,-13.8,-73.3).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_341.setTransform(-31,16.8);

									this.shape_342 = new cjs.Shape();
									this.shape_342.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13.8,-590,-13.8,-53.9).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_342.setTransform(-31,16.8);

									this.shape_343 = new cjs.Shape();
									this.shape_343.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13.9,-570.6,-13.9,-34.5).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_343.setTransform(-31,16.8);

									this.shape_344 = new cjs.Shape();
									this.shape_344.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-13.9,-551.1,-13.9,-15).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_344.setTransform(-31,16.8);

									this.shape_345 = new cjs.Shape();
									this.shape_345.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14,-531.7,-14,4.4).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_345.setTransform(-31,16.8);

									this.shape_346 = new cjs.Shape();
									this.shape_346.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14,-512.3,-14,23.8).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_346.setTransform(-31,16.8);

									this.shape_347 = new cjs.Shape();
									this.shape_347.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14.1,-492.9,-14.1,43.2).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_347.setTransform(-31,16.8);

									this.shape_348 = new cjs.Shape();
									this.shape_348.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14.2,-473.4,-14.2,62.7).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_348.setTransform(-31,16.8);

									this.shape_349 = new cjs.Shape();
									this.shape_349.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14.2,-454,-14.2,82.1).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_349.setTransform(-31,16.8);

									this.shape_350 = new cjs.Shape();
									this.shape_350.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14.3,-434.6,-14.3,101.5).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_350.setTransform(-31,16.8);

									this.shape_351 = new cjs.Shape();
									this.shape_351.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14.3,-415.2,-14.3,120.9).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_351.setTransform(-31,16.8);

									this.shape_352 = new cjs.Shape();
									this.shape_352.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14.4,-395.7,-14.4,140.4).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_352.setTransform(-31,16.8);

									this.shape_353 = new cjs.Shape();
									this.shape_353.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14.4,-376.3,-14.4,159.8).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_353.setTransform(-31,16.8);

									this.shape_354 = new cjs.Shape();
									this.shape_354.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14.5,-356.9,-14.5,179.2).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_354.setTransform(-31,16.8);

									this.shape_355 = new cjs.Shape();
									this.shape_355.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14.5,-337.5,-14.5,198.6).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_355.setTransform(-31,16.8);

									this.shape_356 = new cjs.Shape();
									this.shape_356.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14.6,-318,-14.6,218.1).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_356.setTransform(-31,16.8);

									this.shape_357 = new cjs.Shape();
									this.shape_357.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14.7,-298.6,-14.7,237.5).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_357.setTransform(-31,16.8);

									this.shape_358 = new cjs.Shape();
									this.shape_358.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14.7,-279.2,-14.7,256.9).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_358.setTransform(-31,16.8);

									this.shape_359 = new cjs.Shape();
									this.shape_359.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14.8,-259.8,-14.8,276.3).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_359.setTransform(-31,16.8);

									this.shape_360 = new cjs.Shape();
									this.shape_360.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14.8,-240.4,-14.8,295.7).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_360.setTransform(-31,16.8);

									this.shape_361 = new cjs.Shape();
									this.shape_361.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14.9,-220.9,-14.9,315.2).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_361.setTransform(-31,16.8);

									this.shape_362 = new cjs.Shape();
									this.shape_362.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-14.9,-201.5,-14.9,334.6).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_362.setTransform(-31,16.8);

									this.shape_363 = new cjs.Shape();
									this.shape_363.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15,-182.1,-15,354).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_363.setTransform(-31,16.8);

									this.shape_364 = new cjs.Shape();
									this.shape_364.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15,-162.7,-15,373.4).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_364.setTransform(-31,16.8);

									this.shape_365 = new cjs.Shape();
									this.shape_365.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15.1,-143.2,-15.1,392.9).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_365.setTransform(-31,16.8);

									this.shape_366 = new cjs.Shape();
									this.shape_366.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15.2,-123.8,-15.2,412.3).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_366.setTransform(-31,16.8);

									this.shape_367 = new cjs.Shape();
									this.shape_367.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15.2,-104.4,-15.2,431.7).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_367.setTransform(-31,16.8);

									this.shape_368 = new cjs.Shape();
									this.shape_368.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15.3,-85,-15.3,451.1).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_368.setTransform(-31,16.8);

									this.shape_369 = new cjs.Shape();
									this.shape_369.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15.3,-65.5,-15.3,470.6).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_369.setTransform(-31,16.8);

									this.shape_370 = new cjs.Shape();
									this.shape_370.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15.4,-46.1,-15.4,490).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_370.setTransform(-31,16.8);

									this.shape_371 = new cjs.Shape();
									this.shape_371.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15.4,-26.7,-15.4,509.4).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_371.setTransform(-31,16.8);

									this.shape_372 = new cjs.Shape();
									this.shape_372.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15.5,-7.3,-15.5,528.8).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_372.setTransform(-31,16.8);

									this.shape_373 = new cjs.Shape();
									this.shape_373.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15.5,12.2,-15.5,548.3).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_373.setTransform(-31,16.8);

									this.shape_374 = new cjs.Shape();
									this.shape_374.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15.6,31.6,-15.6,567.7).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_374.setTransform(-31,16.8);

									this.shape_375 = new cjs.Shape();
									this.shape_375.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15.7,51,-15.7,587.1).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_375.setTransform(-31,16.8);

									this.shape_376 = new cjs.Shape();
									this.shape_376.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15.7,70.4,-15.7,606.5).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_376.setTransform(-31,16.8);

									this.shape_377 = new cjs.Shape();
									this.shape_377.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15.8,89.9,-15.8,626).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_377.setTransform(-31,16.8);

									this.shape_378 = new cjs.Shape();
									this.shape_378.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15.8,109.3,-15.8,645.4).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_378.setTransform(-31,16.8);

									this.shape_379 = new cjs.Shape();
									this.shape_379.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15.9,128.7,-15.9,664.8).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_379.setTransform(-31,16.8);

									this.shape_380 = new cjs.Shape();
									this.shape_380.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-15.9,148.1,-15.9,684.2).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_380.setTransform(-31,16.8);

									this.shape_381 = new cjs.Shape();
									this.shape_381.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-16,167.6,-16,703.7).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_381.setTransform(-31,16.8);

									this.shape_382 = new cjs.Shape();
									this.shape_382.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-16,187,-16,723.1).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_382.setTransform(-31,16.8);

									this.shape_383 = new cjs.Shape();
									this.shape_383.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-16.1,206.4,-16.1,742.5).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_383.setTransform(-31,16.8);

									this.shape_384 = new cjs.Shape();
									this.shape_384.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-16.2,225.8,-16.2,761.9).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_384.setTransform(-31,16.8);

									this.shape_385 = new cjs.Shape();
									this.shape_385.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-16.2,245.3,-16.2,781.4).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_385.setTransform(-31,16.8);

									this.shape_386 = new cjs.Shape();
									this.shape_386.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-16.3,264.7,-16.3,800.8).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_386.setTransform(-31,16.8);

									this.shape_387 = new cjs.Shape();
									this.shape_387.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],-16.3,284.1,-16.3,820.2).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_387.setTransform(-31,16.8);

									this.shape_388 = new cjs.Shape();
									this.shape_388.graphics.lf(["rgba(44,252,8,0)","#2BFB0D","#2EFF00","rgba(0,0,0,0)"],[0,0.867,0.937,0.953],207.3,114.9,573.4,114.9).s().p("Eg26ACMIAAkXMBt1AAAIAAEXg");
									this.shape_388.setTransform(-31,16.8,1.464,0.143,90);

									this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_324}]},76).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[]},1).to({state:[]},73).wait(58));

									// Layer 7
									this.shape_389 = new cjs.Shape();
									this.shape_389.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-641.6,90,-275.5,90).s().p("Eg26ACMIAAkXMBt1AAAIAAEXg");
									this.shape_389.setTransform(18,16.7,1.464,0.143);

									this.shape_390 = new cjs.Shape();
									this.shape_390.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-920.2,12.9,-384.1,12.9).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_390.setTransform(18,16.8);

									this.shape_391 = new cjs.Shape();
									this.shape_391.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-900.8,13,-364.7,13).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_391.setTransform(18,16.8);

									this.shape_392 = new cjs.Shape();
									this.shape_392.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-881.4,13,-345.3,13).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_392.setTransform(18,16.8);

									this.shape_393 = new cjs.Shape();
									this.shape_393.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-861.9,13.1,-325.8,13.1).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_393.setTransform(18,16.8);

									this.shape_394 = new cjs.Shape();
									this.shape_394.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-842.5,13.2,-306.4,13.2).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_394.setTransform(18,16.8);

									this.shape_395 = new cjs.Shape();
									this.shape_395.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-823.1,13.2,-287,13.2).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_395.setTransform(18,16.8);

									this.shape_396 = new cjs.Shape();
									this.shape_396.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-803.7,13.3,-267.6,13.3).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_396.setTransform(18,16.8);

									this.shape_397 = new cjs.Shape();
									this.shape_397.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-784.2,13.3,-248.1,13.3).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_397.setTransform(18,16.8);

									this.shape_398 = new cjs.Shape();
									this.shape_398.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-764.8,13.4,-228.7,13.4).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_398.setTransform(18,16.8);

									this.shape_399 = new cjs.Shape();
									this.shape_399.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-745.4,13.4,-209.3,13.4).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_399.setTransform(18,16.8);

									this.shape_400 = new cjs.Shape();
									this.shape_400.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-726,13.5,-189.9,13.5).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_400.setTransform(18,16.8);

									this.shape_401 = new cjs.Shape();
									this.shape_401.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-706.5,13.5,-170.4,13.5).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_401.setTransform(18,16.8);

									this.shape_402 = new cjs.Shape();
									this.shape_402.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-687.1,13.6,-151,13.6).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_402.setTransform(18,16.8);

									this.shape_403 = new cjs.Shape();
									this.shape_403.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-667.7,13.7,-131.6,13.7).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_403.setTransform(18,16.8);

									this.shape_404 = new cjs.Shape();
									this.shape_404.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-648.3,13.7,-112.2,13.7).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_404.setTransform(18,16.8);

									this.shape_405 = new cjs.Shape();
									this.shape_405.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-628.8,13.8,-92.7,13.8).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_405.setTransform(18,16.8);

									this.shape_406 = new cjs.Shape();
									this.shape_406.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-609.4,13.8,-73.3,13.8).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_406.setTransform(18,16.8);

									this.shape_407 = new cjs.Shape();
									this.shape_407.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-590,13.9,-53.9,13.9).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_407.setTransform(18,16.8);

									this.shape_408 = new cjs.Shape();
									this.shape_408.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-570.6,13.9,-34.5,13.9).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_408.setTransform(18,16.8);

									this.shape_409 = new cjs.Shape();
									this.shape_409.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-551.1,14,-15,14).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_409.setTransform(18,16.8);

									this.shape_410 = new cjs.Shape();
									this.shape_410.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-531.7,14,4.4,14).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_410.setTransform(18,16.8);

									this.shape_411 = new cjs.Shape();
									this.shape_411.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-512.3,14.1,23.8,14.1).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_411.setTransform(18,16.8);

									this.shape_412 = new cjs.Shape();
									this.shape_412.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-492.9,14.2,43.2,14.2).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_412.setTransform(18,16.8);

									this.shape_413 = new cjs.Shape();
									this.shape_413.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-473.4,14.2,62.7,14.2).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_413.setTransform(18,16.8);

									this.shape_414 = new cjs.Shape();
									this.shape_414.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-454,14.3,82.1,14.3).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_414.setTransform(18,16.8);

									this.shape_415 = new cjs.Shape();
									this.shape_415.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-434.6,14.3,101.5,14.3).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_415.setTransform(18,16.8);

									this.shape_416 = new cjs.Shape();
									this.shape_416.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-415.2,14.4,120.9,14.4).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_416.setTransform(18,16.8);

									this.shape_417 = new cjs.Shape();
									this.shape_417.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-395.7,14.4,140.4,14.4).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_417.setTransform(18,16.8);

									this.shape_418 = new cjs.Shape();
									this.shape_418.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-376.3,14.5,159.8,14.5).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_418.setTransform(18,16.8);

									this.shape_419 = new cjs.Shape();
									this.shape_419.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-356.9,14.5,179.2,14.5).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_419.setTransform(18,16.8);

									this.shape_420 = new cjs.Shape();
									this.shape_420.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-337.5,14.6,198.6,14.6).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_420.setTransform(18,16.8);

									this.shape_421 = new cjs.Shape();
									this.shape_421.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-318,14.7,218.1,14.7).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_421.setTransform(18,16.8);

									this.shape_422 = new cjs.Shape();
									this.shape_422.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-298.6,14.7,237.5,14.7).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_422.setTransform(18,16.8);

									this.shape_423 = new cjs.Shape();
									this.shape_423.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-279.2,14.8,256.9,14.8).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_423.setTransform(18,16.8);

									this.shape_424 = new cjs.Shape();
									this.shape_424.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-259.8,14.8,276.3,14.8).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_424.setTransform(18,16.8);

									this.shape_425 = new cjs.Shape();
									this.shape_425.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-240.4,14.9,295.7,14.9).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_425.setTransform(18,16.8);

									this.shape_426 = new cjs.Shape();
									this.shape_426.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-220.9,14.9,315.2,14.9).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_426.setTransform(18,16.8);

									this.shape_427 = new cjs.Shape();
									this.shape_427.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-201.5,15,334.6,15).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_427.setTransform(18,16.8);

									this.shape_428 = new cjs.Shape();
									this.shape_428.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-182.1,15,354,15).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_428.setTransform(18,16.8);

									this.shape_429 = new cjs.Shape();
									this.shape_429.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-162.7,15.1,373.4,15.1).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_429.setTransform(18,16.8);

									this.shape_430 = new cjs.Shape();
									this.shape_430.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-143.2,15.1,392.9,15.1).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_430.setTransform(18,16.8);

									this.shape_431 = new cjs.Shape();
									this.shape_431.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-123.8,15.2,412.3,15.2).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_431.setTransform(18,16.8);

									this.shape_432 = new cjs.Shape();
									this.shape_432.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-104.4,15.3,431.7,15.3).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_432.setTransform(18,16.8);

									this.shape_433 = new cjs.Shape();
									this.shape_433.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-85,15.3,451.1,15.3).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_433.setTransform(18,16.8);

									this.shape_434 = new cjs.Shape();
									this.shape_434.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-65.5,15.4,470.6,15.4).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_434.setTransform(18,16.8);

									this.shape_435 = new cjs.Shape();
									this.shape_435.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-46.1,15.4,490,15.4).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_435.setTransform(18,16.8);

									this.shape_436 = new cjs.Shape();
									this.shape_436.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-26.7,15.5,509.4,15.5).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_436.setTransform(18,16.8);

									this.shape_437 = new cjs.Shape();
									this.shape_437.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],-7.3,15.5,528.8,15.5).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_437.setTransform(18,16.8);

									this.shape_438 = new cjs.Shape();
									this.shape_438.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],12.2,15.6,548.3,15.6).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_438.setTransform(18,16.8);

									this.shape_439 = new cjs.Shape();
									this.shape_439.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],31.6,15.6,567.7,15.6).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_439.setTransform(18,16.8);

									this.shape_440 = new cjs.Shape();
									this.shape_440.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],51,15.7,587.1,15.7).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_440.setTransform(18,16.8);

									this.shape_441 = new cjs.Shape();
									this.shape_441.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],70.4,15.8,606.5,15.8).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_441.setTransform(18,16.8);

									this.shape_442 = new cjs.Shape();
									this.shape_442.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],89.9,15.8,626,15.8).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_442.setTransform(18,16.8);

									this.shape_443 = new cjs.Shape();
									this.shape_443.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],109.3,15.9,645.4,15.9).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_443.setTransform(18,16.8);

									this.shape_444 = new cjs.Shape();
									this.shape_444.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],128.7,15.9,664.8,15.9).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_444.setTransform(18,16.8);

									this.shape_445 = new cjs.Shape();
									this.shape_445.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],148.1,16,684.2,16).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_445.setTransform(18,16.8);

									this.shape_446 = new cjs.Shape();
									this.shape_446.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],167.6,16,703.7,16).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_446.setTransform(18,16.8);

									this.shape_447 = new cjs.Shape();
									this.shape_447.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],187,16.1,723.1,16.1).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_447.setTransform(18,16.8);

									this.shape_448 = new cjs.Shape();
									this.shape_448.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],206.4,16.1,742.5,16.1).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_448.setTransform(18,16.8);

									this.shape_449 = new cjs.Shape();
									this.shape_449.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],225.8,16.2,761.9,16.2).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_449.setTransform(18,16.8);

									this.shape_450 = new cjs.Shape();
									this.shape_450.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],245.3,16.3,781.4,16.3).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_450.setTransform(18,16.8);

									this.shape_451 = new cjs.Shape();
									this.shape_451.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],264.7,16.3,800.8,16.3).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_451.setTransform(18,16.8);

									this.shape_452 = new cjs.Shape();
									this.shape_452.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],284.1,16.4,820.2,16.4).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_452.setTransform(18,16.8);

									this.shape_453 = new cjs.Shape();
									this.shape_453.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.937,0.953],207.3,114.9,573.4,114.9).s().p("Eg26ACMIAAkXMBt1AAAIAAEXg");
									this.shape_453.setTransform(18,16.7,1.464,0.143);

									this.shape_454 = new cjs.Shape();
									this.shape_454.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.937,0.945,1],-641.6,90,-275.5,90).s().p("Eg26ACMIAAkXMBt1AAAIAAEXg");
									this.shape_454.setTransform(18,16.7,1.464,0.143);

									this.shape_455 = new cjs.Shape();
									this.shape_455.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.937,0.945,1],-919.9,12.9,-383.8,12.9).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_455.setTransform(18,16.8);

									this.shape_456 = new cjs.Shape();
									this.shape_456.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.937,0.945,1],-900.2,13,-364.1,13).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_456.setTransform(18,16.8);

									this.shape_457 = new cjs.Shape();
									this.shape_457.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.937,0.945,0.996],-880.4,13,-344.3,13).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_457.setTransform(18,16.8);

									this.shape_458 = new cjs.Shape();
									this.shape_458.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.937,0.945,0.996],-860.7,13.1,-324.6,13.1).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_458.setTransform(18,16.8);

									this.shape_459 = new cjs.Shape();
									this.shape_459.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.937,0.945,0.996],-841,13.2,-304.9,13.2).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_459.setTransform(18,16.8);

									this.shape_460 = new cjs.Shape();
									this.shape_460.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.937,0.945,0.996],-821.2,13.2,-285.1,13.2).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_460.setTransform(18,16.8);

									this.shape_461 = new cjs.Shape();
									this.shape_461.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.937,0.945,0.996],-801.5,13.3,-265.4,13.3).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_461.setTransform(18,16.8);

									this.shape_462 = new cjs.Shape();
									this.shape_462.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.937,0.945,0.992],-781.8,13.3,-245.7,13.3).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_462.setTransform(18,16.8);

									this.shape_463 = new cjs.Shape();
									this.shape_463.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.937,0.945,0.992],-762,13.4,-225.9,13.4).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_463.setTransform(18,16.8);

									this.shape_464 = new cjs.Shape();
									this.shape_464.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.937,0.945,0.992],-742.3,13.4,-206.2,13.4).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_464.setTransform(18,16.8);

									this.shape_465 = new cjs.Shape();
									this.shape_465.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.937,0.945,0.992],-722.6,13.5,-186.5,13.5).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_465.setTransform(18,16.8);

									this.shape_466 = new cjs.Shape();
									this.shape_466.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.937,0.945,0.992],-702.8,13.6,-166.7,13.6).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_466.setTransform(18,16.8);

									this.shape_467 = new cjs.Shape();
									this.shape_467.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.937,0.945,0.992],-683.1,13.6,-147,13.6).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_467.setTransform(18,16.8);

									this.shape_468 = new cjs.Shape();
									this.shape_468.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.937,0.945,0.988],-663.4,13.7,-127.3,13.7).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_468.setTransform(18,16.8);

									this.shape_469 = new cjs.Shape();
									this.shape_469.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.937,0.945,0.988],-643.6,13.7,-107.5,13.7).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_469.setTransform(18,16.8);

									this.shape_470 = new cjs.Shape();
									this.shape_470.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.941,0.949,0.988],-623.9,13.8,-87.8,13.8).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_470.setTransform(18,16.8);

									this.shape_471 = new cjs.Shape();
									this.shape_471.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.941,0.949,0.988],-604.2,13.8,-68.1,13.8).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_471.setTransform(18,16.8);

									this.shape_472 = new cjs.Shape();
									this.shape_472.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.941,0.949,0.988],-584.4,13.9,-48.3,13.9).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_472.setTransform(18,16.8);

									this.shape_473 = new cjs.Shape();
									this.shape_473.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.941,0.949,0.984],-564.7,13.9,-28.6,13.9).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_473.setTransform(18,16.8);

									this.shape_474 = new cjs.Shape();
									this.shape_474.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.941,0.949,0.984],-545,14,-8.9,14).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_474.setTransform(18,16.8);

									this.shape_475 = new cjs.Shape();
									this.shape_475.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.941,0.949,0.984],-525.2,14.1,10.9,14.1).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_475.setTransform(18,16.8);

									this.shape_476 = new cjs.Shape();
									this.shape_476.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.941,0.949,0.984],-505.5,14.1,30.6,14.1).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_476.setTransform(18,16.8);

									this.shape_477 = new cjs.Shape();
									this.shape_477.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.941,0.949,0.984],-485.8,14.2,50.3,14.2).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_477.setTransform(18,16.8);

									this.shape_478 = new cjs.Shape();
									this.shape_478.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.941,0.949,0.98],-466,14.2,70.1,14.2).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_478.setTransform(18,16.8);

									this.shape_479 = new cjs.Shape();
									this.shape_479.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.941,0.949,0.98],-446.3,14.3,89.8,14.3).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_479.setTransform(18,16.8);

									this.shape_480 = new cjs.Shape();
									this.shape_480.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.941,0.949,0.98],-426.6,14.3,109.5,14.3).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_480.setTransform(18,16.8);

									this.shape_481 = new cjs.Shape();
									this.shape_481.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.941,0.949,0.98],-406.8,14.4,129.3,14.4).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_481.setTransform(18,16.8);

									this.shape_482 = new cjs.Shape();
									this.shape_482.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.941,0.949,0.98],-387.1,14.5,149,14.5).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_482.setTransform(18,16.8);

									this.shape_483 = new cjs.Shape();
									this.shape_483.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.941,0.949,0.976],-367.4,14.5,168.7,14.5).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_483.setTransform(18,16.8);

									this.shape_484 = new cjs.Shape();
									this.shape_484.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.941,0.949,0.976],-347.6,14.6,188.5,14.6).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_484.setTransform(18,16.8);

									this.shape_485 = new cjs.Shape();
									this.shape_485.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.941,0.949,0.976],-327.9,14.6,208.2,14.6).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_485.setTransform(18,16.8);

									this.shape_486 = new cjs.Shape();
									this.shape_486.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.941,0.949,0.976],-308.2,14.7,227.9,14.7).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_486.setTransform(18,16.8);

									this.shape_487 = new cjs.Shape();
									this.shape_487.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.941,0.949,0.976],-288.5,14.7,247.6,14.7).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_487.setTransform(18,16.8);

									this.shape_488 = new cjs.Shape();
									this.shape_488.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.941,0.949,0.976],-268.7,14.8,267.4,14.8).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_488.setTransform(18,16.8);

									this.shape_489 = new cjs.Shape();
									this.shape_489.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.941,0.949,0.973],-249,14.8,287.1,14.8).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_489.setTransform(18,16.8);

									this.shape_490 = new cjs.Shape();
									this.shape_490.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.941,0.949,0.973],-229.3,14.9,306.8,14.9).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_490.setTransform(18,16.8);

									this.shape_491 = new cjs.Shape();
									this.shape_491.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.941,0.949,0.973],-209.5,15,326.6,15).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_491.setTransform(18,16.8);

									this.shape_492 = new cjs.Shape();
									this.shape_492.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.941,0.949,0.973],-189.8,15,346.3,15).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_492.setTransform(18,16.8);

									this.shape_493 = new cjs.Shape();
									this.shape_493.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.941,0.949,0.973],-170.1,15.1,366,15.1).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_493.setTransform(18,16.8);

									this.shape_494 = new cjs.Shape();
									this.shape_494.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.941,0.949,0.969],-150.3,15.1,385.8,15.1).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_494.setTransform(18,16.8);

									this.shape_495 = new cjs.Shape();
									this.shape_495.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.941,0.949,0.969],-130.6,15.2,405.5,15.2).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_495.setTransform(18,16.8);

									this.shape_496 = new cjs.Shape();
									this.shape_496.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.941,0.949,0.969],-110.9,15.2,425.2,15.2).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_496.setTransform(18,16.8);

									this.shape_497 = new cjs.Shape();
									this.shape_497.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.941,0.949,0.969],-91.1,15.3,445,15.3).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_497.setTransform(18,16.8);

									this.shape_498 = new cjs.Shape();
									this.shape_498.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.941,0.949,0.969],-71.4,15.4,464.7,15.4).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_498.setTransform(18,16.8);

									this.shape_499 = new cjs.Shape();
									this.shape_499.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.941,0.949,0.965],-51.7,15.4,484.4,15.4).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_499.setTransform(18,16.8);

									this.shape_500 = new cjs.Shape();
									this.shape_500.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.941,0.949,0.965],-31.9,15.5,504.2,15.5).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_500.setTransform(18,16.8);

									this.shape_501 = new cjs.Shape();
									this.shape_501.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.941,0.949,0.965],-12.2,15.5,523.9,15.5).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_501.setTransform(18,16.8);

									this.shape_502 = new cjs.Shape();
									this.shape_502.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.945,0.953,0.965],7.5,15.6,543.6,15.6).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_502.setTransform(18,16.8);

									this.shape_503 = new cjs.Shape();
									this.shape_503.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.945,0.953,0.965],27.3,15.6,563.4,15.6).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_503.setTransform(18,16.8);

									this.shape_504 = new cjs.Shape();
									this.shape_504.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.945,0.953,0.961],47,15.7,583.1,15.7).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_504.setTransform(18,16.8);

									this.shape_505 = new cjs.Shape();
									this.shape_505.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.945,0.953,0.961],66.7,15.7,602.8,15.7).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_505.setTransform(18,16.8);

									this.shape_506 = new cjs.Shape();
									this.shape_506.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.945,0.953,0.961],86.5,15.8,622.6,15.8).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_506.setTransform(18,16.8);

									this.shape_507 = new cjs.Shape();
									this.shape_507.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.945,0.953,0.961],106.2,15.9,642.3,15.9).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_507.setTransform(18,16.8);

									this.shape_508 = new cjs.Shape();
									this.shape_508.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.945,0.953,0.961],125.9,15.9,662,15.9).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_508.setTransform(18,16.8);

									this.shape_509 = new cjs.Shape();
									this.shape_509.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.945,0.953,0.961],145.7,16,681.8,16).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_509.setTransform(18,16.8);

									this.shape_510 = new cjs.Shape();
									this.shape_510.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.945,0.953,0.957],165.4,16,701.5,16).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_510.setTransform(18,16.8);

									this.shape_511 = new cjs.Shape();
									this.shape_511.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.945,0.953,0.957],185.1,16.1,721.2,16.1).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_511.setTransform(18,16.8);

									this.shape_512 = new cjs.Shape();
									this.shape_512.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.945,0.953,0.957],204.9,16.1,741,16.1).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_512.setTransform(18,16.8);

									this.shape_513 = new cjs.Shape();
									this.shape_513.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.945,0.953,0.957],224.6,16.2,760.7,16.2).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_513.setTransform(18,16.8);

									this.shape_514 = new cjs.Shape();
									this.shape_514.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.945,0.953,0.957],244.3,16.3,780.4,16.3).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_514.setTransform(18,16.8);

									this.shape_515 = new cjs.Shape();
									this.shape_515.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.945,0.953,0.953],264.1,16.3,800.2,16.3).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_515.setTransform(18,16.8);

									this.shape_516 = new cjs.Shape();
									this.shape_516.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)","rgba(0,0,0,0)"],[0,0.882,0.945,0.953,0.953],283.8,16.4,819.9,16.4).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_516.setTransform(18,16.8);

									this.shape_517 = new cjs.Shape();
									this.shape_517.graphics.lf(["rgba(0,177,255,0)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.882,0.945,0.953],207.3,114.9,573.4,114.9).s().p("Eg26ACMIAAkXMBt1AAAIAAEXg");
									this.shape_517.setTransform(18,16.7,1.464,0.143);

									this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_389}]},76).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[]},1).to({state:[{t:this.shape_454}]},17).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_483}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_489}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_491}]},1).to({state:[{t:this.shape_492}]},1).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_494}]},1).to({state:[{t:this.shape_495}]},1).to({state:[{t:this.shape_496}]},1).to({state:[{t:this.shape_497}]},1).to({state:[{t:this.shape_498}]},1).to({state:[{t:this.shape_499}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_501}]},1).to({state:[{t:this.shape_502}]},1).to({state:[{t:this.shape_503}]},1).to({state:[{t:this.shape_504}]},1).to({state:[{t:this.shape_505}]},1).to({state:[{t:this.shape_506}]},1).to({state:[{t:this.shape_507}]},1).to({state:[{t:this.shape_508}]},1).to({state:[{t:this.shape_509}]},1).to({state:[{t:this.shape_510}]},1).to({state:[{t:this.shape_511}]},1).to({state:[{t:this.shape_512}]},1).to({state:[{t:this.shape_513}]},1).to({state:[{t:this.shape_514}]},1).to({state:[{t:this.shape_515}]},1).to({state:[{t:this.shape_516}]},1).to({state:[{t:this.shape_517}]},1).to({state:[]},1).to({state:[]},1).wait(49));

									// Layer 8
									this.shape_518 = new cjs.Shape();
									this.shape_518.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-641.6,90,-275.5,90).s().p("Eg26ACMIAAkXMBt1AAAIAAEXg");
									this.shape_518.setTransform(-276,156.2,1.464,0.143,-90);

									this.shape_519 = new cjs.Shape();
									this.shape_519.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],12.9,920.3,12.9,384.2).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_519.setTransform(-276,156.3);

									this.shape_520 = new cjs.Shape();
									this.shape_520.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],13,900.8,13,364.7).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_520.setTransform(-276,156.3);

									this.shape_521 = new cjs.Shape();
									this.shape_521.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],13,881.4,13,345.3).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_521.setTransform(-276,156.3);

									this.shape_522 = new cjs.Shape();
									this.shape_522.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],13.1,862,13.1,325.9).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_522.setTransform(-276,156.3);

									this.shape_523 = new cjs.Shape();
									this.shape_523.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],13.2,842.6,13.2,306.5).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_523.setTransform(-276,156.3);

									this.shape_524 = new cjs.Shape();
									this.shape_524.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],13.2,823.1,13.2,287).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_524.setTransform(-276,156.3);

									this.shape_525 = new cjs.Shape();
									this.shape_525.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],13.3,803.7,13.3,267.6).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_525.setTransform(-276,156.3);

									this.shape_526 = new cjs.Shape();
									this.shape_526.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],13.3,784.3,13.3,248.2).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_526.setTransform(-276,156.3);

									this.shape_527 = new cjs.Shape();
									this.shape_527.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],13.4,764.9,13.4,228.8).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_527.setTransform(-276,156.3);

									this.shape_528 = new cjs.Shape();
									this.shape_528.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],13.4,745.4,13.4,209.3).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_528.setTransform(-276,156.3);

									this.shape_529 = new cjs.Shape();
									this.shape_529.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],13.5,726,13.5,189.9).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_529.setTransform(-276,156.3);

									this.shape_530 = new cjs.Shape();
									this.shape_530.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],13.5,706.6,13.5,170.5).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_530.setTransform(-276,156.3);

									this.shape_531 = new cjs.Shape();
									this.shape_531.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],13.6,687.2,13.6,151.1).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_531.setTransform(-276,156.3);

									this.shape_532 = new cjs.Shape();
									this.shape_532.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],13.7,667.7,13.7,131.6).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_532.setTransform(-276,156.3);

									this.shape_533 = new cjs.Shape();
									this.shape_533.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],13.7,648.3,13.7,112.2).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_533.setTransform(-276,156.3);

									this.shape_534 = new cjs.Shape();
									this.shape_534.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],13.8,628.9,13.8,92.8).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_534.setTransform(-276,156.3);

									this.shape_535 = new cjs.Shape();
									this.shape_535.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],13.8,609.5,13.8,73.4).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_535.setTransform(-276,156.3);

									this.shape_536 = new cjs.Shape();
									this.shape_536.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],13.9,590,13.9,53.9).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_536.setTransform(-276,156.3);

									this.shape_537 = new cjs.Shape();
									this.shape_537.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],13.9,570.6,13.9,34.5).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_537.setTransform(-276,156.3);

									this.shape_538 = new cjs.Shape();
									this.shape_538.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],14,551.2,14,15.1).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_538.setTransform(-276,156.3);

									this.shape_539 = new cjs.Shape();
									this.shape_539.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],14,531.8,14,-4.3).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_539.setTransform(-276,156.3);

									this.shape_540 = new cjs.Shape();
									this.shape_540.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],14.1,512.3,14.1,-23.8).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_540.setTransform(-276,156.3);

									this.shape_541 = new cjs.Shape();
									this.shape_541.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],14.2,492.9,14.2,-43.2).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_541.setTransform(-276,156.3);

									this.shape_542 = new cjs.Shape();
									this.shape_542.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],14.2,473.5,14.2,-62.6).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_542.setTransform(-276,156.3);

									this.shape_543 = new cjs.Shape();
									this.shape_543.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],14.3,454.1,14.3,-82).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_543.setTransform(-276,156.3);

									this.shape_544 = new cjs.Shape();
									this.shape_544.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],14.3,434.6,14.3,-101.5).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_544.setTransform(-276,156.3);

									this.shape_545 = new cjs.Shape();
									this.shape_545.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],14.4,415.2,14.4,-120.9).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_545.setTransform(-276,156.3);

									this.shape_546 = new cjs.Shape();
									this.shape_546.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],14.4,395.8,14.4,-140.3).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_546.setTransform(-276,156.3);

									this.shape_547 = new cjs.Shape();
									this.shape_547.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],14.5,376.4,14.5,-159.7).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_547.setTransform(-276,156.3);

									this.shape_548 = new cjs.Shape();
									this.shape_548.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],14.5,356.9,14.5,-179.2).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_548.setTransform(-276,156.3);

									this.shape_549 = new cjs.Shape();
									this.shape_549.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],14.6,337.5,14.6,-198.6).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_549.setTransform(-276,156.3);

									this.shape_550 = new cjs.Shape();
									this.shape_550.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],14.7,318.1,14.7,-218).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_550.setTransform(-276,156.3);

									this.shape_551 = new cjs.Shape();
									this.shape_551.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],14.7,298.7,14.7,-237.4).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_551.setTransform(-276,156.3);

									this.shape_552 = new cjs.Shape();
									this.shape_552.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],14.8,279.3,14.8,-256.8).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_552.setTransform(-276,156.3);

									this.shape_553 = new cjs.Shape();
									this.shape_553.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],14.8,259.8,14.8,-276.3).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_553.setTransform(-276,156.3);

									this.shape_554 = new cjs.Shape();
									this.shape_554.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],14.9,240.4,14.9,-295.7).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_554.setTransform(-276,156.3);

									this.shape_555 = new cjs.Shape();
									this.shape_555.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],14.9,221,14.9,-315.1).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_555.setTransform(-276,156.3);

									this.shape_556 = new cjs.Shape();
									this.shape_556.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],15,201.6,15,-334.5).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_556.setTransform(-276,156.3);

									this.shape_557 = new cjs.Shape();
									this.shape_557.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],15,182.1,15,-354).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_557.setTransform(-276,156.3);

									this.shape_558 = new cjs.Shape();
									this.shape_558.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],15.1,162.7,15.1,-373.4).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_558.setTransform(-276,156.3);

									this.shape_559 = new cjs.Shape();
									this.shape_559.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],15.1,143.3,15.1,-392.8).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_559.setTransform(-276,156.3);

									this.shape_560 = new cjs.Shape();
									this.shape_560.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],15.2,123.9,15.2,-412.2).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_560.setTransform(-276,156.3);

									this.shape_561 = new cjs.Shape();
									this.shape_561.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],15.3,104.4,15.3,-431.7).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_561.setTransform(-276,156.3);

									this.shape_562 = new cjs.Shape();
									this.shape_562.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],15.3,85,15.3,-451.1).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_562.setTransform(-276,156.3);

									this.shape_563 = new cjs.Shape();
									this.shape_563.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],15.4,65.6,15.4,-470.5).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_563.setTransform(-276,156.3);

									this.shape_564 = new cjs.Shape();
									this.shape_564.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],15.4,46.2,15.4,-489.9).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_564.setTransform(-276,156.3);

									this.shape_565 = new cjs.Shape();
									this.shape_565.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],15.5,26.7,15.5,-509.4).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_565.setTransform(-276,156.3);

									this.shape_566 = new cjs.Shape();
									this.shape_566.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],15.5,7.3,15.5,-528.8).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_566.setTransform(-276,156.3);

									this.shape_567 = new cjs.Shape();
									this.shape_567.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],15.6,-12.1,15.6,-548.2).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_567.setTransform(-276,156.3);

									this.shape_568 = new cjs.Shape();
									this.shape_568.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],15.6,-31.5,15.6,-567.6).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_568.setTransform(-276,156.3);

									this.shape_569 = new cjs.Shape();
									this.shape_569.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],15.7,-51,15.7,-587.1).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_569.setTransform(-276,156.3);

									this.shape_570 = new cjs.Shape();
									this.shape_570.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],15.8,-70.4,15.8,-606.5).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_570.setTransform(-276,156.3);

									this.shape_571 = new cjs.Shape();
									this.shape_571.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],15.8,-89.8,15.8,-625.9).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_571.setTransform(-276,156.3);

									this.shape_572 = new cjs.Shape();
									this.shape_572.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],15.9,-109.2,15.9,-645.3).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_572.setTransform(-276,156.3);

									this.shape_573 = new cjs.Shape();
									this.shape_573.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],15.9,-128.7,15.9,-664.8).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_573.setTransform(-276,156.3);

									this.shape_574 = new cjs.Shape();
									this.shape_574.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],16,-148.1,16,-684.2).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_574.setTransform(-276,156.3);

									this.shape_575 = new cjs.Shape();
									this.shape_575.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],16,-167.5,16,-703.6).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_575.setTransform(-276,156.3);

									this.shape_576 = new cjs.Shape();
									this.shape_576.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],16.1,-186.9,16.1,-723).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_576.setTransform(-276,156.3);

									this.shape_577 = new cjs.Shape();
									this.shape_577.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],16.1,-206.4,16.1,-742.5).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_577.setTransform(-276,156.3);

									this.shape_578 = new cjs.Shape();
									this.shape_578.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],16.2,-225.8,16.2,-761.9).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_578.setTransform(-276,156.3);

									this.shape_579 = new cjs.Shape();
									this.shape_579.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],16.3,-245.2,16.3,-781.3).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_579.setTransform(-276,156.3);

									this.shape_580 = new cjs.Shape();
									this.shape_580.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],16.3,-264.6,16.3,-800.7).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_580.setTransform(-276,156.3);

									this.shape_581 = new cjs.Shape();
									this.shape_581.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],16.4,-284.1,16.4,-820.2).s().p("EgATBQbMAAAig2IAnAAMAAACg2g");
									this.shape_581.setTransform(-276,156.3);

									this.shape_582 = new cjs.Shape();
									this.shape_582.graphics.lf(["rgba(255,0,168,0)","#FF00A8","#FF00A8","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],207.3,114.9,573.4,114.9).s().p("Eg26ACMIAAkXMBt1AAAIAAEXg");
									this.shape_582.setTransform(-276,156.2,1.464,0.143,-90);

									this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_518}]},32).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_521}]},1).to({state:[{t:this.shape_522}]},1).to({state:[{t:this.shape_523}]},1).to({state:[{t:this.shape_524}]},1).to({state:[{t:this.shape_525}]},1).to({state:[{t:this.shape_526}]},1).to({state:[{t:this.shape_527}]},1).to({state:[{t:this.shape_528}]},1).to({state:[{t:this.shape_529}]},1).to({state:[{t:this.shape_530}]},1).to({state:[{t:this.shape_531}]},1).to({state:[{t:this.shape_532}]},1).to({state:[{t:this.shape_533}]},1).to({state:[{t:this.shape_534}]},1).to({state:[{t:this.shape_535}]},1).to({state:[{t:this.shape_536}]},1).to({state:[{t:this.shape_537}]},1).to({state:[{t:this.shape_538}]},1).to({state:[{t:this.shape_539}]},1).to({state:[{t:this.shape_540}]},1).to({state:[{t:this.shape_541}]},1).to({state:[{t:this.shape_542}]},1).to({state:[{t:this.shape_543}]},1).to({state:[{t:this.shape_544}]},1).to({state:[{t:this.shape_545}]},1).to({state:[{t:this.shape_546}]},1).to({state:[{t:this.shape_547}]},1).to({state:[{t:this.shape_548}]},1).to({state:[{t:this.shape_549}]},1).to({state:[{t:this.shape_550}]},1).to({state:[{t:this.shape_551}]},1).to({state:[{t:this.shape_552}]},1).to({state:[{t:this.shape_553}]},1).to({state:[{t:this.shape_554}]},1).to({state:[{t:this.shape_555}]},1).to({state:[{t:this.shape_556}]},1).to({state:[{t:this.shape_557}]},1).to({state:[{t:this.shape_558}]},1).to({state:[{t:this.shape_559}]},1).to({state:[{t:this.shape_560}]},1).to({state:[{t:this.shape_561}]},1).to({state:[{t:this.shape_562}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_566}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_568}]},1).to({state:[{t:this.shape_569}]},1).to({state:[{t:this.shape_570}]},1).to({state:[{t:this.shape_571}]},1).to({state:[{t:this.shape_572}]},1).to({state:[{t:this.shape_573}]},1).to({state:[{t:this.shape_574}]},1).to({state:[{t:this.shape_575}]},1).to({state:[{t:this.shape_576}]},1).to({state:[{t:this.shape_577}]},1).to({state:[{t:this.shape_578}]},1).to({state:[{t:this.shape_579}]},1).to({state:[{t:this.shape_580}]},1).to({state:[{t:this.shape_581}]},1).to({state:[{t:this.shape_582}]},1).to({state:[]},1).to({state:[]},113).wait(62));

									// Layer 9
									this.shape_583 = new cjs.Shape();
									this.shape_583.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-641.6,90,-275.5,90).s().p("Eg26ACMIAAkXMBt1AAAIAAEXg");
									this.shape_583.setTransform(18,156.2,1.464,0.143);

									this.shape_584 = new cjs.Shape();
									this.shape_584.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-920.2,12.9,-384.1,12.9).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_584.setTransform(18,156.3);

									this.shape_585 = new cjs.Shape();
									this.shape_585.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-900.8,13,-364.7,13).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_585.setTransform(18,156.3);

									this.shape_586 = new cjs.Shape();
									this.shape_586.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-881.4,13,-345.3,13).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_586.setTransform(18,156.3);

									this.shape_587 = new cjs.Shape();
									this.shape_587.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-861.9,13.1,-325.8,13.1).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_587.setTransform(18,156.3);

									this.shape_588 = new cjs.Shape();
									this.shape_588.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-842.5,13.2,-306.4,13.2).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_588.setTransform(18,156.3);

									this.shape_589 = new cjs.Shape();
									this.shape_589.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-823.1,13.2,-287,13.2).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_589.setTransform(18,156.3);

									this.shape_590 = new cjs.Shape();
									this.shape_590.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-803.7,13.3,-267.6,13.3).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_590.setTransform(18,156.3);

									this.shape_591 = new cjs.Shape();
									this.shape_591.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-784.2,13.3,-248.1,13.3).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_591.setTransform(18,156.3);

									this.shape_592 = new cjs.Shape();
									this.shape_592.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-764.8,13.4,-228.7,13.4).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_592.setTransform(18,156.3);

									this.shape_593 = new cjs.Shape();
									this.shape_593.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-745.4,13.4,-209.3,13.4).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_593.setTransform(18,156.3);

									this.shape_594 = new cjs.Shape();
									this.shape_594.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-726,13.5,-189.9,13.5).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_594.setTransform(18,156.3);

									this.shape_595 = new cjs.Shape();
									this.shape_595.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-706.5,13.5,-170.4,13.5).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_595.setTransform(18,156.3);

									this.shape_596 = new cjs.Shape();
									this.shape_596.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-687.1,13.6,-151,13.6).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_596.setTransform(18,156.3);

									this.shape_597 = new cjs.Shape();
									this.shape_597.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-667.7,13.7,-131.6,13.7).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_597.setTransform(18,156.3);

									this.shape_598 = new cjs.Shape();
									this.shape_598.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-648.3,13.7,-112.2,13.7).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_598.setTransform(18,156.3);

									this.shape_599 = new cjs.Shape();
									this.shape_599.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-628.8,13.8,-92.7,13.8).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_599.setTransform(18,156.3);

									this.shape_600 = new cjs.Shape();
									this.shape_600.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-609.4,13.8,-73.3,13.8).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_600.setTransform(18,156.3);

									this.shape_601 = new cjs.Shape();
									this.shape_601.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-590,13.9,-53.9,13.9).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_601.setTransform(18,156.3);

									this.shape_602 = new cjs.Shape();
									this.shape_602.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-570.6,13.9,-34.5,13.9).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_602.setTransform(18,156.3);

									this.shape_603 = new cjs.Shape();
									this.shape_603.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-551.1,14,-15,14).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_603.setTransform(18,156.3);

									this.shape_604 = new cjs.Shape();
									this.shape_604.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-531.7,14,4.4,14).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_604.setTransform(18,156.3);

									this.shape_605 = new cjs.Shape();
									this.shape_605.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-512.3,14.1,23.8,14.1).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_605.setTransform(18,156.3);

									this.shape_606 = new cjs.Shape();
									this.shape_606.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-492.9,14.2,43.2,14.2).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_606.setTransform(18,156.3);

									this.shape_607 = new cjs.Shape();
									this.shape_607.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-473.4,14.2,62.7,14.2).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_607.setTransform(18,156.3);

									this.shape_608 = new cjs.Shape();
									this.shape_608.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-454,14.3,82.1,14.3).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_608.setTransform(18,156.3);

									this.shape_609 = new cjs.Shape();
									this.shape_609.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-434.6,14.3,101.5,14.3).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_609.setTransform(18,156.3);

									this.shape_610 = new cjs.Shape();
									this.shape_610.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-415.2,14.4,120.9,14.4).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_610.setTransform(18,156.3);

									this.shape_611 = new cjs.Shape();
									this.shape_611.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-395.7,14.4,140.4,14.4).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_611.setTransform(18,156.3);

									this.shape_612 = new cjs.Shape();
									this.shape_612.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-376.3,14.5,159.8,14.5).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_612.setTransform(18,156.3);

									this.shape_613 = new cjs.Shape();
									this.shape_613.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-356.9,14.5,179.2,14.5).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_613.setTransform(18,156.3);

									this.shape_614 = new cjs.Shape();
									this.shape_614.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-337.5,14.6,198.6,14.6).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_614.setTransform(18,156.3);

									this.shape_615 = new cjs.Shape();
									this.shape_615.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-318,14.7,218.1,14.7).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_615.setTransform(18,156.3);

									this.shape_616 = new cjs.Shape();
									this.shape_616.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-298.6,14.7,237.5,14.7).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_616.setTransform(18,156.3);

									this.shape_617 = new cjs.Shape();
									this.shape_617.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-279.2,14.8,256.9,14.8).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_617.setTransform(18,156.3);

									this.shape_618 = new cjs.Shape();
									this.shape_618.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-259.8,14.8,276.3,14.8).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_618.setTransform(18,156.3);

									this.shape_619 = new cjs.Shape();
									this.shape_619.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-240.4,14.9,295.7,14.9).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_619.setTransform(18,156.3);

									this.shape_620 = new cjs.Shape();
									this.shape_620.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-220.9,14.9,315.2,14.9).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_620.setTransform(18,156.3);

									this.shape_621 = new cjs.Shape();
									this.shape_621.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-201.5,15,334.6,15).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_621.setTransform(18,156.3);

									this.shape_622 = new cjs.Shape();
									this.shape_622.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-182.1,15,354,15).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_622.setTransform(18,156.3);

									this.shape_623 = new cjs.Shape();
									this.shape_623.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-162.7,15.1,373.4,15.1).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_623.setTransform(18,156.3);

									this.shape_624 = new cjs.Shape();
									this.shape_624.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-143.2,15.1,392.9,15.1).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_624.setTransform(18,156.3);

									this.shape_625 = new cjs.Shape();
									this.shape_625.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-123.8,15.2,412.3,15.2).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_625.setTransform(18,156.3);

									this.shape_626 = new cjs.Shape();
									this.shape_626.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-104.4,15.3,431.7,15.3).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_626.setTransform(18,156.3);

									this.shape_627 = new cjs.Shape();
									this.shape_627.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-85,15.3,451.1,15.3).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_627.setTransform(18,156.3);

									this.shape_628 = new cjs.Shape();
									this.shape_628.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-65.5,15.4,470.6,15.4).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_628.setTransform(18,156.3);

									this.shape_629 = new cjs.Shape();
									this.shape_629.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-46.1,15.4,490,15.4).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_629.setTransform(18,156.3);

									this.shape_630 = new cjs.Shape();
									this.shape_630.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-26.7,15.5,509.4,15.5).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_630.setTransform(18,156.3);

									this.shape_631 = new cjs.Shape();
									this.shape_631.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],-7.3,15.5,528.8,15.5).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_631.setTransform(18,156.3);

									this.shape_632 = new cjs.Shape();
									this.shape_632.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],12.2,15.6,548.3,15.6).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_632.setTransform(18,156.3);

									this.shape_633 = new cjs.Shape();
									this.shape_633.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],31.6,15.6,567.7,15.6).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_633.setTransform(18,156.3);

									this.shape_634 = new cjs.Shape();
									this.shape_634.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],51,15.7,587.1,15.7).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_634.setTransform(18,156.3);

									this.shape_635 = new cjs.Shape();
									this.shape_635.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],70.4,15.8,606.5,15.8).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_635.setTransform(18,156.3);

									this.shape_636 = new cjs.Shape();
									this.shape_636.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],89.9,15.8,626,15.8).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_636.setTransform(18,156.3);

									this.shape_637 = new cjs.Shape();
									this.shape_637.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],109.3,15.9,645.4,15.9).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_637.setTransform(18,156.3);

									this.shape_638 = new cjs.Shape();
									this.shape_638.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],128.7,15.9,664.8,15.9).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_638.setTransform(18,156.3);

									this.shape_639 = new cjs.Shape();
									this.shape_639.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],148.1,16,684.2,16).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_639.setTransform(18,156.3);

									this.shape_640 = new cjs.Shape();
									this.shape_640.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],167.6,16,703.7,16).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_640.setTransform(18,156.3);

									this.shape_641 = new cjs.Shape();
									this.shape_641.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],187,16.1,723.1,16.1).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_641.setTransform(18,156.3);

									this.shape_642 = new cjs.Shape();
									this.shape_642.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],206.4,16.1,742.5,16.1).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_642.setTransform(18,156.3);

									this.shape_643 = new cjs.Shape();
									this.shape_643.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],225.8,16.2,761.9,16.2).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_643.setTransform(18,156.3);

									this.shape_644 = new cjs.Shape();
									this.shape_644.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],245.3,16.3,781.4,16.3).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_644.setTransform(18,156.3);

									this.shape_645 = new cjs.Shape();
									this.shape_645.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],264.7,16.3,800.8,16.3).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_645.setTransform(18,156.3);

									this.shape_646 = new cjs.Shape();
									this.shape_646.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],284.1,16.4,820.2,16.4).s().p("EhQbAATIAAglMCg2AAAIAAAlg");
									this.shape_646.setTransform(18,156.3);

									this.shape_647 = new cjs.Shape();
									this.shape_647.graphics.lf(["rgba(255,6,0,0)","#FF0000","#FF1100","rgba(0,0,0,0)"],[0,0.831,0.941,0.953],207.3,114.9,573.4,114.9).s().p("Eg26ACMIAAkXMBt1AAAIAAEXg");
									this.shape_647.setTransform(18,156.2,1.464,0.143);

									this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_583}]},32).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_588}]},1).to({state:[{t:this.shape_589}]},1).to({state:[{t:this.shape_590}]},1).to({state:[{t:this.shape_591}]},1).to({state:[{t:this.shape_592}]},1).to({state:[{t:this.shape_593}]},1).to({state:[{t:this.shape_594}]},1).to({state:[{t:this.shape_595}]},1).to({state:[{t:this.shape_596}]},1).to({state:[{t:this.shape_597}]},1).to({state:[{t:this.shape_598}]},1).to({state:[{t:this.shape_599}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_601}]},1).to({state:[{t:this.shape_602}]},1).to({state:[{t:this.shape_603}]},1).to({state:[{t:this.shape_604}]},1).to({state:[{t:this.shape_605}]},1).to({state:[{t:this.shape_606}]},1).to({state:[{t:this.shape_607}]},1).to({state:[{t:this.shape_608}]},1).to({state:[{t:this.shape_609}]},1).to({state:[{t:this.shape_610}]},1).to({state:[{t:this.shape_611}]},1).to({state:[{t:this.shape_612}]},1).to({state:[{t:this.shape_613}]},1).to({state:[{t:this.shape_614}]},1).to({state:[{t:this.shape_615}]},1).to({state:[{t:this.shape_616}]},1).to({state:[{t:this.shape_617}]},1).to({state:[{t:this.shape_618}]},1).to({state:[{t:this.shape_619}]},1).to({state:[{t:this.shape_620}]},1).to({state:[{t:this.shape_621}]},1).to({state:[{t:this.shape_622}]},1).to({state:[{t:this.shape_623}]},1).to({state:[{t:this.shape_624}]},1).to({state:[{t:this.shape_625}]},1).to({state:[{t:this.shape_626}]},1).to({state:[{t:this.shape_627}]},1).to({state:[{t:this.shape_628}]},1).to({state:[{t:this.shape_629}]},1).to({state:[{t:this.shape_630}]},1).to({state:[{t:this.shape_631}]},1).to({state:[{t:this.shape_632}]},1).to({state:[{t:this.shape_633}]},1).to({state:[{t:this.shape_634}]},1).to({state:[{t:this.shape_635}]},1).to({state:[{t:this.shape_636}]},1).to({state:[{t:this.shape_637}]},1).to({state:[{t:this.shape_638}]},1).to({state:[{t:this.shape_639}]},1).to({state:[{t:this.shape_640}]},1).to({state:[{t:this.shape_641}]},1).to({state:[{t:this.shape_642}]},1).to({state:[{t:this.shape_643}]},1).to({state:[{t:this.shape_644}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_646}]},1).to({state:[{t:this.shape_647}]},1).to({state:[]},1).to({state:[]},113).wait(62));

									// Layer 10
									this.shape_648 = new cjs.Shape();
									this.shape_648.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-434.7,129,-68.6,129).s().p("Eg26ACMIAAkXMBt1AAAIAAEXg");
									this.shape_648.setTransform(18,-91.7,1.464,0.143,90);

									this.shape_649 = new cjs.Shape();
									this.shape_649.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-18.3,-621.6,-18.3,-85.5).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_649.setTransform(18,-91.7);

									this.shape_650 = new cjs.Shape();
									this.shape_650.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-18.3,-606.7,-18.3,-70.6).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_650.setTransform(18,-91.7);

									this.shape_651 = new cjs.Shape();
									this.shape_651.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-18.3,-591.8,-18.3,-55.7).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_651.setTransform(18,-91.7);

									this.shape_652 = new cjs.Shape();
									this.shape_652.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-18.2,-576.8,-18.2,-40.7).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_652.setTransform(18,-91.7);

									this.shape_653 = new cjs.Shape();
									this.shape_653.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-18.2,-561.9,-18.2,-25.8).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_653.setTransform(18,-91.7);

									this.shape_654 = new cjs.Shape();
									this.shape_654.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-18.2,-547,-18.2,-10.9).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_654.setTransform(18,-91.7);

									this.shape_655 = new cjs.Shape();
									this.shape_655.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-18.2,-532.1,-18.2,4).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_655.setTransform(18,-91.7);

									this.shape_656 = new cjs.Shape();
									this.shape_656.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-18.1,-517.2,-18.1,18.9).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_656.setTransform(18,-91.7);

									this.shape_657 = new cjs.Shape();
									this.shape_657.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-18.1,-502.2,-18.1,33.9).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_657.setTransform(18,-91.7);

									this.shape_658 = new cjs.Shape();
									this.shape_658.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-18.1,-487.3,-18.1,48.8).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_658.setTransform(18,-91.7);

									this.shape_659 = new cjs.Shape();
									this.shape_659.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-18,-472.4,-18,63.7).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_659.setTransform(18,-91.7);

									this.shape_660 = new cjs.Shape();
									this.shape_660.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-18,-457.5,-18,78.6).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_660.setTransform(18,-91.7);

									this.shape_661 = new cjs.Shape();
									this.shape_661.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-18,-442.6,-18,93.5).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_661.setTransform(18,-91.7);

									this.shape_662 = new cjs.Shape();
									this.shape_662.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-17.9,-427.6,-17.9,108.5).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_662.setTransform(18,-91.7);

									this.shape_663 = new cjs.Shape();
									this.shape_663.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-17.9,-412.7,-17.9,123.4).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_663.setTransform(18,-91.7);

									this.shape_664 = new cjs.Shape();
									this.shape_664.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-17.9,-397.8,-17.9,138.3).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_664.setTransform(18,-91.7);

									this.shape_665 = new cjs.Shape();
									this.shape_665.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-17.8,-382.9,-17.8,153.2).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_665.setTransform(18,-91.7);

									this.shape_666 = new cjs.Shape();
									this.shape_666.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-17.8,-367.9,-17.8,168.2).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_666.setTransform(18,-91.7);

									this.shape_667 = new cjs.Shape();
									this.shape_667.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-17.8,-353,-17.8,183.1).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_667.setTransform(18,-91.7);

									this.shape_668 = new cjs.Shape();
									this.shape_668.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-17.7,-338.1,-17.7,198).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_668.setTransform(18,-91.7);

									this.shape_669 = new cjs.Shape();
									this.shape_669.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-17.7,-323.2,-17.7,212.9).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_669.setTransform(18,-91.7);

									this.shape_670 = new cjs.Shape();
									this.shape_670.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-17.7,-308.2,-17.7,227.9).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_670.setTransform(18,-91.7);

									this.shape_671 = new cjs.Shape();
									this.shape_671.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-17.6,-293.3,-17.6,242.8).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_671.setTransform(18,-91.7);

									this.shape_672 = new cjs.Shape();
									this.shape_672.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-17.6,-278.4,-17.6,257.7).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_672.setTransform(18,-91.7);

									this.shape_673 = new cjs.Shape();
									this.shape_673.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-17.6,-263.5,-17.6,272.6).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_673.setTransform(18,-91.7);

									this.shape_674 = new cjs.Shape();
									this.shape_674.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-17.5,-248.6,-17.5,287.5).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_674.setTransform(18,-91.7);

									this.shape_675 = new cjs.Shape();
									this.shape_675.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-17.5,-233.6,-17.5,302.5).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_675.setTransform(18,-91.7);

									this.shape_676 = new cjs.Shape();
									this.shape_676.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-17.5,-218.7,-17.5,317.4).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_676.setTransform(18,-91.7);

									this.shape_677 = new cjs.Shape();
									this.shape_677.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-17.5,-203.8,-17.5,332.3).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_677.setTransform(18,-91.7);

									this.shape_678 = new cjs.Shape();
									this.shape_678.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-17.4,-188.9,-17.4,347.2).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_678.setTransform(18,-91.7);

									this.shape_679 = new cjs.Shape();
									this.shape_679.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-17.4,-174,-17.4,362.1).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_679.setTransform(18,-91.7);

									this.shape_680 = new cjs.Shape();
									this.shape_680.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-17.4,-159,-17.4,377.1).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_680.setTransform(18,-91.7);

									this.shape_681 = new cjs.Shape();
									this.shape_681.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-17.3,-144.1,-17.3,392).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_681.setTransform(18,-91.7);

									this.shape_682 = new cjs.Shape();
									this.shape_682.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-17.3,-129.2,-17.3,406.9).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_682.setTransform(18,-91.7);

									this.shape_683 = new cjs.Shape();
									this.shape_683.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-17.3,-114.3,-17.3,421.8).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_683.setTransform(18,-91.7);

									this.shape_684 = new cjs.Shape();
									this.shape_684.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-17.2,-99.4,-17.2,436.7).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_684.setTransform(18,-91.7);

									this.shape_685 = new cjs.Shape();
									this.shape_685.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-17.2,-84.4,-17.2,451.7).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_685.setTransform(18,-91.7);

									this.shape_686 = new cjs.Shape();
									this.shape_686.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-17.2,-69.5,-17.2,466.6).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_686.setTransform(18,-91.7);

									this.shape_687 = new cjs.Shape();
									this.shape_687.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-17.1,-54.6,-17.1,481.5).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_687.setTransform(18,-91.7);

									this.shape_688 = new cjs.Shape();
									this.shape_688.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-17.1,-39.7,-17.1,496.4).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_688.setTransform(18,-91.7);

									this.shape_689 = new cjs.Shape();
									this.shape_689.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-17.1,-24.8,-17.1,511.3).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_689.setTransform(18,-91.7);

									this.shape_690 = new cjs.Shape();
									this.shape_690.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-17,-9.8,-17,526.3).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_690.setTransform(18,-91.7);

									this.shape_691 = new cjs.Shape();
									this.shape_691.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-17,5.1,-17,541.2).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_691.setTransform(18,-91.7);

									this.shape_692 = new cjs.Shape();
									this.shape_692.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-17,20,-17,556.1).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_692.setTransform(18,-91.7);

									this.shape_693 = new cjs.Shape();
									this.shape_693.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-16.9,34.9,-16.9,571).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_693.setTransform(18,-91.7);

									this.shape_694 = new cjs.Shape();
									this.shape_694.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-16.9,49.9,-16.9,586).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_694.setTransform(18,-91.7);

									this.shape_695 = new cjs.Shape();
									this.shape_695.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-16.9,64.8,-16.9,600.9).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_695.setTransform(18,-91.7);

									this.shape_696 = new cjs.Shape();
									this.shape_696.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-16.9,79.7,-16.9,615.8).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_696.setTransform(18,-91.7);

									this.shape_697 = new cjs.Shape();
									this.shape_697.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-16.8,94.6,-16.8,630.7).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_697.setTransform(18,-91.7);

									this.shape_698 = new cjs.Shape();
									this.shape_698.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-16.8,109.6,-16.8,645.7).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_698.setTransform(18,-91.7);

									this.shape_699 = new cjs.Shape();
									this.shape_699.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-16.8,124.5,-16.8,660.6).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_699.setTransform(18,-91.7);

									this.shape_700 = new cjs.Shape();
									this.shape_700.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-16.7,139.4,-16.7,675.5).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_700.setTransform(18,-91.7);

									this.shape_701 = new cjs.Shape();
									this.shape_701.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-16.7,154.3,-16.7,690.4).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_701.setTransform(18,-91.7);

									this.shape_702 = new cjs.Shape();
									this.shape_702.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-16.7,169.2,-16.7,705.3).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_702.setTransform(18,-91.7);

									this.shape_703 = new cjs.Shape();
									this.shape_703.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-16.6,184.2,-16.6,720.3).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_703.setTransform(18,-91.7);

									this.shape_704 = new cjs.Shape();
									this.shape_704.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-16.6,199.1,-16.6,735.2).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_704.setTransform(18,-91.7);

									this.shape_705 = new cjs.Shape();
									this.shape_705.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-16.6,214,-16.6,750.1).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_705.setTransform(18,-91.7);

									this.shape_706 = new cjs.Shape();
									this.shape_706.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-16.5,228.9,-16.5,765).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_706.setTransform(18,-91.7);

									this.shape_707 = new cjs.Shape();
									this.shape_707.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-16.5,243.8,-16.5,779.9).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_707.setTransform(18,-91.7);

									this.shape_708 = new cjs.Shape();
									this.shape_708.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-16.5,258.8,-16.5,794.9).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_708.setTransform(18,-91.7);

									this.shape_709 = new cjs.Shape();
									this.shape_709.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-16.4,273.7,-16.4,809.8).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_709.setTransform(18,-91.7);

									this.shape_710 = new cjs.Shape();
									this.shape_710.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],-16.4,288.6,-16.4,824.7).s().p("EgASBQcMAAAig2IAlAAMAAACg2g");
									this.shape_710.setTransform(18,-91.7);

									this.shape_711 = new cjs.Shape();
									this.shape_711.graphics.lf(["rgba(0,177,255,0.047)","#00B1FF","#00B1FF","rgba(0,0,0,0)"],[0,0.851,0.937,0.953],207.3,114.9,573.4,114.9).s().p("Eg26ACMIAAkXMBt1AAAIAAEXg");
									this.shape_711.setTransform(18,-91.7,1.464,0.143,90);

									this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_648}]}).to({state:[{t:this.shape_649}]},1).to({state:[{t:this.shape_650}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_652}]},1).to({state:[{t:this.shape_653}]},1).to({state:[{t:this.shape_654}]},1).to({state:[{t:this.shape_655}]},1).to({state:[{t:this.shape_656}]},1).to({state:[{t:this.shape_657}]},1).to({state:[{t:this.shape_658}]},1).to({state:[{t:this.shape_659}]},1).to({state:[{t:this.shape_660}]},1).to({state:[{t:this.shape_661}]},1).to({state:[{t:this.shape_662}]},1).to({state:[{t:this.shape_663}]},1).to({state:[{t:this.shape_664}]},1).to({state:[{t:this.shape_665}]},1).to({state:[{t:this.shape_666}]},1).to({state:[{t:this.shape_667}]},1).to({state:[{t:this.shape_668}]},1).to({state:[{t:this.shape_669}]},1).to({state:[{t:this.shape_670}]},1).to({state:[{t:this.shape_671}]},1).to({state:[{t:this.shape_672}]},1).to({state:[{t:this.shape_673}]},1).to({state:[{t:this.shape_674}]},1).to({state:[{t:this.shape_675}]},1).to({state:[{t:this.shape_676}]},1).to({state:[{t:this.shape_677}]},1).to({state:[{t:this.shape_678}]},1).to({state:[{t:this.shape_679}]},1).to({state:[{t:this.shape_680}]},1).to({state:[{t:this.shape_681}]},1).to({state:[{t:this.shape_682}]},1).to({state:[{t:this.shape_683}]},1).to({state:[{t:this.shape_684}]},1).to({state:[{t:this.shape_685}]},1).to({state:[{t:this.shape_686}]},1).to({state:[{t:this.shape_687}]},1).to({state:[{t:this.shape_688}]},1).to({state:[{t:this.shape_689}]},1).to({state:[{t:this.shape_690}]},1).to({state:[{t:this.shape_691}]},1).to({state:[{t:this.shape_692}]},1).to({state:[{t:this.shape_693}]},1).to({state:[{t:this.shape_694}]},1).to({state:[{t:this.shape_695}]},1).to({state:[{t:this.shape_696}]},1).to({state:[{t:this.shape_697}]},1).to({state:[{t:this.shape_698}]},1).to({state:[{t:this.shape_699}]},1).to({state:[{t:this.shape_700}]},1).to({state:[{t:this.shape_701}]},1).to({state:[{t:this.shape_702}]},1).to({state:[{t:this.shape_703}]},1).to({state:[{t:this.shape_704}]},1).to({state:[{t:this.shape_705}]},1).to({state:[{t:this.shape_706}]},1).to({state:[{t:this.shape_707}]},1).to({state:[{t:this.shape_708}]},1).to({state:[{t:this.shape_709}]},1).to({state:[{t:this.shape_710}]},1).to({state:[{t:this.shape_711}]},1).to({state:[]},1).to({state:[]},146).wait(62));

									// Layer 11
									this.shape_712 = new cjs.Shape();
									this.shape_712.graphics.lf(["rgba(255,196,0,0)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-641.6,90,-275.5,90).s().p("Eg26ACMIAAkXMBt1AAAIAAEXg");
									this.shape_712.setTransform(18,-91.8,1.464,0.143);

									this.shape_713 = new cjs.Shape();
									this.shape_713.graphics.lf(["rgba(255,196,0,0)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-919.9,12.9,-383.8,12.9).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_713.setTransform(18,-91.7);

									this.shape_714 = new cjs.Shape();
									this.shape_714.graphics.lf(["rgba(255,196,0,0)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-900.2,13,-364.1,13).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_714.setTransform(18,-91.7);

									this.shape_715 = new cjs.Shape();
									this.shape_715.graphics.lf(["rgba(255,196,0,0.004)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-880.4,13,-344.3,13).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_715.setTransform(18,-91.7);

									this.shape_716 = new cjs.Shape();
									this.shape_716.graphics.lf(["rgba(255,196,0,0.004)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-860.7,13.1,-324.6,13.1).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_716.setTransform(18,-91.7);

									this.shape_717 = new cjs.Shape();
									this.shape_717.graphics.lf(["rgba(255,196,0,0.004)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-841,13.2,-304.9,13.2).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_717.setTransform(18,-91.7);

									this.shape_718 = new cjs.Shape();
									this.shape_718.graphics.lf(["rgba(255,196,0,0.004)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-821.2,13.2,-285.1,13.2).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_718.setTransform(18,-91.7);

									this.shape_719 = new cjs.Shape();
									this.shape_719.graphics.lf(["rgba(255,196,0,0.004)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-801.5,13.3,-265.4,13.3).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_719.setTransform(18,-91.7);

									this.shape_720 = new cjs.Shape();
									this.shape_720.graphics.lf(["rgba(255,196,0,0.008)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-781.8,13.3,-245.7,13.3).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_720.setTransform(18,-91.7);

									this.shape_721 = new cjs.Shape();
									this.shape_721.graphics.lf(["rgba(255,196,0,0.008)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-762,13.4,-225.9,13.4).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_721.setTransform(18,-91.7);

									this.shape_722 = new cjs.Shape();
									this.shape_722.graphics.lf(["rgba(255,196,0,0.008)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-742.3,13.4,-206.2,13.4).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_722.setTransform(18,-91.7);

									this.shape_723 = new cjs.Shape();
									this.shape_723.graphics.lf(["rgba(255,196,0,0.008)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-722.6,13.5,-186.5,13.5).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_723.setTransform(18,-91.7);

									this.shape_724 = new cjs.Shape();
									this.shape_724.graphics.lf(["rgba(255,196,0,0.008)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-702.8,13.6,-166.7,13.6).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_724.setTransform(18,-91.7);

									this.shape_725 = new cjs.Shape();
									this.shape_725.graphics.lf(["rgba(255,196,0,0.012)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-683.1,13.6,-147,13.6).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_725.setTransform(18,-91.7);

									this.shape_726 = new cjs.Shape();
									this.shape_726.graphics.lf(["rgba(255,196,0,0.012)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-663.4,13.7,-127.3,13.7).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_726.setTransform(18,-91.7);

									this.shape_727 = new cjs.Shape();
									this.shape_727.graphics.lf(["rgba(255,196,0,0.012)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-643.6,13.7,-107.5,13.7).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_727.setTransform(18,-91.7);

									this.shape_728 = new cjs.Shape();
									this.shape_728.graphics.lf(["rgba(255,196,0,0.012)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-623.9,13.8,-87.8,13.8).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_728.setTransform(18,-91.7);

									this.shape_729 = new cjs.Shape();
									this.shape_729.graphics.lf(["rgba(255,196,0,0.016)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-604.2,13.8,-68.1,13.8).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_729.setTransform(18,-91.7);

									this.shape_730 = new cjs.Shape();
									this.shape_730.graphics.lf(["rgba(255,196,0,0.016)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-584.4,13.9,-48.3,13.9).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_730.setTransform(18,-91.7);

									this.shape_731 = new cjs.Shape();
									this.shape_731.graphics.lf(["rgba(255,196,0,0.016)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-564.7,13.9,-28.6,13.9).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_731.setTransform(18,-91.7);

									this.shape_732 = new cjs.Shape();
									this.shape_732.graphics.lf(["rgba(255,196,0,0.016)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-545,14,-8.9,14).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_732.setTransform(18,-91.7);

									this.shape_733 = new cjs.Shape();
									this.shape_733.graphics.lf(["rgba(255,196,0,0.016)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-525.2,14.1,10.9,14.1).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_733.setTransform(18,-91.7);

									this.shape_734 = new cjs.Shape();
									this.shape_734.graphics.lf(["rgba(255,196,0,0.02)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-505.5,14.1,30.6,14.1).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_734.setTransform(18,-91.7);

									this.shape_735 = new cjs.Shape();
									this.shape_735.graphics.lf(["rgba(255,196,0,0.02)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-485.8,14.2,50.3,14.2).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_735.setTransform(18,-91.7);

									this.shape_736 = new cjs.Shape();
									this.shape_736.graphics.lf(["rgba(255,196,0,0.02)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-466,14.2,70.1,14.2).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_736.setTransform(18,-91.7);

									this.shape_737 = new cjs.Shape();
									this.shape_737.graphics.lf(["rgba(255,196,0,0.02)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-446.3,14.3,89.8,14.3).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_737.setTransform(18,-91.7);

									this.shape_738 = new cjs.Shape();
									this.shape_738.graphics.lf(["rgba(255,196,0,0.02)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-426.6,14.3,109.5,14.3).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_738.setTransform(18,-91.7);

									this.shape_739 = new cjs.Shape();
									this.shape_739.graphics.lf(["rgba(255,196,0,0.024)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-406.8,14.4,129.3,14.4).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_739.setTransform(18,-91.7);

									this.shape_740 = new cjs.Shape();
									this.shape_740.graphics.lf(["rgba(255,196,0,0.024)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-387.1,14.5,149,14.5).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_740.setTransform(18,-91.7);

									this.shape_741 = new cjs.Shape();
									this.shape_741.graphics.lf(["rgba(255,196,0,0.024)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-367.4,14.5,168.7,14.5).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_741.setTransform(18,-91.7);

									this.shape_742 = new cjs.Shape();
									this.shape_742.graphics.lf(["rgba(255,196,0,0.024)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-347.6,14.6,188.5,14.6).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_742.setTransform(18,-91.7);

									this.shape_743 = new cjs.Shape();
									this.shape_743.graphics.lf(["rgba(255,196,0,0.024)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-327.9,14.6,208.2,14.6).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_743.setTransform(18,-91.7);

									this.shape_744 = new cjs.Shape();
									this.shape_744.graphics.lf(["rgba(255,196,0,0.027)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-308.2,14.7,227.9,14.7).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_744.setTransform(18,-91.7);

									this.shape_745 = new cjs.Shape();
									this.shape_745.graphics.lf(["rgba(255,196,0,0.027)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-288.5,14.7,247.6,14.7).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_745.setTransform(18,-91.7);

									this.shape_746 = new cjs.Shape();
									this.shape_746.graphics.lf(["rgba(255,196,0,0.027)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-268.7,14.8,267.4,14.8).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_746.setTransform(18,-91.7);

									this.shape_747 = new cjs.Shape();
									this.shape_747.graphics.lf(["rgba(255,196,0,0.027)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-249,14.8,287.1,14.8).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_747.setTransform(18,-91.7);

									this.shape_748 = new cjs.Shape();
									this.shape_748.graphics.lf(["rgba(255,196,0,0.027)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-229.3,14.9,306.8,14.9).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_748.setTransform(18,-91.7);

									this.shape_749 = new cjs.Shape();
									this.shape_749.graphics.lf(["rgba(255,196,0,0.031)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-209.5,15,326.6,15).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_749.setTransform(18,-91.7);

									this.shape_750 = new cjs.Shape();
									this.shape_750.graphics.lf(["rgba(255,196,0,0.031)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-189.8,15,346.3,15).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_750.setTransform(18,-91.7);

									this.shape_751 = new cjs.Shape();
									this.shape_751.graphics.lf(["rgba(255,196,0,0.031)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-170.1,15.1,366,15.1).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_751.setTransform(18,-91.7);

									this.shape_752 = new cjs.Shape();
									this.shape_752.graphics.lf(["rgba(255,196,0,0.031)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-150.3,15.1,385.8,15.1).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_752.setTransform(18,-91.7);

									this.shape_753 = new cjs.Shape();
									this.shape_753.graphics.lf(["rgba(255,196,0,0.031)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-130.6,15.2,405.5,15.2).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_753.setTransform(18,-91.7);

									this.shape_754 = new cjs.Shape();
									this.shape_754.graphics.lf(["rgba(255,196,0,0.035)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-110.9,15.2,425.2,15.2).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_754.setTransform(18,-91.7);

									this.shape_755 = new cjs.Shape();
									this.shape_755.graphics.lf(["rgba(255,196,0,0.035)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-91.1,15.3,445,15.3).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_755.setTransform(18,-91.7);

									this.shape_756 = new cjs.Shape();
									this.shape_756.graphics.lf(["rgba(255,196,0,0.035)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-71.4,15.4,464.7,15.4).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_756.setTransform(18,-91.7);

									this.shape_757 = new cjs.Shape();
									this.shape_757.graphics.lf(["rgba(255,196,0,0.035)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-51.7,15.4,484.4,15.4).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_757.setTransform(18,-91.7);

									this.shape_758 = new cjs.Shape();
									this.shape_758.graphics.lf(["rgba(255,196,0,0.035)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-31.9,15.5,504.2,15.5).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_758.setTransform(18,-91.7);

									this.shape_759 = new cjs.Shape();
									this.shape_759.graphics.lf(["rgba(255,196,0,0.039)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],-12.2,15.5,523.9,15.5).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_759.setTransform(18,-91.7);

									this.shape_760 = new cjs.Shape();
									this.shape_760.graphics.lf(["rgba(255,196,0,0.039)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],7.5,15.6,543.6,15.6).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_760.setTransform(18,-91.7);

									this.shape_761 = new cjs.Shape();
									this.shape_761.graphics.lf(["rgba(255,196,0,0.039)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],27.3,15.6,563.4,15.6).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_761.setTransform(18,-91.7);

									this.shape_762 = new cjs.Shape();
									this.shape_762.graphics.lf(["rgba(255,196,0,0.039)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],47,15.7,583.1,15.7).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_762.setTransform(18,-91.7);

									this.shape_763 = new cjs.Shape();
									this.shape_763.graphics.lf(["rgba(255,196,0,0.043)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],66.7,15.7,602.8,15.7).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_763.setTransform(18,-91.7);

									this.shape_764 = new cjs.Shape();
									this.shape_764.graphics.lf(["rgba(255,196,0,0.043)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],86.5,15.8,622.6,15.8).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_764.setTransform(18,-91.7);

									this.shape_765 = new cjs.Shape();
									this.shape_765.graphics.lf(["rgba(255,196,0,0.043)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],106.2,15.9,642.3,15.9).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_765.setTransform(18,-91.7);

									this.shape_766 = new cjs.Shape();
									this.shape_766.graphics.lf(["rgba(255,196,0,0.043)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],125.9,15.9,662,15.9).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_766.setTransform(18,-91.7);

									this.shape_767 = new cjs.Shape();
									this.shape_767.graphics.lf(["rgba(255,196,0,0.043)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],145.7,16,681.8,16).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_767.setTransform(18,-91.7);

									this.shape_768 = new cjs.Shape();
									this.shape_768.graphics.lf(["rgba(255,196,0,0.047)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],165.4,16,701.5,16).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_768.setTransform(18,-91.7);

									this.shape_769 = new cjs.Shape();
									this.shape_769.graphics.lf(["rgba(255,196,0,0.047)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],185.1,16.1,721.2,16.1).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_769.setTransform(18,-91.7);

									this.shape_770 = new cjs.Shape();
									this.shape_770.graphics.lf(["rgba(255,196,0,0.047)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],204.9,16.1,741,16.1).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_770.setTransform(18,-91.7);

									this.shape_771 = new cjs.Shape();
									this.shape_771.graphics.lf(["rgba(255,196,0,0.047)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],224.6,16.2,760.7,16.2).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_771.setTransform(18,-91.7);

									this.shape_772 = new cjs.Shape();
									this.shape_772.graphics.lf(["rgba(255,196,0,0.047)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],244.3,16.3,780.4,16.3).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_772.setTransform(18,-91.7);

									this.shape_773 = new cjs.Shape();
									this.shape_773.graphics.lf(["rgba(255,196,0,0.051)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],264.1,16.3,800.2,16.3).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_773.setTransform(18,-91.7);

									this.shape_774 = new cjs.Shape();
									this.shape_774.graphics.lf(["rgba(255,196,0,0.051)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],283.8,16.4,819.9,16.4).s().p("EhQbAAUIAAgnMCg2AAAIAAAng");
									this.shape_774.setTransform(18,-91.7);

									this.shape_775 = new cjs.Shape();
									this.shape_775.graphics.lf(["rgba(255,196,0,0.051)","#FFC400","#FFC400","rgba(0,0,0,0)"],[0,0.882,0.941,0.953],207.3,114.9,573.4,114.9).s().p("Eg26ACMIAAkXMBt1AAAIAAEXg");
									this.shape_775.setTransform(18,-91.8,1.464,0.143);

									this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_712}]}).to({state:[{t:this.shape_713}]},1).to({state:[{t:this.shape_714}]},1).to({state:[{t:this.shape_715}]},1).to({state:[{t:this.shape_716}]},1).to({state:[{t:this.shape_717}]},1).to({state:[{t:this.shape_718}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_720}]},1).to({state:[{t:this.shape_721}]},1).to({state:[{t:this.shape_722}]},1).to({state:[{t:this.shape_723}]},1).to({state:[{t:this.shape_724}]},1).to({state:[{t:this.shape_725}]},1).to({state:[{t:this.shape_726}]},1).to({state:[{t:this.shape_727}]},1).to({state:[{t:this.shape_728}]},1).to({state:[{t:this.shape_729}]},1).to({state:[{t:this.shape_730}]},1).to({state:[{t:this.shape_731}]},1).to({state:[{t:this.shape_732}]},1).to({state:[{t:this.shape_733}]},1).to({state:[{t:this.shape_734}]},1).to({state:[{t:this.shape_735}]},1).to({state:[{t:this.shape_736}]},1).to({state:[{t:this.shape_737}]},1).to({state:[{t:this.shape_738}]},1).to({state:[{t:this.shape_739}]},1).to({state:[{t:this.shape_740}]},1).to({state:[{t:this.shape_741}]},1).to({state:[{t:this.shape_742}]},1).to({state:[{t:this.shape_743}]},1).to({state:[{t:this.shape_744}]},1).to({state:[{t:this.shape_745}]},1).to({state:[{t:this.shape_746}]},1).to({state:[{t:this.shape_747}]},1).to({state:[{t:this.shape_748}]},1).to({state:[{t:this.shape_749}]},1).to({state:[{t:this.shape_750}]},1).to({state:[{t:this.shape_751}]},1).to({state:[{t:this.shape_752}]},1).to({state:[{t:this.shape_753}]},1).to({state:[{t:this.shape_754}]},1).to({state:[{t:this.shape_755}]},1).to({state:[{t:this.shape_756}]},1).to({state:[{t:this.shape_757}]},1).to({state:[{t:this.shape_758}]},1).to({state:[{t:this.shape_759}]},1).to({state:[{t:this.shape_760}]},1).to({state:[{t:this.shape_761}]},1).to({state:[{t:this.shape_762}]},1).to({state:[{t:this.shape_763}]},1).to({state:[{t:this.shape_764}]},1).to({state:[{t:this.shape_765}]},1).to({state:[{t:this.shape_766}]},1).to({state:[{t:this.shape_767}]},1).to({state:[{t:this.shape_768}]},1).to({state:[{t:this.shape_769}]},1).to({state:[{t:this.shape_770}]},1).to({state:[{t:this.shape_771}]},1).to({state:[{t:this.shape_772}]},1).to({state:[{t:this.shape_773}]},1).to({state:[{t:this.shape_774}]},1).to({state:[{t:this.shape_775}]},1).to({state:[]},1).to({state:[]},146).wait(62));

								}).prototype = p = new cjs.MovieClip();
								p.nominalBounds = new cjs.Rectangle(-496.8,-606.5,1029.6,1029.6);


								(lib.Tween24 = function(mode,startPosition,loop) {
									this.initialize(mode,startPosition,loop,{});

									// Layer 1
									this.instance = new lib.van("synched",4);
									this.instance.setTransform(52.7,1,1,1,0,0,0,0,1);

									this.shape = new cjs.Shape();
									this.shape.graphics.f().s("#000000").ss(3,1,1).p("AiGikIENgKIAKFdIkhAAg");
									this.shape.setTransform(119.6,-40.7);

									this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(6));

								}).prototype = p = new cjs.MovieClip();
								p.nominalBounds = new cjs.Rectangle(-190.9,-76.3,382.8,154.6);


								(lib.Tween23 = function() {
									this.initialize();

									// Layer 1
									this.instance = new lib.van("synched",0);
									this.instance.setTransform(52.7,1,1,1,0,0,0,0,1);

									this.shape = new cjs.Shape();
									this.shape.graphics.f().s("#000000").ss(3,1,1).p("AiGikIENgKIAKFdIkhAAg");
									this.shape.setTransform(119.6,-40.7);

									this.shape_1 = new cjs.Shape();
									this.shape_1.graphics.f("#9BD5DB").s().p("AiQCvIAKlTIENgKIAKFdg");
									this.shape_1.setTransform(119.6,-40.7);

									this.addChild(this.shape_1,this.shape,this.instance);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-190.9,-76.3,382.8,154.6);


								(lib.Symbol20 = function(mode,startPosition,loop) {
									this.initialize(mode,startPosition,loop,{});

									// Layer 1
									this.instance = new lib.Tween22("synched",0);
									this.instance.setTransform(0,0,0.08,0.08);
									this.instance.alpha = 0;

									this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1,alpha:1},10,cjs.Ease.get(-0.59)).to({scaleX:1,scaleY:1},5).wait(1));

								}).prototype = p = new cjs.MovieClip();
								p.nominalBounds = new cjs.Rectangle(-8.2,-5.6,16.6,10.6);


								(lib.Symbol19 = function(mode,startPosition,loop) {
									this.initialize(mode,startPosition,loop,{});

									// Symbol 18
									this.instance = new lib.Symbol18("synched",0);
									this.instance.setTransform(94.5,44.6);
									this.instance.alpha = 0;
									this.instance._off = true;

									this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({x:36,alpha:1},8).wait(9));

									// Layer 3
									this.instance_1 = new lib.Tween18("synched",0);
									this.instance_1.setTransform(-15.2,-74.5,1,0.008,0,0,0,1.1,-61.9);
									this.instance_1.alpha = 0;

									this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-64.7,scaleY:1.06,alpha:1},8,cjs.Ease.get(0.64)).to({scaleY:0.97},4).to({scaleY:1},4).wait(17));

								}).prototype = p = new cjs.MovieClip();
								p.nominalBounds = new cjs.Rectangle(-81.7,-74.5,130.8,1);


								(lib.Symbol16 = function(mode,startPosition,loop) {
									this.initialize(mode,startPosition,loop,{});

									// Layer 1
									this.instance = new lib.Symbol17();
									this.instance.setTransform(0,0,1,1,0,0,0,86,86);

									this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-1.2,y:0.4},0).wait(1).to({x:-2.2,y:0.6},0).wait(1).to({x:-3,y:0.9},0).wait(1).to({x:-3.9,y:1.3},0).wait(1).to({x:-4.8,y:1.7},0).wait(1).to({x:-5.6,y:2.2},0).wait(1).to({x:-6.4,y:2.7},0).wait(1).to({x:-7.2,y:3.4},0).wait(1).to({x:-7.9,y:4.1},0).wait(1).to({x:-8.5,y:4.9},0).wait(1).to({x:-9,y:5.8},0).wait(1).to({x:-9.4,y:6.7},0).wait(1).to({x:-9.6,y:7.7},0).wait(1).to({x:-9.7,y:8.7},0).wait(1).to({y:9.7},0).wait(1).to({x:-9.6,y:10.7},0).wait(1).to({x:-9.4,y:11.7},0).wait(1).to({x:-9,y:12.7},0).wait(1).to({x:-8.6,y:13.6},0).wait(1).to({x:-8.1,y:14.5},0).wait(1).to({x:-7.6,y:15.3},0).wait(1).to({x:-7,y:16.1},0).wait(1).to({x:-6.3,y:16.8},0).wait(1).to({x:-5.5,y:17.5},0).wait(1).to({x:-4.7,y:18.1},0).wait(1).to({x:-3.8,y:18.6},0).wait(1).to({x:-2.9,y:19},0).wait(1).to({x:-2,y:19.3},0).wait(1).to({x:-1.1,y:19.5},0).wait(1).to({x:0,y:19.4},0).wait(1).to({x:1,y:19.3},0).wait(1).to({x:1.9,y:19},0).wait(1).to({x:2.9,y:18.7},0).wait(1).to({x:3.7,y:18.2},0).wait(1).to({x:4.5,y:17.7},0).wait(1).to({x:5.2,y:17},0).wait(1).to({x:5.9,y:16.3},0).wait(1).to({x:6.5,y:15.6},0).wait(1).to({x:7,y:14.7},0).wait(1).to({x:7.4,y:13.9},0).wait(1).to({x:7.8,y:13},0).wait(1).to({x:8.1,y:12},0).wait(1).to({x:8.3,y:11.1},0).wait(1).to({x:8.4,y:10.1},0).wait(1).to({x:8.5,y:9.2},0).wait(1).to({y:8.2},0).wait(1).to({x:8.4,y:7.2},0).wait(1).to({x:8.1,y:6.3},0).wait(1).to({x:7.7,y:5.4},0).wait(1).to({x:7.2,y:4.6},0).wait(1).to({x:6.7,y:3.8},0).wait(1).to({x:6,y:3.1},0).wait(1).to({x:5.3,y:2.4},0).wait(1).to({x:4.5,y:1.8},0).wait(1).to({x:3.7,y:1.3},0).wait(1).to({x:2.8,y:0.8},0).wait(1).to({x:1.9,y:0.5},0).wait(1).to({x:1,y:0.2},0).wait(1).to({x:0,y:0},0).wait(1));

								}).prototype = p = new cjs.MovieClip();
								p.nominalBounds = new cjs.Rectangle(-86,-86,172,172);


								(lib.Symbol10 = function(mode,startPosition,loop) {
									this.initialize(mode,startPosition,loop,{});

									// Layer 2
									this.instance = new lib.Symbol11();
									this.instance.setTransform(-386.1,-40,1,1,0,0,0,32.7,21.9);

									this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-377.2,y:-49.8},0).wait(1).to({x:-367.7,y:-58.9},0).wait(1).to({x:-357.5,y:-67.2},0).wait(1).to({x:-346.6,y:-74.7},0).wait(1).to({x:-335.1,y:-81.2},0).wait(1).to({x:-323.1,y:-86.7},0).wait(1).to({x:-310.7,y:-91.1},0).wait(1).to({x:-297.9,y:-94.4},0).wait(1).to({x:-284.9,y:-96.6},0).wait(1).to({x:-271.7,y:-97.8},0).wait(1).to({x:-258.5,y:-98},0).wait(1).to({x:-245.4,y:-97.4},0).wait(1).to({x:-232.2,y:-95.9},0).wait(1).to({x:-219.2,y:-93.8},0).wait(1).to({x:-206.3,y:-91},0).wait(1).to({x:-193.6,y:-87.6},0).wait(1).to({x:-181,y:-83.7},0).wait(1).to({x:-168.5,y:-79.4},0).wait(1).to({x:-156.2,y:-74.6},0).wait(1).to({x:-144,y:-69.5},0).wait(1).to({x:-132,y:-64},0).wait(1).to({x:-125.8,y:-61},0).wait(1).to({x:-119.5,y:-58},0).wait(1).to({x:-113.3,y:-55},0).wait(1).to({x:-107.1,y:-52},0).wait(1).to({x:-100.8,y:-49},0).wait(1).to({x:-94.6,y:-46},0).wait(1).to({x:-88.3,y:-43},0).wait(1).to({x:-82.1,y:-40},0).to({_off:true},1).wait(60));

									// Layer 4
									this.instance_1 = new lib.Symbol13();
									this.instance_1.setTransform(-386.1,-40,1,1,0,0,0,32.7,21.9);
									this.instance_1._off = true;

									this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).wait(1).to({x:-376.9,y:-48.6},0).wait(1).to({x:-367.3,y:-56.7},0).wait(1).to({x:-357.2,y:-64.3},0).wait(1).to({x:-346.6,y:-71.2},0).wait(1).to({x:-335.6,y:-77.4},0).wait(1).to({x:-324.2,y:-82.8},0).wait(1).to({x:-312.5,y:-87.5},0).wait(1).to({x:-300.5,y:-91.3},0).wait(1).to({x:-288.2,y:-94.2},0).wait(1).to({x:-275.8,y:-96.2},0).wait(1).to({x:-263.2,y:-97.4},0).wait(1).to({x:-250.6,y:-97.8},0).wait(1).to({x:-238,y:-97.4},0).wait(1).to({x:-225.5,y:-96.2},0).wait(1).to({x:-213,y:-94.4},0).wait(1).to({x:-200.6,y:-92},0).wait(1).to({x:-188.4,y:-88.9},0).wait(1).to({x:-176.3,y:-85.4},0).wait(1).to({x:-164.3,y:-81.4},0).wait(1).to({x:-152.5,y:-76.9},0).wait(1).to({x:-140.9,y:-72.1},0).wait(1).to({x:-133.5,y:-68,alpha:0.875},0).wait(1).to({x:-126.2,y:-64,alpha:0.75},0).wait(1).to({x:-118.8,y:-60,alpha:0.625},0).wait(1).to({x:-111.5,y:-56,alpha:0.5},0).wait(1).to({x:-104.1,y:-52,alpha:0.375},0).wait(1).to({x:-96.8,y:-48,alpha:0.25},0).wait(1).to({x:-89.5,y:-44,alpha:0.125},0).wait(1).to({x:-82.1,y:-40,alpha:0},0).to({_off:true},1).wait(30));

									// Layer 3
									this.instance_2 = new lib.Symbol12();
									this.instance_2.setTransform(-386.2,-40,1,1,0,0,0,32.7,21.9);
									this.instance_2._off = true;

									this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60).to({_off:false},0).wait(1).to({x:-376.7,y:-49.2},0).wait(1).to({x:-366.8,y:-57.8},0).wait(1).to({x:-356.4,y:-65.8},0).wait(1).to({x:-345.5,y:-73.1},0).wait(1).to({x:-334.1,y:-79.7},0).wait(1).to({x:-322.3,y:-85.4},0).wait(1).to({x:-310,y:-90.2},0).wait(1).to({x:-297.5,y:-94},0).wait(1).to({x:-284.6,y:-96.9},0).wait(1).to({x:-271.6,y:-98.7},0).wait(1).to({x:-258.5,y:-99.6},0).wait(1).to({x:-245.4},0).wait(1).to({x:-232.3,y:-98.7},0).wait(1).to({x:-219.2,y:-97.1},0).wait(1).to({x:-206.3,y:-94.6},0).wait(1).to({x:-193.6,y:-91.5},0).wait(1).to({x:-181,y:-87.8},0).wait(1).to({x:-168.5,y:-83.6},0).wait(1).to({x:-156.3,y:-78.8},0).wait(1).to({x:-144.2,y:-73.6},0).wait(1).to({x:-132.3,y:-68},0).wait(1).to({x:-126,y:-64.5,alpha:0.875},0).wait(1).to({x:-119.8,y:-61,alpha:0.75},0).wait(1).to({x:-113.5,y:-57.5,alpha:0.625},0).wait(1).to({x:-107.2,y:-54,alpha:0.5},0).wait(1).to({x:-101,y:-50.5,alpha:0.375},0).wait(1).to({x:-94.7,y:-47,alpha:0.25},0).wait(1).to({x:-88.4,y:-43.5,alpha:0.125},0).wait(1).to({x:-82.2,y:-40,alpha:0},0).wait(1));

								}).prototype = p = new cjs.MovieClip();
								p.nominalBounds = new cjs.Rectangle(-418.8,-61.9,65.5,43.8);


								(lib.Symbol6 = function(mode,startPosition,loop) {
									this.initialize(mode,startPosition,loop,{});

									// Layer 1
									this.instance = new lib.Tween7("single",0);
									this.instance.setTransform(0,0,0.643,0.643);
									this.instance.filters = [new cjs.ColorFilter(0.09, 0.09, 0.09, 1, 0, 92.82, 232.05, 0)];
									this.instance.cache(-136,-138,273,276);

									this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:2.1,y:0.8},0).wait(1).to({x:4.2,y:1.5},0).wait(1).to({x:6.3,y:2.1},0).wait(1).to({x:8.4,y:2.7},0).wait(1).to({x:10.6,y:3.1},0).wait(1).to({x:12.8,y:3.4},0).wait(1).to({x:15,y:3.5},0).wait(1).to({x:17.2,y:3.6},0).wait(1).to({x:19.4},0).wait(1).to({x:21.6,y:3.5},0).wait(1).to({x:23.8,y:3.3},0).wait(1).to({x:26,y:2.9},0).wait(1).to({x:28.1,y:2.5},0).wait(1).to({x:30.3,y:2},0).wait(1).to({x:32.4,y:1.4},0).wait(1).to({x:34.4,y:0.8},0).wait(1).to({x:36.6,y:0},0).wait(1).to({x:34.5,y:-1},0).wait(1).to({x:32.4,y:-1.9},0).wait(1).to({x:30.4,y:-2.7},0).wait(1).to({x:28.2,y:-3.4},0).wait(1).to({x:26.1,y:-3.9},0).wait(1).to({x:23.9,y:-4.4},0).wait(1).to({x:21.6,y:-4.7},0).wait(1).to({x:19.4,y:-4.9},0).wait(1).to({x:17.1},0).wait(1).to({x:14.9,y:-4.8},0).wait(1).to({x:12.7,y:-4.5},0).wait(1).to({x:10.5,y:-4.1},0).wait(1).to({x:8.3,y:-3.5},0).wait(1).to({x:6.2,y:-2.9},0).wait(1).to({x:4.1,y:-2},0).wait(1).to({x:2.1,y:-1.1},0).wait(1).to({x:0,y:0},0).wait(1));

								}).prototype = p = new cjs.MovieClip();
								p.nominalBounds = new cjs.Rectangle(-86.5,-87.4,173.1,174.9);


								(lib.Symbol5 = function(mode,startPosition,loop) {
									this.initialize(mode,startPosition,loop,{});

									// Layer 1
									this.instance = new lib.Tween6("single",0);
									this.instance.setTransform(0,0,1.718,1.718);
									this.instance.filters = [new cjs.ColorFilter(0.35, 0.35, 0.35, 1, 165.75, 165.75, 0, 0)];
									this.instance.cache(-75,-77,151,154);

									this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-1.2,y:0.7},0).wait(1).to({x:-2.3,y:1.3},0).wait(1).to({x:-3.5,y:1.9},0).wait(1).to({x:-4.8,y:2.4},0).wait(1).to({x:-6.1,y:2.9},0).wait(1).to({x:-7.4,y:3.2},0).wait(1).to({x:-8.7,y:3.4},0).wait(1).to({x:-10,y:3.5},0).wait(1).to({x:-11.4},0).wait(1).to({x:-12.7,y:3.3},0).wait(1).to({x:-14,y:3},0).wait(1).to({x:-15.3,y:2.6},0).wait(1).to({x:-16.6,y:2.1},0).wait(1).to({x:-17.7,y:1.5},0).wait(1).to({x:-18.9,y:0.8},0).wait(1).to({x:-20,y:0},0).wait(1).to({x:-18.8,y:-0.9},0).wait(1).to({x:-17.7,y:-1.6},0).wait(1).to({x:-16.5,y:-2.2},0).wait(1).to({x:-15.2,y:-2.8},0).wait(1).to({x:-13.9,y:-3.3},0).wait(1).to({x:-12.6,y:-3.7},0).wait(1).to({x:-11.3,y:-4},0).wait(1).to({x:-9.9,y:-4.2},0).wait(1).to({x:-8.5},0).wait(1).to({x:-7.2,y:-4},0).wait(1).to({x:-5.8,y:-3.7},0).wait(1).to({x:-4.5,y:-3.2},0).wait(1).to({x:-3.3,y:-2.6},0).wait(1).to({x:-2.1,y:-1.8},0).wait(1).to({x:-1,y:-1},0).wait(1).to({x:0,y:0},0).wait(1));

								}).prototype = p = new cjs.MovieClip();
								p.nominalBounds = new cjs.Rectangle(-125.8,-129,251.7,258.1);


								(lib.Symbol4 = function(mode,startPosition,loop) {
									this.initialize(mode,startPosition,loop,{});

									// Layer 1
									this.instance = new lib.Tween3("single",0);
									this.instance.setTransform(1,-0.2,1.685,1.685);
									this.instance.filters = [new cjs.ColorFilter(0.35, 0.35, 0.35, 1, 66.3, 0, 132.6, 0)];
									this.instance.cache(-60,-54,119,108);

									this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-0.5,regY:0.1,x:0.8,y:-0.9},0).wait(1).to({x:1.5,y:-1.6},0).wait(1).to({x:2.3,y:-2.2},0).wait(1).to({x:3.1,y:-2.8},0).wait(1).to({x:4,y:-3.3},0).wait(1).to({x:5,y:-3.7},0).wait(1).to({x:6,y:-4},0).wait(1).to({x:7,y:-4.1},0).wait(1).to({x:8,y:-4},0).wait(1).to({x:9,y:-3.9},0).wait(1).to({x:10,y:-3.5},0).wait(1).to({x:11,y:-3.1},0).wait(1).to({x:11.9,y:-2.6},0).wait(1).to({x:12.7,y:-2.1},0).wait(1).to({x:13.5,y:-1.4},0).wait(1).to({x:14.3,y:-0.8},0).wait(1).to({x:15.1,y:-0.1},0).wait(1).to({x:14.3,y:0.6},0).wait(1).to({x:13.6,y:1.2},0).wait(1).to({x:12.8,y:1.8},0).wait(1).to({x:11.9,y:2.4},0).wait(1).to({x:11,y:2.8},0).wait(1).to({x:10.1,y:3.2},0).wait(1).to({x:9.1,y:3.4},0).wait(1).to({x:8.1,y:3.6},0).wait(1).to({x:7.1},0).wait(1).to({x:6.1,y:3.4},0).wait(1).to({x:5.1,y:3.2},0).wait(1).to({x:4.2,y:2.8},0).wait(1).to({x:3.3,y:2.4},0).wait(1).to({x:2.4,y:1.8},0).wait(1).to({x:1.6,y:1.2},0).wait(1).to({x:0.9,y:0.6},0).wait(1).to({x:0.1,y:-0.1},0).wait(1));

								}).prototype = p = new cjs.MovieClip();
								p.nominalBounds = new cjs.Rectangle(-96.9,-88,194,175.9);


								(lib.Symbol3 = function(mode,startPosition,loop) {
									this.initialize(mode,startPosition,loop,{});

									// Layer 1
									this.instance = new lib.Tween12("synched",0);
									this.instance.setTransform(0,0,1.128,1.128);

									this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:1.3,y:-1.5},0).wait(1).to({x:3.1,y:-2.6},0).wait(1).to({x:5,y:-3.2},0).wait(1).to({x:7,y:-3.3},0).wait(1).to({x:9,y:-2.8},0).wait(1).to({x:10.8,y:-1.9},0).wait(1).to({x:12.3,y:-0.5},0).wait(1).to({x:13.7,y:1.1},0).wait(1).to({x:14.8,y:2.8},0).wait(1).to({x:15.8,y:4.6},0).wait(1).to({x:16.7,y:6.5},0).wait(1).to({x:17.4,y:8.4},0).wait(1).to({x:18.1,y:10.3},0).wait(1).to({x:18.6,y:12.3},0).wait(1).to({x:19,y:14.4},0).wait(1).to({x:19.2,y:16.4},0).wait(1).to({y:18.4},0).wait(1).to({x:17.4,y:19},0).wait(1).to({x:15.4,y:19.3},0).wait(1).to({x:13.4,y:19.5},0).wait(1).to({x:11.4,y:19.3},0).wait(1).to({x:9.7,y:18.7},0).wait(1).to({x:7.9,y:17.7},0).wait(1).to({x:6.3,y:16.4},0).wait(1).to({x:4.9,y:15},0).wait(1).to({x:3.9,y:13.3},0).wait(1).to({x:3.2,y:11.5},0).wait(1).to({x:2.6,y:9.6},0).wait(1).to({x:2,y:7.7},0).wait(1).to({x:1.4,y:5.7},0).wait(1).to({x:0.9,y:3.8},0).wait(1).to({x:0.4,y:1.9},0).wait(1).to({x:0,y:0},0).wait(1));

								}).prototype = p = new cjs.MovieClip();
								p.nominalBounds = new cjs.Rectangle(-58,-57.3,116.1,114.6);


								(lib.Symbol2 = function(mode,startPosition,loop) {
									this.initialize(mode,startPosition,loop,{});

									// Layer 1
									this.instance = new lib.Tween13("single",0);
									this.instance.setTransform(0,0.1,1.003,1.003);

									this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:0.8,y:0.8},0).wait(1).to({x:-1,y:2.3},0).wait(1).to({x:-2.8,y:3.6},0).wait(1).to({x:-4.6,y:5},0).wait(1).to({x:-6.4,y:6.3},0).wait(1).to({x:-8.2,y:7.6},0).wait(1).to({x:-10.1,y:9},0).wait(1).to({x:-11.9,y:10.3},0).wait(1).to({x:-13.7,y:11.7},0).wait(1).to({x:-15.4,y:13.1},0).wait(1).to({x:-17.2,y:14.6},0).wait(1).to({x:-18.9,y:16.1},0).wait(1).to({x:-20.5,y:17.6},0).wait(1).to({x:-22.1,y:19.2},0).wait(1).to({x:-23.5,y:21},0).wait(1).to({x:-24.6,y:22.9},0).wait(1).to({x:-24.9,y:25.2},0).wait(1).to({x:-26.4,y:24.3},0).wait(1).to({x:-24.9,y:22.6},0).wait(1).to({x:-23.2,y:21.1},0).wait(1).to({x:-21.4,y:19.7},0).wait(1).to({x:-19.6,y:18.3},0).wait(1).to({x:-17.8,y:16.9},0).wait(1).to({x:-16,y:15.6},0).wait(1).to({x:-14.2,y:14.2},0).wait(1).to({x:-12.4,y:12.8},0).wait(1).to({x:-10.6,y:11.5},0).wait(1).to({x:-8.8,y:10},0).wait(1).to({x:-7,y:8.6},0).wait(1).to({x:-5.3,y:7.1},0).wait(1).to({x:-3.6,y:5.6},0).wait(1).to({x:-2,y:4},0).wait(1).to({x:-0.7,y:2.2},0).wait(1).to({x:0,y:0.1},0).wait(1));

								}).prototype = p = new cjs.MovieClip();
								p.nominalBounds = new cjs.Rectangle(-116.6,-115,233.2,230.1);


								(lib.star = function() {
									this.initialize();

									// Layer 1
									this.instance = new lib.Tween11("synched",0);

									this.addChild(this.instance);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-18.1,-16.8,36.2,33.7);


								(lib.phone = function() {
									this.initialize();

									// Layer 1
									this.instance = new lib.Symbol14();
									this.instance.setTransform(0,152.2);
									this.instance.filters = [new cjs.BlurFilter(40, 5, 3)];
									this.instance.cache(-29,-4,57,8);

									this.instance_1 = new lib.iphone6s();
									this.instance_1.setTransform(-60.2,-121.3,0.413,0.413);

									this.addChild(this.instance_1,this.instance);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-80.2,-121.3,164,286);


								(lib.bubbling = function(mode,startPosition,loop) {
									this.initialize(mode,startPosition,loop,{});

									// Layer 2
									this.instance = new lib.Tween32("synched",0);
									this.instance.setTransform(-1.3,0.3,0.032,0.05);

									this.instance_1 = new lib.Tween33("synched",0);
									this.instance_1.setTransform(-21.4,0.1,1.494,1);
									this.instance_1._off = true;

									this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:1.49,scaleY:1,x:-21.4,y:0.1},5,cjs.Ease.get(-0.54)).wait(6));
									this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},5,cjs.Ease.get(-0.54)).to({scaleX:0.21,scaleY:0.28,x:-62.9,y:1.4},4,cjs.Ease.get(0.5)).to({_off:true},1).wait(1));

									// Layer 3
									this.instance_2 = new lib.Tween34("synched",0);
									this.instance_2.setTransform(0.3,0.8,0.046,0.034);

									this.instance_3 = new lib.Tween35("synched",0);
									this.instance_3.setTransform(-8,20,1,1.617);
									this.instance_3._off = true;

									this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,scaleX:1,scaleY:1.62,x:-8,y:20},5,cjs.Ease.get(-0.54)).wait(6));
									this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},5,cjs.Ease.get(-0.54)).to({scaleX:0.26,scaleY:0.19,x:-34.3,y:48.4},4,cjs.Ease.get(0.5)).to({_off:true},1).wait(1));

									// Layer 4
									this.instance_4 = new lib.Tween36("synched",0);
									this.instance_4.setTransform(0.8,-0.2,0.036,0.041);

									this.instance_5 = new lib.Tween37("synched",0);
									this.instance_5.setTransform(17.8,11.2,2.022,0.991);
									this.instance_5._off = true;

									this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,scaleX:2.02,scaleY:0.99,x:17.8,y:11.2},5,cjs.Ease.get(-0.54)).wait(6));
									this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:false},5,cjs.Ease.get(-0.54)).to({scaleX:0.2,scaleY:0.23,x:41.3,y:43.1},4,cjs.Ease.get(0.5)).to({_off:true},1).wait(1));

									// Layer 5
									this.instance_6 = new lib.Tween38("synched",0);
									this.instance_6.setTransform(-0.2,-1.8,0.036,0.04);

									this.instance_7 = new lib.Tween39("synched",0);
									this.instance_7.setTransform(17.8,-13.6,1.766,1);
									this.instance_7._off = true;

									this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true,scaleX:1.77,scaleY:1,x:17.8,y:-13.6},5,cjs.Ease.get(-0.54)).wait(6));
									this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:false},5,cjs.Ease.get(-0.54)).to({scaleX:0.2,scaleY:0.23,x:46.4,y:-34.2},4,cjs.Ease.get(0.5)).to({_off:true},1).wait(1));

									// Layer 6
									this.instance_8 = new lib.Tween40("synched",0);
									this.instance_8.setTransform(-1.3,0.7,0.047,0.034);

									this.instance_9 = new lib.Tween41("synched",0);
									this.instance_9.setTransform(-8.2,-20.6,1,1.705);
									this.instance_9._off = true;

									this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true,scaleX:1,scaleY:1.71,x:-8.2,y:-20.6},5,cjs.Ease.get(-0.54)).wait(6));
									this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:false},5,cjs.Ease.get(-0.54)).to({scaleX:0.2,scaleY:0.17,x:-24.5,y:-52.7},4,cjs.Ease.get(0.5)).to({_off:true},1).wait(1));

								}).prototype = p = new cjs.MovieClip();
								p.nominalBounds = new cjs.Rectangle(-1.6,-2.1,2.7,3.1);


								(lib.arrow = function(mode,startPosition,loop) {
									this.initialize(mode,startPosition,loop,{});

									// Layer 1
									this.instance = new lib.Tween8("synched",0);
									this.instance.setTransform(-25.5,0);

									this.timeline.addTween(cjs.Tween.get(this.instance).to({x:49.5},15).to({x:94.5,alpha:0},9).wait(1));

								}).prototype = p = new cjs.MovieClip();
								p.nominalBounds = new cjs.Rectangle(-45,-11.4,39.2,23);


								(lib._1copy = function(mode,startPosition,loop) {
									this.initialize(mode,startPosition,loop,{});

									// people4.png
									this.instance = new lib.Tween13("synched",0);
									this.instance.setTransform(-125.5,-85,0.579,0.579);
									this.instance.alpha = 0;

									this.instance_1 = new lib.Symbol2("synched",0);
									this.instance_1.setTransform(25.3,12.9);

									this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},15).to({state:[{t:this.instance_1}]},1).wait(71));
									this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:25.3,y:13,alpha:1,mode:"single"},15).to({_off:true},1).wait(71));

									// people_1.png
									this.instance_2 = new lib.Tween4("synched",0);
									this.instance_2.setTransform(-126,-80,0.577,0.577);

									this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.77,scaleY:0.77,x:-55.3,y:-34.8,alpha:0},7).to({scaleX:1,scaleY:1,x:-88,y:49.2},8).to({_off:true},1).wait(71));

									// person.png
									this.instance_3 = new lib.Tween12("synched",0);
									this.instance_3.setTransform(-27.3,-138.7,0.651,0.651);
									this.instance_3.alpha = 0;

									this.instance_4 = new lib.Symbol3("synched",0);
									this.instance_4.setTransform(239.4,-5.7);

									this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},15).to({state:[{t:this.instance_4}]},1).wait(71));
									this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.13,scaleY:1.13,x:239.4,y:-5.7,alpha:1},15).to({_off:true},1).wait(71));

									// people2.png
									this.instance_5 = new lib.Tween5("synched",0);
									this.instance_5.setTransform(-28.2,-136.8,0.577,0.577);

									this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.77,scaleY:0.77,x:98.5,y:-75.5,alpha:0},7).to({scaleX:1,scaleY:1,x:111.5,y:6.9},8).to({_off:true},1).wait(71));

									// pinkCircle.png
									this.instance_6 = new lib.Tween6("synched",0);
									this.instance_6.setTransform(-72.3,-24.6,0.577,0.577);

									this.instance_7 = new lib.Symbol5("synched",0);
									this.instance_7.setTransform(-65.3,-64.8);

									this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6}]},15).to({state:[{t:this.instance_7}]},1).wait(71));
									this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.72,scaleY:1.72,x:-65.3,y:-64.9,mode:"single"},15).to({_off:true},1).wait(71));

									// orangeCircle.png
									this.instance_8 = new lib.Tween3("synched",0);
									this.instance_8.setTransform(-6.6,-54.4);

									this.instance_9 = new lib.Symbol4("synched",0);
									this.instance_9.setTransform(182.6,-52.7);

									this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_8}]},15).to({state:[{t:this.instance_9}]},1).wait(71));
									this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1.69,scaleY:1.69,x:183.6,y:-53,mode:"single"},15).to({_off:true},1).wait(71));

									// lgGreen.png
									this.instance_10 = new lib.Tween7("synched",0);
									this.instance_10.setTransform(-82.7,-98.2,0.577,0.577);

									this.instance_11 = new lib.Symbol6("synched",0);
									this.instance_11.setTransform(76,113.1);

									this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_10}]},15).to({state:[{t:this.instance_11}]},1).wait(71));
									this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:0.64,scaleY:0.64,x:76,y:113.1,mode:"single"},15).to({_off:true},1).wait(71));

								}).prototype = p = new cjs.MovieClip();
								p.nominalBounds = new cjs.Rectangle(-192.7,-176.6,243.2,195.4);


								(lib._1 = function(mode,startPosition,loop) {
									this.initialize(mode,startPosition,loop,{});

									// text
									this.instance = new lib.Tween2("synched",0);
									this.instance.setTransform(520.9,7.7,1,1.091,0,23.6,0);
									this.instance._off = true;

									this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).to({scaleY:1.05,skewX:17,x:257.4},7).to({scaleY:1.01,skewX:-9.2,x:242.4},3).to({scaleY:1,skewX:0,x:247.4},3).wait(13).to({startPosition:0},0).to({x:123,y:-54.5},9).wait(6));

									// orangeCircle.png
									this.instance_1 = new lib.Tween3copy("synched",0);
									this.instance_1.setTransform(117.8,7.8,0.3,0.3);
									this.instance_1.alpha = 0;
									this.instance_1._off = true;

									this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,rotation:360,alpha:1},10,cjs.Ease.get(0.56)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(0.41)).wait(19).to({startPosition:0},0).to({x:-6.6,y:-54.4},9).wait(6));

									// orangeCircle.png
									this.instance_2 = new lib.Tween3("synched",0);
									this.instance_2.setTransform(117.8,7.8,0.3,0.3);
									this.instance_2.alpha = 0;
									this.instance_2._off = true;

									this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,rotation:360,alpha:1},10,cjs.Ease.get(0.56)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(0.41)).wait(19).to({startPosition:0},0).to({x:-6.6,y:-54.4},9).wait(6));

									// people_1.png
									this.instance_3 = new lib.Tween4("synched",0);
									this.instance_3.setTransform(-172,4.5,0.3,0.3);
									this.instance_3.alpha = 0;
									this.instance_3._off = true;

									this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:-67.7,y:-1.8,alpha:1},10,cjs.Ease.get(0.56)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(0.41)).wait(24).to({startPosition:0},0).to({scaleX:0.58,scaleY:0.58,x:-126,y:-80},9).wait(6));

									// people2.png
									this.instance_4 = new lib.Tween5("synched",0);
									this.instance_4.setTransform(147.1,-193,0.3,0.3);
									this.instance_4.alpha = 0;
									this.instance_4._off = true;

									this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:101.7,y:-100.3,alpha:1},10,cjs.Ease.get(0.56)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(0.41)).wait(29).to({startPosition:0},0).to({scaleX:0.58,scaleY:0.58,x:-28.2,y:-136.8},9).wait(6));

									// pinkCircle.png
									this.instance_5 = new lib.Tween6("synched",0);
									this.instance_5.setTransform(97.9,153.2,0.3,0.3);
									this.instance_5.alpha = 0;
									this.instance_5._off = true;

									this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:25.2,y:94.2,alpha:1},10,cjs.Ease.get(0.56)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(0.41)).wait(34).to({startPosition:0},0).to({scaleX:0.58,scaleY:0.58,x:-72.3,y:-24.6},9).wait(6));

									// lgGreen.png
									this.instance_6 = new lib.Tween7("synched",0);
									this.instance_6.setTransform(7.3,-33.3,0.3,0.3);
									this.instance_6.alpha = 0;

									this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.1,scaleY:1.1,alpha:1},10,cjs.Ease.get(0.56)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(0.41)).wait(39).to({startPosition:0},0).to({scaleX:0.58,scaleY:0.58,x:-82.7,y:-98.2},9).wait(6));

								}).prototype = p = new cjs.MovieClip();
								p.nominalBounds = new cjs.Rectangle(-33,-74.1,80.7,81.6);


								(lib.Tween31 = function() {
									this.initialize();

									// Layer 1
									this.instance = new lib.Symbol20("synched",15,false);
									this.instance.setTransform(0,80.7);

									this.instance_1 = new lib.Symbol19("synched",32,false);
									this.instance_1.setTransform(0.8,-66.4);

									this.addChild(this.instance_1,this.instance);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-103.1,-141.7,207.4,283.5);


								(lib.Tween30 = function() {
									this.initialize();

									// Layer 1
									this.instance = new lib.Symbol20("synched",15,false);
									this.instance.setTransform(0,80.7);

									this.instance_1 = new lib.Symbol19("synched",32,false);
									this.instance_1.setTransform(0.8,-66.4);

									this.addChild(this.instance_1,this.instance);
								}).prototype = p = new cjs.Container();
								p.nominalBounds = new cjs.Rectangle(-103.1,-141.7,207.4,283.5);


								(lib.Symbol9 = function(mode,startPosition,loop) {
									this.initialize(mode,startPosition,loop,{});

									// Symbol 4
									this.instance = new lib.Symbol4("synched",0);
									this.instance.setTransform(-25.5,95.5,0.117,0.134,0,33,-147,0.8,86.7);
									this.instance.filters = [new cjs.ColorFilter(0.38, 0.38, 0.38, 1, 0, 94.86, 158.1, 0)];
									this.instance.cache(-99,-90,198,180);

									this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.6,regY:86.8,scaleX:0.67,scaleY:1.42,y:95.6,startPosition:14},10).to({scaleY:1.27,x:-25.6,y:95.4},4).wait(1));

									// Symbol 4
									this.instance_1 = new lib.Symbol4("synched",0);
									this.instance_1.setTransform(-25.5,95.5,0.117,0.134,-33,0,0,0.8,86.7);

									this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.6,regY:86.8,scaleX:0.67,scaleY:1.42,x:-25.4,y:95.6,startPosition:14},10).to({scaleY:1.27,x:-25.5,y:95.4},4).wait(1));

									// Symbol 5
									this.instance_2 = new lib.Symbol5("synched",0);
									this.instance_2.setTransform(0.9,78,0.098,0.102,0,0,0,0.5,130.3);
									this.instance_2.filters = [new cjs.ColorFilter(0.38, 0.38, 0.38, 1, 158.1, 31.62, 0, 0)];
									this.instance_2.cache(-128,-131,256,262);

									this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.67,scaleY:0.92,x:1,startPosition:14},10).to({scaleY:0.88},4).wait(1));

								}).prototype = p = new cjs.MovieClip();
								p.nominalBounds = new cjs.Rectangle(-47.3,51.4,60.5,49.7);


								(lib.Symbol1 = function(mode,startPosition,loop) {
									this.initialize(mode,startPosition,loop,{});

									// Layer 1
									this.instance = new lib.star();
									this.instance.setTransform(0,2.8,0.23,0.254,-56.7);
									this.instance.shadow = new cjs.Shadow("#FFFFFF",0,0,3);
									this.instance.filters = [new cjs.BlurFilter(2, 2, 3)];
									this.instance.cache(-20,-19,40,38);

									this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.34,scaleY:1.34,rotation:0,y:0},6).to({scaleX:0.23,scaleY:0.25,rotation:-56.7,y:2.8},6).to({_off:true},1).wait(1));

								}).prototype = p = new cjs.MovieClip();
								p.nominalBounds = new cjs.Rectangle(-15.9,-13,37,38);


								// stage content:



								(lib.video_001 = function(mode,startPosition,loop) {
									this.initialize(mode,startPosition,loop,{});

									// timeline functions:
									this.frame_0 = function() {
										playSound("HENRY");
									}

									// actions tween:
									this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2594));

									// Logo
									this.instance = new lib.Tween1("synched",0);
									this.instance.setTransform(589.7,36.1,0.11,0.11);
									this.instance.alpha = 0;
									this.instance._off = true;

									this.timeline.addTween(cjs.Tween.get(this.instance).wait(43).to({_off:false},0).to({scaleX:0.63,scaleY:0.63,alpha:1},8).to({scaleX:0.5,scaleY:0.5},4).wait(2539));

									// Logo
									this.instance_1 = new lib.Tween1("synched",0);
									this.instance_1.setTransform(313.5,176,0.22,0.22);
									this.instance_1.alpha = 0;

									this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.2,scaleY:1.2,alpha:1},16).to({scaleX:0.95,scaleY:0.95},5).to({scaleX:1,scaleY:1},5).wait(4).to({startPosition:0},0).to({scaleX:1.1,scaleY:1.1,alpha:0.672},5).to({scaleX:0.1,scaleY:0.1,alpha:0},8).to({_off:true},1).wait(2550));

									// Layer 4
									this.instance_2 = new lib.Tween20("synched",0);
									this.instance_2.setTransform(-146.5,248.2);
									this.instance_2._off = true;

									this.instance_3 = new lib.Tween21("synched",0);
									this.instance_3.setTransform(313.5,248.2);
									this.instance_3._off = true;

									this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(218).to({_off:false},0).to({_off:true,x:313.5},10).wait(39).to({_off:false,x:-146.5},10,cjs.Ease.get(1)).to({_off:true},1).wait(2316));
									this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(218).to({_off:false},10).wait(39).to({startPosition:0},0).to({_off:true,x:-146.5},10,cjs.Ease.get(1)).wait(2317));

									// img 1
									this.instance_4 = new lib.Symbol8("synched",0);
									this.instance_4.setTransform(-139.9,246.9);
									this.instance_4._off = true;

									this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(447).to({_off:false},0).to({x:237.1},9).to({x:393.1},147).to({x:770.1},10,cjs.Ease.get(1)).to({_off:true},1).wait(1980));

									// txt
									this.instance_5 = new lib.Symbol7("synched",0,false);
									this.instance_5.setTransform(313.5,45.5);
									this.instance_5._off = true;

									this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(379).to({_off:false},0).wait(30).to({mode:"single",startPosition:30},0).wait(38).to({mode:"synched",loop:false},0).wait(156).to({startPosition:90},0).to({y:-84.5,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(1980));

									// popup
									this.instance_6 = new lib._1("synched",0,false);
									this.instance_6.setTransform(204.8,176);

									this.instance_7 = new lib._1copy("synched",0,false);
									this.instance_7.setTransform(204.8,176,0.9,0.9);
									this.instance_7._off = true;

									this.instance_8 = new lib.Tween25("synched",0);
									this.instance_8.setTransform(434.3,190.3,0.048,0.048,0,0,0,-46.2,57.8);
									this.instance_8._off = true;

									this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6,p:{mode:"synched",startPosition:0,loop:false}}]},36).to({state:[{t:this.instance_6,p:{mode:"single",startPosition:53,loop:undefined}}]},53).to({state:[{t:this.instance_6,p:{mode:"synched",startPosition:54,loop:false}}]},4).to({state:[{t:this.instance_7}]},45).to({state:[{t:this.instance_7}]},9).to({state:[{t:this.instance_7}]},8).to({state:[{t:this.instance_7}]},35).to({state:[{t:this.instance_7}]},10).to({state:[]},1).to({state:[{t:this.instance_8}]},133).to({state:[{t:this.instance_8}]},10).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_8}]},20).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_8}]},7).to({state:[]},1).wait(2215));
									this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(138).to({_off:false},0).wait(9).to({startPosition:9},0).to({x:244.7,startPosition:17},8).wait(35).to({startPosition:52},0).to({x:808.8,y:175.8,startPosition:58},10).to({_off:true},1).wait(2393));
									this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(334).to({_off:false},0).to({regX:-46.1,regY:58,scaleX:1.21,scaleY:1.21,x:434.2},10).to({regX:-46,scaleX:1,scaleY:1,x:434.3},4).to({startPosition:0},20).to({regX:-46.1,scaleX:1.21,scaleY:1.21,x:434.2},3,cjs.Ease.get(1)).to({regX:-46.2,regY:57.8,scaleX:0.05,scaleY:0.05,x:434.3},7,cjs.Ease.get(1)).to({_off:true},1).wait(2215));

									// icons 
									this.instance_9 = new lib.Symbol10("synched",0,false);
									this.instance_9.setTransform(522.5,216);
									this.instance_9._off = true;

									this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(798).to({_off:false},0).to({_off:true},141).wait(1655));

									// arrow
									this.instance_10 = new lib.arrow("synched",0);
									this.instance_10.setTransform(248.7,151,0.88,0.88);
									this.instance_10._off = true;

									this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(786).to({_off:false},0).wait(144).to({startPosition:3},0).to({alpha:0,startPosition:11},8,cjs.Ease.get(1)).to({_off:true},1).wait(1655));

									// old phone
									this.instance_11 = new lib.Tween28("synched",0);
									this.instance_11.setTransform(318.7,174.7,0.311,1);
									this.instance_11.alpha = 0;
									this.instance_11._off = true;

									this.instance_12 = new lib.Tween29("synched",0);
									this.instance_12.setTransform(318.7,174.7);
									this.instance_12._off = true;

									this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(679).to({_off:false},0).to({_off:true,scaleX:1,alpha:1},6,cjs.Ease.get(1)).wait(1909));
									this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(679).to({_off:false},6,cjs.Ease.get(1)).wait(80).to({startPosition:0},0).to({scaleX:0.94,scaleY:0.94,x:138.7},10).wait(155).to({startPosition:0},0).to({alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(1655));

									// STAR
									this.instance_13 = new lib.Symbol1("synched",0,false);
									this.instance_13.setTransform(430.7,118.5,0.524,0.524);

									this.instance_14 = new lib.Symbol1("synched",10,false);
									this.instance_14.setTransform(430.7,118.5,0.524,0.524);

									this.instance_15 = new lib.Tween9("single",0);
									this.instance_15.setTransform(-126.6,185.7);
									this.instance_15._off = true;

									this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13,p:{x:430.7,y:118.5}}]},102).to({state:[{t:this.instance_14,p:{x:430.7,y:118.5}},{t:this.instance_13,p:{x:528.1,y:260.5}}]},10).to({state:[]},15).to({state:[{t:this.instance_15}]},147).to({state:[{t:this.instance_15}]},10).to({state:[{t:this.instance_15}]},95).to({state:[{t:this.instance_15}]},10).to({state:[]},1).to({state:[{t:this.instance_13,p:{x:260.9,y:50.4}}]},553).to({state:[{t:this.instance_14,p:{x:260.1,y:50.4}},{t:this.instance_13,p:{x:373,y:185.9}}]},10).to({state:[]},15).wait(1626));
									this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(274).to({_off:false},0).to({x:310.9},10).wait(95).to({startPosition:0},0).to({x:850.9},10,cjs.Ease.get(1)).to({_off:true},1).wait(2204));

									// txt
									this.instance_16 = new lib.bubbling("synched",0,false);
									this.instance_16.setTransform(484,157.5);
									this.instance_16._off = true;

									this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1472).to({_off:false},0).to({_off:true},10).wait(1112));

									// txt
									this.instance_17 = new lib.Symbol19("synched",0,false);
									this.instance_17.setTransform(484.8,91.1);

									this.instance_18 = new lib.Symbol20("synched",0,false);
									this.instance_18.setTransform(484,238.2);

									this.instance_19 = new lib.Tween30("synched",0);
									this.instance_19.setTransform(484,157.5);
									this.instance_19._off = true;

									this.instance_20 = new lib.Tween31("synched",0);
									this.instance_20.setTransform(484,157.5,0.01,0.01);

									this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17,p:{startPosition:0}}]},1253).to({state:[{t:this.instance_17,p:{startPosition:32}}]},35).to({state:[{t:this.instance_17,p:{startPosition:32}},{t:this.instance_18}]},53).to({state:[{t:this.instance_19}]},122).to({state:[{t:this.instance_19}]},4).to({state:[{t:this.instance_20}]},7).to({state:[]},1).wait(1119));
									this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1463).to({_off:false},0).to({scaleX:1.1,scaleY:1.1},4).to({_off:true,scaleX:0.01,scaleY:0.01},7,cjs.Ease.get(-1)).wait(1120));

									// img
									this.instance_21 = new lib.Symbol16("synched",0);
									this.instance_21.setTransform(107.6,106.8,0.24,0.24);
									this.instance_21.alpha = 0;
									this.instance_21._off = true;

									this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1241).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1,startPosition:12},12).wait(210).to({startPosition:42},0).to({x:-122.4,startPosition:53},11).to({_off:true},1).wait(1119));

									// img 2
									this.instance_22 = new lib.Tween19("synched",0);
									this.instance_22.setTransform(-457,171.8);
									this.instance_22._off = true;

									this.instance_23 = new lib.Tween16("synched",0);
									this.instance_23.setTransform(825,196.1,0.8,0.8);
									this.instance_23._off = true;

									this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(190).to({_off:false},0).to({x:313.5,y:176},10).wait(67).to({startPosition:0},0).to({x:876},10,cjs.Ease.get(1)).to({_off:true},1).wait(2316));
									this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(1134).to({_off:false},0).to({x:435},14).wait(90).to({startPosition:0},0).to({x:419.5},3).to({x:791.5,alpha:0},9).to({_off:true},1).wait(1343));

									// txt
									this.instance_24 = new lib.Symbol9("synched",0,false);
									this.instance_24.setTransform(328.3,132.8,1,1,0,0,0,-2,-9.8);
									this.instance_24._off = true;

									this.instance_25 = new lib.txt("synched",0);
									this.instance_25.setTransform(452.5,138.5);
									this.instance_25._off = true;

									this.instance_26 = new lib.ppage();
									this.instance_26.setTransform(330.1,35.9);

									this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_24}]},679).to({state:[{t:this.instance_24}]},76).to({state:[{t:this.instance_24}]},10).to({state:[]},1).to({state:[{t:this.instance_25}]},218).to({state:[{t:this.instance_25}]},13).to({state:[{t:this.instance_25}]},24).to({state:[{t:this.instance_25}]},109).to({state:[{t:this.instance_25}]},13).to({state:[{t:this.instance_25}]},95).to({state:[{t:this.instance_25}]},3).to({state:[{t:this.instance_25}]},9).to({state:[]},1).to({state:[{t:this.instance_26}]},239).wait(1104));
									this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(679).to({_off:false},0).wait(76).to({startPosition:14},0).to({alpha:0},10).to({_off:true},1).wait(1828));
									this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(984).to({_off:false},0).wait(13).to({mode:"single",startPosition:13},0).wait(24).to({mode:"synched",loop:false},0).wait(109).to({startPosition:54},0).to({x:137},13).wait(95).to({startPosition:54},0).to({x:152.5},3).to({x:-111,alpha:0},9).to({_off:true},1).wait(1343));

									// phone
									this.instance_27 = new lib.Tween9("single",0);
									this.instance_27.setTransform(707.2,220);
									this.instance_27.alpha = 0;
									this.instance_27._off = true;

									this.instance_28 = new lib.Tween23("synched",0);
									this.instance_28.setTransform(-158,261.8);
									this.instance_28._off = true;

									this.instance_29 = new lib.Tween24("synched",0);
									this.instance_29.setTransform(278,261.8);
									this.instance_29._off = true;

									this.instance_30 = new lib.phone("synched",0);
									this.instance_30.setTransform(-86.4,167.6);
									this.instance_30._off = true;

									this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(93).to({_off:false},0).to({x:476.2,alpha:1},9).wait(36).to({startPosition:0},0).to({x:707.2,alpha:0},9).to({_off:true},1).wait(460).to({_off:false,x:313.5,y:484.7,alpha:1},0).to({y:148.6},10,cjs.Ease.get(1)).to({y:166.8},4).wait(53).to({startPosition:0},0).to({scaleX:0.4,alpha:0},6,cjs.Ease.get(1)).wait(84).to({startPosition:0},0).to({scaleX:1.13,scaleY:1.13,x:443.5,alpha:1},10).wait(155).to({startPosition:0},0).to({x:313.5},13).wait(33).to({startPosition:0},0).to({x:213.5},12).wait(142).to({startPosition:0},0).to({x:-86.5},13).to({_off:true},1).wait(1450));
									this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(274).to({_off:false},0).to({_off:true,x:278},10).wait(2310));
									this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(274).to({_off:false},10).wait(95).to({startPosition:3},0).to({x:818},10,cjs.Ease.get(1)).to({_off:true},1).wait(2204));
									this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(1241).to({_off:false},0).to({x:313.5,y:176},9).wait(240).to({startPosition:0},0).to({x:123.5},14).wait(1090));

									// Layer 1
									this.instance_31 = new lib.motion("synched",0);
									this.instance_31.setTransform(317.4,174);
									this.instance_31.alpha = 0.648;

									this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(2594));

									// Layer 2
									this.shape = new cjs.Shape();
									this.shape.graphics.rf(["#FFFFFF","#28292A"],[0,1],-6.9,9.1,0,-6.9,9.1,501.8).s().p("EgxsAbuMAAAg3bMBjZAAAMAAAA3bg");
									this.shape.setTransform(313.5,176);

									this.timeline.addTween(cjs.Tween.get(this.shape).wait(2594));

									// bg
									this.instance_32 = new lib.Tween26("synched",0);
									this.instance_32.setTransform(313.5,176,0.01,0.01);
									this.instance_32._off = true;

									this.instance_33 = new lib.Tween27("synched",0);
									this.instance_33.setTransform(313.5,176);

									this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_32}]},603).to({state:[{t:this.instance_33}]},11).wait(1980));
									this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(603).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,rotation:360},11).wait(1980));

									// bg
									this.shape_1 = new cjs.Shape();
									this.shape_1.graphics.f("#DDDDB2").s().p("Ao9H+QjtjTAAkrQAAkqDtjTQDujUFPAAQFQAADuDUQDtDTAAEqQAAErjtDTQjuDUlQAAQlPAAjujUg");
									this.shape_1.setTransform(708.2,415.7);

									this.shape_2 = new cjs.Shape();
									this.shape_2.graphics.f("#DDDDB2").s().p("AtxLzQltk4AAm7QAAm5Ftk6QFtk4IEAAQIFAAFtE4QFtE6AAG5QAAG7ltE4QltE5oFAAQoEAAltk5g");
									this.shape_2.setTransform(664.6,390.1);

									this.shape_3 = new cjs.Shape();
									this.shape_3.graphics.f("#DDDDB2").s().p("AymPoQnsmeAApKQAApJHsmeQHumeK4AAQK5AAHtGeQHtGeAAJJQAAJKntGeQntGeq5AAQq4AAnumeg");
									this.shape_3.setTransform(621,364.5);

									this.shape_4 = new cjs.Shape();
									this.shape_4.graphics.f("#DDDDB2").s().p("A3aTdQpsoEAArZQAArYJsoEQJtoDNtAAQNuAAJsIDQJtIEAALYQAALZptIEQpsIDtuAAQttAAptoDg");
									this.shape_4.setTransform(577.5,339);

									this.shape_5 = new cjs.Shape();
									this.shape_5.graphics.f("#DDDDB2").s().p("A8OXSQrsppAAtpQAAtoLspoQLspqQiAAQQjAALrJqQLtJoAANoQAANprtJpQrrJowjAAQwiAArspog");
									this.shape_5.setTransform(533.9,313.4);

									this.shape_6 = new cjs.Shape();
									this.shape_6.graphics.f("#DDDDB2").s().p("EghDAbGQtrrOAAv4QAAv4NrrOQNtrOTWAAQTXAANrLOQNtLOAAP4QAAP4ttLOQtrLPzXAAQzWAAttrPg");
									this.shape_6.setTransform(490.3,287.9);

									this.shape_7 = new cjs.Shape();
									this.shape_7.graphics.f("#DDDDB2").s().p("Egl3Ae7QvrszAAyIQAAyHPrs0QPsszWLAAQWMAAPqMzQPtM0AASHQAASIvtMzQvqM02MAAQ2LAAvss0g");
									this.shape_7.setTransform(446.7,262.3);

									this.shape_8 = new cjs.Shape();
									this.shape_8.graphics.f("#DDDDB2").s().p("EgqsAiwQxpuZAA0XQAA0XRpuYQRsuZZAAAQZAAARqOZQRsOYAAUXQAAUXxsOZQxqOZ5AAAQ5AAAxsuZg");
									this.shape_8.setTransform(403.1,236.8);

									this.shape_9 = new cjs.Shape();
									this.shape_9.graphics.f("#DDDDB2").s().p("EgvgAmlQzpv+AA2nQAA2mTpv+QTsv+b0AAQb1AATpP+QTsP+AAWmQAAWnzsP+QzpP+71AAQ70AAzsv+g");
									this.shape_9.setTransform(359.5,211.2);

									this.shape_10 = new cjs.Shape();
									this.shape_10.graphics.f("#DDDDB2").s().p("AucIfIAAw9Ic5AAIAAQ9g");
									this.shape_10.setTransform(313.5,176,3.387,3.24);

									this.shape_11 = new cjs.Shape();
									this.shape_11.graphics.f("#DBB2DD").s().p("AsmC1IE0u0IPlAAIE0O0IsnJLg");
									this.shape_11.setTransform(-53.8,428.8);

									this.shape_12 = new cjs.Shape();
									this.shape_12.graphics.f("#DBB2DD").s().p("AyLDwIG9zpIWdAAIG9TpIyMMKg");
									this.shape_12.setTransform(-17.4,406.6);

									this.shape_13 = new cjs.Shape();
									this.shape_13.graphics.f("#DBB2DD").s().p("A3wErIJF4fIdXAAIJFYfI3xPKg");
									this.shape_13.setTransform(19,384.4);

									this.shape_14 = new cjs.Shape();
									this.shape_14.graphics.f("#DBB2DD").s().p("A9VFmILN9UMAkRAAAILNdUI9WSJg");
									this.shape_14.setTransform(55.4,362.2);

									this.shape_15 = new cjs.Shape();
									this.shape_15.graphics.f("#DBB2DD").s().p("Egi6AGhMANWgiKMArJAAAMANWAiKMgi7AVJg");
									this.shape_15.setTransform(91.8,340);

									this.shape_16 = new cjs.Shape();
									this.shape_16.graphics.f("#DBB2DD").s().p("EgofAHcMAPegm/MAyDAAAMAPeAm/MgogAYIg");
									this.shape_16.setTransform(128.2,317.8);

									this.shape_17 = new cjs.Shape();
									this.shape_17.graphics.f("#DBB2DD").s().p("EguEAIXMARngr1MA47AAAMARnAr1MguFAbIg");
									this.shape_17.setTransform(164.6,295.6);

									this.shape_18 = new cjs.Shape();
									this.shape_18.graphics.f("#DBB2DD").s().p("EgzpAJSMATvgwrMA/1AAAMATvAwrMgzqAeHg");
									this.shape_18.setTransform(201,273.4);

									this.shape_19 = new cjs.Shape();
									this.shape_19.graphics.f("#DBB2DD").s().p("Eg5NAKOMAV2g1hMBGvAAAMAV2A1hMg5OAhGg");
									this.shape_19.setTransform(237.4,251.1);

									this.shape_20 = new cjs.Shape();
									this.shape_20.graphics.f("#DBB2DD").s().p("Eg+yALJMAX/g6XMBNnAAAMAX/A6XMg+zAkFg");
									this.shape_20.setTransform(273.8,228.9);

									this.shape_21 = new cjs.Shape();
									this.shape_21.graphics.f("#DBB2DD").s().p("AucIfIAAw9Ic5AAIAAQ9g");
									this.shape_21.setTransform(313.5,176,3.387,3.24);

									this.shape_22 = new cjs.Shape();
									this.shape_22.graphics.f("#D5B6DD").s().p("Egw+AbfMAAAg2+MBh9AAAMAAAA2+g");
									this.shape_22.setTransform(313.5,176);

									this.shape_23 = new cjs.Shape();
									this.shape_23.graphics.f("#CEB9DD").s().p("Egw+AbfMAAAg2+MBh9AAAMAAAA2+g");
									this.shape_23.setTransform(313.5,176);

									this.shape_24 = new cjs.Shape();
									this.shape_24.graphics.f("#C8BDDC").s().p("Egw+AbfMAAAg2+MBh9AAAMAAAA2+g");
									this.shape_24.setTransform(313.5,176);

									this.shape_25 = new cjs.Shape();
									this.shape_25.graphics.f("#C1C0DC").s().p("Egw+AbfMAAAg2+MBh9AAAMAAAA2+g");
									this.shape_25.setTransform(313.5,176);

									this.shape_26 = new cjs.Shape();
									this.shape_26.graphics.f("#BBC4DC").s().p("Egw+AbfMAAAg2+MBh9AAAMAAAA2+g");
									this.shape_26.setTransform(313.5,176);

									this.shape_27 = new cjs.Shape();
									this.shape_27.graphics.f("#B5C7DC").s().p("Egw+AbfMAAAg2+MBh9AAAMAAAA2+g");
									this.shape_27.setTransform(313.5,176);

									this.shape_28 = new cjs.Shape();
									this.shape_28.graphics.f("#AECADC").s().p("Egw+AbfMAAAg2+MBh9AAAMAAAA2+g");
									this.shape_28.setTransform(313.5,176);

									this.shape_29 = new cjs.Shape();
									this.shape_29.graphics.f("#A8CEDB").s().p("Egw+AbfMAAAg2+MBh9AAAMAAAA2+g");
									this.shape_29.setTransform(313.5,176);

									this.shape_30 = new cjs.Shape();
									this.shape_30.graphics.f("#A1D1DB").s().p("Egw+AbfMAAAg2+MBh9AAAMAAAA2+g");
									this.shape_30.setTransform(313.5,176);

									this.shape_31 = new cjs.Shape();
									this.shape_31.graphics.f("#9BD5DB").s().p("AucIfIAAw9Ic5AAIAAQ9g");
									this.shape_31.setTransform(313.5,176,3.387,3.24);

									this.shape_32 = new cjs.Shape();
									this.shape_32.graphics.f("#A2D7D3").s().p("Egw+AbfMAAAg2+MBh9AAAMAAAA2+g");
									this.shape_32.setTransform(313.5,176);

									this.shape_33 = new cjs.Shape();
									this.shape_33.graphics.f("#A9D9CB").s().p("Egw+AbfMAAAg2+MBh9AAAMAAAA2+g");
									this.shape_33.setTransform(313.5,176);

									this.shape_34 = new cjs.Shape();
									this.shape_34.graphics.f("#B0DAC3").s().p("Egw+AbfMAAAg2+MBh9AAAMAAAA2+g");
									this.shape_34.setTransform(313.5,176);

									this.shape_35 = new cjs.Shape();
									this.shape_35.graphics.f("#B7DCBB").s().p("Egw+AbfMAAAg2+MBh9AAAMAAAA2+g");
									this.shape_35.setTransform(313.5,176);

									this.shape_36 = new cjs.Shape();
									this.shape_36.graphics.f("#BFDEB3").s().p("Egw+AbfMAAAg2+MBh9AAAMAAAA2+g");
									this.shape_36.setTransform(313.5,176);

									this.shape_37 = new cjs.Shape();
									this.shape_37.graphics.f("#C6E0AA").s().p("Egw+AbfMAAAg2+MBh9AAAMAAAA2+g");
									this.shape_37.setTransform(313.5,176);

									this.shape_38 = new cjs.Shape();
									this.shape_38.graphics.f("#CDE2A2").s().p("Egw+AbfMAAAg2+MBh9AAAMAAAA2+g");
									this.shape_38.setTransform(313.5,176);

									this.shape_39 = new cjs.Shape();
									this.shape_39.graphics.f("#D4E39A").s().p("Egw+AbfMAAAg2+MBh9AAAMAAAA2+g");
									this.shape_39.setTransform(313.5,176);

									this.shape_40 = new cjs.Shape();
									this.shape_40.graphics.f("#DBE592").s().p("Egw+AbfMAAAg2+MBh9AAAMAAAA2+g");
									this.shape_40.setTransform(313.5,176);

									this.shape_41 = new cjs.Shape();
									this.shape_41.graphics.f("#E2E78A").s().p("AucIfIAAw9Ic5AAIAAQ9g");
									this.shape_41.setTransform(313.5,176,3.387,3.24);

									this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,x:708.2,y:415.7}}]},138).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_1,p:{scaleX:5.831,scaleY:5.312,x:315.9,y:185.6}}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11,p:{scaleX:1,scaleY:1,x:-53.8,y:428.8}}]},42).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_11,p:{scaleX:5.418,scaleY:4.261,x:310.2,y:206.7}}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},66).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},102).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).wait(2205));

									// bg
									this.shape_42 = new cjs.Shape();
									this.shape_42.graphics.f("rgba(255,159,132,0)").s().p("AzIPCIAA+DMAmQAAAIAAeDg");
									this.shape_42.setTransform(313.5,176,2.559,1.829);

									this.shape_43 = new cjs.Shape();
									this.shape_43.graphics.f("rgba(255,159,132,0.125)").s().p("Egw+AbgMAAAg2/MBh9AAAMAAAA2/g");
									this.shape_43.setTransform(313.5,176);

									this.shape_44 = new cjs.Shape();
									this.shape_44.graphics.f("rgba(255,159,132,0.251)").s().p("Egw+AbgMAAAg2/MBh9AAAMAAAA2/g");
									this.shape_44.setTransform(313.5,176);

									this.shape_45 = new cjs.Shape();
									this.shape_45.graphics.f("rgba(255,159,132,0.376)").s().p("Egw+AbgMAAAg2/MBh9AAAMAAAA2/g");
									this.shape_45.setTransform(313.5,176);

									this.shape_46 = new cjs.Shape();
									this.shape_46.graphics.f("rgba(255,159,132,0.502)").s().p("Egw+AbgMAAAg2/MBh9AAAMAAAA2/g");
									this.shape_46.setTransform(313.5,176);

									this.shape_47 = new cjs.Shape();
									this.shape_47.graphics.f("rgba(255,159,132,0.624)").s().p("Egw+AbgMAAAg2/MBh9AAAMAAAA2/g");
									this.shape_47.setTransform(313.5,176);

									this.shape_48 = new cjs.Shape();
									this.shape_48.graphics.f("rgba(255,159,132,0.749)").s().p("Egw+AbgMAAAg2/MBh9AAAMAAAA2/g");
									this.shape_48.setTransform(313.5,176);

									this.shape_49 = new cjs.Shape();
									this.shape_49.graphics.f("rgba(255,159,132,0.875)").s().p("Egw+AbgMAAAg2/MBh9AAAMAAAA2/g");
									this.shape_49.setTransform(313.5,176);

									this.shape_50 = new cjs.Shape();
									this.shape_50.graphics.f("#FF9F84").s().p("Egw+AbgMAAAg2/MBh9AAAMAAAA2/g");
									this.shape_50.setTransform(313.5,176);

									this.shape_51 = new cjs.Shape();
									this.shape_51.graphics.f("#DDDDB2").s().p("AucIfIAAw9Ic5AAIAAQ9g");
									this.shape_51.setTransform(313.5,176,3.387,3.24);

									this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_42}]},35).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[]},105).to({state:[{t:this.shape_51}]},42).to({state:[]},11).wait(2393));

									// Bitmap 10
									this.shape_52 = new cjs.Shape();
									this.shape_52.graphics.rf(["#00A3FF","#0638AA"],[0,1],-16.4,-11.3,0,-16.4,-11.3,112.4).s().p("AzIPCIAA+DMAmQAAAIAAeDg");
									this.shape_52.setTransform(813.6,98.1,0.372,0.372);

									this.shape_53 = new cjs.Shape();
									this.shape_53.graphics.f("#FF3467").s().p("AzIPCIAA+DMAmQAAAIAAeDg");
									this.shape_53.setTransform(712.2,180.3,0.372,0.372);

									this.shape_54 = new cjs.Shape();
									this.shape_54.graphics.f("#7B6E3A").s().p("AzIPCIAA+DMAmQAAAIAAeDg");
									this.shape_54.setTransform(803.3,80.1,0.372,0.372);

									this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]}).wait(2594));

								}).prototype = p = new cjs.MovieClip();
								p.nominalBounds = new cjs.Rectangle(134.1,-256.5,1038.6,1029.6);

								})(lib = lib||{}, images = images||{}, createjs = createjs||{});
							
							}
								


							

						$(document).ready(function(){
							$('#imgdiv1').hide();
							$('#videoViewport').show();
							init2();
							init();
							
						});
							