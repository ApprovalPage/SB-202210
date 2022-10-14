(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.SUB = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAGQgCgCAAgEQABgDACgDQADgCADAAQAEAAACACQADADgBADQAAAEgDACQgEADgCAAQgEAAgCgDg");
	this.shape.setTransform(266.9,12.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcAaQgIgKACgQQACgPAMgLQAMgKAOAAQAPAAAIAKQAIAKgCAQIgBADIg4AAQAAAKAFAGQAGAHAJAAQANAAAKgKIAIAGQgNAPgTAAQgRAAgIgLgAgLgTQgHAFgCAIIArAAQABgIgFgFQgFgGgKAAQgIAAgHAGg");
	this.shape_1.setTransform(261.0761,9.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNA5IAPhxIAMAAIgPBxg");
	this.shape_2.setTransform(255.4,7.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQA1QgHgDgCgHIAAAAIgCANIgMAAIAQhxIAMAAIgIA2IABAAQAMgMANAAQARAAAJAKQAJAKgDAQQgCAPgMALQgLALgOAAQgJAAgHgFgAgNACQgHAHgCAMQgCALAGAHQAGAIALAAQAKAAAIgIQAIgHACgLQABgMgFgHQgGgGgMAAQgKAAgIAGg");
	this.shape_3.setTransform(248.6772,7.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAfQgGgFABgKQACgQARgEQAKgDASgBIAEAAIABgCQACgPgSAAQgLAAgKAIIgGgIQAMgLAQAAQAQAAAGAIQAGAGgCAPIgFAeIAAAMIgLAAIAAgKIAAAAQgKAMgOAAQgLAAgHgGgAgSAPQgCAMAQAAQAIAAAHgHQAGgFABgJIABgFIgMAAQgXAAgCAOg");
	this.shape_4.setTransform(240.0683,9.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNA5IAPhxIAMAAIgPBxg");
	this.shape_5.setTransform(234.9,7.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNA1IAKhFIALAAIgJBFgAgBglQgCgDABgEQAAgDACgDQADgCAEAAQADAAACACQADADgBADQAAAEgDADQgDACgEAAQgEAAgBgCg");
	this.shape_6.setTransform(231.3143,8.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaAfQgGgFABgKQACgQARgEQAKgDASgBIAEAAIABgCQACgPgSAAQgLAAgKAIIgGgIQAMgLAQAAQAQAAAGAIQAGAGgCAPIgFAeIAAAMIgLAAIAAgKIAAAAQgKAMgOAAQgLAAgHgGgAgSAPQgCAMAQAAQAIAAAHgHQAGgFABgJIABgFIgMAAQgXAAgCAOg");
	this.shape_7.setTransform(225.1183,9.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAjIgShFIANAAIAOA2IABAAIAbg2IAMAAIgkBFg");
	this.shape_8.setTransform(218.35,9.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaAfQgGgFABgKQACgQARgEQAKgDASgBIAEAAIABgCQACgPgSAAQgLAAgKAIIgGgIQAMgLAQAAQAQAAAGAIQAGAGgCAPIgFAeIAAAMIgLAAIAAgKIAAAAQgKAMgOAAQgLAAgHgGgAgSAPQgCAMAQAAQAIAAAHgHQAGgFABgJIABgFIgMAAQgXAAgCAOg");
	this.shape_9.setTransform(210.1683,9.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdAYIAKgHQAGAJALAAQAFAAAEgCQAGgDABgGQABgFgEgCQgDgCgHgCQgMgDgEgCQgHgEABgLQACgJAJgGQAIgFAJAAQASAAAFAMIgLAHQgEgIgKAAQgFAAgEACQgEADgBAEQAAAIAPADQALACAFADQAGAFgBAKQgCALgKAFQgIAGgLAAQgSAAgHgNg");
	this.shape_10.setTransform(199,9.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAPAkIAGgpQADgTgQAAQgVAAgEAaIgEAiIgMAAIAHg0IACgRIALAAIgBALIAAAAQADgFAHgEQAGgEAIAAQAOAAAGAIQAFAIgCAMIgGArg");
	this.shape_11.setTransform(191.7017,9.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdAbQgKgLADgQQACgPAMgLQAMgKAPAAQARAAAJAKQAJALgCAPQgDARgMAKQgMAKgPAAQgQAAgJgKgAgOgRQgIAHgCAKQgBALAFAHQAGAIAMAAQAKAAAIgIQAIgHABgLQACgKgGgHQgGgIgLAAQgKAAgIAIg");
	this.shape_12.setTransform(183.2421,9.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgNA1IAKhFIALAAIgJBFgAgBglQgCgDABgEQAAgDACgDQADgCAEAAQADAAACACQADADgBADQAAAEgDADQgDACgEAAQgEAAgBgCg");
	this.shape_13.setTransform(177.3143,8.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNAnQgCgEABgNIAFgmIgPAAIACgJIAPAAIADgUIALAAIgDAUIAVAAIgCAJIgVAAIgDAjQgCAIABADQABAFAHAAQAGAAAEgCIgBALQgGACgIAAQgLAAgDgHg");
	this.shape_14.setTransform(172.95,8.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgpA1IAPhnIALAAIgBAKIAAAAQAMgMAOAAQAQAAAJAKQAJALgCAQQgCAPgMAKQgMALgPAAQgIAAgHgEQgGgEgCgHIgBAAIgGAvgAgKghQgIAHgCALQgBALAGAGQAFAIALAAQALAAAIgIQAIgGABgLQACgLgGgHQgGgIgLAAQgKAAgIAIg");
	this.shape_15.setTransform(165.0772,11.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgdAbQgKgLADgQQACgPAMgLQAMgKAPAAQARAAAJAKQAJALgCAPQgDARgMAKQgMAKgPAAQgQAAgJgKgAgOgRQgIAHgCAKQgBALAFAHQAGAIAMAAQAKAAAIgIQAIgHABgLQACgKgGgHQgGgIgLAAQgKAAgIAIg");
	this.shape_16.setTransform(156.3421,9.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgxA1IAOhpIAoAAQATAAANALQARAPgEAaQgEAagUAPQgRAMgSAAgAgjAqIAYAAQASAAANgLQANgKADgVQADgUgKgLQgKgJgTgBIgYAAg");
	this.shape_17.setTransform(142.339,8.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AglAoQgOgQAEgYQADgXASgPQARgRAXAAQAYAAALARIgMAIQgIgNgRAAQgQAAgOANQgNANgDARQgCATAJAMQAKANARAAQATAAANgPIAJAIQgRATgZAAQgXAAgNgQg");
	this.shape_18.setTransform(131.864,8.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgpA1IAPhnIALAAIgBAKIAAAAQAMgMAOAAQAQAAAJAKQAJALgCAQQgCAPgMAKQgMALgPAAQgIAAgHgEQgGgEgCgHIgBAAIgGAvgAgKghQgIAHgCALQgBALAGAGQAFAIALAAQALAAAIgIQAIgGABgLQACgLgGgHQgGgIgLAAQgKAAgIAIg");
	this.shape_19.setTransform(117.0772,11.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgnApQgHgLADgTIAJhAIANAAIgJA+QgFAiAbAAQAOAAAIgLQAHgIADgPIAIg+IANAAIgJBAQgDATgLALQgMANgTAAQgVAAgJgNg");
	this.shape_20.setTransform(108.0321,8.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgpA1IAPhnIALAAIgBAKIAAAAQAMgMAOAAQAQAAAJAKQAJALgCAQQgCAPgMAKQgMALgPAAQgIAAgHgEQgGgEgCgHIgBAAIgGAvgAgKghQgIAHgCALQgBALAGAGQAFAIALAAQALAAAIgIQAIgGABgLQACgLgGgHQgGgIgLAAQgKAAgIAIg");
	this.shape_21.setTransform(93.2272,11.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAmAkIAGgpQACgTgRAAQgHAAgGAGQgGAGgCAIIgGAoIgKAAIAFgnQACgMgCgEQgDgFgHAAQgWAAgEAaIgEAiIgMAAIAHg0IACgRIALAAIgBALIAAAAQADgFAHgEQAHgEAIAAQAPAAAFANQAKgNAOAAQAOAAAGAIQAEAHgCAOIgGAqg");
	this.shape_22.setTransform(82.4058,9.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgdAcQgFgIACgNIAGgqIALAAIgGApQgCATAQAAQAVAAADgaIAFgiIAMAAIgIA0IgBARIgLAAIABgLQgEAFgGAEQgHAEgIAAQgNAAgGgIg");
	this.shape_23.setTransform(72.2233,9.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgnA1IAPhpIAgAAQAPAAAIAGQAKAGgCAOQgCATgUAFQAKABAGAHQAGAHgBALQgDAPgOAIQgLAGgRAAgAgYAqIAVAAQAKAAAHgFQAJgFABgJQACgLgIgEQgFgFgLAAIgVAAgAgRgHIARAAQAXAAADgSQACgQgXAAIgSAAg");
	this.shape_24.setTransform(63.2167,8.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgpAvQgJgIACgOQADgVAZgKQgLgMACgMQABgLAKgHQAIgGALAAQALAAAHAGQAGAGgBALQgCAQgXALIASAXIARgXIAPAAIgZAgIAUAZIgRAAIgMgQQgPASgSAAQgOAAgJgIgAgjAYQgBAJAFAFQAFAGAJAAQAMAAANgPIgVgcQgUALgCAMgAgLgoQgFAFgBAGQgBAHAHAHIADAEQAIgFAEgDQAGgFABgHQABgGgDgDQgEgDgFgBQgGABgFADg");
	this.shape_25.setTransform(49.1568,8.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgjAvQgJgLADgPQACgQAMgKQALgKAQAAQAPAAAIAMIABAAIAHg2IAMAAIgQBxIgMAAIACgNIAAAAQgFAHgHADQgHAFgJAAQgPAAgJgLgAgTACQgIAHgCAMQgBALAFAHQAGAIAMAAQAKAAAIgIQAIgHABgLQACgMgGgHQgGgGgKAAQgLAAgIAGg");
	this.shape_26.setTransform(35.1228,7.775);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgcAaQgIgKACgQQACgPAMgLQAMgKAOAAQAPAAAIAKQAIAKgCAQIgBADIg4AAQAAAKAFAGQAGAHAJAAQANAAAKgKIAIAGQgNAPgTAAQgRAAgIgLgAgLgTQgHAFgCAIIArAAQABgIgFgFQgFgGgKAAQgIAAgHAGg");
	this.shape_27.setTransform(26.0761,9.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AATAjIgSgfIgZAfIgPAAIAjglIgVggIAPAAIAOAZIAVgZIAPAAIgdAgIAXAlg");
	this.shape_28.setTransform(17.9,9.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgNA1IAKhFIALAAIgJBFgAgBglQgCgDABgEQAAgDACgDQADgCAEAAQADAAACACQADADgBADQAAAEgDADQgDACgEAAQgEAAgBgCg");
	this.shape_29.setTransform(12.9143,8.05);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgnA1IAOhpIBCAAIgCALIg0AAIgFAjIAwAAIgCAMIgwAAIgHAvg");
	this.shape_30.setTransform(7.35,8.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SUB, new cjs.Rectangle(0,0,295.3,19), null);


(lib.SeattleBankhorizwhitevector = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqFCGIAAkLIUKAAIAAELg");
	mask.setTransform(64.55,13.375);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKANQgfgJgZgBIAAgBQAqgWAeAKQAiALAbACIAAAAQgjALgaAAIgQgBg");
	this.shape.setTransform(14.725,23.777);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0ANQgUgEgNgFIAAgBQAVgDAagJQATgGAOgBQAPgBAZAIIAyAPQAAAAAAAAQABABAAAAQgBAAAAAAQAAAAgBAAIgSAAQgZACggAGQgLACgNAAQgRAAgUgEg");
	this.shape_1.setTransform(29.5071,25.0719);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag4AAQALAAAMgBIAcgHQAXgGAnANQAAABAAAAQgQAAgoAJQgIACgIAAQgUAAgVgLg");
	this.shape_2.setTransform(24.95,21.7369);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAdBbIglhDIgXAaIAAApIgVAAIAAi1IAVAAIAABxIABAAIA1g+IAXAAIgoAuIAvBUg");
	this.shape_3.setTransform(123.8,9.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAdBDIAAhYQAAgagVAAQgRAAgTAUIAABeIgWAAIAAiCIAUAAIAAASQAWgVAWAAQAVAAAJANQAHAKAAAWIAABYg");
	this.shape_4.setTransform(109.925,11.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgqA7QgJgKAAgQQgBgYAWgLQAQgIArgJQABgRgGgHQgGgHgPAAQgUAAgNAUIgQgKQARgbAhAAQAuAAAAAqIAABGIACAVIgVAAIgBgQQgWASgXAAQgRAAgKgJgAgSAJQgMAHAAAPQABAUATAAQAXAAAQgTIAAgkQgkAHgLAGg");
	this.shape_5.setTransform(96.3,11.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag/BbIAAi1IAzAAQAjAAARAMQARALAAAXQAAAdgbAKIAAABQAiAKAAAiQAAAzhFAAgAgoBGIAhAAQAYAAAMgHQALgIAAgQQAAghgrAAIglAAgAgogMIAdAAQAsAAAAgeQAAgRgQgGQgKgEgVAAIgaAAg");
	this.shape_6.setTransform(82.325,9.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnAyQgPgSAAggQAAgeAQgTQAPgTAYAAQAaAAAOASQAOARAAAdIgBAHIhXAAQADAvAgAAQAXAAANgXIAQAJQgRAgglAAQgZAAgOgSgAgWgnQgIAKgCARIBCAAQgBgSgIgKQgJgKgPAAQgOAAgJALg");
	this.shape_7.setTransform(67.275,11.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKBaIAAi0IAVAAIAAC0g");
	this.shape_8.setTransform(58.025,9.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHBRQgHgIAAgTIAAhQIgTAAIAAgSIATAAIAAgrIAUAAIAAArIAcAAIAAASIgcAAIAABPQAAAQAOAAIAOgCIAAATQgLACgJAAQgPAAgGgHg");
	this.shape_9.setTransform(50.95,9.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIBRQgGgIAAgTIAAhQIgUAAIAAgSIAUAAIAAgrIAUAAIAAArIAcAAIAAASIgcAAIAABPQAAAQAOAAIAOgCIAAATIgTACQgPAAgIgHg");
	this.shape_10.setTransform(43,9.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgqA7QgKgKAAgQQAAgYAXgLQAPgIArgJQACgRgHgHQgGgHgPAAQgUAAgNAUIgQgKQARgbAhAAQAuAAABAqIAABGIACAVIgVAAIgDgQQgVASgXAAQgRAAgKgJgAgSAJQgLAHAAAPQAAAUAUAAQAJAAALgFQALgFAGgJIAAgkQgiAHgMAGg");
	this.shape_11.setTransform(32.45,11.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgnAyQgPgSAAggQAAgeAQgTQAPgTAYAAQAaAAAOASQAOARAAAdIAAAHIhYAAQADAvAgAAQAYAAAMgXIAQAJQgRAggkAAQgaAAgOgSgAgggMIBCAAQgBgSgIgKQgJgKgPAAQgcAAgFAmg");
	this.shape_12.setTransform(19.925,11.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgmBSQgPgLgJgYIAWgIQAGASAKAHQAKAJARAAQARAAAKgIQAKgIAAgPQAAgUgvgRQgxgPAAgiQAAgXAQgNQAPgNAZAAQAuAAAMApIgUAIQgGgPgJgGQgJgHgOAAQgPAAgJAHQgJAHAAANQAAAOAPAIQAFADAbAKQAxAPAAAkQAAAZgRAOQgQAOgcAAQgZAAgPgMg");
	this.shape_13.setTransform(6.275,9.375);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SeattleBankhorizwhitevector, new cjs.Rectangle(0,0,129.1,26.8), null);


(lib.MemberFDICwhite = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ai7BzIAAjlIF3AAIAADlg");
	mask.setTransform(18.75,11.525);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTBJIAAiRIAnAAIAACRg");
	this.shape.setTransform(24.05,15.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNASQgHgGAAgLQAAgKAGgGQAGgHAJAAQAJAAAFAHQAGAGAAAKIgdAAQAAAPALAAQAJAAABgKIAIAAQgCARgRAAQgJAAgGgFgAgHgFIAQAAQAAgKgIAAQgIAAAAAKg");
	this.shape_1.setTransform(11.025,3.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUABQAAgJAGgHQAGgHAIAAQAKAAAFAHQAGAGAAAKIgdAAQAAAPALAAQAIAAACgKIAIAAQgCARgRAAQgWAAAAgWgAgHgFIAQAAQAAgKgJAAQgHAAAAAKg");
	this.shape_2.setTransform(30.375,3.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAWIAAgGQAGAAACgCQABAAAAgFIAAgRQAAgEgCgBQgCgBgFAAIAAgGIATAAIAAAGQAGgIAGAAQAKAAAAALQAAAIgHAAQgGAAAAgGQAAgEAFgCIgEgBQgJABAAAPIAAAKQAAAEAAABIAIABIAAAGg");
	this.shape_3.setTransform(35.25,3.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAZIgEAFIgFAAIAAguQAAgGgBgBQgBgBgGAAIAAgHIATAAIAAAXQAGgGAGAAQAIAAAFAGQAFAHAAAJQAAALgFAGQgFAHgJAAQgHAAgGgHgAgFAJQAAAPAIAAQAJAAAAgQQAAgOgJAAQgIAAAAAPg");
	this.shape_4.setTransform(24.975,3.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgoBJIAAiRIBRAAIAAAiIgpAAIAAAWIAmAAIAAAhIgmAAIAAA4g");
	this.shape_5.setTransform(4.225,15.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAQAWIAAgGQAEAAABgCQAAAAABAAQAAAAAAgBQAAAAAAgBQAAgBAAgBIAAgPQAAgJgGAAQgKAAAAAOIAAAKQAAABAAABQAAABAAAAQAAABAAAAQAAAAABAAQABACAEAAIAAAGIgXAAIAAgGQAFAAABgCQABgBAAgDIAAgQQAAgHgHgBQgKABAAANIAAAGQAAAGABACQABACAEAAIAAAGIgaAAIAAgGQAHAAABgCQABgBAAgGIAAgOQAAgFgCgBQgBgBgGAAIAAgGIAUAAIAAAHQAHgJAIAAQAHABAFAHQAHgHAIgBQANAAAAAQIAAARQAAABAAABQAAAAAAABQAAAAABABQAAAAAAAAIAHABIAAAGg");
	this.shape_6.setTransform(17.975,3.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAJAfIAAgHIAJgCQABAAAAgGIAAghIgSAwIgHAAIgQgwIAAAiQAAAEACACQABABAGAAIAAAHIgcAAIAAgHQAGAAACgCQABgBAAgFIAAggQAAgFgCgBQgBgBgGAAIAAgHIAcAAIANAmIAOgmIAcAAIAAAHQgGAAgCACQgCABAAAFIAAAhQAAAEACABQABABAHAAIAAAHg");
	this.shape_7.setTransform(4.2,3.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggA2QgWgWAAgfQAAgfAXgWQAWgVAfAAQASgBAPAHIAAAnQgSgMgNAAQgQAAgLAMQgLALAAARQAAAQALALQAKAKARABQAPgBAQgKIAAAmQgMAKgWgBQgfAAgWgUg");
	this.shape_8.setTransform(32.025,15.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag+BJIAAiRIAzAAQAiAAAUAUQAVAUAAAgQAAAkgXATQgWASgnAAgAgWgmIAABNQAuAAAAgnQAAgSgMgLQgKgKgRABg");
	this.shape_9.setTransform(15.25,15.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MemberFDICwhite, new cjs.Rectangle(0,0,37.5,23.1), null);


(lib.LEGAL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDAFIAAgJIAIAAIAAAJg");
	this.shape.setTransform(236.6,19.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAbIAAgFIADAAQAEAAACgCQACgCACgFIgPgoIAHAAIALAfIAMgfIAHAAIgQAqQgDAHgCADQgEADgHAAIgDgBg");
	this.shape_1.setTransform(233.825,19.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCAdIAAg5IAGAAIAAA5g");
	this.shape_2.setTransform(231,17.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAcIAAg2IAGAAIAAAFIABAAQABgDAEgCQADgBADAAQAIAAAEAFQAFAGAAAKQAAAJgFAFQgEAGgIAAQgDAAgDgCQgEgBgBgDIAAAUgAgIgSQgDAFAAAHQAAAGADAEQADAFAFAAQAEAAAEgFQADgEAAgGQAAgHgDgFQgEgEgEAAQgFAAgDAEg");
	this.shape_3.setTransform(227.875,19.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAcIAAg2IAGAAIAAAFIABAAQABgDAEgCQADgBADAAQAIAAAEAFQAFAGAAAKQAAAJgFAFQgEAGgIAAQgDAAgDgCQgEgBgBgDIAAAUgAgIgSQgDAFAAAHQAAAGADAEQADAFAFAAQAEAAAEgFQADgEAAgGQAAgHgDgFQgEgEgEAAQgFAAgDAEg");
	this.shape_4.setTransform(223.275,19.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMASQgEgDgBgGQAAgFAEgDQAEgCAIgCIALAAIAAgCQAAgKgKAAQgHAAgBAJIgGAAQgBgGAFgFQAEgEAGAAQARABgBAQIAAAOIABALIgFAAIgBgHQgFAIgIAAQgHgBgDgDgAAAACQgFABgCACQAAAAgBAAQAAABAAAAQgBABAAABQAAAAAAABQAAADACACQACACAEAAQAEAAADgDQAEgDAAgHIAAgDIgKACg");
	this.shape_5.setTransform(218.6,18.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAbIAAgFIADAAQAEAAACgCQACgCACgFIgPgoIAHAAIALAfIAMgfIAHAAIgQAqQgDAHgCADQgEADgHAAIgDgBg");
	this.shape_6.setTransform(212.925,19.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMASQgFgDAAgGQABgFADgDQAEgCAIgCIALAAIAAgCQAAgKgKAAQgHAAgBAJIgHAAQAAgGAFgFQAEgEAGAAQAQABABAQIAAAOIAAALIgGAAIgBgHQgEAIgIAAQgHgBgDgDgAAAACQgFABgCACQAAAAgBAAQAAABgBAAQAAABAAABQAAAAAAABQAAADACACQADACADAAQAFAAADgDQADgDAAgHIAAgDIgKACg");
	this.shape_7.setTransform(208.85,18.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVAVIAAgYQAAgLgIAAQgEAAgDADQgDAEAAAGIAAAWIgGAAIAAgZQAAgFgCgCQgCgDgEAAQgEAAgDAEQgCADAAAGIAAAWIgHAAIAAgoIAGAAIAAAFQAFgGAHAAQAJAAACAIQAEgIAJAAQANAAAAARIAAAYg");
	this.shape_8.setTransform(203.425,18.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLASQgFgEAAgHIAHAAQAAAJAJAAQAEAAADgCQACgCAAgCQAAgDgCgCIgIgCIgJgDQgFgCAAgHQAAgFAFgDQAEgDAGgBQAHAAAEAEQAEAEAAAHIgHAAQAAgJgIAAQgDAAgDACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQAAABABAAIAGACIALADQAFADAAAGQAAAGgFADQgEAEgIAAQgHgBgEgDg");
	this.shape_9.setTransform(196.175,18.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAKAVIAAgYQAAgLgJAAQgEAAgDADQgDAEAAAFIAAAXIgHAAIAAgoIAHAAIAAAFQAEgGAHAAQAPAAAAARIAAAYg");
	this.shape_10.setTransform(191.925,18.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNAQQgFgGAAgKQAAgJAFgFQAFgHAIAAQAJAAAFAHQAFAFAAAJQAAAKgFAGQgFAFgJABQgIgBgFgFgAgIgLQgDAFAAAGQAAAHADAFQADAEAFAAQAFAAAEgEQADgFAAgHQAAgGgDgFQgEgDgFAAQgFAAgDADg");
	this.shape_11.setTransform(187.375,18.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgDAdIAAgoIAGAAIAAAogAgDgUIAAgIIAGAAIAAAIg");
	this.shape_12.setTransform(184.15,17.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgBAXQgCgDAAgGIAAgXIgHAAIAAgFIAHAAIAAgKIAGAAIAAAKIAIAAIAAAFIgIAAIAAAWIABAFQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAIADgBIAAAGIgEAAQgGAAgCgCg");
	this.shape_13.setTransform(181.825,17.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDAdIAAgoIAGAAIAAAogAgDgUIAAgIIAGAAIAAAIg");
	this.shape_14.setTransform(179.65,17.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNAXQgEgFAAgKQAAgJAEgGQAFgGAHABQAIgBAEAHIAAAAIAAgWIAHAAIAAA4IgHAAIAAgGQgEAHgHAAQgIAAgFgGgAgHgDQgDADAAAIQAAAHADAEQADAFAEAAQAFAAADgFQADgEAAgHQAAgIgDgDQgDgEgFAAQgEAAgDAEg");
	this.shape_15.setTransform(176.225,17.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAKAVIAAgYQAAgLgJAAQgEAAgDADQgDAEAAAFIAAAXIgHAAIAAgoIAHAAIAAAFQAEgGAHAAQAPAAAAARIAAAYg");
	this.shape_16.setTransform(171.775,18.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgNAQQgFgGAAgKQAAgJAFgFQAFgHAIAAQAJAAAFAHQAFAFAAAJQAAAKgFAGQgFAFgJABQgIgBgFgFgAgIgLQgDAFAAAGQAAAHADAFQADAEAFAAQAFAAAEgEQADgFAAgHQAAgGgDgFQgEgDgFAAQgFAAgDADg");
	this.shape_17.setTransform(167.225,18.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgMAQQgFgGAAgKQAAgJAFgFQAFgHAIAAQAHABAFAEQAEAEABAIIgHAAQgBgFgCgDQgDgCgEAAQgFAAgDADQgDAFAAAGQAAAHADAFQADAEAFAAQAEAAADgDQACgDABgFIAHAAQgBAHgEAFQgFAEgHABQgIgBgFgFg");
	this.shape_18.setTransform(162.875,18.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNAXQgEgFAAgKQAAgJAEgGQAFgGAHABQAIgBAEAHIAAAAIAAgWIAHAAIAAA4IgHAAIAAgGQgEAHgHAAQgIAAgFgGgAgHgDQgDADAAAIQAAAHADAEQADAFAEAAQAFAAADgFQADgEAAgHQAAgIgDgDQgDgEgFAAQgEAAgDAEg");
	this.shape_19.setTransform(156.475,17.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAKAVIAAgYQAAgLgJAAQgEAAgDADQgDAEAAAFIAAAXIgHAAIAAgoIAHAAIAAAFQAEgGAHAAQAPAAAAARIAAAYg");
	this.shape_20.setTransform(152.025,18.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgMASQgEgDgBgGQAAgFAEgDQAEgCAIgCIALAAIAAgCQAAgKgKAAQgHAAgBAJIgGAAQgBgGAFgFQAEgEAGAAQARABgBAQIAAAOIABALIgFAAIgBgHQgFAIgJAAQgGgBgDgDgAAAACQgFABgCACQAAAAgBAAQAAABAAAAQgBABAAABQAAAAAAABQAAADACACQACACAEAAQAEAAADgDQAEgDAAgHIAAgDIgKACg");
	this.shape_21.setTransform(147.5,18.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgLASQgFgEAAgHIAHAAQAAAJAJAAQAEAAADgCQACgCAAgCQAAgDgCgCIgIgCIgJgDQgFgCAAgHQAAgFAFgDQAEgDAGgBQAHAAAEAEQAEAEAAAHIgHAAQAAgJgIAAQgDAAgDACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQAAABABAAIAGACIALADQAFADAAAGQAAAGgFADQgEAEgIAAQgHgBgEgDg");
	this.shape_22.setTransform(141.725,18.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAVAVIAAgYQAAgLgIAAQgEAAgDADQgDAEAAAGIAAAWIgGAAIAAgZQAAgFgCgCQgCgDgEAAQgEAAgDAEQgCADAAAGIAAAWIgHAAIAAgoIAGAAIAAAFQAFgGAHAAQAJAAACAIQAEgIAJAAQANAAAAARIAAAYg");
	this.shape_23.setTransform(136.325,18.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgKAVIAAgoIAHAAIAAAGQADgGAIgBIADABIAAAGIgDAAQgGAAgCADQgDAEAAAGIAAAVg");
	this.shape_24.setTransform(131.725,18.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgNAPQgEgFgBgKQABgIAEgGQAFgHAIAAQAHAAAFAEQAEAFACAGIABAIIgeAAQABAHADAEQADADAFAAQADAAADgCQAEgCAAgEIAIAAQgCAGgEADQgFAFgHAAQgJAAgFgHgAAMgDQgBgGgDgCQgDgEgFAAQgEAAgDAEQgDACgBAGIAXAAIAAAAg");
	this.shape_25.setTransform(127.8,18.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgBAXQgCgDAAgGIAAgXIgHAAIAAgFIAHAAIAAgKIAGAAIAAAKIAIAAIAAAFIgIAAIAAAWIABAFQAAAAABABQAAAAABAAQAAAAABAAQABABAAAAIADgBIAAAGIgEAAQgGAAgCgCg");
	this.shape_26.setTransform(124.275,17.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgCAdIAAg5IAGAAIAAA5g");
	this.shape_27.setTransform(120.3,17.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgNASQgDgDAAgGQgBgFAEgDQADgCAJgCIALAAIAAgCQAAgKgJAAQgIAAAAAJIgHAAQAAgGAEgFQAEgEAHAAQAPABAAAQIAAAOIACALIgGAAIgBgHQgFAIgJAAQgGgBgEgDgAAAACQgFABgCACQgBAAAAAAQAAABgBAAQAAABAAABQAAAAAAABQAAADACACQADACADAAQAEAAADgDQAEgDAAgHIAAgDIgKACg");
	this.shape_28.setTransform(117.1,18.35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAKAVIAAgYQAAgLgJAAQgEAAgDADQgDAEAAAFIAAAXIgHAAIAAgoIAHAAIAAAFQAEgGAHAAQAPAAAAARIAAAYg");
	this.shape_29.setTransform(112.825,18.325);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgNAQQgFgGAAgKQAAgJAFgFQAFgHAIAAQAJAAAFAHQAFAFAAAJQAAAKgFAGQgFAFgJABQgIgBgFgFgAgIgLQgDAFAAAGQAAAHADAFQADAEAFAAQAFAAAEgEQADgFAAgHQAAgGgDgFQgEgDgFAAQgFAAgDADg");
	this.shape_30.setTransform(108.275,18.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgDAdIAAgoIAGAAIAAAogAgDgUIAAgIIAGAAIAAAIg");
	this.shape_31.setTransform(105.05,17.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgBAXQgCgDAAgGIAAgXIgHAAIAAgFIAHAAIAAgKIAGAAIAAAKIAIAAIAAAFIgIAAIAAAWIABAFQAAAAABABQAAAAABAAQAAAAABAAQABABAAAAIADgBIAAAGIgEAAQgGAAgCgCg");
	this.shape_32.setTransform(102.725,17.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgDAdIAAgoIAGAAIAAAogAgDgUIAAgIIAGAAIAAAIg");
	this.shape_33.setTransform(100.55,17.55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgNAXQgEgFAAgKQAAgJAEgGQAFgGAHABQAIgBAEAHIAAAAIAAgWIAHAAIAAA4IgHAAIAAgGQgEAHgHAAQgIAAgFgGgAgHgDQgDADAAAIQAAAHADAEQADAFAEAAQAFAAADgFQADgEAAgHQAAgIgDgDQgDgEgFAAQgEAAgDAEg");
	this.shape_34.setTransform(97.125,17.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgNAXQgEgFAAgKQAAgJAEgGQAFgGAHABQAIgBAEAHIAAAAIAAgWIAHAAIAAA4IgHAAIAAgGQgEAHgHAAQgIAAgFgGgAgHgDQgDADAAAIQAAAHADAEQADAFAEAAQAFAAADgFQADgEAAgHQAAgIgDgDQgDgEgFAAQgEAAgDAEg");
	this.shape_35.setTransform(92.525,17.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AASAdIgFgRIgYAAIgHARIgIAAIAWg5IAJAAIAVA5gAAKAFIgCgFIgIgWIgIAWIgBAFIATAAg");
	this.shape_36.setTransform(87.65,17.55);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgDAFIAAgJIAIAAIAAAJg");
	this.shape_37.setTransform(82.25,19.925);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgNAPQgEgFAAgKQAAgIAEgGQAGgHAHAAQAHAAAEAEQAGAFABAGIAAAIIgcAAQgBAHAEAEQADADAEAAQAFAAADgCQADgCAAgEIAHAAQgBAGgEADQgFAFgIAAQgHAAgGgHgAAMgDQgBgGgDgCQgDgEgFAAQgEAAgDAEQgDACAAAGIAWAAIAAAAg");
	this.shape_38.setTransform(79.15,18.35);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgMAQQgFgGAAgKQAAgJAFgFQAFgHAIAAQAHABAFAEQAEAEABAIIgHAAQgBgFgCgDQgDgCgEAAQgFAAgDADQgDAFAAAGQAAAHADAFQADAEAFAAQAEAAADgDQACgDABgFIAHAAQgBAHgEAFQgFAEgHABQgIgBgFgFg");
	this.shape_39.setTransform(74.875,18.35);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgDAdIAAgoIAGAAIAAAogAgDgUIAAgIIAGAAIAAAIg");
	this.shape_40.setTransform(71.75,17.55);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgBAXQgCgDAAgGIAAgXIgHAAIAAgFIAHAAIAAgKIAGAAIAAAKIAIAAIAAAFIgIAAIAAAWIABAFQAAAAABABQAAAAABAAQAAAAABAAQABABAAAAIADgBIAAAGIgEAAQgGAAgCgCg");
	this.shape_41.setTransform(69.425,17.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgNAQQgFgGAAgKQAAgJAFgFQAFgHAIAAQAJAAAFAHQAFAFAAAJQAAAKgFAGQgFAFgJABQgIgBgFgFgAgIgLQgDAFAAAGQAAAHADAFQADAEAFAAQAFAAAEgEQADgFAAgHQAAgGgDgFQgEgDgFAAQgFAAgDADg");
	this.shape_42.setTransform(65.975,18.35);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAKAVIAAgYQAAgLgJAAQgEAAgDADQgDAEAAAFIAAAXIgHAAIAAgoIAHAAIAAAFQAEgGAHAAQAPAAAAARIAAAYg");
	this.shape_43.setTransform(61.425,18.325);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgBAXQgCgDAAgGIAAgXIgHAAIAAgFIAHAAIAAgKIAGAAIAAAKIAIAAIAAAFIgIAAIAAAWIABAFQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAIADgBIAAAGIgEAAQgGAAgCgCg");
	this.shape_44.setTransform(55.975,17.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgQAEIAAgYIAHAAIAAAXQAAAMAJAAQAEAAACgDQAEgEAAgGIAAgWIAHAAIAAAoIgHAAIAAgGQgEAHgHAAQgPAAAAgRg");
	this.shape_45.setTransform(52.45,18.425);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgNAQQgFgGAAgKQAAgJAFgFQAFgHAIAAQAJAAAFAHQAFAFAAAJQAAAKgFAGQgFAFgJABQgIgBgFgFgAgIgLQgDAFAAAGQAAAHADAFQADAEAFAAQAFAAAEgEQADgFAAgHQAAgGgDgFQgEgDgFAAQgFAAgDADg");
	this.shape_46.setTransform(47.925,18.35);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAKAdIAAgZQAAgKgJAAQgEAAgDADQgDADAAAFIAAAYIgHAAIAAg5IAHAAIAAAWQAEgGAHAAQAPAAAAAQIAAAZg");
	this.shape_47.setTransform(43.375,17.55);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgBAXQgCgDAAgGIAAgXIgHAAIAAgFIAHAAIAAgKIAGAAIAAAKIAIAAIAAAFIgIAAIAAAWIABAFQAAAAABABQAAAAABAAQAAAAABAAQABABAAAAIADgBIAAAGIgEAAQgGAAgCgCg");
	this.shape_48.setTransform(39.725,17.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgDAdIAAgoIAGAAIAAAogAgDgUIAAgIIAGAAIAAAIg");
	this.shape_49.setTransform(37.55,17.55);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAJAUIgEgRIgFgRIAAAAIgDARIgFARIgKAAIgLgnIAHAAIAEARIAFARIAEgRIAFgRIAJAAIAFARIAEARIAFgRIAEgRIAHAAIgLAng");
	this.shape_50.setTransform(33.475,18.375);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgNAPQgEgFAAgKQAAgIAEgGQAGgHAHAAQAHAAAEAEQAFAFACAGIABAIIgdAAQAAAHADAEQADADAFAAQADAAAEgCQADgCAAgEIAIAAQgCAGgEADQgFAFgHAAQgIAAgGgHgAAMgDQgBgGgDgCQgDgEgFAAQgEAAgDAEQgDACAAAGIAWAAIAAAAg");
	this.shape_51.setTransform(26.4,18.35);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgLAZQgEgDAAgHIAHAAQAAAEACACQADACAEAAQAKAAAAgNIAAgEQgEAGgHAAQgIAAgFgFQgEgFAAgJQAAgJAEgGQAFgGAIABQAHAAAEAGIAAAAIAAgFIAHAAIAAAlQAAARgRABQgIgBgEgDgAgHgSQgDAEAAAHQAAAHADADQADADAEAAQAFAAAEgDQACgDAAgHQAAgHgCgEQgEgEgFAAQgEAAgDAEg");
	this.shape_52.setTransform(21.8,19.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAKAVIAAgYQAAgLgJAAQgEAAgDADQgDAEAAAFIAAAXIgHAAIAAgoIAHAAIAAAFQAEgGAHAAQAPAAAAARIAAAYg");
	this.shape_53.setTransform(17.375,18.325);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgMASQgFgDAAgGQAAgFAEgDQADgCAJgCIALAAIAAgCQAAgKgKAAQgHAAgBAJIgGAAQgBgGAFgFQAEgEAGAAQARABgBAQIAAAOIABALIgFAAIgCgHQgEAIgIAAQgHgBgDgDgAAAACQgFABgCACQAAAAgBAAQAAABAAAAQgBABAAABQAAAAAAABQAAADACACQACACAEAAQAFAAADgDQADgDAAgHIAAgDIgKACg");
	this.shape_54.setTransform(12.85,18.35);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAKAdIAAgZQAAgKgJAAQgEAAgDADQgDADAAAFIAAAYIgHAAIAAg5IAHAAIAAAWQAEgGAHAAQAPAAAAAQIAAAZg");
	this.shape_55.setTransform(8.575,17.55);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgMAQQgFgGAAgKQAAgJAFgFQAFgHAIAAQAHABAFAEQAEAEABAIIgHAAQgBgFgCgDQgDgCgEAAQgFAAgDADQgDAFAAAGQAAAHADAFQADAEAFAAQAEAAADgDQACgDABgFIAHAAQgBAHgEAFQgFAEgHABQgIgBgFgFg");
	this.shape_56.setTransform(4.175,18.35);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgQAbIAAgFIADAAQAEAAACgCQACgCACgFIgPgoIAHAAIALAfIAMgfIAHAAIgQAqQgDAHgCADQgEADgHAAIgDgBg");
	this.shape_57.setTransform(232.225,10.075);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgMASQgEgEAAgEQAAgGADgDQAEgCAIgCIALgBIAAgCQAAgJgJAAQgIAAAAAJIgHAAQgBgGAFgEQAEgEAHgBQAPAAAAAQIAAAPIABAKIgFAAIgBgGQgFAIgJgBQgGABgDgEgAAAACQgFABgCABQgBABAAAAQAAABAAAAQgBABAAABQAAAAAAABQAAADACACQADACADAAQAEAAADgEQAEgDAAgGIAAgCIgKABg");
	this.shape_58.setTransform(228.15,9.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAVAVIAAgYQAAgLgIAAQgEAAgDADQgDAEAAAGIAAAWIgGAAIAAgZQAAgFgCgCQgCgDgEAAQgEAAgDAEQgCADAAAGIAAAWIgHAAIAAgoIAGAAIAAAFQAFgGAHAAQAJAAACAIQAEgIAJAAQANAAAAARIAAAYg");
	this.shape_59.setTransform(222.725,9.275);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgNAXQgEgGAAgKQAAgIAEgGQAFgFAHgBQAIABAEAGIAAAAIAAgWIAHAAIAAA4IgHAAIAAgGQgEAHgHAAQgIAAgFgGgAgHgDQgDAEAAAGQAAAIADAEQADAEAEAAQAFAAADgEQADgEAAgIQAAgGgDgEQgDgEgFAAQgEAAgDAEg");
	this.shape_60.setTransform(215.025,8.55);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAKAVIAAgYQAAgLgJAAQgEAAgDADQgDAEAAAFIAAAXIgHAAIAAgoIAHAAIAAAFQAEgGAHAAQAPAAAAARIAAAYg");
	this.shape_61.setTransform(210.575,9.275);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgNASQgEgEABgEQAAgGADgDQAEgCAIgCIALgBIAAgCQAAgJgKAAQgHAAgBAJIgHAAQABgGAEgEQAEgEAGgBQAQAAABAQIAAAPIABAKIgHAAIgBgGQgEAIgIgBQgHABgEgEgAAAACQgFABgCABQAAABgBAAQAAABgBAAQAAABAAABQAAAAAAABQAAADACACQADACADAAQAEAAAEgEQADgDAAgGIAAgCIgKABg");
	this.shape_62.setTransform(206.05,9.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgRAbIgBgBQAAgIADgFQAEgFAJgGIAJgFQADgEAAgEQAAgFgDgBQgCgDgFAAQgJAAAAALIgIAAQAAgJAFgEQAFgEAHgBQAIABAFADQAEAFAAAHQAAAGgEAFQgDACgHAFQgHAEgDADQgCADAAAEIAcAAIAAAGg");
	this.shape_63.setTransform(200.025,8.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgRAbIgBgBQAAgIADgFQAEgFAJgGIAJgFQADgEAAgEQAAgFgDgBQgCgDgFAAQgJAAAAALIgIAAQAAgJAFgEQAFgEAHgBQAIABAFADQAEAFAAAHQAAAGgEAFQgDACgHAFQgHAEgDADQgCADAAAEIAcAAIAAAGg");
	this.shape_64.setTransform(195.575,8.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgOAhIAXhBIAGAAIgXBBg");
	this.shape_65.setTransform(191.45,8.725);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAFAbIAAgOIgZAAIAAgHIAWggIAKAAIAAAhIAJAAIAAAGIgJAAIAAAOgAgHgBIgGAIIASAAIAAgHIAAgUIAAAAg");
	this.shape_66.setTransform(187.475,8.65);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AACAbIAAgnIgLAAIAAgFQAGAAADgCQACgCABgFIAHAAIAAA1g");
	this.shape_67.setTransform(182.625,8.65);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgOAhIAWhBIAHAAIgXBBg");
	this.shape_68.setTransform(178.9,8.725);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgNAVQgGgHAAgOQAAgNAGgHQAEgHAJAAQAKAAAEAHQAFAHABANQgBAOgFAHQgEAHgKAAQgJAAgEgHgAgLAAQAAAWALAAQAMAAAAgWQAAgUgMgBQgLABAAAUg");
	this.shape_69.setTransform(174.95,8.65);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AACAbIAAgnIgLAAIAAgFQAGAAADgCQACgCABgFIAHAAIAAA1g");
	this.shape_70.setTransform(170.075,8.65);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgDAdIAAgiIgHAAIAAgGIAHAAIAAgFQAAgMAKAAIAEABIAAAFIgCAAQgGAAAAAHIAAAEIAIAAIAAAGIgIAAIAAAig");
	this.shape_71.setTransform(165.275,8.475);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAFgFAIgBQAJABAFAFQAFAGAAAJQAAAKgFAGQgFAGgJgBQgIABgFgGgAgIgKQgDAEAAAGQAAAIADADQADAFAFAAQAFAAAEgFQADgDAAgIQAAgGgDgEQgEgFgFAAQgFAAgDAFg");
	this.shape_72.setTransform(161.825,9.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgLASQgFgEAAgHIAHAAQAAAJAJAAQAEAAADgCQACgBAAgDQAAgEgCgBIgIgDIgJgCQgFgDAAgFQAAgFAFgEQAEgEAGAAQAHABAEAEQAEADAAAHIgHAAQAAgJgIAAQgDAAgDABQAAABgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQAAABABAAIAGACIALADQAFADAAAHQAAAFgFAEQgEACgIAAQgHABgEgEg");
	this.shape_73.setTransform(155.775,9.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgNASQgEgEAAgEQABgGADgDQAEgCAIgCIALgBIAAgCQAAgJgKAAQgHAAAAAJIgIAAQABgGAEgEQAEgEAGgBQAQAAABAQIAAAPIABAKIgHAAIgBgGQgEAIgIgBQgHABgEgEgAAAACQgFABgCABQAAABgBAAQAAABgBAAQAAABAAABQAAAAAAABQAAADACACQADACADAAQAEAAAEgEQADgDAAgGIAAgCIgKABg");
	this.shape_74.setTransform(151.6,9.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgMAQQgGgGAAgKQAAgIAGgHQAEgFAIgBQAHABAFAEQAFADABAHIAAAHIgdAAQABAIADADQADAEAEAAQAFAAACgCQADgCABgDIAHAAQgBAFgEAEQgFADgIAAQgHAAgFgFgAAMgDQgBgGgDgDQgDgDgFAAQgEAAgDADQgDADgBAGIAXAAIAAAAg");
	this.shape_75.setTransform(145.6,9.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgBAWQgCgCAAgHIAAgWIgHAAIAAgGIAHAAIAAgKIAGAAIAAAKIAIAAIAAAGIgIAAIAAAWIABAFQAAAAABABQAAAAABAAQAAAAABAAQABAAAAABIADgBIAAAGIgEABQgGAAgCgEg");
	this.shape_76.setTransform(142.075,8.85);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgMASQgFgEAAgEQABgGADgDQAEgCAIgCIALgBIAAgCQAAgJgKAAQgHAAgBAJIgHAAQAAgGAFgEQAEgEAGgBQAQAAABAQIAAAPIAAAKIgGAAIgBgGQgEAIgIgBQgHABgDgEgAAAACQgFABgCABQAAABgBAAQAAABgBAAQAAABAAABQAAAAAAABQAAADACACQADACADAAQAFAAADgEQADgDAAgGIAAgCIgKABg");
	this.shape_77.setTransform(138.65,9.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgKAUIAAgnIAHAAIAAAGQADgHAIABIADAAIAAAGIgDAAQgGAAgCAEQgDADAAAGIAAAUg");
	this.shape_78.setTransform(135.525,9.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgQAEIAAgYIAHAAIAAAXQAAAMAJAAQADAAADgDQAEgEAAgGIAAgWIAHAAIAAAoIgHAAIAAgGQgEAHgIAAQgOAAAAgRg");
	this.shape_79.setTransform(131.5,9.375);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgMAQQgFgGAAgKQAAgIAFgHQAFgFAIgBQAHAAAFAFQAEAFABAGIgHAAQgBgEgCgDQgDgCgEgBQgFAAgDAFQgDAEAAAGQAAAIADADQADAFAFAAQAEAAADgDQACgDABgFIAHAAQgBAIgEAEQgFAFgHgBQgIABgFgGg");
	this.shape_80.setTransform(127.125,9.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgMAQQgFgGAAgKQAAgIAFgHQAFgFAIgBQAHAAAFAFQAEAFABAGIgHAAQgBgEgCgDQgDgCgEgBQgFAAgDAFQgDAEAAAGQAAAIADADQADAFAFAAQAEAAADgDQACgDABgFIAHAAQgBAIgEAEQgFAFgHgBQgIABgFgGg");
	this.shape_81.setTransform(122.875,9.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgMASQgFgEAAgEQABgGADgDQADgCAJgCIALgBIAAgCQAAgJgKAAQgHAAgBAJIgHAAQAAgGAFgEQAEgEAGgBQAQAAABAQIAAAPIAAAKIgGAAIgBgGQgEAIgIgBQgHABgDgEgAAAACQgFABgCABQAAABgBAAQAAABAAAAQgBABAAABQAAAAAAABQAAADACACQACACAEAAQAFAAADgEQADgDAAgGIAAgCIgKABg");
	this.shape_82.setTransform(118.5,9.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgHAkQAHgRABgTQgBgSgHgRIAFAAQALARAAASQAAATgLARg");
	this.shape_83.setTransform(113.5,8.975);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgDAcIAAgXIgUggIAIAAIAHALIAIAQIAJgQIAHgLIAIAAIgVAgIAAAXg");
	this.shape_84.setTransform(109.975,8.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgTAcIAAg3IATAAQAKgBAFAFQAFAFAAAIQAAAHgFAEQgFAFgKAAIgLAAIAAAWgAgLAAIALAAQAMAAAAgKQAAgLgMAAIgLAAg");
	this.shape_85.setTransform(105.325,8.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AATAcIgGgRIgZAAIgGARIgHAAIAVg3IAJAAIAVA3gAAKAFIgCgFIgIgXIgHAXIgCAFIATAAg");
	this.shape_86.setTransform(99.9,8.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AACAkQgKgQABgUQgBgTAKgQIAHAAQgJARAAASQAAATAJARg");
	this.shape_87.setTransform(96.15,8.975);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgNAXQgEgGAAgKQAAgIAEgGQAFgFAHgBQAIABAEAGIAAAAIAAgWIAHAAIAAA4IgHAAIAAgGQgEAHgHAAQgIAAgFgGgAgHgDQgDAEAAAGQAAAIADAEQADAEAEAAQAFAAADgEQADgEAAgIQAAgGgDgEQgDgEgFAAQgEAAgDAEg");
	this.shape_88.setTransform(90.675,8.55);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgCAcIAAg3IAGAAIAAA3g");
	this.shape_89.setTransform(87.55,8.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgNAQQgEgGAAgKQAAgIAEgHQAGgFAHgBQAHABAFAEQAEADACAHIABAHIgeAAQAAAIAEADQADAEAFAAQADAAAEgCQACgCABgDIAIAAQgCAFgEAEQgFADgHAAQgIAAgGgFgAAMgDQgBgGgDgDQgDgDgFAAQgEAAgDADQgDADgBAGIAXAAIAAAAg");
	this.shape_90.setTransform(84.35,9.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgDAcIAAgnIAGAAIAAAngAgDgTIAAgIIAGAAIAAAIg");
	this.shape_91.setTransform(81.2,8.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgDAcIAAgXIgUggIAIAAIAHALIAIAQIAJgQIAHgLIAIAAIgVAgIAAAXg");
	this.shape_92.setTransform(77.775,8.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgNAQQgEgGAAgKQAAgIAEgHQAGgFAHgBQAHABAEAEQAFADACAHIABAHIgeAAQAAAIAEADQADAEAFAAQADAAAEgCQACgCABgDIAIAAQgCAFgEAEQgFADgHAAQgIAAgGgFgAAMgDQgBgGgDgDQgDgDgFAAQgEAAgDADQgDADgBAGIAXAAIAAAAg");
	this.shape_93.setTransform(71.3,9.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgLAZQgFgEABgFIAHAAQAAADADACQACACAEAAQAKAAAAgNIAAgEQgEAHgHAAQgIAAgFgGQgEgGAAgIQAAgJAEgGQAFgFAIgBQAHAAAEAIIABAAIAAgHIAGAAIAAAlQAAATgRgBQgIABgEgEgAgHgSQgDAEAAAHQAAAGADADQADAFAEAAQAGAAADgFQADgDAAgGQAAgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_94.setTransform(66.7,10.05);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgMASQgFgEAAgEQAAgGAEgDQADgCAJgCIALgBIAAgCQAAgJgKAAQgHAAgBAJIgGAAQgBgGAFgEQAEgEAGgBQARAAgBAQIAAAPIABAKIgFAAIgCgGQgEAIgIgBQgHABgDgEgAAAACQgFABgCABQAAABgBAAQAAABAAAAQgBABAAABQAAAAAAABQAAADACACQACACAEAAQAFAAADgEQADgDAAgGIAAgCIgKABg");
	this.shape_95.setTransform(62.35,9.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgBAWQgCgCAAgHIAAgWIgHAAIAAgGIAHAAIAAgKIAGAAIAAAKIAIAAIAAAGIgIAAIAAAWIABAFQAAAAABABQAAAAABAAQAAAAABAAQABAAAAABIADgBIAAAGIgEABQgGAAgCgEg");
	this.shape_96.setTransform(59.025,8.85);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAKAVIAAgYQAAgLgJAAQgEAAgDADQgDAEAAAFIAAAXIgHAAIAAgoIAHAAIAAAFQAEgGAHAAQAPAAAAARIAAAYg");
	this.shape_97.setTransform(55.525,9.275);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgMAQQgGgGAAgKQAAgIAGgHQAEgFAIgBQAHABAEAEQAGADABAHIAAAHIgcAAQAAAIADADQADAEAEAAQAFAAADgCQACgCABgDIAHAAQgBAFgEAEQgFADgIAAQgHAAgFgFgAAMgDQgBgGgDgDQgDgDgFAAQgEAAgDADQgDADAAAGIAWAAIAAAAg");
	this.shape_98.setTransform(51,9.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgMAQQgFgGAAgKQAAgIAFgHQAFgFAIgBQAHAAAFAFQAEAFABAGIgHAAQgBgEgCgDQgDgCgEgBQgFAAgDAFQgDAEAAAGQAAAIADADQADAFAFAAQAEAAADgDQACgDABgFIAHAAQgBAIgEAEQgFAFgHgBQgIABgFgGg");
	this.shape_99.setTransform(46.725,9.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgKAUIAAgnIAHAAIAAAGQADgHAIABIADAAIAAAGIgDAAQgGAAgCAEQgDADAAAGIAAAUg");
	this.shape_100.setTransform(43.425,9.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgMAQQgFgGgBgKQABgIAFgHQAEgFAIgBQAHABAFAEQAFADABAHIAAAHIgdAAQABAIADADQADAEAEAAQAFAAACgCQADgCABgDIAHAAQgBAFgEAEQgFADgIAAQgHAAgFgFgAAMgDQgBgGgDgDQgDgDgFAAQgEAAgDADQgDADgBAGIAXAAIAAAAg");
	this.shape_101.setTransform(39.5,9.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgTAcIAAg3IATAAQAKgBAFAFQAFAFAAAIQAAAHgFAEQgFAFgKAAIgLAAIAAAWgAgLAAIALAAQAMAAAAgKQAAgLgMAAIgLAAg");
	this.shape_102.setTransform(35.125,8.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_103.setTransform(29.65,8.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgMASQgEgEgBgEQAAgGAEgDQAEgCAIgCIALgBIAAgCQAAgJgKAAQgHAAgBAJIgGAAQgBgGAFgEQAEgEAGgBQARAAgBAQIAAAPIABAKIgFAAIgBgGQgFAIgIgBQgHABgDgEgAAAACQgFABgCABQAAABgBAAQAAABAAAAQgBABAAABQAAAAAAABQAAADACACQACACAEAAQAEAAADgEQAEgDAAgGIAAgCIgKABg");
	this.shape_104.setTransform(26.45,9.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgQAEIAAgYIAHAAIAAAXQAAAMAJAAQADAAADgDQAEgEAAgGIAAgWIAHAAIAAAoIgHAAIAAgGQgEAHgIAAQgOAAAAgRg");
	this.shape_105.setTransform(22.15,9.375);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAKAVIAAgYQAAgLgJAAQgEAAgDADQgDAEAAAFIAAAXIgHAAIAAgoIAHAAIAAAFQAEgGAHAAQAPAAAAARIAAAYg");
	this.shape_106.setTransform(17.575,9.275);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AAKAVIAAgYQAAgLgJAAQgEAAgDADQgDAEAAAFIAAAXIgHAAIAAgoIAHAAIAAAFQAEgGAHAAQAPAAAAARIAAAYg");
	this.shape_107.setTransform(12.975,9.275);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AATAcIgHgRIgYAAIgGARIgHAAIAVg3IAJAAIAWA3gAAKAFIgBgFIgJgXIgHAXIgCAFIATAAg");
	this.shape_108.setTransform(7.95,8.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AAAADIgEAKIgFgDIAHgIIgLgCIACgGIAKAFIgBgLIAFAAIgBALIAKgFIACAGIgLACIAHAIIgFADg");
	this.shape_109.setTransform(3.625,6.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LEGAL, new cjs.Rectangle(0,0,256,25.1), null);


(lib.HEAD = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAHQgGAGgJAAQgIAAgGgGg");
	this.shape.setTransform(447.4,18.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxAtIAWgYQALANAOAAQAQAAAAgJQAAgFgHgCIgNgFIgSgEQgKgDgGgHQgGgIAAgMQAAgTAPgKQAOgKATAAQAdAAAPAPIgXAWQgHgKgNAAQgFAAgEACQgEADAAAFQAAAEAFACQAEADAGABIAPADIAOAGQAHADAFAGQAEAHAAALQAAAKgFAIQgFAIgIAEQgIAEgJACQgJACgJAAQgeAAgQgQg");
	this.shape_1.setTransform(438.3,14.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhOBVIAAipIA5AAQAVAAARAFQARAEAOALQAOAJAJARQAHARAAAVQAAAbgNATQgOAUgVAJQgVAKgZAAgAgoAzIATAAQA9AAgBgzQAAgYgQgNQgRgNgXAAIgXAAg");
	this.shape_2.setTransform(424.1,11.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgyBBQgagZAAgoQAAgoAagYQAagZAnABQAQgBAQAHQAPAGAKANIgcAXQgMgOgVABQgUAAgOAPQgOAQAAAWQAAAYAOAPQAOAQATAAQAXAAAMgSIAgAXQgLAOgQAIQgRAHgSABQgngBgagYg");
	this.shape_3.setTransform(406.625,11.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhCBMQgSgNAAgZQAAgQAKgMQAKgLAQgGQgKgKgEgJQgFgIAAgLQAAgVAQgMQAPgLAWABQAUgBAOALQAPALAAAVQAAAOgJALQgJALgOAIIAWAWIARgVIApAAIgjAuIAlAoIguAAIgOgQQgUAVgdAAQgZAAgRgOgAgkATQgDACgDAFQgDAFAAAGQAAAJAHAGQAGAFAJAAQANAAANgMIgdghgAgag3QgFAEAAAHQAAAJAOAMQASgKAAgLQAAgHgDgEQgFgFgHAAQgHABgFAEg");
	this.shape_4.setTransform(382.375,11.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgxAtIAWgYQAKANAPAAQAQAAAAgJQAAgFgGgCIgOgFIgSgEQgJgDgHgHQgGgIAAgMQAAgTAOgKQAPgKATAAQAdAAAPAPIgXAWQgHgKgOAAQgEAAgEACQgEADAAAFQAAAEAEACQAFADAGABIAPADIAOAGQAHADAFAGQAEAHAAALQAAAKgFAIQgFAIgIAEQgIAEgJACQgJACgJAAQgeAAgQgQg");
	this.shape_5.setTransform(360.2,14.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAvBVIgPgkIhBAAIgOAkIgpAAIBJipIAeAAIBKCpgAAUASIgUg1IgVA1IApAAg");
	this.shape_6.setTransform(345.8,11.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYBVIgjhEIgTAAIAABEIglAAIAAipIBCAAQA/AAAAAzQAAATgKANQgJALgSADIArBIgAgegOIAXAAIAKAAIAJgCQAGgCACgEQADgEAAgHQAAgTgcgBIgZAAg");
	this.shape_7.setTransform(329.875,11.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSBVIAAipIAlAAIAACpg");
	this.shape_8.setTransform(317.825,11.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgoA8IAAh0IAkAAIAAATQALgWAWAAIAMABIAAAhQgJgCgGAAQgLAAgFADQgHACgDAGQgDAGgBAGIAAAPIAAAxg");
	this.shape_9.setTransform(302.8,14.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgtAsQgTgRAAgbQAAgaATgRQASgRAbAAQAcAAASARQATARAAAaQAAAbgTARQgSARgcAAQgbAAgSgRgAgUgUQgIAIAAAMQAAANAIAIQAIAIAMAAQANAAAIgIQAIgIAAgNQAAgMgIgIQgIgJgNAAQgMAAgIAJg");
	this.shape_10.setTransform(290.125,14.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVBcIAAhYIgXAAIAAgbIAXAAIAAgVQAAgLACgHQACgIAFgHQAEgHAIgDQAKgEAOAAQANAAAIACIgCAfQgGgDgFAAQgJAAgEAEQgFAEAAALIAAATIAbAAIAAAbIgbAAIAABYg");
	this.shape_11.setTransform(278.625,10.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAAAIIgKAOIgGgFIAKgOIgRgFIADgHIARAFIAAgRIAIAAIAAARIAQgFIADAIIgRAEIALAPIgHAEg");
	this.shape_12.setTransform(264.075,13.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgFArIAAgkIgggxIAPAAIAWAmIAYgmIAOAAIggAxIAAAkg");
	this.shape_13.setTransform(257.675,15.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgbArIAAhVIAdAAQAHABAFACQAHACACADQADAEACAEIABAIIgBAIQgCAEgDAEQgCADgHACQgFACgHAAIgSAAIAAAmgAgQgEIAPAAQARAAABgOQgBgNgRAAIgPAAg");
	this.shape_14.setTransform(250.85,15.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAdArIgJgVIgnAAIgJAVIgNAAIAlhVIAKAAIAkBVgAAQALIgQgmIAAAAIgPAmIAfAAg");
	this.shape_15.setTransform(242.725,15.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#34B8EB").s().p("Ag5BSIBgitIAUALIhiCsgAAbBKQgOgOAAgUQAAgUAOgNQAOgNATgBQAUABAOANQAOANAAAUQAAAUgOAOQgOAOgUAAQgTAAgOgOgAAsAYQgGAHAAAJQAAAKAGAGQAHAIAJAAQAKAAAHgIQAGgGAAgKQAAgJgGgHQgHgHgKAAQgJAAgHAHgAhdgGQgOgNAAgVQAAgTAOgOQAOgOAUAAQATAAAOAOQAOAOAAATQAAAVgOANQgOANgTAAQgUAAgOgNgAhMg3QgGAGAAAJQAAAKAGAHQAHAHAKAAQAJAAAHgHQAHgHAAgKQAAgJgHgGQgHgIgJABQgKgBgHAIg");
	this.shape_16.setTransform(224.325,11.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#34B8EB").s().p("AgsBGQgSgQAAgaQgBgMAEgLQADgJAEgGIAKgSIAlg6IArAAIgmA+QAFgCAFAAQAYAAAOAPQAPAQABAXQgBAagRAQQgTAQgbAAQgaAAgSgQgAgSAHQgIAIAAAMQAAALAIAIQAHAHALABQAMgBAIgHQAHgIABgLQgBgMgHgIQgIgHgMAAQgLAAgHAHg");
	this.shape_17.setTransform(206.3,11.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#34B8EB").s().p("AgoBMQgPgMgFgVIAmgJQABAJAGAGQAHAGAIAAQALgBAHgGQAHgIAAgLQAAgKgGgHQgGgGgIgDQgHgCgLAAQgRAAgSAGIAChdIBlAAIAAAgIhCAAIgBAaQAGgCAIAAQAaABARAPQAQAOAAAZQAAAdgSAQQgSAQgcAAQgWABgPgLg");
	this.shape_18.setTransform(191.925,11.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#34B8EB").s().p("AgPAQQgGgHAAgJQAAgIAGgGQAHgHAIAAQAJAAAHAHQAGAGAAAIQAAAJgGAHQgHAGgJAAQgIAAgHgGg");
	this.shape_19.setTransform(181.5,18.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#34B8EB").s().p("AgnBNQgQgLgFgWIAmgJQAEAUAUAAQALAAAGgGQAGgGAAgKQAAgFgCgEQgCgFgDgBQgDgCgFgBIgJgCIgJAAIgIAAIAAgeIAMAAQAaAAAAgTQAAgHgGgGQgGgEgJAAQgHAAgGAEQgFAEgCAHIgogIQAGgVAQgKQAQgKAWAAQAYAAARAMQAQAMAAAXQAAAPgHAKQgIAKgOADIAAABQAPABAJAKQAIALAAAQQAAAYgRANQgSAOgaAAQgXAAgQgLg");
	this.shape_20.setTransform(170.625,11.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAPAtIAAghQAAgIgEgDQgEgDgFAAQgHAAgEAEQgEAFAAAJIAAAdIgLAAIAAhZIALAAIAAAqQACgEAFgDQAFgDAGAAQAJAAAFAFQAGAGAAAKIAAAkg");
	this.shape_21.setTransform(157.125,15.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AABAkIgDgDIgDgEIgBgFIAAgGIAAgdIgNAAIAAgJIANAAIAAgQIAKAAIAAAQIAPAAIAAAJIgPAAIAAAZIAAAFIABAEIACADIAFABQAFAAACgCIAAAKQgDACgGAAQgFAAgEgBg");
	this.shape_22.setTransform(151.35,16.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAPAdIAAggQAAgIgEgDQgEgEgFAAQgHAAgEAFQgEAFAAAIIAAAdIgLAAIAAg4IALAAIAAAJQACgEAFgDQAFgDAGAAQAJAAAFAFQAGAGAAALIAAAjg");
	this.shape_23.setTransform(146.075,17.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgVAVQgIgJAAgMQAAgLAIgJQAJgJAMAAQANAAAIAJQAJAJAAALQAAAMgJAJQgIAJgNAAQgMAAgJgJgAgNgNQgFAGAAAHQAAAJAFAFQAFAGAIAAQAIAAAGgGQAFgFAAgJQAAgHgFgGQgGgGgIABQgIgBgFAGg");
	this.shape_24.setTransform(139.225,17.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAhAdIAAgeIgBgHIgCgFQgBgCgDgCIgGgBQgOAAAAARIAAAeIgLAAIAAgdQAAgJgCgEQgCgFgIAAQgFAAgFAFQgEAFAAAIIAAAdIgLAAIAAg4IAKAAIAAAJIAAAAQACgDAEgEQAGgDAGAAQANAAAEAKQADgFAFgCQAFgDAFAAQAWAAAAAZIAAAgg");
	this.shape_25.setTransform(130.55,17.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgOAFIAAgJIAdAAIAAAJg");
	this.shape_26.setTransform(123.575,17.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgbAsIAAgMIAhghQAKgKAAgIQAAgGgEgEQgFgEgGAAQgFAAgEAEQgEADgBAHIgNgBQACgLAHgGQAIgFAKgBQAMAAAHAHQAIAFAAAMQAAAIgEAFQgEAGgHAHIgbAbIAqAAIAAAKg");
	this.shape_27.setTransform(118.375,15.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAGArIAAhHIgPAOIgHgIIAXgUIAKAAIAABVg");
	this.shape_28.setTransform(111.1,15.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgrA0QgMgKAAgRQAAgIADgHQADgGAEgEQAEgEAIgDIANgEIAQgDIANgBIAOAAQAAgJgHgGQgHgGgJAAQgQAAgNAOIgSgUQATgSAfAAQAdAAAMAOQAMAPAAAfIAAA6IghAAIAAgOIAAAAQgLARgZAAQgSAAgMgJgAgUAYQAAAGAEADQAGAEAHAAQAKAAAIgGQAIgGAAgKIAAgIIgJAAQgiAAAAARg");
	this.shape_29.setTransform(94.75,14.325);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAUA8IAAg5IAAgIIgBgIQgBgFgCgCQgCgDgEgCQgDgCgGAAQgMAAgEAIQgEAIAAANIAAA6IgkAAIAAh0IAiAAIAAAQIABAAQAEgIAIgFQAIgGANAAQAZAAAJAPQAJAOAAAaIAABAg");
	this.shape_30.setTransform(74.5,14.175);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgRBXIAAhzIAjAAIAABzgAgOgyQgGgGAAgJQAAgJAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAJQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_31.setTransform(64.525,11.425);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAPBbIgng7IAAA7IgkAAIAAi1IAkAAIAABuIAngtIAsAAIguA0IAvBAg");
	this.shape_32.setTransform(48.35,11.075);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AghAsQgTgRAAgbQAAgaATgRQASgRAbAAQAaAAAPAPIgYAZQgGgJgLAAQgNAAgHAJQgIAIAAAMQAAANAIAIQAHAIANAAQAKAAAHgIIAYAYQgPAQgaAAQgbAAgSgRg");
	this.shape_33.setTransform(35.675,14.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgtAsQgTgRAAgbQAAgaATgRQASgRAbAAQAcAAASARQATARAAAaQAAAbgTARQgSARgcAAQgbAAgSgRgAgUgUQgIAIAAAMQAAANAIAIQAIAIAMAAQANAAAIgIQAIgIAAgNQAAgMgIgIQgIgJgNAAQgMAAgIAJg");
	this.shape_34.setTransform(22.175,14.325);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ag0BVIAAipIAlAAIAACHIBEAAIAAAig");
	this.shape_35.setTransform(9.225,11.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD, new cjs.Rectangle(0,0,499,28), null);


(lib.CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// type
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnAjIASgTQAIAKAMAAQAMABAAgHQAAgEgFgCIgLgDIgOgFQgIgBgEgGQgFgGAAgKQAAgPAMgHQALgJAPAAQAXAAALAMIgRASQgHgIgKAAQgEAAgDACQgCACAAADQgBADAEADQADABAFABIALADIAMAFQAGACADAFQADAGAAAIQAAAIgDAGQgEAHgGADQgHADgHACQgHACgHAAQgYgBgNgNg");
	this.shape.setTransform(193.7,24.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfAjQgPgOgBgVQABgVAPgOQAOgNAVAAQAUAAALANQANANAAAWIAAAJIhCAAQACAIAFAFQAGAFAIgBQAMAAAIgLIAUAPQgHAJgLAEQgKAGgLAAQgVAAgOgOgAATgKQAAgHgFgFQgFgFgIAAQgHAAgGAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_1.setTransform(183.85,24.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIA2QgIgGgBgPIAAgrIgSAAIAAgXIASAAIAAgbIAcAAIAAAbIAZAAIAAAXIgZAAIAAAeQAAAIADAEQACAFAIAAQAJAAADgDIAAAYQgIADgMAAQgPAAgJgHg");
	this.shape_2.setTransform(174.4,23.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiApQgKgIAAgNQAAgHADgFQACgFADgDQAEgDAGgCIALgEIAMgCIAKgBIALAAQAAgHgFgEQgGgFgHAAQgMAAgKALIgQgQQAQgOAYgBQAYAAAJAMQAJAMAAAYIAAAuIgaAAIAAgMIgBAAQgIAOgUABQgNgBgKgHgAgQATQAAAEAEADQAEADAFAAQAIAAAHgFQAGgFAAgHIAAgHIgHAAQgbAAAAAOg");
	this.shape_3.setTransform(165.5,24.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AASBDIgbg2IgOAAIAAA2IgeAAIAAiFIA1AAQAxAAAAApQAAAOgHAKQgIAJgOACIAiA5gAgXgLIARAAIAIAAIAHgCQAFgBACgDQACgDAAgGQAAgPgWAAIgTAAg");
	this.shape_4.setTransform(154.95,22.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHA2QgJgGAAgPIAAgrIgTAAIAAgXIATAAIAAgbIAbAAIAAAbIAZAAIAAAXIgZAAIAAAeQAAAIACAEQADAFAIAAQAJAAADgDIAAAYQgIADgMAAQgPAAgIgHg");
	this.shape_5.setTransform(138.6,23.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAQAvIAAgtIAAgGIgBgGIgCgGQgBgCgDgCQgDgBgFAAQgJAAgEAGQgDAGAAAKIAAAuIgcAAIAAhbIAbAAIAAAMIABAAQADgGAGgEQAHgEAKAAQATAAAHALQAIALAAAVIAAAyg");
	this.shape_6.setTransform(129.45,24.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggAjQgPgOAAgVQAAgVAPgOQAPgNAVAAQAUAAAMANQAMANgBAWIAAAJIhBAAQACAIAFAFQAGAFAHgBQANAAAIgLIAUAPQgHAJgKAEQgKAGgMAAQgVAAgPgOgAATgKQAAgHgFgFQgFgFgHAAQgJAAgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_7.setTransform(118.55,24.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggAvIAAhbIAdAAIAAAPIAAAAQAJgRARAAIAJABIAAAaQgGgCgGAAQgHAAgFACQgFACgDAEQgCAFAAAFIgBAMIAAAmg");
	this.shape_8.setTransform(109.65,24.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfAvIAAhbIAcAAIAAAPIABAAQAIgRARAAIAKABIAAAaQgHgCgFAAQgJAAgFACQgEACgDAEQgBAFgBAFIgBAMIAAAmg");
	this.shape_9.setTransform(101.95,24.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglAkQgGgMAAgUIAAgzIAcAAIAAAuIAAAFIABAHIACAGIAFAEQADABAEAAQAJAAAEgGQADgHAAgKIAAguIAcAAIAABcIgbAAIAAgNQgDAGgIAFQgGAEgJABQgUAAgIgMg");
	this.shape_10.setTransform(92.25,24.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnAzQgVgTAAggQAAgfAVgTQAUgUAfAAQANAAAMAFQAMAFAIAKIgWATQgJgLgRAAQgQAAgLAMQgLAMAAASQAAATALAMQALAMAPAAQATAAAJgOIAZASQgJAMgNAGQgNAGgOAAQgfAAgUgUg");
	this.shape_11.setTransform(80.5,22.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AATAuIgTg8IAAAAIgQA8IgdAAIgihbIAeAAIATA5IAAAAIARg5IAdAAIARA5IABAAIARg5IAdAAIggBbg");
	this.shape_12.setTransform(60.3,24.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgfAjQgQgOABgVQgBgVAQgOQAOgNAVAAQAUAAALANQAMANAAAWIAAAJIhBAAQACAIAGAFQAFAFAHgBQANAAAIgLIAUAPQgHAJgLAEQgKAGgLAAQgVAAgOgOgAATgKQAAgHgFgFQgFgFgIAAQgHAAgGAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_13.setTransform(46.95,24.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNBFIAAhcIAcAAIAABcgAgLgoQgEgFAAgGQAAgHAEgFQAFgFAGAAQAHAAAFAFQAFAFgBAHQABAGgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_14.setTransform(39.05,22.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgMBDIg1iFIAhAAIAgBXIABAAIAhhXIAhAAIg4CFg");
	this.shape_15.setTransform(29.95,22.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// box
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#34B8EB").s().p("AxVDhIAAnBMAirAAAIAAHBg");
	this.shape_16.setTransform(111,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(0,0,222,45), null);


(lib.SeattleBankboxwhitevector = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.SeattleBankhorizwhitevector();
	this.instance.setTransform(64.5,13.3,1,1,0,0,0,64.5,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SeattleBankboxwhitevector, new cjs.Rectangle(0,0,129.1,26.8), null);


// stage content:
(lib.SB_SeaTimesCD_1570x30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,88];
	// timeline functions:
	this.frame_0 = function() {
		//if(!this.alreadyyExecuted){
		//this.alreadyyExecuted=true;
		//	this.clickthru_btn.on("click", function(evt){
		//  window.open(clickTag, "_blank");
		//});
		//} else {
		//gotoAndPlay(2);
		//}
	}
	this.frame_88 = function() {
		//if(!this.alreadyExecuted){
		//this.alreadyExecuted=true;
		//this.loopNum=1;
		//} else {
		//this.loopNum++;
		//if(this.loopNum==2){
		this.stop();
		//}
		//}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(88).call(this.frame_88).wait(56));

	// HEAD
	this.instance = new lib.HEAD();
	this.instance.setTransform(142.5,184.25,1.0702,1.0831,0,0,0,113.5,148.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({y:164.25,alpha:1},10,cjs.Ease.quadOut).wait(133));

	// SUB
	this.instance_1 = new lib.SUB();
	this.instance_1.setTransform(663.45,188.25,1.0702,1.0831,0,0,0,113.5,148.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({y:168.25,alpha:1},10,cjs.Ease.quadOut).wait(130));

	// CTA
	this.instance_2 = new lib.CTA();
	this.instance_2.setTransform(951.65,38.1,0.7316,0.7316,0,0,0,99.7,25.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(74).to({_off:false},0).to({y:18.1,alpha:1},10,cjs.Ease.quadOut).wait(60));

	// LEGAL
	this.instance_3 = new lib.LEGAL();
	this.instance_3.setTransform(1186.9,33.2,1,1,0,0,0,102.9,11);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(77).to({_off:false},0).to({y:13.2,alpha:1},10,cjs.Ease.quadOut).wait(57));

	// LOGO
	this.instance_4 = new lib.SeattleBankboxwhitevector();
	this.instance_4.setTransform(1489.7,15.15,0.9,0.9,0,0,0,64.8,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(144));

	// FDIC
	this.instance_5 = new lib.MemberFDICwhite();
	this.instance_5.setTransform(1382.4,15,0.82,0.82,0,0,0,18.8,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(144));

	// BKGD
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#185975").s().p("Eh6pACWIAAkrMD1TAAAIAAErg");
	this.shape.setTransform(785,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(144));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(785,14.2,785,39.400000000000006);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 1570,
	height: 30,
	fps: 36,
	color: "#999999",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0957C5EC3B874C629166840920B09671'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;