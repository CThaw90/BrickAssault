/**
 * Created by Chris on 1/11/2015.
 */
//var up=true, right=true, left=false, down=false;
//var ball=document.getElementById("ball");
//var movement=1, moving=false;
//var ballBoundX, ballBoundY;

function ball(dimensions) {
    this.up=true, this.right=true, this.left=false, this.down=false;
    this.object=document.getElementById("ball");
    this.movement=1, this.moving=false;
    this.dimensions=dimensions;
    this.id=String("ball");
    this.handle=null;
    
    this.location=function() {
        var cssObject=this.object.getAttribute("style");
        return {object: "ball", x: parseInt(cssObject.left), y: parseInt(cssObject.top)};
    };
    
    this.start=function() {
        if (!this.moving) {
            this.moving=true;
            this.handle=window.setInterval(function() {
                this.continuousMovement();
            }, 1);
        }
    };
    
    this.stop=function() {
        if (this.moving && this.handle) {
            window.clearInterval(this.handle);
            this.moving=false;
        }
    };
    
    this.continuousMovement=function() {
        var cssObject=objectifyCSS(ball.getAttribute("style"));
        cssObject.left=parseInt(cssObject.left);
        cssObject.top=parseInt(cssObject.top);
        var moved=false;
        
        if (this.up && cssObject.top-this.movement > 0) {
            cssObject.top=String(cssObject.top-this.movement)+"px";
            moved=true;
        } else if (this.up) {
            this.down=true;
            this.up=false;
        }
        
        if (this.down && cssObject.top+this.movement < this.ybounds) {
            cssObject.top=String(cssObject.top+this.movement)+"px";
            moved=true;
        } else if (this.down) {
            this.down=false;
            this.up=true;
        }
        if (this.right && cssObject.left+this.movement < this.xbounds) {
            cssObject.left=String(cssObject.left+this.movement)+"px";
            moved=true;
        } else if (this.right) {
            this.right=false;
            this.left=true;
        }
        if (this.left && cssObject.left-this.movement > 0) {
            cssObject.left=String(cssObject.left-this.movement)+"px";
            moved=true;
        } else if (this.left) {
            this.right=true;
            this.left=false;
        }
        
        this.object.setAttribute("style", (moved) ? stringifyToCSS(cssObject) : this.object.getAttribute("style"));
    };

    this.setDimensions=function(dimensions) {
        this.dimensions=dimensions;
        this.object.setAttribute("style", stringifyToCSS(this.dimensions));
    };
    // this.move=function(x) {
    //     var cssObject=objectifyCSS(ball.getAttribute("style"));
    // };
    
    // this.moveLeft=function(x) {
    //     var cssObject=objectifyCSS(ball.getAttribute("style"));
    //     cssObject.left=String(parseInt(cssObject.left)-Math.abs(x)+"px");
    //     ball.setAttribute("style", stringifyToCSS(cssObject));
    // };
    
    // this.moveRight=function(x) {
    //     var cssObject=objectifyCSS(ball.getAttribute("style"));
    //     cssObject.left=String(parseInt(cssObject.left)+Math.abs(x))+"px";
    //     ball.setAttribute("style", stringifyToCSS(cssObject));
    // };
}