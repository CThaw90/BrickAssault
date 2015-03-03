/**
 * Created by Chris on 1/11/2015.
 */
function Event(bounds, platform, ball, collision) {
    this.launch=function() {
        
        window.document.body.onkeydown=
        window.document.body.onkeypress=function(e) {
            var ENTER_KEY=13, SPACE_BAR=32, ESC_KEY=27;
            switch (e.keyCode) {
                case ENTER_KEY:
                	bounds.object.requestPointerLock();
                    break;
                    
                case SPACE_BAR:
                    if (ball.moving && e.type==="keydown") {
                        ball.stop();
                    } else if (platform.active && e.type==="keydown") {
                        ball.start(collision);
                    }
                    break;
                
                case ESC_KEY:
                	break;

                default:
                	// console.log(e);
                    break;
            }
        };
        
        window.onmousemove=function(e) {
            if (platform.active && ball.active) {
            	platform.move(e.webkitMovementX);
            } else if (platform.active && !ball.active) {
                ball.move(platform.move(e.webkitMovementX));
            }
        };
        
        window.document.addEventListener('webkitpointerlockchange', function() {
            platform.active = document.pointerLockElement!==null &&
            				  document.pointerLockElement!==undefined;
        });
        
        window.document.addEventListener('mozpointerlockchange', function() {
            platform.active = document.pointerLockElement!==null &&
            				  document.pointerLockElement!==undefined;
        });
        
        window.document.addEventListener('pointerlockchange', function() {
            platform.active = document.pointerLockElement!==null  &&
            			   	  document.pointerLockElement!==undefined;
        });
    };

    this.launchCustomEvent=function(objects) {
        window.document.addEventListener('pointerlockchange', deselect);
        window.document.addEventListener('webkitpointerlockchange', deselect);
        window.document.addEventListener('mozpointerlockchange', deselect);
        window.document.onmousedown=function(e) {
            if (objects.selected) {
                var collisionStatus=detector.collision.detect(objects.selected.dimensions);
                if (collisionStatus) {
                    var left=objects.selected.dimensions.left,
                        top=objects.selected.dimensions.top;
                    objects.selected.remove();
                    console.log(e);
                    var typeId=collisionStatus.object.id;
                    objects.selected=new Brick(Object.keys(bricks).length+typeId);
                    objects.selected.object=createBrickSprite(objects.selected.id, typeId);
                    objects.selected.setDimensions(bounds.sizeAndPosition(objects.selected, true));
                    objects.selected.dimensions.left=left;
                    objects.selected.dimensions.top=top;
                    objects.selected.drawObject();
                } else if (parseInt(objects.selected.dimensions.left) > bounds.wall.left
                        && parseInt(objects.selected.dimensions.left)+parseInt(objects.selected.dimensions.width) < bounds.wall.right
                        && parseInt(objects.selected.dimensions.top) > bounds.wall.top
                        && parseInt(objects.selected.dimensions.top)+parseInt(objects.selected.dimensions.height) < bounds.wall.bottom){
                    var brick=objects.selected.object.cloneNode(true);
                    var left=objects.selected.dimensions.left,
                        top=objects.selected.dimensions.top;
                    bricks[brick.id]=new Brick(brick.id);
                    detector.collision.registerObject(bricks[brick.id]);
                    bricks[brick.id].object=brick;
                    bricks[brick.id].setDimensions(objects.selected.dimensions);
                    document.body.appendChild(brick);
                    bricks[brick.id].drawObject();

                    var typeId=brick.id.replace(parseInt(brick.id), "");
                    objects.selected=new Brick(Object.keys(bricks).length+typeId);
                    objects.selected.object=createBrickSprite(objects.selected.id, typeId);
                    objects.selected.setDimensions(bounds.sizeAndPosition(objects.selected, true));
                    objects.selected.dimensions.left=left;
                    objects.selected.dimensions.top=top;
                    objects.selected.drawObject();
                }
            }
        };
        for (var key in objects) {
            objects[key].object.onclick=function(e) {
                //console.log(e.target.parentNode.id);
                var typeId= e.target.dataset.typeid;
                objects.selected=new Brick(Object.keys(bricks).length+typeId);
                objects.selected.object=createBrickSprite(objects.selected.id, typeId);
                objects.selected.dimensions=bounds.sizeAndPosition(objects.selected, true);
                objects.selected.dimensions.left=e.x;
                objects.selected.dimensions.top= e.y;
                objects.selected.drawObject();
                if (!document.pointerLockElement) {
                    bounds.object.requestPointerLock();
                }
                window.document.onmousemove=function(e) {
                    if (objects.selected) {
                        objects.selected.dimensions.left=parseInt(objects.selected.dimensions.left)+ e.webkitMovementX;
                        objects.selected.dimensions.top=parseInt(objects.selected.dimensions.top)+ e.webkitMovementY;
                        objects.selected.drawObject();
                    }
                };
            };
        }

        function deselect() {
            if (objects.selected && !document.pointerLockElement) {
                objects.selected.remove();
                objects.selected=undefined;
            }
        }
    };

    this.killCustomEvents=function(objects) {
        window.document.onmousemove=
        window.document.onmousedown=null;
        for (var key in objects) {
            objects[key].object.onclick=null;
        }
    };
}