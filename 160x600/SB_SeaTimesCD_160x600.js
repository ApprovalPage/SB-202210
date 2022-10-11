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
	this.shape.graphics.f("#FFFFFF").s().p("AgGAGQgDgDABgDQAAgDADgDQADgCADAAQAEAAACACQACADAAADQAAADgEADQgDADgCAAQgEAAgCgDg");
	this.shape.setTransform(29.45,50.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcAaQgIgKACgQQACgQAMgKQAMgKAOAAQAPAAAIAJQAIAKgCARIgBAEIg4AAQAAAJAFAGQAGAHAJAAQANAAAKgKIAIAHQgNAOgTAAQgRAAgIgLgAgLgTQgHAFgCAIIArAAQABgIgFgFQgFgGgKAAQgIAAgHAGg");
	this.shape_1.setTransform(23.6261,47.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNA5IAPhxIAMAAIgPBxg");
	this.shape_2.setTransform(17.95,45.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQA1QgHgDgCgHIAAAAIgCANIgMAAIAQhxIAMAAIgIA2IABAAQAMgMANAAQARAAAJAKQAJAKgDAQQgCAPgMALQgLALgOAAQgJAAgHgFgAgNACQgHAHgCAMQgCALAGAHQAGAIALAAQAKAAAIgIQAIgHACgLQABgMgFgHQgGgGgMAAQgKAAgIAGg");
	this.shape_3.setTransform(11.2272,45.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAgQgGgGABgKQACgPARgFQAKgDASgBIAEAAIABgCQACgPgSAAQgLAAgKAHIgGgHQAMgLAQAAQAQAAAGAIQAGAGgCAPIgFAeIAAAMIgLAAIAAgKIAAAAQgKAMgOAAQgLAAgHgFgAgSAPQgCAMAQAAQAIAAAHgHQAGgFABgJIABgFIgMAAQgXAAgCAOg");
	this.shape_4.setTransform(2.6183,47.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNA5IAPhxIAMAAIgPBxg");
	this.shape_5.setTransform(-2.55,45.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNA1IAKhFIALAAIgJBFgAgBglQgCgDABgEQAAgDACgCQADgDAEAAQADAAACADQADACgBADQAAAEgDADQgDACgEAAQgEAAgBgCg");
	this.shape_6.setTransform(-6.1357,46.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaAgQgGgGABgKQACgPARgFQAKgDASgBIAEAAIABgCQACgPgSAAQgLAAgKAHIgGgHQAMgLAQAAQAQAAAGAIQAGAGgCAPIgFAeIAAAMIgLAAIAAgKIAAAAQgKAMgOAAQgLAAgHgFgAgSAPQgCAMAQAAQAIAAAHgHQAGgFABgJIABgFIgMAAQgXAAgCAOg");
	this.shape_7.setTransform(-12.3317,47.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAjIgThFIAOAAIAOA2IABAAIAbg2IAMAAIgkBFg");
	this.shape_8.setTransform(-19.1,47.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaAgQgGgGABgKQACgPARgFQAKgDASgBIAEAAIABgCQACgPgSAAQgLAAgKAHIgGgHQAMgLAQAAQAQAAAGAIQAGAGgCAPIgFAeIAAAMIgLAAIAAgKIAAAAQgKAMgOAAQgLAAgHgFgAgSAPQgCAMAQAAQAIAAAHgHQAGgFABgJIABgFIgMAAQgXAAgCAOg");
	this.shape_9.setTransform(-27.2817,47.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdAYIAKgHQAHAJAKAAQAFAAAFgCQAFgEABgFQAAgFgEgCQgCgCgIgCQgLgDgEgCQgHgEACgLQABgJAJgGQAIgFAKAAQAQAAAGAMIgLAHQgEgIgJAAQgGAAgEACQgEADgBAEQgBAIARADQAKACAFADQAGAFgBAKQgCALgJAGQgJAFgLAAQgSAAgHgNg");
	this.shape_10.setTransform(47.2,28.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAPAkIAGgpQADgTgQAAQgVAAgEAaIgEAiIgMAAIAHg1IACgQIALAAIgBALIAAAAQADgFAHgEQAGgEAIAAQAOAAAGAIQAFAIgCAMIgGArg");
	this.shape_11.setTransform(39.9017,28.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdAbQgKgLADgQQACgQAMgKQAMgKAPAAQARAAAJAKQAJAKgCAQQgDAQgMALQgMAKgPAAQgQAAgJgKgAgOgRQgIAHgCAKQgBALAFAHQAGAIAMAAQAKAAAIgIQAIgHABgLQACgKgGgHQgGgIgLAAQgKAAgIAIg");
	this.shape_12.setTransform(31.4421,28.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgNA1IAKhFIALAAIgJBFgAgBglQgCgDABgEQAAgDACgDQADgCAEAAQADAAACACQADADgBADQAAAEgDADQgDACgEAAQgEAAgBgCg");
	this.shape_13.setTransform(25.5143,27.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNAnQgDgEACgNIAFgmIgOAAIABgJIAPAAIADgUIAKAAIgCAUIAUAAIgBAJIgUAAIgFAjQgBAIABADQACAFAFAAQAHAAAEgCIgBALQgGACgIAAQgKAAgEgHg");
	this.shape_14.setTransform(21.15,27.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgpA1IAPhnIALAAIgBAKIAAAAQAMgMAOAAQAQAAAJAKQAJALgCAQQgCAPgMAKQgMALgPAAQgIAAgHgEQgGgEgCgGIgBAAIgGAugAgKghQgIAHgCALQgBALAGAGQAFAIALAAQALAAAIgIQAIgGABgLQACgLgGgHQgGgIgLAAQgKAAgIAIg");
	this.shape_15.setTransform(13.2772,30.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgdAbQgKgLADgQQACgQAMgKQAMgKAPAAQARAAAJAKQAJAKgCAQQgDAQgMALQgMAKgPAAQgQAAgJgKgAgOgRQgIAHgCAKQgBALAFAHQAGAIAMAAQAKAAAIgIQAIgHABgLQACgKgGgHQgGgIgLAAQgKAAgIAIg");
	this.shape_16.setTransform(4.5421,28.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgxA1IAOhpIAoAAQATAAANALQARAQgEAZQgEAbgUAOQgRAMgSAAgAgjAqIAYAAQASgBANgJQANgLADgVQADgUgKgKQgKgLgTAAIgYAAg");
	this.shape_17.setTransform(-9.461,27.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AglAoQgOgQAEgYQADgXASgPQARgRAXAAQAYAAALARIgMAIQgIgNgRAAQgQAAgOANQgNANgDARQgCATAJAMQAKANARAAQATAAANgPIAJAIQgRATgZAAQgXAAgNgQg");
	this.shape_18.setTransform(-19.936,27.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgpA1IAPhnIALAAIgBAKIAAAAQAMgMAOAAQAQAAAJAKQAJALgCAQQgCAPgMAKQgMALgPAAQgIAAgHgEQgGgEgCgGIgBAAIgGAugAgKghQgIAHgCALQgBALAGAGQAFAIALAAQALAAAIgIQAIgGABgLQACgLgGgHQgGgIgLAAQgKAAgIAIg");
	this.shape_19.setTransform(-34.7228,30.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgnApQgHgLADgTIAJhAIANAAIgJA+QgFAiAbAAQAOAAAIgLQAHgIADgPIAIg+IANAAIgJBAQgDATgLALQgMANgTAAQgVAAgJgNg");
	this.shape_20.setTransform(-43.7679,27.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgpA1IAPhnIALAAIgBAKIAAAAQAMgMAOAAQAQAAAJAKQAJALgCAQQgCAPgMAKQgMALgPAAQgIAAgHgEQgGgEgCgHIgBAAIgGAvgAgKghQgIAHgCALQgBALAGAGQAFAIALAAQALAAAIgIQAIgGABgLQACgLgGgHQgGgIgLAAQgKAAgIAIg");
	this.shape_21.setTransform(43.4272,11.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAmAkIAGgpQACgTgRAAQgHAAgGAGQgGAGgCAIIgGAoIgKAAIAFgnQACgMgCgEQgDgFgHAAQgWAAgEAaIgEAiIgMAAIAHg0IACgRIALAAIgBALIAAAAQADgFAHgEQAHgEAIAAQAPAAAFANQAKgNAOAAQAOAAAGAIQAEAHgCAOIgGAqg");
	this.shape_22.setTransform(32.6058,9.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgdAcQgFgIACgNIAGgqIALAAIgGApQgCATAQAAQAVAAADgaIAFgiIAMAAIgIA0IgBARIgLAAIABgLQgEAFgGAEQgHAEgIAAQgNAAgGgIg");
	this.shape_23.setTransform(22.4233,9.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgnA1IAPhpIAgAAQAPAAAIAGQAKAGgCAOQgCATgUAFQAKABAGAHQAGAHgBALQgDAPgOAIQgLAGgRAAgAgYAqIAVAAQAKAAAHgFQAJgFABgJQACgLgIgEQgFgFgLAAIgVAAgAgRgHIARAAQAXAAADgSQACgQgXAAIgSAAg");
	this.shape_24.setTransform(13.4167,8.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgpAvQgJgIACgOQADgVAZgKQgLgMACgMQABgLAKgHQAIgGALAAQALAAAHAGQAGAGgBALQgCAQgXALIASAXIARgXIAPAAIgZAgIAUAZIgRAAIgMgQQgPASgSAAQgOAAgJgIgAgjAYQgBAJAFAFQAFAGAJAAQAMAAANgPIgVgcQgUALgCAMgAgLgoQgFAFgBAGQgBAHAHAHIADAEQAIgFAEgDQAGgFABgHQABgGgDgDQgEgDgFgBQgGABgFADg");
	this.shape_25.setTransform(-0.6432,8.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgjAvQgJgLADgPQACgQAMgKQALgKAQAAQAPAAAIAMIABAAIAHg2IAMAAIgQBxIgMAAIACgNIAAAAQgFAHgHADQgHAFgJAAQgPAAgJgLgAgTACQgIAHgCAMQgBALAFAHQAGAIAMAAQAKAAAIgIQAIgHABgLQACgMgGgHQgGgGgKAAQgLAAgIAGg");
	this.shape_26.setTransform(-14.6772,7.775);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgcAaQgIgKACgQQACgPAMgLQAMgKAOAAQAPAAAIAKQAIAKgCAQIgBADIg4AAQAAAKAFAGQAGAHAJAAQANAAAKgKIAIAGQgNAPgTAAQgRAAgIgLgAgLgTQgHAFgCAIIArAAQABgIgFgFQgFgGgKAAQgIAAgHAGg");
	this.shape_27.setTransform(-23.7239,9.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AATAjIgSgfIgZAfIgOAAIAhglIgUggIAPAAIAOAZIAWgZIANAAIgcAgIAYAlg");
	this.shape_28.setTransform(-31.9,9.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgNA1IAKhFIALAAIgJBFgAgBglQgCgDABgEQAAgDACgDQADgCAEAAQADAAACACQADADgBADQAAAEgDADQgDACgEAAQgEAAgBgCg");
	this.shape_29.setTransform(-36.8857,8.05);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgoA1IAPhpIBBAAIgBALIg1AAIgEAjIAwAAIgCAMIgwAAIgGAvg");
	this.shape_30.setTransform(-42.45,8.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SUB, new cjs.Rectangle(-56.1,0,112.2,57), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAIAAIAAAJg");
	this.shape.setTransform(38.65,38.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAbIAAgFIADAAQAEAAACgCQACgCACgFIgPgoIAHAAIALAfIAMgfIAHAAIgQAqQgDAHgCADQgEADgHAAIgDgBg");
	this.shape_1.setTransform(35.875,37.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDAdIAAg5IAGAAIAAA5g");
	this.shape_2.setTransform(33.05,35.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAcIAAg2IAGAAIAAAFIABAAQABgDAEgCQADgBADAAQAIAAAEAFQAFAGAAAKQAAAJgFAFQgEAGgIAAQgDAAgDgCQgEgBgBgDIAAAUgAgIgSQgDAFAAAHQAAAGADAEQADAFAFAAQAEAAAEgFQADgEAAgGQAAgHgDgFQgEgEgEAAQgFAAgDAEg");
	this.shape_3.setTransform(29.925,37.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAcIAAg2IAGAAIAAAFIABAAQABgDAEgCQADgBADAAQAIAAAEAFQAFAGAAAKQAAAJgFAFQgEAGgIAAQgDAAgDgCQgEgBgBgDIAAAUgAgIgSQgDAFAAAHQAAAGADAEQADAFAFAAQAEAAAEgFQADgEAAgGQAAgHgDgFQgEgEgEAAQgFAAgDAEg");
	this.shape_4.setTransform(25.325,37.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNASQgEgDAAgFQABgGADgDQAEgCAIgCIALgBIAAgBQAAgKgKAAQgHAAgBAJIgHAAQABgHAEgDQAEgFAGAAQAQABABAQIAAAOIABALIgHAAIgBgHQgEAIgIAAQgHgBgEgDgAAAACQgFAAgCACQAAABgBAAQAAABgBAAQAAABAAABQAAAAAAABQAAADACACQADACADAAQAEAAAEgDQADgDAAgHIAAgCIgKABg");
	this.shape_5.setTransform(20.65,36.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAbIAAgFIADAAQAEAAACgCQACgCACgFIgPgoIAHAAIALAfIAMgfIAHAAIgQAqQgDAHgCADQgEADgHAAIgDgBg");
	this.shape_6.setTransform(14.975,37.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNASQgDgDAAgFQgBgGAEgDQADgCAJgCIALgBIAAgBQAAgKgJAAQgIAAAAAJIgHAAQAAgHAEgDQAEgFAHAAQAPABAAAQIAAAOIACALIgGAAIgBgHQgFAIgJAAQgGgBgEgDgAAAACQgFAAgCACQgBABAAAAQAAABgBAAQAAABAAABQAAAAAAABQAAADACACQADACADAAQAEAAADgDQAEgDAAgHIAAgCIgKABg");
	this.shape_7.setTransform(10.9,36.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVAVIAAgYQAAgLgIAAQgEAAgDADQgDAEAAAGIAAAWIgGAAIAAgZQAAgFgCgCQgCgDgEAAQgEAAgDAEQgCADAAAGIAAAWIgHAAIAAgoIAGAAIAAAFQAFgGAHAAQAJAAACAIQAEgIAJAAQANAAAAARIAAAYg");
	this.shape_8.setTransform(5.475,36.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLASQgFgEAAgHIAHAAQAAAJAJAAQAEAAADgBQACgDAAgCQAAgEgCgBIgIgDIgJgCQgFgDAAgFQAAgFAFgEQAEgDAGAAQAHAAAEADQAEAEAAAGIgHAAQAAgIgIAAQgDAAgDABQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABQAAABAAAAQABABAAABQAAAAABAAQAAABABAAIAGADIALACQAFADAAAHQAAAFgFAEQgEACgIAAQgHABgEgEg");
	this.shape_9.setTransform(139.075,27.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAKAVIAAgYQAAgLgJAAQgEAAgDADQgDAEAAAFIAAAXIgHAAIAAgoIAHAAIAAAFQAEgGAHAAQAPAAAAARIAAAYg");
	this.shape_10.setTransform(134.825,27.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAFgFAIAAQAJAAAFAFQAFAGAAAJQAAAKgFAGQgFAGgJgBQgIABgFgGgAgIgKQgDAEAAAGQAAAIADADQADAFAFAAQAFAAAEgFQADgDAAgIQAAgGgDgEQgEgFgFAAQgFAAgDAFg");
	this.shape_11.setTransform(130.275,27.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgCAcIAAgnIAGAAIAAAngAgCgTIAAgIIAGAAIAAAIg");
	this.shape_12.setTransform(127.05,26.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgBAWQgCgCAAgHIAAgWIgHAAIAAgGIAHAAIAAgKIAGAAIAAAKIAIAAIAAAGIgIAAIAAAWIABAFQAAAAABABQAAAAABAAQAAAAABAAQABAAAAAAIADAAIAAAGIgEABQgGAAgCgEg");
	this.shape_13.setTransform(124.725,26.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgCAcIAAgnIAGAAIAAAngAgCgTIAAgIIAGAAIAAAIg");
	this.shape_14.setTransform(122.55,26.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNAXQgEgGAAgKQAAgIAEgGQAFgFAHgBQAIABAEAGIAAAAIAAgWIAHAAIAAA4IgHAAIAAgGQgEAHgHAAQgIAAgFgGgAgHgDQgDAEAAAGQAAAIADAEQADAFAEgBQAFABADgFQADgEAAgIQAAgGgDgEQgDgEgFAAQgEAAgDAEg");
	this.shape_15.setTransform(119.125,26.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAKAVIAAgYQAAgLgJAAQgEAAgDADQgDAEAAAFIAAAXIgHAAIAAgoIAHAAIAAAFQAEgGAHAAQAPAAAAARIAAAYg");
	this.shape_16.setTransform(114.675,27.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAFgFAIAAQAJAAAFAFQAFAGAAAJQAAAKgFAGQgFAGgJgBQgIABgFgGgAgIgKQgDAEAAAGQAAAIADADQADAFAFAAQAFAAAEgFQADgDAAgIQAAgGgDgEQgEgFgFAAQgFAAgDAFg");
	this.shape_17.setTransform(110.125,27.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgMAQQgFgGAAgKQAAgIAFgHQAFgFAIAAQAHgBAFAFQAEAFABAGIgHAAQgBgEgCgDQgDgCgEgBQgFAAgDAFQgDAEAAAGQAAAIADADQADAFAFAAQAEAAADgDQACgDABgEIAHAAQgBAGgEAFQgFAFgHgBQgIABgFgGg");
	this.shape_18.setTransform(105.775,27.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNAXQgEgGAAgKQAAgIAEgGQAFgFAHgBQAIABAEAGIAAAAIAAgWIAHAAIAAA4IgHAAIAAgGQgEAHgHAAQgIAAgFgGgAgHgDQgDAEAAAGQAAAIADAEQADAFAEgBQAFABADgFQADgEAAgIQAAgGgDgEQgDgEgFAAQgEAAgDAEg");
	this.shape_19.setTransform(99.375,26.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAKAVIAAgYQAAgLgJAAQgEAAgDADQgDAEAAAFIAAAXIgHAAIAAgoIAHAAIAAAFQAEgGAHAAQAPAAAAARIAAAYg");
	this.shape_20.setTransform(94.925,27.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNASQgEgEABgEQAAgGADgDQAEgCAIgBIALgCIAAgCQAAgJgKAAQgHAAgBAIIgHAAQABgFAEgFQAEgDAGAAQAQAAABAPIAAAPIABAKIgHAAIgBgFQgEAGgIAAQgHABgEgEgAAAACQgFABgCABQAAABgBAAQAAABgBAAQAAABAAABQAAAAAAABQAAADACACQADACADAAQAEAAAEgEQADgDAAgGIAAgDIgKACg");
	this.shape_21.setTransform(90.4,27.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgLASQgFgEAAgHIAHAAQAAAJAJAAQAEAAADgBQACgDAAgCQAAgEgCgBIgIgDIgJgCQgFgDAAgFQAAgFAFgEQAEgDAGAAQAHAAAEADQAEAEAAAGIgHAAQAAgIgIAAQgDAAgDABQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABQAAABAAAAQABABAAABQAAAAABAAQAAABABAAIAGADIALACQAFADAAAHQAAAFgFAEQgEACgIAAQgHABgEgEg");
	this.shape_22.setTransform(84.625,27.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAVAVIAAgYQAAgLgIAAQgEAAgDADQgDAEAAAGIAAAWIgGAAIAAgZQAAgFgCgCQgCgDgEAAQgEAAgDAEQgCADAAAGIAAAWIgHAAIAAgoIAGAAIAAAFQAFgGAHAAQAJAAACAIQAEgIAJAAQANAAAAARIAAAYg");
	this.shape_23.setTransform(79.225,27.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgKAUIAAgnIAHAAIAAAGQADgHAIABIADAAIAAAGIgDAAQgGAAgCAEQgDADAAAGIAAAUg");
	this.shape_24.setTransform(74.625,27.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgMAQQgGgHAAgJQAAgIAGgHQAEgFAIAAQAHAAAEADQAFAEACAHIAAAHIgcAAQgBAIAEADQADAEAEAAQAEAAAEgCQADgCAAgDIAHAAQgBAFgEAEQgFADgIAAQgIAAgEgFgAAMgDQgBgFgDgDQgDgEgFAAQgEAAgDAEQgDADAAAFIAWAAIAAAAg");
	this.shape_25.setTransform(70.7,27.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgBAWQgCgCAAgHIAAgWIgHAAIAAgGIAHAAIAAgKIAGAAIAAAKIAIAAIAAAGIgIAAIAAAWIABAFQAAAAABABQAAAAABAAQAAAAABAAQABAAAAAAIADAAIAAAGIgEABQgGAAgCgEg");
	this.shape_26.setTransform(67.175,26.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgDAcIAAg3IAGAAIAAA3g");
	this.shape_27.setTransform(63.2,26.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgMASQgFgEAAgEQABgGADgDQAEgCAIgBIALgCIAAgCQAAgJgKAAQgHAAgBAIIgHAAQAAgFAFgFQAEgDAGAAQAQAAAAAPIAAAPIABAKIgGAAIgBgFQgEAGgIAAQgHABgDgEgAAAACQgFABgCABQAAABgBAAQAAABAAAAQgBABAAABQAAAAAAABQAAADACACQACACAEAAQAFAAADgEQADgDAAgGIAAgDIgKACg");
	this.shape_28.setTransform(60,27.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAKAVIAAgYQAAgLgJAAQgEAAgDADQgDAEAAAFIAAAXIgHAAIAAgoIAHAAIAAAFQAEgGAHAAQAPAAAAARIAAAYg");
	this.shape_29.setTransform(55.725,27.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAFgFAIAAQAJAAAFAFQAFAGAAAJQAAAKgFAGQgFAGgJgBQgIABgFgGgAgIgKQgDAEAAAGQAAAIADADQADAFAFAAQAFAAAEgFQADgDAAgIQAAgGgDgEQgEgFgFAAQgFAAgDAFg");
	this.shape_30.setTransform(51.175,27.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgCAcIAAgnIAGAAIAAAngAgCgTIAAgIIAGAAIAAAIg");
	this.shape_31.setTransform(47.95,26.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgBAWQgCgCAAgHIAAgWIgHAAIAAgGIAHAAIAAgKIAGAAIAAAKIAIAAIAAAGIgIAAIAAAWIABAFQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAIADAAIAAAGIgEABQgGAAgCgEg");
	this.shape_32.setTransform(45.625,26.95);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgCAcIAAgnIAGAAIAAAngAgCgTIAAgIIAGAAIAAAIg");
	this.shape_33.setTransform(43.45,26.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgNAXQgEgGAAgKQAAgIAEgGQAFgFAHgBQAIABAEAGIAAAAIAAgWIAHAAIAAA4IgHAAIAAgGQgEAHgHAAQgIAAgFgGgAgHgDQgDAEAAAGQAAAIADAEQADAFAEgBQAFABADgFQADgEAAgIQAAgGgDgEQgDgEgFAAQgEAAgDAEg");
	this.shape_34.setTransform(40.025,26.65);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgNAXQgEgGAAgKQAAgIAEgGQAFgFAHgBQAIABAEAGIAAAAIAAgWIAHAAIAAA4IgHAAIAAgGQgEAHgHAAQgIAAgFgGgAgHgDQgDAEAAAGQAAAIADAEQADAFAEgBQAFABADgFQADgEAAgIQAAgGgDgEQgDgEgFAAQgEAAgDAEg");
	this.shape_35.setTransform(35.425,26.65);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AASAcIgGgRIgXAAIgHARIgIAAIAWg3IAJAAIAWA3gAAKAFIgBgFIgJgXIgIAXIgBAFIATAAg");
	this.shape_36.setTransform(30.55,26.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAIAAIAAAJg");
	this.shape_37.setTransform(25.15,28.975);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgNAQQgEgHgBgJQABgIAEgHQAFgFAIAAQAHAAAFADQAEAEACAHIABAHIgeAAQABAIADADQADAEAFAAQAEAAACgCQAEgCAAgDIAIAAQgCAFgEAEQgFADgHAAQgJAAgFgFgAAMgDQgBgFgDgDQgDgEgFAAQgEAAgDAEQgDADgBAFIAXAAIAAAAg");
	this.shape_38.setTransform(22.05,27.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgMAQQgFgGAAgKQAAgIAFgHQAFgFAIAAQAHgBAFAFQAEAFABAGIgHAAQgBgEgCgDQgDgCgEgBQgFAAgDAFQgDAEAAAGQAAAIADADQADAFAFAAQAEAAADgDQACgDABgEIAHAAQgBAGgEAFQgFAFgHgBQgIABgFgGg");
	this.shape_39.setTransform(17.775,27.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgCAcIAAgnIAGAAIAAAngAgCgTIAAgIIAGAAIAAAIg");
	this.shape_40.setTransform(14.65,26.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgBAWQgCgCAAgHIAAgWIgHAAIAAgGIAHAAIAAgKIAGAAIAAAKIAIAAIAAAGIgIAAIAAAWIABAFQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAIADAAIAAAGIgEABQgGAAgCgEg");
	this.shape_41.setTransform(12.325,26.95);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAFgFAIAAQAJAAAFAFQAFAGAAAJQAAAKgFAGQgFAGgJgBQgIABgFgGgAgIgKQgDAEAAAGQAAAIADADQADAFAFAAQAFAAAEgFQADgDAAgIQAAgGgDgEQgEgFgFAAQgFAAgDAFg");
	this.shape_42.setTransform(8.875,27.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAKAVIAAgYQAAgLgJAAQgEAAgDADQgDAEAAAFIAAAXIgHAAIAAgoIAHAAIAAAFQAEgGAHAAQAPAAAAARIAAAYg");
	this.shape_43.setTransform(4.325,27.375);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgBAXQgCgDAAgGIAAgXIgHAAIAAgFIAHAAIAAgKIAGAAIAAAKIAIAAIAAAFIgIAAIAAAWIABAFQAAAAABABQAAAAABAAQAAAAABAAQABABAAAAIADgBIAAAGIgEAAQgGAAgCgCg");
	this.shape_44.setTransform(137.825,17.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgQAEIAAgYIAHAAIAAAXQAAAMAJAAQADAAADgDQAEgEAAgGIAAgWIAHAAIAAAoIgHAAIAAgGQgEAHgIAAQgOAAAAgRg");
	this.shape_45.setTransform(134.3,18.425);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgNAQQgFgGAAgKQAAgJAFgFQAFgHAIAAQAJAAAFAHQAFAFAAAJQAAAKgFAGQgFAFgJABQgIgBgFgFgAgIgLQgDAFAAAGQAAAHADAFQADAEAFAAQAFAAAEgEQADgFAAgHQAAgGgDgFQgEgDgFAAQgFAAgDADg");
	this.shape_46.setTransform(129.775,18.35);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAKAdIAAgZQAAgKgJAAQgEAAgDADQgDADAAAFIAAAYIgHAAIAAg5IAHAAIAAAWQAEgGAHAAQAPAAAAAQIAAAZg");
	this.shape_47.setTransform(125.225,17.55);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgBAXQgCgDAAgGIAAgXIgHAAIAAgFIAHAAIAAgKIAGAAIAAAKIAIAAIAAAFIgIAAIAAAWIABAFQAAAAABABQAAAAABAAQAAAAABAAQABABAAAAIADgBIAAAGIgEAAQgGAAgCgCg");
	this.shape_48.setTransform(121.575,17.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgCAdIAAgoIAGAAIAAAogAgCgUIAAgIIAGAAIAAAIg");
	this.shape_49.setTransform(119.4,17.55);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAJAUIgEgRIgFgRIAAAAIgDARIgFARIgKAAIgLgnIAHAAIAEARIAFARIAEgRIAFgRIAJAAIAFARIAEARIAFgRIAEgRIAHAAIgLAng");
	this.shape_50.setTransform(115.325,18.375);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgMAPQgGgFAAgKQAAgIAGgGQAEgHAIAAQAHAAAFAEQAFAFABAGIAAAIIgdAAQABAHADAEQADADAEAAQAFAAACgCQADgCABgEIAHAAQgBAGgEADQgFAFgIAAQgHAAgFgHgAAMgDQgBgGgDgCQgDgEgFAAQgEAAgDAEQgDACgBAGIAXAAIAAAAg");
	this.shape_51.setTransform(108.25,18.35);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgLAZQgFgDAAgHIAHAAQABAEACACQADACADAAQALAAAAgNIAAgEQgEAGgHAAQgIAAgEgFQgFgFAAgJQAAgJAFgGQAEgGAIABQAHAAAEAGIAAAAIAAgFIAHAAIAAAlQAAARgSABQgGgBgFgDgAgHgSQgDAEAAAHQAAAHADADQADADAEAAQAFAAADgDQADgDAAgHQAAgHgDgEQgDgEgFAAQgEAAgDAEg");
	this.shape_52.setTransform(103.65,19.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAKAVIAAgYQAAgLgJAAQgEAAgDADQgDAEAAAFIAAAXIgHAAIAAgoIAHAAIAAAFQAEgGAHAAQAPAAAAARIAAAYg");
	this.shape_53.setTransform(99.225,18.325);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgNASQgDgDAAgGQgBgFAEgDQADgCAJgCIALAAIAAgCQAAgKgJAAQgIAAAAAJIgHAAQAAgGAEgFQAEgEAHAAQAQABAAAQIAAAOIABALIgHAAIAAgHQgFAIgJAAQgGgBgEgDgAAAACQgFABgCACQgBAAAAAAQAAABgBAAQAAABAAABQAAAAAAABQAAADACACQADACADAAQAEAAADgDQAEgDAAgHIAAgDIgKACg");
	this.shape_54.setTransform(94.7,18.35);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAKAdIAAgZQAAgKgJAAQgEAAgDADQgDADAAAFIAAAYIgHAAIAAg5IAHAAIAAAWQAEgGAHAAQAPAAAAAQIAAAZg");
	this.shape_55.setTransform(90.425,17.55);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgMAQQgFgGAAgKQAAgJAFgFQAFgHAIAAQAHABAFAEQAEAEABAIIgHAAQgBgFgCgDQgDgCgEAAQgFAAgDADQgDAFAAAGQAAAHADAFQADAEAFAAQAEAAADgDQACgDABgFIAHAAQgBAHgEAFQgFAEgHABQgIgBgFgFg");
	this.shape_56.setTransform(86.025,18.35);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgQAbIAAgFIADAAQAEAAACgCQACgCACgFIgPgoIAHAAIALAfIAMgfIAHAAIgQAqQgDAHgCADQgEADgHAAIgDgBg");
	this.shape_57.setTransform(80.175,19.125);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgMASQgFgDAAgGQABgFADgDQAEgCAIgCIALAAIAAgCQAAgKgKAAQgHAAgBAJIgHAAQAAgGAFgFQAEgEAGAAQAQABABAQIAAAOIAAALIgGAAIgBgHQgEAIgIAAQgHgBgDgDgAAAACQgFABgCACQAAAAgBAAQAAABAAAAQgBABAAABQAAAAAAABQAAADACACQADACADAAQAFAAADgDQADgDAAgHIAAgDIgKACg");
	this.shape_58.setTransform(76.1,18.35);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAVAVIAAgYQAAgLgIAAQgEAAgDADQgDAEAAAGIAAAWIgGAAIAAgZQAAgFgCgCQgCgDgEAAQgEAAgDAEQgCADAAAGIAAAWIgHAAIAAgoIAGAAIAAAFQAFgGAHAAQAJAAACAIQAEgIAJAAQANAAAAARIAAAYg");
	this.shape_59.setTransform(70.675,18.325);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgNAXQgEgFAAgKQAAgJAEgGQAFgGAHABQAIgBAEAHIAAAAIAAgWIAHAAIAAA4IgHAAIAAgGQgEAHgHAAQgIAAgFgGgAgHgDQgDADAAAIQAAAHADAEQADAFAEAAQAFAAADgFQADgEAAgHQAAgIgDgDQgDgEgFAAQgEAAgDAEg");
	this.shape_60.setTransform(62.975,17.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAKAVIAAgYQAAgLgJAAQgEAAgDADQgDAEAAAFIAAAXIgHAAIAAgoIAHAAIAAAFQAEgGAHAAQAPAAAAARIAAAYg");
	this.shape_61.setTransform(58.525,18.325);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgNASQgDgDAAgGQAAgFADgDQAEgCAIgCIALAAIAAgCQAAgKgJAAQgIAAAAAJIgHAAQgBgGAFgFQAEgEAHAAQAPABAAAQIAAAOIABALIgFAAIgBgHQgFAIgJAAQgGgBgEgDgAAAACQgFABgCACQgBAAAAAAQAAABAAAAQgBABAAABQAAAAAAABQAAADACACQADACADAAQAEAAADgDQAEgDAAgHIAAgDIgKACg");
	this.shape_62.setTransform(54,18.35);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgRAcIgBgCQAAgIADgFQAEgFAJgGIAJgGQADgCAAgGQAAgDgDgCQgCgDgFAAQgJAAAAAKIgIAAQAAgHAFgFQAFgFAHABQAIAAAFAEQAEAEAAAGQAAAHgEAEQgDADgHAEQgHAFgDADQgCADAAAEIAcAAIAAAHg");
	this.shape_63.setTransform(47.975,17.65);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgRAcIgBgCQAAgIADgFQAEgFAJgGIAJgGQADgCAAgGQAAgDgDgCQgCgDgFAAQgJAAAAAKIgIAAQAAgHAFgFQAFgFAHABQAIAAAFAEQAEAEAAAGQAAAHgEAEQgDADgHAEQgHAFgDADQgCADAAAEIAcAAIAAAHg");
	this.shape_64.setTransform(43.525,17.65);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgOAhIAWhBIAHAAIgXBBg");
	this.shape_65.setTransform(39.4,17.775);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgNAYQgEgFAAgIIAHAAQAAALAKAAQAFAAADgDQADgCAAgEQAAgKgLAAIgDAAIAAgFIADAAQAEgBADgCQADgCABgEQgBgFgCgCQgEgDgEABQgJAAAAAKIgIAAQAAgIAFgEQAFgFAHAAQAIAAAFAEQAFAEAAAHQAAAJgJADIAAAAQAKADAAAKQAAAHgGAEQgEAEgJAAQgHAAgGgEg");
	this.shape_66.setTransform(35.4,17.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgOAhIAWhBIAHAAIgXBBg");
	this.shape_67.setTransform(31.3,17.775);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgNAVQgGgIAAgNQAAgMAGgIQAEgHAJAAQAKAAAEAHQAFAIABAMQgBANgFAIQgEAHgKAAQgJAAgEgHgAgLAAQAAAWALAAQAMAAAAgWQAAgVgMABQgLgBAAAVg");
	this.shape_68.setTransform(27.35,17.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AACAbIAAgmIgLAAIAAgGQAGAAADgCQACgCABgFIAHAAIAAA1g");
	this.shape_69.setTransform(22.475,17.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgDAdIAAgiIgHAAIAAgGIAHAAIAAgFQAAgMAKAAIAEABIAAAFIgCAAQgGAAAAAHIAAAEIAIAAIAAAGIgIAAIAAAig");
	this.shape_70.setTransform(17.675,17.525);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgNAQQgFgGAAgKQAAgJAFgFQAFgHAIAAQAJAAAFAHQAFAFAAAJQAAAKgFAGQgFAFgJABQgIgBgFgFgAgIgLQgDAFAAAGQAAAHADAFQADAEAFAAQAFAAAEgEQADgFAAgHQAAgGgDgFQgEgDgFAAQgFAAgDADg");
	this.shape_71.setTransform(14.225,18.35);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgLASQgFgEAAgHIAHAAQAAAJAJAAQAEAAADgCQACgCAAgCQAAgDgCgCIgIgCIgJgDQgFgCAAgHQAAgFAFgDQAEgDAGgBQAHAAAEAEQAEAEAAAHIgHAAQAAgJgIAAQgDAAgDACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQAAABABAAIAGACIALADQAFADAAAGQAAAGgFADQgEAEgIAAQgHgBgEgDg");
	this.shape_72.setTransform(8.175,18.35);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgNASQgEgDAAgGQABgFADgDQAEgCAIgCIALAAIAAgCQAAgKgKAAQgHAAgBAJIgHAAQABgGAEgFQAEgEAGAAQAQABABAQIAAAOIABALIgHAAIgBgHQgEAIgIAAQgHgBgEgDgAAAACQgFABgCACQAAAAgBAAQAAABgBAAQAAABAAABQAAAAAAABQAAADACACQADACADAAQAEAAAEgDQADgDAAgHIAAgDIgKACg");
	this.shape_73.setTransform(4,18.35);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgMAQQgGgGAAgKQAAgIAGgHQAEgFAIgBQAHABAFAEQAFADABAHIAAAHIgdAAQABAIADADQADAEAEAAQAFAAACgCQADgCABgDIAHAAQgBAFgEAEQgFADgIAAQgHAAgFgFgAAMgDQgBgGgDgDQgDgDgFAAQgEAAgDADQgDADgBAGIAXAAIAAAAg");
	this.shape_74.setTransform(145.6,9.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgBAWQgCgCAAgHIAAgWIgHAAIAAgGIAHAAIAAgKIAGAAIAAAKIAIAAIAAAGIgIAAIAAAWIABAFQAAAAABABQAAAAABAAQAAAAABAAQABAAAAABIADgBIAAAGIgEABQgGAAgCgEg");
	this.shape_75.setTransform(142.075,8.85);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgMASQgFgEAAgEQABgGADgDQAEgCAIgCIALgBIAAgCQAAgJgKAAQgHAAgBAJIgHAAQAAgGAFgEQAEgEAGgBQAQAAABAQIAAAPIAAAKIgGAAIgBgGQgEAIgIgBQgHABgDgEgAAAACQgFABgCABQAAABgBAAQAAABgBAAQAAABAAABQAAAAAAABQAAADACACQADACADAAQAFAAADgEQADgDAAgGIAAgCIgKABg");
	this.shape_76.setTransform(138.65,9.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgKAUIAAgnIAHAAIAAAGQADgHAIABIADAAIAAAGIgDAAQgGAAgCAEQgDADAAAGIAAAUg");
	this.shape_77.setTransform(135.525,9.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgQAEIAAgYIAHAAIAAAXQAAAMAJAAQADAAADgDQAEgEAAgGIAAgWIAHAAIAAAoIgHAAIAAgGQgEAHgIAAQgOAAAAgRg");
	this.shape_78.setTransform(131.5,9.375);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgMAQQgFgGAAgKQAAgIAFgHQAFgFAIgBQAHAAAFAFQAEAFABAGIgHAAQgBgEgCgDQgDgCgEgBQgFAAgDAFQgDAEAAAGQAAAIADADQADAFAFAAQAEAAADgDQACgDABgFIAHAAQgBAIgEAEQgFAFgHgBQgIABgFgGg");
	this.shape_79.setTransform(127.125,9.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgMAQQgFgGAAgKQAAgIAFgHQAFgFAIgBQAHAAAFAFQAEAFABAGIgHAAQgBgEgCgDQgDgCgEgBQgFAAgDAFQgDAEAAAGQAAAIADADQADAFAFAAQAEAAADgDQACgDABgFIAHAAQgBAIgEAEQgFAFgHgBQgIABgFgGg");
	this.shape_80.setTransform(122.875,9.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgMASQgFgEAAgEQABgGADgDQADgCAJgCIALgBIAAgCQAAgJgKAAQgHAAgBAJIgHAAQAAgGAFgEQAEgEAGgBQAQAAABAQIAAAPIAAAKIgGAAIgBgGQgEAIgIgBQgHABgDgEgAAAACQgFABgCABQAAABgBAAQAAABAAAAQgBABAAABQAAAAAAABQAAADACACQACACAEAAQAFAAADgEQADgDAAgGIAAgCIgKABg");
	this.shape_81.setTransform(118.5,9.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgHAkQAHgRABgTQgBgSgHgRIAFAAQALARAAASQAAATgLARg");
	this.shape_82.setTransform(113.5,8.975);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgDAcIAAgXIgUggIAIAAIAHALIAIAQIAJgQIAHgLIAIAAIgVAgIAAAXg");
	this.shape_83.setTransform(109.975,8.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgTAcIAAg3IATAAQAKgBAFAFQAFAFAAAIQAAAHgFAEQgFAFgKAAIgLAAIAAAWgAgLAAIALAAQAMAAAAgKQAAgLgMAAIgLAAg");
	this.shape_84.setTransform(105.325,8.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AATAcIgGgRIgZAAIgGARIgHAAIAVg3IAJAAIAVA3gAAKAFIgCgFIgIgXIgHAXIgCAFIATAAg");
	this.shape_85.setTransform(99.9,8.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AACAkQgKgQABgUQgBgTAKgQIAHAAQgJARAAASQAAATAJARg");
	this.shape_86.setTransform(96.15,8.975);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgNAXQgEgGAAgKQAAgIAEgGQAFgFAHgBQAIABAEAGIAAAAIAAgWIAHAAIAAA4IgHAAIAAgGQgEAHgHAAQgIAAgFgGgAgHgDQgDAEAAAGQAAAIADAEQADAEAEAAQAFAAADgEQADgEAAgIQAAgGgDgEQgDgEgFAAQgEAAgDAEg");
	this.shape_87.setTransform(90.675,8.55);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgCAcIAAg3IAGAAIAAA3g");
	this.shape_88.setTransform(87.55,8.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgNAQQgEgGAAgKQAAgIAEgHQAGgFAHgBQAHABAFAEQAEADACAHIABAHIgeAAQAAAIAEADQADAEAFAAQADAAAEgCQACgCABgDIAIAAQgCAFgEAEQgFADgHAAQgIAAgGgFgAAMgDQgBgGgDgDQgDgDgFAAQgEAAgDADQgDADgBAGIAXAAIAAAAg");
	this.shape_89.setTransform(84.35,9.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgDAcIAAgnIAGAAIAAAngAgDgTIAAgIIAGAAIAAAIg");
	this.shape_90.setTransform(81.2,8.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgDAcIAAgXIgUggIAIAAIAHALIAIAQIAJgQIAHgLIAIAAIgVAgIAAAXg");
	this.shape_91.setTransform(77.775,8.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgNAQQgEgGAAgKQAAgIAEgHQAGgFAHgBQAHABAEAEQAFADACAHIABAHIgeAAQAAAIAEADQADAEAFAAQADAAAEgCQACgCABgDIAIAAQgCAFgEAEQgFADgHAAQgIAAgGgFgAAMgDQgBgGgDgDQgDgDgFAAQgEAAgDADQgDADgBAGIAXAAIAAAAg");
	this.shape_92.setTransform(71.3,9.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgLAZQgFgEABgFIAHAAQAAADADACQACACAEAAQAKAAAAgNIAAgEQgEAHgHAAQgIAAgFgGQgEgGAAgIQAAgJAEgGQAFgFAIgBQAHAAAEAIIABAAIAAgHIAGAAIAAAlQAAATgRgBQgIABgEgEgAgHgSQgDAEAAAHQAAAGADADQADAFAEAAQAGAAADgFQADgDAAgGQAAgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_93.setTransform(66.7,10.05);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgMASQgFgEAAgEQAAgGAEgDQADgCAJgCIALgBIAAgCQAAgJgKAAQgHAAgBAJIgGAAQgBgGAFgEQAEgEAGgBQARAAgBAQIAAAPIABAKIgFAAIgCgGQgEAIgIgBQgHABgDgEgAAAACQgFABgCABQAAABgBAAQAAABAAAAQgBABAAABQAAAAAAABQAAADACACQACACAEAAQAFAAADgEQADgDAAgGIAAgCIgKABg");
	this.shape_94.setTransform(62.35,9.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgBAWQgCgCAAgHIAAgWIgHAAIAAgGIAHAAIAAgKIAGAAIAAAKIAIAAIAAAGIgIAAIAAAWIABAFQAAAAABABQAAAAABAAQAAAAABAAQABAAAAABIADgBIAAAGIgEABQgGAAgCgEg");
	this.shape_95.setTransform(59.025,8.85);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAKAVIAAgYQAAgLgJAAQgEAAgDADQgDAEAAAFIAAAXIgHAAIAAgoIAHAAIAAAFQAEgGAHAAQAPAAAAARIAAAYg");
	this.shape_96.setTransform(55.525,9.275);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgMAQQgGgGAAgKQAAgIAGgHQAEgFAIgBQAHABAEAEQAGADABAHIAAAHIgcAAQAAAIADADQADAEAEAAQAFAAADgCQACgCABgDIAHAAQgBAFgEAEQgFADgIAAQgHAAgFgFgAAMgDQgBgGgDgDQgDgDgFAAQgEAAgDADQgDADAAAGIAWAAIAAAAg");
	this.shape_97.setTransform(51,9.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgMAQQgFgGAAgKQAAgIAFgHQAFgFAIgBQAHAAAFAFQAEAFABAGIgHAAQgBgEgCgDQgDgCgEgBQgFAAgDAFQgDAEAAAGQAAAIADADQADAFAFAAQAEAAADgDQACgDABgFIAHAAQgBAIgEAEQgFAFgHgBQgIABgFgGg");
	this.shape_98.setTransform(46.725,9.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgKAUIAAgnIAHAAIAAAGQADgHAIABIADAAIAAAGIgDAAQgGAAgCAEQgDADAAAGIAAAUg");
	this.shape_99.setTransform(43.425,9.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgMAQQgFgGgBgKQABgIAFgHQAEgFAIgBQAHABAFAEQAFADABAHIAAAHIgdAAQABAIADADQADAEAEAAQAFAAACgCQADgCABgDIAHAAQgBAFgEAEQgFADgIAAQgHAAgFgFgAAMgDQgBgGgDgDQgDgDgFAAQgEAAgDADQgDADgBAGIAXAAIAAAAg");
	this.shape_100.setTransform(39.5,9.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgTAcIAAg3IATAAQAKgBAFAFQAFAFAAAIQAAAHgFAEQgFAFgKAAIgLAAIAAAWgAgLAAIALAAQAMAAAAgKQAAgLgMAAIgLAAg");
	this.shape_101.setTransform(35.125,8.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_102.setTransform(29.65,8.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgMASQgEgEgBgEQAAgGAEgDQAEgCAIgCIALgBIAAgCQAAgJgKAAQgHAAgBAJIgGAAQgBgGAFgEQAEgEAGgBQARAAgBAQIAAAPIABAKIgFAAIgBgGQgFAIgIgBQgHABgDgEgAAAACQgFABgCABQAAABgBAAQAAABAAAAQgBABAAABQAAAAAAABQAAADACACQACACAEAAQAEAAADgEQAEgDAAgGIAAgCIgKABg");
	this.shape_103.setTransform(26.45,9.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgQAEIAAgYIAHAAIAAAXQAAAMAJAAQADAAADgDQAEgEAAgGIAAgWIAHAAIAAAoIgHAAIAAgGQgEAHgIAAQgOAAAAgRg");
	this.shape_104.setTransform(22.15,9.375);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AAKAVIAAgYQAAgLgJAAQgEAAgDADQgDAEAAAFIAAAXIgHAAIAAgoIAHAAIAAAFQAEgGAHAAQAPAAAAARIAAAYg");
	this.shape_105.setTransform(17.575,9.275);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAKAVIAAgYQAAgLgJAAQgEAAgDADQgDAEAAAFIAAAXIgHAAIAAgoIAHAAIAAAFQAEgGAHAAQAPAAAAARIAAAYg");
	this.shape_106.setTransform(12.975,9.275);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AATAcIgHgRIgYAAIgGARIgHAAIAVg3IAJAAIAWA3gAAKAFIgBgFIgJgXIgHAXIgCAFIATAAg");
	this.shape_107.setTransform(7.95,8.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AAAADIgEAKIgFgDIAHgIIgLgCIACgGIAKAFIgBgLIAFAAIgBALIAKgFIACAGIgLACIAHAIIgFADg");
	this.shape_108.setTransform(3.625,6.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LEGAL, new cjs.Rectangle(0,0,150.1,43.2), null);


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
	this.shape.setTransform(39.05,118.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxAtIAWgYQAKANAPAAQAQAAAAgJQAAgFgHgCIgOgFIgSgEQgIgDgGgHQgHgIAAgMQAAgTAPgKQAOgKATAAQAdAAAOAPIgVAWQgIgKgNAAQgFAAgEACQgEADAAAFQAAAEAFACQAEADAGABIAOADIAPAGQAHADAEAGQAFAHAAALQAAAKgFAIQgFAIgHAEQgJAEgJACQgJACgJAAQgeAAgQgQg");
	this.shape_1.setTransform(29.95,114.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhNBVIAAipIA4AAQAVAAARAFQARAEAPALQAOAJAHARQAJARgBAVQAAAbgNATQgNAUgWAJQgVAKgZAAgAgoAzIATAAQA9AAAAgzQAAgYgRgNQgRgNgYAAIgWAAg");
	this.shape_2.setTransform(15.75,111.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgyBBQgagYAAgpQAAgnAagZQAagYAngBQAQAAAQAHQAPAGAKANIgcAYQgMgOgVgBQgUAAgOAQQgOAPAAAXQAAAXAOAQQAOAQATAAQAXAAAMgTIAgAYQgLAOgQAIQgRAHgSAAQgnABgagZg");
	this.shape_3.setTransform(-1.725,111.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhCBMQgSgOAAgYQAAgPAKgNQAKgMAQgFQgKgKgEgJQgFgHAAgMQAAgVAQgMQAPgKAWgBQAUABAOAKQAPALAAAVQAAANgJAMQgJALgOAIIAWAWIARgVIApAAIgjAuIAlAoIguAAIgOgQQgUAVgdgBQgZABgRgOgAgkATQgDACgDAFQgDAFAAAFQAAAKAHAGQAGAFAJAAQANAAANgMIgdghgAgag3QgFAEAAAHQAAAJAOAMQASgKAAgLQAAgHgDgEQgFgFgHAAQgHAAgFAFg");
	this.shape_4.setTransform(-25.975,111.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgxAtIAWgYQAKANAQAAQAPAAAAgJQAAgFgGgCIgPgFIgSgEQgJgDgGgHQgGgIAAgMQAAgTAOgKQAPgKATAAQAdAAAPAPIgXAWQgHgKgOAAQgEAAgEACQgEADAAAFQAAAEAEACQAFADAGABIAOADIAPAGQAHADAFAGQAEAHAAALQAAAKgFAIQgFAIgIAEQgIAEgJACQgJACgJAAQgeAAgQgQg");
	this.shape_5.setTransform(40.35,86.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAvBVIgPgkIhBAAIgOAkIgpAAIBJipIAeAAIBKCpgAATASIgTg1IgVA1IAoAAg");
	this.shape_6.setTransform(25.95,83.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYBVIgjhEIgTAAIAABEIglAAIAAipIBCAAQA/AAAAAzQAAATgKANQgJALgSADIArBIgAgegOIAXAAIAKAAIAJgCQAGgCACgEQADgEAAgHQAAgTgcgBIgZAAg");
	this.shape_7.setTransform(10.025,83.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSBVIAAipIAlAAIAACpg");
	this.shape_8.setTransform(-2.025,83.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgoA8IAAh0IAkAAIAAATQALgWAWAAIAMABIAAAhQgJgCgGAAQgKAAgHADQgGACgDAGQgDAGAAAGIgBAPIAAAxg");
	this.shape_9.setTransform(-17.05,86.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgtAsQgTgRAAgbQAAgaATgRQASgRAbAAQAcAAASARQATARAAAaQAAAbgTARQgSARgcAAQgbAAgSgRgAgUgUQgIAIAAAMQAAANAIAIQAIAIAMAAQANAAAIgIQAIgIAAgNQAAgMgIgIQgIgJgNAAQgMAAgIAJg");
	this.shape_10.setTransform(-29.725,86.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVBcIAAhYIgXAAIAAgbIAXAAIAAgVQAAgLACgHQACgIAFgHQAEgHAIgDQAKgEAOAAQANAAAIACIgCAfQgGgDgFAAQgJAAgEAEQgFAEAAALIAAATIAbAAIAAAbIgbAAIAABYg");
	this.shape_11.setTransform(-41.225,82.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAAAIIgKAOIgGgFIAKgOIgRgFIADgHIARAFIAAgRIAIAAIAAARIAQgFIADAIIgRAEIALAPIgHAEg");
	this.shape_12.setTransform(48.775,57.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgFArIAAgkIgggxIAPAAIAWAmIAYgmIAOAAIggAxIAAAkg");
	this.shape_13.setTransform(42.375,59.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgcArIAAhVIAeAAQAHAAAFADQAGACADADQADAEACAEIABAIIgBAJQgCADgDAEQgDACgGADQgFACgHAAIgSAAIAAAmgAgQgEIAPAAQARAAAAgOQAAgOgRAAIgPAAg");
	this.shape_14.setTransform(35.55,59.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAdArIgJgWIgnAAIgJAWIgNAAIAlhVIAKAAIAkBVgAAQALIgQgmIAAAAIgPAmIAfAAg");
	this.shape_15.setTransform(27.425,59.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#34B8EB").s().p("Ag5BTIBgiuIAUALIhiCsgAAbBKQgOgOAAgUQAAgUAOgNQAOgNATgBQAUABAOANQAOANAAAUQAAAUgOAOQgOAOgUAAQgTAAgOgOgAAsAYQgGAGAAAKQAAAKAGAGQAHAIAJAAQAKAAAHgIQAGgGAAgKQAAgKgGgGQgHgHgKAAQgJAAgHAHgAhdgGQgOgNAAgVQAAgTAOgOQAOgOAUAAQATAAAOAOQAOAOAAATQAAAVgOANQgOANgTAAQgUAAgOgNgAhMg3QgGAGAAAJQAAAKAGAHQAHAHAKAAQAJAAAHgHQAHgHAAgKQAAgJgHgGQgHgIgJABQgKgBgHAIg");
	this.shape_16.setTransform(9.025,55.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#34B8EB").s().p("AgoBMQgPgMgFgVIAmgJQABAKAGAFQAHAGAIAAQALgBAHgGQAHgIAAgLQAAgLgGgGQgGgGgIgCQgHgDgLAAQgRAAgSAGIAChcIBlAAIAAAfIhCAAIgBAaQAGgCAIAAQAaABARAPQAQAOAAAZQAAAdgSAQQgSAQgcAAQgWABgPgLg");
	this.shape_17.setTransform(-9.175,55.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#34B8EB").s().p("AgZBTQgLgGgHgJQgHgIgFgMQgDgMgDgLQgBgMAAgNQAAgMABgMQADgMADgLQAFgMAHgJQAHgIALgFQAMgGANAAQAPAAALAGQAMAFAGAIQAHAJAEAMQAFALABAMQACAMAAAMQAAANgCAMQgBALgFAMQgEAMgHAIQgGAJgMAGQgLAFgPAAQgNAAgMgFgAgaAAQAAA3AaAAQAbAAAAg3QAAg2gbABQgagBAAA2g");
	this.shape_18.setTransform(-23.15,55.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#34B8EB").s().p("AgPAQQgGgHAAgJQAAgIAGgGQAHgHAIAAQAJAAAHAHQAGAGAAAIQAAAJgGAHQgHAGgJAAQgIAAgHgGg");
	this.shape_19.setTransform(-33.8,62.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#34B8EB").s().p("AgnBNQgQgLgFgWIAmgJQAEAUAUAAQALAAAGgGQAGgGAAgKQAAgFgCgFQgCgEgDgBQgDgCgFgCIgJgBIgJAAIgIAAIAAgeIAMAAQAaAAAAgTQAAgHgGgGQgGgEgJAAQgHgBgGAFQgFAEgCAHIgogIQAGgVAQgKQAQgKAWAAQAYAAARAMQAQAMAAAXQAAAPgHAKQgIAKgOACIAAACQAPABAJALQAIALAAAPQAAAYgRANQgSAOgaAAQgXAAgQgLg");
	this.shape_20.setTransform(-44.675,55.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAPAtIAAghQAAgIgEgDQgEgDgFAAQgHAAgEAEQgEAFAAAJIAAAdIgLAAIAAhZIALAAIAAAqQACgEAFgDQAFgDAGAAQAJAAAFAFQAGAGAAAKIAAAkg");
	this.shape_21.setTransform(22.675,34.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AABAkIgDgDIgDgEIgBgFIAAgGIAAgdIgNAAIAAgJIANAAIAAgQIAKAAIAAAQIAPAAIAAAJIgPAAIAAAZIAAAFIABAEIACADIAFABQAFAAACgCIAAAKQgDACgGAAQgFAAgEgBg");
	this.shape_22.setTransform(16.9,35.475);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAPAdIAAggQAAgIgEgDQgEgEgFAAQgHAAgEAFQgEAFAAAIIAAAdIgLAAIAAg4IALAAIAAAJQACgEAFgDQAFgDAGAAQAJAAAFAFQAGAGAAALIAAAjg");
	this.shape_23.setTransform(11.625,36.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgVAVQgIgJAAgMQAAgLAIgJQAJgJAMAAQANAAAIAJQAJAJAAALQAAAMgJAJQgIAJgNAAQgMAAgJgJgAgNgNQgFAGAAAHQAAAJAFAFQAFAGAIAAQAIAAAGgGQAFgFAAgJQAAgHgFgGQgGgGgIABQgIgBgFAGg");
	this.shape_24.setTransform(4.775,36.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAhAdIAAgeIgBgHIgCgFQgBgCgDgCIgGgBQgOAAAAARIAAAeIgKAAIAAgdQgBgJgCgEQgCgFgIAAQgFAAgFAFQgEAFAAAIIAAAdIgLAAIAAg4IAKAAIAAAJIABAAQABgDAEgEQAGgDAHAAQAMAAAFAKQACgFAFgCQAFgDAGAAQAVAAAAAZIAAAgg");
	this.shape_25.setTransform(-3.9,36.125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgOAFIAAgJIAdAAIAAAJg");
	this.shape_26.setTransform(-10.875,36.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgbAsIAAgMIAhghQAKgKAAgIQAAgGgEgEQgFgEgGAAQgFAAgEAEQgEADgBAHIgNgBQACgLAHgGQAIgFAKgBQAMAAAHAHQAIAFAAAMQAAAIgEAFQgEAGgHAHIgbAbIAqAAIAAAKg");
	this.shape_27.setTransform(-16.075,34.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAGArIAAhHIgPAOIgHgIIAXgUIAKAAIAABVg");
	this.shape_28.setTransform(-23.35,34.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgrA0QgMgKAAgRQAAgIADgHQADgGAEgEQAFgEAHgDIANgEIAQgDIANgBIAOAAQAAgJgHgGQgGgGgKAAQgQAAgNAOIgTgUQAUgSAfAAQAdAAAMAOQAMAPAAAfIAAA6IghAAIAAgOIAAAAQgLARgZAAQgSAAgMgJgAgUAYQgBAGAGADQAFAEAHAAQAKAAAIgGQAIgGAAgKIAAgIIgJAAQgiAAAAARg");
	this.shape_29.setTransform(43.1,14.325);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAUA8IAAg5IAAgIIgBgIQgBgFgCgCQgCgDgDgCQgFgCgEAAQgNAAgEAIQgEAIAAANIAAA6IgkAAIAAh0IAiAAIAAAQIABAAQAEgIAIgFQAIgGANAAQAZAAAJAPQAJAOAAAaIAABAg");
	this.shape_30.setTransform(22.85,14.175);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgRBXIAAhzIAjAAIAABzgAgOgyQgGgGAAgJQAAgJAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAJQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_31.setTransform(12.875,11.425);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAPBbIgng7IAAA7IgkAAIAAi1IAkAAIAABuIAngtIAsAAIguA0IAwBAg");
	this.shape_32.setTransform(-3.3,11.075);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AghAsQgTgRAAgbQAAgaATgRQASgRAbAAQAaAAAPAPIgYAZQgGgJgLAAQgNAAgHAJQgIAIAAAMQAAANAIAIQAHAIANAAQAKAAAHgIIAYAYQgPAQgaAAQgbAAgSgRg");
	this.shape_33.setTransform(-15.975,14.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgtAsQgTgRAAgbQAAgaATgRQASgRAbAAQAcAAASARQATARAAAaQAAAbgTARQgSARgcAAQgbAAgSgRgAgUgUQgIAIAAAMQAAANAIAIQAIAIAMAAQANAAAIgIQAIgIAAgNQAAgMgIgIQgIgJgNAAQgMAAgIAJg");
	this.shape_34.setTransform(-29.475,14.325);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ag0BVIAAipIAlAAIAACHIBEAAIAAAig");
	this.shape_35.setTransform(-42.425,11.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD, new cjs.Rectangle(-74.7,0,149.5,128), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgmAjIARgTQAIAKAMAAQAMABAAgHQAAgEgFgCIgLgDIgOgFQgHgBgFgGQgFgGAAgKQAAgPALgHQALgJAPAAQAYAAALAMIgSASQgGgIgKAAQgDAAgDACQgEACAAADQAAADAEADQADABAFABIALADIAMAFQAGACADAFQAEAGAAAIQAAAIgFAGQgDAHgHADQgGADgHACQgHACgHAAQgYgBgMgNg");
	this.shape.setTransform(83.05,24.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggAjQgOgOAAgVQAAgVAOgOQAPgNAVAAQAUAAAMANQAMANgBAWIAAAJIhBAAQACAIAGAFQAGAFAGgBQANAAAIgLIAUAPQgHAJgKAEQgKAGgMAAQgVAAgPgOgAATgKQAAgHgFgFQgFgFgIAAQgIAAgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_1.setTransform(73.2,24.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHA2QgKgGABgPIAAgrIgTAAIAAgXIATAAIAAgbIAbAAIAAAbIAZAAIAAAXIgZAAIAAAeQAAAIACAEQADAFAJAAQAIAAADgDIAAAYQgIADgMAAQgPAAgIgHg");
	this.shape_2.setTransform(63.75,23.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiApQgKgIAAgNQABgHACgFQADgFADgDQADgDAGgCIAKgEIAMgCIALgBIALAAQAAgHgGgEQgEgFgIAAQgNAAgKALIgOgQQAPgOAYgBQAYAAAJAMQAKAMAAAYIAAAuIgbAAIAAgMIAAAAQgJAOgTABQgPgBgJgHgAgQATQAAAEAEADQAEADAGAAQAHAAAGgFQAHgFAAgHIAAgHIgHAAQgbAAAAAOg");
	this.shape_3.setTransform(54.85,24.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATBDIgbg2IgPAAIAAA2IgeAAIAAiFIA1AAQAxAAAAApQAAAOgIAKQgHAJgOACIAiA5gAgXgLIARAAIAIAAIAIgCQAEgBACgDQACgDAAgGQAAgPgWAAIgTAAg");
	this.shape_4.setTransform(44.3,22.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIA2QgJgGAAgPIAAgrIgSAAIAAgXIASAAIAAgbIAcAAIAAAbIAZAAIAAAXIgZAAIAAAeQAAAIADAEQACAFAJAAQAIAAADgDIAAAYQgIADgMAAQgPAAgJgHg");
	this.shape_5.setTransform(27.95,23.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAQAvIAAgtIAAgGIgBgGIgCgGQgBgCgEgCQgDgBgEAAQgJAAgEAGQgDAGAAAKIAAAuIgdAAIAAhbIAcAAIAAAMIABAAQACgGAIgEQAFgEALAAQATAAAIALQAGALAAAVIAAAyg");
	this.shape_6.setTransform(18.8,24.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfAjQgPgOgBgVQABgVAPgOQAOgNAVAAQAUAAALANQANANAAAWIAAAJIhCAAQACAIAFAFQAGAFAIgBQAMAAAIgLIAUAPQgHAJgLAEQgKAGgLAAQgVAAgOgOgAATgKQAAgHgFgFQgFgFgIAAQgHAAgGAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_7.setTransform(7.9,24.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfAvIAAhbIAcAAIAAAPIAAAAQAJgRARAAIAKABIAAAaQgHgCgFAAQgIAAgGACQgEACgDAEQgBAFgBAFIgBAMIAAAmg");
	this.shape_8.setTransform(-1,24.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggAvIAAhbIAdAAIAAAPIAAAAQAJgRARAAIAJABIAAAaQgGgCgGAAQgHAAgFACQgFACgDAEQgCAFAAAFIgBAMIAAAmg");
	this.shape_9.setTransform(-8.7,24.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgkAkQgIgMAAgUIAAgzIAdAAIAAAuIAAAFIABAHIADAGIAEAEQADABAEAAQAJAAADgGQAEgHAAgKIAAguIAcAAIAABcIgbAAIAAgNQgEAGgGAFQgHAEgJABQgUAAgHgMg");
	this.shape_10.setTransform(-18.4,24.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnAzQgVgTABggQgBgfAVgTQAUgUAfAAQANAAAMAFQAMAFAJAKIgYATQgIgLgRAAQgPAAgMAMQgLAMAAASQAAATALAMQALAMAPAAQASAAAKgOIAYASQgHAMgNAGQgOAGgOAAQgfAAgUgUg");
	this.shape_11.setTransform(-30.15,22.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AATAuIgTg8IAAAAIgRA8IgcAAIgihbIAfAAIASA5IABAAIAPg5IAfAAIARA5IAAAAIASg5IAcAAIghBbg");
	this.shape_12.setTransform(-50.35,24.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AggAjQgPgOAAgVQAAgVAPgOQAPgNAVAAQAUAAAMANQAMANgBAWIAAAJIhBAAQACAIAFAFQAGAFAHgBQANAAAIgLIAUAPQgHAJgKAEQgKAGgMAAQgVAAgPgOgAATgKQAAgHgFgFQgFgFgHAAQgJAAgFAFQgFAFgBAHIAlAAIAAAAg");
	this.shape_13.setTransform(-63.7,24.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNBFIAAhcIAcAAIAABcgAgKgoQgGgFAAgGQAAgHAGgFQAFgFAFAAQAHAAAFAFQAEAFABAHQgBAGgEAFQgFAFgHAAQgFAAgFgFg");
	this.shape_14.setTransform(-71.6,22.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgMBDIg2iFIAiAAIAhBXIAAAAIAihXIAfAAIg3CFg");
	this.shape_15.setTransform(-80.7,22.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// box
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#34B8EB").s().p("AvMDhIAAnBIeZAAIAAHBg");
	this.shape_16.setTransform(0.05,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-110.6,0,221.3,45), null);


// stage content:
(lib.SB_SeaTimesCD_160x600 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(201.4,234.05,1.0702,1.0831,0,0,0,113.5,148.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({y:214.05,alpha:1},10,cjs.Ease.quadOut).wait(133));

	// SUB
	this.instance_1 = new lib.SUB();
	this.instance_1.setTransform(201.45,396.05,1.0702,1.0831,0,0,0,113.5,148.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({y:376.05,alpha:1},10,cjs.Ease.quadOut).wait(130));

	// CTA
	this.instance_2 = new lib.CTA();
	this.instance_2.setTransform(152.95,362.95,0.7316,0.7316,0,0,0,99.7,25.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(74).to({_off:false},0).to({y:342.95,alpha:1},10,cjs.Ease.quadOut).wait(60));

	// LEGAL
	this.instance_3 = new lib.LEGAL();
	this.instance_3.setTransform(107.85,583,1,1,0,0,0,102.9,11);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(77).to({_off:false},0).to({y:563,alpha:1},10,cjs.Ease.quadOut).wait(57));

	// LOGO
	this.instance_4 = new lib.SeattleBankboxwhitevector();
	this.instance_4.setTransform(102.2,442.3,1,1,0,0,0,64.7,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(144));

	// FDIC
	this.instance_5 = new lib.MemberFDICwhite();
	this.instance_5.setTransform(131.65,534.75,0.82,0.82,0,0,0,18.8,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(144));

	// BOX bottom
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#34B8EB").s().p("AskP1IAA/pIZJAAIAAfpg");
	this.shape.setTransform(80.425,498.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(144));

	// BKGD
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#185975").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_1.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(144));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(79.1,300,81.9,315.20000000000005);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 160,
	height: 600,
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