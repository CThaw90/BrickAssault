/**
 * Created by Chris on 1/14/2015.
 */

function Platform() {
    this.object=document.getElementById("platform");
    this.name=String("platform");
    this.id=String("platform");
    this.dimensions=null;
    this.active=false;

    // Return a ball handle somewhere to see if it needs to 
    // move with the platform or its active already | ballHandle
    this.move=function(x) {
        var moved=0;
        var location=parseInt(this.dimensions.left);
        if (location+x > bounds.wall.left && location+x+parseInt(this.dimensions.width) < bounds.wall.right) {
            this.dimensions.left=String(parseInt(this.dimensions.left)+x)+"px";
            this.object.setAttribute("style", stringifyToCSS(this.dimensions));
            moved=x;
        } else if (location+x < bounds.wall.left && location!==bounds.wall.left) {
            this.dimensions.left=bounds.wall.left+"px";
            this.object.setAttribute("style", stringifyToCSS(this.dimensions));
            moved=bounds.wall.left-location;
        } else if (location+x+parseInt(this.dimensions.width) > bounds.wall.right 
                    && location+this.dimensions.width!==window.innerWidth) {
            this.dimensions.left=String(bounds.wall.right-parseInt(this.dimensions.width))+"px";
            this.object.setAttribute("style", stringifyToCSS(this.dimensions));
            moved=bounds.wall.right-(location+parseInt(this.dimensions.width));
        }
        
        return moved;
    };

	// Return the current location of the platform
	this.location=function() {
		var cssObject=this.object.getAttribute("style");
		return {object: "platform", x: parseInt(cssObject.left), y: parseInt(cssObject.top)};
	};

    this.setDimensions=function(dimensions) {
        this.dimensions=dimensions;
        this.object.setAttribute("style", stringifyToCSS(this.dimensions));
    };
}