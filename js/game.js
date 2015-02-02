/*
    This is the logical engine of the entire game.
*/
var ball=new ball();
var bounds = new bounds();
var platform=new platform();
var event = new event(bounds, platform, ball);
var collision = new collision();
collision.registerObject(platform);
collision.registerObject(ball);
platform.setDimensions(bounds.sizeAndPosition(platform, true));
ball.setDimensions(bounds.sizeAndPosition(ball, true));

ball.initPosition(platform);
event.launch();