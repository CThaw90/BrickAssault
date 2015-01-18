/**
 * Created by Chris on 1/14/2015.
 */
var platform=document.getElementById("platform");
var weirdOffset=60, active=false;

function movePlatform(x) {

	var cssObject=objectifyCSS(platform.getAttribute("style"));
	var location=parseInt(cssObject.left);
	if (location+x > 0 && location+platformWidth+x < browserWidth) {
		cssObject.left=String(parseInt(cssObject.left)+x)+"px";
		platform.setAttribute("style", stringifyToCSS(cssObject));
	}
}

function activatePlatform() {
	if (!document.pointerLockElement) {
		boundary.requestPointerLock();
	}
}