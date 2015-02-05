/*
    This is the logical engine of the entire game.
*/
//var ball=new ball();
var bounds = new bounds();
window.onresize=function() {
    bounds.calculateBounds();
};
//var platform=new platform();
//var collision = new collision();
//var event = new event(bounds, platform, ball, collision);
//collision.registerObject(platform);
//collision.registerObject(ball);
//collision.registerObject(bounds);
//platform.setDimensions(bounds.sizeAndPosition(platform, true));
//ball.setDimensions(bounds.sizeAndPosition(ball, true));
//
//ball.initPosition(platform);
//event.launch();