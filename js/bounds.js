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
    this.wall={left: null, top: null, right: null, bottom: null};
    this.browserHeight=null, this.browserWidth=null;
    this.object=document.getElementById("boundary");
    this.dimensions={position: "absolute"};
    this.length=null;
    this.offset=5;
    // Alignment orientation variable
    // False: aligned vertically.
    this.align=null;
    
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
        this.align=window.innerHeight > window.innerWidth;
        console.log("Align " + (this.align ? " Vertical" : "Horizontal") );
        this.length=Math.min(window.innerHeight, window.innerWidth)-this.offset;
        this.wall.bottom=this.length===window.innerHeight-this.offset ? (window.innerHeight-this.offset) : (window.innerHeight / 4);
        this.wall.top=this.length===window.innerHeight-this.offset ? (0) : ( (window.innerHeight*3) / 4);
        this.wall.right=this.length===window.innerWidth-this.offset ? (0) : ( (window.innerWidth * 3) / 4);
        this.wall.left=this.length===window.innerWidth-this.offset ? (window.innerWidth-this.offset) : (window.innerWidth / 4);
        
        this.browserHeight=window.innerHeight * this.pixelOffset;
        this.browserWidth=window.innerWidth * this.pixelOffset;
        
        this.dimensions.height=this.length+"px";
        this.dimensions.width=this.length+"px";
        
        this.dimensions.left=this.wall.left+"px";
        this.dimensions.top=this.wall.top+"px";
        
        this.drawGameSpace();
    };
    
    this.drawGameSpace=function() {
        var css=stringifyToCSS(this.dimensions);
        this.object.setAttribute("style", css);
    };
    
    this.calculateBounds();
}