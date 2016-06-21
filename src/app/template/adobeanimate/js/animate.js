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
											{src:path+"images/calendar.png", id:"calendar"},
											{src:path+"images/green2.png", id:"green2"},
											{src:path+"images/internet.png", id:"internet"},
											{src:path+"images/orangecircle1.png", id:"orangecircle1"},
											{src:path+"images/_package.png", id:"_package"},
											{src:path+"images/people_11.png", id:"people_11"},
											{src:path+"images/people_12.png", id:"people_12"},
											{src:path+"images/people_13.png", id:"people_13"},
											{src:path+"images/people_14.png", id:"people_14"},
											{src:path+"images/purple_circle.png", id:"purple_circle"},
											{src:path+"images/tick.png", id:"tick"},
											{src:path+"images/tv.png", id:"tv"},
											{src:path+"sounds/vo2.mp3", id:"vo2"},
											{src:path+"sounds/vo8.mp3", id:"vo8"}
										]
									};



									// symbols:



									(lib.ATT_Logo = function() {
										this.initialize(img.ATT_Logo);
									}).prototype = p = new cjs.Bitmap();
									p.nominalBounds = new cjs.Rectangle(0,0,210,210);


									(lib.calendar = function() {
										this.initialize(img.calendar);
									}).prototype = p = new cjs.Bitmap();
									p.nominalBounds = new cjs.Rectangle(0,0,145,121);


									(lib.green2 = function() {
										this.initialize(img.green2);
									}).prototype = p = new cjs.Bitmap();
									p.nominalBounds = new cjs.Rectangle(0,0,190,190);


									(lib.internet = function() {
										this.initialize(img.internet);
									}).prototype = p = new cjs.Bitmap();
									p.nominalBounds = new cjs.Rectangle(0,0,93,93);


									(lib.orangecircle1 = function() {
										this.initialize(img.orangecircle1);
									}).prototype = p = new cjs.Bitmap();
									p.nominalBounds = new cjs.Rectangle(0,0,113,115);


									(lib._package = function() {
										this.initialize(img._package);
									}).prototype = p = new cjs.Bitmap();
									p.nominalBounds = new cjs.Rectangle(0,0,393,223);


									(lib.people_11 = function() {
										this.initialize(img.people_11);
									}).prototype = p = new cjs.Bitmap();
									p.nominalBounds = new cjs.Rectangle(0,0,208,208);


									(lib.people_12 = function() {
										this.initialize(img.people_12);
									}).prototype = p = new cjs.Bitmap();
									p.nominalBounds = new cjs.Rectangle(0,0,98,98);


									(lib.people_13 = function() {
										this.initialize(img.people_13);
									}).prototype = p = new cjs.Bitmap();
									p.nominalBounds = new cjs.Rectangle(0,0,228,228);


									(lib.people_14 = function() {
										this.initialize(img.people_14);
									}).prototype = p = new cjs.Bitmap();
									p.nominalBounds = new cjs.Rectangle(0,0,307,212);


									(lib.purple_circle = function() {
										this.initialize(img.purple_circle);
									}).prototype = p = new cjs.Bitmap();
									p.nominalBounds = new cjs.Rectangle(0,0,220,220);


									(lib.tick = function() {
										this.initialize(img.tick);
									}).prototype = p = new cjs.Bitmap();
									p.nominalBounds = new cjs.Rectangle(0,0,20,20);


									(lib.tv = function() {
										this.initialize(img.tv);
									}).prototype = p = new cjs.Bitmap();
									p.nominalBounds = new cjs.Rectangle(0,0,117,110);


									(lib.Tween34 = function() {
										this.initialize();

										// Layer 1
										this.text = new cjs.Text("May 20th", "bold 40px 'Myriad Pro'", "#FFFFFF");
										this.text.textAlign = "center";
										this.text.lineHeight = 42;
										this.text.setTransform(-2,-26.8);

										this.addChild(this.text);
									}).prototype = p = new cjs.Container();
									p.nominalBounds = new cjs.Rectangle(-85.3,-26.8,170.6,53.6);


									(lib.Tween33 = function() {
										this.initialize();

										// Layer 1
										this.shape = new cjs.Shape();
										this.shape.graphics.f("#FEA010").s().p("AlmFmQiViUAAjSQAAjRCViVQCViUDRAAQDSAACVCUQCUCVAADRQAADSiUCUQiVCWjSAAQjRAAiViWg");
										this.shape.setTransform(0,0,1.688,1.688);

										this.addChild(this.shape);
									}).prototype = p = new cjs.Container();
									p.nominalBounds = new cjs.Rectangle(-85.7,-85.7,171.5,171.5);


									(lib.Tween32 = function() {
										this.initialize();

										// Layer 1
										this.shape = new cjs.Shape();
										this.shape.graphics.lf(["#A4BD2E","#5FA43D"],[0,1],-82,0,82,0).s().p("ApDJDQjwjwABlTQgBlSDwjwQDxjwFSAAQFTAADwDwQDwDwABFSQgBFTjwDwQjwDxlTgBQlSABjxjxg");
										this.shape.setTransform(0,0,0.37,0.37);

										this.addChild(this.shape);
									}).prototype = p = new cjs.Container();
									p.nominalBounds = new cjs.Rectangle(-30.3,-30.3,60.7,60.7);


									(lib.Tween31 = function() {
										this.initialize();

										// Layer 1
										this.instance = new lib.people_14();
										this.instance.setTransform(-153.5,-106);

										this.addChild(this.instance);
									}).prototype = p = new cjs.Container();
									p.nominalBounds = new cjs.Rectangle(-153.5,-106,307,212);


									(lib.Tween30 = function() {
										this.initialize();

										// Layer 1
										this.text = new cjs.Text("View my Schedule", "italic bold 17px 'Arial'", "#FFFFFF");
										this.text.textAlign = "center";
										this.text.lineHeight = 19;
										this.text.setTransform(-2,-11.5);

										this.shape = new cjs.Shape();
										this.shape.graphics.lf(["#0574AC","#00CDFF"],[0,1],0,-22.2,0,22.2).s().rr(-91,-21.5,182,43,8);
										this.shape.setTransform(0,0,1.049,1);

										this.addChild(this.shape,this.text);
									}).prototype = p = new cjs.Container();
									p.nominalBounds = new cjs.Rectangle(-95.4,-21.5,191,43);


									(lib.Tween29 = function() {
										this.initialize();

										// Layer 1
										this.text = new cjs.Text("View Order Status", "italic bold 17px 'Arial'", "#FFFFFF");
										this.text.textAlign = "center";
										this.text.lineHeight = 19;
										this.text.setTransform(-2,-11.5);

										this.shape = new cjs.Shape();
										this.shape.graphics.lf(["#0574AC","#00CDFF"],[0,1],0,-22.2,0,22.2).s().rr(-91,-21.5,182,43,8);
										this.shape.setTransform(0,0,1.049,1);

										this.addChild(this.shape,this.text);
									}).prototype = p = new cjs.Container();
									p.nominalBounds = new cjs.Rectangle(-95.4,-21.5,191,43);


									(lib.Tween28 = function() {
										this.initialize();

										// Layer 1
										this.text = new cjs.Text("Visit Welcome Center", "italic bold 17px 'Arial'", "#FFFFFF");
										this.text.textAlign = "center";
										this.text.lineHeight = 19;
										this.text.setTransform(-2,-11.5);

										this.shape = new cjs.Shape();
										this.shape.graphics.lf(["#0574AC","#00CDFF"],[0,1],0,-22.2,0,22.2).s().rr(-91,-21.5,182,43,8);
										this.shape.setTransform(0,0,1.049,1);

										this.addChild(this.shape,this.text);
									}).prototype = p = new cjs.Container();
									p.nominalBounds = new cjs.Rectangle(-95.4,-21.5,191,43);


									(lib.Tween27 = function() {
										this.initialize();

										// Layer 1
										this.text = new cjs.Text("Thanks for choosing AT&T", "30px 'Arial'", "#EF6F00");
										this.text.lineHeight = 32;
										this.text.setTransform(-177.8,-18.7);

										this.addChild(this.text);
									}).prototype = p = new cjs.Container();
									p.nominalBounds = new cjs.Rectangle(-177.8,-18.7,359.6,37.5);


									(lib.Tween26 = function() {
										this.initialize();

										// Layer 1
										this.shape = new cjs.Shape();
										this.shape.graphics.f("#4CA90C").s().p("AgTBgQgFgBgIgJIg9hJQgGgHABgGIAAgGQABgEADgCQAGgGAIABQAIABAGAGIAuAxIBSh+QAFgHAIgCQAJgBAGAEQAGAEADAJQABAJgFAGIhfCVQgHAJgFADIgEABIgDgBg");
										this.shape.setTransform(-129.2,-12,0.8,0.8);

										this.text = new cjs.Text("Wait untill after installation before cancelling your old services.", "15px 'Arial'", "#81017E");
										this.text.lineHeight = 17;
										this.text.lineWidth = 241;
										this.text.setTransform(-108.1,-19.8);

										this.addChild(this.text,this.shape);
									}).prototype = p = new cjs.Container();
									p.nominalBounds = new cjs.Rectangle(-137.1,-19.8,274.4,39.6);


									(lib.Tween25 = function() {
										this.initialize();

										// Layer 1
										this.instance = new lib.people_13();
										this.instance.setTransform(-91.2,-91.2,0.8,0.8);

										this.addChild(this.instance);
									}).prototype = p = new cjs.Container();
									p.nominalBounds = new cjs.Rectangle(-91.2,-91.2,182.4,182.4);


									(lib.Tween24 = function() {
										this.initialize();

										// Layer 1
										this.text = new cjs.Text("Installation Day Checklist", "italic 30px 'Arial'", "#EF6F00");
										this.text.lineHeight = 32;
										this.text.setTransform(-197.5,-12.5);

										this.addChild(this.text);
									}).prototype = p = new cjs.Container();
									p.nominalBounds = new cjs.Rectangle(-197.5,-12.5,339.5,37.5);


									(lib.Tween23 = function() {
										this.initialize();

										// Layer 1
										this.shape = new cjs.Shape();
										this.shape.graphics.f("#4CA90C").s().p("AgTBgQgFgBgIgJIg9hJQgGgHABgGIAAgGQABgEADgCQAGgGAIABQAIABAGAGIAuAxIBSh+QAFgHAIgCQAJgBAGAEQAGAEADAJQABAJgFAGIhfCVQgHAJgFADIgEABIgDgBg");
										this.shape.setTransform(-123,-12,0.8,0.8);

										this.text = new cjs.Text("A member of your household over 18years must be present.", "15px 'Arial'", "#81017E");
										this.text.lineHeight = 17;
										this.text.lineWidth = 229;
										this.text.setTransform(-101.9,-19.8);

										this.addChild(this.text,this.shape);
									}).prototype = p = new cjs.Container();
									p.nominalBounds = new cjs.Rectangle(-131,-19.8,262.1,39.6);


									(lib.Tween22 = function() {
										this.initialize();

										// Layer 1
										this.shape = new cjs.Shape();
										this.shape.graphics.f("#4CA90C").s().p("AgTBgQgFgBgIgJIg9hJQgGgHABgGIAAgGQABgEADgCQAGgGAIABQAIABAGAGIAuAxIBSh+QAFgHAIgCQAJgBAGAEQAGAEADAJQABAJgFAGIhfCVQgHAJgFADIgEABIgDgBg");
										this.shape.setTransform(-129.2,-12,0.8,0.8);

										this.text = new cjs.Text("Plan on installation taking an average of four hours to completed.", "15px 'Arial'", "#81017E");
										this.text.lineHeight = 17;
										this.text.lineWidth = 241;
										this.text.setTransform(-108.1,-19.8);

										this.addChild(this.text,this.shape);
									}).prototype = p = new cjs.Container();
									p.nominalBounds = new cjs.Rectangle(-137.1,-19.8,274.4,39.6);


									(lib.Tween21 = function() {
										this.initialize();

										// Layer 1
										this.shape = new cjs.Shape();
										this.shape.graphics.f("#4CA90C").s().p("AgTBgQgFgBgIgJIg9hJQgGgHABgGIAAgGQABgEADgCQAGgGAIABQAIABAGAGIAuAxIBSh+QAFgHAIgCQAJgBAGAEQAGAEADAJQABAJgFAGIhfCVQgHAJgFADIgEABIgDgBg");
										this.shape.setTransform(-126.4,-30.8,0.8,0.8);

										this.text = new cjs.Text("You are responsible for moving furniture blocking telephone and computer connections prior to the tech's arrival.", "15px 'Arial'", "#81017E");
										this.text.lineHeight = 17;
										this.text.lineWidth = 236;
										this.text.setTransform(-105.6,-38.6);

										this.addChild(this.text,this.shape);
									}).prototype = p = new cjs.Container();
									p.nominalBounds = new cjs.Rectangle(-134.4,-38.6,268.8,77.2);


									(lib.Tween20 = function() {
										this.initialize();

										// Layer 1
										this.text = new cjs.Text("9:00am to", "bold 30px 'Myriad Pro'", "#FFFFFF");
										this.text.textAlign = "center";
										this.text.lineHeight = 32;
										this.text.setTransform(-2,-20.5);

										this.addChild(this.text);
									}).prototype = p = new cjs.Container();
									p.nominalBounds = new cjs.Rectangle(-68.9,-20.5,137.9,41.2);


									(lib.Tween19 = function(mode,startPosition,loop) {
										this.initialize(mode,startPosition,loop,{});

										// Layer 1
										this.shape = new cjs.Shape();
										this.shape.graphics.lf(["#A4BD2E","#5FA43D"],[0,1],-82,0,82,0).s().p("ApDJDQjwjwABlTQgBlSDwjwQDxjwFSAAQFTAADwDwQDwDwABFSQgBFTjwDwQjwDxlTgBQlSABjxjxg");
										this.shape.setTransform(0,0,1.383,1.383);

										this.shape_1 = new cjs.Shape();
										this.shape_1.graphics.lf(["#A4BD2E","#5FA43D"],[0,1],-112.1,0,112.2,0).s().p("AsYMYQlIlIAAnQQAAnPFIlJQFJlIHPAAQHQAAFIFIQFJFJAAHPQAAHQlJFIQlIFJnQAAQnPAAlJlJg");

										this.shape_2 = new cjs.Shape();
										this.shape_2.graphics.lf(["#A4BD2E","#5FA43D"],[0,1],-110.9,0,111,0).s().p("AsQMQQlElFAAnLQAAnKFElFQFGlFHKAAQHLAAFFFFQFFFFAAHKQAAHLlFFFQlFFFnLAAQnKAAlGlFg");

										this.shape_3 = new cjs.Shape();
										this.shape_3.graphics.lf(["#A4BD2E","#5FA43D"],[0,1],-109.7,0,109.8,0).s().p("AsHMHQlBlBAAnGQAAnFFBlCQFClBHFAAQHGAAFBFBQFCFCAAHFQAAHGlCFBQlBFCnGAAQnFAAlClCg");

										this.shape_4 = new cjs.Shape();
										this.shape_4.graphics.lf(["#A4BD2E","#5FA43D"],[0,1],-108.5,0,108.6,0).s().p("Ar/L/Qk9k+AAnBQAAnAE9k+QE/k+HAAAQHBAAE+E+QE+E+AAHAQAAHBk+E+Qk+E+nBAAQnAAAk/k+g");
										this.shape_4.setTransform(0.1,0);

										this.shape_5 = new cjs.Shape();
										this.shape_5.graphics.lf(["#A4BD2E","#5FA43D"],[0,1],-107.3,0,107.4,0).s().p("Ar2L2Qk6k6AAm8QAAm7E6k7QE7k6G7AAQG8AAE6E6QE7E7AAG7QAAG8k7E6Qk6E7m8AAQm7AAk7k7g");
										this.shape_5.setTransform(0.1,0);

										this.shape_6 = new cjs.Shape();
										this.shape_6.graphics.lf(["#A4BD2E","#5FA43D"],[0,1],-106.1,0,106.2,0).s().p("AruLuQk2k3AAm3QAAm2E2k3QE4k3G2AAQG3AAE3E3QE3E3AAG2QAAG3k3E3Qk3E3m3AAQm2AAk4k3g");
										this.shape_6.setTransform(0.1,0);

										this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1.383,scaleY:1.383}}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape,p:{scaleX:1.28,scaleY:1.28}}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape,p:{scaleX:1.383,scaleY:1.383}}]},1).wait(1));

									}).prototype = p = new cjs.MovieClip();
									p.nominalBounds = new cjs.Rectangle(-113.3,-113.3,226.8,226.8);


									(lib.Tween18 = function() {
										this.initialize();

										// Layer 1
										this.shape = new cjs.Shape();
										this.shape.graphics.f("#FFFFFF").s().p("AgiAPQgOgPgBgTIAAgKIBiAAIAAAKQAAATgOAPQgPAOgUABQgTgBgPgOg");
										this.shape.setTransform(24.8,-33.1);

										this.shape_1 = new cjs.Shape();
										this.shape_1.graphics.f("#179FDA").s().p("AgxBHIAAhbQABgVAOgOQAPgPATAAQAUAAAPAPQAOAOAAAVIAABbg");
										this.shape_1.setTransform(24.8,-43.3);

										this.shape_2 = new cjs.Shape();
										this.shape_2.graphics.f("#FFFFFF").s().p("AgiAPQgOgPgBgTIAAgKIBiAAIAAAKQAAATgOAPQgPAOgUABQgTgBgPgOg");
										this.shape_2.setTransform(-29.7,-33.1);

										this.shape_3 = new cjs.Shape();
										this.shape_3.graphics.f("#179FDA").s().p("AgxBHIAAhbQABgVAOgOQAPgPATAAQAUAAAPAPQAOAOAAAVIAABbg");
										this.shape_3.setTransform(-29.7,-43.3);

										this.shape_4 = new cjs.Shape();
										this.shape_4.graphics.f().s("#179FDA").ss(5,1,1).p("AArhbIAABgIhVBX");
										this.shape_4.setTransform(26.5,27.1,0.77,0.77);

										this.shape_5 = new cjs.Shape();
										this.shape_5.graphics.f().s("#FFFFFF").ss(5,1,1).p("ADgAAQAABdhCBBQhBBChdAAQhbAAhChCQhChBAAhdQAAhbBChCQBChCBbAAQBdAABBBCQBCBCAABbg");
										this.shape_5.setTransform(29.1,28);

										this.shape_6 = new cjs.Shape();
										this.shape_6.graphics.f().s("#179FDA").ss(5,1,1).p("ACwAAQAABIg0A0QgzA0hJAAQhHAAg1g0Qgzg0AAhIQAAhIAzg0QA1gzBHAAQBJAAAzAzQA0A0AABIg");
										this.shape_6.setTransform(29.1,28);

										this.shape_7 = new cjs.Shape();
										this.shape_7.graphics.f("#FFFFFF").s().p("AidCeQhChBAAhdQAAhcBChBQBChCBbAAQBdAABBBCQBCBBAABcQAABdhCBBQhBBChdAAQhbAAhChCgAivAAQAABJA0AzQAzA0BIAAQBIAAA0g0QA0gzAAhJQAAhHg0g1Qg0gzhIAAQhIAAgzAzQg0A1AABHIAAAAgAh7B8Qg0gzAAhJQAAhHA0g1QAzgzBIAAQBIAAA0AzQA0A1AABHQAABJg0AzQg0A0hIAAQhIAAgzg0gACwAAIAAAAg");
										this.shape_7.setTransform(29.1,28);

										this.shape_8 = new cjs.Shape();
										this.shape_8.graphics.f("#FFFFFF").s().p("AhVBWIAAirICrAAIAACrg");
										this.shape_8.setTransform(-35.1,26.9);

										this.shape_9 = new cjs.Shape();
										this.shape_9.graphics.f("#FFFFFF").s().p("AhVBWIAAirICrAAIAACrg");
										this.shape_9.setTransform(-14.1,26.9);

										this.shape_10 = new cjs.Shape();
										this.shape_10.graphics.f("#FFFFFF").s().p("AhVBWIAAirICrAAIAACrg");
										this.shape_10.setTransform(7.3,26.9);

										this.shape_11 = new cjs.Shape();
										this.shape_11.graphics.f("#FFFFFF").s().p("AhVBWIAAirICrAAIAACrg");
										this.shape_11.setTransform(29.1,5.9);

										this.shape_12 = new cjs.Shape();
										this.shape_12.graphics.f("#FFFFFF").s().p("AhVBWIAAirICrAAIAACrg");
										this.shape_12.setTransform(29.1,-15.9);

										this.shape_13 = new cjs.Shape();
										this.shape_13.graphics.f("#FFFFFF").s().p("AhVBWIAAirICrAAIAACrg");
										this.shape_13.setTransform(7.3,-15.9);

										this.shape_14 = new cjs.Shape();
										this.shape_14.graphics.f("#FFFFFF").s().p("AhVBWIAAirICrAAIAACrg");
										this.shape_14.setTransform(7.3,5.9);

										this.shape_15 = new cjs.Shape();
										this.shape_15.graphics.f("#FFFFFF").s().p("AhVBWIAAirICrAAIAACrg");
										this.shape_15.setTransform(-14.1,5.9);

										this.shape_16 = new cjs.Shape();
										this.shape_16.graphics.f("#FFFFFF").s().p("AhVBWIAAirICrAAIAACrg");
										this.shape_16.setTransform(-35.1,5.9);

										this.shape_17 = new cjs.Shape();
										this.shape_17.graphics.f("#179FDA").s().rr(-59.75,-44.2,119.5,88.4,4.6);
										this.shape_17.setTransform(-2.5,-0.6,0.82,0.947);

										this.addChild(this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
									}).prototype = p = new cjs.Container();
									p.nominalBounds = new cjs.Rectangle(-51.5,-50.4,105.5,103.4);


									(lib.Tween15 = function() {
										this.initialize();

										// Layer 1
										this.text = new cjs.Text("11:00am", "bold 30px 'Myriad Pro'", "#FFFFFF");
										this.text.textAlign = "center";
										this.text.lineHeight = 32;
										this.text.setTransform(-2,-20.5);

										this.addChild(this.text);
									}).prototype = p = new cjs.Container();
									p.nominalBounds = new cjs.Rectangle(-60.1,-20.5,120.2,41.2);


									(lib.Tween13 = function() {
										this.initialize();

										// Layer 1
										this.text = new cjs.Text("Your Scheduled\nInstallation", "italic 40px 'Myriad Pro'", "#EF6F00");
										this.text.textAlign = "center";
										this.text.lineHeight = 42;
										this.text.setTransform(-2,-51.1);

										this.addChild(this.text);
									}).prototype = p = new cjs.Container();
									p.nominalBounds = new cjs.Rectangle(-126,-51.1,252,102.2);


									(lib.Tween12 = function() {
										this.initialize();

										// Layer 1
										this.text = new cjs.Text("YOUR ORDER", "italic 30px 'Myriad Pro'", "#EF6F00");
										this.text.lineHeight = 32;
										this.text.lineWidth = 289;
										this.text.setTransform(-81.8,-20);

										this.addChild(this.text);
									}).prototype = p = new cjs.Container();
									p.nominalBounds = new cjs.Rectangle(-81.8,-20,292.9,40.1);


									(lib.Tween10 = function() {
										this.initialize();

										// Layer 1
										this.shape = new cjs.Shape();
										this.shape.graphics.f().s("#1387BC").ss(3.5,1,1).p("AkWAAIItAA");
										this.shape.setTransform(0,16.8,0.075,1.333);

										this.shape_1 = new cjs.Shape();
										this.shape_1.graphics.f().s("#FFFFFF").ss(7,1,1).p("AkWAAIItAA");
										this.shape_1.setTransform(0,17.3,1.128,1);

										this.shape_2 = new cjs.Shape();
										this.shape_2.graphics.f().s("#FFFFFF").ss(5,1,1).rr(-22.85,-22.85,45.7,45.7,5.2);
										this.shape_2.setTransform(0,-1,1.072,0.711);

										this.shape_3 = new cjs.Shape();
										this.shape_3.graphics.lf(["#42C5F2","#097AB1"],[0,1],-34.1,0,34.2,0).s().p("AjwDxQhkhkAAiNQAAiMBkhkQBkhkCMAAQCNAABkBkQBkBkAACMQAACNhkBkQhkBkiNAAQiMAAhkhkg");
										this.shape_3.setTransform(0,0,1.362,1.362,90);

										this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
									}).prototype = p = new cjs.Container();
									p.nominalBounds = new cjs.Rectangle(-46.5,-46.5,93,93);


									(lib.Tween9 = function() {
										this.initialize();

										// Layer 1
										this.shape = new cjs.Shape();
										this.shape.graphics.f().s("#454545").ss(3.5,1,1).p("AhxAAIBxAAIByAAAAAAAIAAByAAAhxIAABx");

										this.addChild(this.shape);
									}).prototype = p = new cjs.Container();
									p.nominalBounds = new cjs.Rectangle(-13.2,-13.1,26.4,26.4);


									(lib.Tween7 = function() {
										this.initialize();

										// Layer 1
										this.shape = new cjs.Shape();
										this.shape.graphics.lf(["#D42A80","#983479"],[0,1],-50.8,0,50.8,0).s().p("AlmFmQiViUAAjSQAAjRCViVQCViUDRAAQDSAACVCUQCUCVAADRQAADSiUCUQiVCWjSAAQjRAAiViWg");
										this.shape.setTransform(0,0,1.15,1.15);

										this.addChild(this.shape);
									}).prototype = p = new cjs.Container();
									p.nominalBounds = new cjs.Rectangle(-58.4,-58.4,116.9,116.9);


									(lib.Tween6 = function() {
										this.initialize();

										// Layer 1
										this.shape = new cjs.Shape();
										this.shape.graphics.lf(["#A4BD2E","#5FA43D"],[0,1],-82,0,82,0).s().p("ApDJDQjwjwABlTQgBlSDwjwQDxjwFSAAQFTAADwDwQDwDwABFSQgBFTjwDwQjwDxlTgBQlSABjxjxg");
										this.shape.setTransform(0,0,1.04,1.04);

										this.addChild(this.shape);
									}).prototype = p = new cjs.Container();
									p.nominalBounds = new cjs.Rectangle(-85.3,-85.3,170.6,170.6);


									(lib.Tween5 = function() {
										this.initialize();

										// Layer 1
										this.instance = new lib.people_11();
										this.instance.setTransform(-83.2,-83.2,0.8,0.8);

										this.addChild(this.instance);
									}).prototype = p = new cjs.Container();
									p.nominalBounds = new cjs.Rectangle(-83.2,-83.2,166.4,166.4);


									(lib.Tween4 = function() {
										this.initialize();

										// Layer 1
										this.instance = new lib.people_12();
										this.instance.setTransform(-49,-49);

										this.addChild(this.instance);
									}).prototype = p = new cjs.Container();
									p.nominalBounds = new cjs.Rectangle(-49,-49,98,98);


									(lib.Tween3 = function() {
										this.initialize();

										// Layer 1
										this.text = new cjs.Text("Hi,", "italic bold 55px 'Myriad Pro'", "#FFFFFF");
										this.text.textAlign = "center";
										this.text.lineHeight = 57;
										this.text.setTransform(-2,-36);

										this.shape = new cjs.Shape();
										this.shape.graphics.f("#FEA010").s().p("AlmFmQiViUAAjSQAAjRCViVQCViUDRAAQDSAACVCUQCUCVAADRQAADSiUCUQiVCWjSAAQjRAAiViWg");
										this.shape.setTransform(0,0,1.089,1.089);

										this.addChild(this.shape,this.text);
									}).prototype = p = new cjs.Container();
									p.nominalBounds = new cjs.Rectangle(-55.3,-55.3,110.6,110.6);


									(lib.Tween2 = function() {
										this.initialize();

										// Layer 1
										this.text = new cjs.Text("DIRECTV", "bold 19px 'Arial'");
										this.text.textAlign = "center";
										this.text.lineHeight = 21;
										this.text.setTransform(-1,-15.2,1,1.152);

										this.addChild(this.text);
									}).prototype = p = new cjs.Container();
									p.nominalBounds = new cjs.Rectangle(-42.7,-15.1,87.5,29.1);


									(lib.Tween1 = function() {
										this.initialize();

										// Layer 1
										this.instance = new lib.ATT_Logo();
										this.instance.setTransform(-63,-63,0.6,0.6);

										this.addChild(this.instance);
									}).prototype = p = new cjs.Container();
									p.nominalBounds = new cjs.Rectangle(-63,-63,126,126);


									(lib.Symbol5 = function() {
										this.initialize();

										// Layer 1
										this.shape = new cjs.Shape();
										this.shape.graphics.f("#FEA010").s().p("AlmFmQiViUAAjSQAAjRCViVQCViUDRAAQDSAACVCUQCUCVAADRQAADSiUCUQiVCWjSAAQjRAAiViWg");
										this.shape.setTransform(0,0,1.089,1.089);

										this.addChild(this.shape);
									}).prototype = p = new cjs.Container();
									p.nominalBounds = new cjs.Rectangle(-55.3,-55.3,110.6,110.6);


									(lib.Symbol4 = function() {
										this.initialize();

										// Layer 1
										this.shape = new cjs.Shape();
										this.shape.graphics.f("#FEA010").s().p("AlmFmQiViUAAjSQAAjRCViVQCViUDRAAQDSAACVCUQCUCVAADRQAADSiUCUQiVCWjSAAQjRAAiViWg");
										this.shape.setTransform(30.5,30.5,0.6,0.6);

										this.addChild(this.shape);
									}).prototype = p = new cjs.Container();
									p.nominalBounds = new cjs.Rectangle(0,0,61,61);


									(lib.Symbol1 = function() {
										this.initialize();

										// Layer 1
										this.instance = new lib._package();

										this.addChild(this.instance);
									}).prototype = p = new cjs.Container();
									p.nominalBounds = new cjs.Rectangle(0,0,393,223);


									(lib.Tween11 = function() {
										this.initialize();

										// Layer 1
										this.shape = new cjs.Shape();
										this.shape.graphics.f().s("#FFFFFF").ss(4,1,1).p("AlLkWIKXAAQA4AAAAA4IAAFmQAAA4g4AAIqXAAQg4AAAAg4IAAlmQAAg4A4AAgAAADGIAABPAiZEXIE3AA");
										this.shape.setTransform(0,0,0.72,0.72);

										this.instance = new lib.Tween6("synched",0);
										this.instance.setTransform(0,0,0.54,0.54,90);

										this.addChild(this.instance,this.shape);
									}).prototype = p = new cjs.Container();
									p.nominalBounds = new cjs.Rectangle(-46,-46.1,92.2,92.2);


									(lib.Symbol7 = function(mode,startPosition,loop) {
										this.initialize(mode,startPosition,loop,{});

										// Layer 1
										this.instance = new lib.Tween32("synched",0);

										this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.2,scaleY:1.2},14).to({scaleX:1,scaleY:1},15).wait(1));

									}).prototype = p = new cjs.MovieClip();
									p.nominalBounds = new cjs.Rectangle(-30.3,-30.3,60.7,60.7);


									(lib.Symbol6 = function(mode,startPosition,loop) {
										this.initialize(mode,startPosition,loop,{});

										// Layer 1
										this.instance = new lib.Tween33("synched",0);

										this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8},14).to({scaleX:1,scaleY:1},15).wait(1));

									}).prototype = p = new cjs.MovieClip();
									p.nominalBounds = new cjs.Rectangle(-85.7,-85.7,171.5,171.5);


									(lib.Symbol3 = function(mode,startPosition,loop) {
										this.initialize(mode,startPosition,loop,{});

										// Layer 1
										this.instance = new lib.Symbol4();
										this.instance.setTransform(26.3,15.5,1,1,0,0,0,30.4,30.4);

										this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:30.5,regY:30.5,x:23.7,y:13.6},0).wait(1).to({x:20.9,y:11.5},0).wait(1).to({x:18.2,y:9.5},0).wait(1).to({x:15.4,y:7.5},0).wait(1).to({x:12.6,y:5.5},0).wait(1).to({x:9.9,y:3.4},0).wait(1).to({x:7.1,y:1.4},0).wait(1).to({x:4.3,y:-0.6},0).wait(1).to({x:1.6,y:-2.6},0).wait(1).to({x:-1.2,y:-4.7},0).wait(1).to({x:-3.9,y:-6.7},0).wait(1).to({x:-6.7,y:-8.7},0).wait(1).to({x:-9.5,y:-10.7},0).wait(1).to({x:-12.2,y:-12.8},0).wait(1).to({x:-15,y:-14.8},0).wait(1).to({x:-17.8,y:-16.8},0).wait(1).to({x:-20.5,y:-18.8},0).wait(1).to({x:-23.3,y:-20.9},0).wait(1).to({x:-26.1,y:-22.9},0).wait(1).to({x:-23.4,y:-21},0).wait(1).to({x:-20.8,y:-19.1},0).wait(1).to({x:-18.2,y:-17.1},0).wait(1).to({x:-15.6,y:-15.2},0).wait(1).to({x:-12.9,y:-13.3},0).wait(1).to({x:-10.3,y:-11.4},0).wait(1).to({x:-7.7,y:-9.4},0).wait(1).to({x:-5.1,y:-7.5},0).wait(1).to({x:-2.4,y:-5.6},0).wait(1).to({x:0.2,y:-3.7},0).wait(1).to({x:2.8,y:-1.7},0).wait(1).to({x:5.4,y:0.2},0).wait(1).to({x:8.1,y:2.1},0).wait(1).to({x:10.7,y:4},0).wait(1).to({x:13.3,y:6},0).wait(1).to({x:15.9,y:7.9},0).wait(1).to({x:18.6,y:9.8},0).wait(1).to({x:21.2,y:11.7},0).wait(1).to({x:23.8,y:13.7},0).wait(1).to({x:26.4,y:15.6},0).wait(1));

									}).prototype = p = new cjs.MovieClip();
									p.nominalBounds = new cjs.Rectangle(-4.1,-14.9,61,61);


									(lib._6grap = function(mode,startPosition,loop) {
										this.initialize(mode,startPosition,loop,{});

										// Thanks for choosing AT&T
										this.instance = new lib.Tween27("synched",0);
										this.instance.setTransform(-471.7,-161.4,1,1.023,0,-12,0);
										this.instance.alpha = 0;

										this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.02,skewX:-10.6,x:-91.2,alpha:1},7).to({scaleY:1.02,skewX:12,x:-83.7},4).to({scaleY:1.02,skewX:-9.6,x:-90.8,y:-161.3},4).to({scaleY:1,skewX:0,x:-87.7,y:-161.4},3).wait(101));

										// people_14.png
										this.instance_1 = new lib.Tween31("synched",0);
										this.instance_1.setTransform(-77.5,-2.6,0.179,0.179);
										this.instance_1.alpha = 0;
										this.instance_1._off = true;

										this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({scaleX:1.05,scaleY:1.05,alpha:1},12,cjs.Ease.get(0.5)).to({scaleX:0.95,scaleY:0.95},5).wait(92));

										// Layer 2
										this.instance_2 = new lib.Tween28("synched",0);
										this.instance_2.setTransform(241.9,45.3);
										this.instance_2.alpha = 0;
										this.instance_2._off = true;

										this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(98).to({_off:false},0).to({x:211.9,alpha:1},13).wait(8));

										// Layer 3
										this.instance_3 = new lib.Tween29("synched",0);
										this.instance_3.setTransform(241.9,-14.7);
										this.instance_3.alpha = 0;
										this.instance_3._off = true;

										this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(77).to({_off:false},0).to({x:211.9,alpha:1},13).wait(29));

										// Layer 4
										this.instance_4 = new lib.Tween30("synched",0);
										this.instance_4.setTransform(241.9,-74.7);
										this.instance_4.alpha = 0;
										this.instance_4._off = true;

										this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(55).to({_off:false},0).to({x:211.9,alpha:1},13).wait(51));

										// Symbol 5
										this.instance_5 = new lib.Symbol5("synched",0);
										this.instance_5.setTransform(-221.5,94.5,0.5,0.5);
										this.instance_5.alpha = 0;
										this.instance_5._off = true;

										this.instance_6 = new lib.Symbol6();
										this.instance_6.setTransform(-221.6,94.4);

										this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},23).to({state:[{t:this.instance_5}]},11).to({state:[{t:this.instance_5}]},6).to({state:[{t:this.instance_6}]},1).wait(78));
										this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(23).to({_off:false},0).to({scaleX:1.48,scaleY:1.48,alpha:1},11).to({scaleX:1.55,scaleY:1.55},6).to({_off:true},1).wait(78));

										// Tween 6
										this.instance_7 = new lib.Tween6("synched",0);
										this.instance_7.setTransform(-220.5,-98.5,0.01,0.01);
										this.instance_7._off = true;

										this.instance_8 = new lib.Symbol7();
										this.instance_8.setTransform(-220.5,-98.5);

										this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},28).to({state:[{t:this.instance_7}]},11).to({state:[{t:this.instance_7}]},5).to({state:[{t:this.instance_8}]},1).wait(74));
										this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(28).to({_off:false},0).to({scaleX:0.45,scaleY:0.45},11).to({scaleX:0.36,scaleY:0.36},5).to({_off:true},1).wait(74));

									}).prototype = p = new cjs.MovieClip();
									p.nominalBounds = new cjs.Rectangle(-653.5,-180.1,367.6,37.5);


									(lib._5grap = function(mode,startPosition,loop) {
										this.initialize(mode,startPosition,loop,{});

										// Installation Day Checklist
										this.instance = new lib.Tween24("synched",0);
										this.instance.setTransform(-93.5,-148.1,1,0.042,0,0,0,1.1,-14.4);
										this.instance.alpha = 0;

										this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-14.8,scaleY:1.23,y:-140.2,alpha:1},14,cjs.Ease.get(-1)).to({scaleY:0.84,y:-142.8},5,cjs.Ease.get(0.51)).to({scaleY:1,y:-141.7},5,cjs.Ease.get(0.32)).wait(79).to({startPosition:0},0).to({regY:-14.4,scaleY:0.04,y:-148.1,alpha:0},10).wait(1));

										// people_13.png
										this.instance_1 = new lib.Tween25("synched",0);
										this.instance_1.setTransform(-136.3,33.3,0.1,0.1);
										this.instance_1.alpha = 0;
										this.instance_1._off = true;

										this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,alpha:1},14,cjs.Ease.get(-1)).to({scaleX:0.9,scaleY:0.9},5).to({scaleX:1,scaleY:1},5).wait(73).to({startPosition:0},0).to({scaleX:0.1,scaleY:0.1,alpha:0},10).wait(1));

										// Layer 9
										this.instance_2 = new lib.Tween26("synched",0);
										this.instance_2.setTransform(184.9,134.8);
										this.instance_2.alpha = 0;
										this.instance_2._off = true;

										this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(64).to({_off:false},0).to({x:154.9,alpha:1},10).wait(29).to({startPosition:0},0).to({x:184.9,alpha:0},10).wait(1));

										// Layer 2
										this.instance_3 = new lib.Tween21("synched",0);
										this.instance_3.setTransform(182.2,65.5);
										this.instance_3.alpha = 0;
										this.instance_3._off = true;

										this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(54).to({_off:false},0).to({x:152.2,alpha:1},10).wait(39).to({startPosition:0},0).to({x:182.2,alpha:0},10).wait(1));

										// Layer 3
										this.instance_4 = new lib.Tween22("synched",0);
										this.instance_4.setTransform(184.9,-3.8);
										this.instance_4.alpha = 0;
										this.instance_4._off = true;

										this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(44).to({_off:false},0).to({x:154.9,alpha:1},10).wait(49).to({startPosition:0},0).to({x:184.9,alpha:0},10).wait(1));

										// Layer 4
										this.instance_5 = new lib.Tween23("synched",0);
										this.instance_5.setTransform(178.8,-53.6);
										this.instance_5.alpha = 0;
										this.instance_5._off = true;

										this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(34).to({_off:false},0).to({x:148.8,alpha:1},10).wait(59).to({startPosition:0},0).to({x:178.8,alpha:0},10).wait(1));

										// Layer 7
										this.instance_6 = new lib.Symbol3();
										this.instance_6.setTransform(-191.4,95.3,0.81,0.81);
										this.instance_6.alpha = 0;
										this.instance_6._off = true;

										this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},10).wait(69).to({scaleX:0.81,scaleY:0.81,alpha:0},10).wait(1));

										// Tween 6
										this.instance_7 = new lib.Tween6("synched",0);
										this.instance_7.setTransform(-218.4,88.8,0.05,0.05);
										this.instance_7.alpha = 0;
										this.instance_7._off = true;

										this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({_off:false},0).to({scaleX:0.7,scaleY:0.7,alpha:1},14).wait(81).to({startPosition:0},0).to({scaleX:0.05,scaleY:0.05,alpha:0},10).wait(1));

									}).prototype = p = new cjs.MovieClip();
									p.nominalBounds = new cjs.Rectangle(-292.1,-148.1,339.5,1.6);


									(lib._3grap = function(mode,startPosition,loop) {
										this.initialize(mode,startPosition,loop,{});

										// Your Scheduled Installation
										this.instance = new lib.Tween13();
										this.instance.setTransform(-122,-139,1,0.039,0,0,0,-1,-52.6);
										this.instance.alpha = 0;

										this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-52.9,scaleY:1.1,y:-139.1,alpha:1},12).to({regY:-53,scaleY:0.9,y:-138.8},5).to({scaleY:1,y:-139},5).wait(135).to({scaleY:0.08,y:-137.3,alpha:0},11).to({_off:true},3).wait(2));

										// Layer 6
										this.instance_1 = new lib.Tween18("synched",0);
										this.instance_1.setTransform(-126.1,53.6,0.2,0.2);
										this.instance_1.alpha = 0;
										this.instance_1._off = true;

										this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,alpha:1},8,cjs.Ease.get(-0.5)).to({scaleX:1,scaleY:1},16,cjs.Ease.get(-0.5)).to({startPosition:0},125).to({scaleX:0.29,scaleY:0.29,alpha:0},11).wait(5));

										// 11:00am
										this.instance_2 = new lib.Tween15("synched",0);
										this.instance_2.setTransform(131.7,68.1,1,0.14,0,0,0,0,-7.9);
										this.instance_2._off = true;

										this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(118).to({_off:false},0).to({regY:-8.1,scaleY:1.18,y:68},13).to({regY:-8,scaleY:0.83,y:68.1},4).to({scaleY:1},4).to({startPosition:0},18).to({scaleX:0.39,scaleY:0.39,alpha:0},11).wait(5));

										// 9:00am to
										this.instance_3 = new lib.Tween20("synched",0);
										this.instance_3.setTransform(132.7,25,1,0.049,0,0,0,1,-9.2);
										this.instance_3._off = true;

										this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(108).to({_off:false},0).to({regY:-9,scaleY:1.17},13).to({scaleY:0.83},4).to({scaleY:1},4).to({startPosition:0},28).to({regX:1.1,regY:-9.1,scaleX:0.53,scaleY:0.53,x:132.8,alpha:0},11).wait(5));

										// May 20th
										this.instance_4 = new lib.Tween34("synched",0);
										this.instance_4.setTransform(132,-49,1,0.074,0,0,0,1,-26.9);
										this.instance_4.alpha = 0;
										this.instance_4._off = true;

										this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(66).to({_off:false},0).to({regY:-27,scaleY:1.22,alpha:1},10).to({regY:-27.1,scaleY:0.81,y:-49.1},4).to({regY:-27,scaleY:1,y:-49},4).to({startPosition:0},73).to({regX:1.1,regY:-26.9,scaleX:0.24,scaleY:0.24,alpha:0},11).to({_off:true},1).wait(4));

										// Tween 6
										this.instance_5 = new lib.Tween19();
										this.instance_5.setTransform(251.7,23.9);
										this.instance_5.alpha = 0;
										this.instance_5._off = true;

										this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(16).to({_off:false},0).to({x:131.7,alpha:1},21).wait(120).to({scaleX:0.42,scaleY:0.42,alpha:0},11).wait(5));

									}).prototype = p = new cjs.MovieClip();
									p.nominalBounds = new cjs.Rectangle(-247,-138.9,252,4);


									(lib._2grap = function(mode,startPosition,loop) {
										this.initialize(mode,startPosition,loop,{});

										// Layer 4
										this.instance = new lib.Tween10("synched",0);
										this.instance.setTransform(-196.5,102.5,0.3,0.3);
										this.instance.alpha = 0;
										this.instance._off = true;

										this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},12,cjs.Ease.get(1)).wait(47).to({startPosition:0},0).to({scaleX:0.3,scaleY:0.3,alpha:0},12).wait(11));

										// Layer 3
										this.instance_1 = new lib.Tween9("synched",0);
										this.instance_1.setTransform(-195.1,31.5,0.3,0.3);
										this.instance_1.alpha = 0;
										this.instance_1._off = true;

										this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},12,cjs.Ease.get(1)).wait(50).to({startPosition:0},0).to({scaleX:0.3,scaleY:0.3,alpha:0},12).wait(11));

										// package.png
										this.instance_2 = new lib.Symbol1("synched",0);
										this.instance_2.setTransform(83.9,34.9,0.046,1,0,0,0,192.9,116.9);
										this.instance_2.alpha = 0;
										this.instance_2._off = true;

										this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).to({regX:192.8,scaleX:1.1,x:83.8,alpha:1},13).to({regX:192.9,scaleX:0.9,x:83.9},4).to({scaleX:1},4).wait(15).to({startPosition:0},0).to({regX:192.8,scaleX:0.22,scaleY:0.22,alpha:0},12).wait(11));

										// Layer 5
										this.instance_3 = new lib.Tween11("synched",0);
										this.instance_3.setTransform(-196.5,-45,0.3,0.3);
										this.instance_3.alpha = 0;

										this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,alpha:1},9).wait(66).to({startPosition:0},0).to({scaleX:0.3,scaleY:0.3,alpha:0},12).wait(11));

										// YOUR ORDER
										this.instance_4 = new lib.Tween12("synched",0);
										this.instance_4.setTransform(-406.5,-128.9);
										this.instance_4.alpha = 0;

										this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-196.5,alpha:1},9).wait(66).to({startPosition:0},0).to({x:-406.5,alpha:0},12).wait(11));

									}).prototype = p = new cjs.MovieClip();
									p.nominalBounds = new cjs.Rectangle(-488.3,-148.9,305.7,117.8);


									(lib._1mov = function(mode,startPosition,loop) {
										this.initialize(mode,startPosition,loop,{});

										// people_11.png
										this.instance = new lib.Tween5("synched",0);
										this.instance.setTransform(-322.6,22.4);
										this.instance.alpha = 0;

										this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-85.1,alpha:1},19,cjs.Ease.get(1)).wait(23).to({startPosition:0},0).to({x:-310.1,alpha:0},10,cjs.Ease.get(1)).wait(1));

										// Layer 2
										this.instance_1 = new lib.Tween3("synched",0);
										this.instance_1.setTransform(238.1,26.6);
										this.instance_1.alpha = 0;
										this.instance_1._off = true;

										this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({x:113.1,alpha:1},12,cjs.Ease.get(1)).to({startPosition:0},10).wait(10).to({startPosition:0},0).to({scaleX:0.12,scaleY:0.12,x:164.4,y:24.1,alpha:0},10,cjs.Ease.get(1)).wait(1));

										// people_12.png
										this.instance_2 = new lib.Tween4("synched",0);
										this.instance_2.setTransform(112.6,23.6);
										this.instance_2.alpha = 0;
										this.instance_2._off = true;

										this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).to({x:106.4,y:-92.6,alpha:1},10).wait(10).to({startPosition:0},0).to({scaleX:0.15,scaleY:0.15,alpha:0},10,cjs.Ease.get(1)).wait(1));

										// Layer 5
										this.instance_3 = new lib.Tween6("synched",0);
										this.instance_3.setTransform(10.5,-47.1,0.3,0.3);
										this.instance_3.alpha = 0;
										this.instance_3._off = true;

										this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},16,cjs.Ease.get(1)).wait(16).to({startPosition:0},0).to({scaleX:0.19,scaleY:0.19,y:1.2,alpha:0},10,cjs.Ease.get(1)).wait(1));

										// Layer 6
										this.instance_4 = new lib.Tween7("synched",0);
										this.instance_4.setTransform(-19.4,83.3,0.26,0.26);
										this.instance_4.alpha = 0;
										this.instance_4._off = true;

										this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},16,cjs.Ease.get(1)).wait(16).to({startPosition:0},0).to({scaleX:0.41,scaleY:0.41,y:124.5,alpha:0},10,cjs.Ease.get(1)).wait(1));

									}).prototype = p = new cjs.MovieClip();
									p.nominalBounds = new cjs.Rectangle(-405.8,-60.8,166.4,166.4);


									// stage content:



									(lib.video_canvas = function(mode,startPosition,loop) {
										this.initialize(mode,startPosition,loop,{});

										// timeline functions:
										this.frame_51 = function() {
											playSound("vo2");
										}

										// actions tween:
										this.timeline.addTween(cjs.Tween.get(this).wait(51).call(this.frame_51).wait(2492));

										// Layer 3
										this.instance = new lib._6grap("synched",0,false);
										this.instance.setTransform(290.6,206.6);
										this.instance._off = true;

										this.timeline.addTween(cjs.Tween.get(this.instance).wait(1493).to({_off:false},0).wait(53).to({mode:"single",startPosition:53},0).wait(122).to({mode:"synched",loop:false},0).wait(875));

										// Layer 1
										this.instance_1 = new lib._5grap("synched",0,false);
										this.instance_1.setTransform(305.1,166.4);
										this.instance_1._off = true;

										this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(820).to({_off:false},0).wait(99).to({mode:"single",startPosition:99},0).wait(553).to({mode:"synched",loop:false},0).to({_off:true},21).wait(1050));

										// Layer 6
										this.instance_2 = new lib._3grap("synched",0,false);
										this.instance_2.setTransform(265.3,191);
										this.instance_2._off = true;

										this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(594).to({_off:false},0).wait(102).to({mode:"single",startPosition:102},0).wait(28).to({mode:"synched",loop:false},0).wait(48).to({mode:"single",startPosition:150},0).wait(35).to({mode:"synched",loop:false},0).wait(1736));

										// Layer 5
										this.instance_3 = new lib._2grap("synched",0,false);
										this.instance_3.setTransform(304.6,169.7);
										this.instance_3._off = true;

										this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(104).to({_off:false},0).wait(58).to({mode:"single",startPosition:63},0).wait(411).to({mode:"synched",loop:false},0).to({_off:true},21).wait(1949));

										// Layer 4
										this.instance_4 = new lib._1mov("synched",0,false);
										this.instance_4.setTransform(225.1,165.6);
										this.instance_4._off = true;

										this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(38).to({_off:false},0).wait(39).to({mode:"single",startPosition:39},0).wait(20).to({mode:"synched",loop:false},0).to({_off:true},24).wait(2422));

										// logo
										this.instance_5 = new lib.Tween1("synched",0);
										this.instance_5.setTransform(313.5,-54,0.8,0.8);
										this.instance_5.alpha = 0;

										this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:54.3,alpha:1},7).to({y:301.6},16,cjs.Ease.get(-0.44)).to({scaleX:1.05,scaleY:0.7,y:308.1},4).to({scaleX:0.8,scaleY:0.8,y:281.6},4).to({y:176},7).to({scaleX:0.35,scaleY:0.35,x:477.5,y:42},20).to({_off:true},2466).wait(19));

										// txt
										this.instance_6 = new lib.Tween2("synched",0);
										this.instance_6.setTransform(683.2,48);
										this.instance_6.alpha = 0;
										this.instance_6._off = true;

										this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(47).to({_off:false},0).to({x:553.2,alpha:1},11).wait(2485));

									}).prototype = p = new cjs.MovieClip();
									p.nominalBounds = new cjs.Rectangle(576.6,71.6,100.8,100.8);

									})(lib = lib||{}, images = images||{}, createjs = createjs||{});
							
							
							}
								
							var lib, images, createjs;

							

						$(document).ready(function(){
							$('#imgdiv1').hide();
							$('#videoViewport').show();
							init2();
							init();
							
						});
							