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
    createObjects();

    event.launchCustomEvent(customObjects);
}

function createObjects() {
	// Calling the Create brick Type from setbricks.js
	createBrickTypes();

	customObjects={bb: {}, gb: {}, pb: {}, rb: {}, yb: {}};
	var count=1;
	for (var key in customObjects) {

		customObjects[key]=new Brick(key);
        customObjects[key].setDimensions(bounds.sizeAndPosition(customObjects[key], true));
		customObjects[key].dimensions.top=bounds.align ? bounds.wall.bottom + (bounds.length*0.1) : (bounds.length*0.15)*count;
		customObjects[key].dimensions.left=bounds.align ? (bounds.length*0.15)*count : bounds.wall.right+(bounds.length*0.1);
		customObjects[key].dimensions.height=parseInt(customObjects[key].dimensions.height);
		customObjects[key].dimensions.width=parseInt(customObjects[key].dimensions.width);
        customObjects[key].object=createBrickSprite(count, key);
        customObjects[key].drawObject();

		count+=1;
	}
}