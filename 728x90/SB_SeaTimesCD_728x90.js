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

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmUFZIAAqxIMpAAIAAKxg");
	mask.setTransform(40.5,34.475);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPAzIgSglIgNAQIAAAVIgMAAIAAhlIAMAAIAAA/IAcgjIAOAAIgWAaIAZAvg");
	this.shape.setTransform(71.45,36.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQAmIAAg1QAAgMgLAAQgIAAgMALIAAA2IgLAAIAAhKIALAAIAAAJQALgKAJAAQAKAAAGAFQAGAGAAALIAAA1g");
	this.shape_1.setTransform(64.975,37.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAhQgGgFAAgKQAAgNALgFQAJgIAXgEIAAgDQAAgNgNAAQgMAAgGAMIAAAAIgKgGIABAAQAGgQAUAAQAKAAAIAFQAIAGAAAMIAAAjIACAQIAAACIgMAAIAAgKQgMALgLAAQgJAAgHgGgAgQASQgBAEAEAEQADADAFAAQALAAAJgMIAAgSQgfAFAAAOg");
	this.shape_2.setTransform(58.7,38);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiA0IAAhnIAlAAQANAAAIAIQAIAHAAALQAAARgQAGQAIACAGAHQAFAHAAAJQgBAdgkAAgAgVAoIAUAAQAXAAAAgRQAAgUgZAAIgSAAgAgVgHIATAAQAKAAAGgFQAFgFAAgHQAAgQgSAAIgWAAg");
	this.shape_3.setTransform(51.975,36.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AABAnQgMAAgJgJQgKgLAAgTQAAgRAJgKQAIgLANAAQAMAAAIAIQAIAJAAARIAAAHIguAAQAAALAGAIQAGAHAHAAQAOAAAGgMIABgBIAIAFIABAAIgBABQgKARgSAAgAARgGQAAgKgFgGQgEgGgIAAQgQAAgCAWIAjAAIAAAAg");
	this.shape_4.setTransform(62.275,25.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgFAwIAAhfIALAAIAABfg");
	this.shape_5.setTransform(57.575,24.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgDAtQgFgCAAgIIAAg0IgLAAIAAgKIALAAIAAgUIAKAAIAAAUIARAAIAAAKIgRAAIAAAzQACAFAGgBIAJAAIABAAIAAAJIgBAAQAAACgLAAQgIgBgDgDg");
	this.shape_6.setTransform(53.7,24.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDAtQgEgBAAgJIAAg0IgMAAIAAgKIAMAAIAAgUIAKAAIAAAUIARAAIAAAKIgRAAIAAAzQAAAFAHgBIAKAAIAAAAIAAAJIAAAAQgDACgJAAQgIgBgDgDg");
	this.shape_7.setTransform(49.325,24.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWAiQgGgGAAgKQAAgMALgGQAJgHAXgEIAAgEQAAgNgNAAQgNAAgFAMIAAAAIgKgFIAAgBQAJgQATAAQAKAAAHAGQAJAGAAALIAAAkIABAQIAAAAIgLAAIgBgJQgKALgNAAQgJAAgHgFgAgQASQAAAFADADQAEADAEAAQALAAAJgMIAAgSQgfAEAAAPg");
	this.shape_8.setTransform(43.85,25.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAeQgKgLAAgTQAAgRAJgKQAIgLANAAQAMAAAIAIQAIAJAAARIAAAHIguAAQAAALAGAIQAGAHAIAAQANAAAGgMIABgBIAJAFIAAABQgKARgTAAQgNAAgJgJgAARgGQgBgWgQAAQgRAAgBAWIAjAAIAAAAg");
	this.shape_9.setTransform(37.325,25.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgjAaIAAgBIALgDIABAAQAIAUARAAQAKAAAGgFQAFgFAAgIQAAgLgbgLQgdgKAAgRQAAgMAJgHQAJgIAOAAQAYAAAJAaIAAAAIgLACIAAAAIAAAAQgGgRgRAAQgSAAAAAPQAAAHAJAFQAEACAOAGQAOAGAGADQAJAIAAALQAAANgHAIQgKAKgRAAQgZAAgMgbg");
	this.shape_10.setTransform(30.05,24.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWAaQg/gSgzgCQAAAAAAgBQgBAAAAAAQAAAAABAAQAAAAAAgBQAUgMAigKQA3gRAoAOQArAPAtAGQAXAEANABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQhJAWg1AAQgRAAgQgCg");
	this.shape_11.setTransform(13.75,62.9105);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhpAbQgmgHgegLIAAgCQAsgIAzgRQAngNAdgCQAggDAxAQQBWAcAQAEQABAAAAABQAAABAAAAQAAAAAAAAQgBABAAAAQgMgBgZABQgzAChCANQgXAFgbAAQgjAAgngIg");
	this.shape_12.setTransform(43.7942,65.4816);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhIAQQgYgGgTgKIAAAAQAWAAAYgEIA7gOQAcgIA0ALQAaAFATAHQABAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAQgJAAgdAEQglAHgnAJQgOAEgQAAQgUAAgXgGg");
	this.shape_13.setTransform(34.5875,58.7089);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ACkEwQgaAAgngMQgKgDg9gXQhbgkgsAAQgiAAgoAJIgfAIQgRADgMAAQgVAAgTgCIgPgEIgMgEIAAogIJpAAIAAJhgAETEPIAAoeIolAAIAAHlIAhACQAQAAAkgKQAsgKAmgBQAfABAqAMQAVAGA1AUQAtASAYAIQAjALAUgBg");
	this.shape_14.setTransform(50.075,30.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SeattleBankboxwhitevector, new cjs.Rectangle(0,0,81,69), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgPAQQgGgHAAgJQAAgIAGgGQAHgHAIAAQAJAAAHAHQAGAGAAAIQAAAJgGAHQgHAGgJAAQgIAAgHgGg");
	this.shape.setTransform(441.85,18.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxAtIAWgYQAKANAQAAQAPAAAAgJQAAgFgGgCIgPgFIgSgEQgJgDgGgHQgGgIAAgMQAAgTAOgKQAPgKATAAQAdAAAPAPIgXAWQgHgKgOAAQgEAAgEACQgEADAAAFQAAAEAEACQAFADAGABIAOADIAPAGQAHADAFAGQAEAHAAALQAAAKgFAIQgFAIgIAEQgIAEgJACQgJACgJAAQgeAAgQgQg");
	this.shape_1.setTransform(432.75,14.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhOBVIAAipIA5AAQAVAAARAFQASAEANALQAOAJAJARQAHARABAVQAAAbgOATQgOAUgVAJQgVAKgZAAgAgoAzIAUAAQA7AAAAgzQAAgYgQgNQgQgNgZAAIgWAAg");
	this.shape_2.setTransform(418.55,11.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgyBBQgagZAAgoQAAgoAagYQAagZAnABQAQgBAQAHQAPAGAKANIgcAXQgMgOgVABQgUAAgOAPQgOAQAAAWQAAAYAOAPQAOAQATAAQAXAAAMgSIAgAXQgLAOgQAIQgRAHgSABQgngBgagYg");
	this.shape_3.setTransform(401.075,11.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhCBMQgSgNAAgZQAAgQAKgMQAKgLAQgGQgKgKgEgJQgFgIAAgLQAAgVAQgMQAPgLAWABQAUgBAOALQAPALAAAVQAAAOgJALQgJALgOAIIAWAWIARgVIApAAIgjAuIAlAoIguAAIgOgQQgUAVgdAAQgZAAgRgOgAgkATQgDACgDAFQgDAFAAAGQAAAJAHAGQAGAFAJAAQANAAANgMIgdghgAgag3QgFAEAAAHQAAAJAOAMQASgKAAgLQAAgHgDgEQgFgFgHAAQgHABgFAEg");
	this.shape_4.setTransform(376.825,11.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgxAtIAWgYQALANAPAAQAPAAAAgJQAAgFgGgCIgPgFIgSgEQgIgDgGgHQgHgIAAgMQAAgTAOgKQAPgKATAAQAdAAAOAPIgVAWQgJgKgNAAQgEAAgEACQgEADAAAFQAAAEAEACQAFADAGABIAOADIAPAGQAHADAEAGQAFAHAAALQAAAKgFAIQgFAIgHAEQgJAEgJACQgJACgJAAQgeAAgQgQg");
	this.shape_5.setTransform(354.65,14.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAvBVIgPgkIhBAAIgOAkIgpAAIBJipIAeAAIBKCpgAATASIgTg1IgVA1IAoAAg");
	this.shape_6.setTransform(340.25,11.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYBVIgjhEIgTAAIAABEIglAAIAAipIBCAAQA/AAAAAzQAAATgKANQgJALgSADIArBIgAgegOIAXAAIAKAAIAJgCQAGgCACgEQADgEAAgHQAAgTgcgBIgZAAg");
	this.shape_7.setTransform(324.325,11.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSBVIAAipIAlAAIAACpg");
	this.shape_8.setTransform(312.275,11.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgoA8IAAh0IAkAAIAAATQALgWAWAAIAMABIAAAhQgIgCgIAAQgKAAgGADQgGACgDAGQgCAGgBAGIgBAPIAAAxg");
	this.shape_9.setTransform(297.25,14.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgtAsQgTgRAAgbQAAgaATgRQASgRAbAAQAcAAASARQATARAAAaQAAAbgTARQgSARgcAAQgbAAgSgRgAgUgUQgIAIAAAMQAAANAIAIQAIAIAMAAQANAAAIgIQAIgIAAgNQAAgMgIgIQgIgJgNAAQgMAAgIAJg");
	this.shape_10.setTransform(284.575,14.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVBcIAAhYIgXAAIAAgbIAXAAIAAgVQAAgLACgHQACgIAFgHQAEgHAIgDQAKgEAOAAQANAAAIACIgCAfQgGgDgFAAQgJAAgEAEQgFAEAAALIAAATIAbAAIAAAbIgbAAIAABYg");
	this.shape_11.setTransform(273.075,10.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgFArIAAgkIgggxIAPAAIAWAmIAYgmIAOAAIggAxIAAAkg");
	this.shape_12.setTransform(257.675,15.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgbArIAAhVIAdAAQAHABAFACQAHACACADQADAEACAEIABAIIgBAIQgCAEgDAEQgCADgHACQgFACgHAAIgSAAIAAAmgAgQgEIAPAAQARAAABgOQgBgNgRAAIgPAAg");
	this.shape_13.setTransform(250.85,15.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAdArIgJgVIgnAAIgJAVIgNAAIAlhVIAKAAIAkBVgAAQALIgQgmIAAAAIgPAmIAfAAg");
	this.shape_14.setTransform(242.725,15.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#34B8EB").s().p("Ag5BSIBgitIAUALIhiCsgAAbBKQgOgOAAgUQAAgUAOgNQAOgNATgBQAUABAOANQAOANAAAUQAAAUgOAOQgOAOgUAAQgTAAgOgOgAAsAYQgGAHAAAJQAAAKAGAGQAHAIAJAAQAKAAAHgIQAGgGAAgKQAAgJgGgHQgHgHgKAAQgJAAgHAHgAhdgGQgOgNAAgVQAAgTAOgOQAOgOAUAAQATAAAOAOQAOAOAAATQAAAVgOANQgOANgTAAQgUAAgOgNgAhMg3QgGAGAAAJQAAAKAGAHQAHAHAKAAQAJAAAHgHQAHgHAAgKQAAgJgHgGQgHgIgJABQgKgBgHAIg");
	this.shape_15.setTransform(224.325,11.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#34B8EB").s().p("AgoBMQgPgMgFgVIAmgJQABAJAGAGQAHAGAIAAQALgBAHgGQAHgIAAgLQAAgKgGgHQgGgGgIgDQgHgCgLAAQgRAAgSAGIAChdIBlAAIAAAgIhCAAIgBAaQAGgCAIAAQAaABARAPQAQAOAAAZQAAAdgSAQQgSAQgcAAQgWABgPgLg");
	this.shape_16.setTransform(206.125,11.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#34B8EB").s().p("AgZBSQgLgFgHgIQgHgJgFgMQgDgMgCgLQgCgMAAgNQAAgMACgMQACgMADgLQAFgMAHgJQAHgIALgFQAMgGANAAQAOAAAMAGQALAFAHAIQAHAJAFAMQAEALABAMQACAMAAAMQAAANgCAMQgBALgEAMQgFAMgHAJQgHAIgLAFQgMAGgOAAQgNAAgMgGgAgaAAQAAA3AaAAQAbAAAAg3QAAg2gbABQgagBAAA2g");
	this.shape_17.setTransform(192.15,11.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#34B8EB").s().p("AgPAQQgGgHAAgJQAAgIAGgGQAHgHAIAAQAJAAAHAHQAGAGAAAIQAAAJgGAHQgHAGgJAAQgIAAgHgGg");
	this.shape_18.setTransform(181.5,18.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#34B8EB").s().p("AgnBNQgQgLgFgWIAmgJQAEAUAUAAQALAAAGgGQAGgGAAgKQAAgFgCgEQgCgFgDgBQgDgCgFgBIgJgCIgJAAIgIAAIAAgeIAMAAQAaAAAAgTQAAgHgGgGQgGgEgJAAQgHAAgGAEQgFAEgCAHIgogIQAGgVAQgKQAQgKAWAAQAYAAARAMQAQAMAAAXQAAAPgHAKQgIAKgOADIAAABQAPABAJAKQAIALAAAQQAAAYgRANQgSAOgaAAQgXAAgQgLg");
	this.shape_19.setTransform(170.625,11.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAPAtIAAghQAAgIgEgDQgEgDgFAAQgHAAgEAEQgEAFAAAJIAAAdIgLAAIAAhZIALAAIAAAqQACgEAFgDQAFgDAGAAQAJAAAFAFQAGAGAAAKIAAAkg");
	this.shape_20.setTransform(157.125,15.625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AABAkIgDgDIgDgEIgBgFIAAgGIAAgdIgNAAIAAgJIANAAIAAgQIAKAAIAAAQIAPAAIAAAJIgPAAIAAAZIAAAFIABAEIACADIAFABQAFAAACgCIAAAKQgDACgGAAQgFAAgEgBg");
	this.shape_21.setTransform(151.35,16.575);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAPAdIAAggQAAgIgEgDQgEgEgFAAQgHAAgEAFQgEAFAAAIIAAAdIgLAAIAAg4IALAAIAAAJQACgEAFgDQAFgDAGAAQAJAAAFAFQAGAGAAALIAAAjg");
	this.shape_22.setTransform(146.075,17.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgVAVQgIgJAAgMQAAgLAIgJQAJgJAMAAQANAAAIAJQAJAJAAALQAAAMgJAJQgIAJgNAAQgMAAgJgJgAgNgNQgFAGAAAHQAAAJAFAFQAFAGAIAAQAIAAAGgGQAFgFAAgJQAAgHgFgGQgGgGgIABQgIgBgFAGg");
	this.shape_23.setTransform(139.225,17.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAhAdIAAgeIgBgHIgCgFQgBgCgDgCIgGgBQgOAAAAARIAAAeIgLAAIAAgdQAAgJgCgEQgCgFgIAAQgFAAgFAFQgEAFAAAIIAAAdIgLAAIAAg4IAKAAIAAAJIAAAAQACgDAEgEQAGgDAGAAQANAAAEAKQADgFAFgCQAFgDAFAAQAWAAAAAZIAAAgg");
	this.shape_24.setTransform(130.55,17.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgOAFIAAgJIAdAAIAAAJg");
	this.shape_25.setTransform(123.575,17.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgbAsIAAgMIAhghQAKgKAAgIQAAgGgEgEQgFgEgGAAQgFAAgEAEQgEADgBAHIgNgBQACgLAHgGQAIgFAKgBQAMAAAHAHQAIAFAAAMQAAAIgEAFQgEAGgHAHIgbAbIAqAAIAAAKg");
	this.shape_26.setTransform(118.375,15.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAGArIAAhHIgPAOIgHgIIAXgUIAKAAIAABVg");
	this.shape_27.setTransform(111.1,15.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgrA0QgMgKAAgRQAAgIADgHQADgGAEgEQAEgEAIgDIANgEIAQgDIANgBIAOAAQAAgJgHgGQgHgGgJAAQgQAAgNAOIgSgUQATgSAfAAQAdAAAMAOQAMAPAAAfIAAA6IghAAIAAgOIAAAAQgLARgZAAQgSAAgMgJgAgUAYQAAAGAEADQAGAEAHAAQAKAAAIgGQAIgGAAgKIAAgIIgJAAQgiAAAAARg");
	this.shape_28.setTransform(94.75,14.325);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAUA8IAAg5IAAgIIgBgIQgBgFgCgCQgCgDgEgCQgDgCgGAAQgMAAgEAIQgEAIAAANIAAA6IgkAAIAAh0IAiAAIAAAQIABAAQAEgIAIgFQAIgGANAAQAZAAAJAPQAJAOAAAaIAABAg");
	this.shape_29.setTransform(74.5,14.175);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgRBXIAAhzIAjAAIAABzgAgOgyQgGgGAAgJQAAgJAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAJQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_30.setTransform(64.525,11.425);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAPBbIgng7IAAA7IgkAAIAAi1IAkAAIAABuIAngtIAsAAIguA0IAvBAg");
	this.shape_31.setTransform(48.35,11.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AghAsQgTgRAAgbQAAgaATgRQASgRAbAAQAaAAAPAPIgYAZQgGgJgLAAQgNAAgHAJQgIAIAAAMQAAANAIAIQAHAIANAAQAKAAAHgIIAYAYQgPAQgaAAQgbAAgSgRg");
	this.shape_32.setTransform(35.675,14.325);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgtAsQgTgRAAgbQAAgaATgRQASgRAbAAQAcAAASARQATARAAAaQAAAbgTARQgSARgcAAQgbAAgSgRgAgUgUQgIAIAAAMQAAANAIAIQAIAIAMAAQANAAAIgIQAIgIAAgNQAAgMgIgIQgIgJgNAAQgMAAgIAJg");
	this.shape_33.setTransform(22.175,14.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Ag0BVIAAipIAlAAIAACHIBEAAIAAAig");
	this.shape_34.setTransform(9.225,11.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD, new cjs.Rectangle(0,0,499,28), null);


// stage content:
(lib.SB_SeaTimesCD_728x90 = function(mode,startPosition,loop,reversed) {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(88).call(this.frame_88).wait(1));

	// HEAD
	this.instance = new lib.HEAD();
	this.instance.setTransform(148.45,181.55,1.0702,1.0831,0,0,0,113.5,148.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89));

	// SUB
	this.instance_1 = new lib.SUB();
	this.instance_1.setTransform(148.45,218.25,1.0702,1.0831,0,0,0,113.5,148.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89));

	// LOGO
	this.instance_2 = new lib.SeattleBankboxwhitevector();
	this.instance_2.setTransform(698.95,26.8,1,1,0,0,0,64.7,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89));

	// FDIC
	this.instance_3 = new lib.MemberFDICwhite();
	this.instance_3.setTransform(629.75,55.8,0.82,0.82,0,0,0,18.8,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(89));

	// BOX bottom
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#34B8EB").s().p("A3bFSIAAqkMAu3AAAIAAKkg");
	this.shape.setTransform(150,216.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(89));

	// BKGD
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#185975").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_1.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(89));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(364,45,364,205.1);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 728,
	height: 90,
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