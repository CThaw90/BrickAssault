/*
    This is the logical engine of the entire game.
*/
var ball,
    bounds,
    platform,
    collision,
    event;

function start() {
    var s=document.getElementById("startMessage");
    var l=document.getElementById("loading");
    s.parentNode.removeChild(s);
//    l.parentNode.removeChild(l);
    ball=new Ball();
    bounds = new Bound();
    platform=new Platform();
    collision = new Collision();
    event = new Event(bounds, platform, ball, collision);
    
    collision.registerObject(platform);
    collision.registerObject(ball);
    collision.registerObject(bounds);
    platform.setDimensions(bounds.sizeAndPosition(platform, true));
    ball.setDimensions(bounds.sizeAndPosition(ball, true));
    ball.initPosition(platform);
    if (content) { 
        loadData(); 
    } else { 
        loadLevel(1);
    }
    event.launch();
}