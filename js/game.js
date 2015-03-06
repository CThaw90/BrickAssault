/*
    This is the logical engine of the entire game.
*/
var ball,
    bounds,
    platform,
    collision,
    event;

function start(bricks) {
    var s=document.getElementById("startMessage");
    if (s) s.parentNode.removeChild(s);
    ball=new Ball();
    bounds = new Bound();
    platform=new Platform();
    collision=new Collision();
    event = new Event(bounds, platform, ball, collision);
    
    collision.registerObject(platform);
    collision.registerObject(ball);
    collision.registerObject(bounds);
    if (bricks) {
        for (var key in bricks) {
            collision.registerObject(bricks[key]);
        }
        
    }
    platform.setDimensions(bounds.sizeAndPosition(platform, true));
    ball.setDimensions(bounds.sizeAndPosition(ball, true));
    ball.initPosition(platform);
    if (content && !bricks) { 
        loadData(); 
    } else if (!bricks) { 
        loadLevel(1);
    }
    event.launch();
}