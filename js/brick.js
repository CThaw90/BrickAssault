/*
    Created By Chris 02/08/2015
    Logical brick object in memory
*/
function Brick(id) {
    this.object=document.getElementById(id);
    this.name=String("brick");
    this.dimensions=null;
    this.id=id;

    this.setDimensions=function(dimensions) {
        this.dimensions=dimensions;
    };

    this.drawObject=function() {
        this.dimensions.height=parseInt(this.dimensions.height)+"px";
        this.dimensions.width=parseInt(this.dimensions.width)+"px";
        this.dimensions.left=parseInt(this.dimensions.left)+"px";
        this.dimensions.top=parseInt(this.dimensions.top)+"px";
        
        var css=stringifyToCSS(this.dimensions);
        this.object.setAttribute("style", css);
    };


}