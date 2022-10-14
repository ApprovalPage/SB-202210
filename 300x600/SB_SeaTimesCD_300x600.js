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
	this.shape.graphics.f("#FFFFFF").s().p("AgFAFQgCgCABgDQAAgCADgCQACgCACAAQADAAACACQACACAAACQgBADgDACQgCACgCAAQgDAAgCgCg");
	this.shape.setTransform(106.695,10.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWAVQgHgIACgNQABgNAKgHQAKgJALAAQAMAAAHAIQAGAIgCANIAAADIguAAQAAAIAFAFQAEAFAHAAQALAAAIgIIAHAFQgMAMgOAAQgOAAgGgJgAgJgQQgGAFgCAHIAjAAQABgHgEgFQgEgEgHAAQgHAAgGAEg");
	this.shape_1.setTransform(101.95,8.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKAuIAMhbIAJAAIgMBbg");
	this.shape_2.setTransform(97.375,6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNArQgFgDgCgFIAAAAIgCAKIgJAAIANhbIAJAAIgGArQAKgJALAAQAOAAAHAIQAHAIgCANQgCAMgJAJQgKAJgLAAQgHAAgGgEgAgKACQgGAGgCAJQgBAJAFAGQAEAGAKAAQAIAAAGgGQAHgGABgJQABgJgFgGQgEgGgJAAQgJAAgGAGg");
	this.shape_3.setTransform(91.8882,6.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVAZQgFgEABgIQABgMAOgEQAIgDAOAAIAEAAIAAgCQACgNgOABQgJAAgIAGIgFgGQAKgJANAAQAMAAAFAGQAFAGgBAMIgEAXIAAAKIgKAAIABgIQgIAKgMAAQgJAAgFgFgAgPAMQgBAKAMAAQAHAAAFgFQAFgFABgHIABgEIgJAAQgTAAgCALg");
	this.shape_4.setTransform(84.9096,8.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKAuIAMhbIAJAAIgMBbg");
	this.shape_5.setTransform(80.725,6.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKArIAIg4IAIAAIgHA4gAAAgeQgCgCABgDQAAgDABgCQADgCADAAQAAAAABAAQAAAAABAAQABAAAAABQABAAAAABQACACgBADQAAADgCACQgCACgDAAQgEAAAAgCg");
	this.shape_6.setTransform(77.8313,6.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVAZQgFgEABgIQABgMAOgEQAIgDAOAAIAEAAIAAgCQACgNgOABQgJAAgIAGIgFgGQAKgJANAAQAMAAAFAGQAFAGgBAMIgEAXIAAAKIgKAAIABgIQgIAKgMAAQgJAAgFgFgAgPAMQgBAKAMAAQAHAAAFgFQAFgFABgHIABgEIgJAAQgTAAgCALg");
	this.shape_7.setTransform(72.8096,8.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMAcIgPg4IALAAIAMAsIAWgsIAKAAIgeA4g");
	this.shape_8.setTransform(67.3,8.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAZQgFgEABgIQABgMAOgEQAIgDAOAAIAEAAIAAgCQACgNgOABQgJAAgIAGIgFgGQAKgJANAAQAMAAAFAGQAFAGgBAMIgEAXIAAAKIgKAAIABgIQgIAKgMAAQgJAAgFgFgAgPAMQgBAKAMAAQAHAAAFgFQAFgFABgHIABgEIgJAAQgTAAgCALg");
	this.shape_9.setTransform(60.6596,8.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXATIAIgFQAFAHAJAAQAEAAADgCQAFgCABgEQAAgEgDgDIgIgCQgJgDgEgCQgFgDABgIQABgIAHgFQAHgEAHAAQAOAAAEAKIgIAGQgDgIgIABQgFAAgCABQgEADgBAEQAAAFANADQAIACAEACQAFAEgBAIQgCAJgHAFQgHAEgJAAQgOAAgGgLg");
	this.shape_10.setTransform(51.575,8.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AANAdIAEghQACgQgNAAQgQAAgDAVIgEAcIgKAAIAGgqIACgOIAJAAIgBAKIAAAAQADgFAFgDQAFgDAHAAQAKAAAFAGQAFAGgCALIgFAig");
	this.shape_11.setTransform(45.6688,8.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYAWQgHgJACgNQABgNAKgHQAKgJAMAAQANAAAIAJQAHAHgBANQgCANgKAJQgKAIgMAAQgOAAgHgIgAgMgOQgGAGgBAIQgCAJAFAGQAFAGAJAAQAIAAAHgGQAGgGABgJQACgIgFgGQgFgGgJAAQgIAAgHAGg");
	this.shape_12.setTransform(38.8414,8.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgKArIAIg4IAIAAIgHA4gAAAgeQgCgCABgDQAAgDABgCQADgCADAAQAAAAABAAQAAAAABAAQABAAAAABQABAAAAABQACACgBADQAAADgCACQgCACgDAAQgEAAAAgCg");
	this.shape_13.setTransform(34.0313,6.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLAhQgCgFACgKIAFgeIgNAAIABgIIANAAIACgQIAIAAIgCAQIARAAIgCAIIgQAAIgDAcIgBAJQACADAFAAQAEAAAEgBIAAAJQgGABgGAAQgJAAgDgEg");
	this.shape_14.setTransform(30.5,7.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AghArIAMhUIAJAAIgBAIQAKgJALAAQAOAAAHAIQAHAJgCANQgCAMgJAIQgKAJgMAAQgGAAgGgEQgFgDgCgFIAAAAIgGAmgAgIgbQgGAGgCAJQgBAJAFAFQAEAGAJAAQAJAAAGgGQAHgFABgJQABgJgFgGQgEgHgJAAQgJAAgGAHg");
	this.shape_15.setTransform(24.0882,9.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYAWQgHgJACgNQABgNAKgHQAKgJAMAAQANAAAIAJQAHAHgBANQgCANgKAJQgKAIgMAAQgOAAgHgIgAgMgOQgGAGgBAIQgCAJAFAGQAFAGAJAAQAIAAAHgGQAGgGABgJQACgIgFgGQgFgGgJAAQgIAAgHAGg");
	this.shape_16.setTransform(17.0414,8.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgoArIAMhVIAgAAQAQAAAKAKQAOALgDAVQgEAWgQAMQgNAJgPAAgAgdAiIAUAAQAPAAAKgIQALgJADgRQACgQgJgJQgIgIgPAAIgTAAg");
	this.shape_17.setTransform(5.6773,6.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgeAhQgLgNADgUQADgSAOgNQAOgNASAAQAUAAAJANIgKAHQgGgLgOAAQgNAAgLALQgLALgCANQgCAPAIAKQAIALANAAQAPAAAMgMIAGAGQgNAPgUAAQgTAAgLgMg");
	this.shape_18.setTransform(-2.8071,6.875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AghArIAMhUIAJAAIgBAIQAKgJALAAQAOAAAHAIQAHAJgCANQgCAMgJAIQgKAJgMAAQgGAAgGgEQgFgDgCgFIAAAAIgGAmgAgIgbQgGAGgCAJQgBAJAFAFQAEAGAJAAQAJAAAGgGQAHgFABgJQABgJgFgGQgEgHgJAAQgJAAgGAHg");
	this.shape_19.setTransform(-14.8118,9.675);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgfAiQgGgJACgQIAHg0IALAAIgHAzQgFAbAXAAQALAAAHgIQAFgHACgMIAHgzIAKAAIgHA0QgCAQgJAJQgJAKgRAAQgQAAgHgKg");
	this.shape_20.setTransform(-22.15,6.975);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AghArIAMhUIAJAAIgBAIQAKgJALAAQAOAAAHAIQAHAJgCANQgCAMgJAIQgKAJgMAAQgGAAgGgEQgFgDgCgFIAAAAIgGAmgAgIgbQgGAGgCAJQgBAJAFAFQAEAGAJAAQAJAAAGgGQAHgFABgJQABgJgFgGQgEgHgJAAQgJAAgGAHg");
	this.shape_21.setTransform(-34.1618,9.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAfAdIAEghQADgQgOAAQgGAAgFAFQgFAFgBAHIgFAgIgJAAIAFgfQABgJgCgEQgCgFgGAAQgRAAgDAVIgEAcIgKAAIAGgqIACgOIAJAAIgBAKIAAAAQADgFAFgDQAGgDAHAAQALAAAEALQAIgLAMAAQALAAAFAGQAEAGgCAMIgFAhg");
	this.shape_22.setTransform(-42.9295,8.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgXAXQgFgGACgLIAFgiIAJAAIgFAhQgCAPANAAQARAAADgVIAEgbIAKAAIgGAqIgCAOIgJAAIABgKIAAAAQgDAFgFADQgFADgHAAQgLAAgEgGg");
	this.shape_23.setTransform(-51.2187,8.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgfArIAMhVIAaAAQAMAAAHAFQAIAFgCALQgCAPgQAFQAIABAFAFQAFAGgBAIQgCANgMAGQgJAFgNAAgAgTAiIARAAQAHAAAHgEQAHgEABgHQABgJgGgEQgFgDgJAAIgQAAgAgOgGIAOAAQATAAACgOQACgNgTAAIgOAAg");
	this.shape_24.setTransform(-58.5132,6.875);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AghAmQgHgHABgLQADgQAUgIQgJgKABgKQACgJAHgGQAHgFAJAAQAJAAAFAFQAGAFgCAJQgBANgTAJIAPATIAOgTIAMAAIgVAaIARAUIgOAAIgKgMQgMAOgPAAQgLAAgHgHgAgcAUQgBAHAEAEQAEAFAHAAQAKAAALgMIgSgXQgQAJgBAKgAgJggQgEADAAAGQgBAFAFAGIADADIAJgGQAFgEABgGQABgEgDgDQgDgDgEAAQgFAAgEADg");
	this.shape_25.setTransform(-69.9375,6.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgcAmQgHgJACgMQABgNAKgIQAJgIANAAQAMAAAHAJIAAAAIAGgrIAKAAIgNBbIgKAAIACgKIgBAAQgDAFgGADQgGAEgHAAQgMAAgHgJgAgQACQgGAGgBAJQgCAJAFAGQAFAGAJAAQAIAAAHgGQAGgGABgJQACgJgFgGQgFgGgIAAQgJAAgHAGg");
	this.shape_26.setTransform(-81.3222,6.675);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgXAVQgGgIACgNQABgNAKgHQAJgJAMAAQAMAAAHAIQAGAIgCANIAAADIgtAAQgBAIAEAFQAFAFAIAAQAKAAAIgIIAHAFQgLAMgPAAQgNAAgIgJgAgJgQQgFAFgDAHIAjAAQABgHgDgFQgFgEgIAAQgGAAgGAEg");
	this.shape_27.setTransform(-88.7,8.35);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAPAcIgOgYIgVAYIgLAAIAbgdIgQgbIAMAAIALAVIARgVIAMAAIgXAbIATAdg");
	this.shape_28.setTransform(-95.325,8.35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgKArIAIg4IAIAAIgHA4gAAAgeQgCgCABgDQAAgDABgCQADgCADAAQAAAAABAAQAAAAABAAQABAAAAABQABAAAAABQACACgBADQAAADgCACQgCACgDAAQgEAAAAgCg");
	this.shape_29.setTransform(-99.3687,6.875);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AggArIANhVIA0AAIgBAJIgqAAIgFAdIAoAAIgCAIIgnAAIgFAng");
	this.shape_30.setTransform(-103.9,6.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SUB, new cjs.Rectangle(-125.2,0,250.5,16.2), null);


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


(lib.RATE = function(mode,startPosition,loop,reversed) {
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
	this.shape_5.graphics.f("#FFFFFF").s().p("AhWCGQgigfgBgxQAAgWAHgVQAGgUAGgLIAVgiIBHhuIBTAAIhLB0QAMgDAJgBQAuAAAcAfQAcAeAAAtQABAxgjAfQgjAgg0AAQgyAAgkgggAgkAPQgPAOAAAWQAAAWAPAOQAPAPAVAAQAXAAAPgPQAPgOAAgWQAAgWgPgOQgPgPgXAAQgVAAgPAPg");
	this.shape_5.setTransform(-6.45,53.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhNCQQgdgVgKgpIBIgQQACARANALQAMALARAAQAVAAANgOQAOgOAAgVQAAgUgMgNQgMgNgPgDQgPgEgUAAQghgBgiAMIADiyIDEAAIAAA8IiAAAIgCAyQALgDARAAQAyAAAgAcQAfAdAAAxQAAA2gjAfQgiAgg3AAQgqAAgcgWg");
	this.shape_6.setTransform(-33.95,53.8);

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

}).prototype = getMCSymbolPrototype(lib.RATE, new cjs.Rectangle(-130.8,0,261.70000000000005,83), null);


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
	this.shape.setTransform(241.175,64.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAfIAAgHIAEABQAFAAACgCQACgCADgHIgSgsIAJAAIAMAjIAAAAIANgjIAJAAIgTAuQgDAJgDADQgEADgHAAIgFAAg");
	this.shape_1.setTransform(238.075,63.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_2.setTransform(234.9,62.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAgIAAg9IAIAAIAAAGQACgDAEgDQAEgCAEAAQAIAAAFAHQAGAGAAALQAAAKgGAHQgFAGgIAAQgEAAgEgCQgEgCgCgDIAAAXgAgIgUQgEAFAAAIQAAAHAEAFQADAFAFAAQAGAAADgFQADgFAAgHQAAgIgDgEQgDgFgGAAQgFAAgDAEg");
	this.shape_3.setTransform(231.4,63.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUAgIAAg9IAIAAIAAAGQADgDADgDQAEgCAEAAQAIAAAFAHQAFAGABALQgBAKgFAHQgFAGgIAAQgEAAgEgCQgDgCgDgDIAAAXgAgJgUQgDAFAAAIQAAAHADAFQAEAFAFAAQAGAAADgFQADgFABgHQgBgIgDgEQgDgFgGAAQgFAAgEAEg");
	this.shape_4.setTransform(226.25,63.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgGQAAgFAEgEQAEgCAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAAEADACQACACAFAAQAFAAADgDQAEgFAAgHIAAgCIgLABg");
	this.shape_5.setTransform(221.025,62.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTAfIAAgHIAEABQAFAAACgCQACgCADgHIgSgsIAJAAIAMAjIAAAAIANgjIAJAAIgTAuQgDAJgDADQgEADgHAAIgFAAg");
	this.shape_6.setTransform(214.625,63.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgGQAAgFAEgEQAEgCAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAAEADACQACACAFAAQAFAAADgDQAEgFAAgHIAAgCIgLABg");
	this.shape_7.setTransform(210.025,62.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAYAXIAAgaQAAgNgJAAQgFAAgDAEQgDAEAAAGIAAAZIgHAAIAAgcQAAgFgDgDQgCgDgEAAQgFAAgDAEQgDAEAAAHIAAAYIgIAAIAAgsIAHAAIAAAFIABAAQAEgGAJAAQAKAAACAIQAFgIAKAAQAPAAAAASIAAAbg");
	this.shape_8.setTransform(203.9,62.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNAUQgFgFAAgHIAIAAQAAAKALAAQAEAAADgCQACgCAAgDQAAgEgDgCIgIgDIgLgCQgFgDAAgHQAAgGAFgEQAFgDAHAAQAIAAAEAEQAFAEAAAHIgIAAQAAgJgJAAQgEAAgCACQgDABAAADQAAAEADABIAHADQAJACADABQAGADAAAHQAAAHgFADQgFAEgJAAQgIAAgFgEg");
	this.shape_9.setTransform(195.775,62.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_10.setTransform(191.025,62.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_11.setTransform(185.875,62.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_12.setTransform(182.3,62.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_13.setTransform(179.725,62.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_14.setTransform(177.3,62.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOAaQgGgHAAgLQAAgJAGgHQAFgGAJAAQAIAAAEAHIABAAIAAgYIAIAAIAAA/IgIAAIAAgHQgEAHgJAAQgJAAgFgGgAgIgDQgDAEAAAHQAAAJADAFQAEAEAFAAQAFAAAEgEQADgFAAgJQAAgIgDgEQgEgEgFAAQgFAAgEAFg");
	this.shape_15.setTransform(173.475,62.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_16.setTransform(168.525,62.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_17.setTransform(163.375,62.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgOASQgFgHAAgLQAAgKAFgHQAHgGAIAAQAIAAAGAFQAFAEAAAIIgIAAQAAgFgDgDQgDgDgFAAQgFAAgEAFQgDAFAAAHQAAAIADAFQAEAFAFAAQAFAAADgEQADgDAAgFIAIAAQAAAIgFAFQgGAFgIAAQgIAAgHgGg");
	this.shape_18.setTransform(158.45,62.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgOAaQgGgHAAgLQAAgJAGgHQAFgGAJAAQAIAAAEAHIABAAIAAgYIAIAAIAAA/IgIAAIAAgHQgEAHgJAAQgJAAgFgGgAgIgDQgDAEAAAHQAAAJADAFQAEAEAFAAQAFAAAEgEQADgFAAgJQAAgIgDgEQgEgEgFAAQgFAAgEAFg");
	this.shape_19.setTransform(151.275,62.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_20.setTransform(146.325,62.925);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgGQAAgFAEgEQAEgCAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAAEADACQACACAFAAQAFAAADgDQAEgFAAgHIAAgCIgLABg");
	this.shape_21.setTransform(141.225,62.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgNAUQgFgFAAgHIAIAAQAAAKALAAQAEAAADgCQACgCAAgDQAAgEgDgCIgIgDIgLgCQgFgDAAgHQAAgGAFgEQAFgDAHAAQAIAAAEAEQAFAEAAAHIgIAAQAAgJgJAAQgEAAgCACQgDABAAADQAAAEADABIAHADQAJACADABQAGADAAAHQAAAHgFADQgFAEgJAAQgIAAgFgEg");
	this.shape_22.setTransform(134.725,62.975);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAYAXIAAgaQAAgNgJAAQgFAAgDAEQgDAEAAAGIAAAZIgHAAIAAgcQAAgFgDgDQgCgDgEAAQgFAAgDAEQgDAEAAAHIAAAYIgIAAIAAgsIAHAAIAAAFIABAAQAEgGAJAAQAJAAADAIQAFgIAKAAQAPAAAAASIAAAbg");
	this.shape_23.setTransform(128.65,62.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAHIABAAQADgHAJAAIADAAIAAAHIgDAAQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_24.setTransform(123.425,62.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_25.setTransform(119.025,62.975);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_26.setTransform(115.075,62.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_27.setTransform(110.6,62.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgGQAAgFAEgEQAEgCAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAAEADACQACACAFAAQAFAAADgDQAEgFAAgHIAAgCIgLABg");
	this.shape_28.setTransform(107.025,62.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_29.setTransform(102.225,62.925);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_30.setTransform(97.075,62.975);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_31.setTransform(93.5,62.05);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_32.setTransform(90.925,62.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_33.setTransform(88.5,62.05);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgOAaQgGgHAAgLQAAgJAGgHQAFgGAJAAQAIAAAEAHIABAAIAAgYIAIAAIAAA/IgIAAIAAgHQgEAHgJAAQgJAAgFgGgAgIgDQgDAEAAAHQAAAJADAFQAEAEAFAAQAFAAAEgEQADgFAAgJQAAgIgDgEQgEgEgFAAQgFAAgEAFg");
	this.shape_34.setTransform(84.675,62.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgOAaQgGgHAAgLQAAgJAGgHQAFgGAJAAQAIAAAEAHIABAAIAAgYIAIAAIAAA/IgIAAIAAgHQgEAHgJAAQgJAAgFgGgAgIgDQgDAEAAAHQAAAJADAFQAEAEAFAAQAFAAAEgEQADgFAAgJQAAgIgDgEQgEgEgFAAQgFAAgEAFg");
	this.shape_35.setTransform(79.525,62.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAVAgIgHgTIgbAAIgHATIgJAAIAYg/IAKAAIAZA/gAALAGIgBgGIgKgaIgIAaIgCAGIAVAAg");
	this.shape_36.setTransform(74.1,62.05);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_37.setTransform(68.025,64.725);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_38.setTransform(65.95,62.05);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgGQAAgFAEgEQAEgCAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAAEADACQACACAFAAQAFAAADgDQAEgFAAgHIAAgCIgLABg");
	this.shape_39.setTransform(62.375,62.95);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgUAgIAAg9IAIAAIAAAGQACgDAEgDQAEgCAEAAQAIAAAFAHQAGAGAAALQAAAKgGAHQgFAGgIAAQgEAAgEgCQgEgCgCgDIAAAXgAgIgUQgEAFAAAIQAAAHAEAFQADAFAFAAQAGAAADgFQADgFABgHQgBgIgDgEQgDgFgGAAQgFAAgDAEg");
	this.shape_40.setTransform(57.7,63.725);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_41.setTransform(53.9,62.05);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgNASQgHgHAAgLQAAgKAHgHQAFgGAJAAQAIAAAGAFQAFAEABAIIgIAAQgBgFgDgDQgDgDgFAAQgFAAgDAFQgEAFAAAHQAAAIAEAFQADAFAFAAQAFAAADgEQADgDABgFIAIAAQgBAIgFAFQgGAFgIAAQgJAAgFgGg");
	this.shape_42.setTransform(50.4,62.975);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_43.setTransform(45.475,62.925);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_44.setTransform(41.8,62.05);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAHIABAAQADgHAJAAIADAAIAAAHIgDAAQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_45.setTransform(39.375,62.95);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgTAgIAAg9IAIAAIAAAGQABgDAEgDQAEgCADAAQAJAAAGAHQAEAGAAALQAAAKgEAHQgGAGgJAAQgDAAgEgCQgEgCgBgDIAAAXgAgIgUQgEAFAAAIQAAAHAEAFQADAFAFAAQAFAAAEgFQAEgFgBgHQABgIgEgEQgEgFgFAAQgFAAgDAEg");
	this.shape_46.setTransform(35.05,63.725);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_47.setTransform(27.775,62.975);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgOASQgFgHAAgLQAAgKAFgHQAHgGAIAAQAIAAAGAFQAFAEAAAIIgIAAQAAgFgDgDQgDgDgFAAQgFAAgEAFQgDAFAAAHQAAAIADAFQAEAFAFAAQAFAAADgEQADgDAAgFIAIAAQAAAIgFAFQgGAFgIAAQgIAAgHgGg");
	this.shape_48.setTransform(22.9,62.975);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgSAEIAAgaIAIAAIAAAaQAAANAKAAQAEAAAEgEQADgEAAgGIAAgZIAIAAIAAAsIgIAAIAAgGQgEAHgJAAQgQAAAAgTg");
	this.shape_49.setTransform(17.925,63.025);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgOAaQgGgHAAgLQAAgJAGgHQAFgGAJAAQAIAAAEAHIABAAIAAgYIAIAAIAAA/IgIAAIAAgHQgEAHgJAAQgJAAgFgGgAgIgDQgDAEAAAHQAAAJADAFQAEAEAFAAQAFAAAEgEQADgFAAgJQAAgIgDgEQgEgEgFAAQgFAAgEAFg");
	this.shape_50.setTransform(12.625,62.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_51.setTransform(7.725,62.975);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAHIABAAQADgHAJAAIADAAIAAAHIgDAAQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_52.setTransform(3.925,62.95);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgTAfIAAgHIAEABQAFAAACgCQACgCADgHIgSgsIAJAAIAMAjIAAAAIANgjIAJAAIgTAuQgDAJgDADQgEADgHAAIgFAAg");
	this.shape_53.setTransform(240.575,53.275);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgHAEgCQAEgDAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAASIAAAQIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAAEADABQACADAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_54.setTransform(235.975,52.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAYAXIAAgaQAAgNgJAAQgFAAgDAEQgDAEAAAGIAAAZIgHAAIAAgcQAAgFgCgDQgDgDgEAAQgFAAgDAEQgDAEAAAHIAAAYIgIAAIAAgsIAIAAIAAAFIAAAAQAFgGAHAAQALAAACAIQAFgIAJAAQAQAAAAASIAAAbg");
	this.shape_55.setTransform(229.85,52.375);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgNAUQgFgFAAgHIAIAAQAAAKALAAQAEAAADgCQACgCAAgDQAAgEgDgCIgIgDIgLgCQgFgDAAgHQAAgGAFgEQAFgDAHAAQAIAAAEAEQAFAEAAAHIgIAAQAAgJgJAAQgEAAgCACQgDABAAADQAAAEADABIAHADQAJACADABQAGADAAAHQAAAHgFADQgFAEgJAAQgIAAgFgEg");
	this.shape_56.setTransform(221.375,52.425);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_57.setTransform(216.675,52.425);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_58.setTransform(211.725,52.425);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgTAgIAAg/IAnAAIAAAHIgeAAIAAAWIAcAAIAAAGIgcAAIAAAcg");
	this.shape_59.setTransform(206.95,51.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_60.setTransform(200.725,54.175);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_61.setTransform(198.65,51.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgHAEgCQAEgDAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAASIAAAQIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAAEADABQACADAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_62.setTransform(195.075,52.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AALAXIgGgUIgFgTIAAAAIgEATIgGAUIgLAAIgMgtIAIAAIAFATIAFAUIAFgTIAGgUIAKAAIAFAUIAFATIAAAAIAGgUIAEgTIAIAAIgMAtg");
	this.shape_63.setTransform(189.35,52.425);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgHAEgCQAEgDAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAASIAAAQIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAAEADABQACADAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_64.setTransform(183.425,52.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAHIABAAQADgHAJAAIADAAIAAAHIgDAAQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_65.setTransform(179.825,52.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgOAaQgGgHAAgLQAAgKAGgGQAFgHAJABQAIgBAEAIIABAAIAAgYIAIAAIAAA/IgIAAIAAgHQgEAHgJABQgJgBgFgGgAgIgDQgDAEAAAHQAAAIADAGQAEAEAFAAQAFAAAEgEQADgGAAgIQAAgHgDgEQgEgFgFAAQgFAAgEAFg");
	this.shape_66.setTransform(175.175,51.55);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AALAgIAAgcQAAgLgKAAQgFAAgDADQgDAEAAAGIAAAaIgIAAIAAg/IAIAAIAAAYQAEgGAIgBQARAAAAASIAAAcg");
	this.shape_67.setTransform(170.225,51.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_68.setTransform(166.125,51.875);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_69.setTransform(163.7,51.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAKAXIgFgUIgEgTIgBAAIgEATIgFAUIgMAAIgMgtIAIAAIAFATIAFAUIAGgTIAEgUIALAAIAFAUIAFATIABAAIAEgUIAFgTIAIAAIgMAtg");
	this.shape_70.setTransform(159.15,52.425);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgTAfIAAgHIAEABQAFAAACgCQACgCADgHIgSgsIAJAAIAMAjIAAAAIANgjIAJAAIgTAuQgDAJgDADQgEADgHAAIgFAAg");
	this.shape_71.setTransform(151.225,53.275);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_72.setTransform(148.05,51.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAHIABAAQADgHAJAAIADAAIAAAHIgDAAQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_73.setTransform(145.625,52.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgHAEgCQAEgDAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAASIAAAQIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAAEADABQACADAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_74.setTransform(141.225,52.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_75.setTransform(136.475,52.425);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAHIABAAQADgHAJAAIADAAIAAAHIgDAAQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_76.setTransform(130.275,52.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_77.setTransform(125.825,52.425);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgEAgIAAgmIgIAAIAAgGIAIAAIAAgGQAAgNAMAAIAFAAIAAAGIgDAAQgHAAAAAIIAAAFIAJAAIAAAGIgJAAIAAAmg");
	this.shape_78.setTransform(121.975,51.475);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgOAaQgGgHAAgLQAAgKAGgGQAFgHAJABQAIgBAEAIIABAAIAAgYIAIAAIAAA/IgIAAIAAgHQgEAHgJABQgJgBgFgGgAgIgDQgDAEAAAHQAAAIADAGQAEAEAFAAQAFAAAEgEQADgGAAgIQAAgHgDgEQgEgFgFAAQgFAAgEAFg");
	this.shape_79.setTransform(115.475,51.55);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_80.setTransform(110.575,52.425);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_81.setTransform(107.05,51.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_82.setTransform(104.9,51.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgTAgIAAg9IAIAAIAAAGQACgDADgDQAEgCADAAQAJAAAGAHQAEAGAAALQAAAKgEAHQgGAGgJAAQgDAAgEgCQgDgCgCgDIAAAXgAgJgUQgDAFAAAIQAAAHADAFQAEAFAFAAQAFAAAEgFQAEgFAAgHQAAgIgEgEQgEgFgFAAQgFAAgEAEg");
	this.shape_83.setTransform(101.4,53.175);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgTAgIAAg9IAIAAIAAAGQABgDAEgDQAEgCADAAQAJAAAGAHQAEAGAAALQAAAKgEAHQgGAGgJAAQgDAAgEgCQgEgCgBgDIAAAXgAgIgUQgEAFAAAIQAAAHAEAFQADAFAFAAQAFAAAEgFQAEgFgBgHQABgIgEgEQgEgFgFAAQgFAAgDAEg");
	this.shape_84.setTransform(96.25,53.175);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgHAEgCQAEgDAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAASIAAAQIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAAEADABQACADAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_85.setTransform(91.025,52.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_86.setTransform(83.875,52.425);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgGAfQgDgCgCgEIAAAHIgJAAIAAg/IAJAAIAAAYQAEgIAIABQAKgBAEAHQAFAGABAKQgBALgFAHQgFAGgJABQgDAAgEgCgAgJgDQgDAEAAAHQAAAIADAGQAEAEAFAAQAGAAADgEQAEgGAAgIQAAgHgEgEQgDgFgGAAQgFAAgEAFg");
	this.shape_87.setTransform(79,51.55);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgTAfIAAgHIAEABQAFAAACgCQACgCADgHIgSgsIAJAAIAMAjIAAAAIANgjIAJAAIgTAuQgDAJgDADQgEADgHAAIgFAAg");
	this.shape_88.setTransform(71.775,53.275);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgHAEgCQAEgDAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAASIAAAQIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAAEADABQACADAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_89.setTransform(67.175,52.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAYAXIAAgaQAAgNgJAAQgFAAgDAEQgDAEAAAGIAAAZIgHAAIAAgcQAAgFgDgDQgCgDgEAAQgFAAgDAEQgDAEAAAHIAAAYIgIAAIAAgsIAHAAIAAAFIABAAQAEgGAJAAQAJAAADAIQAFgIAKAAQAPAAAAASIAAAbg");
	this.shape_90.setTransform(61.05,52.375);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgTAfIAAgHIAEABQAFAAACgCQACgCADgHIgSgsIAJAAIAMAjIAAAAIANgjIAJAAIgTAuQgDAJgDADQgEADgHAAIgFAAg");
	this.shape_91.setTransform(52.675,53.275);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_92.setTransform(49.075,51.875);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_93.setTransform(46.65,51.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgHAEgCQAEgDAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAASIAAAQIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAAEADABQACADAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_94.setTransform(43.075,52.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_95.setTransform(38.275,52.375);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_96.setTransform(33.175,52.425);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgVAgIAAg/IAVAAQALAAAFAFQAGAGAAAIQAAAJgGAFQgFAEgLAAIgNAAIAAAagAgNAAIANAAQAOAAAAgMQAAgMgOAAIgNAAg");
	this.shape_97.setTransform(28.275,51.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_98.setTransform(21.825,54.175);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AAYAXIAAgaQAAgNgJAAQgFAAgDAEQgDAEAAAGIAAAZIgHAAIAAgcQAAgFgDgDQgCgDgEAAQgFAAgDAEQgDAEAAAHIAAAYIgIAAIAAgsIAHAAIAAAFIABAAQAEgGAJAAQAJAAADAIQAFgIAKAAQAPAAAAASIAAAbg");
	this.shape_99.setTransform(16.95,52.375);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAHIABAAQADgHAJAAIADAAIAAAHIgDAAQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_100.setTransform(11.725,52.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_101.setTransform(7.325,52.425);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_102.setTransform(3.375,51.875);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_103.setTransform(240.225,41.875);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAIIABAAQADgIAJAAIADAAIAAAIIgDgBQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_104.setTransform(236.425,41.85);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_105.setTransform(233.45,40.95);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_106.setTransform(230.875,41.325);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_107.setTransform(226.975,41.825);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_108.setTransform(221.875,41.875);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAIIABAAQADgIAJAAIADAAIAAAIIgDgBQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_109.setTransform(215.075,41.85);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_110.setTransform(210.625,41.875);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgEAgIAAgmIgIAAIAAgGIAIAAIAAgGQAAgNAMAAIAFAAIAAAGIgDAAQgHAAAAAIIAAAFIAJAAIAAAGIgJAAIAAAmg");
	this.shape_111.setTransform(206.775,40.925);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_112.setTransform(200.925,41.325);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_113.setTransform(198.5,40.95);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgNAUQgFgFAAgHIAIAAQAAAKALAAQAEAAADgCQACgCAAgDQAAgEgDgCIgIgDIgLgCQgFgDAAgHQAAgGAFgEQAFgDAHAAQAIAAAEAEQAFAEAAAHIgIAAQAAgJgJAAQgEAAgCACQgDABAAADQAAAEADABIAHADQAJACADABQAGADAAAHQAAAHgFADQgFAEgJAAQgIAAgFgEg");
	this.shape_114.setTransform(195.225,41.875);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_115.setTransform(190.475,41.875);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgTAgIAAg9IAIAAIAAAGQACgDADgDQAEgCADAAQAJAAAGAHQAEAGAAALQAAAKgEAHQgGAGgJAAQgDAAgEgCQgDgCgCgDIAAAXgAgJgUQgDAFAAAIQAAAHADAFQAEAFAFAAQAFAAAEgFQAEgFAAgHQAAgIgEgEQgEgFgFAAQgFAAgEAEg");
	this.shape_116.setTransform(185.55,42.625);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_117.setTransform(180.325,41.875);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgOAaQgGgGAAgMQAAgKAGgGQAFgHAJAAQAIAAAEAIIABAAIAAgZIAIAAIAABAIgIAAIAAgHQgEAIgJAAQgJAAgFgHgAgIgDQgDADAAAIQAAAJADAEQAEAFAFAAQAFAAAEgFQADgEAAgJQAAgIgDgDQgEgFgFAAQgFAAgEAFg");
	this.shape_118.setTransform(175.125,41);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_119.setTransform(167.175,41.825);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_120.setTransform(162.025,41.875);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_121.setTransform(153.975,41.825);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_122.setTransform(150.3,40.95);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgHAEgCQAEgEAKgBIAMgBIAAgCQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgFQAFgEAIAAQASAAAAASIAAARIABALIgIAAIAAgHQgFAIgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAADADACQACADAFAAQAFAAADgEQAEgEAAgGIAAgDIgLABg");
	this.shape_123.setTransform(146.725,41.85);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AAYAXIAAgaQAAgNgJAAQgFAAgDAEQgDAEAAAGIAAAZIgHAAIAAgcQAAgFgDgDQgCgDgEAAQgFAAgDAEQgDAEAAAHIAAAYIgIAAIAAgsIAHAAIAAAFIABAAQAFgGAHAAQAKAAADAIQAFgIAKAAQAPAAAAASIAAAbg");
	this.shape_124.setTransform(140.6,41.825);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_125.setTransform(134.225,41.875);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAIIABAAQADgIAJAAIADAAIAAAIIgDgBQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_126.setTransform(130.425,41.85);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_127.setTransform(124.025,41.325);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgNAUQgFgFAAgHIAIAAQAAAKALAAQAEAAADgCQACgCAAgDQAAgEgDgCIgIgDIgLgCQgFgDAAgHQAAgGAFgEQAFgDAHAAQAIAAAEAEQAFAEAAAHIgIAAQAAgJgJAAQgEAAgCACQgDABAAADQAAAEADABIAHADQAJACADABQAGADAAAHQAAAHgFADQgFAEgJAAQgIAAgFgEg");
	this.shape_128.setTransform(120.475,41.875);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_129.setTransform(115.775,41.875);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAIIABAAQADgIAJAAIADAAIAAAIIgDgBQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_130.setTransform(111.975,41.85);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_131.setTransform(107.575,41.875);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_132.setTransform(103.625,41.325);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_133.setTransform(99.725,41.825);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_134.setTransform(96.05,40.95);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgOAaQgGgGAAgMQAAgKAGgGQAFgHAJAAQAIAAAEAIIABAAIAAgZIAIAAIAABAIgIAAIAAgHQgEAIgJAAQgJAAgFgHgAgIgDQgDADAAAIQAAAJADAEQAEAFAFAAQAFAAAEgFQADgEAAgJQAAgIgDgDQgEgFgFAAQgFAAgEAFg");
	this.shape_135.setTransform(89.225,41);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_136.setTransform(84.275,41.825);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgHAEgCQAEgEAKgBIAMgBIAAgCQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgFQAFgEAIAAQASAAAAASIAAARIABALIgIAAIAAgHQgFAIgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAADADACQACADAFAAQAFAAADgEQAEgEAAgGIAAgDIgLABg");
	this.shape_137.setTransform(79.175,41.85);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_138.setTransform(72.85,40.95);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgHAEgCQAEgEAKgBIAMgBIAAgCQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgFQAFgEAIAAQASAAAAASIAAARIABALIgIAAIAAgHQgFAIgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAADADACQACADAFAAQAFAAADgEQAEgEAAgGIAAgDIgLABg");
	this.shape_139.setTransform(69.275,41.85);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgUAgIAAg9IAJAAIAAAGQACgDADgDQAEgCADAAQAJAAAGAHQAEAGABALQgBAKgEAHQgGAGgJAAQgDAAgEgCQgDgCgCgDIAAAXgAgJgUQgDAFAAAIQAAAHADAFQAEAFAFAAQAGAAADgFQAEgFAAgHQAAgIgEgEQgDgFgGAAQgFAAgEAEg");
	this.shape_140.setTransform(64.6,42.625);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_141.setTransform(60.8,40.95);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgNASQgHgHABgLQgBgKAHgHQAFgGAJAAQAIAAAGAFQAFAEAAAIIgHAAQgBgFgDgDQgDgDgFAAQgFAAgEAFQgDAFAAAHQAAAIADAFQAEAFAFAAQAFAAADgEQADgDABgFIAHAAQAAAIgFAFQgGAFgIAAQgJAAgFgGg");
	this.shape_142.setTransform(57.3,41.875);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_143.setTransform(52.375,41.825);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_144.setTransform(48.7,40.95);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAIIABAAQADgIAJAAIADAAIAAAIIgDgBQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_145.setTransform(46.275,41.85);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgUAgIAAg9IAIAAIAAAGQACgDAEgDQAEgCAEAAQAIAAAFAHQAGAGAAALQAAAKgGAHQgFAGgIAAQgEAAgEgCQgEgCgCgDIAAAXgAgIgUQgEAFAAAIQAAAHAEAFQADAFAFAAQAGAAADgFQADgFABgHQgBgIgDgEQgDgFgGAAQgFAAgDAEg");
	this.shape_146.setTransform(41.95,42.625);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_147.setTransform(35.15,40.95);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_148.setTransform(33,40.95);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgHAEgCQAEgEAKgBIAMgBIAAgCQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgFQAFgEAIAAQASAAAAASIAAARIABALIgIAAIAAgHQgFAIgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAADADACQACADAFAAQAFAAADgEQAEgEAAgGIAAgDIgLABg");
	this.shape_149.setTransform(29.425,41.85);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_150.setTransform(21.625,41.825);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_151.setTransform(16.525,41.875);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AALAgIAAgcQAAgLgKAAQgFAAgDADQgDAEAAAGIAAAaIgIAAIAAg/IAIAAIAAAYQAEgGAIAAQARAAAAARIAAAcg");
	this.shape_152.setTransform(11.525,40.95);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AAKAXIgEgUIgGgTIAAAAIgEATIgFAUIgLAAIgNgtIAIAAIAFATIAFAUIAGgTIAEgUIALAAIAFAUIAFATIABAAIAEgUIAFgTIAIAAIgMAtg");
	this.shape_153.setTransform(5.45,41.875);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgTAfIAAgHIAEABQAFAAACgCQACgCADgHIgSgsIAJAAIAMAjIAAAAIANgjIAJAAIgTAuQgDAJgDADQgEADgHAAIgFAAg");
	this.shape_154.setTransform(240.825,32.175);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_155.setTransform(237.65,30.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgTAgIAAg9IAIAAIAAAGQACgDADgDQAEgCADAAQAJAAAGAHQAEAGAAALQAAAKgEAHQgGAGgJAAQgDAAgEgCQgDgCgCgDIAAAXgAgJgUQgDAFAAAIQAAAHADAFQAEAFAFAAQAFAAAEgFQAEgFAAgHQAAgIgEgEQgEgFgFAAQgFAAgEAEg");
	this.shape_156.setTransform(234.15,32.075);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgTAgIAAg9IAIAAIAAAGQABgDAEgDQAEgCADAAQAJAAAGAHQAEAGAAALQAAAKgEAHQgGAGgJAAQgDAAgEgCQgEgCgBgDIAAAXgAgIgUQgEAFAAAIQAAAHAEAFQADAFAFAAQAFAAAEgFQAEgFgBgHQABgIgEgEQgEgFgFAAQgFAAgDAEg");
	this.shape_157.setTransform(229,32.075);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgFAEgEQAEgDAKgBIAMgBIAAgCQAAgLgKAAQgJAAgBAJIgIAAQABgHAEgEQAFgEAIAAQASAAAAASIAAARIABALIgIAAIAAgHQgFAIgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAADADACQACADAFAAQAFAAADgDQAEgEAAgHIAAgEIgLACg");
	this.shape_158.setTransform(223.775,31.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgNAUQgFgFAAgHIAIAAQAAAKALAAQAEAAADgCQACgCAAgDQAAgEgDgCIgIgDIgLgCQgFgDAAgHQAAgGAFgEQAFgDAHAAQAIAAAEAEQAFAEAAAHIgIAAQAAgJgJAAQgEAAgCACQgDABAAADQAAAEADABIAHADQAJACADABQAGADAAAHQAAAHgFADQgFAEgJAAQgIAAgFgEg");
	this.shape_159.setTransform(216.075,31.325);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgDAgIAAgaIgXglIAJAAIAIANIAJARIAKgRIAIgNIAJAAIgXAlIAAAag");
	this.shape_160.setTransform(211.125,30.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgVAgIAAg/IAVAAQALAAAFAFQAGAFAAAKQAAAIgGAEQgFAGgLgBIgNAAIAAAagAgNAAIANAAQAOAAAAgLQAAgNgOAAIgNAAg");
	this.shape_161.setTransform(205.925,30.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AAVAgIgHgTIgbAAIgHATIgJAAIAYg/IALAAIAYA/gAALAGIgCgGIgJgaIgJAaIgBAGIAVAAg");
	this.shape_162.setTransform(199.85,30.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_163.setTransform(192.575,33.075);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgDAgIAAgaIgXglIAJAAIAIANIAJARIAKgRIAIgNIAJAAIgXAlIAAAag");
	this.shape_164.setTransform(188.825,30.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgVAgIAAg/IAVAAQALAAAFAFQAGAFAAAKQAAAIgGAEQgFAGgLgBIgNAAIAAAagAgNAAIANAAQAOAAAAgLQAAgNgOAAIgNAAg");
	this.shape_165.setTransform(183.625,30.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AAVAgIgHgTIgbAAIgHATIgJAAIAYg/IALAAIAYA/gAAMAGIgDgGIgJgaIgJAaIgCAGIAXAAg");
	this.shape_166.setTransform(177.55,30.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgOAaQgGgGAAgLQAAgKAGgHQAFgGAJgBQAIABAEAHIABAAIAAgZIAIAAIAAA/IgIAAIAAgGQgEAIgJgBQgJABgFgHgAgIgDQgDADAAAJQAAAHADAFQAEAFAFAAQAFAAAEgFQADgFAAgHQAAgIgDgFQgEgEgFAAQgFAAgEAFg");
	this.shape_167.setTransform(168.525,30.45);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_168.setTransform(163.625,31.325);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgNAUQgFgFAAgHIAIAAQAAAKALAAQAEAAADgCQACgCAAgDQAAgEgDgCIgIgDIgLgCQgFgDAAgHQAAgGAFgEQAFgDAHAAQAIAAAEAEQAFAEAAAHIgIAAQAAgJgJAAQgEAAgCACQgDABAAADQAAAEADABIAHADQAJACADABQAGADAAAHQAAAHgFADQgFAEgJAAQgIAAgFgEg");
	this.shape_169.setTransform(158.975,31.325);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_170.setTransform(154.225,31.325);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_171.setTransform(150.65,30.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgNASQgHgHAAgLQAAgKAHgHQAFgGAJAAQAIAAAGAFQAFAEABAIIgIAAQgBgFgDgDQgDgDgFAAQgFAAgDAFQgEAFAAAHQAAAIAEAFQADAFAFAAQAFAAADgEQADgDABgFIAIAAQgBAIgFAFQgGAFgIAAQgJAAgFgGg");
	this.shape_172.setTransform(147.15,31.325);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgNAUQgFgFAAgHIAIAAQAAAKALAAQAEAAADgCQACgCAAgDQAAgEgDgCIgIgDIgLgCQgFgDAAgHQAAgGAFgEQAFgDAHAAQAIAAAEAEQAFAEAAAHIgIAAQAAgJgJAAQgEAAgCACQgDABAAADQAAAEADABIAHADQAJACADABQAGADAAAHQAAAHgFADQgFAEgJAAQgIAAgFgEg");
	this.shape_173.setTransform(142.575,31.325);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgDAgIAAgsIAHAAIAAAsgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_174.setTransform(139.3,30.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgOAaQgGgGAAgLQAAgKAGgHQAFgGAJgBQAIABAEAHIABAAIAAgZIAIAAIAAA/IgIAAIAAgGQgEAIgJgBQgJABgFgHgAgIgDQgDADAAAJQAAAHADAFQAEAFAFAAQAFAAAEgFQADgFAAgHQAAgIgDgFQgEgEgFAAQgFAAgEAFg");
	this.shape_175.setTransform(135.475,30.45);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_176.setTransform(127.275,31.275);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgLAXIAAgsIAHAAIAAAHIABAAQADgIAJAAIADAAIAAAIIgDgBQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_177.setTransform(123.325,31.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgFAEgEQAEgDAKgBIAMgBIAAgCQAAgLgKAAQgJAAgBAJIgIAAQABgHAEgEQAFgEAIAAQASAAAAASIAAARIABALIgIAAIAAgHQgFAIgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAADADACQACADAFAAQAFAAADgDQAEgEAAgHIAAgEIgLACg");
	this.shape_178.setTransform(118.925,31.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_179.setTransform(114.175,31.325);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgNAUQgFgFAAgHIAIAAQAAAKALAAQAEAAADgCQACgCAAgDQAAgEgDgCIgIgDIgLgCQgFgDAAgHQAAgGAFgEQAFgDAHAAQAIAAAEAEQAFAEAAAHIgIAAQAAgJgJAAQgEAAgCACQgDABAAADQAAAEADABIAHADQAJACADABQAGADAAAHQAAAHgFADQgFAEgJAAQgIAAgFgEg");
	this.shape_180.setTransform(106.275,31.325);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_181.setTransform(101.575,31.325);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgOASQgFgHAAgLQAAgKAFgHQAHgGAIAAQAIAAAGAFQAFAEAAAIIgIAAQAAgFgDgDQgDgDgFAAQgFAAgEAFQgDAFAAAHQAAAIADAFQAEAFAFAAQAFAAADgEQADgDAAgFIAIAAQAAAIgFAFQgGAFgIAAQgIAAgHgGg");
	this.shape_182.setTransform(96.7,31.325);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_183.setTransform(91.775,31.275);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgFAEgEQAEgDAKgBIAMgBIAAgCQAAgLgKAAQgJAAgBAJIgIAAQABgHAEgEQAFgEAIAAQASAAAAASIAAARIABALIgIAAIAAgHQgFAIgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAADADACQACADAFAAQAFAAADgDQAEgEAAgHIAAgEIgLACg");
	this.shape_184.setTransform(86.675,31.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_185.setTransform(83.35,30.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgFAEgEQAEgDAKgBIAMgBIAAgCQAAgLgKAAQgJAAgBAJIgIAAQABgHAEgEQAFgEAIAAQASAAAAASIAAARIABALIgIAAIAAgHQgFAIgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAADADACQACADAFAAQAFAAADgDQAEgEAAgHIAAgEIgLACg");
	this.shape_186.setTransform(79.775,31.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgGAeQgEgCgBgDIAAAGIgIAAIAAg/IAIAAIAAAZQADgHAJgBQAJABAGAGQAEAHAAAKQAAALgEAGQgGAHgJgBQgDAAgEgCgAgIgEQgEAFAAAIQAAAHAEAFQADAFAFAAQAFAAAEgFQAEgFgBgHQABgJgEgDQgEgFgFAAQgFAAgDAEg");
	this.shape_187.setTransform(75.1,30.45);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_188.setTransform(68.05,30.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_189.setTransform(65.9,30.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AAVAgIgHgTIgbAAIgHATIgJAAIAYg/IALAAIAYA/gAALAGIgCgGIgJgaIgJAaIgBAGIAVAAg");
	this.shape_190.setTransform(61.8,30.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_191.setTransform(54.525,33.075);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_192.setTransform(50.975,31.275);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_193.setTransform(45.875,31.325);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgTAgIAAg9IAIAAIAAAGQACgDADgDQAEgCADAAQAJAAAGAHQAEAGAAALQAAAKgEAHQgGAGgJAAQgDAAgEgCQgDgCgCgDIAAAXgAgJgUQgDAFAAAIQAAAHADAFQAEAFAFAAQAFAAAEgFQADgFAAgHQAAgIgDgEQgEgFgFAAQgFAAgEAEg");
	this.shape_194.setTransform(41,32.075);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_195.setTransform(35.725,31.325);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_196.setTransform(27.425,31.325);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_197.setTransform(23.425,30.775);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AAMAXIgMgTIgLATIgKAAIARgXIgPgWIAJAAIAKAQIALgQIAJAAIgPAWIARAXg");
	this.shape_198.setTransform(16.675,31.325);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgFAEgEQAEgDAKgBIAMgBIAAgCQAAgLgKAAQgJAAgBAJIgIAAQABgHAEgEQAFgEAIAAQASAAAAASIAAARIABALIgIAAIAAgHQgFAIgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAADADACQACADAFAAQAFAAADgDQAEgEAAgHIAAgEIgLACg");
	this.shape_199.setTransform(12.025,31.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AAYAXIAAgaQAAgNgJAAQgFAAgDAEQgDAEAAAGIAAAZIgHAAIAAgcQAAgFgDgDQgCgDgEAAQgFAAgDAEQgDAEAAAHIAAAYIgIAAIAAgsIAHAAIAAAFIABAAQAEgGAJAAQAKAAACAIQAFgIAKAAQAPAAAAASIAAAbg");
	this.shape_200.setTransform(5.9,31.275);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgPAXQgGgIAAgPQAAgOAGgJQAFgIAKAAQALAAAFAIQAGAJAAAOQAAAPgGAIQgFAJgLAAQgKAAgFgJgAgMAAQAAAYAMAAQANAAAAgYQAAgXgNAAQgMAAAAAXg");
	this.shape_201.setTransform(240.525,20.025);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgPAXQgGgIAAgPQAAgOAGgJQAFgIAKAAQALAAAFAIQAGAJAAAOQAAAPgGAIQgFAJgLAAQgKAAgFgJgAgMAAQAAAYAMAAQANAAAAgYQAAgXgNAAQgMAAAAAXg");
	this.shape_202.setTransform(235.475,20.025);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgPAXQgGgIAAgPQAAgOAGgJQAFgIAKAAQALAAAFAIQAGAJAAAOQAAAPgGAIQgFAJgLAAQgKAAgFgJgAgMAAQAAAYAMAAQANAAAAgYQAAgXgNAAQgMAAAAAXg");
	this.shape_203.setTransform(230.425,20.025);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgEAMIADgMIgDAAIAAgLIAJAAIAAALIgEAMg");
	this.shape_204.setTransform(226.9,23.175);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgPAXQgGgIAAgPQAAgOAGgJQAFgIAKAAQALAAAFAIQAGAJAAAOQAAAPgGAIQgFAJgLAAQgKAAgFgJgAgMAAQAAAYAMAAQANAAAAgYQAAgXgNAAQgMAAAAAXg");
	this.shape_205.setTransform(223.375,20.025);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgUAfIAAgCQAAgJADgFQAEgHALgGQAHgDADgDQADgDAAgGQAAgEgDgDQgDgCgFAAQgKgBAAAMIgJAAQABgJAFgFQAFgFAIAAQAJAAAGAEQAEAGAAAHQABAIgFAEQgDADgJAFIgLAJQgDAEABAEIAfAAIAAAHg");
	this.shape_206.setTransform(218.3,19.95);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgUAfIAAgCQAAgJADgFQAEgHALgGQAHgDADgDQADgDAAgGQAAgEgDgDQgDgCgFAAQgKgBAAAMIgJAAQAAgJAGgFQAFgFAJAAQAIAAAGAEQAEAGAAAHQAAAIgEAEQgEADgIAFIgLAJQgCAEAAAEIAfAAIAAAHg");
	this.shape_207.setTransform(213.25,19.95);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgCAnIAAgIQgTgCAAgTIAJAAQAAANAKACIAAgXQgJgCgDgCQgFgFgBgHQABgIAEgEQAFgEAIgBIAAgHIAFAAIAAAHQARABAAATIgIAAQAAgLgJgCIAAAVQAJACADACQAHAEAAAJQgBAHgFAFQgFAEgIABIAAAIgAADAZQAKgBAAgKQAAgEgCgDIgIgDgAgMgPQABAEACACQACACAFACIAAgTQgJAAgBAJg");
	this.shape_208.setTransform(208.25,20.05);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgOAaQgGgHAAgKQAAgKAGgHQAFgGAJAAQAIAAAEAHIABAAIAAgZIAIAAIAAA/IgIAAIAAgGQgEAHgJAAQgJAAgFgGgAgIgDQgDADAAAJQAAAIADAEQAEAFAFAAQAFAAAEgFQADgEAAgIQAAgJgDgEQgEgEgFAAQgFAAgEAFg");
	this.shape_209.setTransform(199.525,19.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_210.setTransform(194.575,20.725);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgGAEgDQAEgDAKgBIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgHAEgDQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAAEADACQACACAFAAQAFAAADgDQAEgFAAgHIAAgDIgLACg");
	this.shape_211.setTransform(189.475,20.75);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_212.setTransform(181.225,20.725);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgDAgIAAgsIAHAAIAAAsgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_213.setTransform(177.55,19.85);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AAYAXIAAgaQAAgNgJAAQgFAAgDAEQgDAEAAAGIAAAZIgHAAIAAgcQAAgFgCgDQgDgDgEAAQgFAAgDAEQgDAEAAAHIAAAYIgIAAIAAgsIAIAAIAAAFIAAAAQAEgGAIAAQALAAACAIQAFgIAJAAQAQAAAAASIAAAbg");
	this.shape_214.setTransform(172.6,20.725);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgPAXQgGgIAAgPQAAgOAGgJQAFgIAKAAQALAAAFAIQAGAJAAAOQAAAPgGAIQgFAJgLAAQgKAAgFgJgAgMAAQAAAYAMAAQANAAAAgYQAAgXgNAAQgMAAAAAXg");
	this.shape_215.setTransform(162.725,20.025);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgPAXQgGgIAAgPQAAgOAGgJQAFgIAKAAQALAAAFAIQAGAJAAAOQAAAPgGAIQgFAJgLAAQgKAAgFgJgAgMAAQAAAYAMAAQANAAAAgYQAAgXgNAAQgMAAAAAXg");
	this.shape_216.setTransform(157.675,20.025);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgPAXQgGgIAAgPQAAgOAGgJQAFgIAKAAQALAAAFAIQAGAJAAAOQAAAPgGAIQgFAJgLAAQgKAAgFgJgAgMAAQAAAYAMAAQANAAAAgYQAAgXgNAAQgMAAAAAXg");
	this.shape_217.setTransform(152.625,20.025);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AgEAMIADgMIgCAAIAAgLIAIAAIAAALIgFAMg");
	this.shape_218.setTransform(149.1,23.175);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AADAeIAAgrIgNAAIAAgGQAHAAADgDQADgCABgFIAHAAIAAA7g");
	this.shape_219.setTransform(145.075,20.025);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AgCAnIAAgIQgSgCAAgTIAIAAQAAANAKACIAAgXQgIgCgEgCQgFgFAAgHQAAgIAEgEQAFgEAIgBIAAgHIAEAAIAAAHQASABAAATIgIAAQAAgLgKgCIAAAVQAKACAEACQAFAEABAJQAAAHgGAFQgFAEgJABIAAAIgAACAZQALgBAAgKQAAgEgDgDIgIgDgAgLgPQgBAEADACQACACAFACIAAgTQgJAAAAAJg");
	this.shape_220.setTransform(140.55,20.05);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_221.setTransform(133.575,22.525);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_222.setTransform(130.075,20.775);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgOASQgFgHgBgLQABgKAFgHQAHgGAIAAQAIAAAGAFQAFAEABAIIgJAAQAAgFgDgDQgDgDgFAAQgFAAgDAFQgEAFAAAHQAAAIAEAFQADAFAFAAQAFAAADgEQADgDAAgFIAJAAQgBAIgFAFQgGAFgIAAQgIAAgHgGg");
	this.shape_223.setTransform(125.2,20.775);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgDAgIAAgsIAHAAIAAAsgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_224.setTransform(121.75,19.85);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_225.setTransform(119.175,20.225);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_226.setTransform(115.275,20.775);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_227.setTransform(110.225,20.725);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_228.setTransform(102.675,20.225);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgSAEIAAgaIAIAAIAAAaQAAANAKAAQAEAAAEgEQADgEAAgGIAAgZIAIAAIAAAsIgIAAIAAgGQgEAHgJAAQgQAAAAgTg");
	this.shape_229.setTransform(98.725,20.825);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_230.setTransform(93.625,20.775);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AALAgIAAgbQAAgMgKAAQgFAAgDAEQgDADAAAGIAAAaIgIAAIAAg/IAIAAIAAAYQAEgHAIAAQARABAAARIAAAcg");
	this.shape_231.setTransform(88.575,19.85);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_232.setTransform(84.475,20.225);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AgDAgIAAgsIAHAAIAAAsgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_233.setTransform(82.05,19.85);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AALAXIgGgUIgEgTIgBAAIgEATIgGAUIgLAAIgMgtIAIAAIAFATIAFAUIAFgTIAFgUIALAAIAFAUIAFATIAAAAIAGgUIAEgTIAIAAIgMAtg");
	this.shape_234.setTransform(77.5,20.775);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_235.setTransform(68.125,20.775);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AgMAcQgFgEgBgGIAIAAQABAEADACQADACADAAQANAAAAgOIAAgFIAAAAQgGAHgHAAQgJAAgFgGQgFgGgBgKQABgLAFgGQAFgGAJAAQAIAAAFAIIAAAAIAAgHIAIAAIAAAqQAAAUgVAAQgHAAgFgEgAgIgUQgDAFAAAHQAAAIADADQAEAFAEAAQAGAAADgFQAEgDAAgIQAAgIgEgEQgDgFgGAAQgEAAgEAFg");
	this.shape_236.setTransform(62.9,21.575);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_237.setTransform(57.975,20.725);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgGAEgDQAEgDAKgBIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgHAEgDQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAAEADACQACACAFAAQAFAAADgDQAEgFAAgHIAAgDIgLACg");
	this.shape_238.setTransform(52.875,20.75);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AALAgIAAgbQAAgMgKAAQgFAAgDAEQgDADAAAGIAAAaIgIAAIAAg/IAIAAIAAAYQAEgHAIAAQARABAAARIAAAcg");
	this.shape_239.setTransform(48.075,19.85);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AgOASQgFgHAAgLQAAgKAFgHQAHgGAIAAQAJAAAFAFQAFAEAAAIIgIAAQAAgFgDgDQgDgDgFAAQgFAAgDAFQgEAFAAAHQAAAIAEAFQADAFAFAAQAFAAADgEQADgDAAgFIAIAAQAAAIgFAFQgFAFgJAAQgIAAgHgGg");
	this.shape_240.setTransform(43.05,20.775);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AgTAfIAAgHIAEABQAFAAACgCQACgCADgHIgSgsIAJAAIAMAjIAAAAIANgjIAJAAIgTAuQgDAJgDADQgEADgHAAIgFAAg");
	this.shape_241.setTransform(35.125,21.625);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgGAEgDQAEgDAKgBIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgHAEgDQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAAEADACQACACAFAAQAFAAADgDQAEgFAAgHIAAgDIgLACg");
	this.shape_242.setTransform(30.525,20.75);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AAYAXIAAgaQAAgNgJAAQgFAAgDAEQgDAEAAAGIAAAZIgHAAIAAgcQAAgFgCgDQgDgDgEAAQgFAAgDAEQgDAEAAAHIAAAYIgIAAIAAgsIAIAAIAAAFIAAAAQAFgGAHAAQALAAACAIQAFgIAJAAQAQAAAAASIAAAbg");
	this.shape_243.setTransform(24.4,20.725);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AgOAaQgGgHAAgKQAAgKAGgHQAFgGAJAAQAIAAAEAHIABAAIAAgZIAIAAIAAA/IgIAAIAAgGQgEAHgJAAQgJAAgFgGgAgIgDQgDADAAAJQAAAIADAEQAEAFAFAAQAFAAAEgFQADgEAAgIQAAgJgDgEQgEgEgFAAQgFAAgEAFg");
	this.shape_244.setTransform(14.325,19.9);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_245.setTransform(9.375,20.725);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgGAEgDQAEgDAKgBIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgHAEgDQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAAEADACQACACAFAAQAFAAADgDQAEgFAAgHIAAgDIgLACg");
	this.shape_246.setTransform(4.275,20.75);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AgUAfIAAgCQAAgJAEgFQADgGALgHQAHgDACgDQAEgEAAgFQAAgEgDgDQgDgDgFAAQgKAAgBAMIgIAAQAAgJAGgFQAFgFAJAAQAIAAAFAEQAGAFAAAIQgBAHgEAGQgDACgJAFIgLAJQgDADAAAFIAgAAIAAAHg");
	this.shape_247.setTransform(240.4,9.4);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AgUAfIAAgCQAAgJAEgFQADgGALgHQAHgDACgDQAEgEAAgFQAAgEgDgDQgDgDgFAAQgKAAgBAMIgIAAQABgJAFgFQAFgFAJAAQAIAAAFAEQAFAFABAIQAAAHgFAGQgEACgIAFIgLAJQgCADgBAFIAgAAIAAAHg");
	this.shape_248.setTransform(235.35,9.4);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgQAmIAahLIAHAAIgZBLg");
	this.shape_249.setTransform(230.7,9.55);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AAFAeIAAgPIgcAAIAAgIIAZgkIALAAIAAAlIAKAAIAAAHIgKAAIAAAPgAgHgBIgIAJIAUAAIAAgIIAAgWg");
	this.shape_250.setTransform(226.2,9.475);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AADAeIAAgrIgNAAIAAgGQAHAAADgDQADgCABgFIAHAAIAAA7g");
	this.shape_251.setTransform(220.675,9.475);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgQAmIAahLIAHAAIgZBLg");
	this.shape_252.setTransform(216.5,9.55);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AgPAXQgGgIAAgPQAAgOAGgJQAFgIAKAAQALAAAFAIQAGAJAAAOQAAAPgGAIQgFAJgLAAQgKAAgFgJgAgMAAQAAAYAMAAQANAAAAgYQAAgXgNAAQgMAAAAAXg");
	this.shape_253.setTransform(212.025,9.475);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AADAeIAAgrIgNAAIAAgGQAHAAADgDQADgCABgFIAHAAIAAA7g");
	this.shape_254.setTransform(206.475,9.475);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AgEAgIAAgmIgIAAIAAgGIAIAAIAAgGQAAgNAMAAIAFAAIAAAGIgDAAQgHAAAAAIIAAAFIAJAAIAAAGIgJAAIAAAmg");
	this.shape_255.setTransform(198.875,9.275);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_256.setTransform(194.975,10.225);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgNAUQgFgFAAgHIAIAAQAAAKALAAQAEAAADgCQACgCAAgDQAAgEgDgCIgIgDIgLgCQgFgDAAgHQAAgGAFgEQAFgDAHAAQAIAAAEAEQAFAEAAAHIgIAAQAAgJgJAAQgEAAgCACQgDABAAADQAAAEADABIAHADQAJACADABQAGADAAAHQAAAHgFADQgFAEgJAAQgIAAgFgEg");
	this.shape_257.setTransform(186.025,10.225);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgGAEgEQAEgCAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAADADADQACACAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_258.setTransform(181.325,10.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_259.setTransform(172.325,10.225);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_260.setTransform(168.375,9.675);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgGAEgEQAEgCAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAADADADQACACAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_261.setTransform(164.525,10.2);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAHIABAAQADgHAJAAIADAAIAAAHIgDAAQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_262.setTransform(160.925,10.2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AgSAEIAAgaIAIAAIAAAaQAAANAKAAQAEAAAEgEQADgEAAgGIAAgZIAIAAIAAAsIgIAAIAAgGQgEAHgJAAQgQAAAAgTg");
	this.shape_263.setTransform(156.425,10.275);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AgNASQgHgHAAgLQAAgKAHgHQAFgGAJAAQAJAAAFAFQAFAEABAIIgIAAQgBgFgDgDQgDgDgFAAQgFAAgEAFQgDAFAAAHQAAAIADAFQAEAFAFAAQAFAAADgEQADgDABgFIAIAAQgBAIgFAFQgFAFgJAAQgJAAgFgGg");
	this.shape_264.setTransform(151.45,10.225);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AgOASQgFgHAAgLQAAgKAFgHQAHgGAIAAQAIAAAGAFQAFAEAAAIIgIAAQAAgFgDgDQgDgDgFAAQgFAAgDAFQgEAFAAAHQAAAIAEAFQADAFAFAAQAFAAADgEQADgDAAgFIAIAAQAAAIgFAFQgGAFgIAAQgIAAgHgGg");
	this.shape_265.setTransform(146.65,10.225);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgGAEgEQAEgCAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAADADADQACACAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_266.setTransform(141.775,10.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AgJAoQAKgTAAgVQAAgUgKgTIAHAAQAMASAAAVQAAAWgMASg");
	this.shape_267.setTransform(133.875,9.825);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AgDAgIAAgbIgXgkIAJAAIAIANIAJARIAKgRIAIgNIAJAAIgXAkIAAAbg");
	this.shape_268.setTransform(129.925,9.3);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AgVAgIAAg/IAVAAQALAAAFAFQAGAGAAAIQAAAJgGAEQgFAFgLABIgNAAIAAAZgAgNAAIANAAQAOAAAAgMQAAgMgOAAIgNAAg");
	this.shape_269.setTransform(124.725,9.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AAVAgIgHgTIgbAAIgHATIgJAAIAYg/IAKAAIAZA/gAALAFIgBgFIgKgZIgIAZIgCAFIAVAAg");
	this.shape_270.setTransform(118.65,9.3);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AADAoQgLgSAAgWQAAgVALgSIAHAAQgKATAAAUQAAAVAKATg");
	this.shape_271.setTransform(114.4,9.825);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AgOAaQgGgHAAgLQAAgJAGgHQAFgHAJABQAIgBAEAIIABAAIAAgYIAIAAIAAA/IgIAAIAAgHQgEAHgJAAQgJAAgFgGgAgIgDQgDAEAAAHQAAAIADAGQAEAEAFAAQAFAAAEgEQADgGAAgIQAAgHgDgEQgEgFgFAAQgFAAgEAFg");
	this.shape_272.setTransform(106.025,9.35);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_273.setTransform(102.55,9.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_274.setTransform(98.975,10.225);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_275.setTransform(95.45,9.3);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AgDAgIAAgbIgXgkIAJAAIAIANIAJARIAKgRIAIgNIAJAAIgXAkIAAAbg");
	this.shape_276.setTransform(91.625,9.3);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_277.setTransform(82.125,10.225);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AgMAcQgFgEAAgGIAIAAQAAAEACACQAEACADAAQANAAAAgOIAAgFIgBAAQgEAHgIAAQgJAAgFgGQgGgGABgKQgBgLAGgGQAFgGAJAAQAIAAAEAIIABAAIAAgHIAHAAIAAAqQAAAUgUAAQgHAAgFgEgAgIgUQgDAFAAAHQAAAIADADQAEAFAEAAQAGAAADgFQAEgDAAgIQAAgIgEgEQgDgFgGAAQgEAAgEAFg");
	this.shape_278.setTransform(76.9,11.025);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgGAEgEQAEgCAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAADADADQACACAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_279.setTransform(72.025,10.2);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_280.setTransform(68.275,9.675);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_281.setTransform(64.375,10.175);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_282.setTransform(59.275,10.225);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AgOASQgFgHAAgLQAAgKAFgHQAHgGAIAAQAIAAAGAFQAFAEAAAIIgIAAQAAgFgDgDQgDgDgFAAQgFAAgEAFQgDAFAAAHQAAAIADAFQAEAFAFAAQAFAAADgEQADgDAAgFIAIAAQAAAIgFAFQgGAFgIAAQgIAAgHgGg");
	this.shape_283.setTransform(54.4,10.225);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAHIABAAQADgHAJAAIADAAIAAAHIgDAAQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_284.setTransform(50.675,10.2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_285.setTransform(46.275,10.225);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AgVAgIAAg/IAVAAQALAAAFAFQAGAGAAAIQAAAJgGAEQgFAFgLABIgNAAIAAAZgAgNAAIANAAQAOAAAAgMQAAgMgOAAIgNAAg");
	this.shape_286.setTransform(41.375,9.3);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_287.setTransform(33,9.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgGAEgEQAEgCAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAADADADQACACAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_288.setTransform(29.425,10.2);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AgSAEIAAgaIAIAAIAAAaQAAANAKAAQAEAAAEgEQADgEAAgGIAAgZIAIAAIAAAsIgIAAIAAgGQgEAHgJAAQgQAAAAgTg");
	this.shape_289.setTransform(24.575,10.275);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_290.setTransform(19.475,10.175);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_291.setTransform(14.325,10.175);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AAVAgIgHgTIgbAAIgHATIgJAAIAYg/IALAAIAYA/gAALAFIgCgFIgJgZIgJAZIgBAFIAVAAg");
	this.shape_292.setTransform(8.7,9.3);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AAAAEIgFALIgGgFIAJgJIgMgBIACgHIAKAFIAAgMIAGAAIgCAMIALgFIADAHIgMABIAIAJIgGAFg");
	this.shape_293.setTransform(3.85,7.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LEGAL, new cjs.Rectangle(0,0,245.1,70.3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgFAHAAQAHAAAGAFQAGAFgBAHQABAIgGAFQgGAFgHAAQgHAAgFgFg");
	this.shape.setTransform(117.35,39.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIA5QgJgHAAgPIAAgtIgUAAIAAgYIAUAAIAAgdIAcAAIAAAdIAbAAIAAAYIgbAAIAAAfQABAJACAFQACAEAKAAQAJAAADgDIAAAZQgJADgMAAQgQAAgJgHg");
	this.shape_1.setTransform(110.2,34.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOBJIAAhgIAdAAIAABggAgMgqQgEgFAAgIQAAgHAEgFQAGgEAGAAQAHAAAFAEQAFAFABAHQgBAIgFAFQgFAFgHAAQgGAAgGgFg");
	this.shape_2.setTransform(103.7,33.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpAlIASgUQAKALALAAQANAAABgHQgBgEgFgCIgMgEIgPgEQgHgDgFgFQgGgGAAgLQAAgQANgHQAMgJAQAAQAYAAAMAMIgTATQgGgJgLAAQgDAAgEACQgEACABAFQAAADADACQAEACAFABIAMADIAMAFQAGACAEAFQADAHAAAIQAAAJgDAGQgEAHgHADIgPAGQgHABgIAAQgZAAgNgOg");
	this.shape_3.setTransform(96.5,36.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglAlQgQgPAAgWQAAgWAQgOQAPgOAWAAQAXAAAQAOQAPAOAAAWQAAAWgPAPQgQAOgXAAQgWAAgPgOgAgRgRQgGAHAAAKQAAALAGAGQAHAIAKAAQALAAAGgIQAHgGAAgLQAAgKgHgHQgGgHgLABQgKgBgHAHg");
	this.shape_4.setTransform(85.75,36.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag0BIIAAiNIAcAAIAAANIAAAAQAEgHAIgEQAJgEAIgBQAVABAOAOQANAOAAAWQAAAVgMAOQgNAPgUAAQgUAAgJgNIgBAAIAAA4gAgSgmQgGAGAAAMQAAALAGAGQAHAGALAAQAKAAAGgGQAHgGAAgLQAAgMgHgGQgGgHgKAAQgLAAgHAHg");
	this.shape_5.setTransform(73.675,38.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghAlQgQgPAAgWQAAgWAQgOQAPgOAWAAQAVAAANANQAMAOAAAXIAAAJIhFAAQACAJAGAFQAGAFAIAAQANAAAIgMIAVAQQgHAIgLAGQgLAFgMAAQgWAAgPgOgAgMgXQgGAGgBAHIAnAAQAAgHgFgGQgFgFgIgBQgJABgFAFg");
	this.shape_6.setTransform(61.325,36.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhABHIAAiNIAuAAQASAAAOAEQAPAEALAIQAMAIAHAOQAGAPAAARQAAAWgLARQgLAQgSAIQgSAIgUAAgAghAqIAQAAQAyAAAAgqQAAgUgOgLQgOgKgUAAIgSAAg");
	this.shape_7.setTransform(48.425,34.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRBNIAAhJIgUAAIAAgXIAUAAIAAgSQAAgIACgHQABgGAEgGQAEgGAHgDQAHgDAMAAQALAAAHACIgCAZQgFgCgEAAQgIAAgDAEQgEADAAAJIAAAQIAWAAIAAAXIgWAAIAABJg");
	this.shape_8.setTransform(31.025,33.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmAlQgPgPAAgWQAAgWAPgOQAQgOAWAAQAXAAAQAOQAPAOAAAWQAAAWgPAPQgQAOgXAAQgWAAgQgOgAgRgRQgGAHAAAKQAAALAGAGQAHAIAKAAQALAAAGgIQAHgGAAgLQAAgKgHgHQgGgHgLABQgKgBgHAHg");
	this.shape_9.setTransform(21.05,36.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgpAlIASgUQAKALAMAAQANAAgBgHQABgEgGgCIgMgEIgOgEQgIgDgFgFQgGgGABgLQAAgQAMgHQAMgJAPAAQAYAAAMAMIgSATQgHgJgLAAQgCAAgEACQgDACAAAFQAAADADACQAEACAFABIAMADIAMAFQAGACADAFQAEAHABAIQgBAJgEAGQgEAHgGADIgPAGQgHABgHAAQgaAAgNgOg");
	this.shape_10.setTransform(4.45,36.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AghAlQgQgPAAgWQAAgWAQgOQAPgOAWAAQAVAAANANQAMAOAAAXIAAAJIhFAAQACAJAGAFQAGAFAIAAQANAAAIgMIAVAQQgHAIgLAGQgLAFgMAAQgWAAgPgOgAgMgXQgGAGgBAHIAnAAQAAgHgFgGQgFgFgIgBQgJABgFAFg");
	this.shape_11.setTransform(-5.925,36.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIA5QgKgHAAgPIAAgtIgTAAIAAgYIATAAIAAgdIAeAAIAAAdIAaAAIAAAYIgaAAIAAAfQAAAJACAFQADAEAIAAQAKAAADgDIAAAZQgJADgMAAQgQAAgJgHg");
	this.shape_12.setTransform(-15.85,34.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkArQgJgIgBgOQAAgHADgGQADgFADgDQAEgDAFgCIAMgFIAMgBIALgBIAMAAQAAgIgGgFQgFgEgIAAQgNAAgKALIgRgRQARgPAaAAQAYAAAKAMQAKAMAAAaIAAAxIgcAAIAAgNIAAAAQgKAPgUAAQgOAAgLgIgAgRAUQAAAFAEACQAFAEAFAAQAIgBAIgFQAGgEAAgIIAAgHIgHAAQgdAAAAAOg");
	this.shape_13.setTransform(-25.2,36.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgcAlQgPgPAAgWQAAgWAPgOQAQgOAWAAQAWAAAMANIgTAUQgGgGgJAAQgKgBgHAHQgGAHAAAKQAAALAGAGQAHAIAKAAQAIgBAHgHIATAVQgMANgWAAQgWAAgQgOg");
	this.shape_14.setTransform(-34.875,36.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOBJIAAhgIAdAAIAABggAgMgqQgEgFAAgIQAAgHAEgFQAGgEAGAAQAHAAAFAEQAFAFABAHQgBAIgFAFQgFAFgHAAQgGAAgGgFg");
	this.shape_15.setTransform(-42.65,33.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgRBNIAAhJIgUAAIAAgXIAUAAIAAgSQAAgIACgHQABgGAEgGQAEgGAHgDQAHgDAMAAQALAAAHACIgCAZQgFgCgEAAQgIAAgDAEQgEADAAAJIAAAQIAWAAIAAAXIgWAAIAABJg");
	this.shape_16.setTransform(-48.775,33.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOBJIAAhgIAdAAIAABggAgMgqQgEgFAAgIQAAgHAEgFQAGgEAGAAQAHAAAFAEQAFAFABAHQgBAIgFAFQgFAFgHAAQgGAAgGgFg");
	this.shape_17.setTransform(-55.25,33.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgIA5QgKgHAAgPIAAgtIgTAAIAAgYIATAAIAAgdIAdAAIAAAdIAbAAIAAAYIgbAAIAAAfQAAAJADAFQACAEAKAAQAJAAADgDIAAAZQgJADgMAAQgQAAgJgHg");
	this.shape_18.setTransform(-62.05,34.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AghAyIAAhgIAeAAIAAAPIAAAAQAJgSASAAIAKABIAAAcQgHgCgGAAQgIAAgFACQgFACgDAFQgCAFAAAFIgBAMIAAApg");
	this.shape_19.setTransform(-69.575,36.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AghAlQgQgPAAgWQAAgWAQgOQAPgOAWAAQAVAAANANQAMAOAAAXIAAAJIhFAAQACAJAGAFQAGAFAIAAQANAAAIgMIAVAQQgHAIgLAGQgLAFgMAAQgWAAgPgOgAgMgXQgGAGgBAHIAnAAQAAgHgFgGQgFgFgIgBQgJABgFAFg");
	this.shape_20.setTransform(-79.775,36.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgqA2QgVgUAAgiQAAghAVgUQAWgUAgAAQAOAAANAFQANAFAIAKIgYAUQgKgMgRAAQgQAAgMANQgMANAAATQAAAUAMANQALANAQAAQATAAALgQIAaAUQgJAMgOAGQgNAGgQAAQggAAgWgUg");
	this.shape_21.setTransform(-92.125,34.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag4A/QgOgLAAgUQAAgNAJgLQAIgJANgFQgIgJgEgGQgEgHAAgJQAAgSANgJQANgJASAAQARAAAMAIQAMAJAAARQAAAMgIAKQgHAJgMAGIASATIAPgSIAiAAIgeAmIAgAiIgnAAIgMgOQgPARgZAAQgUAAgQgLgAgeAQIgFAFQgDAFAAAFQAAAHAGAFQAFAFAJAAQAJAAALgKIgYgcgAgWguQgEAEABAGQAAAHALALQAPgKAAgJQAAgGgDgDQgEgDgGAAQgGAAgEADg");
	this.shape_22.setTransform(-112.3,34.025);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgoAmIASgUQAIAKAMAAQAOAAAAgHQAAgEgGgDIgLgDIgPgEQgIgCgFgGQgFgGAAgKQgBgRAMgHQAMgJAQAAQAZAAALAMIgSATQgHgJgLAAQgDABgDACQgDACgBADQAAAEAFACQADACAFABIAMADIAMAEQAGADADAFQAFAHAAAIQAAAJgFAGQgDAHgIAEIgNAEQgIACgHAAQgZAAgNgNg");
	this.shape_23.setTransform(119.5,12.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAnBHIgMgeIg2AAIgMAeIgiAAIA9iNIAZAAIA9CNgAAQAOIgQgrIgRArIAhAAg");
	this.shape_24.setTransform(107.475,10.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AATBHIgcg5IgQAAIAAA5IgfAAIAAiNIA3AAQA0AAAAArQAAAPgIALQgIAJgOADIAkA8gAgZgLIATAAIAIgBIAIgBQAEgCADgDQACgEAAgFQAAgQgXAAIgVAAg");
	this.shape_25.setTransform(94.225,10.025);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgOBHIAAiNIAdAAIAACNg");
	this.shape_26.setTransform(84.15,10.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AghAyIAAhgIAeAAIAAAPIAAAAQAJgSASAAIAKABIAAAcQgHgCgGAAQgIAAgFACQgFACgDAFQgCAFAAAFIgBAMIAAApg");
	this.shape_27.setTransform(71.675,12.125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgmAlQgPgOAAgXQAAgWAPgOQAQgOAWAAQAXAAAQAOQAPAOAAAWQAAAXgPAOQgQAOgXAAQgWAAgQgOgAgRgRQgGAHAAAKQAAALAGAHQAHAGAKAAQALAAAGgGQAHgHAAgLQAAgKgHgHQgGgGgLAAQgKAAgHAGg");
	this.shape_28.setTransform(61.1,12.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgRBNIAAhJIgUAAIAAgXIAUAAIAAgSQAAgIACgHQABgGAEgGQAEgGAHgDQAHgDAMAAQALAAAHACIgCAZQgFgCgEAAQgIAAgDAEQgEADAAAJIAAAQIAWAAIAAAXIgWAAIAABJg");
	this.shape_29.setTransform(51.475,9.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#34B8EB").s().p("AghAlQgQgOAAgXQAAgWAQgOQAPgOAWAAQAVAAANANQAMAOAAAXIAAAKIhFAAQACAIAGAFQAGAFAIAAQANAAAIgMIAVAPQgHAKgLAFQgLAFgMAAQgWAAgPgOgAgMgXQgGAFgBAIIAnAAQAAgIgFgFQgFgGgIAAQgJAAgFAGg");
	this.shape_30.setTransform(35.975,12.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#34B8EB").s().p("AgIA5QgJgHAAgPIAAgtIgUAAIAAgYIAUAAIAAgdIAcAAIAAAdIAbAAIAAAYIgbAAIAAAfQABAJACAFQACAEAKAAQAJAAADgDIAAAZQgJADgMAAQgQAAgJgHg");
	this.shape_31.setTransform(26.05,10.925);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#34B8EB").s().p("AgjArQgLgIABgOQgBgHADgFQADgGADgDQAEgDAGgCIAKgFIAOgCIALAAIALgBQAAgHgFgFQgGgEgIgBQgNAAgLAMIgPgQQAQgQAZAAQAZAAAKAMQAJANAAAZIAAAxIgbAAIAAgMIgBAAQgJAOgUAAQgOAAgKgIgAgRAUQAAAFAFADQADADAHAAQAHAAAHgGQAHgEAAgIIAAgHIgIAAQgcAAAAAOg");
	this.shape_32.setTransform(16.7,12.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#34B8EB").s().p("AghAyIAAhgIAeAAIAAAPIAAAAQAJgSASAAIAKABIAAAcQgHgCgGAAQgIAAgFACQgFACgDAFQgCAFAAAFIgBAMIAAApg");
	this.shape_33.setTransform(7.825,12.125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#34B8EB").s().p("Ag0BJIAAiOIAcAAIAAAMIAAAAQAEgFAIgFQAJgFAIAAQAVAAAOAPQANANAAAWQAAAWgMAOQgNAQgUAAQgUgBgJgNIgBAAIAAA5gAgSgnQgGAIAAAKQAAALAGAHQAHAGALAAQAKAAAGgGQAHgHAAgLQAAgKgHgIQgGgGgKAAQgLAAgHAGg");
	this.shape_34.setTransform(-8.525,14.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#34B8EB").s().p("AgmAlQgPgOAAgXQAAgWAPgOQAQgOAWAAQAXAAAQAOQAPAOAAAWQAAAXgPAOQgQAOgXAAQgWAAgQgOgAgRgRQgGAHAAAKQAAALAGAHQAHAGAKAAQALAAAGgGQAHgHAAgLQAAgKgHgHQgGgGgLAAQgKAAgHAGg");
	this.shape_35.setTransform(-21.25,12.25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#34B8EB").s().p("AgIA5QgJgHAAgPIAAgtIgUAAIAAgYIAUAAIAAgdIAcAAIAAAdIAbAAIAAAYIgbAAIAAAfQABAJACAFQACAEAKAAQAJAAADgDIAAAZQgJADgMAAQgQAAgJgHg");
	this.shape_36.setTransform(-31.55,10.925);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgkArQgJgIgBgOQAAgHADgFQADgGADgDQAEgDAFgCIAMgFIAMgCIALAAIAMgBQAAgHgGgFQgFgEgIgBQgNAAgKAMIgRgQQARgQAaAAQAYAAAKAMQAKANAAAZIAAAxIgcAAIAAgMIAAAAQgKAOgUAAQgOAAgLgIgAgRAUQAAAFAEADQAFADAFAAQAIAAAIgGQAGgEAAgIIAAgHIgHAAQgdAAAAAOg");
	this.shape_37.setTransform(-46.8,12.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AARAyIAAgwIAAgGIgBgHQgBgEgBgCIgFgEQgDgBgFAAQgJAAgEAGQgEAHAAAKIAAAxIgeAAIAAhgIAdAAIAAANIABAAQADgHAHgEQAHgFAKAAQAVAAAHAMQAIAMAAAWIAAA1g");
	this.shape_38.setTransform(-63.675,12.125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgOBJIAAhhIAdAAIAABhgAgMgqQgEgFAAgHQAAgHAEgGQAGgEAGAAQAHAAAGAEQAEAGAAAHQAAAHgEAFQgGAFgHAAQgGAAgGgFg");
	this.shape_39.setTransform(-72,9.85);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AANBMIgggxIgBAAIAAAxIgdAAIAAiXIAdAAIAABbIAhglIAkAAIgmArIAnA2g");
	this.shape_40.setTransform(-85.5,9.55);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgcAlQgPgOAAgXQAAgWAPgOQAQgOAWAAQAWAAAMANIgTAVQgGgIgJABQgKAAgHAGQgGAHAAAKQAAALAGAHQAHAGAKAAQAIABAHgIIATAVQgMANgWAAQgWAAgQgOg");
	this.shape_41.setTransform(-96.025,12.25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgmAlQgPgOAAgXQAAgWAPgOQAQgOAWAAQAXAAAQAOQAPAOAAAWQAAAXgPAOQgQAOgXAAQgWAAgQgOgAgRgRQgGAHAAAKQAAALAGAHQAHAGAKAAQALAAAGgGQAHgHAAgLQAAgKgHgHQgGgGgLAAQgKAAgHAGg");
	this.shape_42.setTransform(-107.3,12.25);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgsBHIAAiNIAgAAIAABwIA4AAIAAAdg");
	this.shape_43.setTransform(-118.1,10.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD, new cjs.Rectangle(-130.8,0,261.70000000000005,48), null);


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
	this.shape_16.graphics.f("#34B8EB").s().p("AxVDhIAAnBMAirAAAIAAHBg");
	this.shape_16.setTransform(0,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-111,0,222,45), null);


// stage content:
(lib.SB_SeaTimesCD_300x600 = function(mode,startPosition,loop,reversed) {
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

	// RATE
	this.instance = new lib.RATE();
	this.instance.setTransform(271.45,250.55,1.0702,1.0831,0,0,0,113.5,148.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).to({y:230.55,alpha:1},10,cjs.Ease.quadOut).wait(117));

	// rule
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#34B8EB").s().p("A0TAeIAAg7MAonAAAIAAA7g");
	this.shape.setTransform(150,177.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(144));

	// HEAD
	this.instance_1 = new lib.HEAD();
	this.instance_1.setTransform(271.45,391.55,1.0702,1.0831,0,0,0,113.5,148.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({y:371.55,alpha:1},10,cjs.Ease.quadOut).wait(131));

	// SUB
	this.instance_2 = new lib.SUB();
	this.instance_2.setTransform(271.45,458.25,1.0702,1.0831,0,0,0,113.5,148.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({y:438.25,alpha:1},10,cjs.Ease.quadOut).wait(128));

	// CTA
	this.instance_3 = new lib.CTA();
	this.instance_3.setTransform(222.95,375.95,0.7316,0.7316,0,0,0,99.7,25.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(74).to({_off:false},0).to({y:355.95,alpha:1},10,cjs.Ease.quadOut).wait(60));

	// LEGAL
	this.instance_4 = new lib.LEGAL();
	this.instance_4.setTransform(129.55,545.3,1,1,0,0,0,102.9,11);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(77).to({_off:false},0).to({y:525.3,alpha:1},10,cjs.Ease.quadOut).wait(57));

	// LOGO
	this.instance_5 = new lib.SeattleBankhorizwhitevector();
	this.instance_5.setTransform(151.2,473.6,1.75,1.75,0,0,0,64.7,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(144));

	// FDIC
	this.instance_6 = new lib.MemberFDICwhite();
	this.instance_6.setTransform(273.95,20.5,1,1,0,0,0,18.8,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(144));

	// BKGD
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#185975").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_1.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(144));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,150,304.6);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 300,
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