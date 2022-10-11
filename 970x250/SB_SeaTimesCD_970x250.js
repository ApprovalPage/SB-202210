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
	this.shape.graphics.f("#FFFFFF").s().p("AgGAGQgCgDAAgDQABgDADgCQADgDACAAQAEAAACADQACACAAADQgBADgDADQgDADgCAAQgEAAgCgDg");
	this.shape.setTransform(258.025,12.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAZQgIgKACgPQACgPAMgKQALgKAOAAQAPAAAHAJQAIAKgDAQIAAADIg2AAQgBAJAGAHQAFAGAJAAQANAAAJgKIAIAGQgNAPgSAAQgQAAgIgLgAgLgTQgGAFgDAJIAqAAQABgJgFgFQgFgFgJAAQgIAAgHAFg");
	this.shape_1.setTransform(252.3602,9.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMA3IAOhtIALAAIgOBtg");
	this.shape_2.setTransform(246.925,7.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQAzQgGgDgCgGIgBAAIgBAMIgMAAIAQhtIALAAIgHA0IAAAAQAMgMANAAQAQAAAJAKQAIAJgCAQQgCAPgMAKQgLALgNAAQgJAAgHgFgAgMACQgIAHgBALQgCALAFAHQAGAHALAAQAKAAAIgHQAHgHACgLQABgLgFgHQgGgGgLAAQgKAAgHAGg");
	this.shape_3.setTransform(240.4034,7.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZAeQgGgFABgKQACgOAQgFQAKgDARAAIAFAAIAAgDQACgOgRAAQgLAAgJAHIgGgHQAMgLAPAAQAPAAAGAHQAGAHgCAPIgEAcIgBAMIgLAAIABgKQgKAMgNAAQgLAAgHgGgAgSAOQgBAMAPAAQAIAAAGgGQAGgGACgIIAAgFIgLAAQgXAAgCANg");
	this.shape_4.setTransform(232.0876,9.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMA3IAOhtIALAAIgOBtg");
	this.shape_5.setTransform(227.125,7.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNAzIAKhDIAKAAIgJBDgAgBgkQgCgDABgDQAAgEACgCQADgCADAAQAEAAACACQACACgBAEQAAADgDADQgDACgDAAQgEAAgBgCg");
	this.shape_6.setTransform(223.705,7.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZAeQgGgFABgKQACgOAQgFQAKgDARAAIAFAAIAAgDQACgOgRAAQgLAAgJAHIgGgHQAMgLAPAAQAPAAAGAHQAGAHgCAPIgEAcIgBAMIgLAAIABgKQgKAMgNAAQgLAAgHgGgAgSAOQgBAMAPAAQAIAAAGgGQAGgGACgIIAAgFIgLAAQgXAAgCANg");
	this.shape_7.setTransform(217.6876,9.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOAiIgShDIAMAAIAPA1IAbg1IALAAIgjBDg");
	this.shape_8.setTransform(211.15,9.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAeQgGgFABgKQACgOAQgFQAKgDARAAIAFAAIAAgDQACgOgRAAQgLAAgJAHIgGgHQAMgLAPAAQAPAAAGAHQAGAHgCAPIgEAcIgBAMIgLAAIABgKQgKAMgNAAQgLAAgHgGgAgSAOQgBAMAPAAQAIAAAGgGQAGgGACgIIAAgFIgLAAQgXAAgCANg");
	this.shape_9.setTransform(203.2376,9.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgcAXIAKgHQAGAJAKAAQAFAAAEgCQAGgDABgFQAAgFgEgDQgDgCgHgBQgKgDgFgCQgGgEABgKQACgJAIgGQAIgFAJAAQARAAAFAMIgLAHQgDgIgKAAQgFAAgDACQgFADAAAEQgBAHAPADQALACAEADQAGAFgBAJQgCALgJAGQgIAFgKAAQgSAAgHgNg");
	this.shape_10.setTransform(192.425,9.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAPAjIAFgoQADgSgPAAQgUAAgEAZIgFAhIgLAAIAHgzIACgQIALAAIgCALIABAAQADgFAGgEQAGgEAIAAQANAAAGAIQAFAHgCANIgGApg");
	this.shape_11.setTransform(185.3673,9.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdAaQgIgKACgQQACgPAMgKQALgKAPAAQAQAAAJAKQAIAKgCAPQgCAQgMAKQgLAKgPAAQgQAAgJgKgAgOgRQgHAHgCAKQgCALAGAHQAGAHALAAQAJAAAIgHQAIgHABgLQACgKgGgHQgGgHgKAAQgKAAgIAHg");
	this.shape_12.setTransform(177.175,9.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgNAzIAKhDIAKAAIgJBDgAgBgkQgCgDABgDQAAgEACgCQADgCADAAQAEAAACACQACACgBAEQAAADgDADQgDACgDAAQgEAAgBgCg");
	this.shape_13.setTransform(171.505,7.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMAmQgDgFACgLIAFglIgPAAIACgKIAOAAIADgTIAKAAIgCATIAUAAIgCAKIgUAAIgDAhQgCAIABADQACAFAFAAQAGAAAFgCIgBAKQgGADgIgBQgKAAgDgGg");
	this.shape_14.setTransform(167.225,8.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgoAzIAPhkIALAAIgCAKIABAAQALgLAOAAQAPAAAJAKQAJAKgDAPQgCAPgLAKQgLAKgPAAQgIAAgGgEQgGgEgDgGIAAAAIgGAtgAgKghQgHAHgCALQgCALAGAGQAGAIAJAAQALAAAIgIQAIgGABgLQACgKgGgIQgGgHgKAAQgKAAgIAHg");
	this.shape_15.setTransform(159.6284,11.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgdAaQgIgKACgQQACgPAMgKQALgKAPAAQAQAAAJAKQAIAKgCAPQgCAQgMAKQgLAKgPAAQgQAAgJgKgAgOgRQgHAHgCAKQgCALAGAHQAGAHALAAQAJAAAIgHQAIgHABgLQACgKgGgHQgGgHgKAAQgKAAgIAHg");
	this.shape_16.setTransform(151.175,9.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgwAzIAPhlIAmAAQATAAAMALQAQAOgEAZQgEAagTAOQgQALgRAAgAgiAoIAXAAQASAAAMgJQANgLADgUQADgTgKgLQgKgJgSAAIgXAAg");
	this.shape_17.setTransform(137.6822,7.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgkAnQgNgQADgXQAEgVAQgQQARgQAWAAQAYAAAKAQIgMAIQgHgNgRAAQgPAAgNAOQgNAMgDAQQgCASAJANQAJAMARAAQASAAANgPIAIAIQgQASgYAAQgWAAgNgPg");
	this.shape_18.setTransform(127.571,7.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgoAzIAPhkIALAAIgCAKIABAAQALgLAOAAQAPAAAJAKQAJAKgDAPQgCAPgLAKQgLAKgPAAQgIAAgGgEQgGgEgDgGIAAAAIgGAtgAgKghQgHAHgCALQgCALAGAGQAGAIAJAAQALAAAIgIQAIgGABgLQACgKgGgIQgGgHgKAAQgKAAgIAHg");
	this.shape_19.setTransform(113.2784,11.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AglAoQgIgLADgSIAJg+IAMAAIgIA8QgFAhAagBQAOAAAIgKQAHgIACgOIAIg8IAMAAIgIA+QgDASgKALQgMANgTAAQgUAAgIgNg");
	this.shape_20.setTransform(104.5071,7.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgoAzIAPhkIALAAIgCAKIABAAQALgLAOAAQAPAAAJAKQAJAKgDAPQgCAPgLAKQgLAKgPAAQgIAAgGgEQgGgEgDgGIAAAAIgGAtgAgKghQgHAHgCALQgCALAGAGQAGAIAJAAQALAAAIgIQAIgGABgLQACgKgGgIQgGgHgKAAQgKAAgIAHg");
	this.shape_21.setTransform(90.2284,11.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAkAjIAGgoQACgSgQAAQgHAAgGAFQgGAGgBAJIgGAmIgKAAIAFgmQACgLgDgFQgCgEgHAAQgVAAgEAZIgEAhIgLAAIAHgzIACgQIAKAAIgBALIAAAAQADgFAHgEQAHgEAIAAQAOAAAEANQAKgNANAAQAOAAAGAIQAEAHgCAOIgFAog");
	this.shape_22.setTransform(79.7558,9.475);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgcAbQgFgHACgNIAGgpIALAAIgGAoQgDASAQAAQAUAAAEgZIAEghIAMAAIgIAzIgBAQIgLAAIABgLIAAAAQgDAFgHAEQgGAEgHAAQgNAAgGgIg");
	this.shape_23.setTransform(69.8733,9.65);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AglAzIAPhlIAeAAQAOAAAIAFQAKAHgCANQgCASgTAFIAAAAIAAAAQAKABAFAGQAGAHgBALQgDAPgNAHQgMAGgPAAgAgXAoIAUAAQAKAAAHgEQAIgFACgJQABgKgHgFQgGgEgKAAIgUAAgAgRgHIARAAQAXAAACgRQACgPgWAAIgRAAg");
	this.shape_24.setTransform(61.1917,7.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgnAtQgJgIACgNQADgUAYgJQgKgNABgLQACgLAJgGQAIgGAKAAQALAAAGAFQAHAHgBAKQgCAPgXAMIASAWIARgWIANAAIgYAeIAUAYIgQAAIgMgPQgPARgRAAQgOAAgIgIgAghAXQgCAIAGAGQAFAGAIAAQALAAAOgPIgVgbQgUAKgBAMgAgKgmQgFAEgBAGQAAAGAGAHIADAEIALgHQAHgFAAgHQABgFgDgEQgDgDgGAAQgFAAgFAEg");
	this.shape_25.setTransform(47.5818,7.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgiAtQgIgKACgPQACgQALgJQAMgKAPAAQAOAAAIAMIABAAIAHg0IALAAIgPBtIgMAAIACgMIAAAAQgEAGgIADQgGAFgJAAQgPAAgIgLgAgTACQgHAHgCALQgCALAGAHQAGAHALAAQAJAAAIgHQAIgHABgLQACgLgGgHQgGgGgJAAQgLAAgIAGg");
	this.shape_26.setTransform(34.056,7.575);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgbAZQgIgKACgPQACgPAMgKQALgKAOAAQAPAAAHAJQAIAKgDAQIAAADIg2AAQgBAJAGAHQAFAGAJAAQANAAAJgKIAIAGQgNAPgSAAQgQAAgIgLgAgLgTQgGAFgDAJIAqAAQABgJgFgFQgFgFgJAAQgIAAgHAFg");
	this.shape_27.setTransform(25.2602,9.575);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AASAiIgRgeIgYAeIgOAAIAhgkIgUgfIAOAAIAOAZIAUgZIAOAAIgcAfIAXAkg");
	this.shape_28.setTransform(17.375,9.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgNAzIAKhDIAKAAIgJBDgAgBgkQgCgDABgDQAAgEACgCQADgCADAAQAEAAACACQACACgBAEQAAADgDADQgDACgDAAQgEAAgBgCg");
	this.shape_29.setTransform(12.605,7.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgmAzIAPhlIA+AAIgBALIgzAAIgFAiIAvAAIgBAKIgvAAIgHAug");
	this.shape_30.setTransform(7.175,7.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SUB, new cjs.Rectangle(0,0,317.9,18.5), null);


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


(lib.RATE24 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAAAMIgLAQIgLgJIAMgPIgTgGIAFgNIASAHIAAgTIANAAIAAATIATgGIAEANIgSAFIALAQIgLAJg");
	this.shape.setTransform(81.725,62.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKAyIAAgqIglg4IAbAAIAUAlIAWglIAaAAIglA4IAAAqg");
	this.shape_1.setTransform(73.825,64.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkAyIAAhiIAkAAQAlAAAAAeQAAAdgkAAIgPAAIAAAngAgOgHIAOAAQAPABAAgMQAAgMgSAAIgLAAg");
	this.shape_2.setTransform(65.225,64.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAbAyIgIgWIgmAAIgIAWIgYAAIAqhiIASAAIArBigAAMAKIgMgeIgMAeIAYAAg");
	this.shape_3.setTransform(55.35,64.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhvCeIC6lPIAmAWIi9FNgAAzCOQgagbAAgmQAAgmAagbQAbgZAmAAQAmAAAaAZQAaAbAAAmQAAAmgaAbQgaAagmAAQgmAAgbgagABVAuQgNAMAAATQAAATANAMQANANASAAQASAAANgNQAMgMAAgTQAAgTgMgMQgNgOgSAAQgSAAgNAOgAiygMQgbgbAAglQAAgmAbgbQAagbAmAAQAlAAAbAbQAaAbAAAmQAAAlgaAbQgbAaglAAQgmAAgagagAiShsQgNANABATQgBASANANQANANATAAQASAAAMgNQANgNAAgSQAAgTgNgNQgMgNgSAAQgTAAgNANg");
	this.shape_4.setTransform(25.2,53.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhNCQQgdgVgKgpIBIgQQACARANALQAMALARAAQAVAAANgOQAOgOAAgVQAAgUgMgNQgMgNgPgDQgPgEgUAAQghgBgiAMIADiyIDEAAIAAA8IiAAAIgCAyQALgDARAAQAyAAAgAcQAfAdAAAxQAAA2gjAfQgiAgg3AAQgqAAgcgWg");
	this.shape_5.setTransform(-9.65,53.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AATCjIAAj4IhBA6IgngtIBqhaIBAAAIAAFFg");
	this.shape_6.setTransform(-38.7,53.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAeQgMgMAAgSQAAgQAMgNQAMgMARAAQARAAANAMQAMANAAAQQAAASgMAMQgNAMgRAAQgRAAgMgMg");
	this.shape_7.setTransform(-50.975,65.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhMCTQgegVgKgqIBJgRQAHAmAnAAQAWAAAMgMQALgLAAgTQAAgKgEgIQgFgHgFgEQgFgEgKgCIgRgCIgRAAIgRAAIAAg8IAXAAQAzABAAglQAAgOgMgKQgLgKgRAAQgPAAgLAJQgKAIgEAOIhMgQQAKgoAggUQAegSAsgBQAuABAgAXQAfAXAAAsQAAAcgOATQgPATgaAFIAAACQAdAEAQAUQAQAVAAAeQAAAvgiAZQghAagyAAQgtAAgfgWg");
	this.shape_8.setTransform(-71.8,53.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AATA9IAAgtQAAgLgFgEQgEgEgIAAQgIAAgHAFQgFAHAAANIAAAnIgPAAIAAh5IAPAAIAAA6QADgHAHgDQAGgEAIAAQAMAAAIAHQAHAHAAANIAAAyg");
	this.shape_9.setTransform(30.35,14.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AACAwQgEgCgCgCQgCgCgBgEIgBgHIAAgIIAAgmIgRAAIAAgNIARAAIAAgVIANAAIAAAVIAUAAIAAANIgUAAIAAAiIAAAGIABAFQABAEADAAQACACAEAAQAGAAAEgCIAAANQgFADgIgBQgGAAgFgBg");
	this.shape_10.setTransform(22.6,15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AATAnIAAgsQAAgKgFgFQgFgFgHAAQgIAAgHAHQgFAGAAAMIAAAnIgPAAIAAhLIAPAAIAAAMQADgGAHgEQAGgEAIAAQAMAAAIAHQAHAIABAOIAAAwg");
	this.shape_11.setTransform(15.6,16.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcAcQgLgLgBgRQABgQALgLQAMgMAQAAQARAAAMAMQAMALgBAQQABARgMALQgMAMgRAAQgQAAgMgMgAgRgSQgHAHAAALQAAAMAHAHQAHAHAKAAQAMAAAGgHQAHgHAAgMQAAgLgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_12.setTransform(6.4,16.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AArAnIAAgqIgBgIIgCgHQgCgDgDgCQgEgCgFAAQgTAAAAAXIAAApIgNAAIAAgnQAAgMgEgGQgDgHgJAAQgJAAgFAHQgGAGAAAMIAAAnIgOAAIAAhLIANAAIAAAMQACgFAHgEQAHgFAJAAQAQAAAGAOQAEgHAHgDQAGgEAHAAQAdAAAAAiIAAArg");
	this.shape_13.setTransform(-5.125,16.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTAHIAAgNIAnAAIAAANg");
	this.shape_14.setTransform(-14.475,16.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAJA5IAAgZIgwAAIAAgQIAshIIATAAIAABKIAQAAIAAAOIgQAAIAAAZgAgZASIAiAAIAAg3IgBAAg");
	this.shape_15.setTransform(-21.325,14.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgkA6IAAgQIAsgsQANgMAAgMQAAgIgGgEQgGgGgHAAQgIABgGAEQgFAEgCAJIgQgBQACgPAKgIQAKgHAPAAQAPAAAKAIQAKAIAAAPQAAAKgFAJQgFAHgKAJIgkAkIA4AAIAAANg");
	this.shape_16.setTransform(-30.25,14.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RATE24, new cjs.Rectangle(-130.8,0,261.70000000000005,83), null);


(lib.RATE12 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAAAMIgLAQIgLgJIAMgPIgTgGIAFgNIASAHIAAgTIANAAIAAATIATgGIAEANIgSAFIALAQIgLAJg");
	this.shape.setTransform(84.625,62.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKAyIAAgqIglg4IAbAAIAUAlIAWglIAaAAIglA4IAAAqg");
	this.shape_1.setTransform(76.725,64.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkAyIAAhiIAkAAQAlAAAAAeQAAAdgkAAIgPAAIAAAngAgOgHIAOAAQAPABAAgMQAAgMgSAAIgLAAg");
	this.shape_2.setTransform(68.125,64.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAbAyIgIgWIgmAAIgIAWIgYAAIArhiIARAAIArBigAALAKIgLgeIgMAeIAXAAg");
	this.shape_3.setTransform(58.25,64.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhvCeIC5lPIAnAWIi9FNgAAzCOQgagbAAgmQAAgmAagbQAbgZAmAAQAlAAAbAZQAbAbAAAmQAAAmgbAbQgbAaglAAQgmAAgbgagABVAuQgNAMAAATQAAATANAMQANANASAAQASAAANgNQAMgMAAgTQAAgTgMgMQgNgOgSAAQgSAAgNAOgAiygMQgbgbAAglQAAgmAbgbQAagbAmAAQAlAAAaAbQAbAbAAAmQAAAlgbAbQgaAaglAAQgmAAgagagAiShsQgNANAAATQAAASANANQANANATAAQASAAAMgNQANgNAAgSQAAgTgNgNQgMgNgSAAQgTAAgNANg");
	this.shape_4.setTransform(28.1,53.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhNCQQgcgVgLgpIBIgQQACARAMALQANALARAAQAVAAANgOQAOgOAAgVQAAgUgMgNQgMgNgPgDQgPgEgUAAQgggBgkAMIAEiyIDEAAIAAA8IiAAAIgCAyQALgDARAAQAyAAAfAcQAgAdAAAxQAAA2gjAfQgiAgg2AAQgrAAgcgWg");
	this.shape_5.setTransform(-6.75,53.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgxCeQgVgLgOgPQgNgRgIgXQgJgWgDgXQgDgWAAgZQAAgYADgWQADgWAJgXQAIgXANgQQAOgQAVgLQAWgKAbgBQAcABAWAKQAVALANAQQANAQAJAXQAIAXAEAWQADAXAAAXQAAAZgDAWQgEAXgIAWQgJAXgNARQgNAPgVALQgWALgcAAQgbAAgWgLgAgzAAQAABpAzAAQA0AAAAhpQAAhng0gBQgzABAABng");
	this.shape_6.setTransform(-33.525,53.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAeQgMgMAAgSQAAgQAMgNQAMgMARAAQARAAANAMQAMANAAAQQAAASgMAMQgNAMgRAAQgRAAgMgMg");
	this.shape_7.setTransform(-53.925,65.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhMCTQgfgVgJgqIBIgRQAIAmAnAAQAWAAALgMQAMgLAAgTQAAgKgEgIQgFgHgFgEQgFgEgKgCIgRgCIgSAAIgQAAIAAg8IAXAAQA0ABAAglQAAgOgNgKQgLgKgRAAQgPAAgLAJQgLAIgCAOIhNgQQAKgoAggUQAegSArgBQAwABAfAXQAgAXgBAsQAAAcgOATQgOATgbAFIAAACQAdAEAPAUQARAVAAAeQAAAvgiAZQghAagyAAQgtAAgfgWg");
	this.shape_8.setTransform(-74.75,53.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AATA9IAAgtQAAgLgFgEQgEgEgIAAQgIAAgHAFQgFAHAAANIAAAnIgPAAIAAh5IAPAAIAAA6QADgHAHgDQAGgEAIAAQAMAAAIAHQAHAHAAANIAAAyg");
	this.shape_9.setTransform(30.35,14.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AACAwQgEgCgCgCQgCgCgBgEIgBgHIAAgIIAAgmIgRAAIAAgNIARAAIAAgVIANAAIAAAVIAUAAIAAANIgUAAIAAAiIAAAGIABAFQABAEADAAQACACAEAAQAGAAAEgCIAAANQgFADgIgBQgGAAgFgBg");
	this.shape_10.setTransform(22.6,15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AATAnIAAgsQAAgKgFgFQgFgFgHAAQgIAAgHAHQgFAGAAAMIAAAnIgPAAIAAhLIAPAAIAAAMQADgGAHgEQAGgEAIAAQAMAAAIAHQAHAIABAOIAAAwg");
	this.shape_11.setTransform(15.6,16.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcAcQgLgLgBgRQABgQALgLQAMgMAQAAQARAAAMAMQAMALgBAQQABARgMALQgMAMgRAAQgQAAgMgMgAgRgSQgHAHAAALQAAAMAHAHQAHAHAKAAQAMAAAGgHQAHgHAAgMQAAgLgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_12.setTransform(6.4,16.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AArAnIAAgqIgBgIIgCgHQgCgDgDgCQgEgCgFAAQgTAAAAAXIAAApIgNAAIAAgnQAAgMgEgGQgDgHgJAAQgJAAgFAHQgGAGAAAMIAAAnIgOAAIAAhLIANAAIAAAMQACgFAHgEQAHgFAJAAQAQAAAGAOQAEgHAHgDQAGgEAHAAQAdAAAAAiIAAArg");
	this.shape_13.setTransform(-5.125,16.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTAHIAAgNIAnAAIAAANg");
	this.shape_14.setTransform(-14.475,16.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgkA6IAAgQIAtgsQAMgMAAgMQAAgIgGgEQgGgGgHAAQgIABgGAEQgFAEgBAJIgRgBQACgPAKgIQAKgHAPAAQAPAAAKAIQAKAIAAAPQAAAKgFAJQgFAHgJAJIglAkIA4AAIAAANg");
	this.shape_15.setTransform(-21.4,14.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAHA5IAAhfIgUATIgJgKIAfgbIANAAIAABxg");
	this.shape_16.setTransform(-31.1,14.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RATE12, new cjs.Rectangle(-130.8,0,261.70000000000005,83), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape.setTransform(210.875,75.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAfIAAgHIAEABQAFAAACgCQACgCADgHIgSgsIAJAAIAMAjIAAAAIANgjIAJAAIgTAuQgDAJgDADQgEADgHAAIgFAAg");
	this.shape_1.setTransform(207.775,74.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_2.setTransform(204.6,72.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTAgIAAg9IAIAAIAAAGQABgDAEgDQAEgCADAAQAJAAAGAHQAEAGAAALQAAAKgEAHQgGAGgJAAQgDAAgEgCQgEgCgBgDIAAAXgAgIgUQgEAFAAAIQAAAHAEAFQADAFAFAAQAFAAAEgFQAEgFgBgHQABgIgEgEQgEgFgFAAQgFAAgDAEg");
	this.shape_3.setTransform(201.1,74.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUAgIAAg9IAIAAIAAAGQACgDAEgDQAEgCAEAAQAIAAAFAHQAGAGAAALQAAAKgGAHQgFAGgIAAQgEAAgEgCQgEgCgCgDIAAAXgAgIgUQgEAFAAAIQAAAHAEAFQADAFAFAAQAFAAAEgFQADgFAAgHQAAgIgDgEQgEgFgFAAQgFAAgDAEg");
	this.shape_4.setTransform(195.95,74.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgFAEgEQAEgDAKgBIAMgBIAAgCQAAgLgKAAQgJAAgBAJIgIAAQABgHAEgEQAFgEAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAAEADACQACACAFAAQAFAAADgDQAEgFAAgGIAAgEIgLACg");
	this.shape_5.setTransform(190.725,73.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTAfIAAgHIAEABQAFAAACgCQACgCADgHIgSgsIAJAAIAMAjIAAAAIANgjIAJAAIgTAuQgDAJgDADQgEADgHAAIgFAAg");
	this.shape_6.setTransform(184.325,74.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgFAEgEQAEgDAKgBIAMgBIAAgCQAAgLgKAAQgJAAgBAJIgIAAQABgHAEgEQAFgEAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAAEADACQACACAFAAQAFAAADgDQAEgFAAgGIAAgEIgLACg");
	this.shape_7.setTransform(179.725,73.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAYAXIAAgaQAAgNgJAAQgFAAgDAEQgDAEAAAGIAAAZIgHAAIAAgcQAAgFgCgDQgDgDgEAAQgFAAgDAEQgDAEAAAHIAAAYIgIAAIAAgsIAIAAIAAAFIAAAAQAFgGAHAAQALAAACAIQAFgIAJAAQAQAAAAASIAAAbg");
	this.shape_8.setTransform(173.6,73.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNAUQgFgFAAgHIAIAAQAAAKALAAQAEAAADgCQACgCAAgDQAAgEgDgCIgIgDIgLgCQgFgDAAgHQAAgGAFgEQAFgDAHAAQAIAAAEAEQAFAEAAAHIgIAAQAAgJgJAAQgEAAgCACQgDABAAADQAAAEADABIAHADQAJACADABQAGADAAAHQAAAHgFADQgFAEgJAAQgIAAgFgEg");
	this.shape_9.setTransform(165.475,73.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_10.setTransform(160.725,73.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_11.setTransform(155.575,73.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgDAgIAAgsIAHAAIAAAsgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_12.setTransform(152,72.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_13.setTransform(149.425,72.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDAgIAAgsIAHAAIAAAsgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_14.setTransform(147,72.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOAaQgGgHAAgKQAAgKAGgHQAFgGAJgBQAIABAEAHIABAAIAAgZIAIAAIAAA/IgIAAIAAgGQgEAIgJgBQgJABgFgHgAgIgDQgDADAAAJQAAAHADAFQAEAFAFAAQAFAAAEgFQADgFAAgHQAAgIgDgFQgEgEgFAAQgFAAgEAFg");
	this.shape_15.setTransform(143.175,72.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_16.setTransform(138.225,73.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_17.setTransform(133.075,73.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgNASQgHgHAAgLQAAgKAHgHQAFgGAJAAQAJAAAFAFQAFAEABAIIgIAAQgBgFgDgDQgDgDgFAAQgFAAgEAFQgDAFAAAHQAAAIADAFQAEAFAFAAQAFAAADgEQADgDABgFIAIAAQgBAIgFAFQgFAFgJAAQgJAAgFgGg");
	this.shape_18.setTransform(128.15,73.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgOAaQgGgHAAgKQAAgKAGgHQAFgGAJgBQAIABAEAHIABAAIAAgZIAIAAIAAA/IgIAAIAAgGQgEAIgJgBQgJABgFgHgAgIgDQgDADAAAJQAAAHADAFQAEAFAFAAQAFAAAEgFQADgFAAgHQAAgIgDgFQgEgEgFAAQgFAAgEAFg");
	this.shape_19.setTransform(120.975,72.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_20.setTransform(116.025,73.475);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgFAEgEQAEgDAKgBIAMgBIAAgCQAAgLgKAAQgJAAgBAJIgIAAQABgHAEgEQAFgEAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAAEADACQACACAFAAQAFAAADgDQAEgFAAgGIAAgEIgLACg");
	this.shape_21.setTransform(110.925,73.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgNAUQgFgFAAgHIAIAAQAAAKALAAQAEAAADgCQACgCAAgDQAAgEgDgCIgIgDIgLgCQgFgDAAgHQAAgGAFgEQAFgDAHAAQAIAAAEAEQAFAEAAAHIgIAAQAAgJgJAAQgEAAgCACQgDABAAADQAAAEADABIAHADQAJACADABQAGADAAAHQAAAHgFADQgFAEgJAAQgIAAgFgEg");
	this.shape_22.setTransform(104.425,73.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAYAXIAAgaQAAgNgJAAQgFAAgDAEQgDAEAAAGIAAAZIgHAAIAAgcQAAgFgCgDQgDgDgEAAQgFAAgDAEQgDAEAAAHIAAAYIgIAAIAAgsIAIAAIAAAFIAAAAQAEgGAIAAQALAAACAIQAFgIAJAAQAQAAAAASIAAAbg");
	this.shape_23.setTransform(98.35,73.475);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgLAXIAAgsIAHAAIAAAGIABAAQADgHAJAAIADAAIAAAHIgDAAQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_24.setTransform(93.125,73.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_25.setTransform(88.725,73.525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_26.setTransform(84.775,72.975);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_27.setTransform(80.3,72.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgFAEgEQAEgDAKgBIAMgBIAAgCQAAgLgKAAQgJAAgBAJIgIAAQABgHAEgEQAFgEAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAAEADACQACACAFAAQAFAAADgDQAEgFAAgGIAAgEIgLACg");
	this.shape_28.setTransform(76.725,73.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_29.setTransform(71.925,73.475);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_30.setTransform(66.775,73.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgDAgIAAgsIAHAAIAAAsgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_31.setTransform(63.2,72.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_32.setTransform(60.625,72.975);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgDAgIAAgsIAHAAIAAAsgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_33.setTransform(58.2,72.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgOAaQgGgHAAgKQAAgKAGgHQAFgGAJgBQAIABAEAHIABAAIAAgZIAIAAIAAA/IgIAAIAAgGQgEAIgJgBQgJABgFgHgAgIgDQgDADAAAJQAAAHADAFQAEAFAFAAQAFAAAEgFQADgFAAgHQAAgIgDgFQgEgEgFAAQgFAAgEAFg");
	this.shape_34.setTransform(54.375,72.65);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgOAaQgGgHAAgKQAAgKAGgHQAFgGAJgBQAIABAEAHIABAAIAAgZIAIAAIAAA/IgIAAIAAgGQgEAIgJgBQgJABgFgHgAgIgDQgDADAAAJQAAAHADAFQAEAFAFAAQAFAAAEgFQADgFAAgHQAAgIgDgFQgEgEgFAAQgFAAgEAFg");
	this.shape_35.setTransform(49.225,72.65);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAVAgIgHgTIgbAAIgHATIgJAAIAYg/IALAAIAYA/gAALAGIgCgGIgJgaIgJAaIgBAGIAVAAg");
	this.shape_36.setTransform(43.8,72.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_37.setTransform(37.725,75.275);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_38.setTransform(35.65,72.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgFAEgEQAEgDAKgBIAMgBIAAgCQAAgLgKAAQgJAAgBAJIgIAAQABgHAEgEQAFgEAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAAEADACQACACAFAAQAFAAADgDQAEgFAAgGIAAgEIgLACg");
	this.shape_39.setTransform(32.075,73.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgTAgIAAg9IAIAAIAAAGQABgDAEgDQAEgCADAAQAJAAAGAHQAEAGAAALQAAAKgEAHQgGAGgJAAQgDAAgEgCQgEgCgBgDIAAAXgAgIgUQgEAFAAAIQAAAHAEAFQADAFAFAAQAFAAAEgFQAEgFgBgHQABgIgEgEQgEgFgFAAQgFAAgDAEg");
	this.shape_40.setTransform(27.4,74.275);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgDAgIAAgsIAHAAIAAAsgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_41.setTransform(23.6,72.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgOASQgFgHAAgLQAAgKAFgHQAHgGAIAAQAJAAAFAFQAFAEAAAIIgIAAQAAgFgDgDQgDgDgFAAQgFAAgDAFQgEAFAAAHQAAAIAEAFQADAFAFAAQAFAAADgEQADgDAAgFIAIAAQAAAIgFAFQgFAFgJAAQgIAAgHgGg");
	this.shape_42.setTransform(20.1,73.525);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_43.setTransform(15.175,73.475);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgDAgIAAgsIAHAAIAAAsgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_44.setTransform(11.5,72.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgLAXIAAgsIAHAAIAAAGIABAAQADgHAJAAIADAAIAAAHIgDAAQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_45.setTransform(9.075,73.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgTAgIAAg9IAIAAIAAAGQACgDADgDQAEgCADAAQAJAAAFAHQAFAGABALQgBAKgFAHQgFAGgJAAQgDAAgEgCQgDgCgCgDIAAAXgAgJgUQgDAFAAAIQAAAHADAFQAEAFAFAAQAGAAADgFQAEgFAAgHQAAgIgEgEQgDgFgGAAQgFAAgEAEg");
	this.shape_46.setTransform(4.75,74.275);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_47.setTransform(215.825,62.975);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgNASQgHgHAAgLQAAgKAHgHQAFgGAJAAQAJAAAFAFQAFAEABAIIgIAAQgBgFgDgDQgDgDgFAAQgFAAgEAFQgDAFAAAHQAAAIADAFQAEAFAFAAQAFAAADgEQADgDABgFIAIAAQgBAIgFAFQgFAFgJAAQgJAAgFgGg");
	this.shape_48.setTransform(210.95,62.975);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgSAEIAAgaIAIAAIAAAaQAAANAKAAQAEAAAEgEQADgEAAgGIAAgZIAIAAIAAAsIgIAAIAAgGQgEAHgJAAQgQAAAAgTg");
	this.shape_49.setTransform(205.975,63.025);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgOAaQgGgHAAgLQAAgJAGgHQAFgGAJAAQAIAAAEAHIABAAIAAgYIAIAAIAAA/IgIAAIAAgHQgEAHgJAAQgJAAgFgGgAgIgDQgDAEAAAHQAAAJADAFQAEAEAFAAQAFAAAEgEQADgFAAgJQAAgIgDgEQgEgEgFAAQgFAAgEAFg");
	this.shape_50.setTransform(200.675,62.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_51.setTransform(195.775,62.975);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAHIABAAQADgHAJAAIADAAIAAAHIgDAAQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_52.setTransform(191.975,62.95);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgTAfIAAgHIAEABQAFAAACgCQACgCADgHIgSgsIAJAAIAMAjIAAAAIANgjIAJAAIgTAuQgDAJgDADQgEADgHAAIgFAAg");
	this.shape_53.setTransform(182.825,63.825);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgGQAAgFAEgEQAEgCAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAAEADACQACACAFAAQAFAAADgDQAEgFAAgHIAAgCIgLABg");
	this.shape_54.setTransform(178.225,62.95);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAYAXIAAgaQAAgNgJAAQgFAAgDAEQgDAEAAAGIAAAZIgHAAIAAgcQAAgFgDgDQgCgDgEAAQgFAAgDAEQgDAEAAAHIAAAYIgIAAIAAgsIAHAAIAAAFIABAAQAFgGAHAAQAKAAADAIQAFgIAKAAQAPAAAAASIAAAbg");
	this.shape_55.setTransform(172.1,62.925);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgNAUQgFgFAAgHIAIAAQAAAKALAAQAEAAADgCQACgCAAgDQAAgEgDgCIgIgDIgLgCQgFgDAAgHQAAgGAFgEQAFgDAHAAQAIAAAEAEQAFAEAAAHIgIAAQAAgJgJAAQgEAAgCACQgDABAAADQAAAEADABIAHADQAJACADABQAGADAAAHQAAAHgFADQgFAEgJAAQgIAAgFgEg");
	this.shape_56.setTransform(160.875,62.975);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_57.setTransform(156.175,62.975);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_58.setTransform(151.225,62.975);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgTAgIAAg/IAnAAIAAAHIgfAAIAAAWIAdAAIAAAGIgdAAIAAAcg");
	this.shape_59.setTransform(146.45,62.05);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_60.setTransform(137.475,64.725);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_61.setTransform(135.4,62.05);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgGQAAgFAEgEQAEgCAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAAEADACQACACAFAAQAFAAADgDQAEgFAAgHIAAgCIgLABg");
	this.shape_62.setTransform(131.825,62.95);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AALAXIgGgUIgEgTIgBAAIgEATIgGAUIgLAAIgMgtIAIAAIAFATIAFAUIAFgTIAGgUIAKAAIAFAUIAFATIAAAAIAGgUIAEgTIAIAAIgMAtg");
	this.shape_63.setTransform(126.1,62.975);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgGQAAgFAEgEQAEgCAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAAEADACQACACAFAAQAFAAADgDQAEgFAAgHIAAgCIgLABg");
	this.shape_64.setTransform(120.175,62.95);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAHIABAAQADgHAJAAIADAAIAAAHIgDAAQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_65.setTransform(116.575,62.95);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgOAaQgGgHAAgLQAAgJAGgHQAFgGAJAAQAIAAAEAHIABAAIAAgYIAIAAIAAA/IgIAAIAAgHQgEAHgJAAQgJAAgFgGgAgIgDQgDAEAAAHQAAAJADAFQAEAEAFAAQAFAAAEgEQADgFAAgJQAAgIgDgEQgEgEgFAAQgFAAgEAFg");
	this.shape_66.setTransform(111.925,62.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AALAgIAAgcQAAgLgKAAQgFAAgDADQgDAEAAAGIAAAaIgIAAIAAg/IAIAAIAAAYQAEgHAIAAQARABAAARIAAAcg");
	this.shape_67.setTransform(106.975,62.05);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_68.setTransform(102.875,62.425);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_69.setTransform(100.45,62.05);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAKAXIgEgUIgGgTIAAAAIgEATIgFAUIgLAAIgNgtIAIAAIAFATIAFAUIAGgTIAEgUIALAAIAFAUIAFATIABAAIAEgUIAFgTIAIAAIgMAtg");
	this.shape_70.setTransform(95.9,62.975);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgTAfIAAgHIAEABQAFAAACgCQACgCADgHIgSgsIAJAAIAMAjIAAAAIANgjIAJAAIgTAuQgDAJgDADQgEADgHAAIgFAAg");
	this.shape_71.setTransform(85.225,63.825);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_72.setTransform(82.05,62.05);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAHIABAAQADgHAJAAIADAAIAAAHIgDAAQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_73.setTransform(79.625,62.95);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgGQAAgFAEgEQAEgCAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAAEADACQACACAFAAQAFAAADgDQAEgFAAgHIAAgCIgLABg");
	this.shape_74.setTransform(75.225,62.95);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_75.setTransform(70.475,62.975);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAHIABAAQADgHAJAAIADAAIAAAHIgDAAQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_76.setTransform(61.525,62.95);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_77.setTransform(57.075,62.975);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgEAgIAAgmIgIAAIAAgGIAIAAIAAgGQAAgNAMAAIAFAAIAAAGIgDAAQgHAAAAAIIAAAFIAJAAIAAAGIgJAAIAAAmg");
	this.shape_78.setTransform(53.225,62.025);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgOAaQgGgHAAgLQAAgJAGgHQAFgGAJAAQAIAAAEAHIABAAIAAgYIAIAAIAAA/IgIAAIAAgHQgEAHgJAAQgJAAgFgGgAgIgDQgDAEAAAHQAAAJADAFQAEAEAFAAQAFAAAEgEQADgFAAgJQAAgIgDgEQgEgEgFAAQgFAAgEAFg");
	this.shape_79.setTransform(43.975,62.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_80.setTransform(39.075,62.975);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_81.setTransform(35.55,62.05);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_82.setTransform(33.4,62.05);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgUAgIAAg9IAIAAIAAAGQACgDAEgDQAEgCAEAAQAIAAAFAHQAGAGAAALQAAAKgGAHQgFAGgIAAQgEAAgEgCQgEgCgCgDIAAAXgAgIgUQgEAFAAAIQAAAHAEAFQADAFAFAAQAFAAAEgFQADgFAAgHQAAgIgDgEQgEgFgFAAQgFAAgDAEg");
	this.shape_83.setTransform(29.9,63.725);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgUAgIAAg9IAIAAIAAAGQACgDAEgDQAEgCAEAAQAIAAAFAHQAGAGAAALQAAAKgGAHQgFAGgIAAQgEAAgEgCQgEgCgCgDIAAAXgAgJgUQgDAFAAAIQAAAHADAFQAEAFAFAAQAGAAADgFQADgFABgHQgBgIgDgEQgDgFgGAAQgFAAgEAEg");
	this.shape_84.setTransform(24.75,63.725);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgGQAAgFAEgEQAEgCAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAAEADACQACACAFAAQAFAAADgDQAEgFAAgHIAAgCIgLABg");
	this.shape_85.setTransform(19.525,62.95);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_86.setTransform(9.625,62.975);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgGAfQgDgCgCgEIAAAHIgIAAIAAg/IAIAAIAAAYQAEgHAIAAQAKAAAEAGQAFAHABAJQgBALgFAHQgFAGgJAAQgDAAgEgBgAgJgEQgDAEAAAIQAAAJADAFQAEAEAFAAQAGAAADgEQAEgFAAgJQAAgHgEgEQgDgFgGAAQgFAAgEAEg");
	this.shape_87.setTransform(4.75,62.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgTAfIAAgHIAEABQAFAAACgCQACgCADgHIgSgsIAJAAIAMAjIAAAAIANgjIAJAAIgTAuQgDAJgDADQgEADgHAAIgFAAg");
	this.shape_88.setTransform(216.525,53.275);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgHAEgCQAEgDAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAASIAAAQIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAAEADABQACADAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_89.setTransform(211.925,52.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAYAXIAAgaQAAgNgJAAQgFAAgDAEQgDAEAAAGIAAAZIgHAAIAAgcQAAgFgDgDQgCgDgEAAQgFAAgDAEQgDAEAAAHIAAAYIgIAAIAAgsIAHAAIAAAFIABAAQAEgGAJAAQAKAAACAIQAFgIAJAAQAQAAAAASIAAAbg");
	this.shape_90.setTransform(205.8,52.375);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgTAfIAAgHIAEABQAFAAACgCQACgCADgHIgSgsIAJAAIAMAjIAAAAIANgjIAJAAIgTAuQgDAJgDADQgEADgHAAIgFAAg");
	this.shape_91.setTransform(197.725,53.275);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_92.setTransform(194.125,51.875);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_93.setTransform(191.7,51.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgHAEgCQAEgDAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAASIAAAQIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAAEADABQACADAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_94.setTransform(188.125,52.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_95.setTransform(183.325,52.375);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_96.setTransform(178.225,52.425);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgVAgIAAg/IAVAAQALAAAFAFQAGAGAAAIQAAAJgGAFQgFAEgLAAIgNAAIAAAagAgNAAIANAAQAOAAAAgMQAAgMgOAAIgNAAg");
	this.shape_97.setTransform(173.325,51.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_98.setTransform(167.175,54.175);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AAYAXIAAgaQAAgNgJAAQgFAAgDAEQgDAEAAAGIAAAZIgHAAIAAgcQAAgFgDgDQgCgDgEAAQgFAAgDAEQgDAEAAAHIAAAYIgIAAIAAgsIAHAAIAAAFIABAAQAEgGAJAAQAJAAADAIQAFgIAKAAQAPAAAAASIAAAbg");
	this.shape_99.setTransform(162.3,52.375);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAHIABAAQADgHAJAAIADAAIAAAHIgDAAQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_100.setTransform(157.075,52.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_101.setTransform(152.675,52.425);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_102.setTransform(148.725,51.875);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_103.setTransform(142.775,52.425);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAHIABAAQADgHAJAAIADAAIAAAHIgDAAQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_104.setTransform(138.975,52.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_105.setTransform(136,51.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_106.setTransform(133.425,51.875);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_107.setTransform(129.525,52.375);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_108.setTransform(124.425,52.425);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAHIABAAQADgHAJAAIADAAIAAAHIgDAAQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_109.setTransform(118.525,52.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_110.setTransform(114.075,52.425);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgEAgIAAgmIgIAAIAAgGIAIAAIAAgGQAAgNAMAAIAFAAIAAAGIgDAAQgHAAAAAIIAAAFIAJAAIAAAGIgJAAIAAAmg");
	this.shape_111.setTransform(110.225,51.475);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_112.setTransform(105.275,51.875);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_113.setTransform(102.85,51.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgNAUQgFgFAAgHIAIAAQAAAKALAAQAEAAADgCQACgCAAgDQAAgEgDgCIgIgDIgLgCQgFgDAAgHQAAgGAFgEQAFgDAHAAQAIAAAEAEQAFAEAAAHIgIAAQAAgJgJAAQgEAAgCACQgDABAAADQAAAEADABIAHADQAJACADABQAGADAAAHQAAAHgFADQgFAEgJAAQgIAAgFgEg");
	this.shape_114.setTransform(99.575,52.425);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_115.setTransform(94.825,52.425);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgUAgIAAg9IAJAAIAAAGQACgDADgDQAEgCAEAAQAIAAAFAHQAFAGABALQgBAKgFAHQgFAGgIAAQgEAAgEgCQgDgCgCgDIAAAXgAgJgUQgDAFAAAIQAAAHADAFQAEAFAFAAQAGAAADgFQADgFABgHQgBgIgDgEQgDgFgGAAQgFAAgEAEg");
	this.shape_116.setTransform(89.9,53.175);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_117.setTransform(84.675,52.425);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgOAaQgGgHAAgLQAAgKAGgGQAFgHAJABQAIgBAEAIIABAAIAAgYIAIAAIAAA/IgIAAIAAgHQgEAHgJABQgJgBgFgGgAgIgDQgDAEAAAHQAAAIADAGQAEAEAFAAQAFAAAEgEQADgGAAgIQAAgHgDgEQgEgFgFAAQgFAAgEAFg");
	this.shape_118.setTransform(79.475,51.55);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_119.setTransform(72.425,52.375);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_120.setTransform(67.275,52.425);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_121.setTransform(60.125,52.375);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_122.setTransform(56.45,51.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgHAEgCQAEgDAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAASIAAAQIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAAEADABQACADAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_123.setTransform(52.875,52.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AAYAXIAAgaQAAgNgJAAQgFAAgDAEQgDAEAAAGIAAAZIgHAAIAAgcQAAgFgDgDQgCgDgEAAQgFAAgDAEQgDAEAAAHIAAAYIgIAAIAAgsIAHAAIAAAFIABAAQAEgGAJAAQAJAAADAIQAFgIAKAAQAPAAAAASIAAAbg");
	this.shape_124.setTransform(46.75,52.375);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_125.setTransform(40.375,52.425);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAHIABAAQADgHAJAAIADAAIAAAHIgDAAQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_126.setTransform(36.575,52.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_127.setTransform(31.075,51.875);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgNAUQgFgFAAgHIAIAAQAAAKALAAQAEAAADgCQACgCAAgDQAAgEgDgCIgIgDIgLgCQgFgDAAgHQAAgGAFgEQAFgDAHAAQAIAAAEAEQAFAEAAAHIgIAAQAAgJgJAAQgEAAgCACQgDABAAADQAAAEADABIAHADQAJACADABQAGADAAAHQAAAHgFADQgFAEgJAAQgIAAgFgEg");
	this.shape_128.setTransform(27.525,52.425);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_129.setTransform(22.825,52.425);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAHIABAAQADgHAJAAIADAAIAAAHIgDAAQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_130.setTransform(19.025,52.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_131.setTransform(14.625,52.425);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_132.setTransform(10.675,51.875);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_133.setTransform(6.775,52.375);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_134.setTransform(3.1,51.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgOAaQgGgGAAgMQAAgKAGgGQAFgHAJAAQAIAAAEAIIABAAIAAgZIAIAAIAABAIgIAAIAAgHQgEAIgJAAQgJAAgFgHgAgIgDQgDADAAAIQAAAJADAEQAEAFAFAAQAFAAAEgFQADgEAAgJQAAgIgDgDQgEgFgFAAQgFAAgEAFg");
	this.shape_135.setTransform(215.675,41);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_136.setTransform(210.725,41.825);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgHAEgCQAEgEAKgBIAMgBIAAgCQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgFQAFgEAIAAQASAAAAASIAAARIABALIgIAAIAAgHQgFAIgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAADADACQACADAFAAQAFAAADgEQAEgEAAgGIAAgDIgLABg");
	this.shape_137.setTransform(205.625,41.85);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_138.setTransform(197.25,40.95);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgHAEgCQAEgEAKgBIAMgBIAAgCQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgFQAFgEAIAAQASAAAAASIAAARIABALIgIAAIAAgHQgFAIgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAADADACQACADAFAAQAFAAADgEQAEgEAAgGIAAgDIgLABg");
	this.shape_139.setTransform(193.675,41.85);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgUAgIAAg9IAIAAIAAAGQACgDAEgDQAEgCAEAAQAIAAAFAHQAGAGAAALQAAAKgGAHQgFAGgIAAQgEAAgEgCQgEgCgCgDIAAAXgAgJgUQgDAFAAAIQAAAHADAFQAEAFAFAAQAGAAADgFQADgFABgHQgBgIgDgEQgDgFgGAAQgFAAgEAEg");
	this.shape_140.setTransform(189,42.625);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_141.setTransform(185.2,40.95);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgNASQgHgHAAgLQAAgKAHgHQAFgGAJAAQAJAAAFAFQAFAEABAIIgIAAQgBgFgDgDQgDgDgFAAQgFAAgEAFQgDAFAAAHQAAAIADAFQAEAFAFAAQAFAAADgEQADgDABgFIAIAAQgBAIgFAFQgFAFgJAAQgJAAgFgGg");
	this.shape_142.setTransform(181.7,41.875);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_143.setTransform(176.775,41.825);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_144.setTransform(173.1,40.95);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAIIABAAQADgIAJAAIADAAIAAAIIgDgBQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_145.setTransform(170.675,41.85);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgTAgIAAg9IAHAAIAAAGQADgDADgDQAEgCADAAQAJAAAGAHQAEAGAAALQAAAKgEAHQgGAGgJAAQgDAAgEgCQgDgCgDgDIAAAXgAgIgUQgEAFAAAIQAAAHAEAFQADAFAFAAQAFAAAEgFQAEgFgBgHQABgIgEgEQgEgFgFAAQgFAAgDAEg");
	this.shape_146.setTransform(166.35,42.625);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_147.setTransform(157.5,40.95);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_148.setTransform(155.35,40.95);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgHAEgCQAEgEAKgBIAMgBIAAgCQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgFQAFgEAIAAQASAAAAASIAAARIABALIgIAAIAAgHQgFAIgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAADADACQACADAFAAQAFAAADgEQAEgEAAgGIAAgDIgLABg");
	this.shape_149.setTransform(151.775,41.85);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_150.setTransform(141.925,41.825);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_151.setTransform(136.825,41.875);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AALAgIAAgcQAAgLgKAAQgFAAgDADQgDAEAAAGIAAAaIgIAAIAAg/IAIAAIAAAYQAEgGAIAAQARAAAAARIAAAcg");
	this.shape_152.setTransform(131.825,40.95);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AALAXIgGgUIgEgTIgBAAIgEATIgFAUIgMAAIgMgtIAIAAIAFATIAFAUIAGgTIAEgUIALAAIAFAUIAFATIABAAIAEgUIAFgTIAIAAIgMAtg");
	this.shape_153.setTransform(125.75,41.875);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgTAfIAAgHIAEABQAFAAACgCQACgCADgHIgSgsIAJAAIAMAjIAAAAIANgjIAJAAIgTAuQgDAJgDADQgEADgHAAIgFAAg");
	this.shape_154.setTransform(115.175,42.725);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_155.setTransform(112,40.95);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgTAgIAAg9IAIAAIAAAGQACgDADgDQAEgCADAAQAJAAAGAHQAEAGAAALQAAAKgEAHQgGAGgJAAQgDAAgEgCQgDgCgCgDIAAAXgAgJgUQgDAFAAAIQAAAHADAFQAEAFAFAAQAFAAAEgFQADgFAAgHQAAgIgDgEQgEgFgFAAQgFAAgEAEg");
	this.shape_156.setTransform(108.5,42.625);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgTAgIAAg9IAHAAIAAAGQADgDADgDQAEgCAEAAQAIAAAGAHQAEAGAAALQAAAKgEAHQgGAGgIAAQgEAAgEgCQgDgCgDgDIAAAXgAgIgUQgEAFAAAIQAAAHAEAFQADAFAFAAQAFAAAEgFQAEgFgBgHQABgIgEgEQgEgFgFAAQgFAAgDAEg");
	this.shape_157.setTransform(103.35,42.625);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgHAEgCQAEgEAKgBIAMgBIAAgCQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgFQAFgEAIAAQASAAAAASIAAARIABALIgIAAIAAgHQgFAIgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAADADACQACADAFAAQAFAAADgEQAEgEAAgGIAAgDIgLABg");
	this.shape_158.setTransform(98.125,41.85);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgNAUQgFgFAAgHIAIAAQAAAKALAAQAEAAADgCQACgCAAgDQAAgEgDgCIgIgDIgLgCQgFgDAAgHQAAgGAFgEQAFgDAHAAQAIAAAEAEQAFAEAAAHIgIAAQAAgJgJAAQgEAAgCACQgDABAAADQAAAEADABIAHADQAJACADABQAGADAAAHQAAAHgFADQgFAEgJAAQgIAAgFgEg");
	this.shape_159.setTransform(88.625,41.875);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgDAgIAAgbIgXgkIAJAAIAIANIAJARIAKgRIAIgNIAJAAIgXAkIAAAbg");
	this.shape_160.setTransform(83.675,40.95);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgVAgIAAg/IAVAAQALAAAFAFQAGAFAAAJQAAAJgGAFQgFAEgLAAIgNAAIAAAagAgNAAIANAAQAOAAAAgMQAAgMgOAAIgNAAg");
	this.shape_161.setTransform(78.475,40.95);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AAVAgIgHgTIgbAAIgHATIgJAAIAYg/IALAAIAYA/gAALAFIgCgFIgJgZIgIAZIgCAFIAVAAg");
	this.shape_162.setTransform(72.4,40.95);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_163.setTransform(63.325,43.625);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgDAgIAAgbIgXgkIAJAAIAIANIAJARIAKgRIAIgNIAJAAIgXAkIAAAbg");
	this.shape_164.setTransform(59.575,40.95);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgVAgIAAg/IAVAAQALAAAFAFQAGAFAAAJQAAAJgGAFQgFAEgLAAIgNAAIAAAagAgNAAIANAAQAOAAAAgMQAAgMgOAAIgNAAg");
	this.shape_165.setTransform(54.375,40.95);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AAVAgIgHgTIgbAAIgHATIgJAAIAYg/IALAAIAYA/gAALAFIgCgFIgJgZIgJAZIgBAFIAVAAg");
	this.shape_166.setTransform(48.3,40.95);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgOAaQgGgGAAgMQAAgKAGgGQAFgHAJAAQAIAAAEAIIABAAIAAgZIAIAAIAABAIgIAAIAAgHQgEAIgJAAQgJAAgFgHgAgIgDQgDADAAAIQAAAJADAEQAEAFAFAAQAFAAAEgFQADgEAAgJQAAgIgDgDQgEgFgFAAQgFAAgEAFg");
	this.shape_167.setTransform(37.475,41);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_168.setTransform(32.575,41.875);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgNAUQgFgFAAgHIAIAAQAAAKALAAQAEAAADgCQACgCAAgDQAAgEgDgCIgIgDIgLgCQgFgDAAgHQAAgGAFgEQAFgDAHAAQAIAAAEAEQAFAEAAAHIgIAAQAAgJgJAAQgEAAgCACQgDABAAADQAAAEADABIAHADQAJACADABQAGADAAAHQAAAHgFADQgFAEgJAAQgIAAgFgEg");
	this.shape_169.setTransform(27.925,41.875);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_170.setTransform(23.175,41.875);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_171.setTransform(19.6,40.95);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgNASQgHgHAAgLQAAgKAHgHQAFgGAJAAQAJAAAFAFQAFAEABAIIgIAAQgBgFgDgDQgDgDgFAAQgFAAgEAFQgDAFAAAHQAAAIADAFQAEAFAFAAQAFAAADgEQADgDABgFIAIAAQgBAIgFAFQgFAFgJAAQgJAAgFgGg");
	this.shape_172.setTransform(16.1,41.875);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgNAUQgFgFAAgHIAIAAQAAAKALAAQAEAAADgCQACgCAAgDQAAgEgDgCIgIgDIgLgCQgFgDAAgHQAAgGAFgEQAFgDAHAAQAIAAAEAEQAFAEAAAHIgIAAQAAgJgJAAQgEAAgCACQgDABAAADQAAAEADABIAHADQAJACADABQAGADAAAHQAAAHgFADQgFAEgJAAQgIAAgFgEg");
	this.shape_173.setTransform(11.525,41.875);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_174.setTransform(8.25,40.95);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgOAaQgGgGAAgMQAAgKAGgGQAFgHAJAAQAIAAAEAIIABAAIAAgZIAIAAIAABAIgIAAIAAgHQgEAIgJAAQgJAAgFgHgAgIgDQgDADAAAIQAAAJADAEQAEAFAFAAQAFAAAEgFQADgEAAgJQAAgIgDgDQgEgFgFAAQgFAAgEAFg");
	this.shape_175.setTransform(4.425,41);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_176.setTransform(215.925,31.275);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgLAXIAAgsIAHAAIAAAHIABAAQADgIAJAAIADAAIAAAIIgDgBQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_177.setTransform(211.975,31.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgFAEgEQAEgDAKgBIAMgBIAAgCQAAgLgKAAQgJAAgBAJIgIAAQABgHAEgEQAFgEAIAAQASAAAAASIAAARIABALIgIAAIAAgHQgFAIgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAADADACQACADAFAAQAFAAADgDQAEgEAAgHIAAgEIgLACg");
	this.shape_178.setTransform(207.575,31.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_179.setTransform(202.825,31.325);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgNAUQgFgFAAgHIAIAAQAAAKALAAQAEAAADgCQACgCAAgDQAAgEgDgCIgIgDIgLgCQgFgDAAgHQAAgGAFgEQAFgDAHAAQAIAAAEAEQAFAEAAAHIgIAAQAAgJgJAAQgEAAgCACQgDABAAADQAAAEADABIAHADQAJACADABQAGADAAAHQAAAHgFADQgFAEgJAAQgIAAgFgEg");
	this.shape_180.setTransform(190.675,31.325);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_181.setTransform(185.975,31.325);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgOASQgFgHgBgLQABgKAFgHQAHgGAIAAQAIAAAGAFQAFAEAAAIIgIAAQAAgFgDgDQgDgDgFAAQgFAAgDAFQgEAFAAAHQAAAIAEAFQADAFAFAAQAFAAADgEQADgDAAgFIAIAAQAAAIgFAFQgGAFgIAAQgIAAgHgGg");
	this.shape_182.setTransform(181.1,31.325);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_183.setTransform(176.175,31.275);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgFAEgEQAEgDAKgBIAMgBIAAgCQAAgLgKAAQgJAAgBAJIgIAAQABgHAEgEQAFgEAIAAQASAAAAASIAAARIABALIgIAAIAAgHQgFAIgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAADADACQACADAFAAQAFAAADgDQAEgEAAgHIAAgEIgLACg");
	this.shape_184.setTransform(171.075,31.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_185.setTransform(167.75,30.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgFAEgEQAEgDAKgBIAMgBIAAgCQAAgLgKAAQgJAAgBAJIgIAAQABgHAEgEQAFgEAIAAQASAAAAASIAAARIABALIgIAAIAAgHQgFAIgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAADADACQACADAFAAQAFAAADgDQAEgEAAgHIAAgEIgLACg");
	this.shape_186.setTransform(164.175,31.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgGAeQgEgCgCgDIAAAGIgIAAIAAg/IAIAAIAAAZQAFgHAJgBQAJABAEAGQAGAHAAAKQAAALgGAGQgFAHgIgBQgEAAgEgCgAgIgEQgEAFAAAIQAAAHAEAFQADAFAFAAQAFAAAEgFQADgFAAgHQAAgJgDgDQgEgFgFAAQgFAAgDAEg");
	this.shape_187.setTransform(159.5,30.45);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_188.setTransform(148.2,30.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_189.setTransform(146.05,30.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AAVAgIgHgTIgbAAIgHATIgJAAIAYg/IAKAAIAZA/gAALAGIgBgGIgKgaIgIAaIgDAGIAWAAg");
	this.shape_190.setTransform(141.95,30.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_191.setTransform(130.425,33.075);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_192.setTransform(126.875,31.275);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_193.setTransform(121.775,31.325);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgUAgIAAg9IAJAAIAAAGQACgDADgDQAEgCAEAAQAIAAAFAHQAFAGABALQgBAKgFAHQgFAGgIAAQgEAAgEgCQgDgCgCgDIAAAXgAgJgUQgDAFAAAIQAAAHADAFQAEAFAFAAQAGAAADgFQADgFABgHQgBgIgDgEQgDgFgGAAQgFAAgEAEg");
	this.shape_194.setTransform(116.9,32.075);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_195.setTransform(111.625,31.325);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_196.setTransform(99.075,31.325);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_197.setTransform(95.075,30.775);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AAMAXIgMgTIgLATIgKAAIARgXIgPgWIAJAAIAKAQIALgQIAJAAIgPAWIARAXg");
	this.shape_198.setTransform(84.075,31.325);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgFAEgEQAEgDAKgBIAMgBIAAgCQAAgLgKAAQgJAAgBAJIgIAAQABgHAEgEQAFgEAIAAQASAAAAASIAAARIABALIgIAAIAAgHQgFAIgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAADADACQACADAFAAQAFAAADgDQAEgEAAgHIAAgEIgLACg");
	this.shape_199.setTransform(79.425,31.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AAYAXIAAgaQAAgNgJAAQgFAAgDAEQgDAEAAAGIAAAZIgHAAIAAgcQAAgFgDgDQgCgDgEAAQgFAAgDAEQgDAEAAAHIAAAYIgIAAIAAgsIAHAAIAAAFIABAAQAEgGAJAAQAJAAADAIQAFgIAKAAQAPAAAAASIAAAbg");
	this.shape_200.setTransform(73.3,31.275);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgPAXQgGgIAAgPQAAgOAGgJQAFgIAKAAQALAAAFAIQAGAJAAAOQAAAPgGAIQgFAJgLAAQgKAAgFgJgAgMAAQAAAYAMAAQANAAAAgYQAAgXgNAAQgMAAAAAXg");
	this.shape_201.setTransform(59.375,30.575);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgPAXQgGgIAAgPQAAgOAGgJQAFgIAKAAQALAAAFAIQAGAJAAAOQAAAPgGAIQgFAJgLAAQgKAAgFgJgAgMAAQAAAYAMAAQANAAAAgYQAAgXgNAAQgMAAAAAXg");
	this.shape_202.setTransform(54.325,30.575);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgPAXQgGgIAAgPQAAgOAGgJQAFgIAKAAQALAAAFAIQAGAJAAAOQAAAPgGAIQgFAJgLAAQgKAAgFgJgAgMAAQAAAYAMAAQANAAAAgYQAAgXgNAAQgMAAAAAXg");
	this.shape_203.setTransform(49.275,30.575);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgEAMIAEgMIgEAAIAAgLIAJAAIAAALIgEAMg");
	this.shape_204.setTransform(45.75,33.725);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgPAXQgGgIAAgPQAAgOAGgJQAFgIAKAAQALAAAFAIQAGAJAAAOQAAAPgGAIQgFAJgLAAQgKAAgFgJgAgMAAQAAAYAMAAQANAAAAgYQAAgXgNAAQgMAAAAAXg");
	this.shape_205.setTransform(42.225,30.575);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgUAfIAAgCQAAgJADgFQAFgGAKgGQAHgEACgDQAEgDAAgGQAAgEgDgDQgDgDgFABQgKAAAAALIgJAAQABgJAFgFQAFgFAIAAQAJAAAGAEQAEAGAAAHQABAIgFAEQgDADgJAFIgLAJQgCADAAAFIAfAAIAAAHg");
	this.shape_206.setTransform(37.15,30.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgUAfIAAgCQAAgJADgFQAFgGAKgGQAHgEACgDQAEgDAAgGQAAgEgDgDQgDgDgFABQgKAAAAALIgJAAQAAgJAGgFQAFgFAIAAQAJAAAGAEQAEAGAAAHQABAIgFAEQgDADgJAFIgLAJQgDADABAFIAfAAIAAAHg");
	this.shape_207.setTransform(32.1,30.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgCAnIAAgIQgTgBAAgUIAIAAQAAANALABIAAgWQgIgCgEgCQgGgFAAgHQAAgIAFgEQAFgEAIgBIAAgHIAFAAIAAAHQARACAAASIgIAAQAAgMgJgBIAAAUQAJADADACQAHAEgBAJQAAAHgFAFQgFAEgIABIAAAIgAADAYQAKgBAAgJQAAgFgCgCIgIgDgAgMgPQABAFACABQACADAFABIAAgTQgKABAAAIg");
	this.shape_208.setTransform(27.1,30.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgOAaQgGgGAAgLQAAgKAGgHQAFgGAJgBQAIABAEAHIABAAIAAgZIAIAAIAAA/IgIAAIAAgGQgEAIgJgBQgJABgFgHgAgIgDQgDADAAAJQAAAHADAFQAEAFAFAAQAFAAAEgFQADgFAAgHQAAgIgDgFQgEgEgFAAQgFAAgEAFg");
	this.shape_209.setTransform(14.325,30.45);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_210.setTransform(9.375,31.275);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgFAEgEQAEgDAKgBIAMgBIAAgCQAAgLgKAAQgJAAgBAJIgIAAQABgHAEgEQAFgEAIAAQASAAAAASIAAARIABALIgIAAIAAgHQgFAIgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAADADACQACADAFAAQAFAAADgDQAEgEAAgHIAAgEIgLACg");
	this.shape_211.setTransform(4.275,31.3);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_212.setTransform(216.025,20.725);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgDAgIAAgsIAHAAIAAAsgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_213.setTransform(212.35,19.85);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AAYAXIAAgaQAAgNgJAAQgFAAgDAEQgDAEAAAGIAAAZIgHAAIAAgcQAAgFgDgDQgCgDgEAAQgFAAgDAEQgDAEAAAHIAAAYIgIAAIAAgsIAHAAIAAAFIABAAQAEgGAJAAQAJAAADAIQAFgIAKAAQAPAAAAASIAAAbg");
	this.shape_214.setTransform(207.4,20.725);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgPAXQgGgIAAgPQAAgOAGgJQAFgIAKAAQALAAAFAIQAGAJAAAOQAAAPgGAIQgFAJgLAAQgKAAgFgJgAgMAAQAAAYAMAAQANAAAAgYQAAgXgNAAQgMAAAAAXg");
	this.shape_215.setTransform(197.825,20.025);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgPAXQgGgIAAgPQAAgOAGgJQAFgIAKAAQALAAAFAIQAGAJAAAOQAAAPgGAIQgFAJgLAAQgKAAgFgJgAgMAAQAAAYAMAAQANAAAAgYQAAgXgNAAQgMAAAAAXg");
	this.shape_216.setTransform(192.775,20.025);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgPAXQgGgIAAgPQAAgOAGgJQAFgIAKAAQALAAAFAIQAGAJAAAOQAAAPgGAIQgFAJgLAAQgKAAgFgJgAgMAAQAAAYAMAAQANAAAAgYQAAgXgNAAQgMAAAAAXg");
	this.shape_217.setTransform(187.725,20.025);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AgEAMIAEgMIgDAAIAAgLIAIAAIAAALIgFAMg");
	this.shape_218.setTransform(184.2,23.175);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AADAeIAAgrIgNAAIAAgGQAHAAADgDQADgCABgFIAHAAIAAA7g");
	this.shape_219.setTransform(180.175,20.025);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AgCAnIAAgIQgSgCAAgTIAIAAQAAANAKACIAAgXQgIgCgEgCQgFgFAAgHQAAgIAEgEQAFgEAIgBIAAgHIAEAAIAAAHQASABAAATIgIAAQAAgLgKgCIAAAVQAKACAEACQAFAEABAJQAAAHgGAFQgFAEgJABIAAAIgAACAZQALgBAAgKQAAgEgDgDIgIgDgAgLgPQgBAEADACQACACAFACIAAgTQgJAAAAAJg");
	this.shape_220.setTransform(175.65,20.05);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_221.setTransform(168.975,22.525);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_222.setTransform(165.475,20.775);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgOASQgFgHAAgLQAAgKAFgHQAHgGAIAAQAIAAAGAFQAFAEAAAIIgIAAQAAgFgDgDQgDgDgFAAQgFAAgEAFQgDAFAAAHQAAAIADAFQAEAFAFAAQAFAAADgEQADgDAAgFIAIAAQAAAIgFAFQgGAFgIAAQgIAAgHgGg");
	this.shape_223.setTransform(160.6,20.775);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgDAgIAAgsIAHAAIAAAsgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_224.setTransform(157.15,19.85);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_225.setTransform(154.575,20.225);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_226.setTransform(150.675,20.775);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_227.setTransform(145.625,20.725);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_228.setTransform(138.375,20.225);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgSAEIAAgaIAIAAIAAAaQAAANAKAAQAEAAAEgEQADgEAAgGIAAgZIAIAAIAAAsIgIAAIAAgGQgEAHgJAAQgQAAAAgTg");
	this.shape_229.setTransform(134.425,20.825);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_230.setTransform(129.325,20.775);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AALAgIAAgbQAAgMgKAAQgFAAgDAEQgDADAAAGIAAAaIgIAAIAAg/IAIAAIAAAYQAEgHAIAAQARABAAARIAAAcg");
	this.shape_231.setTransform(124.275,19.85);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_232.setTransform(120.175,20.225);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AgDAgIAAgsIAHAAIAAAsgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_233.setTransform(117.75,19.85);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AAKAXIgEgUIgGgTIAAAAIgEATIgGAUIgKAAIgNgtIAIAAIAFATIAFAUIAFgTIAGgUIAKAAIAFAUIAFATIAAAAIAGgUIAEgTIAIAAIgMAtg");
	this.shape_234.setTransform(113.2,20.775);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_235.setTransform(104.125,20.775);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AgMAcQgFgEgBgGIAIAAQABAEADACQADACADAAQANAAAAgOIAAgFIAAAAQgGAHgHAAQgJAAgFgGQgFgGgBgKQABgLAFgGQAFgGAJAAQAIAAAFAIIAAAAIAAgHIAIAAIAAAqQAAAUgVAAQgHAAgFgEgAgIgUQgDAFAAAHQAAAIADADQAEAFAEAAQAGAAADgFQAEgDAAgIQAAgIgEgEQgDgFgGAAQgEAAgEAFg");
	this.shape_236.setTransform(98.9,21.575);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_237.setTransform(93.975,20.725);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgGAEgDQAEgDAKgBIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgHAEgDQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAAEADACQACACAFAAQAFAAADgDQAEgFAAgHIAAgDIgLACg");
	this.shape_238.setTransform(88.875,20.75);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AALAgIAAgbQAAgMgKAAQgFAAgDAEQgDADAAAGIAAAaIgIAAIAAg/IAIAAIAAAYQAEgHAIAAQARABAAARIAAAcg");
	this.shape_239.setTransform(84.075,19.85);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AgOASQgFgHAAgLQAAgKAFgHQAHgGAIAAQAJAAAFAFQAFAEAAAIIgIAAQAAgFgDgDQgDgDgFAAQgFAAgDAFQgEAFAAAHQAAAIAEAFQADAFAFAAQAFAAADgEQADgDAAgFIAIAAQAAAIgFAFQgFAFgJAAQgIAAgHgGg");
	this.shape_240.setTransform(79.05,20.775);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AgTAfIAAgHIAEABQAFAAACgCQACgCADgHIgSgsIAJAAIAMAjIAAAAIANgjIAJAAIgTAuQgDAJgDADQgEADgHAAIgFAAg");
	this.shape_241.setTransform(71.425,21.625);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgGAEgDQAEgDAKgBIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgHAEgDQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAAEADACQACACAFAAQAFAAADgDQAEgFAAgHIAAgDIgLACg");
	this.shape_242.setTransform(66.825,20.75);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AAYAXIAAgaQAAgNgJAAQgFAAgDAEQgDAEAAAGIAAAZIgHAAIAAgcQAAgFgDgDQgCgDgEAAQgFAAgDAEQgDAEAAAHIAAAYIgIAAIAAgsIAHAAIAAAFIABAAQAEgGAJAAQAJAAADAIQAFgIAKAAQAPAAAAASIAAAbg");
	this.shape_243.setTransform(60.7,20.725);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AgOAaQgGgHAAgKQAAgKAGgHQAFgGAJAAQAIAAAEAHIABAAIAAgZIAIAAIAAA/IgIAAIAAgGQgEAHgJAAQgJAAgFgGgAgIgDQgDADAAAJQAAAIADAEQAEAFAFAAQAFAAAEgFQADgEAAgIQAAgJgDgEQgEgEgFAAQgFAAgEAFg");
	this.shape_244.setTransform(50.925,19.9);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_245.setTransform(45.975,20.725);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgGAEgDQAEgDAKgBIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgHAEgDQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAAEADACQACACAFAAQAFAAADgDQAEgFAAgHIAAgDIgLACg");
	this.shape_246.setTransform(40.875,20.75);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AgUAfIAAgCQAAgJADgFQAEgHALgGQAHgDADgDQADgDAAgGQAAgEgDgDQgDgCgFAAQgKgBAAAMIgJAAQABgJAFgFQAFgFAIAAQAJAAAGAEQAEAGAAAHQABAIgFAEQgDADgJAFIgLAJQgDAEABAEIAfAAIAAAHg");
	this.shape_247.setTransform(32.9,19.95);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AgUAfIAAgCQAAgJAEgFQADgHALgGQAHgDADgDQADgDAAgGQAAgEgDgDQgDgCgFAAQgKgBAAAMIgJAAQAAgJAGgFQAFgFAIAAQAJAAAGAEQAEAGAAAHQAAAIgEAEQgEADgIAFIgLAJQgCAEAAAEIAfAAIAAAHg");
	this.shape_248.setTransform(27.85,19.95);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgQAmIAahKIAHAAIgaBKg");
	this.shape_249.setTransform(23.2,20.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AgOAaQgGgFAAgJIAJAAQAAAMALAAQAGAAADgCQAEgDAAgFQAAgLgOAAIgCAAIAAgGIACAAQAFAAAEgDQAEgDAAgEQAAgFgEgDQgDgDgFAAQgLAAAAAMIgJAAQABgIAFgGQAGgFAIAAQAJAAAGAFQAFAEAAAIQAAAKgLAEQAMADAAALQAAAIgGAFQgGAFgJAAQgJAAgFgGg");
	this.shape_250.setTransform(18.7,20.025);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AgQAmIAahKIAHAAIgZBKg");
	this.shape_251.setTransform(14.05,20.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgPAXQgGgIAAgPQAAgOAGgJQAFgIAKAAQALAAAFAIQAGAJAAAOQAAAPgGAIQgFAJgLAAQgKAAgFgJgAgMAAQAAAYAMAAQANAAAAgYQAAgXgNAAQgMAAAAAXg");
	this.shape_252.setTransform(9.575,20.025);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AADAeIAAgrIgNAAIAAgGQAHAAADgDQADgCABgFIAHAAIAAA7g");
	this.shape_253.setTransform(4.025,20.025);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AgEAgIAAgmIgIAAIAAgGIAIAAIAAgGQAAgNAMAAIAFAAIAAAGIgDAAQgHAAAAAIIAAAFIAJAAIAAAGIgJAAIAAAmg");
	this.shape_254.setTransform(217.175,9.275);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_255.setTransform(213.275,10.225);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AgNAUQgFgFAAgHIAIAAQAAAKALAAQAEAAADgCQACgCAAgDQAAgEgDgCIgIgDIgLgCQgFgDAAgHQAAgGAFgEQAFgDAHAAQAIAAAEAEQAFAEAAAHIgIAAQAAgJgJAAQgEAAgCACQgDABAAADQAAAEADABIAHADQAJACADABQAGADAAAHQAAAHgFADQgFAEgJAAQgIAAgFgEg");
	this.shape_256.setTransform(201.275,10.225);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgGAEgEQAEgCAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAADADADQACACAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_257.setTransform(196.575,10.2);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_258.setTransform(184.525,10.225);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_259.setTransform(180.575,9.675);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgGAEgEQAEgCAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAADADADQACACAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_260.setTransform(176.725,10.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAHIABAAQADgHAJAAIADAAIAAAHIgDAAQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_261.setTransform(173.125,10.2);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AgSAEIAAgaIAIAAIAAAaQAAANAKAAQAEAAAEgEQADgEAAgGIAAgZIAIAAIAAAsIgIAAIAAgGQgEAHgJAAQgQAAAAgTg");
	this.shape_262.setTransform(168.625,10.275);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AgOASQgFgHAAgLQAAgKAFgHQAHgGAIAAQAJAAAFAFQAFAEAAAIIgIAAQAAgFgDgDQgDgDgFAAQgFAAgDAFQgEAFAAAHQAAAIAEAFQADAFAFAAQAFAAADgEQADgDAAgFIAIAAQAAAIgFAFQgFAFgJAAQgIAAgHgGg");
	this.shape_263.setTransform(163.65,10.225);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AgNASQgHgHAAgLQAAgKAHgHQAFgGAJAAQAIAAAGAFQAFAEABAIIgIAAQgBgFgDgDQgDgDgFAAQgFAAgDAFQgEAFAAAHQAAAIAEAFQADAFAFAAQAFAAADgEQADgDABgFIAIAAQgBAIgFAFQgGAFgIAAQgJAAgFgGg");
	this.shape_264.setTransform(158.85,10.225);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgGAEgEQAEgCAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAADADADQACACAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_265.setTransform(153.975,10.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AgJAoQAKgTAAgVQAAgUgKgTIAHAAQAMASAAAVQAAAWgMASg");
	this.shape_266.setTransform(143.025,9.825);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AgDAgIAAgbIgXgkIAJAAIAIANIAJARIAKgRIAIgNIAJAAIgXAkIAAAbg");
	this.shape_267.setTransform(139.075,9.3);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AgVAgIAAg/IAVAAQALAAAFAFQAGAGAAAIQAAAJgGAEQgFAFgLABIgNAAIAAAZgAgNAAIANAAQAOAAAAgMQAAgMgOAAIgNAAg");
	this.shape_268.setTransform(133.875,9.3);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AAVAgIgHgTIgbAAIgHATIgJAAIAYg/IAKAAIAZA/gAAMAFIgCgFIgKgZIgJAZIgCAFIAXAAg");
	this.shape_269.setTransform(127.8,9.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AADAoQgLgSgBgWQABgVALgSIAGAAQgJATAAAUQAAAVAJATg");
	this.shape_270.setTransform(123.55,9.825);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AgOAaQgGgHAAgLQAAgJAGgHQAFgHAJABQAIgBAEAIIABAAIAAgYIAIAAIAAA/IgIAAIAAgHQgEAHgJAAQgJAAgFgGgAgIgDQgDAEAAAHQAAAIADAGQAEAEAFAAQAFAAAEgEQADgGAAgIQAAgHgDgEQgEgFgFAAQgFAAgEAFg");
	this.shape_271.setTransform(112.125,9.35);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_272.setTransform(108.65,9.3);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_273.setTransform(105.075,10.225);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_274.setTransform(101.55,9.3);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AgDAgIAAgbIgXgkIAJAAIAIANIAJARIAKgRIAIgNIAJAAIgXAkIAAAbg");
	this.shape_275.setTransform(97.725,9.3);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_276.setTransform(85.175,10.225);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AgMAcQgFgEAAgGIAIAAQAAAEACACQAEACAEAAQAMAAAAgOIAAgFIgBAAQgEAHgIAAQgJAAgFgGQgGgGABgKQgBgLAGgGQAFgGAJAAQAIAAAEAIIABAAIAAgHIAHAAIAAAqQAAAUgTAAQgIAAgFgEgAgHgUQgEAFAAAHQAAAIAEADQACAFAGAAQAFAAAEgFQADgDAAgIQAAgIgDgEQgEgFgFAAQgGAAgCAFg");
	this.shape_277.setTransform(79.95,11.025);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgGAEgEQAEgCAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAADADADQACACAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_278.setTransform(75.075,10.2);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_279.setTransform(71.325,9.675);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_280.setTransform(67.425,10.175);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_281.setTransform(62.325,10.225);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AgOASQgFgHAAgLQAAgKAFgHQAHgGAIAAQAJAAAFAFQAFAEAAAIIgIAAQAAgFgDgDQgDgDgFAAQgFAAgDAFQgEAFAAAHQAAAIAEAFQADAFAFAAQAFAAADgEQADgDAAgFIAIAAQAAAIgFAFQgFAFgJAAQgIAAgHgGg");
	this.shape_282.setTransform(57.45,10.225);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAHIABAAQADgHAJAAIADAAIAAAHIgDAAQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_283.setTransform(53.725,10.2);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_284.setTransform(49.325,10.225);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AgVAgIAAg/IAVAAQALAAAFAFQAGAGAAAIQAAAJgGAEQgFAFgLABIgNAAIAAAZgAgNAAIANAAQAOAAAAgMQAAgMgOAAIgNAAg");
	this.shape_285.setTransform(44.425,9.3);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_286.setTransform(33,9.3);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgGAEgEQAEgCAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAADADADQACACAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_287.setTransform(29.425,10.2);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AgSAEIAAgaIAIAAIAAAaQAAANAKAAQAEAAAEgEQADgEAAgGIAAgZIAIAAIAAAsIgIAAIAAgGQgEAHgJAAQgQAAAAgTg");
	this.shape_288.setTransform(24.575,10.275);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_289.setTransform(19.475,10.175);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_290.setTransform(14.325,10.175);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AAVAgIgHgTIgbAAIgHATIgJAAIAYg/IALAAIAYA/gAALAFIgCgFIgJgZIgJAZIgBAFIAVAAg");
	this.shape_291.setTransform(8.7,9.3);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AAAAEIgFALIgGgFIAJgJIgMgBIACgHIAKAFIAAgMIAGAAIgCAMIALgFIADAHIgMABIAIAJIgGAFg");
	this.shape_292.setTransform(3.85,7.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LEGAL, new cjs.Rectangle(0,0,220.6,80.9), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgQARQgHgHAAgKQAAgJAHgGQAHgIAJAAQAKAAAHAIQAHAGAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape.setTransform(310.85,49.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLBKQgMgJAAgUIAAg7IgZAAIAAgfIAZAAIAAglIAmAAIAAAlIAiAAIAAAfIgiAAIAAApQAAANADAFQADAGAMAAQAMAAAEgEIAAAhQgLADgQAAQgVABgMgKg");
	this.shape_1.setTransform(301.525,43.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSBfIAAh+IAmAAIAAB+gAgPg3QgHgGAAgKQAAgJAHgGQAHgIAIABQAJgBAHAIQAHAGAAAJQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
	this.shape_2.setTransform(293.075,42.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1AxIAYgaQAMAOAPAAQARAAAAgJQAAgGgGgDQgIgDgIgBIgTgGQgKgDgHgHQgGgIgBgOQAAgUAQgLQAPgLAVAAQAgAAAPAQIgXAYQgKgLgOAAQgEAAgEADQgEADgBAFQAAAEAFADQAFACAGACIAQADIAQAGQAIAEAEAHQAFAIAAALQAAALgFAJQgGAIgIAFQgJAEgJACQgKACgKAAQghAAgRgRg");
	this.shape_3.setTransform(283.7,45.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxAwQgUgSAAgeQAAgdAUgSQAUgSAdAAQAeAAAUASQAUASAAAdQAAAegUASQgUASgeAAQgdAAgUgSgAgWgWQgIAJAAANQAAAOAIAJQAIAJAOAAQAPAAAIgJQAIgJAAgOQAAgNgIgJQgIgJgPAAQgOAAgIAJg");
	this.shape_4.setTransform(269.775,45.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhEBeIAAi5IAkAAIAAARIABAAQAFgHAKgGQALgHALABQAcAAARARQASATAAAdQAAAcgQASQgQAUgaAAQgbAAgMgQIgBAAIAABIgAgYgyQgIAIAAAPQAAAOAIAJQAJAIAOAAQAOAAAIgIQAIgJAAgOQAAgPgIgIQgIgJgOAAQgOAAgJAJg");
	this.shape_5.setTransform(254.125,48.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgsAwQgUgSAAgeQAAgdAUgSQAUgSAdAAQAcAAAQASQAQASAAAdIAAAMIhaAAQACAMAIAGQAIAHAKAAQARAAALgQIAcAUQgKAMgOAHQgOAGgQAAQgdAAgUgSgAAagNQAAgKgHgHQgHgHgKAAQgMAAgHAHQgHAHgBAKIAzAAIAAAAg");
	this.shape_6.setTransform(238.075,45.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhUBcIAAi3IA9AAQAXAAASAFQAUAFAPAKQAPAMAIARQAJATAAAXQAAAdgOAVQgPAVgYAKQgWALgbAAgAgrA2IAVAAQBBAAAAg3QAAgagSgNQgSgOgaAAIgYAAg");
	this.shape_7.setTransform(221.25,42.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWBkIAAhfIgaAAIAAgfIAaAAIAAgWQAAgLACgJQABgIAGgIQAFgHAIgEQALgEAPAAQAOAAAJACIgBAhQgIgCgGAAQgKAAgEAEQgEAEAAAMIAAAUIAcAAIAAAfIgcAAIAABfg");
	this.shape_8.setTransform(198.7,41.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgxAwQgUgSAAgeQAAgdAUgSQAUgSAdAAQAeAAAUASQAUASAAAdQAAAegUASQgUASgeAAQgdAAgUgSgAgWgWQgIAJAAANQAAAOAIAJQAIAJAOAAQAPAAAIgJQAIgJAAgOQAAgNgIgJQgIgJgPAAQgOAAgIAJg");
	this.shape_9.setTransform(185.725,45.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag1AxIAYgaQALAOAQAAQARAAAAgJQAAgGgHgDQgGgDgJgBIgUgGQgJgDgHgHQgGgIAAgOQAAgUAPgLQAPgLAWAAQAeAAAQAQIgYAYQgIgLgOAAQgFAAgEADQgFADAAAFQABAEAEADQAFACAGACIARADIAPAGQAIAEAFAHQAEAIAAALQAAALgFAJQgGAIgIAFQgJAEgKACQgJACgKAAQghAAgRgRg");
	this.shape_10.setTransform(164.15,45.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgsAwQgUgSAAgeQAAgdAUgSQAUgSAdAAQAcAAAQASQAQASAAAdIAAAMIhaAAQACAMAIAGQAIAHAKAAQARAAALgQIAcAUQgKAMgOAHQgOAGgQAAQgdAAgUgSgAAagNQAAgKgHgHQgHgHgKAAQgMAAgHAHQgHAHgBAKIAzAAIAAAAg");
	this.shape_11.setTransform(150.725,45.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgLBKQgMgJAAgUIAAg7IgZAAIAAgfIAZAAIAAglIAmAAIAAAlIAiAAIAAAfIgiAAIAAApQAAANADAFQADAGAMAAQAMAAAEgEIAAAhQgLADgQAAQgVABgMgKg");
	this.shape_12.setTransform(137.775,43.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgvA4QgNgKAAgTQAAgJAEgHQADgHAEgEQAFgEAIgDIAOgFIARgDIAPgBIAPAAQAAgKgHgGQgIgHgKAAQgRAAgOAPIgVgVQAWgUAhAAQAgAAANAQQANAPAAAiIAAA/IgkAAIAAgQIgBAAQgMATgbAAQgSAAgOgKgAgWAaQAAAHAFADQAGAEAHAAQALAAAJgGQAJgHAAgLIAAgIIgKAAQglAAAAASg");
	this.shape_13.setTransform(125.575,45.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgkAwQgVgSABgeQgBgdAVgSQATgSAdAAQAdAAAQARIgZAbQgHgKgNAAQgNAAgIAJQgIAJAAANQAAAOAIAJQAIAJANAAQAMAAAIgKIAZAbQgQARgdAAQgdAAgTgSg");
	this.shape_14.setTransform(113,45.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSBfIAAh+IAmAAIAAB+gAgPg3QgHgGAAgKQAAgJAHgGQAHgIAIABQAJgBAHAIQAHAGAAAJQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
	this.shape_15.setTransform(102.875,42.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWBkIAAhfIgaAAIAAgfIAaAAIAAgWQAAgLABgJQADgIAFgIQAEgHAKgEQAKgEAPAAQAOAAAJACIgBAhQgIgCgGAAQgJAAgFAEQgEAEAAAMIAAAUIAcAAIAAAfIgcAAIAABfg");
	this.shape_16.setTransform(94.95,41.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSBfIAAh+IAmAAIAAB+gAgPg3QgHgGAAgKQAAgJAHgGQAHgIAIABQAJgBAHAIQAHAGAAAJQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
	this.shape_17.setTransform(86.525,42.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgLBKQgMgJAAgUIAAg7IgZAAIAAgfIAZAAIAAglIAmAAIAAAlIAiAAIAAAfIgiAAIAAApQAAANADAFQADAGAMAAQAMAAAEgEIAAAhQgLADgQAAQgVABgMgKg");
	this.shape_18.setTransform(77.675,43.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgrBBIAAh+IAnAAIAAAVIAAAAQAMgYAYAAQAIAAAEACIAAAjQgJgCgHAAQgLAAgHACQgHADgDAHQgCAGgBAHIgBAQIAAA1g");
	this.shape_19.setTransform(67.875,45.175);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgsAwQgUgSAAgeQAAgdAUgSQAUgSAdAAQAcAAAQASQAQASAAAdIAAAMIhaAAQACAMAIAGQAIAHAKAAQARAAALgQIAcAUQgKAMgOAHQgOAGgQAAQgdAAgUgSgAAagNQAAgKgHgHQgHgHgKAAQgMAAgHAHQgHAHgBAKIAzAAIAAAAg");
	this.shape_20.setTransform(54.625,45.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag2BGQgcgaAAgsQAAgqAcgbQAcgbAqAAQASAAARAHQARAHAKAOIgfAZQgMgPgXAAQgWAAgPARQgPAQAAAZQAAAaAPARQAPAQAVAAQAZAAANgTIAiAZQgLAQgSAIQgSAIgUAAQgqAAgcgbg");
	this.shape_21.setTransform(38.525,42.425);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhIBSQgUgOAAgaQAAgRAMgOQAKgNASgFQgMgMgEgJQgFgIAAgNQAAgXARgMQAQgMAZAAQAWAAAPAMQAPAMAAAWQAAAPgJAMQgKANgPAIIAYAYIASgYIAtAAIgnAzIAqArIgzAAIgPgRQgVAWggAAQgbAAgTgPgAgnAVQgDACgEAFQgDAFgBAHQABAKAHAGQAIAHAJAAQAOAAAOgOIgggjgAgdg8QgFAFAAAIQAAAJAQAOQATgMAAgMQAAgHgEgFQgFgEgIAAQgHAAgGAEg");
	this.shape_22.setTransform(12.35,42.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag1AxIAYgaQAMAOAQAAQAQAAAAgJQAAgGgGgDQgIgDgIgBIgUgGQgJgDgHgHQgHgIAAgOQABgUAPgLQAQgLAUAAQAgAAAPAQIgXAYQgKgLgOAAQgEAAgFADQgDADAAAFQgBAEAFADQAFACAHACIAPADIAQAGQAHAEAGAHQAEAIAAALQAAALgFAJQgFAIgJAFQgIAEgKACQgKACgKAAQghAAgRgRg");
	this.shape_23.setTransform(318.65,15.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAzBcIgQgnIhGAAIgQAnIgtAAIBQi3IAhAAIBQC3gAAVATIgVg4IgXA4IAsAAg");
	this.shape_24.setTransform(303.025,12.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAZBcIglhJIgUAAIAABJIgpAAIAAi3IBHAAQBFAAAAA4QAAAUgKAOQgLAMgTADIAvBOgAgggPIAYAAIALAAIAKgCQAGgCADgFQADgFAAgGQAAgWgeAAIgbAAg");
	this.shape_25.setTransform(285.85,12.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgUBcIAAi3IApAAIAAC3g");
	this.shape_26.setTransform(272.8,12.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgrBBIAAh+IAnAAIAAAVIAAAAQAMgYAYAAQAIAAAEACIAAAjQgJgCgHAAQgLAAgHACQgHADgDAHQgCAGgBAHIgBAQIAAA1g");
	this.shape_27.setTransform(256.575,15.175);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgxAwQgUgSAAgeQAAgdAUgSQAUgSAdAAQAeAAAUASQAUASAAAdQAAAegUASQgUASgeAAQgdAAgUgSgAgWgWQgIAJAAANQAAAOAIAJQAIAJAOAAQAPAAAIgJQAIgJAAgOQAAgNgIgJQgIgJgPAAQgOAAgIAJg");
	this.shape_28.setTransform(242.825,15.325);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgWBkIAAhfIgaAAIAAgfIAaAAIAAgWQAAgLACgJQACgIAEgIQAGgHAIgEQALgEAPAAQAOAAAJACIgCAhQgHgCgFAAQgLAAgEAEQgEAEAAAMIAAAUIAdAAIAAAfIgdAAIAABfg");
	this.shape_29.setTransform(230.35,11.675);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#34B8EB").s().p("AgsAwQgUgSAAgeQAAgdAUgSQAUgSAdAAQAcAAAQASQAQASAAAdIAAAMIhaAAQACAMAIAGQAIAHAKAAQARAAALgQIAcAUQgKAMgOAHQgOAGgQAAQgdAAgUgSgAAagNQAAgKgHgHQgHgHgKAAQgMAAgHAHQgHAHgBAKIAzAAIAAAAg");
	this.shape_30.setTransform(210.225,15.325);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#34B8EB").s().p("AgLBLQgMgKAAgTIAAg8IgZAAIAAgfIAZAAIAAgmIAmAAIAAAmIAiAAIAAAfIgiAAIAAAqQAAAMADAFQADAGAMAAQAMAAAEgEIAAAgQgLAFgQAAQgVAAgMgJg");
	this.shape_31.setTransform(197.275,13.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#34B8EB").s().p("AgvA4QgNgKAAgTQAAgJAEgHQADgHAEgEQAFgEAIgDIAOgFIARgDIAPgBIAPAAQAAgKgHgGQgIgHgKAAQgRAAgOAPIgVgVQAWgUAhAAQAgAAANAQQANAPAAAiIAAA/IgkAAIAAgQIgBAAQgMATgbAAQgSAAgOgKgAgWAaQAAAHAFADQAGAEAHAAQALAAAJgGQAJgHAAgLIAAgIIgKAAQglAAAAASg");
	this.shape_32.setTransform(185.075,15.325);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#34B8EB").s().p("AgrBBIAAh+IAnAAIAAAVIAAAAQAMgYAYAAQAIAAAEACIAAAjQgJgCgHAAQgLAAgHACQgHADgDAHQgCAGgBAHIgBAQIAAA1g");
	this.shape_33.setTransform(173.525,15.175);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#34B8EB").s().p("AhEBfIAAi5IAkAAIAAARIABAAQAFgIAKgHQALgFALAAQAcgBARATQASASAAAdQAAAbgQATQgQAUgaAAQgbAAgMgQIgBAAIAABJgAgYgzQgIAJAAAPQAAAOAIAJQAJAIAOAAQAOAAAIgIQAIgJAAgOQAAgPgIgJQgIgIgOAAQgOAAgJAIg");
	this.shape_34.setTransform(152.325,18.15);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#34B8EB").s().p("AgxAwQgUgSAAgeQAAgdAUgSQAUgSAdAAQAeAAAUASQAUASAAAdQAAAegUASQgUASgeAAQgdAAgUgSgAgWgWQgIAJAAANQAAAOAIAJQAIAJAOAAQAPAAAIgJQAIgJAAgOQAAgNgIgJQgIgJgPAAQgOAAgIAJg");
	this.shape_35.setTransform(135.775,15.325);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#34B8EB").s().p("AgLBLQgMgKAAgTIAAg8IgZAAIAAgfIAZAAIAAgmIAmAAIAAAmIAiAAIAAAfIgiAAIAAAqQAAAMADAFQADAGAMAAQAMAAAEgEIAAAgQgLAFgQAAQgVAAgMgJg");
	this.shape_36.setTransform(122.375,13.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgvA4QgNgKAAgTQAAgJAEgHQADgHAEgEQAFgEAIgDIAOgFIARgDIAPgBIAPAAQAAgKgHgGQgIgHgKAAQgRAAgOAPIgVgVQAWgUAhAAQAgAAANAQQANAPAAAiIAAA/IgkAAIAAgQIgBAAQgMATgbAAQgSAAgOgKgAgWAaQAAAHAFADQAGAEAHAAQALAAAJgGQAJgHAAgLIAAgIIgKAAQglAAAAASg");
	this.shape_37.setTransform(102.525,15.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAWBBIAAg+IAAgIIgCgJQgBgFgCgDQgCgDgEgCQgEgCgGAAQgMAAgFAIQgFAJAAAOIAAA/IgnAAIAAh+IAlAAIAAASIABAAQAEgJAKgGQAJgGANAAQAbAAAKAQQAKAPAAAdIAABFg");
	this.shape_38.setTransform(80.625,15.175);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgSBfIAAh+IAmAAIAAB+gAgPg2QgHgIAAgJQAAgJAHgHQAHgGAIAAQAJAAAHAGQAHAHAAAJQAAAJgHAIQgHAGgJAAQgIAAgHgGg");
	this.shape_39.setTransform(69.775,12.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AARBiIgqhAIgBAAIAABAIgmAAIAAjDIAmAAIAAB3IArgxIAvAAIgyA4IAzBFg");
	this.shape_40.setTransform(52.25,11.825);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgkAwQgVgSAAgeQAAgdAVgSQATgSAdAAQAdAAAQARIgZAbQgHgKgNAAQgNAAgIAJQgIAJAAANQAAAOAIAJQAIAJANAAQAMAAAIgKIAZAbQgQARgdAAQgdAAgTgSg");
	this.shape_41.setTransform(38.55,15.325);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgxAwQgUgSAAgeQAAgdAUgSQAUgSAdAAQAeAAAUASQAUASAAAdQAAAegUASQgUASgeAAQgdAAgUgSgAgWgWQgIAJAAANQAAAOAIAJQAIAJAOAAQAPAAAIgJQAIgJAAgOQAAgNgIgJQgIgJgPAAQgOAAgIAJg");
	this.shape_42.setTransform(23.875,15.325);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("Ag5BcIAAi3IApAAIAACSIBKAAIAAAlg");
	this.shape_43.setTransform(9.825,12.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD, new cjs.Rectangle(0,0,336.7,60), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgwAsIAVgXQALAMAPAAQAPAAAAgIQgBgFgGgDIgNgEIgSgFQgJgDgGgGQgGgIAAgMQAAgTAOgJQAOgKATAAQAcAAAOAPIgVAVQgIgJgNAAQgDAAgFACQgEACABAFQAAAEAEACQAEADAGABIAOADIAPAGQAGADAEAGQAFAHAAAKQAAALgFAIQgEAHgIAEQgIAEgJACQgJACgJAAQgeAAgPgQg");
	this.shape.setTransform(103.2,30.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnArQgTgQAAgbQAAgaATgRQASgQAaAAQAZAAAOAQQAPAQAAAbIAAALIhRAAQACAKAHAGQAHAGAJAAQAPAAALgOIAYASQgIALgNAGQgNAGgOAAQgaAAgSgRgAgPgbQgHAGAAAJIAtAAQABgJgHgGQgGgHgJAAQgKAAgHAHg");
	this.shape_1.setTransform(90.975,30.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKBDQgLgIAAgSIAAg2IgWAAIAAgcIAWAAIAAgiIAiAAIAAAiIAfAAIAAAcIgfAAIAAAmQAAAKADAGQAEAFALAAQAKAAADgDIAAAdQgJAEgPAAQgTAAgLgJg");
	this.shape_2.setTransform(79.2,29.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgqAzQgMgKAAgQQAAgJADgGQADgHAEgDQAEgEAHgDIANgEIAPgDIAOgBIANAAQAAgJgGgGQgHgFgJAAQgPAAgNANIgTgTQATgSAfAAQAdAAAMAOQALAOAAAfIAAA5IghAAIAAgOIAAAAQgLARgZAAQgQAAgMgJgAgUAXQAAAGAFAEQAFADAGAAQALAAAHgGQAJgFgBgLIAAgHIgJAAQghAAAAAQg");
	this.shape_3.setTransform(68.15,30.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXBTIgihCIgSAAIAABCIglAAIAAilIBBAAQA+gBAAAzQAAASgJANQgKALgRADIAqBGgAgdgOIAVAAIAKAAIAJgCQAGgBACgEQAEgFAAgGQAAgUgcAAIgYAAg");
	this.shape_4.setTransform(55.05,27.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKBDQgLgIAAgSIAAg2IgWAAIAAgcIAWAAIAAgiIAiAAIAAAiIAgAAIAAAcIggAAIAAAmQAAAKADAGQAEAFAKAAQALAAAEgDIAAAdQgKAEgPAAQgTAAgLgJg");
	this.shape_5.setTransform(34.75,29.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUA7IAAg4IAAgIIgBgIIgDgHIgGgFQgDgCgGAAQgLAAgEAIQgFAIAAANIAAA5IgjAAIAAhyIAiAAIAAAQIAAAAQAEgIAJgFQAIgGAMAAQAYAAAJAOQAJAOAAAaIAAA/g");
	this.shape_6.setTransform(23.375,30.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnArQgTgQAAgbQAAgaATgRQASgQAaAAQAZAAAOAQQAPAQAAAbIAAALIhRAAQACAKAHAGQAHAGAJAAQAPAAALgOIAYASQgIALgNAGQgNAGgOAAQgaAAgSgRgAgPgbQgHAGAAAJIAtAAQABgJgHgGQgGgHgJAAQgKAAgHAHg");
	this.shape_7.setTransform(9.825,30.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnA7IAAhyIAjAAIAAASIABAAQAKgVAVAAIANABIAAAhQgJgDgHAAQgJAAgHADQgGADgDAFQgCAGgBAGIgBAPIAAAwg");
	this.shape_8.setTransform(-1.2,30.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgoA7IAAhyIAkAAIAAASIAAAAQALgVAWAAIALABIAAAhQgIgDgHAAQgKAAgGADQgGADgDAFQgCAGgBAGIgBAPIAAAwg");
	this.shape_9.setTransform(-10.8,30.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgtAtQgJgOAAgbIAAg+IAjAAIAAA4IAAAIIABAHQABAFACADIAGAEQADACAGAAQALAAAEgHQAFgIAAgNIAAg5IAjAAIAAByIgiAAIAAgQIAAAAQgEAIgJAFQgIAGgMAAQgZAAgIgOg");
	this.shape_10.setTransform(-22.875,30.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgxA/QgZgYAAgnQAAgmAZgZQAZgYAnAAQAQAAAPAGQAPAGAKANIgcAXQgMgOgUAAQgUAAgNAQQgOAPAAAWQAAAXAOAPQANAQATAAQAXAAAMgSIAeAXQgKAOgQAIQgQAHgSAAQgnAAgZgZg");
	this.shape_11.setTransform(-37.475,27.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAXA5IgXhLIgVBLIgkAAIgqhxIAmAAIAXBGIABAAIAThGIAmAAIAVBGIABAAIAWhGIAkAAIgqBxg");
	this.shape_12.setTransform(-62.55,30.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgnArQgTgQAAgbQAAgaATgRQASgQAaAAQAZAAAOAQQAPAQAAAbIAAALIhRAAQACAKAHAGQAHAGAJAAQAPAAALgOIAYASQgIALgNAGQgNAGgOAAQgaAAgSgRgAgPgbQgHAGAAAJIAtAAQABgJgHgGQgGgHgJAAQgKAAgHAHg");
	this.shape_13.setTransform(-79.125,30.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRBWIAAhyIAjAAIAABygAgNgyQgHgGABgIQgBgJAHgGQAFgGAIAAQAIAAAHAGQAFAGAAAJQAAAIgFAGQgHAGgIAAQgIAAgFgGg");
	this.shape_14.setTransform(-88.95,27.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPBTIhDilIAqAAIApBsIAAAAIAqhsIAoAAIhFClg");
	this.shape_15.setTransform(-100.275,27.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// box
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#34B8EB").s().p("A1jEXIAAouMArHAAAIAAIug");
	this.shape_16.setTransform(0,27.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-137.9,0,275.9,55.9), null);


// stage content:
(lib.SB_SeaTimesCD_970x250 = function(mode,startPosition,loop,reversed) {
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

	// RATE 12
	this.instance = new lib.RATE12();
	this.instance.setTransform(250.7,213.8,1.0702,1.0831,0,0,0,113.5,148.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({y:193.8,alpha:1},10,cjs.Ease.quadOut).wait(119));

	// RATE 24
	this.instance_1 = new lib.RATE24();
	this.instance_1.setTransform(250.7,311.3,1.0702,1.0831,0,0,0,113.5,148.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).to({y:291.3,alpha:1},10,cjs.Ease.quadOut).wait(116));

	// rule
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#34B8EB").s().p("AgTNaIAA6zIAnAAIAAazg");
	this.shape.setTransform(264.75,125.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(144));

	// HEAD
	this.instance_2 = new lib.HEAD();
	this.instance_2.setTransform(422.2,261.05,1.0702,1.0831,0,0,0,113.5,148.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({y:241.05,alpha:1},10,cjs.Ease.quadOut).wait(133));

	// SUB
	this.instance_3 = new lib.SUB();
	this.instance_3.setTransform(422.2,336.75,1.0702,1.0831,0,0,0,113.5,148.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({y:316.75,alpha:1},10,cjs.Ease.quadOut).wait(130));

	// CTA
	this.instance_4 = new lib.CTA();
	this.instance_4.setTransform(906.25,132.7,0.7316,0.7316,0,0,0,99.7,25.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(74).to({_off:false},0).to({y:112.7,alpha:1},10,cjs.Ease.quadOut).wait(60));

	// LEGAL
	this.instance_5 = new lib.LEGAL();
	this.instance_5.setTransform(825.9,180.3,1,1,0,0,0,102.9,11);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(77).to({_off:false},0).to({y:160.3,alpha:1},10,cjs.Ease.quadOut).wait(57));

	// LOGO
	this.instance_6 = new lib.SeattleBankhorizwhitevector();
	this.instance_6.setTransform(833.55,50,1.5899,1.5899,0,0,0,64.7,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(144));

	// FDIC
	this.instance_7 = new lib.MemberFDICwhite();
	this.instance_7.setTransform(664.8,227.5,1,1,0,0,0,18.8,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(144));

	// BOX bottom
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2283AE").s().p("A1UTiMAAAgnDMAqpAAAMAAAAnDg");
	this.shape_1.setTransform(833.3,124.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(144));

	// BKGD
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#185975").s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");
	this.shape_2.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(144));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(474.3,125,495.7,125.19999999999999);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 970,
	height: 250,
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