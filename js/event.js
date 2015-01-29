/**
 * Created by Chris on 1/11/2015.
 */
//var ENTER_KEY=13, SPACE_BAR=32;
//var ballHandle=null;
//var x= 0, y=strtPtY;
//
//window.document.body.onkeypress=function(e) {
//	switch (e.keyCode) {
//		case ENTER_KEY:
//			activatePlatform();
//			break;
//		case SPACE_BAR:
//			ballHandle=startBallMovement(x, y);
//			break;
//		default :
//			stopBallMovement(ballHandle);
//			break;
//	}
//};
//
//window.onresize=function() {
//	calculateBounds();
//};
//
//window.onmousemove=function(event) {
//	if (document.pointerLockElement) {
//		document.getElementById("startMessage").style.visibility="hidden";
//		movePlatform(event.webkitMovementX, ballHandle);
//		x=event.webkitMovementX;
//	} else {
//		document.getElementById("startMessage").style.visibility= "visible";
//	}
//};

function event(bounds, platform, ball) {
    this.launch=function() {
        
        window.document.body.onkeypress=function(e) {
            var ENTER_KEY=13, SPACE_BAR=32;
            switch (e.keyCode) {
                case ENTER_KEY:
                    // platform.activate();
                    // document.getElementById("boundary").requestPointerLock();
                    break;
                    
                case SPACE_BAR:
                    console.log("Space Bar Key Pressed");
                    break;
                
                default:
                    break;
            }
        };
        
        window.onresize=function() {
            bounds.calculateBounds();
        };
        
        window.onmouosemove=function(e) {
            if (platform.active) {
            }
        };
        
        window.document.addEventListener('webkitpointerlockchange', function() {
            console.log("Pointer Lock Change");
        });
        
        window.document.addEventListener('mozpointerlockchange', function() {
            console.log("Pointer Lock Change");
        });
        
        window.document.addEventListener('pointerlockchange', function() {
            console.log("Pointer Lock Change");
        });
    };
}