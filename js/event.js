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
                    } else if (platform.active && e.type==="keydown") {
                        ball.start(collision);
                    }
                    break;
                
                case ESC_KEY:
                	break;

                default:
                	// console.log(e);
                    break;
            }
        };
        
        window.onmousemove=function(e) {
            if (platform.active && ball.active) {
            	platform.move(e.webkitMovementX);
            } else if (platform.active && !ball.active) {
                ball.move(platform.move(e.webkitMovementX));
            }
        };
        
        window.document.addEventListener('webkitpointerlockchange', function() {
            platform.active = document.pointerLockElement!==null &&
            				  document.pointerLockElement!==undefined;
        });
        
        window.document.addEventListener('mozpointerlockchange', function() {
            platform.active = document.pointerLockElement!==null &&
            				  document.pointerLockElement!==undefined;
        });
        
        window.document.addEventListener('pointerlockchange', function() {
            platform.active = document.pointerLockElement!==null  &&
            			   	  document.pointerLockElement!==undefined;
        });
    };

    this.launchCustomEvent=function(objects) {

        window.onclick=function(e) {
            console.log(e);
        };
    };
}