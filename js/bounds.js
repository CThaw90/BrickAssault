/**
 * Created by Chris on 1/11/2015.

    Browser Dimension Variables

    window.innerWidth
    window.innerHeight

    document.documentElement.scrollHeight
    document.documentElement.scrollWidth

    document.documentElement.offsetWidth
    document.documentElement.offsetHeight
    
    document.body.scrollHeight
    document.body.scrollWidth
 */
function bounds() {
    this.objectDimen={platform: {height: .04, width: .10}, ball: {height: .04, width: .04}};
    this.browserHeight=null, this.browserWidth=null;
    this.object=document.getElementById("boundary");

    // Pixel offset is contingent on the current
    // active window size of the browser
    this.pixelOffset=.99;

    this.sizeAndPosition = function(object, idle) {
        var h=this.browserHeight * this.objectDimen[object.id].height;
        var w=this.browserWidth * this.objectDimen[object.id].width;
        var l= idle ? (this.browserWidth-w) / 2 : object.dimensions.left;
        var t= idle ? this.browserHeight - h : object.dimensions.top;
        return {
            position: "absolute", top: t+"px", 
            left: l+"px", height: h+"px", width: w+"px"
        };
    };
    
    this.calculateBounds=function() {
        this.browserHeight=window.innerHeight * this.pixelOffset;
        this.browserWidth=window.innerWidth * this.pixelOffset;
    };

    this.calculateBounds();
}