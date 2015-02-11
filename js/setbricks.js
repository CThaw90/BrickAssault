/*
    Created By Chris 02/08/2015
    
    Function responsible for setting bricks in the
    level appropriate layout
*/
// A static list of all the available brick types
var types=["rb", "gb", "yb", "bb", "pb"];
var brickTypes={};

// An object that keeps track of all bricks by their ids
var bricks={};

// Sets and organizes the bricks according to their level
function SetBricks() {
    var dimensions={};
    createBrickTypes();
    
    // Creating Level one of Brick Assault
    createBrickSprite("rb-01");

    bricks["rb-01"]=new Brick("rb-01");
    var d=bounds.sizeAndPosition(bricks["rb-01"], true);
//    dimensions.left=bounds.wall.left+(bounds.length*.05);
//    dimensions.top=bounds.wall.top+(bounds.length*.35);
    dimensions.left=468;
    dimensions.top=235;
    
    dimensions.height=parseInt(d.height);
    dimensions.width=parseInt(d.width);
    dimensions.position=d.position;

    bricks["rb-01"].setDimensions(dimensions);
    collision.registerObject(bricks["rb-01"]);
    bricks["rb-01"].drawObject();
    
    dimensions={};
    
//    createBrickSprite("gb-01");
//    
//    bricks["gb-01"]=new Brick("gb-01");
//    var d=bounds.sizeAndPosition(bricks["gb-01"], true);
//    dimensions.left=bricks["rb-01"].left+bricks
}
        
function createBrickTypes() {
    
    for (var i=0; i < types.length; i++) {
        var type=types[i];
        brickTypes[type]=document.createElement("img");
        brickTypes[type].setAttribute("alt", "brick");
        brickTypes[type].setAttribute("class", "sprite-img");
        brickTypes[type].setAttribute("src", "img/"+type+".png");
    }
}

function createBrickSprite(id) {
    var type=id.split("-")[0];
    var div=document.createElement("div");
    div.setAttribute("id", id);
    div.setAttribute("class", "game-object");
//  div.setAttribute("style", "display: none");
    div.appendChild(brickTypes[type]);
    document.body.appendChild(div);
}