/* collision.js */
function collision() {
    this.objects = {};

    this.registerObject=function(object) {
        this.objects[object.id]=object;
    };

    this.detect=function(pos, object) {
        var result=false;
        if (object==="bounds") {
            console.log("Left Wall Coordinate "+this.objects[object].wall.left);
            console.log("Platform Position Left Coordinate"+pos);
            result = this.objects[object].wall.left <= pos && !result ? result : "bounds_left";
            resilt = this.objects[object].wall.right >= pos && !result ? result : "bounds_right";
//            result = this.objects[object].wall.top <= pos && !result ? result : "bounds_top";
//            result = this.objects[object].wall.bottom >= pos && !result ? result : "bounds_bottom";
        }
        
        return result;
    };
}