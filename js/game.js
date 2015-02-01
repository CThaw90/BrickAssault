/*
    This is the logical engine of the entire game.
*/
var ball=new ball();
var bounds = new bounds();
var platform=new platform();
var event = new event(bounds, platform);
platform.setDimensions(bounds.sizeAndPosition(platform, true));
ball.setDimensions(bounds.sizeAndPosition(ball, true));

event.launch();