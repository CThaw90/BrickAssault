/*
    This is the logical engine of the entire game.
*/
console.log("Game Starting...");
var bounds=new bounds(), 
    platform=new platform(),
    ball=new ball();

var events=new event(bounds, platform, ball);
events.launch();