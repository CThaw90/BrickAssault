/**
 * Created by Chris on 1/11/2015.
 */
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

            platform.setDimensions(bounds.sizeAndPosition(platform, !platform.active));
            // console.log("Window Resizing!");
            // ball.dimensions=bounds.sizeAndPosition("ball");
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