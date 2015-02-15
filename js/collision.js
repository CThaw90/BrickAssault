/* collision.js */
function Collision() {
    this.objects = {};

    this.registerObject=function(object) {
        this.objects[object.id]=object;
    };

    this.detect=function(pos) {
        var result=false;
        for (var key in this.objects) {
            if (key===pos.id) {}
            else if (key==="bounds") {
                var wall = this.objects[key].wall;
                if (wall.left===parseInt(pos.left) || wall.left > parseInt(pos.left)) {
                    result = {details: String("Collided with left wall at x="+wall.left+" y="+parseInt(pos.top)),
                              object: wall, x: wall.left, y: parseInt(pos.top), dir: 40
                             };
                }
                else if (wall.right===parseInt(pos.left)+parseInt(pos.width) || wall.right < parseInt(pos.left)+parseInt(pos.width)) {
                    result = {details: String("Collided with right wall at x="+wall.right+" y="+parseInt(pos.top)),
                              object: wall, x: wall.right, y: parseInt(pos.top), dir: 20
                             };
                }
                else if (wall.top===parseInt(pos.top) || wall.top > parseInt(pos.top)) {
                    result = {details: String("Collided with top wall at x="+pos.left+" y="+parseInt(wall.top)),
                              object: wall, x: parseInt(pos.left), y: wall.top, dir: 10
                             };
                }
                else if (wall.bottom===parseInt(pos.top)+pos.height || wall.bottom < parseInt(pos.top)+parseInt(pos.height)) {
                    result = {details: String("Collided with bottom wall at x="+pos.left+" y="+parseInt(wall.bottom)),
                              object: wall, x: parseInt(pos.left), y: wall.bottom, dir: 30
                             };
                }
            }
            else if (parseInt(this.objects[key].dimensions.top) <= parseInt(pos.top)+parseInt(pos.height) &&
                     parseInt(this.objects[key].dimensions.left) <= parseInt(pos.left)+parseInt(pos.width) &&
                     parseInt(this.objects[key].dimensions.left)+parseInt(this.objects[key].dimensions.width) >= parseInt(pos.left) &&
                     parseInt(this.objects[key].dimensions.top)+parseInt(this.objects[key].dimensions.height) > parseInt(pos.top)) {
                var vert=pos.top-parseInt(this.objects[key].dimensions.top), horz=pos.left-parseInt(this.objects[key].dimensions.left);
                // Specifies the location on which the collision occurred for the given object
                // 1: Top | 2: Right | 3: Bottom | 4: Left
                var direction=null;
                if (Math.abs(vert) > Math.abs(horz)) direction=vert < 0 ? 1 : 3;
                else if (Math.abs(vert) < Math.abs(horz)) direction=horz < 0 ? 2 : 4;
                direction = key==="platform" ? -1 : direction;
                result = {details: String("Collided with "+this.objects[key].id+" at x="+parseInt(pos.left)+
                                          " y="+parseInt(this.objects[key].dimensions.top)), 
                          object: this.objects[key], x: parseInt(pos.left), y: parseInt(this.objects[key].dimensions.top), dir: direction
                         };
            }
        }
        return result;
    };
}