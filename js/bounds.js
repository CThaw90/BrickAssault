/**
 * Created by Chris on 1/11/2015.
 */
var boundary=document.getElementById("boundary");
var ball=document.getElementById("ball");
var strtPtX=(browserWidth / 2)-50;
var browserHeight, browserWidth;
function calculateBounds() {
    browserHeight=Math.max(
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
        document.body.offsetHeight,
        document.body.scrollHeight);

    browserWidth=Math.max(
        document.documentElement.scrollWidth,
        document.documentElement.offsetWidth,
        document.body.offsetWidth,
        document.body.scrollWidth);

    var strtPtX=(browserWidth / 2);
    var strtPtY=browserHeight-50;

    ball.setAttribute("style", "position: relative; top: "+strtPtY+"px; left: "+strtPtX+"px;");
}
