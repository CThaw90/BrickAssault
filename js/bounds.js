/**
 * Created by Chris on 1/11/2015.
 */
//var boundary=document.getElementById("boundary");
//var platform=document.getElementById("platform");
//var ball=document.getElementById("ball");
//var strtPtX, strtPtY;
//var browserHeight, browserWidth;
//var platformWidth=100;
//function calculateBounds() {
//    browserHeight = Math.max(
//        document.documentElement.scrollHeight,
//        document.documentElement.offsetHeight,
//        document.body.offsetHeight,
//        document.body.scrollHeight);
//
//    browserWidth = Math.max(
//        document.documentElement.scrollWidth,
//        document.documentElement.offsetWidth,
//        document.body.offsetWidth,
//        document.body.scrollWidth);
//
//    var strtPlatformX = (browserWidth/2)-40;
//    var strtPlatformY = browserHeight-20;
//    strtPtX = (browserWidth / 2);
//    strtPtY = browserHeight-50;
//
//    platform.setAttribute("style", "position: absolute; top: " + strtPlatformY + "px; left: " + strtPlatformX + "px; width: "+platformWidth+"px;");
//    ball.setAttribute("style", "position: absolute; top: " + strtPtY + "px; left: " + strtPtX + "px;");
//}
function bounds() {
    this.objectDimen={platform: {height: .04, width: .10}, ball: {height: .04, width: .04}};
    this.object=document.getElementById("boundary");
    
    this.browserHeight = Math.max(
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
        document.body.offsetHeight,
        document.body.scrollHeight);
    
    this.browserWidth = Math.max(
        document.documentElement.scrollWidth,
        document.documentElement.offsetWidth,
        document.body.offsetWidth,
        document.body.scrollWidth);
    
    this.sizeAndPosition = function(object) {
        var h=this.browserHeight * this.objectDimen[object].height;
        var w=this.browserWidth * this.objectDimen[object].width;
        var l=(this.browserWidth-w) / 2;
        var t=this.browserHeight - h;
        return {top: t, left: l, height: h, width: w};
    };
    
    this.calculateBounds=function() {
        console.log("Calculating bounds");
    };
}