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
	this.shape_53.setTransform(240.975,53.275);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgHAEgCQAEgDAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAASIAAAQIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAAEADABQACADAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_54.setTransform(236.375,52.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAYAXIAAgaQAAgNgJAAQgFAAgDAEQgDAEAAAGIAAAZIgHAAIAAgcQAAgFgDgDQgCgDgEAAQgFAAgDAEQgDAEAAAHIAAAYIgIAAIAAgsIAHAAIAAAFIABAAQAEgGAJAAQAJAAADAIQAFgIAKAAQAPAAAAASIAAAbg");
	this.shape_55.setTransform(230.25,52.375);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgNAUQgFgFAAgHIAIAAQAAAKALAAQAEAAADgCQACgCAAgDQAAgEgDgCIgIgDIgLgCQgFgDAAgHQAAgGAFgEQAFgDAHAAQAIAAAEAEQAFAEAAAHIgIAAQAAgJgJAAQgEAAgCACQgDABAAADQAAAEADABIAHADQAJACADABQAGADAAAHQAAAHgFADQgFAEgJAAQgIAAgFgEg");
	this.shape_56.setTransform(218.825,52.425);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_57.setTransform(214.125,52.425);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_58.setTransform(209.175,52.425);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgTAgIAAg/IAnAAIAAAHIgfAAIAAAWIAdAAIAAAGIgdAAIAAAcg");
	this.shape_59.setTransform(204.4,51.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_60.setTransform(195.225,54.175);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_61.setTransform(193.15,51.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgHAEgCQAEgDAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAASIAAAQIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAAEADABQACADAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_62.setTransform(189.575,52.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAKAXIgEgUIgGgTIAAAAIgEATIgGAUIgKAAIgNgtIAIAAIAFATIAFAUIAFgTIAGgUIAKAAIAFAUIAFATIAAAAIAGgUIAEgTIAIAAIgMAtg");
	this.shape_63.setTransform(183.85,52.425);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgHAEgCQAEgDAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAASIAAAQIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAAEADABQACADAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_64.setTransform(177.925,52.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAHIABAAQADgHAJAAIADAAIAAAHIgDAAQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_65.setTransform(174.325,52.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgOAaQgGgHAAgLQAAgKAGgGQAFgHAJABQAIgBAEAIIABAAIAAgYIAIAAIAAA/IgIAAIAAgHQgEAHgJABQgJgBgFgGgAgIgDQgDAEAAAHQAAAIADAGQAEAEAFAAQAFAAAEgEQADgGAAgIQAAgHgDgEQgEgFgFAAQgFAAgEAFg");
	this.shape_66.setTransform(169.675,51.55);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AALAgIAAgcQAAgLgKAAQgFAAgDADQgDAEAAAGIAAAaIgIAAIAAg/IAIAAIAAAYQAEgGAIgBQARAAAAASIAAAcg");
	this.shape_67.setTransform(164.725,51.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_68.setTransform(160.625,51.875);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_69.setTransform(158.2,51.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AALAXIgGgUIgEgTIgBAAIgEATIgFAUIgMAAIgMgtIAIAAIAFATIAFAUIAGgTIAEgUIALAAIAFAUIAFATIABAAIAEgUIAFgTIAIAAIgMAtg");
	this.shape_70.setTransform(153.65,52.425);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgTAfIAAgHIAEABQAFAAACgCQACgCADgHIgSgsIAJAAIAMAjIAAAAIANgjIAJAAIgTAuQgDAJgDADQgEADgHAAIgFAAg");
	this.shape_71.setTransform(142.775,53.275);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_72.setTransform(139.6,51.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAHIABAAQADgHAJAAIADAAIAAAHIgDAAQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_73.setTransform(137.175,52.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgHAEgCQAEgDAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAASIAAAQIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAAEADABQACADAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_74.setTransform(132.775,52.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_75.setTransform(128.025,52.425);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAHIABAAQADgHAJAAIADAAIAAAHIgDAAQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_76.setTransform(118.875,52.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_77.setTransform(114.425,52.425);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgEAgIAAgmIgIAAIAAgGIAIAAIAAgGQAAgNAMAAIAFAAIAAAGIgDAAQgHAAAAAIIAAAFIAJAAIAAAGIgJAAIAAAmg");
	this.shape_78.setTransform(110.575,51.475);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgOAaQgGgHAAgLQAAgKAGgGQAFgHAJABQAIgBAEAIIABAAIAAgYIAIAAIAAA/IgIAAIAAgHQgEAHgJABQgJgBgFgGgAgIgDQgDAEAAAHQAAAIADAGQAEAEAFAAQAFAAAEgEQADgGAAgIQAAgHgDgEQgEgFgFAAQgFAAgEAFg");
	this.shape_79.setTransform(101.125,51.55);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_80.setTransform(96.225,52.425);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_81.setTransform(92.7,51.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_82.setTransform(90.55,51.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgUAgIAAg9IAIAAIAAAGQACgDAEgDQAEgCAEAAQAIAAAFAHQAGAGgBALQABAKgGAHQgFAGgIAAQgEAAgEgCQgEgCgCgDIAAAXgAgIgUQgEAFAAAIQAAAHAEAFQADAFAFAAQAFAAAEgFQADgFAAgHQAAgIgDgEQgEgFgFAAQgFAAgDAEg");
	this.shape_83.setTransform(87.05,53.175);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgUAgIAAg9IAIAAIAAAGQACgDAEgDQAEgCAEAAQAIAAAFAHQAGAGAAALQAAAKgGAHQgFAGgIAAQgEAAgEgCQgEgCgCgDIAAAXgAgJgUQgDAFAAAIQAAAHADAFQAEAFAFAAQAGAAADgFQADgFABgHQgBgIgDgEQgDgFgGAAQgFAAgEAEg");
	this.shape_84.setTransform(81.9,53.175);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgHAEgCQAEgDAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAASIAAAQIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAAEADABQACADAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_85.setTransform(76.675,52.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_86.setTransform(66.575,52.425);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgGAfQgDgCgCgEIAAAHIgIAAIAAg/IAIAAIAAAYQADgIAJABQAJgBAGAHQAEAGAAAKQAAALgEAHQgGAGgJABQgDAAgEgCgAgJgDQgDAEAAAHQAAAIADAGQAEAEAFAAQAFAAAEgEQADgGAAgIQAAgHgDgEQgEgFgFAAQgFAAgEAFg");
	this.shape_87.setTransform(61.7,51.55);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgTAfIAAgHIAEABQAFAAACgCQACgCADgHIgSgsIAJAAIAMAjIAAAAIANgjIAJAAIgTAuQgDAJgDADQgEADgHAAIgFAAg");
	this.shape_88.setTransform(51.525,53.275);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgHAEgCQAEgDAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAASIAAAQIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAAEADABQACADAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_89.setTransform(46.925,52.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAYAXIAAgaQAAgNgJAAQgFAAgDAEQgDAEAAAGIAAAZIgHAAIAAgcQAAgFgDgDQgCgDgEAAQgFAAgDAEQgDAEAAAHIAAAYIgIAAIAAgsIAHAAIAAAFIABAAQAEgGAJAAQAJAAADAIQAFgIAKAAQAPAAAAASIAAAbg");
	this.shape_90.setTransform(40.8,52.375);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgTAfIAAgHIAEABQAFAAACgCQACgCADgHIgSgsIAJAAIAMAjIAAAAIANgjIAJAAIgTAuQgDAJgDADQgEADgHAAIgFAAg");
	this.shape_91.setTransform(29.475,53.275);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_92.setTransform(25.875,51.875);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_93.setTransform(23.45,51.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgHAEgCQAEgDAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAASIAAAQIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAAEADABQACADAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_94.setTransform(19.875,52.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_95.setTransform(15.075,52.375);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_96.setTransform(9.975,52.425);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgVAgIAAg/IAVAAQALAAAFAFQAGAGAAAIQAAAJgGAFQgFAEgLAAIgNAAIAAAagAgNAAIANAAQAOAAAAgMQAAgMgOAAIgNAAg");
	this.shape_97.setTransform(5.075,51.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_98.setTransform(241.725,43.625);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AAYAXIAAgaQAAgNgJAAQgFAAgDAEQgDAEAAAGIAAAZIgHAAIAAgcQAAgFgDgDQgCgDgEAAQgFAAgDAEQgDAEAAAHIAAAYIgIAAIAAgsIAHAAIAAAFIABAAQAEgGAJAAQAKAAACAIQAFgIAJAAQAQAAAAASIAAAbg");
	this.shape_99.setTransform(236.85,41.825);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAIIABAAQADgIAJAAIADAAIAAAIIgDgBQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_100.setTransform(231.625,41.85);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_101.setTransform(227.225,41.875);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_102.setTransform(223.275,41.325);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_103.setTransform(216.275,41.875);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAIIABAAQADgIAJAAIADAAIAAAIIgDgBQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_104.setTransform(212.475,41.85);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_105.setTransform(209.5,40.95);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_106.setTransform(206.925,41.325);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_107.setTransform(203.025,41.825);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_108.setTransform(197.925,41.875);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAIIABAAQADgIAJAAIADAAIAAAIIgDgBQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_109.setTransform(190.975,41.85);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_110.setTransform(186.525,41.875);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgEAgIAAgmIgIAAIAAgGIAIAAIAAgGQAAgNAMAAIAFAAIAAAGIgDAAQgHAAAAAIIAAAFIAJAAIAAAGIgJAAIAAAmg");
	this.shape_111.setTransform(182.675,40.925);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_112.setTransform(176.675,41.325);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_113.setTransform(174.25,40.95);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgNAUQgFgFAAgHIAIAAQAAAKALAAQAEAAADgCQACgCAAgDQAAgEgDgCIgIgDIgLgCQgFgDAAgHQAAgGAFgEQAFgDAHAAQAIAAAEAEQAFAEAAAHIgIAAQAAgJgJAAQgEAAgCACQgDABAAADQAAAEADABIAHADQAJACADABQAGADAAAHQAAAHgFADQgFAEgJAAQgIAAgFgEg");
	this.shape_114.setTransform(170.975,41.875);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_115.setTransform(166.225,41.875);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgUAgIAAg9IAIAAIAAAGQACgDAEgDQAEgCAEAAQAIAAAFAHQAGAGgBALQABAKgGAHQgFAGgIAAQgEAAgEgCQgEgCgCgDIAAAXgAgIgUQgEAFAAAIQAAAHAEAFQADAFAFAAQAFAAAEgFQADgFAAgHQAAgIgDgEQgEgFgFAAQgFAAgDAEg");
	this.shape_116.setTransform(161.3,42.625);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_117.setTransform(156.075,41.875);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgOAaQgGgGAAgMQAAgKAGgGQAFgHAJAAQAIAAAEAIIABAAIAAgZIAIAAIAABAIgIAAIAAgHQgEAIgJAAQgJAAgFgHgAgIgDQgDADAAAIQAAAJADAEQAEAFAFAAQAFAAAEgFQADgEAAgJQAAgIgDgDQgEgFgFAAQgFAAgEAFg");
	this.shape_118.setTransform(150.875,41);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_119.setTransform(142.775,41.825);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_120.setTransform(137.625,41.875);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_121.setTransform(129.425,41.825);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_122.setTransform(125.75,40.95);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgHAEgCQAEgEAKgBIAMgBIAAgCQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgFQAFgEAIAAQASAAAAASIAAARIABALIgIAAIAAgHQgFAIgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAADADACQACADAFAAQAFAAADgEQAEgEAAgGIAAgDIgLABg");
	this.shape_123.setTransform(122.175,41.85);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AAYAXIAAgaQAAgNgJAAQgFAAgDAEQgDAEAAAGIAAAZIgHAAIAAgcQAAgFgDgDQgCgDgEAAQgFAAgDAEQgDAEAAAHIAAAYIgIAAIAAgsIAHAAIAAAFIABAAQAEgGAJAAQAJAAADAIQAFgIAKAAQAPAAAAASIAAAbg");
	this.shape_124.setTransform(116.05,41.825);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_125.setTransform(109.675,41.875);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAIIABAAQADgIAJAAIADAAIAAAIIgDgBQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_126.setTransform(105.875,41.85);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_127.setTransform(99.325,41.325);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgNAUQgFgFAAgHIAIAAQAAAKALAAQAEAAADgCQACgCAAgDQAAgEgDgCIgIgDIgLgCQgFgDAAgHQAAgGAFgEQAFgDAHAAQAIAAAEAEQAFAEAAAHIgIAAQAAgJgJAAQgEAAgCACQgDABAAADQAAAEADABIAHADQAJACADABQAGADAAAHQAAAHgFADQgFAEgJAAQgIAAgFgEg");
	this.shape_128.setTransform(95.775,41.875);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_129.setTransform(91.075,41.875);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAIIABAAQADgIAJAAIADAAIAAAIIgDgBQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_130.setTransform(87.275,41.85);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_131.setTransform(82.875,41.875);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_132.setTransform(78.925,41.325);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_133.setTransform(75.025,41.825);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_134.setTransform(71.35,40.95);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgOAaQgGgGAAgMQAAgKAGgGQAFgHAJAAQAIAAAEAIIABAAIAAgZIAIAAIAABAIgIAAIAAgHQgEAIgJAAQgJAAgFgHgAgIgDQgDADAAAIQAAAJADAEQAEAFAFAAQAFAAAEgFQADgEAAgJQAAgIgDgDQgEgFgFAAQgFAAgEAFg");
	this.shape_135.setTransform(64.375,41);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_136.setTransform(59.425,41.825);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgHAEgCQAEgEAKgBIAMgBIAAgCQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgFQAFgEAIAAQASAAAAASIAAARIABALIgIAAIAAgHQgFAIgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAADADACQACADAFAAQAFAAADgEQAEgEAAgGIAAgDIgLABg");
	this.shape_137.setTransform(54.325,41.85);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_138.setTransform(47.85,40.95);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgHAEgCQAEgEAKgBIAMgBIAAgCQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgFQAFgEAIAAQASAAAAASIAAARIABALIgIAAIAAgHQgFAIgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAADADACQACADAFAAQAFAAADgEQAEgEAAgGIAAgDIgLABg");
	this.shape_139.setTransform(44.275,41.85);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgUAgIAAg9IAIAAIAAAGQACgDAEgDQAEgCAEAAQAIAAAFAHQAGAGAAALQAAAKgGAHQgFAGgIAAQgEAAgEgCQgEgCgCgDIAAAXgAgJgUQgDAFAAAIQAAAHADAFQAEAFAFAAQAGAAADgFQADgFABgHQgBgIgDgEQgDgFgGAAQgFAAgEAEg");
	this.shape_140.setTransform(39.6,42.625);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_141.setTransform(35.8,40.95);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgNASQgHgHAAgLQAAgKAHgHQAFgGAJAAQAJAAAFAFQAFAEABAIIgIAAQgBgFgDgDQgDgDgFAAQgFAAgEAFQgDAFAAAHQAAAIADAFQAEAFAFAAQAFAAADgEQADgDABgFIAIAAQgBAIgFAFQgFAFgJAAQgJAAgFgGg");
	this.shape_142.setTransform(32.3,41.875);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_143.setTransform(27.375,41.825);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_144.setTransform(23.7,40.95);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAIIABAAQADgIAJAAIADAAIAAAIIgDgBQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_145.setTransform(21.275,41.85);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgTAgIAAg9IAHAAIAAAGQADgDADgDQAEgCAEAAQAIAAAGAHQAEAGAAALQAAAKgEAHQgGAGgIAAQgEAAgEgCQgDgCgDgDIAAAXgAgIgUQgEAFAAAIQAAAHAEAFQADAFAFAAQAFAAAEgFQAEgFgBgHQABgIgEgEQgEgFgFAAQgFAAgDAEg");
	this.shape_146.setTransform(16.95,42.625);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_147.setTransform(10,40.95);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_148.setTransform(7.85,40.95);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgHAEgCQAEgEAKgBIAMgBIAAgCQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgFQAFgEAIAAQASAAAAASIAAARIABALIgIAAIAAgHQgFAIgKAAQgHAAgFgEgAAAACQgGABgCACQgDACAAADQAAADADACQACADAFAAQAFAAADgEQAEgEAAgGIAAgDIgLABg");
	this.shape_149.setTransform(4.275,41.85);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_150.setTransform(240.325,31.275);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_151.setTransform(235.225,31.325);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AALAgIAAgbQAAgMgKAAQgFAAgDAEQgDADAAAGIAAAaIgIAAIAAg/IAIAAIAAAYQAEgHAIABQARAAAAARIAAAcg");
	this.shape_152.setTransform(230.225,30.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AAKAXIgEgUIgGgTIAAAAIgEATIgFAUIgLAAIgNgtIAIAAIAFATIAFAUIAGgTIAEgUIALAAIAFAUIAFATIABAAIAEgUIAFgTIAIAAIgMAtg");
	this.shape_153.setTransform(224.15,31.325);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgTAfIAAgHIAEABQAFAAACgCQACgCADgHIgSgsIAJAAIAMAjIAAAAIANgjIAJAAIgTAuQgDAJgDADQgEADgHAAIgFAAg");
	this.shape_154.setTransform(215.975,32.175);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_155.setTransform(212.8,30.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgTAgIAAg9IAIAAIAAAGQACgDADgDQAEgCADAAQAJAAAGAHQAEAGAAALQAAAKgEAHQgGAGgJAAQgDAAgEgCQgDgCgCgDIAAAXgAgJgUQgDAFAAAIQAAAHADAFQAEAFAFAAQAFAAAEgFQADgFAAgHQAAgIgDgEQgEgFgFAAQgFAAgEAEg");
	this.shape_156.setTransform(209.3,32.075);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgTAgIAAg9IAHAAIAAAGQADgDADgDQAEgCAEAAQAIAAAGAHQAEAGAAALQAAAKgEAHQgGAGgIAAQgEAAgEgCQgDgCgDgDIAAAXgAgIgUQgEAFAAAIQAAAHAEAFQADAFAFAAQAFAAAEgFQAEgFgBgHQABgIgEgEQgEgFgFAAQgFAAgDAEg");
	this.shape_157.setTransform(204.15,32.075);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgFAEgEQAEgDAKgBIAMgBIAAgCQAAgLgKAAQgJAAgBAJIgIAAQABgHAEgEQAFgEAIAAQASAAAAASIAAARIABALIgIAAIAAgHQgFAIgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAADADACQACADAFAAQAFAAADgDQAEgEAAgHIAAgEIgLACg");
	this.shape_158.setTransform(198.925,31.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgNAUQgFgFAAgHIAIAAQAAAKALAAQAEAAADgCQACgCAAgDQAAgEgDgCIgIgDIgLgCQgFgDAAgHQAAgGAFgEQAFgDAHAAQAIAAAEAEQAFAEAAAHIgIAAQAAgJgJAAQgEAAgCACQgDABAAADQAAAEADABIAHADQAJACADABQAGADAAAHQAAAHgFADQgFAEgJAAQgIAAgFgEg");
	this.shape_159.setTransform(191.825,31.325);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgDAgIAAgaIgXglIAJAAIAIANIAJARIAKgRIAIgNIAJAAIgXAlIAAAag");
	this.shape_160.setTransform(186.875,30.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgVAgIAAg/IAVAAQALAAAFAFQAGAFAAAKQAAAIgGAEQgFAGgLgBIgNAAIAAAagAgNAAIANAAQAOAAAAgLQAAgNgOAAIgNAAg");
	this.shape_161.setTransform(181.675,30.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AAVAgIgHgTIgbAAIgHATIgJAAIAYg/IAKAAIAZA/gAAMAGIgCgGIgKgaIgIAaIgDAGIAXAAg");
	this.shape_162.setTransform(175.6,30.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_163.setTransform(168.925,33.075);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgDAgIAAgaIgXglIAJAAIAIANIAJARIAKgRIAIgNIAJAAIgXAlIAAAag");
	this.shape_164.setTransform(165.175,30.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgVAgIAAg/IAVAAQALAAAFAFQAGAFAAAKQAAAIgGAEQgFAGgLgBIgNAAIAAAagAgNAAIANAAQAOAAAAgLQAAgNgOAAIgNAAg");
	this.shape_165.setTransform(159.975,30.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AAVAgIgHgTIgbAAIgHATIgJAAIAYg/IAKAAIAZA/gAAMAGIgCgGIgKgaIgJAaIgCAGIAXAAg");
	this.shape_166.setTransform(153.9,30.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgOAaQgGgGAAgLQAAgKAGgHQAFgGAJgBQAIABAEAHIABAAIAAgZIAIAAIAAA/IgIAAIAAgGQgEAIgJgBQgJABgFgHgAgIgDQgDADAAAJQAAAHADAFQAEAFAFAAQAFAAAEgFQADgFAAgHQAAgIgDgFQgEgEgFAAQgFAAgEAFg");
	this.shape_167.setTransform(145.475,30.45);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_168.setTransform(140.575,31.325);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgNAUQgFgFAAgHIAIAAQAAAKALAAQAEAAADgCQACgCAAgDQAAgEgDgCIgIgDIgLgCQgFgDAAgHQAAgGAFgEQAFgDAHAAQAIAAAEAEQAFAEAAAHIgIAAQAAgJgJAAQgEAAgCACQgDABAAADQAAAEADABIAHADQAJACADABQAGADAAAHQAAAHgFADQgFAEgJAAQgIAAgFgEg");
	this.shape_169.setTransform(135.925,31.325);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_170.setTransform(131.175,31.325);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_171.setTransform(127.6,30.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgNASQgHgHAAgLQAAgKAHgHQAFgGAJAAQAJAAAFAFQAFAEABAIIgIAAQgBgFgDgDQgDgDgFAAQgFAAgEAFQgDAFAAAHQAAAIADAFQAEAFAFAAQAFAAADgEQADgDABgFIAIAAQgBAIgFAFQgFAFgJAAQgJAAgFgGg");
	this.shape_172.setTransform(124.1,31.325);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgNAUQgFgFAAgHIAIAAQAAAKALAAQAEAAADgCQACgCAAgDQAAgEgDgCIgIgDIgLgCQgFgDAAgHQAAgGAFgEQAFgDAHAAQAIAAAEAEQAFAEAAAHIgIAAQAAgJgJAAQgEAAgCACQgDABAAADQAAAEADABIAHADQAJACADABQAGADAAAHQAAAHgFADQgFAEgJAAQgIAAgFgEg");
	this.shape_173.setTransform(119.525,31.325);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgDAgIAAgsIAHAAIAAAsgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_174.setTransform(116.25,30.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgOAaQgGgGAAgLQAAgKAGgHQAFgGAJgBQAIABAEAHIABAAIAAgZIAIAAIAAA/IgIAAIAAgGQgEAIgJgBQgJABgFgHgAgIgDQgDADAAAJQAAAHADAFQAEAFAFAAQAFAAAEgFQADgFAAgHQAAgIgDgFQgEgEgFAAQgFAAgEAFg");
	this.shape_175.setTransform(112.425,30.45);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_176.setTransform(104.825,31.275);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgLAXIAAgsIAHAAIAAAHIABAAQADgIAJAAIADAAIAAAIIgDgBQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_177.setTransform(100.875,31.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgFAEgEQAEgDAKgBIAMgBIAAgCQAAgLgKAAQgJAAgBAJIgIAAQABgHAEgEQAFgEAIAAQASAAAAASIAAARIABALIgIAAIAAgHQgFAIgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAADADACQACADAFAAQAFAAADgDQAEgEAAgHIAAgEIgLACg");
	this.shape_178.setTransform(96.475,31.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_179.setTransform(91.725,31.325);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgNAUQgFgFAAgHIAIAAQAAAKALAAQAEAAADgCQACgCAAgDQAAgEgDgCIgIgDIgLgCQgFgDAAgHQAAgGAFgEQAFgDAHAAQAIAAAEAEQAFAEAAAHIgIAAQAAgJgJAAQgEAAgCACQgDABAAADQAAAEADABIAHADQAJACADABQAGADAAAHQAAAHgFADQgFAEgJAAQgIAAgFgEg");
	this.shape_180.setTransform(84.425,31.325);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_181.setTransform(79.725,31.325);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgNASQgHgHABgLQgBgKAHgHQAFgGAJAAQAIAAAGAFQAFAEAAAIIgHAAQgBgFgDgDQgDgDgFAAQgFAAgEAFQgDAFAAAHQAAAIADAFQAEAFAFAAQAFAAADgEQADgDABgFIAHAAQAAAIgFAFQgGAFgIAAQgJAAgFgGg");
	this.shape_182.setTransform(74.85,31.325);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_183.setTransform(69.925,31.275);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgFAEgEQAEgDAKgBIAMgBIAAgCQAAgLgKAAQgJAAgBAJIgIAAQABgHAEgEQAFgEAIAAQASAAAAASIAAARIABALIgIAAIAAgHQgFAIgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAADADACQACADAFAAQAFAAADgDQAEgEAAgHIAAgEIgLACg");
	this.shape_184.setTransform(64.825,31.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_185.setTransform(61.5,30.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgFAEgEQAEgDAKgBIAMgBIAAgCQAAgLgKAAQgJAAgBAJIgIAAQABgHAEgEQAFgEAIAAQASAAAAASIAAARIABALIgIAAIAAgHQgFAIgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAADADACQACADAFAAQAFAAADgDQAEgEAAgHIAAgEIgLACg");
	this.shape_186.setTransform(57.925,31.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgGAeQgDgCgCgDIAAAGIgIAAIAAg/IAIAAIAAAZQAEgHAIgBQAKABAFAGQAEAHAAAKQAAALgEAGQgGAHgJgBQgDAAgEgCgAgJgEQgDAFAAAIQAAAHADAFQAEAFAFAAQAFAAAEgFQAEgFAAgHQAAgJgEgDQgEgFgFAAQgFAAgEAEg");
	this.shape_187.setTransform(53.25,30.45);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_188.setTransform(46.8,30.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_189.setTransform(44.65,30.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AAVAgIgHgTIgbAAIgHATIgJAAIAYg/IALAAIAYA/gAALAGIgCgGIgJgaIgJAaIgBAGIAVAAg");
	this.shape_190.setTransform(40.55,30.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_191.setTransform(33.875,33.075);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_192.setTransform(30.325,31.275);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_193.setTransform(25.225,31.325);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgUAgIAAg9IAIAAIAAAGQACgDAEgDQAEgCAEAAQAIAAAFAHQAGAGAAALQAAAKgGAHQgFAGgIAAQgEAAgEgCQgEgCgCgDIAAAXgAgIgUQgEAFAAAIQAAAHAEAFQADAFAFAAQAGAAADgFQADgFABgHQgBgIgDgEQgDgFgGAAQgFAAgDAEg");
	this.shape_194.setTransform(20.35,32.075);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_195.setTransform(15.075,31.325);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_196.setTransform(7.375,31.325);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_197.setTransform(3.375,30.775);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AAMAXIgMgTIgLATIgKAAIARgXIgPgWIAJAAIAKAQIALgQIAJAAIgPAWIARAXg");
	this.shape_198.setTransform(240.675,20.775);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgGAEgDQAEgDAKgBIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgHAEgDQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAAEADACQACACAFAAQAFAAADgDQAEgFAAgHIAAgDIgLACg");
	this.shape_199.setTransform(236.025,20.75);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AAYAXIAAgaQAAgNgJAAQgFAAgDAEQgDAEAAAGIAAAZIgHAAIAAgcQAAgFgDgDQgCgDgEAAQgFAAgDAEQgDAEAAAHIAAAYIgIAAIAAgsIAHAAIAAAFIABAAQAEgGAJAAQAJAAADAIQAFgIAKAAQAPAAAAASIAAAbg");
	this.shape_200.setTransform(229.9,20.725);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgPAXQgGgIAAgPQAAgOAGgJQAFgIAKAAQALAAAFAIQAGAJAAAOQAAAPgGAIQgFAJgLAAQgKAAgFgJgAgMAAQAAAYAMAAQANAAAAgYQAAgXgNAAQgMAAAAAXg");
	this.shape_201.setTransform(220.275,20.025);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgPAXQgGgIAAgPQAAgOAGgJQAFgIAKAAQALAAAFAIQAGAJAAAOQAAAPgGAIQgFAJgLAAQgKAAgFgJgAgMAAQAAAYAMAAQANAAAAgYQAAgXgNAAQgMAAAAAXg");
	this.shape_202.setTransform(215.225,20.025);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgPAXQgGgIAAgPQAAgOAGgJQAFgIAKAAQALAAAFAIQAGAJAAAOQAAAPgGAIQgFAJgLAAQgKAAgFgJgAgMAAQAAAYAMAAQANAAAAgYQAAgXgNAAQgMAAAAAXg");
	this.shape_203.setTransform(210.175,20.025);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgEAMIADgMIgDAAIAAgLIAJAAIAAALIgEAMg");
	this.shape_204.setTransform(206.65,23.175);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgPAXQgGgIAAgPQAAgOAGgJQAFgIAKAAQALAAAFAIQAGAJAAAOQAAAPgGAIQgFAJgLAAQgKAAgFgJgAgMAAQAAAYAMAAQANAAAAgYQAAgXgNAAQgMAAAAAXg");
	this.shape_205.setTransform(203.125,20.025);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgUAfIAAgCQAAgJADgFQAEgHALgGQAHgDADgDQADgDAAgGQAAgEgDgDQgDgCgFAAQgKgBAAAMIgJAAQABgJAFgFQAFgFAIAAQAJAAAGAEQAEAGAAAHQABAIgFAEQgDADgJAFIgLAJQgDAEABAEIAfAAIAAAHg");
	this.shape_206.setTransform(198.05,19.95);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgUAfIAAgCQAAgJADgFQAEgHALgGQAHgDADgDQADgDAAgGQAAgEgDgDQgDgCgFAAQgKgBAAAMIgJAAQAAgJAGgFQAFgFAJAAQAIAAAGAEQAEAGAAAHQAAAIgEAEQgEADgIAFIgLAJQgCAEAAAEIAfAAIAAAHg");
	this.shape_207.setTransform(193,19.95);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgCAnIAAgIQgTgCAAgTIAJAAQAAANAKACIAAgXQgJgCgDgCQgFgFgBgHQABgIAEgEQAFgEAIgBIAAgHIAFAAIAAAHQARABAAATIgIAAQAAgLgJgCIAAAVQAJACADACQAHAEAAAJQgBAHgFAFQgFAEgIABIAAAIgAADAZQAKgBAAgKQAAgEgCgDIgIgDgAgMgPQABAEACACQACACAFACIAAgTQgJAAgBAJg");
	this.shape_208.setTransform(188,20.05);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgOAaQgGgHAAgKQAAgKAGgHQAFgGAJAAQAIAAAEAHIABAAIAAgZIAIAAIAAA/IgIAAIAAgGQgEAHgJAAQgJAAgFgGgAgIgDQgDADAAAJQAAAIADAEQAEAFAFAAQAFAAAEgFQADgEAAgIQAAgJgDgEQgEgEgFAAQgFAAgEAFg");
	this.shape_209.setTransform(179.525,19.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_210.setTransform(174.575,20.725);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgGAEgDQAEgDAKgBIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgHAEgDQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAAEADACQACACAFAAQAFAAADgDQAEgFAAgHIAAgDIgLACg");
	this.shape_211.setTransform(169.475,20.75);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_212.setTransform(161.475,20.725);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgDAgIAAgsIAHAAIAAAsgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_213.setTransform(157.8,19.85);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AAYAXIAAgaQAAgNgJAAQgFAAgDAEQgDAEAAAGIAAAZIgHAAIAAgcQAAgFgDgDQgCgDgEAAQgFAAgDAEQgDAEAAAHIAAAYIgIAAIAAgsIAHAAIAAAFIABAAQAEgGAJAAQAJAAADAIQAFgIAKAAQAPAAAAASIAAAbg");
	this.shape_214.setTransform(152.85,20.725);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgPAXQgGgIAAgPQAAgOAGgJQAFgIAKAAQALAAAFAIQAGAJAAAOQAAAPgGAIQgFAJgLAAQgKAAgFgJgAgMAAQAAAYAMAAQANAAAAgYQAAgXgNAAQgMAAAAAXg");
	this.shape_215.setTransform(143.225,20.025);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgPAXQgGgIAAgPQAAgOAGgJQAFgIAKAAQALAAAFAIQAGAJAAAOQAAAPgGAIQgFAJgLAAQgKAAgFgJgAgMAAQAAAYAMAAQANAAAAgYQAAgXgNAAQgMAAAAAXg");
	this.shape_216.setTransform(138.175,20.025);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgPAXQgGgIAAgPQAAgOAGgJQAFgIAKAAQALAAAFAIQAGAJAAAOQAAAPgGAIQgFAJgLAAQgKAAgFgJgAgMAAQAAAYAMAAQANAAAAgYQAAgXgNAAQgMAAAAAXg");
	this.shape_217.setTransform(133.125,20.025);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AgEAMIADgMIgDAAIAAgLIAJAAIAAALIgEAMg");
	this.shape_218.setTransform(129.6,23.175);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AADAeIAAgrIgNAAIAAgGQAHAAADgDQADgCABgFIAHAAIAAA7g");
	this.shape_219.setTransform(125.575,20.025);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AgCAnIAAgIQgTgCAAgTIAIAAQABANAKACIAAgXQgIgCgEgCQgFgFgBgHQABgIAEgEQAFgEAIgBIAAgHIAFAAIAAAHQARABAAATIgIAAQAAgLgJgCIAAAVQAJACADACQAHAEAAAJQgBAHgFAFQgFAEgIABIAAAIgAADAZQAKgBAAgKQAAgEgCgDIgIgDgAgMgPQABAEACACQACACAFACIAAgTQgKAAAAAJg");
	this.shape_220.setTransform(121.05,20.05);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_221.setTransform(114.325,22.525);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_222.setTransform(110.825,20.775);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgOASQgFgHgBgLQABgKAFgHQAHgGAIAAQAIAAAGAFQAFAEAAAIIgIAAQAAgFgDgDQgDgDgFAAQgFAAgDAFQgEAFAAAHQAAAIAEAFQADAFAFAAQAFAAADgEQADgDAAgFIAIAAQAAAIgFAFQgGAFgIAAQgIAAgHgGg");
	this.shape_223.setTransform(105.95,20.775);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgDAgIAAgsIAHAAIAAAsgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_224.setTransform(102.5,19.85);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_225.setTransform(99.925,20.225);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_226.setTransform(96.025,20.775);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_227.setTransform(90.975,20.725);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_228.setTransform(83.675,20.225);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgSAEIAAgaIAIAAIAAAaQAAANAKAAQAEAAAEgEQADgEAAgGIAAgZIAIAAIAAAsIgIAAIAAgGQgEAHgJAAQgQAAAAgTg");
	this.shape_229.setTransform(79.725,20.825);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_230.setTransform(74.625,20.775);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AALAgIAAgbQAAgMgKAAQgFAAgDAEQgDADAAAGIAAAaIgIAAIAAg/IAIAAIAAAYQAEgHAIAAQARABAAARIAAAcg");
	this.shape_231.setTransform(69.575,19.85);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_232.setTransform(65.475,20.225);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AgDAgIAAgsIAHAAIAAAsgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_233.setTransform(63.05,19.85);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AALAXIgGgUIgEgTIgBAAIgEATIgGAUIgLAAIgMgtIAIAAIAFATIAFAUIAFgTIAGgUIAKAAIAFAUIAFATIAAAAIAGgUIAEgTIAIAAIgMAtg");
	this.shape_234.setTransform(58.5,20.775);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_235.setTransform(49.375,20.775);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AgMAcQgFgEgBgGIAJAAQAAAEACACQADACAEAAQANAAAAgOIAAgFIgBAAQgEAHgIAAQgJAAgFgGQgGgGABgKQgBgLAGgGQAFgGAJAAQAIAAAEAIIABAAIAAgHIAHAAIAAAqQABAUgVAAQgHAAgFgEgAgIgUQgDAFAAAHQAAAIADADQAEAFAEAAQAGAAADgFQAEgDAAgIQAAgIgEgEQgDgFgGAAQgEAAgEAFg");
	this.shape_236.setTransform(44.15,21.575);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_237.setTransform(39.225,20.725);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgGAEgDQAEgDAKgBIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgHAEgDQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAAEADACQACACAFAAQAFAAADgDQAEgFAAgHIAAgDIgLACg");
	this.shape_238.setTransform(34.125,20.75);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AALAgIAAgbQAAgMgKAAQgFAAgDAEQgDADAAAGIAAAaIgIAAIAAg/IAIAAIAAAYQAEgHAIAAQARABAAARIAAAcg");
	this.shape_239.setTransform(29.325,19.85);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AgNASQgHgHAAgLQAAgKAHgHQAFgGAJAAQAIAAAGAFQAFAEABAIIgIAAQgBgFgDgDQgDgDgFAAQgFAAgDAFQgEAFAAAHQAAAIAEAFQADAFAFAAQAFAAADgEQADgDABgFIAIAAQgBAIgFAFQgGAFgIAAQgJAAgFgGg");
	this.shape_240.setTransform(24.3,20.775);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AgTAfIAAgHIAEABQAFAAACgCQACgCADgHIgSgsIAJAAIAMAjIAAAAIANgjIAJAAIgTAuQgDAJgDADQgEADgHAAIgFAAg");
	this.shape_241.setTransform(16.625,21.625);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgHQAAgGAEgDQAEgDAKgBIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgHAEgDQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAAEADACQACACAFAAQAFAAADgDQAEgFAAgHIAAgDIgLACg");
	this.shape_242.setTransform(12.025,20.75);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AAYAXIAAgaQAAgNgJAAQgFAAgDAEQgDAEAAAGIAAAZIgHAAIAAgcQAAgFgDgDQgCgDgEAAQgFAAgDAEQgDAEAAAHIAAAYIgIAAIAAgsIAHAAIAAAFIABAAQAEgGAJAAQAKAAACAIQAFgIAKAAQAPAAAAASIAAAbg");
	this.shape_243.setTransform(5.9,20.725);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AgOAaQgGgHAAgLQAAgJAGgHQAFgHAJABQAIgBAEAIIABAAIAAgYIAIAAIAAA/IgIAAIAAgHQgEAHgJAAQgJAAgFgGgAgIgDQgDAEAAAHQAAAIADAGQAEAEAFAAQAFAAAEgEQADgGAAgIQAAgHgDgEQgEgFgFAAQgFAAgEAFg");
	this.shape_244.setTransform(240.225,9.35);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_245.setTransform(235.275,10.175);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgGAEgEQAEgCAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAADADADQACACAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_246.setTransform(230.175,10.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AgUAfIAAgCQAAgJADgFQAEgGALgHQAHgDADgDQADgEAAgFQAAgEgDgDQgDgDgFAAQgKAAAAAMIgJAAQAAgJAGgFQAFgFAJAAQAIAAAGAEQAEAFAAAIQAAAHgEAGQgEACgIAFIgLAJQgCADAAAFIAfAAIAAAHg");
	this.shape_247.setTransform(222.25,9.4);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AgUAfIAAgCQAAgJAEgFQADgGALgHQAHgDADgDQADgEAAgFQAAgEgDgDQgDgDgFAAQgKAAAAAMIgJAAQAAgJAGgFQAFgFAJAAQAIAAAFAEQAGAFgBAIQAAAHgEAGQgEACgIAFIgLAJQgCADAAAFIAfAAIAAAHg");
	this.shape_248.setTransform(217.2,9.4);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgQAmIAahLIAHAAIgaBLg");
	this.shape_249.setTransform(212.55,9.55);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AgPAaQgFgFAAgJIAJAAQAAAMALAAQAFAAAEgCQAEgDAAgFQAAgLgOAAIgCAAIAAgGIACAAQAFAAAEgDQADgDAAgEQAAgFgDgDQgDgDgFAAQgLAAAAAMIgIAAQAAgIAFgGQAFgFAJAAQAJAAAGAFQAFAEAAAIQAAAKgLAEQAMADAAALQAAAIgGAFQgGAFgJAAQgJAAgGgGg");
	this.shape_250.setTransform(208.05,9.475);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AgQAmIAahLIAHAAIgaBLg");
	this.shape_251.setTransform(203.4,9.55);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgOAbQgGgFAAgIQAAgMAMgCQgLgEAAgKQAAgHAGgFQAFgFAIAAQAJAAAFAFQAGAFAAAHQAAAKgKAEQALACAAAMQAAAIgGAFQgFAFgKAAQgIAAgGgFgAgIAGQgEADAAAEQAAAFAEADQADADAFAAQAGAAADgDQAEgDAAgFQAAgEgEgDQgDgDgGAAQgFAAgDADgAgIgVQgDADAAAEQAAAFADADQAEACAEAAQAFAAAEgCQADgDAAgFQAAgEgDgDQgEgDgFAAQgEAAgEADg");
	this.shape_252.setTransform(198.925,9.475);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AgEAgIAAgmIgIAAIAAgGIAIAAIAAgGQAAgNAMAAIAFAAIAAAGIgDAAQgHAAAAAIIAAAFIAJAAIAAAGIgJAAIAAAmg");
	this.shape_253.setTransform(191.975,9.275);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AgPASQgGgHAAgLQAAgKAGgHQAGgGAJAAQAKAAAGAGQAGAHAAAKQAAALgGAHQgGAGgKAAQgJAAgGgGgAgJgMQgDAFAAAHQAAAIADAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_254.setTransform(188.075,10.225);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AgNAUQgFgFAAgHIAIAAQAAAKALAAQAEAAADgCQACgCAAgDQAAgEgDgCIgIgDIgLgCQgFgDAAgHQAAgGAFgEQAFgDAHAAQAIAAAEAEQAFAEAAAHIgIAAQAAgJgJAAQgEAAgCACQgDABAAADQAAAEADABIAHADQAJACADABQAGADAAAHQAAAHgFADQgFAEgJAAQgIAAgFgEg");
	this.shape_255.setTransform(180.275,10.225);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgGAEgEQAEgCAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAADADADQACACAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_256.setTransform(175.575,10.2);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_257.setTransform(167.725,10.225);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_258.setTransform(163.775,9.675);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgGAEgEQAEgCAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAADADADQACACAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_259.setTransform(159.925,10.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAHIABAAQADgHAJAAIADAAIAAAHIgDAAQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_260.setTransform(156.325,10.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AgSAEIAAgaIAIAAIAAAaQAAANAKAAQAEAAAEgEQADgEAAgGIAAgZIAIAAIAAAsIgIAAIAAgGQgEAHgJAAQgQAAAAgTg");
	this.shape_261.setTransform(151.825,10.275);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AgNASQgHgHABgLQgBgKAHgHQAFgGAJAAQAIAAAGAFQAFAEAAAIIgHAAQgBgFgDgDQgDgDgFAAQgFAAgEAFQgDAFAAAHQAAAIADAFQAEAFAFAAQAFAAADgEQADgDABgFIAHAAQAAAIgFAFQgGAFgIAAQgJAAgFgGg");
	this.shape_262.setTransform(146.85,10.225);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AgOASQgFgHAAgLQAAgKAFgHQAHgGAIAAQAJAAAFAFQAFAEAAAIIgIAAQAAgFgDgDQgDgDgFAAQgFAAgDAFQgEAFAAAHQAAAIAEAFQADAFAFAAQAFAAADgEQADgDAAgFIAIAAQAAAIgFAFQgFAFgJAAQgIAAgHgGg");
	this.shape_263.setTransform(142.05,10.225);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgGAEgEQAEgCAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAADADADQACACAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_264.setTransform(137.175,10.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AgJAoQAKgTAAgVQAAgUgKgTIAHAAQAMASAAAVQAAAWgMASg");
	this.shape_265.setTransform(130.425,9.825);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AgDAgIAAgbIgXgkIAJAAIAIANIAJARIAKgRIAIgNIAJAAIgXAkIAAAbg");
	this.shape_266.setTransform(126.475,9.3);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AgVAgIAAg/IAVAAQALAAAFAFQAGAGAAAIQAAAJgGAEQgFAFgLABIgNAAIAAAZgAgNAAIANAAQAOAAAAgMQAAgMgOAAIgNAAg");
	this.shape_267.setTransform(121.275,9.3);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AAVAgIgHgTIgbAAIgHATIgJAAIAYg/IAKAAIAZA/gAAMAFIgCgFIgKgZIgJAZIgCAFIAXAAg");
	this.shape_268.setTransform(115.2,9.3);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AADAoQgLgSgBgWQABgVALgSIAGAAQgJATAAAUQAAAVAJATg");
	this.shape_269.setTransform(110.95,9.825);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AgOAaQgGgHAAgLQAAgJAGgHQAFgHAJABQAIgBAEAIIABAAIAAgYIAIAAIAAA/IgIAAIAAgHQgEAHgJAAQgJAAgFgGgAgIgDQgDAEAAAHQAAAIADAGQAEAEAFAAQAFAAAEgEQADgGAAgIQAAgHgDgEQgEgFgFAAQgFAAgEAFg");
	this.shape_270.setTransform(103.725,9.35);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_271.setTransform(100.25,9.3);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_272.setTransform(96.675,10.225);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AgDAgIAAgtIAHAAIAAAtgAgDgWIAAgJIAHAAIAAAJg");
	this.shape_273.setTransform(93.15,9.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AgDAgIAAgbIgXgkIAJAAIAIANIAJARIAKgRIAIgNIAJAAIgXAkIAAAbg");
	this.shape_274.setTransform(89.325,9.3);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_275.setTransform(80.975,10.225);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AgMAcQgFgEgBgGIAIAAQABAEACACQAEACADAAQANAAAAgOIAAgFIAAAAQgGAHgHAAQgJAAgFgGQgFgGAAgKQAAgLAFgGQAFgGAJAAQAIAAAFAIIAAAAIAAgHIAHAAIAAAqQABAUgVAAQgHAAgFgEgAgIgUQgDAFAAAHQAAAIADADQADAFAFAAQAGAAADgFQAEgDAAgIQAAgIgEgEQgDgFgGAAQgFAAgDAFg");
	this.shape_276.setTransform(75.75,11.025);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgGAEgEQAEgCAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAADADADQACACAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_277.setTransform(70.875,10.2);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AgBAaQgDgDAAgIIAAgZIgIAAIAAgGIAIAAIAAgMIAHAAIAAAMIAJAAIAAAGIgJAAIAAAZIABAFQACACADAAIAEAAIAAAGIgFABQgHAAgCgDg");
	this.shape_278.setTransform(67.125,9.675);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_279.setTransform(63.225,10.175);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_280.setTransform(58.125,10.225);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AgNASQgHgHABgLQgBgKAHgHQAFgGAJAAQAIAAAGAFQAFAEAAAIIgHAAQgBgFgDgDQgDgDgFAAQgFAAgEAFQgDAFAAAHQAAAIADAFQAEAFAFAAQAFAAADgEQADgDABgFIAHAAQAAAIgFAFQgGAFgIAAQgJAAgFgGg");
	this.shape_281.setTransform(53.25,10.225);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AgLAXIAAgtIAHAAIAAAHIABAAQADgHAJAAIADAAIAAAHIgDAAQgGAAgDAEQgDAEAAAHIAAAXg");
	this.shape_282.setTransform(49.525,10.2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AgOARQgGgGAAgLQAAgKAGgHQAFgGAJAAQAIAAAFAEQAFAEACAIIABAJIghAAQAAAIAEAEQAEAEAEAAQAFAAAEgDQADgCABgEIAIAAQgCAGgFAFQgFAEgJAAQgJAAgFgHgAANgEQAAgGgEgEQgDgDgGAAQgEAAgEADQgDAEgBAGIAZAAIAAAAg");
	this.shape_283.setTransform(45.125,10.225);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AgVAgIAAg/IAVAAQALAAAFAFQAGAGAAAIQAAAJgGAEQgFAFgLABIgNAAIAAAZgAgNAAIANAAQAOAAAAgMQAAgMgOAAIgNAAg");
	this.shape_284.setTransform(40.225,9.3);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AgDAgIAAg/IAHAAIAAA/g");
	this.shape_285.setTransform(33,9.3);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AgPAUQgEgEAAgFQAAgGAEgEQAEgCAKgCIAMgCIAAgBQAAgLgKAAQgJAAgBAJIgIAAQABgGAEgEQAFgFAIAAQASAAAAARIAAARIABAMIgIAAIAAgGQgFAHgKAAQgHAAgFgEgAAAACQgGABgCACQgDABAAAEQAAADADADQACACAFAAQAFAAADgEQAEgDAAgIIAAgCIgLABg");
	this.shape_286.setTransform(29.425,10.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AgSAEIAAgaIAIAAIAAAaQAAANAKAAQAEAAAEgEQADgEAAgGIAAgZIAIAAIAAAsIgIAAIAAgGQgEAHgJAAQgQAAAAgTg");
	this.shape_287.setTransform(24.575,10.275);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_288.setTransform(19.475,10.175);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AALAXIAAgaQAAgNgKAAQgFAAgDAEQgDADAAAHIAAAZIgIAAIAAgsIAHAAIAAAGIABAAQAEgHAIAAQARAAAAASIAAAbg");
	this.shape_289.setTransform(14.325,10.175);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AAVAgIgHgTIgbAAIgHATIgJAAIAYg/IALAAIAYA/gAALAFIgCgFIgJgZIgJAZIgBAFIAVAAg");
	this.shape_290.setTransform(8.7,9.3);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AAAAEIgFALIgGgFIAJgJIgMgBIACgHIAKAFIAAgMIAGAAIgCAMIALgFIADAHIgMABIAIAJIgGAFg");
	this.shape_291.setTransform(3.85,7.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(88).call(this.frame_88).wait(1));

	// RATE
	this.instance = new lib.RATE();
	this.instance.setTransform(271.45,230.55,1.0702,1.0831,0,0,0,113.5,148.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89));

	// rule
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#34B8EB").s().p("A0TAeIAAg7MAonAAAIAAA7g");
	this.shape.setTransform(150,177.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(89));

	// HEAD
	this.instance_1 = new lib.HEAD();
	this.instance_1.setTransform(271.45,371.55,1.0702,1.0831,0,0,0,113.5,148.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89));

	// SUB
	this.instance_2 = new lib.SUB();
	this.instance_2.setTransform(271.45,438.25,1.0702,1.0831,0,0,0,113.5,148.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89));

	// CTA
	this.instance_3 = new lib.CTA();
	this.instance_3.setTransform(222.95,355.95,0.7316,0.7316,0,0,0,99.7,25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(89));

	// LEGAL
	this.instance_4 = new lib.LEGAL();
	this.instance_4.setTransform(129.55,525.3,1,1,0,0,0,102.9,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(89));

	// LOGO
	this.instance_5 = new lib.SeattleBankhorizwhitevector();
	this.instance_5.setTransform(151.2,473.6,1.75,1.75,0,0,0,64.7,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(89));

	// FDIC
	this.instance_6 = new lib.MemberFDICwhite();
	this.instance_6.setTransform(273.95,20.5,1,1,0,0,0,18.8,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(89));

	// BKGD
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#185975").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_1.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(89));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,150,300);
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