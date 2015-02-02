/**
 * Created by Chris on 1/14/2015.
 */

function platform() {
    this.object=document.getElementById("platform");
    this.id=String("platform");
    this.dimensions=null;
    this.active=false;

    // Return a ball handle somewhere to see if it needs to 
    // move with the platform or its active already | ballHandle
    this.move=function(x) {
        var moved=0;
        var cssObject=objectifyCSS(this.object.getAttribute("style"));
        var location=parseInt(cssObject.left);
        if (location+x > 0 && location+x+parseInt(this.dimensions.width) < window.innerWidth) {
            cssObject.left=String(parseInt(cssObject.left)+x)+"px";
            this.object.setAttribute("style", stringifyToCSS(cssObject));
            moved=x;
        } else if (location+x < 0 && location!==0) {
            cssObject.left="0px";
            this.object.setAttribute("style", stringifyToCSS(cssObject));
            moved=0-location;
        } else if (location+x+parseInt(this.dimensions.width) > window.innerWidth 
                    && location+this.dimensions.width!==window.innerWidth) {
            cssObject.left=(window.innerWidth-parseInt(this.dimensions.width))+"px";
            this.object.setAttribute("style", stringifyToCSS(cssObject));
            moved=window.innerWidth-(location+parseInt(this.dimensions.width));
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

    console.log(bounds.browserHeight);
}