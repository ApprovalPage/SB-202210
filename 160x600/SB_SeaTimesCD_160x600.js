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
	this.shape_12.graphics.f("#FFFFFF").s().p("AgFArIAAgkIgggxIAPAAIAWAmIAYgmIAOAAIggAxIAAAkg");
	this.shape_12.setTransform(45.125,59.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgbArIAAhVIAcAAQAIAAAGADQAFACADADQADAEABAEIABAIIgBAJQgBADgDAEQgDACgFADQgGACgIAAIgRAAIAAAmgAgQgEIAPAAQASAAAAgOQAAgOgSAAIgPAAg");
	this.shape_13.setTransform(38.3,59.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAdArIgJgWIgnAAIgJAWIgNAAIAlhVIAKAAIAkBVgAAQALIgQgmIAAAAIgPAmIAfAAg");
	this.shape_14.setTransform(30.175,59.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#34B8EB").s().p("Ag5BTIBgiuIAUALIhiCsgAAbBKQgOgOAAgUQAAgUAOgNQAOgNATgBQAUABAOANQAOANAAAUQAAAUgOAOQgOAOgUAAQgTAAgOgOgAAsAYQgGAGAAAKQAAAKAGAGQAHAIAJAAQAKAAAHgIQAGgGAAgKQAAgKgGgGQgHgHgKAAQgJAAgHAHgAhdgGQgOgNAAgVQAAgTAOgOQAOgOAUAAQATAAAOAOQAOAOAAATQAAAVgOANQgOANgTAAQgUAAgOgNgAhMg3QgGAGAAAJQAAAKAGAHQAHAHAKAAQAJAAAHgHQAHgHAAgKQAAgJgHgGQgHgIgJABQgKgBgHAIg");
	this.shape_15.setTransform(11.775,55.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#34B8EB").s().p("AgoBMQgPgMgFgVIAmgJQABAKAGAFQAHAGAIAAQALgBAHgGQAHgIAAgLQAAgLgGgGQgGgGgIgCQgHgDgLAAQgRAAgSAGIAChcIBlAAIAAAfIhCAAIgBAaQAGgCAIAAQAaABARAPQAQAOAAAZQAAAdgSAQQgSAQgcAAQgWABgPgLg");
	this.shape_16.setTransform(-6.425,55.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#34B8EB").s().p("AgZBTQgLgGgHgJQgHgIgEgMQgFgMgCgLQgBgMAAgNQAAgMABgMQACgMAFgLQAEgMAHgJQAHgIALgFQALgGAOAAQAOAAAMAGQAMAFAGAIQAHAJAEAMQAFALACAMQABAMAAAMQAAANgBAMQgCALgFAMQgEAMgHAIQgGAJgMAGQgMAFgOAAQgOAAgLgFgAgaAAQAAA3AaAAQAbAAAAg3QAAg2gbABQgagBAAA2g");
	this.shape_17.setTransform(-20.4,55.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#34B8EB").s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAHQgGAGgJAAQgIAAgGgGg");
	this.shape_18.setTransform(-31.05,62.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#34B8EB").s().p("AgnBNQgQgLgFgWIAmgJQAEAUAUAAQALAAAGgGQAGgGAAgKQAAgFgCgFQgCgEgDgBQgDgCgFgCIgJgBIgJAAIgIAAIAAgeIAMAAQAaAAAAgTQAAgHgGgGQgGgEgJAAQgHgBgGAFQgFAEgCAHIgogIQAGgVAQgKQAQgKAWAAQAYAAARAMQAQAMAAAXQAAAPgHAKQgIAKgOACIAAACQAPABAJALQAIALAAAPQAAAYgRANQgSAOgaAAQgXAAgQgLg");
	this.shape_19.setTransform(-41.925,55.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAPAtIAAghQAAgIgEgDQgEgDgFAAQgHAAgEAEQgEAFAAAJIAAAdIgLAAIAAhZIALAAIAAAqQACgEAFgDQAFgDAGAAQAJAAAFAFQAGAGAAAKIAAAkg");
	this.shape_20.setTransform(22.675,34.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AABAkIgDgDIgDgEIgBgFIAAgGIAAgdIgNAAIAAgJIANAAIAAgQIAKAAIAAAQIAPAAIAAAJIgPAAIAAAZIAAAFIABAEIACADIAFABQAFAAACgCIAAAKQgDACgGAAQgFAAgEgBg");
	this.shape_21.setTransform(16.9,35.475);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAPAdIAAggQAAgIgEgDQgEgEgFAAQgHAAgEAFQgEAFAAAIIAAAdIgLAAIAAg4IALAAIAAAJQACgEAFgDQAFgDAGAAQAJAAAFAFQAGAGAAALIAAAjg");
	this.shape_22.setTransform(11.625,36.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgVAVQgIgJAAgMQAAgLAIgJQAJgJAMAAQANAAAIAJQAJAJAAALQAAAMgJAJQgIAJgNAAQgMAAgJgJgAgNgNQgFAGAAAHQAAAJAFAFQAFAGAIAAQAIAAAGgGQAFgFAAgJQAAgHgFgGQgGgGgIABQgIgBgFAGg");
	this.shape_23.setTransform(4.775,36.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAhAdIAAgeIgBgHIgCgFQgBgCgDgCIgGgBQgOAAAAARIAAAeIgKAAIAAgdQgBgJgCgEQgCgFgIAAQgFAAgFAFQgEAFAAAIIAAAdIgLAAIAAg4IAKAAIAAAJIABAAQABgDAEgEQAGgDAHAAQAMAAAFAKQACgFAFgCQAFgDAGAAQAVAAAAAZIAAAgg");
	this.shape_24.setTransform(-3.9,36.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgOAFIAAgJIAdAAIAAAJg");
	this.shape_25.setTransform(-10.875,36.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgbAsIAAgMIAhghQAKgKAAgIQAAgGgEgEQgFgEgGAAQgFAAgEAEQgEADgBAHIgNgBQACgLAHgGQAIgFAKgBQAMAAAHAHQAIAFAAAMQAAAIgEAFQgEAGgHAHIgbAbIAqAAIAAAKg");
	this.shape_26.setTransform(-16.075,34.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAGArIAAhHIgPAOIgHgIIAXgUIAKAAIAABVg");
	this.shape_27.setTransform(-23.35,34.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgrA0QgMgKAAgRQAAgIADgHQADgGAEgEQAFgEAHgDIANgEIAQgDIANgBIAOAAQAAgJgHgGQgGgGgKAAQgQAAgNAOIgTgUQAUgSAfAAQAdAAAMAOQAMAPAAAfIAAA6IghAAIAAgOIAAAAQgLARgZAAQgSAAgMgJgAgUAYQgBAGAGADQAFAEAHAAQAKAAAIgGQAIgGAAgKIAAgIIgJAAQgiAAAAARg");
	this.shape_28.setTransform(43.1,14.325);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAUA8IAAg5IAAgIIgBgIQgBgFgCgCQgCgDgDgCQgFgCgEAAQgNAAgEAIQgEAIAAANIAAA6IgkAAIAAh0IAiAAIAAAQIABAAQAEgIAIgFQAIgGANAAQAZAAAJAPQAJAOAAAaIAABAg");
	this.shape_29.setTransform(22.85,14.175);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgRBXIAAhzIAjAAIAABzgAgOgyQgGgGAAgJQAAgJAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAJQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_30.setTransform(12.875,11.425);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAPBbIgng7IAAA7IgkAAIAAi1IAkAAIAABuIAngtIAsAAIguA0IAwBAg");
	this.shape_31.setTransform(-3.3,11.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AghAsQgTgRAAgbQAAgaATgRQASgRAbAAQAaAAAPAPIgYAZQgGgJgLAAQgNAAgHAJQgIAIAAAMQAAANAIAIQAHAIANAAQAKAAAHgIIAYAYQgPAQgaAAQgbAAgSgRg");
	this.shape_32.setTransform(-15.975,14.325);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgtAsQgTgRAAgbQAAgaATgRQASgRAbAAQAcAAASARQATARAAAaQAAAbgTARQgSARgcAAQgbAAgSgRgAgUgUQgIAIAAAMQAAANAIAIQAIAIAMAAQANAAAIgIQAIgIAAgNQAAgMgIgIQgIgJgNAAQgMAAgIAJg");
	this.shape_33.setTransform(-29.475,14.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Ag0BVIAAipIAlAAIAACHIBEAAIAAAig");
	this.shape_34.setTransform(-42.425,11.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(88).call(this.frame_88).wait(1));

	// HEAD
	this.instance = new lib.HEAD();
	this.instance.setTransform(201.4,224.05,1.0702,1.0831,0,0,0,113.5,148.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89));

	// SUB
	this.instance_1 = new lib.SUB();
	this.instance_1.setTransform(201.45,386.05,1.0702,1.0831,0,0,0,113.5,148.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89));

	// CTA
	this.instance_2 = new lib.CTA();
	this.instance_2.setTransform(152.95,352.95,0.7316,0.7316,0,0,0,99.7,25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89));

	// LOGO
	this.instance_3 = new lib.SeattleBankboxwhitevector();
	this.instance_3.setTransform(102.2,477.3,1,1,0,0,0,64.7,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(89));

	// FDIC
	this.instance_4 = new lib.MemberFDICwhite();
	this.instance_4.setTransform(131.65,574.75,0.82,0.82,0,0,0,18.8,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(89));

	// BOX bottom
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#34B8EB").s().p("AskN4IAA7vIZJAAIAAbvg");
	this.shape.setTransform(80.425,511.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(89));

	// BKGD
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#185975").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_1.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(89));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(79.1,300,81.9,300.1);
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