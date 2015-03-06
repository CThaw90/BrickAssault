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

// Raw Data of a loaded JSON file
var content=null, level=null;

function setBrick(brick) {
    bricks[brick.id]=brick;
}

function removeBrick(id) {
    bricks[id].remove();
    delete bricks[id];
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

function createBrickSprite(id, type, hide) {
    var sprite=document.createElement("img");
    sprite.setAttribute("alt", "brick");
    sprite.setAttribute("class", "sprite-img");
    sprite.setAttribute("src", "img/"+type+".png");
    sprite.setAttribute("data-typeId", type);

    var div=document.createElement("div");
    div.setAttribute("id", id);
    div.setAttribute("class", "game-object brick");
    div.appendChild(sprite.cloneNode());
    if (!hide) document.body.appendChild(div);
    return div;
}

function loadFile() {
    var input=document.getElementById("level");
    var parsedFileName=input.files[0].name.split(".");
    if (!content && input.files.length && (input.files[0].type==="application/json" || (parsedFileName.length>1 && parsedFileName[1]==="json"))) {
        var r=new FileReader();
        r.onload=function(e) {
            content=e.target.result;
        }
        r.readAsText(input.files[0]);
        document.getElementById("loading").innerHTML="File Loaded";
    }
    else if (!content) {
        console.log("Error");
    }

}

// Sets and organizes the bricks according to their level
function loadLevel(level) {
    if (isNaN(level)) return;
    host=window.location.hostname;
    request=undefined;

    if (window.XMLHttpRequest) {
        request=new XMLHttpRequest();
    }
    switch (level) {
        case 1:
            if (host) {
                host = host==="localhost" ? host+"/BrickAssault" : host;
                request.open("GET", "http://"+host+"/json/levels/level1.json", false);
            }
            else return;
            break;
        default:
            return;
    }
    request.onreadystatechange=function() {
        if (request.readyState===4 && request.status===200) {
            content=request.responseText;
        }
    };

    request.send();
    loadData();
}
function loadData() {
    // try {
        level=JSON.parse(content);
        loadBrickTypes(level.level.config);
        drawLevelStage(level.level.layout);
    // } catch (SyntaxError) {
    //     console.log(SyntaxError);
    // }
}

function loadBrickTypes(config) {
    if (config.types) {
        var types=config.types
        for (var key in types) {
            brickTypes[key]=document.createElement("img");
            brickTypes[key].setAttribute("alt", "brick");
            brickTypes[key].setAttribute("class", "sprite-img");
            brickTypes[key].setAttribute("src", types[key]);
        }
    }
}

function drawLevelStage(layout) {
    // console.log(layout);
    var layoutCache={};
    for (var i=0; i < layout.length; i++) {
        // console.log(layout[i]);
        if (layoutCache[layout[i].id]) {
            console.log(layout[i].id+" already an existing id");
        }

        var div=document.createElement("div");
        layoutCache[layout[i].id]=layout[i];
        div.setAttribute("id", layout[i].id);
        div.setAttribute("class", "game-object brick");
        div.appendChild(brickTypes[layout[i].type].cloneNode());
        document.body.appendChild(div);


        bricks[layout[i].id]=new Brick(layout[i].id);
        var dimensions={};
        var d=bounds.sizeAndPosition(bricks[layout[i].id], true);

        dimensions.height=parseInt(d.height);
        dimensions.width=parseInt(d.width);
        dimensions.position=d.position;

        var positioning=layout[i].position;
        if (!positioning.left && !positioning.top) {
            if (positioning.rightOf && bricks[positioning.rightOf]) {
                var b=bricks[positioning.rightOf];
                dimensions.left=parseInt(b.dimensions.left)+parseInt(b.dimensions.width)+2;
                dimensions.top=parseInt(b.dimensions.top);
            }
            else if (positioning.leftOf && bricks[positioning.leftOf]) {
                var b=bricks[positioning.leftOf];
                dimensions.left=parseInt(b.dimensions.left)-parseInt(b.dimensions.width)-2;
                dimensions.top=parseInt(b.dimensions.top);
            }
            else if (positioning.above && bricks[positioning.above]) {
                var b=bricks[positioning.above];
                dimensions.top=parseInt(b.dimensions.top)-parseInt(b.dimensions.height)-2;
                dimensions.left=parseInt(b.dimensions.left);
            }
            else if (positioning.below && bricks[positioning.below]) {
                var b=bricks[positioning.below];
                dimensions.top=parseInt(b.dimensions.top)+parseInt(b.dimensions.height)+2;
                dimensions.left=parseInt(b.dimensions.left);
            } else {
                console.log("Level Syntax Error");
                console.log(positioning);
            }
        }
        else if (!isNaN(positioning.left) && !isNaN(positioning.top)) {
            if (positioning.left < 1) {
                dimensions.left=bounds.wall.left+(bounds.length*positioning.left);
            } else {
                dimensions.left=positioning.left;
            }

            if (positioning.top < 1) {
                dimensions.top=bounds.wall.top+(bounds.length*positioning.top);
            } else {
                dimensions.top=positioning.top;
            }
        }
        else {
            console.log("Level Syntax Error");
        }

        bricks[layout[i].id].setDimensions(dimensions);
        collision.registerObject(bricks[layout[i].id]);
        bricks[layout[i].id].drawObject();
    }
}
