/**
 * Created by Chris on 1/14/2015.
 */
//var msg=document.getElementById("startMessage");
//var platform=document.getElementById("platform");
//var weirdOffset=60, active=false;
//
//function movePlatform(x, ballHandle) {
//	var platformMoved=false;
//	var cssObject=objectifyCSS(platform.getAttribute("style"));
//	var location=parseInt(cssObject.left);
//	if (location+x > 0 && location+platformWidth+x < browserWidth) {
//		cssObject.left=String(parseInt(cssObject.left)+x)+"px";
//		platform.setAttribute("style", stringifyToCSS(cssObject));
//		platformMoved=true;
//	}
//
//	if (ballHandle===null && platformMoved) {
//		if (x > 0) moveBallRight(x);
//		if (x < 0) moveBallLeft(Math.abs(x));
//	}
//}
//
//function activatePlatform() {
//	if (!document.pointerLockElement) {
//		boundary.requestPointerLock();
//		document.getElementById("startMessage").style.visibility=document.pointerLockElement ? "hidden" : "visible";
//	}
//}

function platform(dimensions) {
    this.object=document.getElementById("platform");
    this.active=false;
    this.activate=function() {
        if (!document.pointerLockElement) {
            boundary.requestPointerLock();
            document.getElementById("startMessage").style.visibility=document.pointerLockElement ? "hidden" : "visible";
        }
    };
    // Return a ball handle somewhere to see if it needs to 
    // move with the platform or its moving already | ballHandle
    this.move=function(x) {
        var moved=false;
        var cssObject=objectifyCSS(this.object.getAttribute("style"));
        var location=parseInt(cssObject.left);
        if (location+x > 0 && location+platformWidth+x < browserWidth) {
            cssObject.left=String(parseInt(cssObject.left)+x)+"px";
            this.object.setAttribute("style", stringifyToCSS(cssObject));
            moved=true;
        }
        
        return moved;
    };
	// Return the current location of the platform
	this.location=function() {
		var cssObject=this.object.getAttribute("style");
		return {object: "platform", x: parseInt(cssObject.left), y: parseInt(cssObject.top)};
	};
}