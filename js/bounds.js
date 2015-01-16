/**
 * Created by Chris on 1/11/2015.
 */
var boundary=document.getElementById("boundary");
var platform=document.getElementById("platform");
var ball=document.getElementById("ball");
var strtPtX, strtPtY;
var browserHeight, browserWidth;
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

    var strtPlatformX = (browserWidth/2)-60;
    var strtPlatformY = browserHeight-35;
    strtPtX = (browserWidth / 2);
    strtPtY = browserHeight-50;

    platform.setAttribute("style", "position: relative; top: " + strtPlatformY + "px; left: " + strtPlatformX + "px;");
    ball.setAttribute("style", "position: relative; top: " + strtPtY + "px; left: " + strtPtX + "px;");
}
