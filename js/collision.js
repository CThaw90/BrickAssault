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
                              object: "LWall", x: wall.left, y: parseInt(pos.top)
                             };
                }
                else if (wall.right===parseInt(pos.left)+parseInt(pos.width) || wall.right < parseInt(pos.left)+parseInt(pos.width)) {
                    result = {details: String("Collided with right wall at x="+wall.right+" y="+parseInt(pos.top)),
                              object: "RWall", x: wall.right, y: parseInt(pos.top)
                             };
                }
                else if (wall.top===parseInt(pos.top) || wall.top > parseInt(pos.top)) {
                    result = {details: String("Collided with top wall at x="+pos.left+" y="+parseInt(wall.top)),
                              object: "TWall", x: parseInt(pos.left), y: wall.top
                             };
                }
                else if (wall.bottom===parseInt(pos.top)+pos.height || wall.bottom < parseInt(pos.top)+parseInt(pos.height)) {
                    result = {details: String("Collided with bottom wall at x="+pos.left+" y="+parseInt(wall.bottom)),
                              object: "BWall", x: parseInt(pos.left), y: wall.bottom
                             };
                }
            }
            else if (parseInt(this.objects[key].dimensions.top) <= parseInt(pos.top)+parseInt(pos.height) &&
                     parseInt(this.objects[key].dimensions.left) <= parseInt(pos.left)+parseInt(pos.width) &&
                     parseInt(this.objects[key].dimensions.left)+parseInt(this.objects[key].dimensions.width) >= parseInt(pos.left) &&
                     parseInt(this.objects[key].dimensions.top)+parseInt(this.objects[key].dimensions.height) > parseInt(pos.top)) {
                result = {details: String("Collided with "+this.objects[key].id+" at x="+parseInt(pos.left)+
                                          " y="+parseInt(this.objects[key].dimensions.top)), 
                          object: "Platform", x: parseInt(pos.left), y: parseInt(this.objects[key].dimensions.top)
                         };
            }
        }
        return result;
    };
}