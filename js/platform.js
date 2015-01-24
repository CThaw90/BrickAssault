/**
 * Created by Chris on 1/14/2015.
 */
var msg=document.getElementById("startMessage");
var platform=document.getElementById("platform");
var weirdOffset=60, active=false;

function movePlatform(x, ballHandle) {
	var platformMoved=false;
	var cssObject=objectifyCSS(platform.getAttribute("style"));
	var location=parseInt(cssObject.left);
	if (location+x > 0 && location+platformWidth+x < browserWidth) {
		cssObject.left=String(parseInt(cssObject.left)+x)+"px";
		platform.setAttribute("style", stringifyToCSS(cssObject));
		platformMoved=true;
	}

	if (ballHandle===null && platformMoved) {
		if (x > 0) moveBallRight(x);
		if (x < 0) moveBallLeft(Math.abs(x));
	}
}

function activatePlatform() {
	if (!document.pointerLockElement) {
		boundary.requestPointerLock();
		document.getElementById("startMessage").style.visibility=document.pointerLockElement ? "hidden" : "visible";
	}
}