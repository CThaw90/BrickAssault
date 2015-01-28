/**
 * Created by Chris on 1/11/2015.
 */
var boundary=document.getElementById("boundary");
var platform=document.getElementById("platform");
var ball=document.getElementById("ball");
var strtPtX, strtPtY;
var browserHeight, browserWidth;
var platformWidth=100;
function calculateBounds() {
    browserHeight = Math.max(
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
        document.body.offsetHeight,
        document.body.scrollHeight);

    browserWidth = Math.max(
        document.documentElement.scrollWidth,
        document.documentElement.offsetWidth,
        document.body.offsetWidth,
        document.body.scrollWidth);

    var strtPlatformX = (browserWidth/2)-40;
    var strtPlatformY = browserHeight-20;
    strtPtX = (browserWidth / 2);
    strtPtY = browserHeight-50;

    platform.setAttribute("style", "position: absolute; top: " + strtPlatformY + "px; left: " + strtPlatformX + "px; width: "+platformWidth+"px;");
    ball.setAttribute("style", "position: absolute; top: " + strtPtY + "px; left: " + strtPtX + "px;");
}
function bounds() {
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
    
    this.generateObjectPosition = function(objectWidth, objectHeight) {
        return {};
    };
}