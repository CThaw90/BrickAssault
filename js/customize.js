var ball,
    bounds,
    platform,
    collision,
    customObjects,
    event;

function customizedLevel() {
	var s=document.getElementById("startMessage");
    s.parentNode.removeChild(s);
    bounds=new Bound();
    event = new Event(bounds, undefined, undefined, undefined);

    bounds.drawGameSpace();
    event.launchCustomEvent(1);
    createObjects();
}

function createObjects() {
	// Calling the Create brick Type from setbricks.js
	createBrickTypes();

	customObjects={bb: {}, gb: {}, pb: {}, rb: {}, yb: {}};
	var count=1;
	for (var key in customObjects) {

		customObjects[key]=new Brick(key);
		var d=bounds.sizeAndPosition(customObjects[key], true);
		customObjects[key].dimensions.top=bounds.align ? bounds.length + (bounds.length*0.15) : (bounds.length*0.15)*count;
		customObjects[key].dimensions.left=bounds.align ? bounds.length + (bounds.length*0.15)*count : bounds.length+(bounds.length*0.15);
		customObjects[key].dimensions={height: parseInt(d.height)};
		customObjects[key].dimensions.width=parseInt(d.width);
		
		count+=1;
	}
}

function appendHorizontally() {

}

function appendVertically() {

}