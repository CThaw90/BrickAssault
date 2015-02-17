/**
 * Created by Chris on 1/11/2015.
 */
function Event(bounds, platform, ball, collision) {
    this.launch=function() {
        
        window.document.body.onkeydown=
        window.document.body.onkeypress=function(e) {
            var ENTER_KEY=13, SPACE_BAR=32, ESC_KEY=27;
            switch (e.keyCode) {
                case ENTER_KEY:
                	bounds.object.requestPointerLock();
                    break;
                    
                case SPACE_BAR:
                    if (ball.moving && e.type==="keydown") {
                        ball.stop();
                    } else if (e.type==="keydown") {
                        ball.start(collision);
                    }
                    break;
                
                case ESC_KEY:
                	console.log("Escape Key Pressed");
                	break;

                default:
                	// console.log(e);
                    break;
            }
        };
        
        window.onresize=function() {
        	bounds.calculateBounds();

            platform.setDimensions(bounds.sizeAndPosition(platform, !platform.active));
            ball.setDimensions(bounds.sizeAndPosition(ball, !ball.active));
            if (!ball.active) ball.initPosition(platform);
        };
        
        window.onmousemove=function(e) {
        	// console.log("Mouse Moving!");
            if (platform.active && ball.active) {
            	platform.move(e.webkitMovementX);
            } else if (platform.active && !ball.active) {
//                platform.move(e.webkitMovementX);
                ball.move(platform.move(e.webkitMovementX));
            }
        };
        
        window.document.addEventListener('webkitpointerlockchange', function() {
            // console.log("Pointer Lock Change");
            // console.log(document.pointerLockElement);
            platform.active = document.pointerLockElement!==null &&
            				  document.pointerLockElement!==undefined;
        });
        
        window.document.addEventListener('mozpointerlockchange', function() {
            // console.log(document.pointerLockElement);
            platform.active = document.pointerLockElement!==null &&
            				  document.pointerLockElement!==undefined;
        });
        
        window.document.addEventListener('pointerlockchange', function() {
            // console.log("Pointer Lock Change");
            // console.log(document.pointerLockElement);
            platform.active = document.pointerLockElement!==null  &&
            			   	  document.pointerLockElement!==undefined;
            // console.log(platform.active ? "Platform Active" : "Platform Inactive");
        });
    };
}