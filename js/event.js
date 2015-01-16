/**
 * Created by Chris on 1/11/2015.
 */
var ENTER_KEY=13, SPACE_BAR=32;
var ballHandle=null;
var x= 0, y=strtPtY;

window.document.body.onkeypress=function(e) {
	switch (e.keyCode) {
		case ENTER_KEY:
			ballHandle=startBallMovement(x, y);
			break;
		case SPACE_BAR:
			ballHandle=startBallMovement(x, y);
			break;
		default :
			stopBallMovement(ballHandle);
			break;
	}
};

window.onresize=function() {
	calculateBounds();
};

window.onmousemove=function(event) {
	movePlatform
	x=event.x;

	//y=event.y;
};