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
    dimensions.left=bounds.wall.left+(bounds.length*.35);
    dimensions.top=bounds.wall.top+(bounds.length*.35);
    
    dimensions.height=parseInt(d.height);
    dimensions.width=parseInt(d.width);
    dimensions.position=d.position;

    bricks["rb-01"].setDimensions(dimensions);
    collision.registerObject(bricks["rb-01"]);
    bricks["rb-01"].drawObject();
    
    dimensions={};
    
    createBrickSprite("rb-02");
    bricks["rb-02"]=new Brick("rb-02");
    d=bounds.sizeAndPosition(bricks["rb-02"], true);
    dimensions.left=parseInt(bricks["rb-01"].dimensions.left)+parseInt(bricks["rb-01"].dimensions.width)+2;
    dimensions.top=parseInt(bricks["rb-01"].dimensions.top);

    dimensions.height=parseInt(d.height);
    dimensions.width=parseInt(d.width);
    dimensions.position=d.position;

    bricks["rb-02"].setDimensions(dimensions);
    collision.registerObject(bricks["rb-02"]);
    bricks["rb-02"].drawObject();

    dimensions={};

    createBrickSprite("rb-03");
    bricks["rb-03"]=new Brick("rb-03");
    d=bounds.sizeAndPosition(bricks["rb-03"], true);
    dimensions.left=parseInt(bricks["rb-02"].dimensions.left)+parseInt(bricks["rb-02"].dimensions.width)+2;
    dimensions.top=parseInt(bricks["rb-02"].dimensions.top);

    dimensions.height=parseInt(d.height);
    dimensions.width=parseInt(d.width);
    dimensions.position=d.position;

    bricks["rb-03"].setDimensions(dimensions);
    collision.registerObject(bricks["rb-03"]);
    bricks["rb-03"].drawObject();

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
    div.setAttribute("class", "game-object brick");
//  div.setAttribute("style", "display: none");
    div.appendChild(brickTypes[type].cloneNode());
    document.body.appendChild(div);
}