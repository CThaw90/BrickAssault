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
function Bound() {
    this.objectDimen={platform: {height: .02, width: .10}, ball: {height: .03, width: .03}, brick: {height: .03, width: .03}};
    this.wall={left: null, top: null, right: null, bottom: null};
    this.browserHeight=null, this.browserWidth=null;
    this.object=document.getElementById("boundary");
    this.dimensions={position: "absolute"};
    this.id="bounds";
    this.length=null;
    this.offset=2;
    // Alignment orientation variable
    // False: aligned vertically.
    // True: aligned horizontally
    this.align=null;

    this.sizeAndPosition = function(object, idle) {
        var h=this.length * this.objectDimen[object.name].height;
        var w=this.length * this.objectDimen[object.name].width;
        var l= (idle ? (this.length-w) / 2 : parseInt(object.dimensions.left))+this.wall.left;
        var t= idle ? this.length-h : parseInt(object.dimensions.top);
        return {
            position: "absolute", top: t+"px", 
            left: l+"px", height: h+"px", width: w+"px"
        };
    };
    
    this.calculateBounds=function() {
        this.align=window.innerHeight > window.innerWidth;
        this.length=Math.min(window.innerHeight, window.innerWidth)-(this.offset*3);
        
        this.wall.left=this.align ? 0+this.offset : (window.innerWidth/2)-(this.length/2);
        this.wall.right=this.wall.left+this.length;
        
        this.wall.top=this.align ? (window.innerHeight/2)-(this.length/2) : 0 + this.offset;
        this.wall.bottom=this.wall.top+this.length;
        
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