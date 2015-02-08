/**
 * Created by Chris on 1/11/2015.
 */
function ball() {
    // Determines the current direction of a moving ball object
    this.up=true, this.right=true, this.left=false, this.down=false;
    
    // Holds the DOM object around the ball sprite
    this.object=document.getElementById("ball");
    
    // Determines if the ball object is moving
    this.active=false;
    
    // Determines the number of pixels a ball 
    // object moves per frame
    this.movement=1;
    
    // Determines the x y coordinates and 
    // width and height of the ball object
    this.dimensions=null;
    
    // Identifier string for the object
    this.id=String("ball");
    
    // The collision detection object for
    // the ball trajectory
    this.detector=collision;
    
    // The current event id of an active ball
    this.handle=null;
    
    
    // Initializes the position over a ball 
    // centered over a platform
    this.initPosition=function(platform) {
        if (this.handle) 
            this.stop();
        
        this.dimensions.top = String(parseInt(this.dimensions.top)-parseInt(platform.dimensions.height))+"px";
        this.object.setAttribute("style", stringifyToCSS(this.dimensions));
        
    };
    
    // Specifies the location of an object
    this.location=function() {
        var cssObject=this.object.getAttribute("style");
        return {object: "ball", x: parseInt(cssObject.left), y: parseInt(cssObject.top)};
    };
    
    // Starts the trajectory movement of the ball
    this.start=function(detector) {
        if (!this.active) {
            this.active=true;
            this.handle=window.setInterval(traject, 1, this, detector);
        }
    };
    
    // Stops the trajectory movement of the ball
    this.stop=function() {
        if (this.active && this.handle) {
            window.clearInterval(this.handle);
            this.active = false;
        }
    };
    
    // Invokes the trajectory logic on the ball object
    this.traject=function(detector) {
        this.dimensions.left=parseInt(this.dimensions.left)+(this.left ? -1 : 1);
        this.dimensions.top=parseInt(this.dimensions.top)+(this.up ? -1 : 1);
        this.dimensions.height=parseInt(this.dimensions.height);
        this.dimensions.width=parseInt(this.dimensions.width);
        var moved=detector.detect(dimensions);
        if (moved) {
            console.log("Detected a collision @:");
            console.log(moved);
            switch (moved.object) {
                case "RWall":
                    this.left=true;
                    this.right=false;
                    break;
                case "TWall":
                    this.down=true;
                    this.up=false;
                    break;
                case "LWall":
                    this.left=false;
                    this.right=true;
                    break;
                case "BWall":
                    this.down=false;
                    this.up=true;
                    break;
                default:
                    this.stop();
                    break;
            }
//            this.stop();
        } else {
            this.drawObject();
        }
            
        
        return moved ? false : true;
    };
//    this.trajectory=function(detector) {
//        var cssObject=objectifyCSS(this.object.getAttribute("style"));
//        cssObject.left=parseInt(cssObject.left);
//        cssObject.top=parseInt(cssObject.top);
//        var moved=false;
//        
//        if (this.up && cssObject.top-this.movement > 0) {
//            cssObject.top=String(cssObject.top-this.movement)+"px";
//            moved=true;
//        } else if (this.up) {
//            this.down=true;
//            this.up=false;
//        }
//        
//        if (this.down && cssObject.top+this.movement < this.ybounds) {
//            cssObject.top=String(cssObject.top+this.movement)+"px";
//            moved=true;
//        } else if (this.down) {
//            this.down=false;
//            this.up=true;
//        }
//        if (this.right && cssObject.left+this.movement < this.xbounds) {
//            cssObject.left=String(cssObject.left+this.movement)+"px";
//            moved=true;
//        } else if (this.right) {
//            this.right=false;
//            this.left=true;
//        }
//        if (this.left && cssObject.left-this.movement > 0) {
//            cssObject.left=String(cssObject.left-this.movement)+"px";
//            moved=true;
//        } else if (this.left) {
//            this.right=true;
//            this.left=false;
//        }
//        
//        this.object.setAttribute("style", (moved) ? stringifyToCSS(cssObject) : this.object.getAttribute("style"));
//    };

    // Sets the dimensions of a ball object
    this.setDimensions=function(dimensions) {
        this.dimensions=dimensions;
        this.object.setAttribute("style", stringifyToCSS(this.dimensions));
    };

    // Moves the ball object left or right
    this.move=function(x) {
        var moved=false;
        var location=parseInt(this.dimensions.left);
        if (location+x > 0 && location+x+parseInt(this.dimensions.width) < window.innerWidth) {
            this.dimensions.left=String(parseInt(this.dimensions.left)+x)+"px";
            this.object.setAttribute("style", stringifyToCSS(this.dimensions));
            moved=true;
        } else if (location+x < 0 && location!==0) {
            this.dimensions.left="0px";
            this.object.setAttribute("style", stringifyToCSS(this.dimensions));
            moved=true;
        } else if (location+x+parseInt(this.dimensions.width) > window.innerWidth
                   && location+this.dimensions.width!==window.innerWidth) {
            this.dimensions.left=(window.innerWidth-parseInt(this.dimensions.width))+"px";
            this.object.setAttribute("style", stringifyToCSS(this.dimensions));
            moved=true;
        }
        
        return moved;
    };
    
    // Draws a sprite object to the DOM 
    // based on the dimensions attribute
    this.drawObject=function() {
//        console.log("Drawing...");
//        console.log(this.dimensions);
        this.dimensions.height=parseInt(this.dimensions.height)+"px";
        this.dimensions.width=parseInt(this.dimensions.width)+"px";
        this.dimensions.left=parseInt(this.dimensions.left)+"px";
        this.dimensions.top=parseInt(this.dimensions.top)+"px";
        
        this.object.setAttribute("style", stringifyToCSS(this.dimensions));
    };
}